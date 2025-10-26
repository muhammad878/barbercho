# 🚀 Panduan Deployment BarberCho

Panduan lengkap untuk deploy website BarberCho ke Cloudflare Pages.

---

## 📋 Prerequisites

Sebelum deploy, pastikan Anda sudah:
- ✅ Punya akun [GitHub](https://github.com)
- ✅ Punya akun [Cloudflare](https://cloudflare.com)
- ✅ Project sudah ter-commit dengan baik

---

## 🌐 Method 1: Deploy via GitHub (Recommended)

### Step 1: Push ke GitHub

```bash
# Initialize git (kalau belum)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - BarberCho Website"

# Create main branch
git branch -M main

# Add remote repository (ganti dengan repo Anda)
git remote add origin https://github.com/yourusername/barbercho.git

# Push ke GitHub
git push -u origin main
```

### Step 2: Setup Cloudflare Pages

1. **Login ke Cloudflare**
   - Buka [https://dash.cloudflare.com/](https://dash.cloudflare.com/)
   - Login dengan akun Anda

2. **Create New Project**
   - Klik "Workers & Pages" di sidebar
   - Klik "Create application"
   - Pilih tab "Pages"
   - Klik "Connect to Git"

3. **Connect GitHub**
   - Authorize Cloudflare untuk akses GitHub
   - Pilih repository `barbercho`
   - Klik "Begin setup"

4. **Configure Build Settings**
   ```
   Project name: barbercho
   Production branch: main
   
   Build settings:
   ├── Framework preset: Vite
   ├── Build command: npm run build
   └── Build output directory: dist
   
   Environment variables: (kosongkan dulu)
   ```

5. **Deploy**
   - Klik "Save and Deploy"
   - Wait 2-3 menit untuk build selesai
   - Done! ✨

6. **Access Website**
   - URL default: `https://barbercho.pages.dev`
   - Atau custom domain yang Anda set

### Step 3: Auto-Deploy (Optional)

Setiap kali Anda push ke GitHub, website akan auto-deploy:

```bash
# Make changes
git add .
git commit -m "Update services section"
git push

# Cloudflare akan auto-deploy dalam 2-3 menit
```

---

## 💻 Method 2: Direct Upload via Wrangler

### Step 1: Install Wrangler CLI

```bash
# Install globally
npm install -g wrangler

# Atau dengan yarn
yarn global add wrangler
```

### Step 2: Login ke Cloudflare

```bash
wrangler login
```

Browser akan terbuka untuk authorize.

### Step 3: Build Project

```bash
npm run build
```

Folder `dist/` akan dibuat dengan production build.

### Step 4: Deploy

```bash
# First time deploy
wrangler pages deploy dist --project-name=barbercho

# Update deploy
wrangler pages deploy dist
```

---

## 🌍 Custom Domain Setup

### Step 1: Add Custom Domain

1. Di Cloudflare Pages dashboard
2. Pilih project "barbercho"
3. Go to "Custom domains"
4. Click "Set up a custom domain"

### Step 2: Configure DNS

**Jika domain di Cloudflare:**
- DNS akan auto-configure ✅

**Jika domain di provider lain:**
```
Type: CNAME
Name: @ (atau subdomain seperti www)
Target: barbercho.pages.dev
```

### Step 3: Wait for SSL

SSL certificate akan auto-provision dalam 15-30 menit.

---

## ⚙️ Environment Variables (Optional)

Jika nanti butuh environment variables:

1. Go to Cloudflare Pages dashboard
2. Pilih project
3. Settings > Environment variables
4. Add variables:
   ```
   VITE_API_URL=https://api.example.com
   VITE_ANALYTICS_ID=UA-XXXXXXXXX
   ```

5. Redeploy project

---

## 🔧 Build Configuration

File `vite.config.ts` sudah configured untuk production:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/', // Untuk custom domain
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
```

---

## 📊 Performance Settings

### Cloudflare Settings

Aktifkan di Cloudflare Dashboard:

1. **Auto Minify**
   - HTML ✅
   - CSS ✅
   - JavaScript ✅

2. **Brotli Compression** ✅

3. **HTTP/3** ✅

4. **Caching**
   - Cache Level: Standard
   - Browser Cache TTL: 4 hours

---

## 🐛 Troubleshooting

### Build Failed

**Error: Command not found**
```bash
# Solution: Check build command
Build command should be: npm run build
```

**Error: Module not found**
```bash
# Solution: Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Routes

**Problem:** SPA routing not working

**Solution:** Cloudflare Pages auto-handles SPA routing, tapi pastikan:
```javascript
// vite.config.ts
export default defineConfig({
  base: '/',  // Not '/barbercho/'
})
```

### Slow Build Times

**Solution:** 
1. Check dependencies size
2. Remove unused packages
3. Use build cache:
   ```bash
   # In Cloudflare Pages settings
   Enable build cache: ON
   ```

---

## 🔄 Rollback

Jika deployment bermasalah:

1. Go to Cloudflare Pages dashboard
2. Pilih "Deployments"
3. Pilih previous successful deployment
4. Click "Rollback to this deployment"

---

## 📈 Analytics

### Cloudflare Web Analytics (Free)

1. Go to Cloudflare Dashboard
2. Select "Web Analytics"
3. Add site
4. Copy tracking code
5. Add to `index.html`:
   ```html
   <script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
           data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
   ```

---

## ✅ Post-Deployment Checklist

- [ ] Website accessible via URL
- [ ] All pages loading correctly
- [ ] Images displaying properly
- [ ] WhatsApp links working
- [ ] Instagram link working
- [ ] Google Maps link working
- [ ] Mobile responsive
- [ ] SSL certificate active (https)
- [ ] Performance score good (check with Lighthouse)

---

## 📞 Need Help?

**Cloudflare Support:**
- Docs: [https://developers.cloudflare.com/pages/](https://developers.cloudflare.com/pages/)
- Community: [https://community.cloudflare.com/](https://community.cloudflare.com/)

**BarberCho Support:**
- WhatsApp: [0851-6638-4874](https://wa.me/62851663484874)
- Instagram: [@barbercho.ind](https://www.instagram.com/barbercho.ind)

---

<div align="center">

**🎉 Selamat! Website Anda sudah live!**

Share link website Anda ke social media dan customer! 🚀

</div>

