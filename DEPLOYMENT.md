# Jewellery Website - Deployment Guide

## ✅ Website Complete!

Your jewellery website is ready with:
- ✨ Home page with hero, products, and offers
- 💎 Collections page with category filtering
- 📋 Product details page
- 👥 About page
- 📧 Contact page with form & map
- 📱 WhatsApp floating button
- 🎨 Responsive design with Tailwind CSS
- 🖼️ SVG placeholder images

---

## 📝 BEFORE DEPLOYMENT - CUSTOMIZE THESE:

### 1. Update Contact Information

Edit: `src/config/contact.js`

```javascript
phoneNumber: '+919876543210',  // Your phone number
whatsappNumber: '919876543210', // Without +
email: 'info@jewellery.com',    // Your email
address: 'Your store address',  // Your address
storeName: '✨ Your Store Name' // Your store name
```

### 2. Update WhatsApp Messages (Optional)

```javascript
whatsappMessages: {
  inquiry: 'Your custom inquiry message',
  product: (name, price) => `Custom product message`,
  custom: 'Custom design inquiry message',
  general: 'General inquiry message'
}
```

### 3. Update Social Media Links

```javascript
social: {
  instagram: 'https://instagram.com/yourbusiness',
  facebook: 'https://facebook.com/yourbusiness',
  youtube: 'https://youtube.com/yourbusiness'
}
```

### 4. Add Your Products

Edit: `src/data/products.json`

Replace sample data with your actual products:
```json
{
  "id": 1,
  "name": "Your Product Name",
  "price": "₹Your Price",
  "category": "Rings",
  "image": "/images/your-product.jpg",
  "description": "Description",
  "weight": "5g",
  "material": "22K Gold"
}
```

### 5. Add Real Product Images

Place your product images in: `public/images/`

Current placeholders will be replaced when you add:
- `ring1.jpg`, `ring2.jpg`
- `necklace1.jpg`, `necklace2.jpg`
- `earring1.jpg`, `earring2.jpg`
- `bangle1.jpg`, `bangle2.jpg`
- `bridal1.jpg`, `bridal2.jpg`

---

## 🚀 DEPLOY TO VERCEL (3 Steps)

### Step 1: Push to GitHub

```bash
cd d:\jewelleryweb
git add .
git commit -m "Initial commit: complete jewellery website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/jewelleryweb.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com/
2. Click "Add New..." → "Project"
3. Select your GitHub repository
4. Click "Deploy"
5. Wait 2-3 minutes for deployment ✅

### Step 3: Custom Domain (Optional)

1. Go to project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS setup instructions

---

## 📱 Test Locally First

```bash
npm run dev
```

Open: http://localhost:3000

---

## ✨ After Deployment

Your site will be live at:
- https://your-project-name.vercel.app (auto)
- https://your-custom-domain.com (if added)

---

## 📊 Website Features Summary

| Feature | Status |
|---------|--------|
| Home Page | ✅ Done |
| Collections | ✅ Done |
| Product Details | ✅ Done |
| About Page | ✅ Done |
| Contact Page | ✅ Done |
| Responsive Design | ✅ Done |
| WhatsApp Integration | ✅ Done |
| Phone Integration | ✅ Done |
| Product Filtering | ✅ Done |
| Related Products | ✅ Done |
| Contact Form | ✅ Done |

---

## 🆘 Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com

---

**Happy selling! 🎉**
