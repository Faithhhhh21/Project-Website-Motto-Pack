/**
 * PT Motto Pack Indonesia - Database Katalog Produk Kemasan & Packaging
 * Berisi produk riil Motto: Lakban/Tape, Stretch Film, Bubble Wrap, Kardus,
 * Cling Wrap, Polymailer, Strapping Band, Tali Rafia, Thermal Label, dll.
 * Menggunakan foto asli non-cover (_2) dari visual resmi Motto Pack Indonesia.
 */

const MOTTO_PRODUCTS = [
  {
    id: "motto-opp-bening",
    name: "Motto OPP Tape Bening 45mm / 48mm x 45 Micron",
    shortName: "Lakban Bening Motto",
    category: "tape",
    categoryLabel: "Lakban & Tape",
    material: "BOPP Film + Water-Based Acrylic Strong Adhesive",
    thickness: "45 Micron High Strength",
    sizeOptions: ["45mm x 100m", "45mm x 125m", "48mm x 100m", "48mm x 250m", "48mm x 420m (Mesin)"],
    finishOptions: ["Super Clear Bening Transparan"],
    features: [
      "Daya rekat tinggi tahan guncangan pengiriman ekspedisi",
      "Tidak mudah putus saat ditarik kencang dengan dispenser",
      "Ketebalan 45 micron standar ekspor & industri logistik",
      "Tersedia kemasan eceran per rol, per slop (6 rol), dan per dus (72 rol)"
    ],
    certifications: ["ISO 9001:2015", "RoHS Compliant", "Non-Toxic"],
    b2bMoq: "1 Dus (72 Rol) / Kontrak Pabrik 50 Dus",
    retailPrice: "Rp 9.500 / rol",
    b2bPriceTier: [
      { qty: "1 - 9 Dus (72 - 648 Rol)", price: "Rp 7.800 / rol" },
      { qty: "10 - 49 Dus", price: "Rp 6.950 / rol" },
      { qty: "50+ Dus (Grosir Truk)", price: "Rp 6.200 / rol" }
    ],
    leadTime: "Ready Stock Selalu Tersedia di Gudang Motto",
    badge: "Bestseller No. 1",
    image: "assets/products/opp-tape-bening.jpg",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Lakban bening OPP legendaris dari Motto Pack Indonesia dengan formula lem akrilik ekstra kuat. Menempel sempurna pada berbagai jenis kardus dan plastik paket belanja online tanpa risiko terbuka."
  },
  {
    id: "motto-opp-coklat",
    name: "Motto OPP Tape Coklat 45mm / 48mm x 45 Micron",
    shortName: "Lakban Coklat Motto",
    category: "tape",
    categoryLabel: "Lakban & Tape",
    material: "BOPP Film + Acrylic Adhesive Warna Coklat Kraft",
    thickness: "45 Micron",
    sizeOptions: ["45mm x 100m", "45mm x 125m", "48mm x 100m", "48mm x 250m"],
    finishOptions: ["Coklat Natural Tan"],
    features: [
      "Warna coklat pekat senada dengan kardus karton packaging",
      "Menutup sambungan kardus secara rapi dan profesional",
      "Daya rekat instan tidak memerlukan tekanan berlebih",
      "Tahan kelembaban dan perubahan suhu gudang"
    ],
    certifications: ["ISO 9001:2015", "RoHS Compliant"],
    b2bMoq: "1 Dus (72 Rol) / 100 Dus Kontrak Tahunan",
    retailPrice: "Rp 9.500 / rol",
    b2bPriceTier: [
      { qty: "1 - 9 Dus (72 - 648 Rol)", price: "Rp 7.800 / rol" },
      { qty: "10 - 49 Dus", price: "Rp 6.950 / rol" },
      { qty: "50+ Dus", price: "Rp 6.200 / rol" }
    ],
    leadTime: "Ready Stock Pengiriman Armada Motto",
    badge: "Favorit Gudang",
    image: "assets/products/opp-tape-coklat.jpg",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Lakban coklat andalan industri manufaktur dan fulfillment e-commerce. Memberikan kerapian maksimal untuk pengemasan karton box tanpa bekas goresan atau celah."
  },
  {
    id: "motto-lakban-fragile",
    name: "Motto Lakban Fragile 'Jangan Dibanting' Merah & Putih",
    shortName: "Lakban Fragile Motto",
    category: "tape",
    categoryLabel: "Lakban & Tape",
    material: "BOPP Film + High Impact Warning Print + Adhesive",
    thickness: "48 Micron Extra Thick",
    sizeOptions: ["48mm x 50m", "48mm x 100m"],
    finishOptions: ["Dasar Putih Tulisan Merah", "Dasar Merah Tulisan Putih"],
    features: [
      "Tulisan peringatan 'FRAGILE - JANGAN DIBANTING' & ikon gelas retak jelas",
      "Mengurangi risiko kerusakan barang pecah belah saat transit kurir",
      "Lapisan lem 48 micron tebal ekstra kuat",
      "Warna cetak cerah tidak mudah pudar atau luntur"
    ],
    certifications: ["Standard Ekspedisi Nasional"],
    b2bMoq: "1 Dus (72 Rol) / Custom Teks Brand 50 Dus",
    retailPrice: "Rp 11.500 / rol",
    b2bPriceTier: [
      { qty: "1 - 9 Dus (72 - 648 Rol)", price: "Rp 9.200 / rol" },
      { qty: "10 - 49 Dus", price: "Rp 8.350 / rol" },
      { qty: "50+ Dus", price: "Rp 7.500 / rol" }
    ],
    leadTime: "Ready Stock di Toko Resmi Motto",
    badge: "Wajib Olshop",
    image: "assets/products/lakban-fragile.jpg",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Lakban segel keamanan paket rentan rusak dari Motto Pack. Wajib digunakan oleh penjual produk elektronik, kosmetik, botol kaca, frozen food, dan makanan kering agar mendapat penanganan hati-hati oleh kurir."
  },
  {
    id: "motto-stretch-film",
    name: "Motto Industrial Stretch Film Hand & Machine Roll",
    shortName: "Stretch Film Wrapping Motto",
    category: "film",
    categoryLabel: "Film & Wrapping",
    material: "Linear Low-Density Polyethylene (LLDPE) 5-Layer Cast Film",
    thickness: "17 Micron - 20 Micron (High Tensile)",
    sizeOptions: ["50cm x 100m", "50cm x 150m", "50cm x 250m", "50cm x 1500m (Machine Roll)"],
    finishOptions: ["Bening Super Clear", "Hitam Solid Anti-Maling"],
    features: [
      "Elastisitas tinggi hingga 300% elongation tanpa putus",
      "Daya rekat mandiri (self-cling) mengunci susunan barang di pallet",
      "Melindungi kargo dari debu, kelembaban, hujan, dan guncangan armada",
      "Mengamankan muatan kontainer ekspor dan gudang logistik"
    ],
    certifications: ["ISO 9001:2015", "RoHS"],
    b2bMoq: "1 Dus (6 Rol) / Grosir Truk 100 Dus",
    retailPrice: "Rp 68.000 / rol",
    b2bPriceTier: [
      { qty: "10 - 49 Dus (60 - 294 Rol)", price: "Rp 54.000 / rol" },
      { qty: "50 - 199 Dus", price: "Rp 48.500 / rol" },
      { qty: "200+ Dus", price: "Rp 43.000 / rol" }
    ],
    leadTime: "Ready Stock Pengiriman Armada Truk Motto",
    badge: "Logistics Essential",
    image: "assets/products/stretch-film.jpg",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Plastik wrapping stretch film kualitas premium standar ekspor. Diproduksi dengan teknologi 5-layer cast film yang memberikan kekuatan tarik optimal dan daya tahan tusukan sudut kardus yang tajam."
  },
  {
    id: "motto-cling-wrap",
    name: "Motto Food Grade Cling Wrap (Household & Industrial)",
    shortName: "Cling Wrap Makanan Motto",
    category: "film",
    categoryLabel: "Film & Wrapping",
    material: "Food Grade PE / PVC Plasticizer-Free",
    thickness: "10 - 12 Micron",
    sizeOptions: ["Lebar 30cm x 30m", "Lebar 30cm x 300m", "Lebar 45cm x 300m", "Lebar 45cm x 500m"],
    finishOptions: ["Super Transparent Crystal"],
    features: [
      "100% Food Grade BPOM aman bersentuhan langsung dengan makanan",
      "Menjaga kesegaran sayur, buah, daging, dan hidangan siap saji",
      "Daya lekat kedap udara mencegah aroma makanan saling bercampur di kulkas",
      "Dilengkapi pisau pemotong geser (sliding cutter) praktis dan aman"
    ],
    certifications: ["Food Grade BPOM", "Halal MUI", "BPA Free"],
    b2bMoq: "1 Karton (24 Rol) / Grosir Horeca 50 Karton",
    retailPrice: "Rp 28.500 / rol (30cm)",
    b2bPriceTier: [
      { qty: "1 - 9 Karton", price: "Rp 22.500 / rol" },
      { qty: "10 - 49 Karton", price: "Rp 19.800 / rol" },
      { qty: "50+ Karton", price: "Rp 17.200 / rol" }
    ],
    leadTime: "Ready Stock Selalu Tersedia",
    badge: "Food Grade BPOM",
    image: "assets/products/cling-wrap.jpg",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Plastik pembungkus makanan higienis untuk hotel, restoran, catering, supermarket buah/daging, dan rumah tangga. Menjaga kelembaban alami makanan agar tetap segar dan tidak cepat kering."
  },
  {
    id: "motto-bubble-wrap",
    name: "Motto Heavy Duty Bubble Wrap Roll (Hitam & Bening)",
    shortName: "Bubble Wrap Roll Motto",
    category: "industrial",
    categoryLabel: "Kardus & Pelindung",
    material: "Virgin Low-Density Polyethylene (LDPE) 2-Layer",
    thickness: "Gelembung Padat 1cm Tidak Mudah Kempes",
    sizeOptions: ["Lebar 125cm x Panjang 50m (Roll Jumbo)", "Lebar 60cm x Panjang 50m"],
    finishOptions: ["Bening Kristal", "Hitam Solid"],
    features: [
      "Gelembung udara padat dengan seal rapat tahan benturan keras",
      "Dibuat dari biji plastik murni tanpa bau menyengat",
      "Perlindungan maksimal untuk barang pecah belah, elektronik, & kosmetik",
      "Tersedia layanan potong eceran dan gulungan roll pabrik"
    ],
    certifications: ["RoHS", "Non-Toxic LDPE"],
    b2bMoq: "1 Roll Jumbo / 20 Roll Grosir Truk",
    retailPrice: "Rp 125.000 / roll (125cm x 50m)",
    b2bPriceTier: [
      { qty: "5 - 19 Roll", price: "Rp 105.000 / roll" },
      { qty: "20 - 49 Roll", price: "Rp 94.000 / roll" },
      { qty: "50+ Roll", price: "Rp 85.000 / roll" }
    ],
    leadTime: "Ready Stock Armada Logistik Motto Pack",
    badge: "No. 1 Perlindungan Paket",
    image: "assets/products/bubble-wrap.jpg",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Bubble wrap andalan penjual online dan industri manufaktur di Indonesia. Bantalan udara padat meredam guncangan selama perjalanan darat, laut, maupun udara."
  },
  {
    id: "motto-kardus-karton",
    name: "Motto Kardus Karton Box Packing Die-Cut & Standar",
    shortName: "Kardus Box Motto",
    category: "industrial",
    categoryLabel: "Kardus & Pelindung",
    material: "Corrugated E-Flute / B-Flute K150/M125/K150",
    thickness: "Ketebalan Flute 2.0mm - 3.5mm Kokoh",
    sizeOptions: ["10x10x8 cm", "15x15x10 cm", "20x15x6 cm (Mailer)", "25x20x10 cm", "30x25x15 cm"],
    finishOptions: ["Brown Kraft Alami", "White Top Premium"],
    features: [
      "Serat kertas kokoh tidak mudah penyok saat ditumpuk di ekspedisi",
      "Potongan die-cut presisi lipatan rapi dan pas",
      "Sangat cocok untuk produk kosmetik, aksesoris, sepatu, dan hampers",
      "Mendukung cetak logo custom sablon atau offset"
    ],
    certifications: ["FSC Standard", "100% Recyclable"],
    b2bMoq: "50 pcs / 1.000 pcs Cetak Custom Brand",
    retailPrice: "Rp 2.400 / pcs (Ukuran 10x10x8)",
    b2bPriceTier: [
      { qty: "500 - 1.999 pcs", price: "Rp 1.850 / pcs" },
      { qty: "2.000 - 4.999 pcs", price: "Rp 1.550 / pcs" },
      { qty: "5.000+ pcs", price: "Rp 1.300 / pcs" }
    ],
    leadTime: "Ready Stock Polos / 7 Hari Custom Sablon",
    badge: "Box Kemasan Kokoh",
    image: "assets/products/kardus-karton.jpg",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Kardus karton kemasan serbaguna dari Motto Pack Indonesia. Menyediakan proteksi struktural menyeluruh agar barang dagangan sampai ke tangan konsumen dengan kondisi sempurna."
  },
  {
    id: "motto-polymailer",
    name: "Motto Polymailer Kantong Plastik Packing Olshop",
    shortName: "Polymailer Motto",
    category: "industrial",
    categoryLabel: "Kardus & Pelindung",
    material: "Co-extruded LDPE Multi-Layer Waterproof",
    thickness: "55 - 60 Micron Tebal",
    sizeOptions: ["10x20 cm", "15x25 cm", "20x30 cm", "25x35 cm", "30x40 cm", "35x45 cm"],
    finishOptions: ["Putih Glossy", "Hitam Matte", "Silver", "Pink Pastel"],
    features: [
      "Lem permanen tamper-evident (sekali rekat tidak bisa dibuka tanpa sobek)",
      "100% anti air, anti robek, dan elastis tidak gampang sobek",
      "Bagian dalam warna hitam pekat sehingga isi barang tidak menerawang",
      "Mempercepat proses packing olshop tanpa butuh lakban tambahan"
    ],
    certifications: ["Eco Additive Ready", "Non-Toxic"],
    b2bMoq: "1 Pack (100 pcs) / Cetak Logo 5.000 pcs",
    retailPrice: "Rp 280 / pcs (Isi 100 = Rp 28.000)",
    b2bPriceTier: [
      { qty: "1.000 - 4.999 pcs", price: "Rp 210 / pcs" },
      { qty: "5.000 - 19.999 pcs", price: "Rp 175 / pcs" },
      { qty: "20.000+ pcs", price: "Rp 145 / pcs" }
    ],
    leadTime: "Ready Stock di Toko Resmi Motto",
    badge: "Packing Praktis",
    image: "assets/products/polymailer.jpg",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Plastik polymailer praktis pengganti kantong kresek dan lakban berlapis-lapis. Dilengkapi perekat super kuat yang langsung menyatu dengan plastik untuk keamanan maksimal."
  },
  {
    id: "motto-lakban-kain",
    name: "Motto Cloth Tape Lakban Kain Heavy Duty",
    shortName: "Lakban Kain Motto",
    category: "tape",
    categoryLabel: "Lakban & Tape",
    material: "Anyaman Kain Kasa Rayon Kuat + Natural Rubber Resin",
    thickness: "240 Micron Heavy Duty",
    sizeOptions: ["24mm x 8m", "36mm x 8m", "48mm x 8m", "48mm x 12m"],
    finishOptions: ["Hitam", "Merah", "Kuning", "Biru", "Hijau", "Silver"],
    features: [
      "Kekuatan tarik luar biasa tahan beban berat",
      "Dapat disobek lurus dengan tangan tanpa perlu gunting",
      "Formula lem karet alam merekat kuat di semen, aspal, karpet, besi, dan kayu",
      "Standar penjilidan buku, pameran event, perbaikan darurat, dan kargo berat"
    ],
    certifications: ["ISO 9001:2015"],
    b2bMoq: "1 Slop / 1 Dus (48-72 Rol)",
    retailPrice: "Rp 14.500 / rol (48mm x 8m)",
    b2bPriceTier: [
      { qty: "1 - 9 Dus", price: "Rp 11.200 / rol" },
      { qty: "10 - 49 Dus", price: "Rp 9.900 / rol" },
      { qty: "50+ Dus", price: "Rp 8.800 / rol" }
    ],
    leadTime: "Ready Stock Selalu Tersedia",
    badge: "Extra Kuat",
    image: "assets/products/lakban-kain.jpg",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Lakban kain berdaya rekat tinggi untuk pengemasan kargo industri berat, instalasi pameran, penjilidan dokumen resmi kantor, dan penguncian lantai panggung."
  },
  {
    id: "motto-lakban-kertas",
    name: "Motto Masking Tape / Lakban Kertas Presisi",
    shortName: "Masking Tape Motto",
    category: "tape",
    categoryLabel: "Lakban & Tape",
    material: "Crepe Paper Berkualitas + Natural Rubber Adhesive",
    thickness: "140 Micron",
    sizeOptions: ["12mm x 10m", "24mm x 10m", "48mm x 10m", "48mm x 20m"],
    finishOptions: ["Putih Krem", "Kuning"],
    features: [
      "Tidak meninggalkan bekas residu lem saat dilepas",
      "Permukaan kertas dapat ditulisi dengan pulpen atau spidol",
      "Tahan panas suhu pengecatan oven hingga 80°C",
      "Cocok untuk pengecatan bodi mobil, konstruksi interior, dan label toples"
    ],
    certifications: ["Automotive Standard Grade"],
    b2bMoq: "1 Dus (72 Rol) / Grosir Kontrak 50 Dus",
    retailPrice: "Rp 6.500 / rol",
    b2bPriceTier: [
      { qty: "1 - 9 Dus", price: "Rp 4.900 / rol" },
      { qty: "10 - 49 Dus", price: "Rp 4.200 / rol" },
      { qty: "50+ Dus", price: "Rp 3.650 / rol" }
    ],
    leadTime: "Ready Stock di Toko Resmi Motto",
    badge: "Bebas Residu Lem",
    image: "assets/products/lakban-kertas.jpg",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Masking tape kertas krep bermutu tinggi yang dirancang untuk batas pengecatan presisi tanpa rembesan cat serta penandaan inventaris tanpa merusak permukaan."
  },
  {
    id: "motto-alu-foil",
    name: "Motto Bliss Aluminium Foil Food Grade (Baking & Roasting)",
    shortName: "Alumunium Foil Motto Bliss",
    category: "horeca",
    categoryLabel: "Horeca & Perlengkapan",
    material: "100% Pure Virgin Aluminium Foil Food Contact Safe",
    thickness: "11 - 14 Micron Heavy Duty",
    sizeOptions: ["Lebar 30cm x 7.6m (Box Cutter)", "Lebar 45cm x 7.6m", "Lebar 30cm x 75m", "Lebar 45cm x 75m (Horeca Roll)"],
    finishOptions: ["Dual Surface (Satu sisi matte, satu sisi glossy)"],
    features: [
      "Tahan suhu oven ekstrim hingga 250°C dan pembekuan kulkas -40°C",
      "Menghantarkan panas secara merata saat memanggang kue, ikan, dan steak",
      "100% kedap udara, cahaya, dan bau untuk menjaga rasa asli bumbu",
      "Box kemasan kokoh dilengkapi pisau pemotong bergerigi tajam"
    ],
    certifications: ["Food Grade BPOM", "Halal MUI", "FDA Approved"],
    b2bMoq: "1 Karton (24 Rol) / Grosir Horeca 50 Karton",
    retailPrice: "Rp 26.500 / box (30cm x 7.6m)",
    b2bPriceTier: [
      { qty: "1 - 9 Karton", price: "Rp 21.000 / box" },
      { qty: "10 - 49 Karton", price: "Rp 18.500 / box" },
      { qty: "50+ Karton", price: "Rp 16.200 / box" }
    ],
    leadTime: "Ready Stock Selalu Tersedia",
    badge: "Food Grade Bliss",
    image: "assets/products/alu-foil.png",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Aluminium foil makanan kualitas premium seri Bliss dari Motto Pack Indonesia. Wajib dimiliki dapur hotel, bakery, cafe steak, dan kebutuhan masak sehari-hari."
  },
  {
    id: "motto-baking-paper",
    name: "Motto Bliss Silicone Baking Paper Anti Lengket",
    shortName: "Kertas Baking Motto Bliss",
    category: "horeca",
    categoryLabel: "Horeca & Perlengkapan",
    material: "Wood Pulp Alami + Lapisan Ganda Food Grade Silicone Coating",
    thickness: "40 GSM Kuat Tahan Panas",
    sizeOptions: ["Lebar 30cm x 5m", "Lebar 30cm x 10m", "Lebar 40cm x 10m", "Roll Jumbo 45cm x 50m"],
    finishOptions: ["Putih Alami Higienis"],
    features: [
      "Anti lengket 100% tanpa perlu oles margarin atau minyak lagi di loyang",
      "Tahan panas suhu oven hingga 220°C tanpa hangus",
      "Dapat digunakan berulang kali (reusable 2-3 kali pemanggangan)",
      "Aman untuk microwave, air fryer, steamer kukusan, dan kulkas"
    ],
    certifications: ["Food Grade BPOM", "Halal MUI", "BPA Free"],
    b2bMoq: "1 Karton (24 Rol) / Grosir Bakery 50 Karton",
    retailPrice: "Rp 18.500 / box (30cm x 5m)",
    b2bPriceTier: [
      { qty: "1 - 9 Karton", price: "Rp 14.800 / box" },
      { qty: "10 - 49 Karton", price: "Rp 12.900 / box" },
      { qty: "50+ Karton", price: "Rp 11.200 / box" }
    ],
    leadTime: "Ready Stock di Toko Resmi Motto",
    badge: "Anti Lengket",
    image: "assets/products/baking-paper.png",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Kertas roti anti lengket seri Bliss Motto Pack untuk memanggang cookies, bolu, croissant, pizza, dan pelapis air fryer. Membuat loyang bersih seketika tanpa noda gosong."
  },
  {
    id: "motto-thermal-sticker",
    name: "Motto Thermal Label Sticker Barcode & Resi Ekspedisi",
    shortName: "Kertas Thermal Resi Motto",
    category: "industrial",
    categoryLabel: "Kardus & Pelindung",
    material: "Direct Thermal Paper Premium + Strong Self-Adhesive",
    thickness: "Direct Thermal Print (Tanpa Butuh Ribbon Tinta)",
    sizeOptions: ["100x150 mm (Standar Resi Olshop / 500 pcs)", "100x100 mm", "80x100 mm", "78x100 mm"],
    finishOptions: ["Roll & Fanfold (Lipat)"],
    features: [
      "Hasil cetak barcode dan teks resi tajam hitam pekat",
      "Tahan air (waterproof), tahan gores, dan tahan minyak",
      "Lem kuat langsung menempel di kardus, polymailer, dan karung tanpa copot",
      "Kompatibel untuk semua printer thermal desktop (Xprinter, Kaka, HPRT, Iware)"
    ],
    certifications: ["BPA Free", "RoHS"],
    b2bMoq: "1 Dus (20 Roll) / Kontrak Olshop 100 Dus",
    retailPrice: "Rp 38.000 / roll (100x150 isi 500 pcs)",
    b2bPriceTier: [
      { qty: "1 - 9 Dus", price: "Rp 32.000 / roll" },
      { qty: "10 - 49 Dus", price: "Rp 28.500 / roll" },
      { qty: "50+ Dus", price: "Rp 25.000 / roll" }
    ],
    leadTime: "Ready Stock Selalu Tersedia",
    badge: "Resi Ekspedisi Jernih",
    image: "assets/products/thermal-sticker.jpg",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Kertas stiker label thermal resmi dari Motto Pack Indonesia untuk cetak resi otomatis Shopee, Tokopedia, TikTok Shop, Lazada, J&T, SiCepat, dan JNE tanpa ribet lakban."
  },
  {
    id: "motto-strapping-band",
    name: "Motto PP Strapping Band Roll & Klem Pengikat Kargo",
    shortName: "Strapping Band Motto",
    category: "industrial",
    categoryLabel: "Kardus & Pelindung",
    material: "Virgin Polypropylene (PP) High Tensile Strength",
    thickness: "0.6mm - 0.8mm Embossed / Smooth",
    sizeOptions: ["Lebar 9mm", "Lebar 12mm", "Lebar 15mm (Berat 7kg - 10kg)"],
    finishOptions: ["Kuning Cerah", "Biru", "Hitam"],
    features: [
      "Kekuatan ikat tinggi mampu menahan ikatan kardus dan peti kayu kargo",
      "Kompatibel untuk mesin strapping semi-otomatis dan alat manual klem",
      "Ketebalan stabil tidak mudah melar atau selip",
      "Mencegah tumpukan barang bergeser saat transportasi jarak jauh"
    ],
    certifications: ["ISO 9001:2015"],
    b2bMoq: "1 Roll (7-10kg) / Grosir Pabrik 50 Roll",
    retailPrice: "Rp 145.000 / roll (7 Kg)",
    b2bPriceTier: [
      { qty: "5 - 19 Roll", price: "Rp 122.000 / roll" },
      { qty: "20 - 49 Roll", price: "Rp 110.000 / roll" },
      { qty: "50+ Roll", price: "Rp 98.000 / roll" }
    ],
    leadTime: "Ready Stock Armada Logistik Motto",
    badge: "Ikat Pallet Kuat",
    image: "assets/products/strapping-band.jpg",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Tali strapping band PP mutu industri untuk mengikat dus kemasan karton, bundel profil pipa, peti kayu, dan kargo berat agar terkunci aman selama perjalanan."
  },
  {
    id: "motto-tali-rafia",
    name: "Motto Tali Rafia Gulungan Hitam & Warna Super Kuat",
    shortName: "Tali Rafia Motto",
    category: "industrial",
    categoryLabel: "Kardus & Pelindung",
    material: "Polypropylene (PP) Biji Plastik Pilihan",
    thickness: "Serat Lembut Anti Sakit di Tangan",
    sizeOptions: ["Gulungan 10 Ons (1 Kg)", "Gulungan Jumbo 5 Kg", "Roll Karung"],
    finishOptions: ["Hitam Kilap", "Merah", "Biru", "Kuning"],
    features: [
      "Serat tali lentur namun memiliki daya ikat sangat kuat",
      "Tidak mudah putus saat ditarik dan disimpul erat",
      "Panjang gulungan terjamin akurat sesuai timbangan",
      "Pilihan serbaguna untuk toko kelontong, ekspedisi, dan gudang"
    ],
    certifications: ["Standard Mutu Indonesia"],
    b2bMoq: "1 Bal (15-20 Roll) / Truk Grosir 100 Bal",
    retailPrice: "Rp 16.500 / roll (10 Ons)",
    b2bPriceTier: [
      { qty: "1 - 9 Bal", price: "Rp 13.500 / roll" },
      { qty: "10 - 49 Bal", price: "Rp 12.000 / roll" },
      { qty: "50+ Bal", price: "Rp 10.800 / roll" }
    ],
    leadTime: "Ready Stock di Toko Resmi Motto",
    badge: "Serbaguna",
    image: "assets/products/tali-rafia.jpg",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Tali rafia berkualitas tinggi dari Motto Pack Indonesia dengan serat lembut yang nyaman di tangan namun tidak gampang getas atau putus saat diikat kencang."
  },
  {
    id: "motto-plastik-sampah",
    name: "Motto Trash Bag Plastik Sampah Roll & Lembaran Tebal",
    shortName: "Plastik Sampah Motto",
    category: "industrial",
    categoryLabel: "Kardus & Pelindung",
    material: "High-Density Polyethylene (HDPE) Heavy Duty",
    thickness: "40 - 50 Micron Tebal Anti Bocor",
    sizeOptions: ["40x50 cm", "50x60 cm", "60x100 cm", "80x100 cm", "90x120 cm"],
    finishOptions: ["Hitam Pekat Solid"],
    features: [
      "Plastik tebal tidak mudah sobek oleh sudut kotak atau benda tajam",
      "Dasar seal bintang / lipatan ganda anti bocor cairan sampah basah",
      "Bebas bau menyengat karena dibuat dari bahan berkualitas",
      "Digunakan hotel bintang lima, rumah sakit, restoran, dan perkantoran"
    ],
    certifications: ["Hygiene Standard"],
    b2bMoq: "1 Pack (isi 20-50 lbr) / Grosir 1 Karung (30 kg)",
    retailPrice: "Rp 18.000 / pack",
    b2bPriceTier: [
      { qty: "10 - 49 Pack", price: "Rp 14.500 / pack" },
      { qty: "50 - 199 Pack", price: "Rp 12.800 / pack" },
      { qty: "200+ Pack", price: "Rp 11.200 / pack" }
    ],
    leadTime: "Ready Stock Selalu Tersedia",
    badge: "Tebal Anti Robek",
    image: "assets/products/plastik-sampah.jpg",
    storeLink: "https://www.tokopedia.com",
    shopeeLink: "https://shopee.co.id",
    description: "Kantong plastik sampah hitam pekat kualitas prima dari Motto Pack. Menjamin penanganan limbah domestik dan industri tetap rapi, higienis, dan tanpa rembesan kotor."
  }
];

