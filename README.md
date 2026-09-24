# Riaz Home Decor &ndash; Fanoos Light & Decor
### Premium Shopify Online Store 2.0 Theme & Showroom Experience

A bespoke, production-ready **Shopify Online Store 2.0** e-commerce theme and local showroom preview created specifically for **Riaz Home Decor Fanoos Light & Decor** in Multan, Pakistan.

---

## 1. Verified Business Profile

* **Business Name:** Riaz Home Decor Fanoos Light & Decor
* **Business Category:** Home Decor / Lighting Store
* **Address:** Bosan Road, Sabzazar Colony, Multan, Punjab, Pakistan
* **Phone Contact:** [+92 300 7490606](tel:+923007490606)

> **Strict Information Boundary Compliance:**
> This project strictly utilizes **only** the verified business details provided above. It does not invent email addresses, social media links, artificial customer testimonials, fake years of experience, or unverified delivery guarantees. All contact and social attributes are editable directly from Shopify Admin or safely hidden until configured by the store owner.

---

## 2. Showroom Design System & Visual Identity

The theme is styled after an upscale lighting gallery and contemporary interior architectural atelier:
* **Palette:**
  * Base Light: Warm Ivory (`#FBF9F5`) and Showroom Sand (`#EAE4D9`)
  * Deep Foundation: Architectural Charcoal (`#141413`)
  * Metallic Accent: Warm Cast Bronze (`#8C7355`) and Deep Ochre (`#A85A42`)
* **Typography:**
  * Serif Editorial Display: Cormorant Garamond (`font-serif`)
  * Clean Modern Sans: Plus Jakarta Sans (`font-sans`)
* **Layouts:**
  * High-contrast dark hero showroom showcase
  * Asymmetric gallery splits, circular fixture showcases, and thin architectural borders (`border-hairline`)
  * Responsive across all viewport widths: 320px, 375px, 425px, 768px, 1024px, 1440px+

---

## 3. Online Store 2.0 Theme Architecture

