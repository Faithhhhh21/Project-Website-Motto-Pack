/**
 * Motto Pack Indonesia - Main Interactive JavaScript
 * Catalog rendering, live filtering, B2B calculator, Sentra Kemas integration, modals
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileDrawer();
  initCatalog();
  initB2BCalculator();
  initModals();
  initWhatsAppConcierge();
});

/* ==========================================================================
   HEADER & NAVIGATION
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileDrawer() {
  const openBtn = document.querySelector('.mobile-menu-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.querySelector('.drawer-close-btn');

  if (!drawer) return;

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) {
      closeDrawer();
    }
  });

  function closeDrawer() {
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   CATALOG RENDERING & FILTERING
   ========================================================================== */
function initCatalog() {
  const catalogContainer = document.getElementById('catalog-products-grid');
  const featuredContainer = document.getElementById('featured-products-grid');
  const searchInput = document.getElementById('catalog-search');
  const materialSelect = document.getElementById('material-filter');
  const categoryPills = document.querySelectorAll('.pill-btn');

  let activeCategory = 'all';
  let searchQuery = '';
  let activeMaterial = 'all';

  // Render on Catalog Page
  if (catalogContainer) {
    renderProducts(filterProducts(activeCategory, searchQuery, activeMaterial), catalogContainer);

    // Pill Filters
    categoryPills.forEach(pill => {
      pill.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeCategory = pill.dataset.category || 'all';
        applyFilters();
      });
    });

    // Search Filter with debouncing
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        applyFilters();
      });
    }

    // Material Filter
    if (materialSelect) {
      materialSelect.addEventListener('change', (e) => {
        activeMaterial = e.target.value;
        applyFilters();
      });
    }

    function applyFilters() {
      const filtered = filterProducts(activeCategory, searchQuery, activeMaterial);
      renderProducts(filtered, catalogContainer);
    }
  }

  // Render on Homepage Featured section
  if (featuredContainer) {
    const featuredList = MOTTO_PRODUCTS.slice(0, 8);
    renderProducts(featuredList, featuredContainer, true);
  }
}

