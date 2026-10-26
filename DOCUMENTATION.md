# DOKUMENTASI LENGKAP WEBSITE PT MOTTO PACK INDONESIA & SENTRA KEMAS

Selamat datang di dokumentasi resmi pembuatan dan pengoperasian website perusahaan **PT Motto Pack Indonesia** beserta divisi retail & e-commerce resminya, **Sentra Kemas**.

---

## 1. Ikhtisar & Arsitektur Website

Website ini dirancang secara khusus untuk memenuhi kebutuhan bisnis manufaktur modern B2B (Business-to-Business) sekaligus retail B2C (Business-to-Consumer) melalui channel e-commerce:

1. **Brand Identity**:
   - **PT Motto Pack Indonesia**: Produsen & manufaktur utama kemasan fleksibel, kemasan rigid, eco-friendly, kardus industrial, dan perlengkapan FMCG berskala besar.
   - **Sentra Kemas**: Divisi retail & official online marketplace (Tokopedia, Shopee, TikTok Shop) resmi Motto Pack Indonesia untuk melayani kebutuhan eceran UMKM tanpa minimum order (Zero MOQ).
2. **Teknologi**:
   - **Pure HTML5, CSS3 Modern, & Vanilla JavaScript (ES6+)**.
   - Zero-dependency: Tidak membutuhkan build step rumit, tidak memerlukan npm install, tidak membutuhkan compiler.
   - Ultra cepat, sangat ringan, responsive di desktop, tablet, dan smartphone, serta ramah SEO (Search Engine Optimization).

---

## 2. Struktur File & Folder Proyek

```
c:\web\
├── index.html              # Halaman Beranda Utama (Corporate Portal & Spotlight)
├── catalog.html            # Katalog Lengkap Kemasan & FMCG (Search & Filter)
├── b2b.html                # Portal B2B Wholesale, OEM & Form RFQ Resmi
├── sentra-kemas.html       # Gateway Khusus Toko Resmi E-Commerce (Sentra Kemas)
├── about.html              # Profil Perusahaan, Fasilitas Pabrik Cikarang & Mutu
├── contact.html            # Kontak, Alamat Kantor/Pabrik, FAQ, & Form Pesan
├── serve.ps1               # Script Server Lokal 1-Klik untuk Windows PowerShell
├── DOCUMENTATION.md        # Buku Panduan Lengkap (Dokumen Ini)
├── README.md               # Ringkasan Cepat & Panduan Menjalankan
├── css/
│   └── style.css           # Desain Sistem, CSS Variables, Typography & Responsiveness
└── js/
    ├── products-data.js    # Database Produk (16 SKU Kemasan & FMCG + Kalkulator)
    └── main.js             # Interaktivitas: Filter, Modal Quick View, WhatsApp & Kalkulator
```

---

## 3. Fitur-Fitur Utama

### A. Katalog Produk Kemasan & FMCG (`catalog.html` & `js/products-data.js`)
- Menyediakan 16 SKU produk realistis dan paling banyak dicari di industri Indonesia:
  1. **Kemasan Fleksibel**:
     - Standing Pouch Aluminium Foil + Degassing Valve Swiss (Specialty Coffee)
     - Standing Pouch Transparan Super Clear + Zipper
     - Vacuum Nylon Bag Embossed & Polos (Frozen Meat & Seafood)
     - Standing Spout Pouch Heavy Duty (Liquid Refill 250ml - 2L)
  2. **Kemasan Rigid**:
     - Botol Minuman PET Almond, Kale, Cantik 250ml - 1000ml
     - Jerigen HDPE 1L - 5L Heavy Duty Kimia & Horeca
     - Pot Krim Kosmetik Luxury Acrylic & PET Double Wall
  3. **Eco-Friendly & Paper**:
     - Sugarcane Bagasse Clamshell Meal Box (100% Ampas Tebu, Zero Plastic)
     - Kraft Paper Standing Pouch with Window
     - Paper Bowl Kraft + Lid Anti Tumpah (Soup & Rice Bowl)
  4. **Kardus & Industrial Packaging**:
     - Industrial Stretch Film Hand & Machine Roll (Pallet Wrapping)
     - Corrugated Mailer Box Die-Cut (E-Commerce Branding)
     - Sentra Kemas Heavy Duty Bubble Wrap Roll (Roll Jumbo)
  5. **FMCG & Horeca Supplies**:
     - Hygiene Wrapped Wooden Cutlery Set (Sendok Garpu Kayu Alami)
     - Roll Film Plastik Sachet Multi-Layer (Form-Fill-Seal Pabrik)
     - Portion Cups PP with Hinged Lid (Cup Sambal & Saus)
