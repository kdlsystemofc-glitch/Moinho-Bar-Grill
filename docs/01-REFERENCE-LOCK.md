# 01 — REFERENCE LOCK
## VISUAL + STRUCTURAL FORENSICS

**Reference Source:** MOTH Drinks US (`https://us.mothdrinks.com/`)  
**Primary Visual Authority:** `referencia/reference-full.png.png`  
**Date of Audit:** August 13, 2026  

---

## 1. PAGE SILHOUETTE

The reference page displays an asymmetric, high-contrast, editorial layout characterized by dramatic chromatic shifts between deep pitch black (`#000000`) and warm off-white/cream (`#F8F8EF`). The page architecture is organized into seven distinct visual scenes that alternate between full-bleed dark fields and open light canvas.

```
+-------------------------------------------------------------------+  0.0% Y
| NAV BAR: White background, Logo left, Icons right                 |
+-------------------------------------------------------------------+  2.0% Y
| SCENE 1: DARK HERO BLOCK (Black #000000)                          |
| - Left: Oversized stacked title "MEET MOTH:" + Body + Pill CTA    |
| - Right: Diagonal metallic silver can lid mass extending in       |
| - Overlap: "JOIN THE COMMUNITY GET 20% OFF" Newsletter Modal Card |  22.0% Y
+-------------------------------------------------------------------+
| SCENE 2: VALUE STATEMENT & ICON BAR (Cream #F8F8EF)               |
| - Title: "COCKTAILS IN A LITTLE BLACK CAN"                        |
| - 2-Column Line-Art Cocktail Glass Icons & Features               |  30.0% Y
+-------------------------------------------------------------------+
| SCENE 3: FEATURED PRODUCT SHOWCASE GRID (Cream #F8F8EF)           |
| - Section Title: "FEATURED"                                       |
| - 2x2 Grid of soft-grey product cards (Can + Cocktail Glass)     |
| - Typography: Bold product titles + Price + "QUICK ADD" Pill      |  65.0% Y
+-------------------------------------------------------------------+
| SCENE 4: BRAND STORY SCENE (Cream #F8F8EF)                        |
| - Moiré Optical Starburst Graphic Emblem                         |
| - Stacked Title: "HELLO, YOU" + Solid Black Pill "ABOUT US"       |  77.0% Y
+-------------------------------------------------------------------+
| SCENE 5: RETAILER & LOCATION FINDER (Cream #F8F8EF)               |
| - Fine horizontal separator line                                  |
| - Title: "FIND A MOTH" + Subtext + Black Pill "STOCKIST MAP"      |
| - Generous vertical negative space below CTA                      |  90.0% Y
+-------------------------------------------------------------------+
| SCENE 6: SOCIAL & INSTAGRAM HEADER (Cream #F8F8EF)                |
| - Left: "FOLLOW US" | Right: Outlined Instagram Icon              |  95.0% Y
+-------------------------------------------------------------------+
| SCENE 7: DARK FOOTER & GIANT WORDMARK (Black #000000)             |
| - Massive full-width "MOTH:" wordmark spanning canvas width       |
| - Newsletter line-input + Arrow submit                            |
| - Social Icons + Legal/Nav Links + Copyright                      | 100.0% Y
+-------------------------------------------------------------------+
```

---

## 2. SCENE MAP (FULL-PAGE SCREENSHOT DECONSTRUCTION)

