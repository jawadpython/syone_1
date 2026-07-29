# SY'ONE Consulting — Development Plan

Reference document for the SY'ONE corporate website. Based on `Brief_Site_Web_SYONE_Developer_V2.docx`, `PROJECT_RULES.md`, and the illustrative mockup (Figure 1 in the brief).

---

## 1. Project Overview

| Item | Detail |
|------|--------|
| **Type** | Corporate showcase site (B2B) |
| **Stack** | Next.js 15, React, TypeScript, Tailwind CSS, App Router |
| **Animation** | Framer Motion |
| **Languages** | French (default) + English |
| **Domain** | syone-consulting.com |
| **Style** | Premium, dark, sober — navy / electric blue / violet |

**Core promise to convey:** From strategy to execution, with real-world grounding. Senior involvement, sector specialization, mobilization of expert network.

**Site objective:** Present SY'ONE's positioning clearly, highlight expertises, build credibility with B2B prospects, and enable simple contact.

---

## 2. Brand & Design Tokens

### Colors

| Name | Code | Usage |
|------|------|-------|
| Bleu nuit principal | `#071E61` | Header, hero, dark sections |
| Bleu électrique | `#0569FF` | Primary CTAs, accents |
| Violet d'accent | `#5E35F2` | Highlights, gradients |
| Bleu cyan secondaire | `#16BCEB` | Secondary accents |
| Gris texte | `#475569` | Body text |
| Gris secondaire | `#64748B` | Muted text |
| Gris clair de fond | `#F4F7FB` | Light section backgrounds |
| Blanc | `#FFFFFF` | Text on dark, cards |

### Tone

Sobre, expert, orienté résultats — no unnecessary jargon, no excessive marketing. Reflect a cabinet that understands field realities and turns ambition into concrete execution.

### Visual direction

Premium, modern, sober — consulting firm style. Clear information hierarchy. Highly readable on desktop and mobile. Alternate editorial sections, case studies, key figures, and expertise content. Client references central but anonymized.

---

## 3. Contact & Business Info

| Item | Value |
|------|-------|
| Company | SY'ONE Consulting |
| Phone | +212 6 61 16 12 35 |
| Email (primary) | contact@syone-consulting.com |
| Email (secondary) | y.ziad@syone-consulting.com |
| LinkedIn Yassine Ziad | https://www.linkedin.com/in/ziadyassine |
| LinkedIn Youssef Zerrari | https://www.linkedin.com/in/youssef-zerrari-17ba993 |
| LinkedIn company | https://www.linkedin.com/company/syone-consulting/ |
| Hours | Réception et rendez-vous sur demande |
| Legal address | Do NOT display publicly |

**Form routing:** Messages sent to `contact@syone-consulting.com`, with copy or redirect to `y.ziad@syone-consulting.com`.

**Client references:** Only as anonymized case studies — never named clients.

---

## 4. Pages

| # | Route (FR) | Route (EN) | Purpose |
|---|------------|------------|---------|
| 1 | `/` | `/en` | Home — positioning, pillars, cas d'usage teaser, CTAs |
| 2 | `/expertises` | `/en/expertises` | 6 expertise domains |
| 3 | `/notre-approche` | `/en/our-approach` | 5-step methodology |
| 4 | `/equipe` | `/en/team` | Founders + expert network |
| 5 | `/cas-d-usage` | `/en/case-studies` | 6 anonymized case studies |
| 6 | `/contact` | `/en/contact` | Contact form + coordinates |
| 7 | `/mentions-legales` | `/en/legal-notice` | Legal notice |
| 8 | `/politique-de-confidentialite` | `/en/privacy-policy` | Privacy policy + form consent |

**Not at launch (future-ready):** Actualités / blog — structure should allow adding cases and news later without refactor.

### UX rules

- Contact form only on dedicated Contact page (reachable via CTAs: "Nous contacter", "Parler à un expert", nav "Contact")
- No public legal address
- Client references only as anonymized case studies
- Responsive: desktop, tablet, mobile
- FR / EN language switcher visible in header
- Clear navigation, no excessive depth
- Legal pages + form consent required

