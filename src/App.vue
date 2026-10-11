<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'

const selectedProjectType = ref('Residensial')
const projectTypes = ['Residensial', 'Interior', 'Komersial', 'Master Plan']
const form = ref({
  nama: 'Maeladia Zaskia Saputri',
  telepon: '',
  pesan: ''
})
</script>

<template>
  <div class="app-layout">
    <!-- Header Komponen -->
    <AppHeader />

    <!-- Konten Showcase Estetika Royal Studio -->
    <main class="main-content">
      <section class="hero-preview">
        <div class="hero-badge">✦ STUDIO ARSITEKTUR &amp; INTERIOR TERNAMA</div>
        <h2 class="hero-headline">Wujudkan Ruang Estetika, Hidup Lebih Tenang</h2>
        <p class="hero-subtext">
          Harmoni keanggunan minimalis dan fungsi nyata untuk hunian modern kontemporer impian Anda. Menghadirkan keseimbangan rasa dalam setiap skala spasial.
        </p>
        <div class="hero-actions">
          <a href="#konsultasi" class="primary-hero-btn">KONSULTASI DESAIN ➜</a>
          <a href="#tur-virtual" class="secondary-hero-btn">▶ LIHAT VIDEO SHOWREEL</a>
        </div>

        <!-- ========================================================
             BAGIAN DIBAWAH KONSULTASI DESAIN (SESUAI GAMBAR)
             ======================================================== -->
        <!-- 1. Baris Rating & Pencapaian Ringkas -->
        <div class="stats-summary-bar">
          <!-- Rating Bintang & Ulasan -->
          <div class="summary-group rating-group">
            <div class="stars-row">
              <span class="star-icon">★</span>
              <span class="star-icon">★</span>
              <span class="star-icon">★</span>
              <span class="star-icon">★</span>
              <span class="star-icon">★</span>
            </div>
            <div class="rating-text">
              <span class="score">4.9 / 5.0</span>
              <span class="reviews-count">(120+ Ulasan Klien)</span>
            </div>
          </div>

          <div class="vertical-divider"></div>

          <!-- Total Proyek Selesai -->
          <div class="summary-group project-group">
            <span class="building-icon">
              <!-- Ikon Bangunan Gedung -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <line x1="9" y1="22" x2="9" y2="18"></line>
                <line x1="15" y1="22" x2="15" y2="18"></line>
                <line x1="9" y1="18" x2="15" y2="18"></line>
                <line x1="8" y1="6" x2="8.01" y2="6"></line>
                <line x1="16" y1="6" x2="16.01" y2="6"></line>
                <line x1="12" y1="6" x2="12.01" y2="6"></line>
                <line x1="8" y1="10" x2="8.01" y2="10"></line>
                <line x1="16" y1="10" x2="16.01" y2="10"></line>
                <line x1="12" y1="10" x2="12.01" y2="10"></line>
                <line x1="8" y1="14" x2="8.01" y2="14"></line>
                <line x1="16" y1="14" x2="16.01" y2="14"></line>
                <line x1="12" y1="14" x2="12.01" y2="14"></line>
              </svg>
            </span>
            <span class="project-count">250+ Proyek Selesai</span>
          </div>

          <div class="vertical-divider"></div>

          <!-- Terverifikasi IAI & Archdaily -->
          <div class="summary-group verified-group">
            <span class="verified-icon">
              <!-- Ikon Rosette Checkmark -->
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 2.1 3.2-.3 1.2 3 2.8 1.5-.7 3.1 1.7 2.7-2.1 2.4.3 3.2-3 1.2-1.5 2.8-3.1-.7-2.7 1.7-2.4-2.1-3.2.3-1.2-3-2.8-1.5.7-3.1-1.7-2.7 2.1-2.4-.3-3.2 3-1.2 1.5-2.8 3.1.7L12 2zm-1.2 13.6l5.7-5.7-1.4-1.4-4.3 4.3-2.1-2.1-1.4 1.4 3.5 3.5z"/>
              </svg>
            </span>
            <span class="verified-label">TERVERIFIKASI IAI &amp; ARCHDAILY</span>
          </div>
        </div>

        <!-- 2. Kotak Panel Standar Atelier & 4 Pilar Pengakuan Spasial -->
        <div class="curated-panel" id="layanan">
          <!-- Header Bar di dalam Card -->
          <div class="panel-top-header">
            <div class="panel-title-left">
              <span class="brown-dot">●</span>
              <span class="panel-title-text">STANDAR ATELIER &amp; PENGAKUAN SPASIAL TERKURASI</span>
            </div>
            <div class="panel-badge-right">
              <span class="check-badge-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </span>
              <span class="badge-text">SERTIFIKASI IAI • ARCHDAILY SELECTED PRACTICE 2026</span>
            </div>
          </div>

          <hr class="panel-separator" />

          <!-- 4 Kolom Pilar Informasi (Bisa Diklik) -->
          <div class="pillars-grid">
            <!-- Pilar 1: Akreditasi IAI -->
            <a href="#tentang" class="pillar-card">
              <div class="pillar-icon-box">
                <!-- Rosette Checkmark -->
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2l2.3 2.2 3.1-.3 1.2 2.9 2.7 1.5-.7 3 1.6 2.6-2 2.3.3 3.1-2.9 1.2-1.5 2.7-3-.7-2.6 1.6-2.3-2-.3-3.1-2.9-1.2-1.5-2.7.7-3-1.6-2.6 2-2.3-.3-3.1 2.9-1.2 1.5-2.7 3 .7L12 2z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
              </div>
              <div class="pillar-content">
                <h4 class="pillar-title">Akreditasi IAI &amp;<br>Berkelanjutan</h4>
                <p class="pillar-desc">Standar monograf internasional &amp; rancang bangun hijau.</p>
              </div>
            </a>

            <!-- Pilar 2: 250+ Hunian Prestisius -->
            <a href="#koleksi" class="pillar-card">
              <div class="pillar-icon-box">
                <!-- House / Building outline -->
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 10l9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10z"></path>
                  <polyline points="9 21 9 12 15 12 15 21"></polyline>
                </svg>
              </div>
              <div class="pillar-content">
                <h4 class="pillar-title">250+ Hunian<br>Prestisius</h4>
                <p class="pillar-desc">Kendal, Jakarta, Korea, China dan Jepang.</p>
              </div>
            </a>

            <!-- Pilar 3: Kurasi Vernakular -->
            <a href="#tentang" class="pillar-card">
              <div class="pillar-icon-box">
                <!-- Nature / Materials tree & landscape -->
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22v-9"></path>
                  <path d="M8 13a4 4 0 1 1 7.8-1.4 3.5 3.5 0 0 1 2.2 4.4A3.5 3.5 0 0 1 15 18H8a4 4 0 0 1 0-5z"></path>
                </svg>
              </div>
              <div class="pillar-content">
                <h4 class="pillar-title">Kurasi Vernakular</h4>
                <p class="pillar-desc">Jati Reklamasi, Andesit &amp; Marmer Travertine.</p>
              </div>
            </a>

            <!-- Pilar 4: Penghargaan Spasial -->
            <a href="#konsultasi" class="pillar-card">
              <div class="pillar-icon-box">
                <!-- Medal / Award -->
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="8" r="6"></circle>
                  <path d="M15.4 12.8L18 22l-6-3-6 3 2.6-9.2"></path>
                  <circle cx="12" cy="8" r="2.5" fill="currentColor"></circle>
                </svg>
              </div>
              <div class="pillar-content">
                <h4 class="pillar-title">Penghargaan Spasial</h4>
                <p class="pillar-desc">ArchDaily &amp; Indonesia Design Excellence 2024–2026.</p>
              </div>
            </a>
          </div>
        </div>

        <!-- ========================================================
             BAGIAN 01 / FILOSOFI DESAIN — ESTETIKA SPASIAL (SESUAI GAMBAR)
             ======================================================== -->
        <section class="philosophy-section" id="tentang">
          <!-- Header Bar Filosofi -->
          <div class="philosophy-top-bar">
            <span class="philosophy-breadcrumb">01 / FILOSOFI DESAIN — ESTETIKA SPASIAL</span>
            <span class="atelier-monograf">ATELIER MONOGRAF • 2026</span>
          </div>

          <!-- Konten 2 Kolom: Kiri Info Metodologi & Kanan Card Proyek Ubud -->
          <div class="philosophy-content-grid">
            
            <!-- Kolom Kiri: Eksplorasi Detail Tanpa Batas -->
            <div class="philosophy-text-card">
              <div class="caliper-icon-box">
                <!-- Ikon Jangka / Arsitek Caliper / Compass -->
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="5" r="2"></circle>
                  <path d="M12 7L6 21"></path>
                  <path d="M12 7l6 14"></path>
                  <line x1="8.5" y1="15" x2="15.5" y2="15"></line>
                </svg>
              </div>

              <h3 class="philosophy-heading">Eksplorasi Detail<br>Tanpa Batas</h3>

              <p class="philosophy-lead">
                Setiap sudut dirancang secara presisi dengan mengedepankan sirkulasi alami, material ramah lingkungan, dan sentuhan visual yang menenangkan jiwa.
              </p>

              <!-- Daftar Poin Bernilai Filosofis -->
              <ul class="philosophy-feature-list">
                <li class="feature-item">
                  <span class="feature-check-icon">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span class="feature-text">
                    Termal pasif yang mereduksi konsumsi energi pendingin buatan hingga 40%.
                  </span>
                </li>

                <li class="feature-item">
                  <span class="feature-check-icon">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span class="feature-text">
                    Integrasi bahan vernakular Indonesia: Kayu jati reklamasi, andesit gunung, dan plester terakota.
                  </span>
                </li>

                <li class="feature-item">
                  <span class="feature-check-icon">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span class="feature-text">
                    Koreografi pencahayaan zenit yang berubah lembut mengikuti waktu hari.
                  </span>
                </li>
              </ul>

              <a href="#koleksi" class="learn-method-link">
                <span>PELAJARI METODOLOGI SPASIAL</span>
                <span class="arrow-right">→</span>
              </a>
            </div>

            <!-- Kolom Kanan: Showcase Proyek Rumah Langit Kayu Ubud -->
            <div class="project-showcase-card">
              <!-- Visual Gambar dengan Badges & Overlay Teks -->
              <div class="project-image-wrapper">
                <img src="/rumah-langit-kayu.jpg" alt="Rumah Langit Kayu Ubud" class="project-img" />
                
                <!-- Floating Badges di Kiri Atas -->
                <div class="project-floating-badges">
                  <span class="badge-white">PROYEK UNGGULAN 2026</span>
                  <span class="badge-terracotta">HUNIAN PRIVAT • UBUD</span>
                </div>

                <!-- Gradient Overlay & Title di Bawah Gambar -->
                <div class="project-caption-overlay">
                  <span class="lighting-tag">PENCAHAYAAN HANGAT &amp; ALAMI</span>
                  <h4 class="showcase-title">Rumah Langit Kayu — Harmoni Tradisi &amp; Modernitas</h4>
                </div>
              </div>

              <!-- Footer Bar Detail Spesifikasi & Tombol Eksplorasi -->
              <div class="project-specs-footer">
                <div class="specs-info">
                  <span class="ruler-icon">
                    <!-- Ikon Set Square / Triangle Ruler -->
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 21H3L21 3v18z"></path>
                      <line x1="8" y1="21" x2="8" y2="18"></line>
                      <line x1="12" y1="21" x2="12" y2="18"></line>
                      <line x1="16" y1="21" x2="16" y2="18"></line>
                    </svg>
                  </span>
                  <span class="specs-text">
                    Luas: 480m² • Kayu Jati Daur Ulang &amp; Batu Andesit Kendal.
                  </span>
                </div>

                <a href="#tur-virtual" class="explore-project-btn">
                  <span>EKSPLORASI PROYEK</span>
                  <span class="btn-arrow-up">↗</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        <!-- ========================================================
             BAGIAN 02 / KURASI PILIHAN — KOLEKSI DESAIN TERKINI (SESUAI GAMBAR)
             ======================================================== -->
        <section class="curated-styles-section" id="koleksi">
          <!-- Header Bar Koleksi -->
          <div class="curated-header-bar">
            <div class="curated-header-left">
              <span class="curated-breadcrumb">02 / KURASI PILIHAN — KOLEKSI DESAIN TERKINI</span>
              <h3 class="curated-main-title">Pilihan Gaya Hunian Terkurasi</h3>
            </div>
            <div class="curated-header-right">
              <p class="curated-intro-desc">
                Eksplorasi spektrum tipologi yang kami formulasikan secara khusus sesuai dengan karakter personal dan kebutuhan spasial Anda.
              </p>
            </div>
          </div>

          <!-- 3 Kolom Card Tipologi Gaya Hunian -->
          <div class="styles-grid">
            
            <!-- CARD 1: TIPOLOGI 01 • KETENANGAN ALAMI (Minimallits Japandi & Tenang) -->
            <article class="style-card">
              <div class="style-card-image-wrapper">
                <img src="/style-japandi.jpg" alt="Minimalis Japandi & Tenang" class="style-img" />
                <span class="pill-badge tag-trending">TRENDING</span>
                <button class="circle-icon-btn" aria-label="Ikon Daun Alami" title="Ketenangan Alami">
                  <!-- Ikon Daun / Tanaman Alami -->
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9z"></path>
                    <path d="M12 12c-2 0-3-1-3-3 0-1.5 1-3 3-5 2 2 3 3.5 3 5 0 2-1 3-3 3z"></path>
                    <line x1="12" y1="12" x2="12" y2="21"></line>
                  </svg>
                </button>
              </div>

              <div class="style-card-body">
                <span class="typology-subtitle">TIPOLOGI 01 • KETENANGAN ALAMI</span>
                <h4 class="typology-title">Minimalis (Japandi &amp; Tenang)</h4>
                <p class="typology-desc">
                  Menghapus distraksi visual dengan menghadirkan ruang bernapas yang lapang, proporsi furnitur rendah, dan material organik
                </p>

                <div class="style-card-footer">
                  <span class="archived-count">42 Karya Terarsip</span>
                  <a href="#konsultasi" class="explore-inline-link" @click="selectedProjectType = 'Interior'">
                    <span>EKSPLORASI</span>
                    <span class="arrow-arrow">→</span>
                  </a>
                </div>
              </div>
            </article>

            <!-- CARD 2: TIPOLOGI 02 • KEHANGATAN BERKELANJUTAN (Nordic Hangat & Bersahaja) -->
            <article class="style-card">
              <div class="style-card-image-wrapper">
                <img src="/style-nordic.jpg" alt="Nordic Hangat & Bersahaja" class="style-img" />
                <span class="pill-badge tag-favorit">FAVORIT</span>
                <button class="circle-icon-btn" aria-label="Ikon Matahari Cahaya Alami" title="Kehangatan Berkelanjutan">
                  <!-- Ikon Matahari / Sun Rays -->
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                  </svg>
                </button>
              </div>

              <div class="style-card-body">
                <span class="typology-subtitle">TIPOLOGI 02 • KEHANGATAN BERKELANJUTAN</span>
                <h4 class="typology-title">Nordic (Hangat &amp; Bersahaja)</h4>
                <p class="typology-desc">
                  Pemanfaatan maksimal cahaya alami, palet warna krem travertine, dan kurasi tekstil alami yang mengundang rasa damai bagi seluruh...
                </p>

                <div class="style-card-footer">
                  <span class="archived-count">38 Karya Terarsip</span>
                  <a href="#konsultasi" class="explore-inline-link" @click="selectedProjectType = 'Residensial'">
                    <span>EKSPLORASI</span>
                    <span class="arrow-arrow">→</span>
                  </a>
                </div>
              </div>
            </article>

            <!-- CARD 3: TIPOLOGI 03 • KARAKTER OTENTIK (Industrial Tegas & Berani) -->
            <article class="style-card">
              <div class="style-card-image-wrapper">
                <img src="/style-industrial.jpg" alt="Industrial Tegas & Berani" class="style-img" />
                <span class="pill-badge tag-eksklusif">EKSKLUSIF</span>
                <button class="circle-icon-btn" aria-label="Ikon Struktur Presisi" title="Karakter Otentik">
                  <!-- Ikon Kubus / Struktur Spasial Perspektif -->
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m21.12 6.4-6-3.87a3.03 3.03 0 0 0-3.24 0l-6 3.87A3.03 3.03 0 0 0 4.5 9v6a3.03 3.03 0 0 0 1.38 2.6l6 3.87a3.03 3.03 0 0 0 3.24 0l6-3.87A3.03 3.03 0 0 0 22.5 15V9a3.03 3.03 0 0 0-1.38-2.6z"></path>
                    <line x1="12" y1="22" x2="12" y2="12"></line>
                    <polyline points="22.5 9 12 12 1.5 9"></polyline>
                  </svg>
                </button>
              </div>

              <div class="style-card-body">
                <span class="typology-subtitle">TIPOLOGI 03 • KARAKTER OTENTIK</span>
                <h4 class="typology-title">Industrial (Tegas &amp; Berani)</h4>
                <p class="typology-desc">
                  Pertemuan kontras antara beton ekspos halus, struktur baja berpresisi tinggi, dan aksen tembaga terakota yang memancarkan...
                </p>

                <div class="style-card-footer">
                  <span class="archived-count">29 Karya Terarsip</span>
                  <a href="#konsultasi" class="explore-inline-link" @click="selectedProjectType = 'Komersial'">
                    <span>EKSPLORASI</span>
                    <span class="arrow-arrow">→</span>
                  </a>
                </div>
              </div>
            </article>

          </div>
        </section>

        <!-- ========================================================
             BAGIAN QUOTE FILOSOFI PRINSIPAL DESAIN (SESUAI GAMBAR)
             ======================================================== -->
        <section class="principal-quote-section">
          <div class="quote-card">
            <!-- Ikon Tanda Petik Ganda Bulat -->
            <div class="quote-badge">
              <span class="quote-symbol">”</span>
            </div>

            <!-- Judul Quote Utama -->
            <blockquote class="quote-text">
              “Kenyamanan adalah Esensi Tertinggi dari Kemewahan”
            </blockquote>

            <!-- Paragraf Penjelasan Filosofis -->
            <p class="quote-subtext">
              Kami mengubah ruang biasa menjadi habitat personal yang memberi ketenangan lahir dan batin setiap hari. Nilai sejati arsitektur terletak pada apa yang Anda rasakan di dalamnya.
            </p>

            <!-- Informasi Penulis & Verifikasi -->
            <div class="quote-author-block">
              <div class="author-name-row">
                <span class="author-name">Maeladia Zaskia Saputri, MZS</span>
                <span class="verified-badge-icon" title="Terverifikasi">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.4 2.1 3.2-.3 1.2 3 2.8 1.5-.7 3.1 1.7 2.7-2.1 2.4.3 3.2-3 1.2-1.5 2.8-3.1-.7-2.7 1.7-2.4-2.1-3.2.3-1.2-3-2.8-1.5.7-3.1-1.7-2.7 2.1-2.4-.3-3.2 3-1.2 1.5-2.8 3.1.7L12 2zm-1.2 13.6l5.7-5.7-1.4-1.4-4.3 4.3-2.1-2.1-1.4 1.4 3.5 3.5z"/>
                  </svg>
                </span>
              </div>
              <span class="author-title">
                PRINSIPAL DESAIN KARYASTUDIO • DEWAN KURATOR IKATAN ARSITEK INDONESIA
              </span>
            </div>
          </div>
        </section>

        <!-- ========================================================
             BAGIAN GALERI DESAIN RUANG 360° (SESUAI GAMBAR)
             ======================================================== -->
        <section class="virtual-tour-section" id="tur-virtual">
          <div class="tour-banner-card">
            <!-- Background Image Panorama Living Room Senopati -->
            <img src="/galeri-senopati-360.jpg" alt="Galeri Desain Ruang 360 Senopati Jakarta" class="tour-bg-image" />
            
            <!-- Dark Gradient Cinematic Vignette Overlay -->
            <div class="tour-dark-overlay"></div>

            <!-- Konten di Atas Banner (Sisi Kiri) -->
            <div class="tour-content-left">
              <!-- Live Tur Virtual Pill Tag -->
              <div class="tour-live-tag">
                <span class="live-pulse-dot"></span>
                <span class="live-dot-white"></span>
                <span class="live-tag-text">LIVE TUR VIRTUAL 360° • GALERI SENOPATI, JAKARTA</span>
              </div>

              <!-- Judul Besar Galeri Desain Ruang 360° -->
              <h3 class="tour-heading">Galeri Desain<br>Ruang 360°</h3>

              <!-- Deskripsi Fitur Interaktif -->
              <p class="tour-description">
                Ruang Keluarga Kontemporer 2026. Rasakan skala spasial, tekstur material terakota, dan simulasi peralihan bayangan matahari secara interaktif dari layar komputer Anda.
              </p>

              <!-- Tombol Aksi Masuki Tur Virtual & Label Resolusi -->
              <div class="tour-action-row">
                <a href="#konsultasi" class="enter-tour-btn" @click="form.pesan = 'Halo MaeStudio, saya tertarik untuk mengikuti live tur virtual 360° Galeri Senopati dan konsultasi rancang bangun.'">
                  <span class="rotate-360-icon">
                    <!-- Ikon Rotasi 360 derajat -->
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-1.19"/>
                    </svg>
                  </span>
                  <span class="btn-divider">|</span>
                  <span class="btn-tour-text">MASUKI TUR VIRTUAL INTERAKTIF</span>
                </a>

                <span class="resolution-label">RESOLUSI 8K ULTRA-HDR</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ========================================================
             BAGIAN KONTAK & KONSULTASI CEPAT — HUBUNGI MAESTUDIO (SESUAI GAMBAR)
             ======================================================== -->
        <section class="contact-atelier-section" id="konsultasi">
          <div class="contact-main-card">
            
            <!-- Header Section Kontak -->
            <div class="contact-header-bar">
              <div class="contact-header-left">
                <div class="contact-pill-tag">
                  <span class="brown-bullet">●</span>
                  <span class="pill-tag-text">KONTAK &amp; KONSULTASI CEPAT</span>
                </div>
                <h3 class="contact-title">Hubungi MaeStudio</h3>
              </div>
              <div class="contact-header-right">
                <p class="contact-intro-desc">
                  Diskusikan rancang bangun hunian dan eksplorasi material secara langsung bersama kurator spasial kami.
                </p>
              </div>
            </div>

            <!-- 2 Kolom: Kiri Formulir Reservasi & Kanan 3 Kartu Saluran Komunikasi -->
            <div class="contact-content-grid">
              
              <!-- KOLOM KIRI: FORMULIR RESERVASI & KONSULTASI DESAIN -->
              <div class="reservation-form-card">
                <div class="form-card-header">
                  <div class="form-title-block">
                    <span class="form-eyebrow">INQUIRY PORTOFOLIO &amp; RANCANG BANGUN</span>
                    <h4 class="form-main-heading">Formulir Reservasi &amp; Konsultasi Desain</h4>
                  </div>
                  <div class="response-badge">
                    <span class="response-dot">●</span>
                    <span class="response-text">RESPON &lt; 15 MNT</span>
                  </div>
                </div>

                <form class="reservation-form" @submit.prevent>
                  <!-- Baris 2 Input: Nama Lengkap & WhatsApp / Telepon -->
                  <div class="form-row-two-col">
                    <div class="form-group">
                      <label class="form-label">NAMA LENGKAP</label>
                      <input 
                        type="text" 
                        class="form-input" 
                        v-model="form.nama" 
                        placeholder="Maeladia Zaskia Saputri" 
                      />
                    </div>
                    <div class="form-group">
                      <label class="form-label">WHATSAPP / TELEPON</label>
                      <input 
                        type="tel" 
                        class="form-input" 
                        v-model="form.telepon" 
                        placeholder="+62 812-xxxx-xxxx" 
                      />
                    </div>
                  </div>

                  <!-- Jenis Proyek Spasial (Pills Toggle) -->
                  <div class="form-group">
                    <label class="form-label">JENIS PROYEK SPASIAL</label>
                    <div class="project-types-selector">
                      <button
                        type="button"
                        v-for="type in projectTypes"
                        :key="type"
                        class="type-toggle-btn"
                        :class="{ active: selectedProjectType === type }"
                        @click="selectedProjectType = type"
                      >
                        {{ type }}
                      </button>
                    </div>
                  </div>

                  <!-- Pesan & Kebutuhan Ruang -->
                  <div class="form-group">
                    <label class="form-label">PESAN &amp; KEBUTUHAN RUANG</label>
                    <textarea 
                      class="form-textarea" 
                      v-model="form.pesan"
                      placeholder="Ceritakan visi hunian, luas perkiraan, atau preferensi material spasial yang Anda inginkan..."
                      rows="4"
                    ></textarea>
                  </div>

                  <!-- Tombol Submit Form -->
                  <button type="submit" class="submit-consultation-btn">
                    <span class="send-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </span>
                    <span>KIRIM PESAN &amp; JADWALKAN KONSULTASI</span>
                  </button>

                  <!-- Privasi & Kerahasiaan Note -->
                  <div class="privacy-note">
                    <span class="privacy-shield-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.4 2.1 3.2-.3 1.2 3 2.8 1.5-.7 3.1 1.7 2.7-2.1 2.4.3 3.2-3 1.2-1.5 2.8-3.1-.7-2.7 1.7-2.4-2.1-3.2.3-1.2-3-2.8-1.5.7-3.1-1.7-2.7 2.1-2.4-.3-3.2 3-1.2 1.5-2.8 3.1.7L12 2zm-1.2 13.6l5.7-5.7-1.4-1.4-4.3 4.3-2.1-2.1-1.4 1.4 3.5 3.5z"/>
                      </svg>
                    </span>
                    <span>Privasi &amp; kerahasiaan berkas rancangan dijamin 100% oleh MaeStudio.</span>
                  </div>
                </form>
              </div>

              <!-- KOLOM KANAN: 3 KARTU SALURAN KOMUNIKASI RESMI -->
              <div class="contact-channels-column">
                
                <!-- KARTU 1: WHATSAPP RESMI -->
                <div class="channel-card">
                  <div class="channel-card-top">
                    <div class="channel-icon-box">
                      <!-- Ikon Chat Message -->
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div class="channel-meta">
                      <span class="channel-eyebrow">WHATSAPP RESMI</span>
                      <span class="channel-main-val">+62 812-3456-7890</span>
                    </div>
                    <span class="channel-badge badge-fast">FAST</span>
                  </div>
                  <p class="channel-desc">Konsultasi langsung tim kurator setiap hari kerja 09.00 — 18.00 WIB.</p>
                  <a href="https://wa.me/6281234567890" target="_blank" class="channel-action-btn btn-whatsapp">
                    <span class="btn-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                    </span>
                    <span>HUBUNGI VIA WHATSAPP</span>
                  </a>
                </div>

                <!-- KARTU 2: EMAIL RESMI -->
                <div class="channel-card">
                  <div class="channel-card-top">
                    <div class="channel-icon-box">
                      <!-- Ikon Amplop Email -->
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div class="channel-meta">
                      <span class="channel-eyebrow">EMAIL</span>
                      <span class="channel-main-val">konsultasimaestudio@gmail.com</span>
                    </div>
                    <span class="channel-badge badge-rfp">RFP</span>
                  </div>
                  <p class="channel-desc">Kolaborasi bisnis &amp; proposal: @halomaestudio</p>
                  <a href="mailto:konsultasimaestudio@gmail.com" class="channel-action-btn btn-dark">
                    <span class="btn-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </span>
                    <span>KIRIM EMAIL</span>
                  </a>
                </div>

                <!-- KARTU 3: ATELIER SPASIAL SENOPATI -->
                <div class="channel-card">
                  <div class="channel-card-top">
                    <div class="channel-icon-box">
                      <!-- Ikon Pin Lokasi Maps -->
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div class="channel-meta">
                      <span class="channel-eyebrow">ATELIER SPASIAL</span>
                      <span class="channel-main-val">Senopati, Jakarta Selatan</span>
                    </div>
                    <span class="channel-badge badge-atelier">ATELIER</span>
                  </div>
                  <p class="channel-desc">Jl. Senopati No. 42 • Kunjungan Janji Temu</p>
                  <a href="https://maps.google.com" target="_blank" class="channel-action-btn btn-light">
                    <span>BUKA DI GOOGLE MAPS</span>
                    <span class="btn-arrow-external">↗</span>
                  </a>
                </div>

              </div>

            </div>

          </div>
        </section>

      </section>
    </main>

    <!-- ========================================================
         BAGIAN FOOTER UTAMA MAESTUDIO (SESUAI GAMBAR)
         ======================================================== -->
    <footer class="atelier-footer">
      <div class="footer-container">
        
        <!-- Baris Atas: Brand Info & 3 Kolom Navigasi Footer -->
        <div class="footer-top-row">
          
          <!-- SISI KIRI: Logo Monogram M + Brand Teks + Kredensial -->
          <div class="footer-brand-column">
            <div class="footer-logo-brand">
              <div class="footer-emblem-box">
                <img src="/logo-m.png" alt="MAESTUDIO Logo" class="footer-emblem-img" />
              </div>
              <div class="footer-brand-text">
                <span class="footer-haute">✦ HAUTE ARCHITECTURE ✦</span>
                <h4 class="footer-studio-name">MAESTUDIO</h4>
                <span class="footer-royal-atelier">ROYAL ATELIER &amp; ARCHITECTURE</span>
              </div>
              <span class="golden-accent-sparkle">✦</span>
            </div>

            <p class="footer-tagline">
              Praktek arsitektur spasial, lanskap kontekstual, dan kurasi interior bernilai estetika abadi.
            </p>

            <div class="footer-credential-block">
              <span class="credential-label">KREDENSIAL STUDIO</span>
              <span class="credential-desc">IAI No. 2048 / HDII Reg. ID-88210 | Jakarta — Bandung — Bali</span>
            </div>
          </div>

          <!-- SISI KANAN: 3 Kolom Navigasi (Layanan, Studio, Kontak & Sosial) -->
          <div class="footer-links-grid">
            
            <!-- Kolom 1: LAYANAN -->
            <div class="footer-links-col">
              <h5 class="links-col-title">LAYANAN</h5>
              <ul class="footer-nav-list">
                <li><a href="#koleksi" @click="selectedProjectType = 'Residensial'">Arsitektur Residensial</a></li>
                <li><a href="#koleksi" @click="selectedProjectType = 'Interior'">Desain Interior Terkurasi</a></li>
                <li><a href="#koleksi" @click="selectedProjectType = 'Master Plan'">Master Planning &amp; Lanskap</a></li>
                <li><a href="#tentang">Restorasi Warisan Spasial</a></li>
              </ul>
            </div>

            <!-- Kolom 2: STUDIO -->
            <div class="footer-links-col">
              <h5 class="links-col-title">STUDIO</h5>
              <ul class="footer-nav-list">
                <li><a href="#tentang">Tentang Praktik</a></li>
                <li><a href="#koleksi">Monograf Karya</a></li>
                <li><a href="#tentang">Arsip Material</a></li>
                <li><a href="#tur-virtual">Publikasi Pers</a></li>
              </ul>
            </div>

            <!-- Kolom 3: KONTAK & SOSIAL -->
            <div class="footer-links-col">
              <h5 class="links-col-title">KONTAK &amp; SOSIAL</h5>
              <ul class="footer-nav-list">
                <li><a href="#konsultasi">Hubungi Studio</a></li>
                <li><a href="#konsultasi">Jadwalkan Sesi</a></li>
              </ul>

              <h5 class="links-col-title sub-title">SALURAN RESMI</h5>
              <ul class="footer-nav-list">
                <li><a href="https://instagram.com" target="_blank" rel="noopener">Instagram Atelier</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn Professional</a></li>
              </ul>
            </div>

          </div>

        </div>

        <!-- Baris Bawah: Copyright & Legal Links -->
        <div class="footer-bottom-row">
          <p class="copyright-text">
            © 2026 MaeStudio Indonesia. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <div class="legal-links">
            <a href="#tentang">KEBIJAKAN PRIVASI</a>
            <a href="#tentang">KETENTUAN ARSITEKTURAL</a>
          </div>
        </div>

      </div>
    </footer>

  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at 10% 10%, #FFF5F7 0%, #FDF0F3 40%, #FAEAEE 100%);
  color: #4A333B;
  font-family: 'Montserrat', sans-serif;
}

