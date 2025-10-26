# ⚡ Quick Start Guide

Panduan super cepat untuk running BarberCho website dalam 5 menit! 🚀

---

## 🎯 Step 1: Clone Repository

```bash
git clone https://github.com/yourusername/barbercho.git
cd barbercho
```

---

## 📦 Step 2: Install Dependencies

```bash
npm install
```

**Atau dengan yarn:**
```bash
yarn install
```

---

## 🚀 Step 3: Run Development Server

```bash
npm run dev
```

Website akan running di: **http://localhost:5173** 🎉

---

## ✏️ Step 4: Customize (Optional)

### Update Contact Info

**Edit `src/components/Contact.tsx`:**
```typescript
// Line ~35: Update phone number
phone: '0851-6638-4874'  // Ganti dengan nomor Anda

// Line ~48: Update Instagram
href="https://www.instagram.com/your_instagram"

// Line ~68: Update Google Maps
href="YOUR_GOOGLE_MAPS_LINK"
```

### Update WhatsApp Links

Search and replace di semua files:
```bash
# Find: 62851663484874
# Replace with: YOUR_WHATSAPP_NUMBER
```

### Change Colors

**Edit `tailwind.config.js`:**
```javascript
colors: {
  primary: {
    500: '#YOUR_PRIMARY_COLOR'
  },
  accent: {
    500: '#YOUR_ACCENT_COLOR'
  }
}
```

---

## 🏗️ Step 5: Build for Production

```bash
npm run build
```

Build files akan ada di folder `dist/`

---

## 🌐 Step 6: Deploy to Cloudflare

### Option A: Via GitHub (Easiest)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Login ke [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Workers & Pages > Create > Pages > Connect to Git
   - Select repository
   - Build command: `npm run build`
   - Build output: `dist`
   - Deploy! ✨

### Option B: Direct Upload

```bash
npm install -g wrangler
wrangler login
npm run build
wrangler pages deploy dist --project-name=barbercho
```

**Done!** 🎊 Website Anda sudah live!

---

## 📋 Checklist

Sebelum launch, pastikan:

- [ ] ✅ Contact info sudah diupdate
- [ ] ✅ WhatsApp number benar
- [ ] ✅ Instagram link benar
- [ ] ✅ Google Maps link benar
- [ ] ✅ Operating hours sudah benar
- [ ] ✅ Services dan pricing sudah diupdate
- [ ] ✅ Portfolio images sudah diganti
- [ ] ✅ Testimonials sudah real
- [ ] ✅ Test di mobile device
- [ ] ✅ Test semua links
- [ ] ✅ Build success
- [ ] ✅ Website deployed

---

## 🆘 Troubleshooting

### Port Already in Use?
```bash
# Kill process on port 5173
npx kill-port 5173

# Or change port in vite.config.ts
```

### Build Error?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### Module Not Found?
```bash
# Make sure all dependencies installed
npm install
```

---

## 🎓 Learn More

- 📖 [Full Documentation](README.md)
- 🚀 [Deployment Guide](DEPLOYMENT.md)
- 📝 [Changelog](CHANGELOG.md)

---

## 💬 Need Help?

- 📱 WhatsApp: [0851-6638-4874](https://wa.me/62851663484874)
- 📸 Instagram: [@barbercho.ind](https://www.instagram.com/barbercho.ind)

---

<div align="center">

**🎉 Happy Coding!**

Made with ❤️ by BarberCho Team

</div>