---

## 5. Sections by Page

### 5.1 Home (`/`)

| Order | Section | Content |
|-------|---------|---------|
| 1 | **Hero** | Title, subtitle, 2 CTAs |
| 2 | **Introduction** | Who SY'ONE is |
| 3 | **Positioning block** | Value beyond cadrage deliverables |
| 4 | **Cas d'usage preview** | Strong visual — immediately after positioning |
| 5 | **Value pillars** | 4 cards |
| 6 | **Expertises teaser** | Grid preview → Expertises page |
| 7 | **Approche teaser** | 5 steps summary → Notre approche page |
| 8 | **Équipe teaser** | Founders preview → Équipe page |
| 9 | **Contact CTA band** | Short prompt + "Parler à un expert" |

#### Hero content (FR)

- **Title:** De la stratégie à l'exécution, sans perdre la réalité du terrain.
- **Subtitle:** SY'ONE accompagne les institutions financières dans leurs transformations digitales, technologiques et opérationnelles, du cadrage des décisions jusqu'à la production de résultats mesurables.
- **CTAs:** "Découvrir nos expertises" · "Discutons de votre projet"

#### Introduction

SY'ONE est un cabinet de conseil spécialisé dans la transformation digitale, l'IT, la Data, l'IA et la performance opérationnelle. Nous intervenons là où les cabinets classiques s'arrêtent souvent : au point de passage entre la recommandation stratégique, la complexité réelle du terrain et l'exécution effective des transformations.

#### Positioning block

Notre valeur ne repose pas uniquement sur des livrables de cadrage. Elle repose sur notre capacité à sécuriser les arbitrages, structurer les trajectoires, mobiliser les bonnes expertises et accompagner les organisations jusqu'aux résultats attendus.

#### Value pillars (4)

1. **Vision stratégique** — nous traduisons vos ambitions en trajectoires claires et réalistes.
2. **Exécution pragmatique** — nous livrons avec méthode, discipline et sens du résultat.
3. **Ancrage métier & terrain** — nous intégrons la réalité opérationnelle pour des solutions adoptées.
4. **Création de valeur durable** — nous mesurons l'impact et accélérons la performance dans la durée.

#### Cas d'usage on home (priority)

Must appear **very high on the home page**, immediately after positioning. Strong visual treatment: challenge, value delivered, and validated metrics only when approved.

---

### 5.2 Expertises (`/expertises`)

| Section | Content |
|---------|---------|
| Page hero | Intro text |
| Expertise grid | 6 domains |

#### Intro

SY'ONE concentre son intervention sur un spectre ciblé d'expertises, au service des institutions financières. Notre promesse est d'apporter le bon niveau de spécialisation sans diluer la lisibilité de notre valeur.

#### 6 expertise domains

1. **Digital Banking & expérience client** — Conception et transformation de parcours clients, plateformes digitales, offres omnicanales, e-KYC, CRM, marketing digital et adoption.
2. **IT, architecture & plateformes** — Architecture d'entreprise, urbanisation, API, intégration, cloud, cybersécurité, résilience et transformation des plateformes.
3. **Data, IA & automatisation** — Gouvernance Data, valorisation des données, priorisation de cas d'usage IA, automatisation et pilotage par la valeur.
4. **Operating model & delivery** — Structuration de tribes, squads, Digital Factory, PMO d'exécution, Agile@Scale, staffing, gestion des dépendances et gouvernance.
5. **Performance opérationnelle** — Refonte de processus, amélioration de la qualité de service, optimisation des coûts, KPI, SLA et efficacité opérationnelle.
6. **Transformation des métiers financiers** — Accompagnement des métiers du Retail Banking, Corporate Banking, BFI, crédit, risques, conformité et expérience collaborateur.

---

### 5.3 Notre approche (`/notre-approche`)

| Section | Content |
|---------|---------|
| Page hero | Title + intro |
| Methodology steps | 5 steps |
| Key message highlight | Positioning statement |

#### Title