.main-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px 70px;
}

.hero-preview {
  max-width: 1080px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-badge {
  font-family: 'Cinzel', serif;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #934C62;
  padding: 6px 16px;
  border-radius: 20px;
  background: rgba(243, 209, 217, 0.45);
  border: 1px solid rgba(212, 175, 55, 0.35);
}

.hero-headline {
  font-family: 'Cinzel', serif;
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.25;
  color: #381B26;
  background: linear-gradient(135deg, #2D141E 0%, #632C3E 50%, #996B2F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  max-width: 820px;
}

.hero-subtext {
  font-size: 1.02rem;
  line-height: 1.7;
  color: #7A5B66;
  max-width: 680px;
  margin: 0;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-top: 6px;
  margin-bottom: 24px;
}

.primary-hero-btn {
  padding: 12px 28px;
  border-radius: 30px;
  background: linear-gradient(135deg, #7A3E53 0%, #5E2A3B 100%);
  color: #FFF6F8;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  border: 1px solid rgba(212, 175, 55, 0.4);
  box-shadow: 0 4px 18px rgba(104, 43, 64, 0.25);
  transition: all 0.3s ease;
}

.primary-hero-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(104, 43, 64, 0.35);
  border-color: rgba(212, 175, 55, 0.8);
}

.secondary-hero-btn {
  padding: 12px 28px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.7);
  color: #5E2A3B;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  border: 1px solid rgba(224, 185, 195, 0.8);
  transition: all 0.3s ease;
}

.secondary-hero-btn:hover {
  background: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(188, 117, 137, 0.18);
}

/* ========================================================
   BAGIAN DIBAWAH KONSULTASI DESAIN
   ======================================================== */

/* 1. Baris Stats & Rating Ringkas */
.stats-summary-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  padding: 14px 28px;
  background: rgba(255, 246, 247, 0.65);
  border-radius: 40px;
  box-shadow: 0 2px 12px rgba(160, 92, 114, 0.05);
  margin-bottom: 24px;
}