### SCENE 1: Dark Hero Block & Overlay Modal
- **Percentage of Page Height:** ~22%
- **Dominant Background:** Pitch Black (`#000000`).
- **Container Behavior:** Full-bleed background spanning 100% viewport width.
- **Visual Mass:** Left-heavy typography mass balanced by right-side diagonal metallic object mass. Overlapped in lower third by dark newsletter modal card.
- **Dominant Typography:** Oversized left-aligned sans-serif title `MEET MOTH:` (~80px desktop), line height 1.0, pure white (`#FFFFFF`). Body copy in 16px white, followed by white outlined pill button `SHOP COCKTAILS`.
- **Image Dimensions & Aspect:** Metallic can lid cut at top-right, occupying ~50% width and extending diagonally down.
- **Horizontal / Vertical Alignment:** Left-aligned copy block (margin ~5% from left); right edge open for visual product mass.
- **Negative Space:** Dense top-left text block, vast dark negative space around silver metallic object.
- **Overlaps:** Floating newsletter modal card ("JOIN THE COMMUNITY GET 20% OFF") overlaps lower boundary of Scene 1 into the silver graphic background.
- **Transition to Next Scene:** Sharp edge transition from `#000000` dark field to `#F8F8EF` cream field.

### SCENE 2: Value Statement & Icon Feature Bar
- **Percentage of Page Height:** ~8%
- **Dominant Background:** Off-white / Cream (`#F8F8EF`).
- **Container Behavior:** Padded container (~5% horizontal margins).
- **Visual Mass:** Large top headline balanced by light 2-column icon & text grid below.
- **Dominant Typography:** Large all-caps stacked headline `COCKTAILS` / `IN A LITTLE` / `BLACK CAN` (~48px), followed by small uppercase subtitles (`PREMIUM CRAFT SPIRITS`, `100% REAL...`).
- **Image Dimensions & Aspect:** Vector line-art cocktail glass icons (`🍸`), 24x24px scale, pure outline.
- **Horizontal / Vertical Alignment:** Left-aligned title; 2-column grid starting directly under the title.
- **Negative Space:** Generous vertical padding top (48px) and bottom (48px).
- **Overlaps:** None.
- **Transition to Next Scene:** Seamless continuous background color into Scene 3.

### SCENE 3: Featured Product Showcase Grid
- **Percentage of Page Height:** ~35%
- **Dominant Background:** Off-white / Cream (`#F8F8EF`).
- **Container Behavior:** Fixed-width padded grid container.
- **Visual Mass:** Heavy 2x2 grid of soft muted grey rectangular product cards (`#F3F3F3`).
- **Dominant Typography:** Section header `FEATURED` (~36px all-caps sans-serif). Card titles in bold uppercase (`MARGARITA`, `ESPRESSO MARTINI`, etc.), price in regular weight (`$19.99`), and `QUICK ADD` in pill button.
- **Image Dimensions & Aspect:** Each product image container is a vertical rectangle (~4:5 ratio) with soft grey background containing the beverage can + poured cocktail glass.
- **Horizontal / Vertical Alignment:** 2 equal columns per row on desktop with 16px horizontal gap and 32px vertical gap.
- **Negative Space:** Even grid gaps; clean white space below each button.
- **Overlaps:** None within grid; cards sit cleanly on the cream canvas.
- **Transition to Next Scene:** Seamless continuation of `#F8F8EF` background.

### SCENE 4: Brand Story Scene ("HELLO, YOU")
- **Percentage of Page Height:** ~12%
- **Dominant Background:** Off-white / Cream (`#F8F8EF`).
- **Container Behavior:** Left-aligned content block.
- **Visual Mass:** Concentrated on top left with the optical starburst graphic emblem and stacked typography.
- **Dominant Typography:** Stacked uppercase headline `HELLO,` / `YOU` (~44px), anchored by a solid black pill button `ABOUT US`.
- **Image Dimensions & Aspect:** Circular moiré optical starburst vector emblem (~64x64px), positioning above the text.
- **Horizontal / Vertical Alignment:** 100% left-aligned.
- **Negative Space:** Large right-side negative space (~60% of viewport width is blank cream canvas).
- **Overlaps:** None.
- **Transition to Next Scene:** Horizontal hairline divider (`#E0E0E0`).