function renderProducts(products, container, isFeatured = false) {
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 16px; border: 1px dashed #cbd5e1;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" style="margin: 0 auto 16px;">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3 style="font-size: 1.25rem; color: #0f172a; margin-bottom: 8px;">Tidak Ada Produk yang Cocok</h3>
        <p style="color: #64748b; font-size: 0.9375rem; margin-bottom: 20px;">Silakan coba kata kunci lain atau hubungi tim sales kami untuk custom order kemasan khusus.</p>
        <button class="btn btn-primary" onclick="resetCatalogFilters()">Reset Pencarian</button>
      </div>
    `;
    return;
  }

  container.innerHTML = products.map(product => {
    const badgeClass = product.category === 'eco' ? 'eco' : 'sentra';
    const certsHtml = product.certifications.slice(0, 2).map(c => `<span class="cert-micro">${c}</span>`).join('');
    const firstTierPrice = product.b2bPriceTier && product.b2bPriceTier[0] ? product.b2bPriceTier[0].price : 'Inquire MOQ';
    const buyLink = product.storeLink || product.sentraKemasLink || "https://www.tokopedia.com";

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="card-img-wrap">
          <img src="${product.image}" alt="${product.name}" class="card-img" loading="lazy" />
          <span class="card-badge ${badgeClass}">${product.badge}</span>
          <div class="card-cert-row">
            ${certsHtml}
          </div>
        </div>
        
        <div class="card-body">
          <span class="card-category">${product.categoryLabel}</span>
          <h3 class="card-title" title="${product.name}">${product.name}</h3>
          <div class="card-material">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <span>${product.material}</span>
          </div>

          <div class="card-price-box">
            <div class="price-col sentra-col">
              <span>Eceran Motto Store</span>
              <strong>${product.retailPrice}</strong>
            </div>
            <div class="price-col b2b">
              <span>B2B Grosir Pabrik</span>
              <strong>${firstTierPrice}</strong>
            </div>
          </div>

          <div class="card-footer-btns">
            <button class="btn btn-outline btn-sm btn-quick-view" onclick="openProductDetail('${product.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              Detail & Spek
            </button>
            <a href="${buyLink}" target="_blank" rel="noopener noreferrer" class="btn btn-sentra btn-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Beli Online
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

window.resetCatalogFilters = function() {
  const searchInput = document.getElementById('catalog-search');
  const materialSelect = document.getElementById('material-filter');
  const categoryPills = document.querySelectorAll('.pill-btn');

  if (searchInput) searchInput.value = '';
  if (materialSelect) materialSelect.value = 'all';
  categoryPills.forEach(p => p.classList.remove('active'));
  if (categoryPills[0]) categoryPills[0].classList.add('active');

  const catalogContainer = document.getElementById('catalog-products-grid');
  if (catalogContainer) {
    renderProducts(MOTTO_PRODUCTS, catalogContainer);
  }
};

/* ==========================================================================
   PRODUCT DETAIL & SPEC MODAL
   ========================================================================== */
function initModals() {
  const modal = document.getElementById('product-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

window.openProductDetail = function(productId) {
  const product = MOTTO_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-modal');
  const modalBody = document.getElementById('modal-dynamic-content');
  if (!modal || !modalBody) return;

  const sizeListHtml = product.sizeOptions.map(s => `<span class="cert-micro" style="background:#e2e8f0; color:#0f172a;">${s}</span>`).join(' ');
  const certListHtml = product.certifications.map(c => `<span class="cert-micro" style="background:#dcfce7; color:#15803d;">✓ ${c}</span>`).join(' ');
  
  const tierRowsHtml = product.b2bPriceTier ? product.b2bPriceTier.map(t => `
    <div class="tier-item">
      <span>${t.qty}</span>
      <strong>${t.price}</strong>
    </div>
  `).join('') : '<p style="font-size: 0.8125rem;">Hubungi sales untuk penawaran skala besar.</p>';

  const featuresListHtml = product.features.map(f => `<li style="display:flex; gap:8px; margin-bottom:6px; font-size:0.875rem; color:#475569;"><span style="color:#0284c7;">✓</span> ${f}</li>`).join('');

  modalBody.innerHTML = `
    <div class="modal-content-grid">
      <div>
        <div class="modal-img-wrap">
          <img src="${product.image}" alt="${product.name}" class="modal-img" />
        </div>
        <div style="margin-top: 16px; display: flex; flex-direction: column; gap: 10px;">
          <a href="${product.storeLink || product.sentraKemasLink || 'https://www.tokopedia.com'}" target="_blank" rel="noopener noreferrer" class="btn btn-sentra" style="width: 100%;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Beli Ecer di Toko Resmi Motto Pack
          </a>
          <button class="btn btn-primary" onclick="inquireB2BSingle('${product.id}')" style="width: 100%;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Ajukan Penawaran Grosir Pabrik (B2B)
          </button>
        </div>
      </div>

      <div>
        <span class="section-label" style="margin-bottom:8px;">${product.categoryLabel}</span>
        <h2 style="font-size: 1.5rem; color: #0b1f3a; margin-bottom: 12px; line-height: 1.3;">${product.name}</h2>
        <p style="font-size: 0.9375rem; color: #475569; margin-bottom: 18px; line-height: 1.6;">${product.description}</p>
        
        <h4 style="font-size: 0.875rem; text-transform: uppercase; color: #0b1f3a; margin-bottom: 8px;">Keunggulan & Karakteristik</h4>
        <ul style="margin-bottom: 18px;">
          ${featuresListHtml}
        </ul>

        <h4 style="font-size: 0.875rem; text-transform: uppercase; color: #0b1f3a; margin-bottom: 8px;">Spesifikasi Teknis</h4>
        <table class="modal-specs-table">
          <tr>
            <td>Material Struktur</td>
            <td>${product.material}</td>
          </tr>
          <tr>
            <td>Ketebalan</td>
            <td>${product.thickness}</td>
          </tr>
          <tr>
            <td>Pilihan Ukuran</td>
            <td>${sizeListHtml}</td>
          </tr>
          <tr>
            <td>Sertifikasi</td>
            <td>${certListHtml}</td>
          </tr>
          <tr>
            <td>Minimum Order (B2B)</td>
            <td>${product.b2bMoq}</td>
          </tr>
          <tr>
            <td>Lead Time Manufaktur</td>
            <td>${product.leadTime}</td>
          </tr>
        </table>

        <div class="modal-b2b-tier-box">
          <div class="tier-title">Tier Harga Grosir Pabrik (Motto Pack B2B)</div>
          <div class="tier-list">
            ${tierRowsHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

/* ==========================================================================
   B2B PRICING ESTIMATOR / CALCULATOR
   ========================================================================== */
function initB2BCalculator() {
  const calcForm = document.getElementById('b2b-calc-form');
  const qtyRange = document.getElementById('calc-quantity-range');
  const qtyInput = document.getElementById('calc-quantity-input');
  const categorySelect = document.getElementById('calc-category');
  const printSelect = document.getElementById('calc-print');
  const materialSelect = document.getElementById('calc-material-type');

  const unitDisplay = document.getElementById('calc-unit-display');
  const totalDisplay = document.getElementById('calc-total-display');
  const leadDisplay = document.getElementById('calc-lead-display');
  const statusDisplay = document.getElementById('calc-status-display');
  const rfqBtn = document.getElementById('calc-rfq-submit-btn');

  if (!calcForm || !qtyRange) return;

  function updateCalculation() {
    const quantity = parseInt(qtyRange.value, 10) || 5000;
    const category = categorySelect ? categorySelect.value : 'flexible';
    const customPrint = printSelect ? printSelect.value : 'plain';
    const materialType = materialSelect ? materialSelect.value : 'standard';

    if (qtyInput) {
      qtyInput.value = quantity.toLocaleString('id-ID');
    }

    const result = calculateB2BEstimate({ category, quantity, customPrint, materialType });

    if (unitDisplay) unitDisplay.textContent = result.formattedUnit;
    if (totalDisplay) totalDisplay.textContent = result.formattedTotal;
    if (leadDisplay) leadDisplay.textContent = `${result.leadDays} Hari Kerja`;
    if (statusDisplay) statusDisplay.textContent = result.moqStatus;
  }

  qtyRange.addEventListener('input', (e) => {
    updateCalculation();
  });

  if (qtyInput) {
    qtyInput.addEventListener('change', (e) => {
      const val = parseInt(e.target.value.replace(/\D/g, ''), 10) || 5000;
      qtyRange.value = Math.min(Math.max(val, 1000), 200000);
      updateCalculation();
    });
  }

  if (categorySelect) categorySelect.addEventListener('change', updateCalculation);
  if (printSelect) printSelect.addEventListener('change', updateCalculation);
  if (materialSelect) materialSelect.addEventListener('change', updateCalculation);

  // Initial update
  updateCalculation();

  if (rfqBtn) {
    rfqBtn.addEventListener('click', () => {
      const quantity = qtyRange.value;
      const category = categorySelect ? categorySelect.options[categorySelect.selectedIndex].text : '';
      const printing = printSelect ? printSelect.options[printSelect.selectedIndex].text : '';
      const unit = unitDisplay ? unitDisplay.textContent : '';
      const total = totalDisplay ? totalDisplay.textContent : '';

      const waMessage = `Halo Sales Motto Pack Indonesia,%0A%0ASaya ingin mengajukan Request for Quotation (RFQ) B2B Wholesale:%0A- Kategori: ${encodeURIComponent(category)}%0A- Jumlah Estimasi: ${quantity} pcs%0A- Opsi Cetak: ${encodeURIComponent(printing)}%0A- Estimasi Kalkulator: ${encodeURIComponent(unit)} (${encodeURIComponent(total)})%0A%0AMohon informasi ketersediaan sample kit & penawaran resmi dari PT Motto Pack Indonesia. Terima kasih.`;
      
      window.open(`https://wa.me/6281288889999?text=${waMessage}`, '_blank');
      showToast('Membuka WhatsApp Sales Executive...');
    });
  }
}

/* ==========================================================================
   WHATSAPP CONCIERGE & INQUIRIES
   ========================================================================== */
function initWhatsAppConcierge() {
  const waBtn = document.querySelector('.floating-wa-btn');
  if (!waBtn) return;

  waBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const defaultMsg = encodeURIComponent("Halo PT Motto Pack Indonesia, saya ingin konsultasi mengenai kebutuhan kemasan (Packaging/FMCG) untuk bisnis saya.");
    window.open(`https://wa.me/6281288889999?text=${defaultMsg}`, '_blank');
  });
}

window.inquireB2BSingle = function(productId) {
  const product = MOTTO_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const msg = `Halo Tim B2B Motto Pack Indonesia,%0A%0ASaya berminat untuk penawaran grosir produk berikut:%0A- Nama Produk: ${encodeURIComponent(product.name)}%0A- Material: ${encodeURIComponent(product.material)}%0A- MOQ: ${encodeURIComponent(product.b2bMoq)}%0A%0AMohon info harga terbaik, syarat pengiriman, dan sample produk. Terima kasih.`;
  window.open(`https://wa.me/6281288889999?text=${msg}`, '_blank');
  showToast('Menghubungkan ke Tim Sales B2B Motto Pack...');
};

/* ==========================================================================
   TOAST HELPER
   ========================================================================== */
function showToast(message) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