.summary-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.stars-row {
  display: flex;
  gap: 2px;
}

.star-icon {
  color: #8C4736;
  font-size: 1.05rem;
}

.rating-text {
  font-size: 0.86rem;
  display: flex;
  gap: 6px;
  align-items: baseline;
}

.rating-text .score {
  font-weight: 700;
  color: #45212B;
}

.rating-text .reviews-count {
  color: #7B5561;
}

.vertical-divider {
  width: 1px;
  height: 20px;
  background-color: #E2C7CF;
}

.project-group {
  font-size: 0.86rem;
  font-weight: 600;
  color: #45212B;
}

.building-icon {
  width: 18px;
  height: 18px;
  color: #8C4736;
  display: flex;
  align-items: center;
}

.building-icon svg {
  width: 100%;
  height: 100%;
}

.verified-group {
  display: flex;
  align-items: center;
  gap: 6px;
}

.verified-icon {
  width: 17px;
  height: 17px;
  color: #8C4736;
  display: flex;
  align-items: center;
}

.verified-icon svg {
  width: 100%;
  height: 100%;
}

.verified-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #8C4736;
}

/* 2. Card Standar Atelier & Pilar */
.curated-panel {
  width: 100%;
  background: #FFF9FA;
  border: 1px solid #EED7DE;
  border-radius: 16px;
  padding: 24px 30px;
  text-align: left;
  box-shadow: 0 4px 20px rgba(188, 126, 145, 0.06);
}

