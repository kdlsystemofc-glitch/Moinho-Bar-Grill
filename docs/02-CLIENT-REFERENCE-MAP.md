# 02 — CLIENT TO REFERENCE MAPPING

**Client:** Moinho Bar & Grill  
**Reference Target:** MOTH Drinks US (`docs/01-REFERENCE-LOCK.md`)  
**Date of Mapping:** August 13, 2026  

---

## 1. BRAND IDENTITY MAPPING SYSTEM

Before mapping content, we define the precise visual replacement rules that swap MOTH's identity for Moinho's identity without destroying visual behavior:

| REFERENCE IDENTITY ROLE | REFERENCE BEHAVIOR | CLIENT REPLACEMENT IDENTITY | BEHAVIOR PRESERVATION METHOD |
| :--- | :--- | :--- | :--- |
| **Primary Canvas Color** | Warm Off-White / Cream (`#F8F8EF`) | Warm Off-White / Cream (`#F8F8EF`) | Preserved 100% to maintain clean, high-contrast light canvas |
| **Dark Field Accent Color** | Pitch Black (`#000000` / `#121212`) | Deep Charcoal / Pitch Black (`#0E0E0E` / `#121212`) | Preserved 100% to maintain dramatic chromatic rhythm |
| **Card Container Color** | Soft Muted Grey (`#F3F3F3`) | Soft Warm Light Grey (`#F3F3F3`) | Preserved for product card containers |
| **Primary Typography** | `PolySans` (Geometric technical sans-serif) | `Outfit` / `Inter` / `Montserrat` (Bold all-caps geometric sans-serif) | Preserved tight line height (0.95), all-caps styling, left alignment |
| **Script Accent Typography** | N/A (Modern geometric only) | `Moinho` Cursive Script Logo Accent | Integrated as logo mark asset and visual signatures |
| **Graphic Divider Motif** | Moiré Optical Starburst Radiating Icon | Moiré / Windmill ("Moinho") Lined Vector Emblem | Line-art geometry preserving starburst scale (~64x64px) |
| **Button Geometry** | Pill shape outline (`border-radius: 9999px`) | Pill shape outline (`border-radius: 9999px`) | Preserved 100% across all call-to-action buttons |

---

## 2. STRUCTURAL ROLE-BY-ROLE MAPPING

---

### SCENE 0: TOP NAVIGATION BAR