```
riaz-home-decor/
├── assets/
│   ├── theme.css            # Complete showroom design system & responsive styling
│   ├── theme.js             # Sticky header elevation, mobile drawer, accordions, gallery zoom
│   ├── cart.js              # Shopify Ajax Cart API handler with slide-out drawer
│   ├── wishlist.js          # Guest localStorage & customer-ready wishlist controller
│   ├── quick-view.js        # High-speed modal quick view with variant selection
│   ├── search.js            # Fullscreen predictive search modal with live filtering
│   └── filters.js           # Faceted collection sorting and tag-based filtering
├── config/
│   ├── settings_schema.json # Theme customizer settings (colors, typography, showroom info)
│   └── settings_data.json   # Default store settings and typography configurations
├── layout/
│   ├── theme.liquid         # Primary HTML5 master layout
│   └── password.liquid      # Password-protected coming-soon layout
├── locales/
│   └── en.default.json      # Complete internationalization dictionary
├── sections/                # 28 bespoke modular sections
│   ├── announcement-bar.liquid
│   ├── header.liquid        # Mega menu with 3-column Lighting/Decor/Room navigation
│   ├── footer.liquid        # Multan showroom address, phone, and policy links
│   ├── hero.liquid          # Editorial dark showroom hero banner
│   ├── category-navigation.liquid
│   ├── lighting-gallery.liquid
│   ├── featured-fanoos.liquid
│   ├── chandelier-spotlight.liquid
│   ├── by-room.liquid
│   ├── home-decor-section.liquid
│   ├── lamps-split.liquid
│   ├── wall-lighting.liquid
│   ├── new-arrivals.liquid
│   ├── featured-decor.liquid
│   ├── room-inspiration.liquid
│   ├── newsletter.liquid
│   ├── cart-drawer.liquid
│   ├── search-overlay.liquid
│   ├── quick-view-modal.liquid
│   ├── main-collection.liquid
│   ├── main-product.liquid  # Technical lighting & decor specification tables
│   ├── main-cart.liquid
│   ├── main-page.liquid
│   ├── contact-form.liquid  # Multan showroom location & inquiry form
│   ├── faq-section.liquid   # 8 verified support accordions
│   ├── lighting-landing.liquid
│   ├── home-decor-landing.liquid
│   └── wishlist-page.liquid
├── snippets/
│   ├── breadcrumbs.liquid
│   ├── icon.liquid          # Semantic inline SVG icon library
│   ├── metafields-decor.liquid     # Structured decor specs table
│   ├── metafields-lighting.liquid  # 15 technical lighting specs table
│   ├── pagination.liquid
│   ├── price.liquid         # Sale formatting, currency display, sold out states
│   └── product-card.liquid  # Hover secondary image, wishlist toggle, quick add
├── templates/
│   ├── 404.json
│   ├── cart.json
│   ├── collection.json
│   ├── index.json           # Fully modular OS 2.0 homepage
│   ├── page.about.json
│   ├── page.contact.json
│   ├── page.faq.json
│   ├── page.home-decor.json
│   ├── page.json
│   ├── page.lighting.json
│   ├── page.privacy.json
│   ├── page.returns.json
│   ├── page.shipping.json
│   ├── page.terms.json
│   ├── page.wishlist.json
│   ├── product.json
│   ├── search.json
│   └── customers/
│       ├── account.liquid
│       ├── addresses.liquid
│       ├── login.liquid
│       ├── order.liquid
│       └── register.liquid
├── preview/                 # Standalone offline preview environment
│   ├── index.html           # Full interactive homepage
│   ├── shop.html            # Collection grid with live faceted filter & sort
│   ├── lighting.html        # Lighting landing page
│   ├── fanoos.html          # Fanoos collection page
│   ├── chandeliers.html     # Chandeliers collection page
│   ├── lamps.html           # Table & floor lamps collection page
│   ├── home-decor.html      # Home decor landing page
│   ├── product-fanoos.html  # Modern Fanoos PDP with 15 lighting metafields
│   ├── product-vase.html    # Textured Ceramic Vase PDP with 7 decor metafields
│   ├── cart.html            # Dedicated cart bag review page
│   ├── wishlist.html        # Interactive wishlist with move-to-bag action
│   ├── about.html           # About showroom page
│   ├── contact.html         # Multan showroom address, phone, and inquiry form
│   ├── faq.html             # 8 client support question accordions
│   ├── shipping.html        # Shipping & fragile handling policy
│   ├── returns.html         # Returns & refunds policy
│   ├── login.html           # Customer portal sign-in
│   ├── register.html        # Customer registration
│   ├── account.html         # Account dashboard
│   ├── mock-data.json       # 14 realistic demo products
│   └── server.js            # Standalone zero-dependency preview HTTP server
├── scripts/
│   └── package-theme.js     # Pure Node.js zip packager
└── package.json
```

---

## 4. Shopify Metafield Definitions

The theme supports technical specifications for lighting and interior accessories via Shopify Metafields. Specification tables render **only** when values are provided in the Shopify Admin.

### Lighting Specifications (`lighting` namespace)
| Metafield Key | Type | Description |
| :--- | :--- | :--- |
| `lighting.material` | Single line text | e.g. *Hand-welded brass, fluted amber glass* |
| `lighting.finish` | Single line text | e.g. *Antique Brass / Matte Black* |
| `lighting.bulb_type` | Single line text | e.g. *E27 Edison base, LED compatible* |
| `lighting.bulb_quantity` | Integer | Number of bulbs required (e.g. *1*, *6*, *12*) |
| `lighting.wattage` | Single line text | e.g. *Max 40W per socket* |
| `lighting.voltage` | Single line text | e.g. *220V - 240V, 50Hz* |
| `lighting.light_color` | Single line text | e.g. *2700K Warm White* |
| `lighting.dimensions` | Single line text | e.g. *35cm Diameter x 55cm Height* |
| `lighting.installation_type` | Single line text | e.g. *Ceiling mount with adjustable suspension chain* |
| `lighting.care_instructions` | Multi-line text | Recommended cleaning and maintenance instructions |

### Decor Specifications (`decor` namespace)
| Metafield Key | Type | Description |
| :--- | :--- | :--- |
| `decor.material` | Single line text | e.g. *Handcrafted stoneware ceramic* |
| `decor.dimensions` | Single line text | e.g. *22cm Diameter x 38cm Height* |
| `decor.finish` | Single line text | e.g. *Matte textured glaze with terracotta undertone* |
| `decor.weight` | Single line text | e.g. *2.8 kg* |
| `decor.room` | Single line text | e.g. *Living Room, Console, Dining Table* |
| `decor.care_instructions` | Multi-line text | Care recommendations for fragile finishes |