.panel-top-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.panel-title-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.brown-dot {
  color: #8C4736;
  font-size: 0.8rem;
}

.panel-title-text {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #8C4736;
}

.panel-badge-right {
  display: flex;
  align-items: center;
  gap: 6px;
}

.check-badge-icon {
  width: 15px;
  height: 15px;
  color: #8C4736;
  display: flex;
  align-items: center;
}

.check-badge-icon svg {
  width: 100%;
  height: 100%;
}

.badge-text {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #5D3744;
}

.panel-separator {
  border: none;
  border-top: 1px solid #F0D9E0;
  margin: 18px 0 22px;
}

/* 4 Kolom Grid Pilar */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.pillar-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  border-radius: 12px;
  padding: 8px;
  margin: -8px;
  transition: all 0.25s ease;
}

.pillar-card:hover {
  background: rgba(244, 226, 229, 0.45);
  transform: translateY(-2px);
}

.pillar-icon-box {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  background: #F4E2E5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8C4736;
  box-shadow: 0 2px 6px rgba(140, 71, 54, 0.08);
}

.pillar-icon-box svg {
  width: 20px;
  height: 20px;
}

.pillar-content {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.pillar-title {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #2D141E;
  line-height: 1.25;
}

.pillar-desc {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.45;
  color: #6D4C58;
}

/* Responsiveness */
@media (max-width: 992px) {
  .pillars-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .hero-headline {
    font-size: 2.1rem;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  .primary-hero-btn, .secondary-hero-btn {
    text-align: center;
    width: 100%;
    box-sizing: border-box;
  }
  .stats-summary-bar {
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    border-radius: 20px;
  }
  .vertical-divider {
    display: none;
  }
  .panel-top-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .pillars-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========================================================
   STYLING: 01 / FILOSOFI DESAIN — ESTETIKA SPASIAL
   ======================================================== */
.philosophy-section {
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
}

.philosophy-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.philosophy-breadcrumb {
  color: #9E5642;
}

.atelier-monograf {
  color: #7A5B66;
  font-weight: 600;
}

.philosophy-content-grid {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 28px;
  align-items: stretch;
}

/* Kolom Kiri: Card Text Eksplorasi Detail */
.philosophy-text-card {
  background: #FFF7F8;
  border: 1px solid #EED7DE;
  border-radius: 20px;
  padding: 36px 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(188, 126, 145, 0.05);
}

.caliper-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #F4E2E5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8C4736;
  margin-bottom: 24px;
  box-shadow: 0 2px 6px rgba(140, 71, 54, 0.08);
}

.caliper-icon-box svg {
  width: 22px;
  height: 22px;
}

.philosophy-heading {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 1.22;
  color: #2D141E;
  margin: 0 0 16px;
}

.philosophy-lead {
  font-size: 0.88rem;
  line-height: 1.65;
  color: #6D4C58;
  margin: 0 0 26px;
}

.philosophy-feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.feature-check-icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  color: #8C4736;
  margin-top: 2px;
}

.feature-check-icon svg {
  width: 100%;
  height: 100%;
}

.feature-text {
  font-size: 0.82rem;
  line-height: 1.5;
  color: #55343F;
}

.learn-method-link {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #8C4736;
  text-decoration: none;
  transition: all 0.25s ease;
}

.learn-method-link:hover {
  color: #B55B44;
  transform: translateX(4px);
}

.learn-method-link .arrow-right {
  font-size: 0.95rem;
}

/* Kolom Kanan: Card Showcase Proyek Ubud */
.project-showcase-card {
  background: #FFF9FA;
  border: 1px solid #EED7DE;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 24px rgba(188, 126, 145, 0.08);
}

.project-image-wrapper {
  position: relative;
  width: 100%;
  height: 420px;
  overflow: hidden;
  background-color: #3C2B22;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-showcase-card:hover .project-img {
  transform: scale(1.03);
}

.project-floating-badges {
  position: absolute;
  top: 18px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 2;
}

.badge-white {
  background: rgba(255, 255, 255, 0.94);
  color: #2D141E;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 6px 14px;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(4px);
}

.badge-terracotta {
  background: #8C4736;
  color: #FFFFFF;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 6px 14px;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(140, 71, 54, 0.3);
}

.project-caption-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 50px 24px 20px;
  background: linear-gradient(to top, rgba(20, 10, 8, 0.88) 0%, rgba(20, 10, 8, 0.45) 60%, transparent 100%);
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 2;
}