- **Live Search & Filter**: Pencarian real-time berdasarkan kata kunci nama produk, material, dan kategori tombol pill filter.
- **Split Pricing**: Menampilkan harga eceran di Sentra Kemas sekaligus tier harga grosir pabrik B2B.
- **Modal Spesifikasi Detail**: Popup cepat menampilkan dimensi, ketebalan micron, sertifikasi food grade BPOM, keunggulan teknis, dan tombol aksi langsung.

### B. Gateway E-Commerce Resmi: Sentra Kemas (`sentra-kemas.html`)
- Halaman etalase terdedikasi untuk official e-commerce stores:
  - **Tokopedia**: Official Store / Power Merchant Pro Sentra Kemas.
  - **Shopee**: Sentra Kemas Star+ / Shopee Mall.
  - **TikTok Shop**: Sentra Kemas Live Shopping.
  - **Gudang Pick-up**: Layanan ambil barang sendiri di Gudang Sentra Kemas Daan Mogot Jakarta Barat & Margomulyo Surabaya via kurir instan (GoSend, Grab, Lalamove).
- **Keunggulan Sentra Kemas**: Tanpa minimum order (bisa beli 1 pack), ready stock pengiriman hari yang sama, dan jaminan produk orisinal pabrik Motto Pack.

### C. Divisi B2B Grosir Pabrik & Kalkulator Estimasi (`b2b.html`)
- **Kalkulator Interaktif B2B**:
  - Pilihan kategori kemasan, opsi cetak (Polos, Sablon, atau Rotogravure 9 warna), dan slider volume unit pesanan (1.000 hingga 100.000+ unit).
  - Menghitung secara otomatis estimasi harga per pcs, total nilai pesanan, lead time pengerjaan, dan validasi MOQ.
- **Formulir RFQ Resmi (Request for Quotation)**:
  - Formulir lengkap untuk penawaran korporasi, termasuk opsi permintaan **Sample Kit Fisik Gratis** ke kantor pemohon.
  - Integrasi WhatsApp otomatis yang langsung memformat rincian penawaran ke nomor WhatsApp Sales Executive.
- **Keunggulan Kontrak B2B**: Fasilitas kredit Terms of Payment (TOP) 30-60 hari untuk klien terverifikasi, cetak rotogravure multi-warna, dan pengiriman armada pabrik langsung.

### D. Profil Perusahaan & Jaminan Sertifikasi (`about.html` & `contact.html`)
- Informasi fasilitas pabrik 12.000 m² di Kawasan Industri GIIC Cikarang.
- Sertifikasi resmi: **ISO 9001:2015**, **BPOM Food Grade Migration Standard**, **Halal MUI**, dan **BPI 100% Compostable**.
- Roadmap komitmen keberlanjutan (Mono-PE Recyclable & Ampas Tebu).
- Direktori kantor pusat Jakarta, pabrik Cikarang, dan hub logistik Sentra Kemas.
- WhatsApp Concierge mengambang (Floating Action Button) yang siap diakses di setiap halaman.

---

## 4. Cara Menjalankan Website (How to Run)

Website ini 100% statis berbasis file web standar, sehingga sangat fleksibel dijalankan di lingkungan apa pun.