Une approche conçue pour transformer les décisions en résultats.

#### Intro

Nos missions sont volontairement orientées exécution. Nous combinons vision, sélectivité, gouvernance et capacité de mobilisation pour transformer des ambitions souvent complexes en trajectoires concrètes et pilotables.

#### 5 steps

| Step | Name | Description |
|------|------|-------------|
| 1 | **Aligner** | Clarifier la vision, les objectifs, les sponsors, les contraintes et les critères de succès. |
| 2 | **Prioriser** | Évaluer la valeur métier, la complexité, les risques et les dépendances afin de concentrer l'effort sur l'essentiel. |
| 3 | **Structurer** | Définir le MVP, les releases, le modèle cible, le budget, le staffing et la gouvernance. |
| 4 | **Orchestrer** | Coordonner métiers, IT, Data, architecture, sécurité et delivery autour d'une trajectoire exécutable. |
| 5 | **Mesurer** | Suivre l'adoption, la performance, les risques et la valeur produite pour ajuster rapidement la trajectoire. |

#### Key message

SY'ONE se positionne là où beaucoup de cabinets s'arrêtent : entre le diagnostic, l'arbitrage stratégique et la réalité du delivery.

---

### 5.4 Équipe (`/equipe`)

| Section | Content |
|---------|---------|
| Page hero | Intro + complementary text |
| Founders | Yassine Ziad, Youssef Zerrari |
| Expert network | 6 expert categories |

#### Intro

SY'ONE ne se limite pas aux deux fondateurs comme seules ressources de delivery. Le cabinet s'appuie sur un réseau activable de consultants et d'experts seniors, sélectionnés pour leur niveau, leur spécialisation et leur capacité à intervenir rapidement sur des problématiques ciblées.

#### Complementary text

Les fondateurs restent néanmoins directement impliqués dans le cadrage, les arbitrages structurants et la garantie de qualité des missions. Ils constituent le point d'ancrage de la relation client et s'assurent que les interventions restent cohérentes, exigeantes et orientées résultats.

#### Founders

**Yassine Ziad — Dirigeant fondateur**
Expert en stratégie, transformation digitale, gouvernance IT et pilotage de programmes complexes. 18 années d'expérience dans le secteur bancaire, avec des responsabilités de direction couvrant l'innovation, le Digital Banking, la production informatique, le pilotage budgétaire et la conduite de programmes structurants.

**Youssef Zerrari — Co-fondateur et associé principal**
Expert en Digital Banking, architecture, technologie, operating models et transformation à l'échelle. Parcours de direction au sein d'établissements financiers de premier plan, avec des responsabilités exécutives en stratégie digitale, innovation, Digital Factory, Agile@Scale et customer success.

#### Expert network categories

- Experts Digital Banking et expérience client
- Architectes d'entreprise et experts IT / cloud / API
- Experts Data, IA et automatisation
- Profils cybersécurité et résilience
- Experts delivery, PMO, Agile et transformation organisationnelle
- Spécialistes performance opérationnelle et conduite du changement

---

### 5.5 Cas d'usage (`/cas-d-usage`)

| Section | Content |
|---------|---------|
| Page hero | Confidentiality intro |
| Case study grid | 6 anonymized cases |

#### Intro

Pour des raisons de confidentialité, les références sont présentées sous forme anonymisée. L'objectif est de donner à voir le type de transformation accompagnée, la posture de SY'ONE et la nature de la valeur créée.

#### 6 case studies

Each card: **title**, **challenge/context**, **value delivered**, optional **metrics** (only when client-validated).

1. **Cadrage d'un programme stratégique BFI** — Structuration d'un programme de poste de travail augmenté pour des équipes de Banque de Financement et d'Investissement : définition de la vision cible, périmètre MVP, trajectoire de releases, gouvernance, staffing et préparation des décisions d'investissement.

2. **Création et accélération d'une Digital Factory** — Mise en place d'un modèle opérationnel visant à accélérer la livraison de solutions digitales, structurer les équipes, renforcer l'agilité et améliorer l'alignement entre technologie et business.