.lighting-tag {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #F7D4C8;
  text-transform: uppercase;
}

.showcase-title {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: 1.55rem;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 1.3;
}

/* Footer Spesifikasi & Tombol Eksplorasi */
.project-specs-footer {
  padding: 20px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: #FFF9FA;
}

.specs-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ruler-icon {
  width: 20px;
  height: 20px;
  color: #8C4736;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.ruler-icon svg {
  width: 100%;
  height: 100%;
}

.specs-text {
  font-size: 0.82rem;
  font-weight: 500;
  color: #381521;
}

.explore-project-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 30px;
  background: #2D2727;
  color: #FFFFFF;
  text-decoration: none;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(45, 39, 39, 0.2);
}

.explore-project-btn:hover {
  background: #8C4736;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(140, 71, 54, 0.3);
}

.btn-arrow-up {
  font-size: 0.95rem;
  transition: transform 0.3s ease;
}

.explore-project-btn:hover .btn-arrow-up {
  transform: translate(2px, -2px);
}

/* Responsiveness Penyesuaian Tablet & Mobile */
@media (max-width: 992px) {
  .philosophy-content-grid {
    grid-template-columns: 1fr;
  }
  .project-image-wrapper {
    height: 360px;
  }
}

@media (max-width: 768px) {
  .philosophy-top-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  .philosophy-heading {
    font-size: 1.8rem;
  }
  .project-image-wrapper {
    height: 300px;
  }
  .showcase-title {
    font-size: 1.25rem;
  }
  .project-specs-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .explore-project-btn {
    width: 100%;
    justify-content: center;
  }
}