### Opsi 1: Buka Langsung di Browser (Cara Paling Cepat & Mudah)
1. Buka folder `c:\web\` melalui File Explorer Windows Anda.
2. Klik ganda (double-click) pada file **`index.html`**.
3. Website akan langsung terbuka di browser utama Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, dll).
4. Navigasi antar halaman (`catalog.html`, `b2b.html`, `sentra-kemas.html`, dll) akan berjalan mulus seketika!

### Opsi 2: Menggunakan Script Server Lokal PowerShell (Rekomendasi Dev Lokal)
Kami telah menyediakan file **`serve.ps1`** yang menggunakan modul bawaan Windows `.NET HttpListener` (tanpa perlu install Node.js / Python):
1. Buka terminal PowerShell di folder `c:\web`.
2. Jalankan perintah:
   ```powershell
   .\serve.ps1
   ```
3. Script akan otomatis memulai web server lokal pada `http://localhost:8000/` dan langsung membuka browser Anda.
4. Untuk menghentikan server, cukup tekan `CTRL + C` di jendela terminal tersebut.

### Opsi 3: Menggunakan Ekstensi VS Code "Live Server"
Jika Anda membuka folder `c:\web` di Visual Studio Code:
1. Pasang ekstensi **Live Server** (oleh Ritwick Dey) dari Extensions marketplace.
2. Klik kanan pada `index.html` -> pilih **Open with Live Server**.
3. Browser akan terbuka di `http://127.0.0.1:5500/index.html` dengan fitur auto-reload saat file diedit.

### Opsi 4: Menggunakan Python atau Node.js (Jika Terpasang di Masa Mendatang)
- Jika menggunakan Python:
  ```bash
  python -m http.server 8000
  ```
- Jika menggunakan Node.js:
  ```bash
  npx serve .
  ```

---

## 5. Panduan Kustomisasi & Pemeliharaan

### A. Mengubah Nomor WhatsApp & Kontak Sales
Untuk mengganti nomor WhatsApp default (+62 812-8888-9999) ke nomor WhatsApp bisnis Anda yang sebenarnya:
1. Buka file **`js/main.js`**.
2. Cari teks `6281288889999` dan ganti dengan nomor WhatsApp aktif Anda (awali dengan kode negara tanpa tanda `+`, contoh: `6281312345678`).
3. Buka file **`b2b.html`** dan **`contact.html`**, periksa fungsi `handleRFQSubmit` dan `handleContactSubmit` untuk memastikan nomor WhatsApp tujuan telah sesuai.

### B. Mengubah Link Toko Resmi Sentra Kemas (Tokopedia, Shopee, TikTok Shop)
1. Buka file **`sentra-kemas.html`** dan **`index.html`**.
2. Cari atribut link tombol:
   ```html
   <!-- Tokopedia -->
   <a href="https://www.tokopedia.com/sentrakemas-official" target="_blank">...</a>
   
   <!-- Shopee -->
   <a href="https://shopee.co.id/sentrakemas.id" target="_blank">...</a>
   
   <!-- TikTok Shop -->
   <a href="https://www.tiktok.com/@sentrakemas" target="_blank">...</a>
   ```
3. Ubah tautan `https://www.tokopedia.com` dengan URL spesifik toko Sentra Kemas Anda.
4. Anda juga dapat memperbarui link produk satuan di file **`js/products-data.js`** pada properti `sentraKemasLink` dan `shopeeLink`.

### C. Menambah atau Mengubah Produk di Katalog
Database produk disimpan secara rapi di file **`js/products-data.js`**.
Untuk menambahkan produk baru, cukup tambahkan objek baru ke dalam array `MOTTO_PRODUCTS`:
```javascript
{
  id: "produk-baru-id",
  name: "Nama Produk Lengkap",
  shortName: "Nama Pendek",
  category: "flexible", // pilihan: 'flexible', 'rigid', 'eco', 'industrial', 'fmcg'
  categoryLabel: "Kemasan Fleksibel",
  material: "PET / ALU / PE Food Grade",
  thickness: "140 Micron",
  sizeOptions: ["250g", "500g", "1000g"],
  features: [
    "Fitur keunggulan 1",
    "Fitur keunggulan 2"
  ],
  certifications: ["Food Grade BPOM", "Halal MUI"],
  b2bMoq: "5,000 pcs",
  retailPrice: "Rp 1.500 / pcs",
  b2bPriceTier: [
    { qty: "5.000 - 19.999 pcs", price: "Rp 1.100 / pcs" },
    { qty: "20.000+ pcs", price: "Rp 950 / pcs" }
  ],
  leadTime: "Ready Stock Polos / 14 Hari Cetak",
  badge: "Produk Baru",
  image: "https://url-foto-produk-anda.jpg",
  sentraKemasLink: "https://www.tokopedia.com/sentrakemas-official",
  description: "Deskripsi fungsi dan kecocokan produk untuk makanan/minuman..."
}
```

