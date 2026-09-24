/**
 * RIAZ HOME DECOR FANOOS LIGHT & DECOR
 * Shopify Theme Packaging Script (Pure Node.js - Zero External Dependencies)
 * Bundles the Online Store 2.0 theme folders into a zip file ready for Shopify Admin upload.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT_DIR = path.resolve(__dirname, '..');
const OUTPUT_ZIP = path.join(ROOT_DIR, 'riaz-home-decor-shopify-theme.zip');

const THEME_DIRS = [
  'assets',
  'config',
  'layout',
  'locales',
  'sections',
  'snippets',
  'templates'
];

// Fallback CRC32 computation
function getCrc32(buf) {
  if (typeof zlib.crc32 === 'function') {
    return zlib.crc32(buf);
  }
  let table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[n] = c;
  }
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ (-1)) >>> 0;
}

// Convert Date to MS-DOS date and time
function getDosDateTime(date = new Date()) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const dosTime = (hours << 11) | (minutes << 5) | (seconds >> 1);
  const dosDate = ((year - 1980) << 9) | (month << 5) | day;
  return { dosTime, dosDate };
}

// Recursively collect all files from target directories
function collectFiles(dir, baseDir = '') {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(baseDir, entry.name).replace(/\\/g, '/');

    if (entry.isDirectory()) {
      results = results.concat(collectFiles(fullPath, relPath));
    } else if (entry.isFile()) {
      results.push({ fullPath, zipPath: relPath });
    }
  }
  return results;
}

function buildZip() {
  console.log('Packaging Riaz Home Decor Shopify Online Store 2.0 Theme...');

  let filesToZip = [];
  for (const dirName of THEME_DIRS) {
    const dirPath = path.join(ROOT_DIR, dirName);
    if (fs.existsSync(dirPath)) {
      filesToZip = filesToZip.concat(collectFiles(dirPath, dirName));
    }
  }

  console.log(`Found ${filesToZip.length} theme files to package.`);

  const localChunks = [];
  const centralChunks = [];
  let currentOffset = 0;
  const { dosTime, dosDate } = getDosDateTime();

  for (const file of filesToZip) {
    const uncompressedData = fs.readFileSync(file.fullPath);
    const uncompressedSize = uncompressedData.length;
    const crc = getCrc32(uncompressedData);
    const compressedData = zlib.deflateRawSync(uncompressedData, { level: 9 });
    const compressedSize = compressedData.length;

    const pathBuf = Buffer.from(file.zipPath, 'utf8');

    // 1. Local File Header (30 bytes + filename)
    const localHeader = Buffer.alloc(30);
    localHeader.writeUInt32LE(0x04034b50, 0); // signature
    localHeader.writeUInt16LE(20, 4);         // version needed (2.0)
    localHeader.writeUInt16LE(0x0800, 6);     // flags: UTF-8 filename
    localHeader.writeUInt16LE(8, 8);          // compression: deflate
    localHeader.writeUInt16LE(dosTime, 10);    // mod time
    localHeader.writeUInt16LE(dosDate, 12);    // mod date
    localHeader.writeUInt32LE(crc, 14);        // crc32
    localHeader.writeUInt32LE(compressedSize, 18);
    localHeader.writeUInt32LE(uncompressedSize, 22);
    localHeader.writeUInt16LE(pathBuf.length, 26);
    localHeader.writeUInt16LE(0, 28);         // extra field length

    localChunks.push(localHeader, pathBuf, compressedData);

    // 2. Central Directory Header (46 bytes + filename)
    const centralHeader = Buffer.alloc(46);
    centralHeader.writeUInt32LE(0x02014b50, 0); // signature
    centralHeader.writeUInt16LE(20, 4);         // version made by
    centralHeader.writeUInt16LE(20, 6);         // version needed
    centralHeader.writeUInt16LE(0x0800, 8);     // flags: UTF-8
    centralHeader.writeUInt16LE(8, 10);         // compression: deflate
    centralHeader.writeUInt16LE(dosTime, 12);   // mod time
    centralHeader.writeUInt16LE(dosDate, 14);   // mod date
    centralHeader.writeUInt32LE(crc, 16);       // crc32
    centralHeader.writeUInt32LE(compressedSize, 20);
    centralHeader.writeUInt32LE(uncompressedSize, 24);
    centralHeader.writeUInt16LE(pathBuf.length, 28);
    centralHeader.writeUInt16LE(0, 30);         // extra field length
    centralHeader.writeUInt16LE(0, 32);         // comment length
    centralHeader.writeUInt16LE(0, 34);         // disk number start
    centralHeader.writeUInt16LE(0, 36);         // internal attrs
    centralHeader.writeUInt32LE(0x81A40000, 38); // external attrs (standard file permissions)
    centralHeader.writeUInt32LE(currentOffset, 42); // local header offset

    centralChunks.push(centralHeader, pathBuf);

    currentOffset += localHeader.length + pathBuf.length + compressedData.length;
  }

  const centralDirOffset = currentOffset;
  const centralDirBuffer = Buffer.concat(centralChunks);
  const centralDirSize = centralDirBuffer.length;

  // 3. End of Central Directory Record (22 bytes)
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);           // signature
  eocd.writeUInt16LE(0, 4);                    // disk number
  eocd.writeUInt16LE(0, 6);                    // disk with CD start
  eocd.writeUInt16LE(filesToZip.length, 8);    // entries on this disk
  eocd.writeUInt16LE(filesToZip.length, 10);   // total entries
  eocd.writeUInt32LE(centralDirSize, 12);      // size of CD
  eocd.writeUInt32LE(centralDirOffset, 16);    // offset of CD
  eocd.writeUInt16LE(0, 20);                   // comment length

  // Combine all buffers into final zip
  const finalZipBuffer = Buffer.concat([
    Buffer.concat(localChunks),
    centralDirBuffer,
    eocd
  ]);

  fs.writeFileSync(OUTPUT_ZIP, finalZipBuffer);

  const stats = fs.statSync(OUTPUT_ZIP);
  console.log(`\nSUCCESS: Theme archive created!`);
  console.log(`File: ${OUTPUT_ZIP}`);
  console.log(`Size: ${(stats.size / 1024).toFixed(1)} KB`);
  console.log(`Ready for direct upload to Shopify Admin > Online Store > Themes > Upload zip file.`);
}

buildZip();
