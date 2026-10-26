# PanganKeluarga

Aplikasi web untuk membantu keluarga Indonesia memenuhi kebutuhan gizi dan mengelola belanja pangan rumah tangga.
Dibuat oleh **Tim Abula** untuk kompetisi Web Development **SMK Madinatul Quran**.

- **Tema:** Ketahanan Pangan
- **Sub-tema:** Nutrition & Household Security (Konsumsi & Kesehatan Keluarga)
- **Versi:** 1.1 (prototipe)

## Latar Belakang

Banyak keluarga belum tahu komposisi gizi seimbang yang sesuai dengan usia tiap anggotanya, belum punya
perencanaan belanja yang hemat, dan kesulitan menemukan layanan pangan serta kesehatan di sekitar tempat tinggal.
PanganKeluarga menyatukan panduan gizi, resep, perencana anggaran, edukasi, dan peta layanan dalam satu aplikasi
yang disesuaikan dengan profil keluarga pengguna.

## Fitur

| Halaman | Fitur |
|---|---|
| **Beranda** | Profil keluarga, peringatan kondisi kesehatan anggota (stunting, hipertensi, diabetes) beserta rekomendasi resep, pintasan ke modul lain |
| **Panduan Gizi** | Kalkulator visual "Isi Piringku" untuk 5 siklus hidup (usia dihitung otomatis dari tanggal lahir), pelacak air putih, log aktivitas fisik, timer cuci tangan (CTPS) |
| **Ekonomi Pangan** | Perencana anggaran harian/bulanan dengan alokasi tetap (sayur 35%, protein 35%, karbohidrat 20%, bumbu 10%) dan daftar belanja yang dapat ditambah/dihapus |
| **Dapur Resep** | 15 resep sehat per kondisi, pencarian dan filter kategori, mode memasak langkah demi langkah dengan timer |
| **Edukasi** | Kuis gamifikasi "Go, Slow, Whoa" dengan skor XP |
| **Komunitas & Peta** | Peta Leaflet berbasis kecamatan dengan titik acuan layanan dan tautan pencarian Google Maps, serta ruang berbagi (posting, komentar, dukungan) |
| **Umum** | Mode gelap/terang, desain responsif, validasi tahun lahir, ubah profil, tambah/hapus anggota, keluar/reset data |

## Teknologi

- HTML, CSS, JavaScript (tanpa framework dan tanpa backend)
- [Tailwind CSS](https://tailwindcss.com/) (CDN), [Font Awesome](https://fontawesome.com/) 6.4.2, font Plus Jakarta Sans
- [Leaflet](https://leafletjs.com/) 1.9.4 dengan ubin peta OpenStreetMap
- [canvas-confetti](https://github.com/catdad/canvas-confetti) 1.6.0
- Penyimpanan data: `localStorage` peramban

## Struktur Proyek

```
PanganKeluarga/
├── index.html              # Seluruh tampilan (6 halaman + modal)
├── style.css               # Gaya tambahan di luar Tailwind
├── pangankeluarga.ico      # Ikon situs
├── README.md
└── js/
    ├── utils.js            # escapeHTML (anti-XSS) dan loadJSON (baca localStorage aman)
    ├── data-wilayah.js     # Data provinsi > kota > kecamatan beserta koordinat
    ├── data-resep.js       # 15 resep (RECIPES_15)
    ├── data-gizi-game.js   # Data siklus hidup (LIFE_CYCLE_DATA) dan kuis (GAME_FOODS)
    └── app.js              # State aplikasi dan seluruh logika antarmuka
```

Urutan pemuatan skrip di `index.html` penting: `utils.js`, data, lalu `app.js`.

### Alur Data

1. Pengguna mengisi profil keluarga saat pertama kali membuka aplikasi (onboarding).
2. Data disimpan di `localStorage` dengan awalan kunci `pangan_`.
3. `APP_DATA` (di `js/app.js`) memuat data tersebut saat halaman dibuka, lalu halaman dirender ulang oleh fungsi `render...()`.
4. Semua teks masukan pengguna yang ditampilkan lewat `innerHTML` harus melalui `escapeHTML()`.

## Cara Menjalankan

1. Unduh atau *clone* repositori ini.
2. Buka `index.html` di peramban modern (Chrome, Edge, Firefox, Safari).
3. Perlu koneksi internet untuk memuat Tailwind, Font Awesome, Leaflet, font, dan ubin peta dari CDN.

Tidak ada proses *build* atau instalasi dependensi. Untuk pengembangan, disarankan memakai server lokal, misalnya:

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Keterbatasan (Prototipe)

- **Cakupan wilayah:** baru 8 provinsi (DKI Jakarta, Jawa Barat, Jawa Tengah, DI Yogyakarta, Jawa Timur, Bali, Sumatera Utara, Sulawesi Selatan) dengan 54 kecamatan di 18 kota.
- **Titik peta bersifat perkiraan.** Penanda dibuat di sekitar pusat kecamatan sebagai acuan, bukan data fasilitas resmi. Lokasi sebenarnya dicari lewat tautan Google Maps pada tiap penanda.
- **Ruang berbagi belum terhubung antar pengguna.** Tanpa backend, kiriman hanya tersimpan di perangkat masing-masing.
- **Data hanya di perangkat.** Menghapus data peramban atau menekan "Keluar" akan menghapus profil.
- **Bukan alat diagnosis.** Informasi gizi dan kondisi kesehatan bersifat edukasi umum dan tidak menggantikan saran tenaga kesehatan.
- **Alokasi anggaran** memakai persentase tetap dan belum menyesuaikan harga pasar atau ukuran keluarga.

## Rencana Pengembangan

- Backend dan autentikasi agar ruang berbagi benar-benar dibagikan antar warga
- Data fasilitas nyata (misalnya dari OpenStreetMap atau data resmi pemerintah daerah)
- Perluasan data wilayah ke seluruh provinsi
- Harga pangan real-time (misalnya dari data Badan Pangan Nasional)
- Modul pengurangan sisa makanan (*food waste*) dan perencanaan stok
- Penyimpanan aset (Tailwind, Leaflet, ikon) secara lokal agar dapat dipakai tanpa internet

## Keamanan

- Masukan pengguna (nama keluarga, nama anggota, kiriman forum, komentar, daftar belanja) di-*escape* dengan `escapeHTML()` sebelum dimasukkan ke HTML.
- Data `localStorage` dibaca dengan `loadJSON()` sehingga data yang rusak tidak menghentikan aplikasi.

## Tim

Dirancang oleh **Tim Abula** (2026).

## Rujukan Umum

- Pedoman "Isi Piringku" dan Pedoman Gizi Seimbang, Kementerian Kesehatan RI
- Badan Pangan Nasional (Bapanas)
