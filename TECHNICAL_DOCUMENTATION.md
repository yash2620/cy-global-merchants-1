# CY Global Merchants — Technical Documentation

## 1. Overview

CY Global Merchants is a **Next.js 15** (App Router) B2B export-import landing platform built with **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. It serves as a digital storefront for Indian sustainable and wellness products targeted at international B2B buyers.

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15.1.7 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 11.18.2 |
| Icons | Lucide React 0.475.0 |
| Forms | react-hook-form 7.54.2 + Zod 3.24.2 |
| Database | Supabase |
| Email | Resend |
| Deployment | Vercel |
| Domain | GoDaddy (cyglobalmerchants.com) |

---

## 2. Project Structure

```
cy-global-merchants/
├── public/
│   └── images/               # Static images (logos, product photos)
├── src/
│   ├── app/
│   │   ├── about/            # About Us page
│   │   ├── actions/
│   │   │   └── inquiry.ts    # Server Action (form submission)
│   │   ├── blog/             # Blog pages (list + [slug])
│   │   ├── contact/          # Contact page
│   │   ├── markets/          # Export Markets page
│   │   ├── products/         # Products catalog
│   │   ├── real-estate/      # Real Estate Advisory page
│   │   ├── globals.css       # Tailwind v4 + custom theme
│   │   ├── layout.tsx        # Root layout (fonts, meta, analytics)
│   │   ├── page.tsx          # Homepage
│   │   ├── robots.ts         # SEO robots
│   │   ├── sitemap.ts        # Dynamic sitemap
│   │   └── favicon.ico
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── Footer.tsx        # Site footer
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── Counter.tsx
│   │       ├── InquiryForm.tsx  # Main B2B inquiry form
│   │       └── WhatsAppButton.tsx
│   └── lib/
│       ├── blogs.ts          # Blog post data (static)
│       ├── resend.ts         # Resend email client
│       └── supabase.ts       # Supabase database client
├── .env.local                # Environment variables (gitignored)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 3. Pages & Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `page.tsx` | Homepage — hero, products, certifications, testimonials, real estate, inquiry form |
| `/about` | `about/page.tsx` | Company story, mission, certifications |
| `/products` | `products/page.tsx` | Product catalog with tab filter + image per product |
| `/markets` | `markets/page.tsx` | Export markets breakdown by country/region |
| `/real-estate` | `real-estate/page.tsx` | Pune real estate advisory service |
| `/blog` | `blog/page.tsx` | Blog listing |
| `/blog/[slug]` | `blog/[slug]/page.tsx` | Individual blog post |
| `/contact` | `contact/page.tsx` | Contact form + details |
| `/sitemap.xml` | `sitemap.ts` | Auto-generated sitemap |
| `/robots.txt` | `robots.ts` | Robots directives |

---

## 4. Key Features

### 4.1 Inquiry Form (`InquiryForm.tsx`)

- **10 fields**: company name, contact person, country, email, WhatsApp, product interest, quantity, target port, delivery date, message
- **Validation**: Zod schema with react-hook-form
- **Submission**: Calls `submitInquiryAction` server action
- **Success**: Shows confirmation; **Error**: Shows fallback WhatsApp contact

### 4.2 Server Action (`actions/inquiry.ts`)

Handles form submission:
1. **Validates** input with Zod
2. **Inserts** into Supabase `inquiries` table
3. **Sends** notification email via Resend to `info@cyglobalmerchants.com`
4. Returns `{ success: true/false }`

### 4.3 Product Pages

- 4 products: Incense Sticks, Brass Handicrafts, Yoga Products, Cotton Tote Bags
- Each has: HS code, description, specifications, applications, industries
- Images loaded from `public/images/`

### 4.4 Analytics (Conditional)

- **Google Analytics 4** — loads if `NEXT_PUBLIC_GA_ID` is set
- **Microsoft Clarity** — loads if `NEXT_PUBLIC_CLARITY_ID` is set

---

## 5. Environment Variables

| Variable | Required | Public | Purpose |
|----------|----------|--------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ Yes | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ Yes | Yes | Supabase anonymous key |
| `RESEND_API_KEY` | ✅ Yes | No | Resend API key for email |
| `NEXT_PUBLIC_GA_ID` | ❌ No | Yes | Google Analytics ID |
| `NEXT_PUBLIC_CLARITY_ID` | ❌ No | Yes | Microsoft Clarity ID |

---

## 6. Database (Supabase)

### Table: `inquiries`

```sql
CREATE TABLE inquiries (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  company_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  country TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp_number TEXT,
  product_interest TEXT,
  quantity TEXT,
  target_port TEXT,
  expected_delivery TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 7. Email (Resend)

- **Sender**: `sourcing@cyglobalmerchants.com`
- **Recipient**: `info@cyglobalmerchants.com`
- **Trigger**: Sent on every inquiry form submission
- **Content**: HTML table with all inquiry details

---

## 8. Deployment

### Build Command
```bash
npm run build
```

### Vercel
- Framework: Next.js (auto-detected)
- Node.js: 18+
- No `vercel.json` needed — default config works
- Environment variables must be set in Vercel dashboard

### GoDaddy DNS
| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `76.76.21.21` | 1 Hour |
| CNAME | www | `cname.vercel-dns.com` | 1 Hour |

---

## 9. Styling System

### Theme Colors (defined in `globals.css`)

| Token | Value | Purpose |
|-------|-------|---------|
| `--color-primary-black` | `#0a0a0a` | Backgrounds |
| `--color-premium-white` | `#f5f5f0` | Text |
| `--color-luxury-gold` | `#c9a84c` | Accents, CTAs |
| `--color-subdued-gray` | `#1a1a1a` | Card backgrounds |
| `--color-emerald-dark` | `#1b3b2b` | Real estate section |

### Fonts
- **Playfair Display** — serif headings
- **Outfit** — sans-serif body text

---

## 10. Custom Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Badge` | `variant: "gold" \| "outline"` | Section label badge |
| `Button` | `variant, size, iconRight` | Styled CTA buttons |
| `Counter` | `end, suffix` | Animated number counter |
| `InquiryForm` | `isRealEstate?, defaultProduct?` | Full inquiry form |
| `WhatsAppButton` | — | Fixed WhatsApp contact button |

---

## 11. SEO

- **Title**: "CY Global Merchants | Premium Indian Sustainable & Wellness Exporter"
- **Canonical**: `https://www.cyglobalmerchants.com`
- **OpenGraph**: Full OG tags with image
- **Sitemap**: Auto-generated with all routes
- **Robots**: Index & follow enabled

---

## 12. Maintenance Notes

- All blog content is **static** in `src/lib/blogs.ts` — update there to add/edit posts
- Product data is **inline** in `products/page.tsx` and `page.tsx`
- Certifications data is inline across multiple pages — update each location
- To add a new product: add data to both `productsData` array and homepage array