---

## 5. Installing the Theme into Shopify

### Method 1: Uploading Theme ZIP to Shopify Admin
1. Package the theme folders:
   * **Option A (Terminal):** Run `npm run package` in this directory to automatically build `riaz-home-decor-shopify-theme.zip`.
   * **Option B (Windows Explorer):** Select the 7 theme folders (`assets`, `config`, `layout`, `locales`, `sections`, `snippets`, `templates`), right-click, and select **Compress to ZIP file** (name it `riaz-home-decor-shopify-theme.zip`).
2. Log into your **Shopify Admin** (`https://admin.shopify.com/store/your-store-name`).
3. Navigate to **Online Store > Themes**.
4. In the **Theme library** section, click **Add theme > Upload zip file**.
5. Select `riaz-home-decor-shopify-theme.zip` and click **Upload file**.
6. Click **Customize** to personalize through the Shopify Theme Editor, or **Publish** when ready.

### Method 2: Using Shopify CLI
```bash
# Push directly to your Shopify development or unreleased theme
shopify theme push --store your-store.myshopify.com
```

---

## 6. How to Run the Local Previews

You can test and explore the entire store locally prior to uploading to Shopify:

### Option A: Standalone HTTP Preview Server (Recommended)
The project includes a custom zero-dependency preview server that serves all store routes, dynamic mock cart APIs, predictive search, and product detail pages:
```bash
npm start
```
Then open [http://localhost:3000](http://localhost:3000) in your web browser.

### Option B: Direct Browser Preview (Zero Server Required)
You can directly double-click any HTML file in the `preview/` directory to open it in Chrome, Edge, Safari, or Firefox:
* `preview/index.html` &ndash; Showroom Homepage
* `preview/shop.html` &ndash; Shop All Collections with faceted filters
* `preview/lighting.html` &ndash; Lighting Gallery Landing Page
* `preview/fanoos.html` &ndash; Signature Fanoos Showcase
* `preview/chandeliers.html` &ndash; Statement Chandelier Collection
* `preview/lamps.html` &ndash; Table & Floor Lamps
* `preview/home-decor.html` &ndash; Contemporary Home Decor
* `preview/product-fanoos.html` &ndash; Product Detail Page (Modern Fanoos Pendant)
* `preview/product-vase.html` &ndash; Product Detail Page (Textured Ceramic Vase)
* `preview/cart.html` &ndash; Showroom Bag Review & Checkout
* `preview/wishlist.html` &ndash; Saved Items & Wishlist
* `preview/about.html` &ndash; About Our Showroom
* `preview/contact.html` &ndash; Contact Form & Multan Showroom Details
* `preview/faq.html` &ndash; Frequently Asked Questions
* `preview/shipping.html` &ndash; Shipping Policy
* `preview/returns.html` &ndash; Returns & Refunds Policy
* `preview/login.html` &ndash; Client Portal Sign In
* `preview/register.html` &ndash; Client Portal Registration
* `preview/account.html` &ndash; Client Account Dashboard

---

## 7. Interactive Feature Checklist

* [x] **Predictive Search:** Fullscreen modal with live keyword matching, category tags, and direct product navigation.
* [x] **Slide-Out Cart Drawer:** Real-time quantity updates, subtotal calculation, free shipping thresholds, and local storage fallback.
* [x] **Showroom Wishlist:** Heart icons on product cards, count badge in header, dedicated wishlist page, and "Move to Bag" action.
* [x] **Modal Quick View:** View product images, pricing, description, and add to bag directly without leaving collection pages.
* [x] **Faceted Collection Filtering:** Filter products by Room, Category, or Material, with instant live sorting by price and name.
* [x] **Product Detail Page:** Interactive thumbnail switcher, hover image zoom, variant pickers, quantity stepper, and structured technical spec tables.
* [x] **Showroom mega menu:** 3-column categorized navigation for Lighting, Decor, and By Room with spotlight imagery.
* [x] **Authentic Multan Business Data:** Bosan Road, Sabzazar Colony, Multan, Punjab, Pakistan & Phone: +92 300 7490606 seamlessly integrated across all pages, contact forms, footers, and maps.

---
&copy; 2026 Riaz Home Decor Fanoos Light & Decor. All rights reserved.
