# Milun Healthcare

A modern, SEO-optimized pharmaceutical website built with Next.js 15, showcasing healthcare products with comprehensive information and stunning UI.

## 🚀 Features

- **9 Pharmaceutical Products** - Complete product catalog with detailed information
- **Dynamic Product Pages** - Individual pages for each product with full specifications
- **SEO Optimized** - Meta tags, OpenGraph, Twitter Cards, JSON-LD structured data
- **Dynamic Sitemap** - Auto-generated XML sitemap for search engines
- **Responsive Design** - Mobile-friendly UI built with Tailwind CSS
- **Image Carousels** - Interactive product image galleries
- **Contact Integration** - WhatsApp and contact form CTAs

## 📦 Products

1. **Mi Sum Vit™** - Multivitamin & Antioxidant Supplement
2. **Mi Red Z One™** - Iron, Folic Acid & Zinc Supplement
3. **Mi Cal ZM™** - Calcium, Vitamin D3, Magnesium & Zinc
4. **Mi Cal K2™** - Complete Bone Health & Calcium Supplement
5. **Mi D Max™** - Vitamin D3 & Calcium Supplement
6. **Mi L Gest™** - Pregnancy Support & Luteal Phase Supplement
7. **Ferti Fa - Q10™** - Premium Fertility & Reproductive Health Support
8. **Doxy Mil-OD™** - Pregnancy Nausea & Vomiting Relief
9. **Etomil-90™** - Advanced COX-2 Inhibitor Pain Relief
10. **EtoMil MR™** - Pain Relief & Muscle Relaxation

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Package Manager:** pnpm

## 📋 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
milunhealthcare/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── products/
│   │   ├── page.tsx        # Products listing
│   │   └── [slug]/
│   │       ├── layout.tsx  # Product detail layout (SEO metadata)
│   │       └── page.tsx    # Dynamic product detail pages
│   └── sitemap.ts          # Dynamic XML sitemap
├── components/
│   ├── ui/                 # Reusable UI components
│   └── theme-provider.tsx  # Theme configuration
├── lib/
│   ├── products.ts         # Product data source
│   └── utils.ts            # Utility functions
├── public/
│   ├── logo.png            # Company logo
│   ├── robots.txt          # Search engine directives
│   └── products/           # Product images
└── styles/
    └── globals.css         # Additional global styles
```

## 🔍 SEO Features

- **Dynamic Meta Tags** - Title, description, keywords for each page
- **OpenGraph Tags** - Social media sharing optimization
- **Twitter Cards** - Twitter-specific meta tags
- **Canonical URLs** - Prevent duplicate content issues
- **JSON-LD Schema** - Product structured data for rich snippets
- **XML Sitemap** - `/sitemap.xml` for search engine crawling
- **Robots.txt** - Search engine crawling guidelines

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/milunhealthcare)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Deploy to Netlify

1. Push code to GitHub
2. Connect repository in Netlify
3. Deploy with default settings

## 📝 Configuration

Before deploying, update these files with your actual domain:

- `lib/products.ts` - Update image URLs
- `app/products/[slug]/layout.tsx` - Update canonical URLs
- `app/products/[slug]/page.tsx` - Update JSON-LD URLs
- `app/sitemap.ts` - Update base URL
- `public/robots.txt` - Update sitemap URL

## 📞 Contact

- **Website:** https://milunhealthcare.com
- **WhatsApp:** +91 9490370472
- **Manufacturer:** Milun Pharmaceuticals Limited

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

Built with ❤️ using modern web technologies for healthcare excellence.