3. **Transformation du Digital Banking** — Conception et pilotage de feuilles de route digitales, refonte de parcours clients, lancement de services digitaux et renforcement de l'expérience omnicanale.

4. **Gouvernance Data et IA** — Définition d'un cadre de gouvernance, priorisation de cas d'usage IA et mise en cohérence entre enjeux métiers, données disponibles et capacité d'exécution.

5. **Performance IT et opérations** — Renforcement de la résilience, optimisation des opérations, amélioration des dispositifs de pilotage et maîtrise des coûts sur des environnements critiques.

6. **Transformation des processus métiers** — Refonte de processus et amélioration de l'efficacité opérationnelle sur des domaines à forts enjeux tels que le crédit, les risques, la relation client et le poste de travail collaborateur.

---

### 5.6 Contact (`/contact`)

| Section | Content |
|---------|---------|
| Page hero | Invitation text |
| Contact form | 6 fields + consent |
| Contact details | Phone, emails, LinkedIn |
| Footer note | Hours message |

#### Page text

Vous souhaitez cadrer une transformation, sécuriser une décision structurante ou accélérer un programme en cours ? Échangeons sur vos enjeux et sur les expertises les plus pertinentes à mobiliser.

#### Form fields

- Nom
- E-mail professionnel
- Entreprise
- Téléphone
- Besoin principal
- Message
- Consent checkbox (privacy policy)

#### Bottom message

Réception et rendez-vous sur demande.

---

### 5.7 Legal pages

| Page | Sections |
|------|----------|
| Mentions légales | Publisher, hosting (TBD at deploy), IP, liability |
| Politique de confidentialité | Data collection (form), purpose, retention, rights, consent |

---

## 6. Layout Components (global)

| Component | Role |
|-----------|------|
| `Header` | Logo, main nav, FR/EN switcher, "Parler à un expert" CTA |
| `Footer` | Logo, quick links, contact summary, social (3 LinkedIn), legal links |
| `MainLayout` | Header + `{children}` + Footer |
| `PageHero` | Reusable inner-page hero (title, subtitle, optional breadcrumb) |
| `SectionContainer` | Max-width + responsive padding |
| `SectionHeader` | Eyebrow label + title + optional "Voir tout" link |
| `LanguageSwitcher` | FR \| EN in header |
| `MobileNav` | Mobile navigation overlay |
| `CookieConsentBanner` | Optional at v1 |

### Navigation (FR)

Accueil · Expertises · Notre approche · Cas d'usage · Équipe · Contact

---

## 7. Page-Specific Components

| Component | Used on |
|-----------|---------|
| `HomeHero` | Home |
| `IntroBlock` | Home |
| `PositioningBlock` | Home |
| `ValuePillarGrid` / `ValuePillarCard` | Home |
| `CaseStudyPreview` / `CaseStudyGrid` | Home, Cas d'usage |
| `CaseStudyCard` | Home, Cas d'usage |
| `ExpertiseGrid` / `ExpertiseCard` | Home teaser, Expertises |
| `ApproachSteps` / `ApproachStep` | Home teaser, Notre approche |
| `KeyMessageBanner` | Notre approche |
| `FounderCard` | Home teaser, Équipe |
| `ExpertNetworkList` | Équipe |
| `ContactForm` | Contact |
| `ContactInfo` | Contact, Footer |
| `ContactCTA` | Home |
| `LegalContent` | Mentions légales, Privacy |

---

## 8. Reusable UI Components

| Component | Variants / notes |
|-----------|------------------|
| `Button` | Primary (filled `#0569FF`), Secondary (outline), Ghost; optional arrow icon |
| `Badge` | Category tags on case cards (e.g. "BANQUE & FINANCE") |
| `Card` | Base surface — light `#F4F7FB` / dark navy sections |
| `IconBlock` | Icon + title + description (pillars, expertise) |
| `StatItem` | Large number + label (home stats — content TBD with client) |
| `Divider` | Section separators |
| `Input`, `Textarea`, `Select` | Contact form |
| `Checkbox` | Privacy consent on form |
| `Link` | Internal + external (LinkedIn opens new tab) |
| `Logo` | Color (light bg) + white (dark bg); SVG preferred |
| `ImageWithFallback` | Founder photos, case illustrations |
| `AnimatedCounter` | Optional stats count-up |
| `ScrollReveal` | Wrapper for section entrance animations |
| `Typography` | `Heading`, `Subheading`, `Body`, `Eyebrow` |
| `Grid` | Responsive 1 → 2 → 4 columns |
| `SocialLinks` | LinkedIn × 3 |