- **REFERENCE ROLE:** Fixed/Sticky Top Navigation Header.
- **STRUCTURAL PURPOSE:** Provide persistent brand identification and global site navigation.
- **CLIENT CONTENT:** Moinho Bar & Grill branding + primary section links (`CARDÁPIO`, `ALMOÇO`, `PETISCOS`, `MÚSICA`, `CONTATO`).
- **CLIENT ASSET:** [`734528531_17894407572552496_3414876260331996581_n.jpg`](file:///c:/cli/Moinho%20V2/imagens/734528531_17894407572552496_3414876260331996581_n.jpg) (Official circular black logo badge).
- **COPY REQUIRED:** Logo text: `MOINHO BAR & GRILL`. Nav links: `CARDÁPIO`, `ALMOÇO`, `PETISCOS`, `MÚSICA`, `LOCALIZAÇÃO`.
- **ASSET TRANSFORMATION:** Render circular emblem as high-contrast SVG vector mark or crisp 48x48px circle image at top-left.
- **COLOR TRANSFORMATION:** Transparent on dark hero; transitions to `#F8F8EF` cream background with black text on scroll down.
- **TYPOGRAPHY TRANSFORMATION:** Uppercase geometric sans-serif (13px, tracking +1px).
- **STRUCTURAL CHANGE REQUIRED?** **NO.**

---

### SCENE 1A: HERO DARK FIELD & TYPOGRAPHY

- **REFERENCE ROLE:** Dark Hero Block Left-Column Copy & CTA.
- **STRUCTURAL PURPOSE:** Establish brand tone, primary value proposition, and main entry action inside a high-drama dark field.
- **CLIENT CONTENT:** Core value proposition of Moinho Bar & Grill: gourmet skewers, executive lunch, cold beer, and live music.
- **CLIENT ASSET:** None (Typographic mass).
- **COPY REQUIRED:**
  - *Headline:* `CONHEÇA O` <br> `MOINHO:`
  - *Body Copy:* `Espetinhos artesanais na brasa, parmegiana no almoço executivo, feijoada e cerveja sempre gelada. O ponto de encontro perfeito em São Bernardo do Campo.`
  - *CTA Button:* `VER CARDÁPIO`
- **ASSET TRANSFORMATION:** N/A.
- **COLOR TRANSFORMATION:** Background: Pitch Black (`#0E0E0E`). Text: Pure White (`#FFFFFF`). Button: White outline, white text.
- **TYPOGRAPHY TRANSFORMATION:** Title rendered in bold all-caps sans-serif (~80px desktop, line-height 0.95). Pill CTA button in 14px uppercase.
- **STRUCTURAL CHANGE REQUIRED?** **NO.**

---

### SCENE 1B: HERO RIGHT-SIDE VISUAL MASS

- **REFERENCE ROLE:** Hero Right-Column Visual Mass.
- **STRUCTURAL PURPOSE:** Provide dramatic visual product presence entering the right side of the dark hero canvas.
- **CLIENT CONTENT:** Iconic ice bucket with cold Heineken 600ml bottles and ice condensation, overlayed with logo mark.
- **CLIENT ASSET:** [`imgi_30_AHRPTWk-U9zq7MvPcxcK1q_R_VMERxZe3vKFS82dD6PdK7EaOX2h0w9DIAYVx00PKz7qllLYuuUH801D5ek2QXKtgNe9NZNxdo_J7c3E4XZC6DjyqBpYZe3FKto-xGHlqQBusKdmRhk0zfDcZso1=s677-k-no.jpg`](file:///c:/cli/Moinho%20V2/imagens/imgi_30_AHRPTWk-U9zq7MvPcxcK1q_R_VMERxZe3vKFS82dD6PdK7EaOX2h0w9DIAYVx00PKz7qllLYuuUH801D5ek2QXKtgNe9NZNxdo_J7c3E4XZC6DjyqBpYZe3FKto-xGHlqQBusKdmRhk0zfDcZso1=s677-k-no.jpg).
- **COPY REQUIRED:** White script logo overlay on bucket: `"Moinho Bar & Grill"`.
- **ASSET TRANSFORMATION:** Subject isolation / soft edge mask blending the dark ambient background of the photo into the hero `#0E0E0E` dark field, positioning the ice bucket angled on the right side.
- **COLOR TRANSFORMATION:** Harmonize ambient lighting with hero dark background; enhance ice condensation highlights and bottle green hues.
- **TYPOGRAPHY TRANSFORMATION:** N/A.
- **STRUCTURAL CHANGE REQUIRED?** **NO.**

---

### SCENE 1C: FLOATING OVERLAP PROMO MODAL CARD

- **REFERENCE ROLE:** Floating Newsletter / Offer Modal Box.
- **STRUCTURAL PURPOSE:** Create visual depth by physically overlapping Scene 1 (Dark) into Scene 2 (Light).
- **CLIENT CONTENT:** Weekend live music & special feijoada event highlight.
- **CLIENT ASSET:** Vector music / beer icon badge.
- **COPY REQUIRED:**
  - *Title:* `MÚSICA AO VIVO` <br> `& FEIJOADA`
  - *Subtitle:* `Toda semana um show especial com cerveja trincando e os melhores petiscos da região.`
  - *Input Field:* `Seu nome ou WhatsApp`
  - *Button:* `RESERVAR MESA`
- **ASSET TRANSFORMATION:** Dark floating card container with rounded corners (12px) and subtle drop shadow.
- **COLOR TRANSFORMATION:** Background: Charcoal Black (`#181818`), Border: `#333333`, Text: White (`#FFFFFF`).
- **TYPOGRAPHY TRANSFORMATION:** All-caps header (~24px), small body copy (13px), pill `SUBSCRIBE` button.
- **STRUCTURAL CHANGE REQUIRED?** **NO.**

---

### SCENE 2: VALUE STATEMENT & 2-COLUMN FEATURE BAR

- **REFERENCE ROLE:** Headline & 2-Column Feature Bar.
- **STRUCTURAL PURPOSE:** Communicate core brand pillars directly below the hero transition on the cream canvas.
- **CLIENT CONTENT:** Core dual value pillars: Grelhados na brasa & Cerveja trincando de gelada.
- **CLIENT ASSET:** Vector line-art icons: (1) Flame/Skewer icon, (2) Ice/Beer mug icon.
- **COPY REQUIRED:**
  - *Main Headline:* `CHURRASCO NA BRASA` <br> `E CERVEJA GELADA`
  - *Column 1 Header:* `ESPETINHOS ARTESANAIS`
  - *Column 1 Copy:* `Espetinhos de carne recheados, queijo coalho e petiscos grelhados na hora.`
  - *Column 2 Header:* `CERVEJA TRINCANDO`
  - *Column 2 Copy:* `Garrafas de 600ml trincando de geladas, trincando no balde de gelo e caipirinhas.`
- **ASSET TRANSFORMATION:** Custom line-art icons matching the 24x24px outline style of the reference.
- **COLOR TRANSFORMATION:** Background: Warm Cream (`#F8F8EF`). Text & Icons: Charcoal (`#121212`).
- **TYPOGRAPHY TRANSFORMATION:** Stacked all-caps headline (~48px, line-height 1.0). Sub-headers in 14px bold uppercase.
- **STRUCTURAL CHANGE REQUIRED?** **NO.**

---

### SCENE 3: FEATURED PRODUCT SHOWCASE GRID (2x2)

- **REFERENCE ROLE:** 2x2 Product Card Showcase Grid (`FEATURED`).
- **STRUCTURAL PURPOSE:** Showcase flagship offerings inside soft-grey card containers with dual-object photography.
- **CLIENT CONTENT:** The four flagship menu specialties of Moinho Bar & Grill.
- **CLIENT ASSETS:**
  1. **Card 1 (Kafta com Queijo):** [`imgi_24_AHRPTWl0Pe86wDzBHLFlpry...jpg`](file:///c:/cli/Moinho%20V2/imagens/imgi_24_AHRPTWl0Pe86wDzBHLFlpryltCR7yC9tJb8lT54oFUjAahJC-0NnNDMUsdiVV9G5oO9yzHFBL9hm8_Fw6VN6hfA4wc_h389FTwtBVHzpZuQlHut93z9-PBZK0ZA5Cvnx3ZIjFKqjhO1eQTqaG7Q=s516-k-no.jpg)
  2. **Card 2 (Torresmo de Rolo):** [`imgi_28_AHRPTWlgVJP7dXvKNJRuVm07...jpg`](file:///c:/cli/Moinho%20V2/imagens/imgi_28_AHRPTWlgVJP7dXvKNJRuVm07oOcrl3YLp7V3iTrS5GpcHFDUgdxZIJCKRDcw4rBni6biuFeOtL1QvuEMohdEh-bd5ga9nxqP4SZuCmBpsQwzovfmYBEwBKzjMRF01VPV48YqU7N_6Pm4icfyKfs=s516-k-no.jpg)
  3. **Card 3 (Almoço Executivo / Parmegiana):** [`imgi_38_AHRPTWnPV1-5dobPB...jpg`](file:///c:/cli/Moinho%20V2/imagens/imgi_38_AHRPTWnPV1-5dobPBQCtG3DQ-JMuL-U52e-2klTqxW8Lxs4ZjHxrWKryGTEdNtdof-rJ3OlnLUZWp3n0cV8cMXrN6w4IovOXRGjYUryiB9PglYOAx12HhDla_SUz5bn67RlZ14d5USAXOPuVFSA=s677-k-no.jpg)
  4. **Card 4 (Balde de Cerveja Antarctica):** [`imgi_32_AHRPTWntcqAsY-D7frFvU3...jpg`](file:///c:/cli/Moinho%20V2/imagens/imgi_32_AHRPTWntcqAsY-D7frFvU3_zmBL3rMyyMlUNwLd4FHTqFphAmCwKDHrxbWz_jVbpXao5mqFCOzZCV6jZvwIXMRuEPvAjbhedvY-K-3hEk2iqwGhbVpoYsuV0xbrUA5WDw6cNR06H05ErBl8WoMh2=s677-k-no.jpg)
- **COPY REQUIRED:**
  - *Section Title:* `ESPECIALIDADES`
  - *Card 1:* Title: `KAFTA RECHEADA COM QUEIJO`, Sub: `Acompanha vinagrete`, Price: `ESPETINHO GOURMET`, CTA: `VER DETALHES`
  - *Card 2:* Title: `TORRESMO DE ROLO CROCANTE`, Sub: `Servido com farofa e pimenta biquinho`, Price: `PORÇÃO DA CASA`, CTA: `VER DETALHES`
  - *Card 3:* Title: `PARMEGIANA EXECUTIVA`, Sub: `Almoço completo com fritas, arroz e feijão`, Price: `ALMOÇO DO DIA`, CTA: `VER DETALHES`
  - *Card 4:* Title: `BALDE DE CERVEJA GELADA`, Sub: `Garrafas 600ml trincando no gelo`, Price: `BEBIDAS & BEER`, CTA: `VER DETALHES`
- **ASSET TRANSFORMATION:** Fit images into 4:5 vertical rounded containers (`#F3F3F3` background), applying slight object-fit cover and uniform warm contrast color balance to harmonize all four shots.
- **COLOR TRANSFORMATION:** Card background: `#F3F3F3`, Text: Charcoal (`#121212`), Pill Button: Outline `#121212`.
- **TYPOGRAPHY TRANSFORMATION:** All-caps card titles in bold sans-serif (~18px), category tags in 12px uppercase, pill CTA button.
- **STRUCTURAL CHANGE REQUIRED?** **NO.**

---

### SCENE 4: BRAND STORY SCENE ("HELLO, YOU")

- **REFERENCE ROLE:** Brand Story Scene with Moiré Starburst Emblem.
- **STRUCTURAL PURPOSE:** Introduce the house environment, family history, and welcoming atmosphere.
- **CLIENT CONTENT:** The story and vibe of Moinho Bar & Grill in São Bernardo do Campo.
- **CLIENT ASSET:** Custom line-art Moinho windmill starburst emblem (`moinho-starburst.svg`).
- **COPY REQUIRED:**
  - *Emblem:* Moinho vector starburst line-art icon (~64x64px).
  - *Headline:* `BEM-VINDO AO` <br> `MOINHO`
  - *Body Copy:* `Um ambiente familiar, aconchegante e alegre no coração de São Bernardo do Campo. Seja para o almoço rápido durante a semana ou para celebrar o final de semana com os amigos, nossa casa está sempre pronta para te receber.`
  - *CTA Button:* `SOBRE A CASA`
- **ASSET TRANSFORMATION:** Render custom vector starburst icon above left-aligned title.
- **COLOR TRANSFORMATION:** Canvas: `#F8F8EF`. Text: `#121212`. CTA Button: Solid Black fill (`#121212`), White text.
- **TYPOGRAPHY TRANSFORMATION:** Stacked all-caps headline (`BEM-VINDO AO / MOINHO`), ~44px. Solid black pill button.
- **STRUCTURAL CHANGE REQUIRED?** **NO.**

---

### SCENE 5: RETAILER & LOCATION FINDER ("FIND A MOTH")

- **REFERENCE ROLE:** Location / Retailer Finder Block.
- **STRUCTURAL PURPOSE:** Provide clear geographic location, address, and navigation actions.
- **CLIENT CONTENT:** Address, landmark, and directions for Moinho Bar & Grill.
- **CLIENT ASSET:** [`imgi_26_AHRPTWmYdFDWG5eeyyAD4rln...jpg`](file:///c:/cli/Moinho%20V2/imagens/imgi_26_AHRPTWmYdFDWG5eeyyAD4rlnW0uZWbpOWri0eH9bJ_UOWHJ2B0I0Qte3ujLUiUMy5nIyviy0ySfZ7NMJOI0HPxRqiTAApBhIn_-5P7fAO9KPMzSehoHr5W_xJ9TtKzXCsV4RZ9pY0ckmKi6O1rA1=s677-k-no.jpg) (Building Façade photo).
- **COPY REQUIRED:**
  - *Headline:* `ONDE ESTAMOS`
  - *Body Copy:* `Av. Moinho Fabrini, 635 - Independência, São Bernardo do Campo - SP, 09862-000. Fácil localização no cruzamento principal com espaço amplo.`
  - *CTA Button:* `ABRIR NO GOOGLE MAPS`
- **ASSET TRANSFORMATION:** Full-width hairline divider above section. Building façade photo integrated smoothly into a side column or background card context.
- **COLOR TRANSFORMATION:** Canvas: `#F8F8EF`. Text: `#121212`. Divider: `#E0E0E0`. Button: Solid Black fill.
- **TYPOGRAPHY TRANSFORMATION:** All-caps headline `ONDE ESTAMOS` (~40px), concise address body copy, solid black pill CTA.
- **STRUCTURAL CHANGE REQUIRED?** **NO.**

---

### SCENE 6: SOCIAL HEADER BAR ("FOLLOW US")

- **REFERENCE ROLE:** Social Media Link Bar.
- **STRUCTURAL PURPOSE:** Drive social engagement to the client's Instagram page.
- **CLIENT CONTENT:** Instagram handle `@moinhobargrill`.
- **CLIENT ASSET:** Instagram outline camera icon SVG.
- **COPY REQUIRED:**
  - *Left Title:* `SIGA O MOINHO`
  - *Right Icon Link:* Instagram camera outline icon leading to `https://instagram.com/moinhobargrill`
- **ASSET TRANSFORMATION:** Clean horizontal flex row with space-between alignment.
- **COLOR TRANSFORMATION:** Canvas: `#F8F8EF`. Text & Icon: `#121212`.
- **TYPOGRAPHY TRANSFORMATION:** All-caps title (`SIGA O MOINHO`), ~36px.
- **STRUCTURAL CHANGE REQUIRED?** **NO.**

---

### SCENE 7: DARK FOOTER & GIANT WORDMARK ("MOTH:")

- **REFERENCE ROLE:** Giant Footer Brand Wordmark & Global Footer Navigation.
- **STRUCTURAL PURPOSE:** Anchor the bottom of the page with extreme brand presence, contact information, operating hours, and legal details inside a full-bleed dark field.
- **CLIENT CONTENT:** Full Moinho Bar & Grill footer information.
- **CLIENT ASSET:** Giant vector typography `MOINHO:`.
- **COPY REQUIRED:**
  - *Giant Wordmark:* `MOINHO:` (Spanning full canvas width at top of dark footer).
  - *Newsletter / Wpp Label:* `RECEBA NOVIDADES E PROGRAMAÇÃO`
  - *Input Placeholder:* `Seu e-mail ou WhatsApp`
  - *Navigation Links:* `CARDÁPIO` | `ALMOÇO EXECUTIVO` | `PETISCOS & DRINKS` | `MÚSICA AO VIVO` | `LOCALIZAÇÃO`
  - *Operating Hours Block:* `Seg-Qua: 11:30–15:30` | `Qui-Sáb: 11:30–23:00` | `Dom: a partir das 11:00`
  - *Address Block:* `Av. Moinho Fabrini, 635 - SBC - SP` | `Tel: (11) 95762-3706`
  - *Copyright:* `© 2026 Moinho Bar & Grill. Todos os direitos reservados.`
- **ASSET TRANSFORMATION:** Giant SVG typography rendering `MOINHO:` across the top margin of the footer, bleeding into edges.
- **COLOR TRANSFORMATION:** Background: Pitch Black (`#0E0E0E`). Text & Wordmark: Pure White (`#FFFFFF`).
- **TYPOGRAPHY TRANSFORMATION:** Wordmark at ~120px+ font size. Nav links in 13px all-caps sans-serif.
- **STRUCTURAL CHANGE REQUIRED?** **NO.**

---

## 3. SUMMARY OF ASSET ADAPTATION TECHNIQUES

To maintain 100% fidelity to the reference layout without resorting to generic templates, client images will undergo specific non-destructive CSS/canvas transformations:

1. **`imgi_30_AHRPTWk...jpg` (Heineken Bucket):** Masking & subtle vignette background blend to seamlessly fuse the ambient backdrop into the Hero `#0E0E0E` dark field.
2. **`imgi_24_AHRPTWl...jpg` (Kafta com Queijo):** Soft crop to 4:5 vertical ratio, placed inside `#F3F3F3` card container with warm color balancing.
3. **`imgi_28_AHRPTWlg...jpg` (Torresmo de Rolo):** Soft crop to 4:5 vertical ratio, matching Card 2 container.
4. **`imgi_38_AHRPTWn...jpg` (Parmegiana Almoço):** Soft crop focusing on the executive plate composition for Card 3 container.
5. **`imgi_32_AHRPTWnt...jpg` (Antarctica Bucket):** Soft crop to 4:5 vertical ratio, matching Card 4 container.
6. **`imgi_26_AHRPTWm...jpg` (Façade Corner):** Integrated in Scene 5 ("ONDE ESTAMOS") to visually validate location credibility.

---

## 4. COMPLIANCE & NEXT STEPS

- **Structural Changes:** **0 structural changes required.** All client material fits 100% into the locked 7-scene reference layout.
- **Fidelity Status:** Reference architecture, visual rhythm, typography scales, color-field shifts, and 10 structural signatures are completely preserved.

CLIENT MAPPING LOCKED — READY FOR HERO PROTOTYPE
