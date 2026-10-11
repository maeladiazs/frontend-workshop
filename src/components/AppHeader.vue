<template>
  <header class="royal-header">
    <div class="header-container">
      
      <!-- SISI KIRI: Logo (M Mahkota & Kristal + Teks Brand) -->
      <a href="#" class="left-logo-container" title="Kembali ke Atas">
        <!-- Lambang Logo M dengan Mahkota & Kristal (3D Gold Transparan) -->
        <div class="emblem-wrapper" title="MAESTUDIO">
          <img src="/logo-m.png" alt="MAESTUDIO Royal Logo" class="royal-emblem-img" />
        </div>

        <!-- Teks Informasi Brand (disamping logo) -->
        <div class="brand-text-block">
          <span class="haute-text">haute architecture</span>
          <h1 class="main-studio-title">MAESTUDIO</h1>
          <span class="sub-atelier-text">royal atelier &amp; architecture</span>
        </div>
      </a>

      <!-- TENGAH: 3 Menu Navigasi (Tentang, Koleksi, Layanan) -->
      <nav class="center-nav" aria-label="Navigasi Utama">
        <ul class="nav-links">
          <li>
            <a href="#tentang" class="nav-item">
              <span>Tentang</span>
              <span class="nav-indicator"></span>
            </a>
          </li>
          <li class="nav-separator">✦</li>
          <li>
            <a href="#koleksi" class="nav-item">
              <span>Koleksi</span>
              <span class="nav-indicator"></span>
            </a>
          </li>
          <li class="nav-separator">✦</li>
          <li>
            <a href="#layanan" class="nav-item">
              <span>Layanan</span>
              <span class="nav-indicator"></span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- SISI KANAN: Konsultasi & Profile Avatar -->
      <div class="right-actions-section">
        <!-- Tombol Konsultasi -->
        <a href="#konsultasi" class="consultation-btn">
          <span class="sparkle-icon">✦</span>
          <span>Konsultasi</span>
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>

        <!-- Emot / Icon Profil -->
        <a href="#konsultasi" class="profile-btn" aria-label="Profil & Konsultasi Pengguna" title="Profil Pengguna">
          <div class="profile-avatar">
            <svg class="profile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span class="status-indicator"></span>
          </div>
        </a>
      </div>

    </div>
  </header>
</template>

<script setup>
// Header Component untuk MAESTUDIO
</script>

<style scoped>
/* Palette & Styling Nuansa Pink Soft & Royal Gold Luxury */
.royal-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(253, 242, 244, 0.92); /* Soft Pink pastel */
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(224, 185, 195, 0.45);
  box-shadow: 0 4px 25px -4px rgba(188, 117, 137, 0.12),
              0 1px 3px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
}

.header-container {
  max-width: 1380px;
  margin: 0 auto;
  padding: 12px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

/* ========================================================
   1. SISI KIRI: LOGO (M MAHKOTA KRISTAL) & TEKS BRAND
   ======================================================== */
.left-logo-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  flex: 1;
  text-decoration: none;
}

.emblem-wrapper {
  width: 60px;
  height: 60px;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
  filter: drop-shadow(0 4px 10px rgba(189, 137, 151, 0.25));
}

.royal-emblem-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.emblem-wrapper:hover {
  transform: rotate(-3deg) scale(1.08);
  filter: drop-shadow(0 6px 18px rgba(212, 175, 55, 0.5));
}

.brand-text-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.haute-text {
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  color: #8B5467;
  text-transform: lowercase;
  opacity: 0.9;
  line-height: 1.1;
}

.main-studio-title {
  margin: 1px 0;
  font-family: 'Cinzel', serif;
  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: 0.24em;
  color: #421D2A;
  background: linear-gradient(135deg, #381521 20%, #7E364F 60%, #AA7A1E 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
}

.sub-atelier-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.58rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: #966A78;
  text-transform: lowercase;
  line-height: 1.1;
}