### SCENE 5: Retailer & Location Finder ("FIND A MOTH")
- **Percentage of Page Height:** ~13%
- **Dominant Background:** Off-white / Cream (`#F8F8EF`).
- **Container Behavior:** Left-aligned container below divider line.
- **Visual Mass:** Text block + solid black CTA button `STOCKIST MAP`.
- **Dominant Typography:** Headline `FIND A MOTH` (~40px all-caps), multi-line body copy detailing states and retail partners.
- **Image Dimensions & Aspect:** No photography; purely typographic and button-driven.
- **Horizontal / Vertical Alignment:** Left-aligned with 5% left margin.
- **Negative Space:** Vast vertical empty space below the CTA (~150px vertical buffer).
- **Overlaps:** None.
- **Transition to Next Scene:** Continuous cream canvas.

### SCENE 6: Social Header Bar ("FOLLOW US")
- **Percentage of Page Height:** ~5%
- **Dominant Background:** Off-white / Cream (`#F8F8EF`).
- **Container Behavior:** Full-width flex row with space-between distribution.
- **Visual Mass:** Balanced between left text and right icon.
- **Dominant Typography:** All-caps header `FOLLOW US` (~36px).
- **Image Dimensions & Aspect:** Outline vector Instagram camera icon (~32x32px) on right edge.
- **Horizontal / Vertical Alignment:** Vertically centered row, left text aligned to left margin, right icon aligned to right margin.
- **Negative Space:** Horizontal span between left and right elements.
- **Transition to Next Scene:** Direct hard boundary into Scene 7 dark background.

### SCENE 7: Dark Footer & Giant Wordmark ("MOTH:")
- **Percentage of Page Height:** ~15%
- **Dominant Background:** Pitch Black (`#000000`).
- **Container Behavior:** Full-bleed dark container.
- **Visual Mass:** Dominated by the gigantic white `MOTH:` logo wordmark at the top of the footer.
- **Dominant Typography:** Giant brand title `MOTH:` (~120px+ desktop font size, cropped/cropped edge effect). Secondary uppercase nav links (`HELP`, `PRIVACY POLICY`, `CONTACT`, `SHIPPING`).
- **Image Dimensions & Aspect:** Vector social icons (Instagram, Facebook, TikTok, Spotify, LinkedIn) lined horizontally.
- **Horizontal / Vertical Alignment:** Left-aligned list hierarchy; full-width input underline field for email subscription.
- **Negative Space:** High contrast text on dark background; vertical spacing between link groups.
- **Overlaps:** Wordmark bleeds to the top edge of the footer block.

---

## 3. GEOMETRY MAP (NORMALIZED COORDINATE MODEL)

*Coordinates expressed as % of Viewport Width (X) and Relative Height Progression (Y).*

| ELEMENT | X POSITION (% VW) | Y POSITION (% PAGE) | WIDTH (% VW) | HEIGHT (% PAGE) | RELATIONSHIP TO ADJACENT |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Top Nav Bar** | 0% | 0.0% | 100% | 2.5% | Fixed/Sticky at viewport top |
| **Hero Title ("MEET MOTH:")** | 5% | 4.0% | 45% | 5.0% | Top left of dark hero field |
| **Hero Body & CTA** | 5% | 9.5% | 40% | 4.0% | Directly below Hero Title |
| **Hero Metallic Can Lid** | 50% | 3.5% | 50% | 12.0% | Floats in top-right of dark hero |
| **Newsletter Modal Card** | 25% | 12.0% | 50% | 8.0% | Overlaps lower hero section |
| **Headline ("COCKTAILS...")** | 5% | 23.0% | 60% | 4.0% | Top of Scene 2 |
| **Feature Icons & Text** | 5% | 27.5% | 90% | 2.5% | 2 columns under Scene 2 headline |
| **Section Title ("FEATURED")** | 5% | 31.5% | 90% | 2.0% | Header for product grid |
| **Product Card 1 (Margarita)** | 5% | 34.0% | 43% | 14.0% | Row 1, Column 1 |
| **Product Card 2 (Espresso)** | 52% | 34.0% | 43% | 14.0% | Row 1, Column 2 |
| **Product Card 3 (Piña Colada)**| 5% | 49.0% | 43% | 14.0% | Row 2, Column 1 |
| **Product Card 4 (Spicy Marg)** | 52% | 49.0% | 43% | 14.0% | Row 2, Column 2 |
| **Starburst Graphic Motif** | 5% | 66.0% | 10% | 3.0% | Above "HELLO, YOU" |
| **Title ("HELLO, YOU") & CTA** | 5% | 69.5% | 40% | 6.0% | Left column of Scene 4 |
| **Section Divider Line** | 0% | 76.5% | 100% | 0.1% | Spans 100% width |
| **Title ("FIND A MOTH") & CTA**| 5% | 78.0% | 50% | 10.0% | Left column of Scene 5 |
| **Headline ("FOLLOW US")** | 5% | 91.0% | 90% | 3.0% | Flex row with IG icon on right |
| **Giant Logo ("MOTH:")** | 0% | 94.5% | 100% | 3.5% | Top of dark footer |
| **Footer Links & Copyright** | 5% | 98.0% | 90% | 2.0% | Bottom of footer |

