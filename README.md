# PT Motto Pack Indonesia - Official Company Website & Sentra Kemas Gateway

Website resmi perusahaan **PT Motto Pack Indonesia** (Produsen Kemasan Fleksibel, Rigid, Eco-Friendly, dan FMCG) terintegrasi langsung dengan channel e-commerce retail resmi kami, **Sentra Kemas**.

---

## 🚀 Cara Menjalankan Website (Quick Start)

### Cara 1: Buka Langsung (Tanpa Software Tambahan)
Cukup klik ganda (double-click) file **`index.html`** pada File Explorer. Website akan langsung terbuka di browser Anda (Chrome, Edge, Firefox, Safari).

### Cara 2: Jalankan Server Lokal PowerShell (Windows)
Buka terminal PowerShell di folder ini, lalu ketik:
```powershell
.\serve.ps1
```
Server lokal akan aktif di `http://localhost:8000/` dan otomatis membuka browser Anda.

---

## 🌟 Fitur Utama Website

1. **Katalog Produk Kemasan & FMCG (`catalog.html`)**:
   - 16 SKU produk lengkap (Standing Pouch Alufoil & Zipper, Vacuum Nylon, Botol PET, Jerigen HDPE, Ampas Tebu Bagasse, Kardus Mailer, Stretch Film, Sendok Garpu Kayu Horeca).
   - Fitur pencarian live real-time, filter pill kategori, filter material, split pricing (harga retail vs grosir), dan modal popup spesifikasi teknis.
2. **Gateway E-Commerce Resmi: Sentra Kemas (`sentra-kemas.html`)**:
   - Tautan langsung ke toko resmi di **Tokopedia**, **Shopee**, dan **TikTok Shop**.
   - Solusi kemasan eceran tanpa minimum order (Zero MOQ) untuk UMKM dan sampel cepat dengan pengiriman instan.
3. **Divisi B2B Wholesale & Kontrak Pabrik (`b2b.html`)**:
   - **Kalkulator B2B Interaktif**: Menghitung estimasi harga satuan grosir, total pesanan, lead time pengerjaan, dan status MOQ.
   - **Formulir RFQ (Request for Quotation)** terintegrasi dengan permintaan Sample Kit Gratis.
4. **Profil Perusahaan & Standar Mutu (`about.html` & `contact.html`)**:
   - Pabrik manufaktur Cikarang GIIC seluas 12.000 m², sertifikasi ISO 9001:2015, BPOM Food Grade, Halal MUI, dan kontak sales direct WhatsApp.

---

## 📁 Struktur Berkas

- `index.html` : Beranda perusahaan & spotlight Sentra Kemas
- `catalog.html` : Katalog lengkap produk kemasan & FMCG
- `b2b.html` : Halaman B2B Wholesale, OEM & Kalkulator Estimasi
- `sentra-kemas.html` : Halaman etalase toko resmi e-commerce Sentra Kemas
- `about.html` : Profil perusahaan, fasilitas mesin & sertifikasi
- `contact.html` : Alamat kantor/pabrik, kontak form, dan FAQ
- `css/style.css` : Stylesheet modern, responsive, & sistem warna korporat
- `js/products-data.js` : Data produk lengkap kemasan & FMCG
- `js/main.js` : Skrip interaktif (filtering, modal, kalkulator, WhatsApp)
- `serve.ps1` : Script server lokal PowerShell
- `DOCUMENTATION.md` : Panduan lengkap kustomisasi dan deployment

---

## 📖 Dokumentasi Lengkap
Untuk panduan detail mengenai cara kustomisasi harga, menambah produk, mengubah link marketplace, dan cara deploy ke hosting (Vercel / Netlify / cPanel), silakan baca [DOCUMENTATION.md](DOCUMENTATION.md).