/* ========================================================
   2. TENGAH: 3 MENU NAVIGASI (Tentang, Koleksi, Layanan)
   ======================================================== */
.center-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 6px 20px;
  display: flex;
  align-items: center;
  gap: 22px;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 40px;
  border: 1px solid rgba(230, 197, 206, 0.5);
  box-shadow: 0 2px 10px rgba(175, 120, 137, 0.06);
}

.nav-item {
  position: relative;
  text-decoration: none;
  font-family: 'Cinzel', serif;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #5A3543;
  padding: 6px 4px;
  transition: color 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #D4AF37, #C67891);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-item:hover {
  color: #8C2C4E;
}

.nav-item:hover .nav-indicator {
  width: 80%;
}

.nav-separator {
  color: #D4AF37;
  font-size: 0.65rem;
  opacity: 0.7;
}

/* ========================================================
   3. SISI KANAN: KONSULTASI & PROFIL AVATAR
   ======================================================== */
.right-actions-section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  flex: 1;
}

/* Tombol Konsultasi */
.consultation-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 20px;
  border-radius: 30px;
  background: linear-gradient(135deg, #7A3E53 0%, #5E2A3B 100%);
  color: #FFF6F8;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.82rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid rgba(212, 175, 55, 0.4);
  box-shadow: 0 4px 15px rgba(104, 43, 64, 0.22);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.sparkle-icon {
  color: #F8D98C;
  font-size: 0.85rem;
  transition: transform 0.4s ease;
}

.arrow-icon {
  width: 14px;
  height: 14px;
  transition: transform 0.3s ease;
}

.consultation-btn:hover {
  background: linear-gradient(135deg, #8E4962 0%, #6F3346 100%);
  box-shadow: 0 6px 20px rgba(104, 43, 64, 0.35);
  transform: translateY(-2px);
  border-color: rgba(212, 175, 55, 0.7);
}

.consultation-btn:hover .sparkle-icon {
  transform: rotate(72deg) scale(1.2);
}

.consultation-btn:hover .arrow-icon {
  transform: translateX(3px);
}

/* Profil Avatar / Emot Button */
.profile-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: none;
}

.profile-avatar {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFF9FA 0%, #F5D3DC 100%);
  border: 1.5px solid rgba(198, 142, 158, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7A3E53;
  box-shadow: 0 2px 8px rgba(198, 142, 158, 0.2);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.profile-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.profile-btn:hover .profile-avatar {
  transform: translateY(-2px) scale(1.04);
  border-color: #C07990;
  box-shadow: 0 4px 14px rgba(192, 121, 144, 0.35);
  background: linear-gradient(135deg, #FFFFFF 0%, #EFC0CD 100%);
}

.profile-btn:hover .profile-icon {
  transform: scale(1.1);
}

.status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #D4AF37; /* Royal gold dot */
  border: 2px solid #FFF1F4;
  box-shadow: 0 0 6px rgba(212, 175, 55, 0.8);
}

/* ========================================================
   RESPONSIVE DESIGN (TABLET & MOBILE)
   ======================================================== */
@media (max-width: 992px) {
  .header-container {
    padding: 10px 18px;
    gap: 12px;
  }
  .main-studio-title {
    font-size: 1.2rem;
    letter-spacing: 0.18em;
  }
  .nav-links {
    gap: 14px;
    padding: 6px 14px;
  }
  .nav-item {
    font-size: 0.8rem;
    letter-spacing: 0.08em;
  }
  .emblem-wrapper {
    width: 48px;
    height: 48px;
  }
}

@media (max-width: 768px) {
  .header-container {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .left-logo-container {
    order: 1;
    flex: none;
  }
  .right-actions-section {
    order: 2;
    flex: none;
  }
  .center-nav {
    order: 3;
    width: 100%;
    margin-top: 6px;
  }
  .nav-links {
    width: 100%;
    justify-content: space-around;
  }
  .consultation-btn span:nth-child(2) {
    display: none;
  }
}
</style>