---

## 4. TYPOGRAPHIC GEOMETRY

- **Primary Font Family:** Custom technical geometric sans-serif (`PolySans`) paired with `Assistant` / system sans-serif fallbacks.
- **Largest Headline Scale:** 
  - Footer `MOTH:` logo text spans ~120px+ (desktop).
  - Hero headline `MEET MOTH:` renders at ~80px / 5rem, line-height 0.95.
  - Section headlines (`COCKTAILS IN A LITTLE BLACK CAN`, `FEATURED`, `FIND A MOTH`, `FOLLOW US`) render at ~40px–48px / 2.5rem–3rem.
- **Line Count & Alignment:**
  - Headlines are strictly **left-aligned** and broken into tight 2–3 line stacks (`MEET / MOTH:`, `COCKTAILS / IN A LITTLE / BLACK CAN`, `HELLO, / YOU`).
- **Contrast & Hierarchy:**
  - Extreme contrast between giant uppercase headlines and tiny subtext (12px–14px all-caps labels like `PREMIUM CRAFT SPIRITS` or `$19.99`).
- **Repeating Text Patterns:**
  - All call-to-action buttons use **all-caps, pill-shaped borders** with medium font weight (`SHOP COCKTAILS`, `QUICK ADD`, `ABOUT US`, `STOCKIST MAP`, `SUBSCRIBE`).
- **Oversized Type vs Small Text:**
  - No medium-sized body text paragraphs; content jumps directly from massive titles to concise 2-line descriptions or micro-labels.

---

## 5. IMAGE GEOMETRY & MOTIFS

- **Product Presentation Cards:**
  - Square/slightly vertical cards with soft light-grey background (`#F3F3F3`).
  - Dual-object composition inside every product photo: **canned drink + filled glass** with realistic ice/garnish (lime wheel, pineapple leaf, cherry, coffee foam).
- **Cutouts & Overlaps:**
  - Metallic silver can lid in Hero cut off at the top right margin.
  - Floating newsletter modal card overlays the boundary between hero background and silver product shot.
- **Graphic Motifs:**
  - **Moiré optical illusion starburst:** Multi-line radiating circular vector icon used as a brand divider mark before "HELLO, YOU".
  - **Line-Art Cocktail Glass:** Minimalist martini glass outline icon (`🍸`) used above feature bullet points.
  - **Pill Containers:** Every button and input field uses rounded pill shapes (`border-radius: 9999px`).

---

## 6. COLOR-FIELD MAP

The color rhythm of the page relies on a strict two-tone contrast:

```
[ 0% - 22% ]  DEEP BLACK (#000000)  ---> High drama hero entrance
[ 22% - 94% ] WARM CREAM (#F8F8EF)  ---> Clean, editorial light canvas for product showcase
[ 94% - 100%] DEEP BLACK (#000000)  ---> High contrast dark footer anchoring the page
```