/* ========================================================
   STYLING: 02 / KURASI PILIHAN — KOLEKSI DESAIN TERKINI
   ======================================================== */
.curated-styles-section {
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  text-align: left;
}

.curated-header-bar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px;
}

.curated-header-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.curated-breadcrumb {
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #9E5642;
  text-transform: uppercase;
}

.curated-main-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.6rem;
  font-weight: 600;
  color: #2D141E;
  margin: 0;
  line-height: 1.15;
}

.curated-header-right {
  max-width: 440px;
}

.curated-intro-desc {
  font-size: 0.92rem;
  line-height: 1.6;
  color: #6D4C58;
  margin: 0;
}

/* 3 Kolom Grid Cards */
.styles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.style-card {
  background: #FFF9FA;
  border: 1px solid #EED7DE;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(188, 126, 145, 0.06);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
}

.style-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 28px rgba(188, 126, 145, 0.14);
  border-color: #DFBCC6;
}

.style-card-image-wrapper {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background-color: #ECE0E3;
}

.style-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.style-card:hover .style-img {
  transform: scale(1.05);
}

/* Badges di Atas Gambar */
.pill-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 5px 12px;
  border-radius: 20px;
  z-index: 2;
  text-transform: uppercase;
}

.tag-trending {
  background: rgba(255, 255, 255, 0.92);
  color: #8C4736;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.tag-favorit {
  background: #8C4736;
  color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(140, 71, 54, 0.3);
}

.tag-eksklusif {
  background: rgba(255, 255, 255, 0.92);
  color: #8C4736;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* Lingkaran Ikon Transparan di Kanan Atas Gambar */
.circle-icon-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #381521;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease;
}