---

## 9. Animations (Framer Motion)

Keep motion subtle and corporate — no flashy effects.

| Element | Animation | Trigger |
|---------|-----------|---------|
| Hero background | Slow gradient / abstract light drift (CSS or light canvas) | Always |
| Hero text + CTAs | Fade-up + stagger (0.1s) | On load |
| Section blocks | Fade-up + slight Y (20px → 0) | Scroll into view (once) |
| Value pillar cards | Stagger fade-up | Scroll |
| Case study cards | Stagger + hover lift (`y: -4`, shadow) | Scroll + hover |
| Expertise cards | Hover border/glow accent | Hover |
| Approach steps | Sequential reveal left→right (desktop); stack on mobile | Scroll |
| Founder cards | Fade + scale (0.98 → 1) | Scroll |
| Stats (if used) | Count-up numbers | Scroll |
| Header | Background blur / solid on scroll | Scroll |
| Mobile nav | Slide-down overlay | Toggle |
| Page transitions | Optional subtle fade between routes | Route change |
| Form submit | Button loading state | Submit |
| CTA buttons | Arrow slide on hover | Hover |

**Performance:** Prefer `transform` and `opacity`; respect `prefers-reduced-motion`.

---

## 10. Folder Structure (Next.js 15 App Router)

```text
pro1/
├── public/
│   ├── logos/
│   │   ├── syone-color.svg
│   │   └── syone-white.svg
│   ├── images/
│   │   ├── founders/
│   │   │   ├── yassine-ziad.jpg
│   │   │   └── youssef-zerrari.jpg
│   │   ├── cases/              # abstract illustrations per case
│   │   └── hero/               # hero backgrounds
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── [locale]/                    # fr | en
│   │   │   ├── layout.tsx               # MainLayout, fonts, metadata
│   │   │   ├── page.tsx                 # Home
│   │   │   ├── expertises/page.tsx
│   │   │   ├── notre-approche/page.tsx  # en: our-approach (via routing)
│   │   │   ├── equipe/page.tsx
│   │   │   ├── cas-d-usage/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── mentions-legales/page.tsx
│   │   │   └── politique-de-confidentialite/page.tsx
│   │   ├── api/
│   │   │   └── contact/route.ts         # form handler → email
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MainLayout.tsx
│   │   │   ├── LanguageSwitcher.tsx
│   │   │   └── MobileNav.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── SectionContainer.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── PageHero.tsx
│   │   │   ├── ScrollReveal.tsx
│   │   │   ├── AnimatedCounter.tsx
│   │   │   └── Typography.tsx
│   │   ├── sections/
│   │   │   ├── home/
│   │   │   │   ├── HomeHero.tsx
│   │   │   │   ├── IntroBlock.tsx
│   │   │   │   ├── PositioningBlock.tsx
│   │   │   │   ├── ValuePillars.tsx
│   │   │   │   ├── CaseStudyPreview.tsx
│   │   │   │   ├── ExpertiseTeaser.tsx
│   │   │   │   ├── ApproachTeaser.tsx
│   │   │   │   ├── TeamTeaser.tsx
│   │   │   │   └── ContactCTA.tsx
│   │   │   ├── expertises/
│   │   │   │   └── ExpertiseGrid.tsx
│   │   │   ├── approach/
│   │   │   │   ├── ApproachSteps.tsx
│   │   │   │   └── KeyMessageBanner.tsx
│   │   │   ├── team/
│   │   │   │   ├── FounderCard.tsx
│   │   │   │   └── ExpertNetworkList.tsx
│   │   │   ├── cases/
│   │   │   │   ├── CaseStudyGrid.tsx
│   │   │   │   └── CaseStudyCard.tsx
│   │   │   └── contact/
│   │   │       ├── ContactForm.tsx
│   │   │       └── ContactInfo.tsx
│   │   └── icons/                       # SVG icon set
│   │
│   ├── content/
│   │   ├── fr/
│   │   │   ├── home.json
│   │   │   ├── expertises.json
│   │   │   ├── approach.json
│   │   │   ├── team.json
│   │   │   ├── cases.json
│   │   │   ├── contact.json
│   │   │   └── legal.json
│   │   └── en/                          # mirrored structure
│   │
│   ├── lib/
│   │   ├── i18n/
│   │   │   ├── config.ts
│   │   │   ├── routing.ts
│   │   │   └── request.ts
│   │   ├── metadata.ts                  # SEO per page/locale
│   │   └── utils.ts
│   │
│   ├── types/
│   │   ├── content.ts                   # CaseStudy, Expertise, Founder, etc.
│   │   └── contact.ts
│   │
│   └── styles/
│       └── tokens.css                   # CSS variables (optional)
│
├── messages/                            # if using next-intl JSON catalogs
│   ├── fr.json
│   └── en.json
│
├── PROJECT_RULES.md
├── DEVELOPMENT_PLAN.md                  # this file
├── brief-reference.png                  # illustrative mockup from brief
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

**Content strategy:** Copy lives in JSON under `src/content/{locale}/` so FR/EN stay in sync and cases/news can be added without touching layout code.

---

## 11. i18n & SEO

| Topic | Approach |
|-------|----------|
| **i18n** | `next-intl` with `[locale]` segment; FR default, EN at `/en/...` |
| **Metadata** | Per-page `title`, `description`, Open Graph |
| **Sitemap** | All locales + legal pages |
| **hreflang** | `fr` / `en` alternate links |
| **Performance** | Next.js Image, font subsetting, static generation where possible |
| **Accessibility** | Semantic landmarks, form labels, focus states, alt text on photos |

---

## 12. Assets Required from Client

| Asset | Usage |
|-------|--------|
| Logo SY'ONE (color, white, SVG) | Header, footer, favicon |
| Founder photos (HD) | Équipe + home teaser |
| Optional case illustrations | Cas d'usage cards |
| Validated metrics for cases | Case cards (optional) |
| Legal entity details | Mentions légales (not shown on Contact) |
| Hosting info | Mentions légales at deploy |

---

## 13. Implementation Phases

| Phase | Scope |
|-------|--------|
| **1 — Foundation** | Next.js scaffold, Tailwind theme, i18n, layout (Header/Footer), UI primitives |
| **2 — Home** | All home sections; cas d'usage preview prioritized after positioning |
| **3 — Inner pages** | Expertises, Approche, Équipe, Cas d'usage |
| **4 — Contact & API** | Form, validation, email, consent checkbox |
| **5 — Legal** | Mentions légales, privacy |
| **6 — Polish** | Animations, responsive QA, SEO, Lighthouse, cross-browser |
| **7 — Deploy** | syone-consulting.com, env vars, form email routing |

---

## 14. Open Points (confirm before build)

1. **Home stats block** (mockup shows 15+, 50+, etc.) — not in brief text; omit or get client numbers?
2. **Case study metrics** — only add when explicitly validated.
3. **Email delivery** — Resend, Nodemailer + SMTP, or Formspree?
4. **LinkedIn company page** — URL exists but page may still be "to create".
5. **English copy** — full translation needed for all brief content.

---

## 15. Reference Files

| File | Purpose |
|------|---------|
| `Brief_Site_Web_SYONE_Developer_V2.docx` | Source brief (content authority) |
| `PROJECT_RULES.md` | Tech stack and project constraints |
| `brief-reference.png` | Illustrative visual direction (not pixel-perfect spec) |
| `DEVELOPMENT_PLAN.md` | This document — implementation reference |