- **Primary Background:** Warm Off-White / Cream (`#F8F8EF` / `rgb(248, 248, 239)`).
- **Secondary Background:** Pitch Black (`#000000` / `#121212`).
- **Card Background:** Muted Light Grey (`#F3F3F3`).
- **Text Colors:** Pure White (`#FFFFFF`) on black fields; Charcoal/Black (`#121212`) on cream fields.

---

## 7. MOTION MAP & URL BEHAVIOR (`us.mothdrinks.com`)

1. **Sticky Header:**
   - Simple transparent header transitioning to solid background upon scroll down.
2. **Smooth Scroll & Micro-Interactions:**
   - Smooth inertia scrolling across all sections.
3. **Hover States:**
   - **Pill Buttons (`QUICK ADD`, `SHOP COCKTAILS`):** Invert colors on hover (Black fill with White text transitions to White fill with Black border/text, or vice versa).
   - **Product Cards:** Subtle 3D lift / scale zoom (~1.02x) on the beverage container upon hovering the card.
4. **Overlay Modal Behavior:**
   - Newsletter signup modal ("GET 20% OFF") pops up with slide-up / fade-in animation and can be dismissed via top-right `✕` icon.
5. **Mobile Responsiveness:**
   - 2x2 desktop product grid collapses to a **1-column full-width vertical list** or horizontal swipe carousel on smaller mobile viewports (<768px).
   - Massive headlines scale down fluidly using `clamp()` font sizing.

---

## 8. RESPONSIVE MAP

- **Desktop (>= 1024px):**
  - Multi-column asymmetric layout; 2x2 product card grid; left-aligned copy with generous right-side white space (~50% width empty canvas).
- **Tablet (768px - 1023px):**
  - 2-column grid preserved; margins compress from 5% to 3%; font scale shrinks ~15%.
- **Mobile (< 768px):**
  - Single column stacked layout.
  - Product grid transitions to single full-width cards.
  - Header text stacks vertically.
  - Buttons expand to 100% container width.

---

## 9. TEN STRUCTURAL SIGNATURES

These ten visual and compositional characteristics define the immutable visual identity of the reference layout:

1. **Dual-Tone Color Field Rhythm:** Alternating full-bleed pitch black (`#000000`) hero and footer blocks framing a warm cream (`#F8F8EF`) main canvas.
2. **Oversized Left-Aligned Stacked Typography:** All-caps geometric headlines broken into short 2–3 line vertical stacks (`MEET / MOTH:`, `COCKTAILS / IN A LITTLE / BLACK CAN`).
3. **Uniform Pill Button Motif (`border-radius: 9999px`):** Every interactive CTA button across all sections uses a distinct rounded pill outline shape with uppercase text.
4. **Soft-Grey Product Cards with Dual-Object Photography:** Product showcase cards sit on `#F3F3F3` rounded rectangles featuring both the canned product and a filled cocktail glass.
5. **Asymmetric Canvas Occupancy:** Content is heavily anchored to the left 45%-50% of the screen, leaving vast open negative space on the right.
6. **Moiré Optical Illusion Vector Motif:** Distinctive radiating lined starburst graphic icon acting as a brand divider mark.
7. **Floating Overlap Promo Modal Card:** Dark newsletter signup box physically overlapping the boundary between hero background and product graphics.
8. **Minimalist Line-Art Feature Icons:** Micro outline icons (`🍸`) positioned directly above two-column value proposition labels.
9. **Full-Width Hairline Dividers:** Fine 1px subtle horizontal divider lines spanning edge-to-edge between major editorial chapters.
10. **Giant Edge-to-Edge Footer Wordmark:** Massive uppercase brand title (`MOTH:`) dominating the top margin of the dark footer block.

---

## 10. COMPLIANCE & NEXT STEPS

- **Client Adaptation Status:** Zero client content or identity adaptation was applied during Phase 01, strictly preserving the reference architecture.
- **Reference Lock:** The structural silhouette, geometry, typography scale, color fields, and 10 structural signatures documented above are now officially locked.

REFERENCE STRUCTURE LOCKED — READY FOR CLIENT MAPPING