### D. Menyesuaikan Skema Warna Perusahaan
Seluruh warna tema diatur menggunakan CSS Custom Properties (Variables) di bagian paling atas file **`css/style.css`**:
```css
:root {
  --color-primary: #0b1f3a;       /* Warna Navy Korporat Motto Pack */
  --color-accent: #0284c7;        /* Warna Biru Industri / Cyan */
  --color-eco: #10b981;           /* Warna Hijau Halal & Ramah Lingkungan */
  --color-sentra: #ea580c;        /* Warna Oranye Khas Retail Sentra Kemas */
}
```
Anda dapat mengganti kode heksadesimal warna tersebut untuk menyesuaikan pedoman identitas visual korporat (Brand Guidelines).

---

## 6. Panduan Publikasi ke Internet (Deployment)

Karena website ini berarsitektur murni HTML/CSS/JS statis, website ini dapat dihosting di mana saja secara instan:

### Opsi A: Hosting Gratis di Vercel atau Netlify (Sangat Direkomendasikan)
1. Buka [Netlify Drop](https://app.netlify.com/drop) atau [Vercel](https://vercel.com).
2. Buat akun gratis.
3. Cukup **drag-and-drop folder `c:\web`** ke area upload Netlify Drop.
4. Dalam 10 detik, website Anda akan langsung online dengan domain gratis bersertifikat SSL/HTTPS (contoh: `mottopack.netlify.app`). Anda bisa langsung menyambungkannya ke domain resmi perusahaan seperti `mottopack.co.id`.

### Opsi B: Menggunakan GitHub Pages
1. Buat repository baru di GitHub (misal: `mottopack-website`).
2. Unggah seluruh file dari folder `c:\web`.
3. Buka menu **Settings** -> **Pages** -> pilih branch `main` -> klik **Save**.
4. Website akan langsung aktif di `https://username.github.io/mottopack-website`.

### Opsi C: Mengunggah ke Hosting cPanel / Apache / Nginx (Domain Perusahaan)
1. Buka cPanel hosting Anda (`cpanel.mottopack.co.id`).
2. Buka menu **File Manager** -> masuk ke direktori **`public_html`**.
3. Unggah seluruh file (`index.html`, `catalog.html`, `b2b.html`, `sentra-kemas.html`, `about.html`, `contact.html`, folder `css`, folder `js`, dll).
4. Website Motto Pack Indonesia langsung aktif di domain resmi Anda!

---

## 7. Ringkasan Kontak Perusahaan

| Entitas | Peran | Lokasi Utama | Kontak Resmi |
| :--- | :--- | :--- | :--- |
| **PT Motto Pack Indonesia** | Kantor Pusat & B2B Manufaktur | Gedung Kemas Plaza Lt. 5, Daan Mogot, Jakarta Barat | Telp: (021) 8990-8888 <br> Email: sales@mottopack.co.id |
| **Motto Pack Cikarang Plant** | Pabrik & Fasilitas Cleanroom | Kawasan Industri GIIC Blok AA-12, Cikarang, Bekasi | Kapasitas: 15M+ pcs/bulan |
| **Sentra Kemas** | Toko E-Commerce Resmi & Retail | Tokopedia, Shopee, TikTok Shop & Hub Daan Mogot | WA Retail: +62 812-8888-9999 <br> Kirim Same-day Instant |
