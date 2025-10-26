# 💈 BarberCho - Premium Barbershop Website

<div align="center">

![BarberCho Logo](src/assets/logo.svg)

**Website barbershop premium dengan desain modern dan responsif**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

[Demo Website](https://barbercho.pages.dev) • [Instagram](https://www.instagram.com/barbercho.ind) • [WhatsApp](https://wa.me/62851663484874)

</div>

---

## ✨ Features

### 🎨 Design & UI
- ✅ **Dark Premium Theme** - Tema gelap dengan aksen gold yang elegan
- ✅ **Fully Responsive** - Optimal di semua device (Mobile, Tablet, Desktop)
- ✅ **Modern Animations** - Smooth transitions dan hover effects
- ✅ **Custom Components** - Button, cards, dan component library yang konsisten

### 📱 Sections
- 🏠 **Hero Section** - Landing page dengan CTA yang menarik
- 💼 **Services** - Display layanan barbershop dengan harga
- 📸 **Portfolio** - Galeri hasil karya dengan lightbox view
- 💰 **Pricing** - Paket harga transparan dengan jam operasional
- ⭐ **Testimonials** - Review asli dari pelanggan dengan rating
- 📖 **About Us** - Story dan mission statement
- 📞 **Contact** - Informasi kontak lengkap dengan Google Maps

### 🚀 Functionality
- 📱 **WhatsApp Integration** - Direct booking via WhatsApp dengan template pesan
- 📍 **Google Maps Integration** - Link langsung ke lokasi barbershop
- 📸 **Instagram Integration** - Link ke social media
- 🍔 **Hamburger Menu** - Mobile menu dengan background solid
- 🔝 **Scroll Effects** - Dynamic header saat scroll
- ⚡ **Fast Loading** - Optimized dengan Vite build system

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1** - UI library
- **TypeScript 5.5.3** - Type-safe JavaScript
- **Vite 5.4.2** - Next generation build tool

### Styling
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS 8.4.47** - CSS processor
- **Autoprefixer 10.4.20** - Vendor prefixes

### Icons & Assets
- **Lucide React 0.454.0** - Beautiful icon library
- **Custom SVG Assets** - Logo dan pattern

### Development Tools
- **ESLint 9.11.1** - Code linting
- **TypeScript ESLint 8.7.0** - TypeScript specific linting
- **Vite Plugin React SWC** - Fast refresh

---

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm atau yarn

### Clone Repository
```bash
git clone https://github.com/yourusername/barbercho.git
cd barbercho
```

### Install Dependencies
```bash
npm install
# atau
yarn install
```

### Run Development Server
```bash
npm run dev
# atau
yarn dev
```

Buka browser dan akses `http://localhost:5173`

### Build for Production
```bash
npm run build
# atau
yarn build
```

Build files akan ada di folder `dist/`

### Preview Production Build
```bash
npm run preview
# atau
yarn preview
```

---

## 🌐 Deployment ke Cloudflare Pages

### Method 1: Via GitHub (Recommended)

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/barbercho.git
   git push -u origin main
   ```

2. **Setup Cloudflare Pages**
   - Login ke [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Pilih "Workers & Pages" > "Create application" > "Pages"
   - Connect GitHub account
   - Pilih repository `barbercho`
   - Configure build settings:
     - **Framework preset**: `Vite`
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
   - Click "Save and Deploy"

3. **Done!** 🎉
   - Website akan auto-deploy setiap kali push ke GitHub
   - Custom domain bisa ditambahkan di settings

### Method 2: Direct Upload via Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login ke Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build Project**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   wrangler pages deploy dist --project-name=barbercho
   ```

---

## 📁 Project Structure

```
barbercho/
├── src/
│   ├── assets/          # Images, SVG, icons
│   │   ├── icons/       # Service icons (haircut, beard, etc.)
│   │   └── patterns/    # Background patterns
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── utils/           # Utility functions
│   │   └── animations.ts
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles & Tailwind
├── public/              # Static assets
├── dist/                # Production build
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

---

## 🎨 Customization Guide

### 1. Update Contact Information

Edit informasi kontak di berbagai component:

**`src/components/Contact.tsx`**
```typescript
// Update nomor WhatsApp
href="https://wa.me/YOUR_PHONE_NUMBER"

// Update Instagram
href="https://www.instagram.com/YOUR_INSTAGRAM"

// Update Google Maps
href="YOUR_GOOGLE_MAPS_LINK"
```

### 2. Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#006b54', // Main dark teal/green
    // ... more shades
  },
  accent: {
    500: '#d4af37', // Premium Gold
    // ... more shades
  }
}
```

### 3. Update Services & Pricing

Edit `src/components/Services.tsx` dan `src/components/Pricing.tsx`:
```typescript
const services = [
  {
    icon: Scissors,
    title: 'Your Service',
    description: 'Description',
    price: 'Price',
  },
  // ... more services
];
```

### 4. Add/Update Portfolio Images

Replace images di `src/components/Portfolio.tsx`:
```typescript
const portfolioImages = [
  {
    id: 1,
    src: "/path/to/your/image.jpg",
    title: "Your Title",
    description: "Your Description"
  },
  // ... more images
];
```

### 5. Update Testimonials

Edit `src/components/Testimonials.tsx`:
```typescript
const testimonials = [
  {
    id: 1,
    name: "Customer Name",
    role: "Role",
    rating: 5,
    text: "Review text",
    image: "image-url"
  },
  // ... more testimonials
];
```

### 6. Change Operating Hours

Edit jam operasional di:
- `src/components/Pricing.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

---

## 📱 WhatsApp Integration

Semua tombol WhatsApp menggunakan template pesan:
```
"Halo, saya mau booking haircut dong! ✂️"
```

Format URL:
```
https://wa.me/62XXXXXXXXXX?text=Your%20Message%20Here
```

Untuk mengubah template, edit di semua component yang ada link WhatsApp.

---

## 🎯 Performance Optimization

### Already Implemented
✅ Vite for fast builds  
✅ Code splitting  
✅ Lazy loading images  
✅ Optimized SVG icons  
✅ Minimal dependencies  
✅ Production build minification  

### Recommendations
- 📸 Compress images (use WebP format)
- 🗜️ Enable Cloudflare compression
- 🚀 Use Cloudflare CDN
- ⚡ Enable Cloudflare cache

---

## 📈 SEO Optimization

Update `index.html` untuk SEO:
```html
<title>BarberCho - Premium Barbershop | Your Location</title>
<meta name="description" content="Your description">
<meta property="og:title" content="BarberCho">
<meta property="og:description" content="Your description">
<meta property="og:image" content="your-og-image.jpg">
```

---

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Change port in vite.config.ts
export default defineConfig({
  server: {
    port: 3000 // Change to your preferred port
  }
})
```

### TypeScript Errors
```bash
# Check TypeScript configuration
npm run build -- --noEmit
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**BarberCho Team**
- 🌐 Website: [barbercho.pages.dev](https://barbercho.pages.dev)
- 📸 Instagram: [@barbercho.ind](https://www.instagram.com/barbercho.ind)
- 📱 WhatsApp: [0851-6638-4874](https://wa.me/62851663484874)

---

## 🙏 Acknowledgments

- Design inspiration from premium barbershop themes
- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Built with ❤️ using React & Tailwind CSS

---

## 📞 Support

Butuh bantuan? Silakan hubungi:
- 📧 Email: info@barbercho.com
- 📱 WhatsApp: [0851-6638-4874](https://wa.me/62851663484874)
- 📸 Instagram: [@barbercho.ind](https://www.instagram.com/barbercho.ind)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with 💈 by BarberCho Team

</div>