.circle-icon-btn:hover {
  background: #FFFFFF;
  transform: scale(1.08);
}

.circle-icon-btn svg {
  width: 19px;
  height: 19px;
}

/* Body Card */
.style-card-body {
  padding: 24px 22px 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.typology-subtitle {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #9E5642;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.typology-title {
  margin: 0 0 10px;
  font-family: 'Playfair Display', serif;
  font-size: 1.45rem;
  font-weight: 600;
  color: #2D141E;
  line-height: 1.25;
}

.typology-desc {
  margin: 0 0 24px;
  font-size: 0.84rem;
  line-height: 1.55;
  color: #6D4C58;
  flex: 1;
}

/* Footer Card */
.style-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid #F2DCE2;
}

.archived-count {
  font-size: 0.76rem;
  color: #7A5B66;
  font-weight: 500;
}

.explore-inline-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #8C4736;
  text-decoration: none;
  transition: transform 0.25s ease, color 0.25s ease;
}

.explore-inline-link:hover {
  color: #B55B44;
  transform: translateX(3px);
}

.explore-inline-link .arrow-arrow {
  font-size: 0.92rem;
}

/* Responsiveness 3 Cards */
@media (max-width: 992px) {
  .curated-header-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .curated-main-title {
    font-size: 2.1rem;
  }
  .styles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .styles-grid {
    grid-template-columns: 1fr;
  }
  .style-card-image-wrapper {
    height: 240px;
  }
}

/* ========================================================
   STYLING: QUOTE FILOSOFI PRINSIPAL DESAIN
   ======================================================== */
.principal-quote-section {
  width: 100%;
  margin-top: 70px;
  display: flex;
  justify-content: center;
}

.quote-card {
  width: 100%;
  max-width: 900px;
  background: #FFF9FA;
  border: 1px solid #EED7DE;
  border-radius: 28px;
  padding: 56px 48px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 28px rgba(188, 126, 145, 0.08);
  position: relative;
}

.quote-badge {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #F4E2E5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8C4736;
  margin-bottom: 28px;
  box-shadow: 0 2px 8px rgba(140, 71, 54, 0.1);
}

.quote-symbol {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  line-height: 1;
  transform: translateY(2px);
}

.quote-text {
  margin: 0 0 22px;
  padding: 0;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 2.35rem;
  font-weight: 500;
  line-height: 1.32;
  color: #2D141E;
  max-width: 760px;
}

.quote-subtext {
  margin: 0 0 36px;
  font-size: 0.95rem;
  line-height: 1.7;
  color: #6D4C58;
  max-width: 620px;
}

.quote-author-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.author-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.author-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #2D141E;
}

.verified-badge-icon {
  width: 17px;
  height: 17px;
  color: #8C4736;
  display: flex;
  align-items: center;
}

.verified-badge-icon svg {
  width: 100%;
  height: 100%;
}

.author-title {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7A5B66;
}

/* Responsiveness Quote Card */
@media (max-width: 768px) {
  .quote-card {
    padding: 38px 24px 32px;
    border-radius: 20px;
  }
  .quote-text {
    font-size: 1.75rem;
  }
  .quote-subtext {
    font-size: 0.88rem;
  }
  .author-title {
    font-size: 0.65rem;
    line-height: 1.4;
  }
}

/* ========================================================
   STYLING: GALERI DESAIN RUANG 360° (VIRTUAL TOUR BANNER)
   ======================================================== */
.virtual-tour-section {
  width: 100%;
  margin-top: 60px;
}

.tour-banner-card {
  position: relative;
  width: 100%;
  height: 520px;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 8px 36px rgba(45, 20, 28, 0.16);
  display: flex;
  align-items: center;
}

.tour-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.tour-dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(25, 22, 21, 0.94) 0%,
    rgba(25, 22, 21, 0.82) 42%,
    rgba(25, 22, 21, 0.35) 75%,
    rgba(25, 22, 21, 0.15) 100%
  );
  z-index: 1;
}

.tour-content-left {
  position: relative;
  z-index: 2;
  max-width: 540px;
  padding: 48px 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.tour-live-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 30px;
  backdrop-filter: blur(8px);
  margin-bottom: 24px;
}

.live-pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #E26848;
  box-shadow: 0 0 8px #E26848;
}

.live-dot-white {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #FFFFFF;
  opacity: 0.8;
}

.live-tag-text {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #FFFFFF;
}

.tour-heading {
  margin: 0 0 16px;
  font-family: 'Playfair Display', serif;
  font-size: 3.2rem;
  font-weight: 600;
  color: #FFFFFF;
  line-height: 1.15;
}

.tour-description {
  margin: 0 0 32px;
  font-size: 0.92rem;
  line-height: 1.65;
  color: #D6CBC7;
}

.tour-action-row {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.enter-tour-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 26px;
  border-radius: 40px;
  background: #FFFFFF;
  color: #2D2727;
  text-decoration: none;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
}

.enter-tour-btn:hover {
  background: #FDF2F4;
  color: #8C4736;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

.rotate-360-icon {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  color: #8C4736;
  transition: transform 0.5s ease;
}

.enter-tour-btn:hover .rotate-360-icon {
  transform: rotate(180deg);
}

.rotate-360-icon svg {
  width: 100%;
  height: 100%;
}

.btn-divider {
  color: #CABBB7;
  font-size: 0.85rem;
}

.btn-tour-text {
  letter-spacing: 0.08em;
}

.resolution-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #B5A8A4;
  text-transform: uppercase;
}

/* Responsiveness Tour Banner */
@media (max-width: 992px) {
  .tour-banner-card {
    height: 480px;
  }
  .tour-heading {
    font-size: 2.6rem;
  }
  .tour-content-left {
    padding: 36px 32px;
  }
}

@media (max-width: 768px) {
  .tour-banner-card {
    height: auto;
    min-height: 440px;
    border-radius: 20px;
  }
  .tour-dark-overlay {
    background: rgba(25, 22, 21, 0.88);
  }
  .tour-content-left {
    padding: 32px 24px;
    max-width: 100%;
  }
  .tour-heading {
    font-size: 2.2rem;
  }
  .enter-tour-btn {
    width: 100%;
    justify-content: center;
  }
}

/* ========================================================
   STYLING: KONTAK & KONSULTASI CEPAT (HUBUNGI MAESTUDIO)
   ======================================================== */
.contact-atelier-section {
  width: 100%;
  margin-top: 70px;
}

.contact-main-card {
  width: 100%;
  background: #FFF9FA;
  border: 1px solid #EED7DE;
  border-radius: 28px;
  padding: 44px 44px 48px;
  box-shadow: 0 4px 28px rgba(188, 126, 145, 0.08);
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: left;
}

.contact-header-bar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px;
}

.contact-header-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-pill-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  background: #F4E2E5;
  border-radius: 20px;
  width: fit-content;
}

.brown-bullet {
  color: #8C4736;
  font-size: 0.75rem;
}

.pill-tag-text {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #8C4736;
}

.contact-title {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  font-weight: 600;
  color: #2D141E;
  line-height: 1.15;
}

.contact-header-right {
  max-width: 440px;
}

.contact-intro-desc {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.6;
  color: #6D4C58;
}

/* 2 Kolom Grid */
.contact-content-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 28px;
  align-items: stretch;
}