// Helper functions for catalog filtering and search
function filterProducts(category = 'all', searchQuery = '', material = 'all') {
  return MOTTO_PRODUCTS.filter(product => {
    const matchCategory = category === 'all' || product.category === category;
    const matchSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchMaterial = material === 'all' || product.material.toLowerCase().includes(material.toLowerCase());
    return matchCategory && matchSearch && matchMaterial;
  });
}

// B2B Pricing Calculator Logic for Motto Pack Products
function calculateB2BEstimate({ category, quantity, customPrint, materialType }) {
  let basePrice = 8500;
  let leadDays = 3;

  switch (category) {
    case 'tape':
      basePrice = 7800;
      break;
    case 'film':
      basePrice = 48000;
      break;
    case 'industrial':
      basePrice = 1800;
      break;
    case 'horeca':
      basePrice = 16000;
      break;
    default:
      basePrice = 7500;
  }

  // Volume discount tiers
  let discount = 0;
  if (quantity >= 50000) {
    discount = 0.28;
    leadDays = 10;
  } else if (quantity >= 20000) {
    discount = 0.20;
    leadDays = 7;
  } else if (quantity >= 10000) {
    discount = 0.14;
    leadDays = 5;
  } else if (quantity >= 5000) {
    discount = 0.08;
    leadDays = 3;
  }

  // Custom printing surcharge (misal lakban cetak logo brand / printing box)
  let printSurcharge = 0;
  if (customPrint === 'roto' || customPrint === 'cylinder') {
    printSurcharge = 1200;
    leadDays += 7;
  } else if (customPrint === 'sablon') {
    printSurcharge = 600;
    leadDays += 4;
  }

  const unitPrice = Math.round((basePrice * (1 - discount)) + printSurcharge);
  const totalPrice = unitPrice * quantity;

  return {
    unitPrice,
    totalPrice,
    leadDays,
    formattedUnit: "Rp " + unitPrice.toLocaleString('id-ID'),
    formattedTotal: "Rp " + totalPrice.toLocaleString('id-ID'),
    moqStatus: quantity >= 5000 ? "Memenuhi Syarat Grosir Pabrik Motto Pack B2B" : "Order Di Bawah MOQ Pabrik (Rekomendasi Beli Ecer di Toko Resmi Motto)"
  };
}
