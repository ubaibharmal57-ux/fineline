# Fineline System & Services Website

A modern, professional website for Gujarat's premier audio-visual equipment rental company.

## 🎯 Features

- **Dynamic Hero Section** with rotating slideshow highlighting key services
- **Equipment Catalog** with filtering and search functionality
- **Service Pages** for weddings, corporate events, and more
- **Contact Form** with WhatsApp integration for Indian market
- **Mobile-Responsive** design optimized for all devices
- **SEO Optimized** with structured data and meta tags
- **Fast Performance** with Next.js 16 and optimized assets

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Font:** Inter (Google Fonts)
- **Icons:** Material Symbols

## 🎨 Brand Colors

- **Primary (Burnt Orange):** #F5A623
- **Secondary (Grey):** #6B7280
- **Accent:** #F97316

## 📱 Pages

1. **Home** - Hero, equipment showcase, services overview, testimonials
2. **Equipment** - Searchable catalog with categories (Audio, Visual, Computing, Accessories)
3. **Services** - Wedding packages, corporate solutions, delivery & support
4. **About** - Company history, values, 25 years of experience
5. **Contact** - Quote request form, contact info, WhatsApp integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd my-next-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
my-next-app/
├── app/
│   ├── components/       # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── EquipmentShowcase.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── StructuredData.tsx
│   ├── about/           # About page
│   ├── contact/         # Contact page with form
│   ├── equipment/       # Equipment catalog
│   ├── services/        # Services page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   ├── globals.css      # Global styles
│   ├── sitemap.ts       # SEO sitemap
│   ├── robots.ts        # Robots.txt
│   └── manifest.ts      # PWA manifest
├── public/
│   └── fss-logo.jpg     # Company logo
└── package.json
```

## 🎯 Key Features Implemented

### 1. Responsive Design
- Mobile-first approach
- Touch-friendly buttons (44px minimum)
- Optimized for Indian mobile usage patterns
- Hamburger menu for mobile navigation

### 2. SEO Optimization
- Structured data (JSON-LD) for local business
- Meta tags for Open Graph and Twitter
- Sitemap and robots.txt
- Semantic HTML structure
- Optimized images with alt texts

### 3. Performance
- Next.js Image optimization
- Font optimization with display swap
- Compression enabled
- Lazy loading for images
- Minimal JavaScript bundle

### 4. Indian Market Features
- WhatsApp integration for quick contact
- INR pricing display
- Gujarat city coverage
- Local business hours
- Contact numbers with +91 prefix

## 🔧 Configuration

### Update Contact Information

Edit `app/components/Footer.tsx` and `app/contact/page.tsx`:
- Phone numbers
- Email addresses
- Physical address
- Business hours

### Update Domain

Replace `https://fineliness.com` in:
- `app/layout.tsx` (metadataBase)
- `app/sitemap.ts`
- `app/robots.ts`
- `app/components/StructuredData.tsx`

### Add Google Verification

In `app/layout.tsx`, replace `'google-site-verification-code'` with your actual verification code.

## 📊 Equipment Data

Equipment data is currently hardcoded in `app/equipment/page.tsx`. For a production system:

1. Consider moving to a database (PostgreSQL, MongoDB)
2. Or use a CMS (Sanity, Contentful)
3. Or create a JSON API endpoint

## 🌐 Deployment

### Recommended: Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Other Options
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting

## 📝 Customization

### Colors

Edit `app/globals.css` to change brand colors:
```css
:root {
  --fss-primary: #F5A623;
  --fss-secondary: #6B7280;
}
```

### Content

All content is in the page components and can be easily edited:
- Hero taglines: `app/components/HeroSection.tsx`
- Services: `app/services/page.tsx`
- Equipment: `app/equipment/page.tsx`

## 🔐 Security

- No sensitive data in frontend
- Form validation on client side
- HTTPS recommended for production
- Regular dependency updates

## 📞 Support

For issues or questions about the website, contact:
- Email: info@fineliness.com
- Phone: +91 98765 43210

## 📄 License

© 2025 Fineline System & Services. All rights reserved.

---

Built with ❤️ for Gujarat's #1 AV Equipment Rental Company