/* Kolom Kiri: Formulir Reservasi Card */
.reservation-form-card {
  background: #FFFFFF;
  border: 1px solid #EED7DE;
  border-radius: 20px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 14px rgba(188, 126, 145, 0.04);
}

.form-card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.form-title-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.form-eyebrow {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #9E5642;
  text-transform: uppercase;
}

.form-main-heading {
  margin: 0;
  font-family: 'Playfair Display', serif;
  font-size: 1.35rem;
  font-weight: 600;
  color: #2D141E;
}

.response-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 20px;
  background: #F4E2E5;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #8C4736;
  flex-shrink: 0;
}

.response-dot {
  font-size: 0.65rem;
}

.reservation-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.form-row-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #55343F;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid #E6D0D6;
  background: #FFFDFD;
  color: #381521;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #8C4736;
  box-shadow: 0 0 0 3px rgba(140, 71, 54, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #B59EAA;
  font-size: 0.82rem;
}

.form-textarea {
  resize: vertical;
}

/* Selector Kategori Proyek */
.project-types-selector {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.type-toggle-btn {
  padding: 10px 6px;
  border-radius: 10px;
  border: 1px solid #E6D0D6;
  background: #FFFDFD;
  color: #4A333B;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.76rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  text-align: center;
}

.type-toggle-btn:hover {
  border-color: #8C4736;
}

.type-toggle-btn.active {
  background: #8C4736;
  border-color: #8C4736;
  color: #FFFFFF;
  box-shadow: 0 2px 8px rgba(140, 71, 54, 0.25);
}

.submit-consultation-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: 30px;
  background: #8C4736;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(140, 71, 54, 0.25);
  margin-top: 6px;
}

.submit-consultation-btn:hover {
  background: #733527;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(140, 71, 54, 0.35);
}

.send-icon {
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
}

.send-icon svg {
  width: 100%;
  height: 100%;
}

.privacy-note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 0.72rem;
  color: #7A5B66;
  margin-top: 4px;
}

.privacy-shield-icon {
  width: 13px;
  height: 13px;
  color: #8C4736;
  display: flex;
  align-items: center;
}

.privacy-shield-icon svg {
  width: 100%;
  height: 100%;
}

/* Kolom Kanan: 3 Kartu Komunikasi */
.contact-channels-column {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.channel-card {
  background: #FFFFFF;
  border: 1px solid #EED7DE;
  border-radius: 20px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 2px 12px rgba(188, 126, 145, 0.04);
}

.channel-card-top {
  display: flex;
  align-items: center;
  gap: 14px;
}

.channel-icon-box {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: #F4E2E5;
  color: #8C4736;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.channel-icon-box svg {
  width: 18px;
  height: 18px;
}

.channel-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
}

.channel-eyebrow {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #9E5642;
  text-transform: uppercase;
}

.channel-main-val {
  font-size: 0.95rem;
  font-weight: 700;
  color: #2D141E;
}

.channel-badge {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 3px 8px;
  border-radius: 12px;
  background: #F4E2E5;
  color: #8C4736;
}

.channel-desc {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.45;
  color: #6D4C58;
}

.channel-action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 24px;
  text-decoration: none;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.25s ease;
}

.btn-whatsapp {
  background: #8C4736;
  color: #FFFFFF;
  box-shadow: 0 2px 10px rgba(140, 71, 54, 0.2);
}

.btn-whatsapp:hover {
  background: #733527;
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(140, 71, 54, 0.3);
}

.btn-dark {
  background: #2D2727;
  color: #FFFFFF;
}

.btn-dark:hover {
  background: #8C4736;
  transform: translateY(-2px);
}

.btn-light {
  background: #F2E4E7;
  color: #381521;
}

.btn-light:hover {
  background: #E8D4D8;
  transform: translateY(-2px);
}

.btn-icon {
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
}

.btn-icon svg {
  width: 100%;
  height: 100%;
}

.btn-arrow-external {
  font-size: 0.9rem;
}

/* Responsiveness Contact Section */
@media (max-width: 992px) {
  .contact-header-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
  .contact-title {
    font-size: 2.2rem;
  }
  .contact-content-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .contact-main-card {
    padding: 28px 18px;
    border-radius: 20px;
  }
  .form-row-two-col {
    grid-template-columns: 1fr;
  }
  .project-types-selector {
    grid-template-columns: repeat(2, 1fr);
  }
  .submit-consultation-btn {
    font-size: 0.72rem;
  }
}

/* ========================================================
   STYLING: ATELIER FOOTER MAESTUDIO
   ======================================================== */
.atelier-footer {
  width: 100%;
  background-color: #FBF4F5;
  border-top: 1px solid #EED7DE;
  padding: 60px 24px 36px;
  color: #4A333B;
  text-align: left;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.footer-top-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;
  flex-wrap: wrap;
}

/* SISI KIRI: BRAND COLUMN */
.footer-brand-column {
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer-emblem-box {
  width: 58px;
  height: 58px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 3px 8px rgba(189, 137, 151, 0.25));
}

.footer-emblem-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.footer-brand-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-haute {
  font-family: 'Cinzel', serif;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #9E5642;
  text-transform: uppercase;
}

.footer-studio-name {
  margin: 2px 0;
  font-family: 'Cinzel', serif;
  font-size: 1.55rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  color: #2D141E;
  line-height: 1.1;
}

.footer-royal-atelier {
  font-family: 'Montserrat', sans-serif;
  font-size: 0.58rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  color: #7A5B66;
  text-transform: uppercase;
}

.golden-accent-sparkle {
  color: #CBA24B;
  font-size: 0.85rem;
  margin-left: 2px;
}

.footer-tagline {
  margin: 0;
  font-size: 0.86rem;
  line-height: 1.6;
  color: #6D4C58;
}

.footer-credential-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 6px;
}

.credential-label {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #9E5642;
  text-transform: uppercase;
}

.credential-desc {
  font-size: 0.78rem;
  color: #6D4C58;
  line-height: 1.45;
}

/* SISI KANAN: 3 KOLOM NAVIGASI */
.footer-links-grid {
  display: flex;
  gap: 56px;
  flex-wrap: wrap;
}

.footer-links-col {
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 140px;
}

.links-col-title {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #9E5642;
  text-transform: uppercase;
}

.links-col-title.sub-title {
  margin-top: 10px;
}

.footer-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-nav-list a {
  text-decoration: none;
  font-size: 0.84rem;
  color: #55343F;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-block;
}

.footer-nav-list a:hover {
  color: #8C4736;
  transform: translateX(3px);
}

/* BARIS BAWAH: COPYRIGHT & LEGAL */
.footer-bottom-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding-top: 24px;
  border-top: 1px solid #EED7DE;
  flex-wrap: wrap;
}

.copyright-text {
  margin: 0;
  font-size: 0.78rem;
  color: #7A5B66;
}

.legal-links {
  display: flex;
  gap: 24px;
}

.legal-links a {
  text-decoration: none;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #6D4C58;
  transition: color 0.2s ease;
}

.legal-links a:hover {
  color: #8C4736;
}

/* Responsiveness Footer */
@media (max-width: 992px) {
  .footer-links-grid {
    gap: 36px;
  }
}

@media (max-width: 768px) {
  .footer-top-row {
    flex-direction: column;
    gap: 36px;
  }
  .footer-brand-column {
    max-width: 100%;
  }
  .footer-links-grid {
    width: 100%;
    justify-content: space-between;
  }
  .footer-bottom-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
