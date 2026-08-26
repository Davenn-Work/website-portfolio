# Architecture

Dokumen ini menjelaskan lokasi file dan folder yang sudah ada di proyek `website-portfolio`, supaya struktur kode mudah dipahami dan konsisten saat menambah fitur baru.

## Gambaran Umum

Proyek ini adalah aplikasi `Next.js` dengan `App Router`. Struktur utamanya dibagi menjadi:

- `app/` untuk route, layout, dan global styling
- `lib/` untuk utilitas dan logic domain
- `components/` untuk komponen UI yang reusable
- `public/` untuk aset statis
- `design/` dan `docs/` untuk referensi desain dan requirement
- `.agent/` untuk rule dan workflow internal agent

## Struktur Folder Utama

### `app/`
Folder ini berisi halaman dan layout utama aplikasi.

- `app/layout.tsx`
  - Root layout untuk seluruh aplikasi
  - Tempat import `globals.css`
  - Mengatur font global dan metadata dasar
- `app/globals.css`
  - Global stylesheet
  - Menyimpan token warna, font, radius, dan keyframe animation
  - Menjadi sumber styling dasar untuk seluruh aplikasi
- `app/page.tsx`
  - Halaman utama `/`
  - Saat ini hanya me-render `SplashClient`
  - Menyimpan metadata halaman landing page
- `app/playground/page.tsx`
  - Halaman eksplorasi atau testing
  - Cocok untuk coba komponen, layout, atau variasi UI tanpa mengganggu landing page utama

### `lib/`
Folder ini berisi helper dan logika yang dipakai lintas komponen.

- `lib/utils.ts`
  - Menyediakan helper `cn()` untuk menggabungkan className secara aman
  - Dipakai luas di komponen UI agar class Tailwind lebih rapi
- `lib/cores/constants/text-theme.ts`
  - Kumpulan class string untuk tipografi
  - Menjadi source of truth untuk heading, body, button, caption, dan footer text
- `lib/cores/features/splash/`
  - Area fitur untuk halaman splash / landing page
  - Dibagi per tanggung jawab:
    - `views/` untuk komponen halaman tingkat atas
    - `components/` untuk komponen bagian kecil yang dipakai di splash

### `lib/cores/features/splash/views/`

- `splash-client.tsx`
  - Komponen client untuk landing page utama
  - Menyusun section hero, value proposition, proses, pricing, dan kontak
  - Menghubungkan banyak komponen kecil dari folder `components/`

### `lib/cores/features/splash/components/`

- `navbar.tsx`
  - Komponen navigasi untuk halaman splash
- `detail-card.tsx`
  - Kartu untuk menampilkan poin keunggulan layanan
- `price-card.tsx`
  - Kartu pricing untuk paket Basic dan Plus

### `components/`
Folder ini berisi komponen UI generik yang bisa dipakai ulang.

### `components/ui/`

- `button.tsx`
  - Komponen tombol utama
  - Sudah dibekali variant dan size
  - Menggunakan pola reusable berbasis `cva`
- `accordion.tsx`
  - Komponen accordion berbasis Radix UI
  - Cocok untuk FAQ atau konten yang perlu dibuka-tutup

### `public/`
Folder untuk aset statis yang diakses langsung oleh browser.

- `public/images/svg/Splash.svg`
  - Aset gambar SVG untuk kebutuhan splash atau visual pendukung

### `design/`
Folder referensi desain.

- `design/design-system.md`
  - Panduan design system
  - Biasanya dipakai sebagai acuan warna, tipografi, spacing, dan komponen visual

### `docs/`
Folder dokumentasi proyek.

- `docs/requirements/design-requirement.md`
  - Dokumen requirement desain untuk website jasa pembuatan website
  - Menjelaskan arah visual, isi section, tone of voice, dan kriteria kualitas

### `.agent/`
Folder khusus untuk aturan dan workflow agent.

- `.agent/rules/architecture.md`
  - Dokumen arsitektur struktur folder dan file
- `.agent/rules/coding.md`
  - Tempat aturan coding
- `.agent/rules/project.md`
  - Tempat aturan proyek
- `.agent/workflows/`
  - Folder untuk workflow otomatis atau langkah kerja internal

## File Konfigurasi Root

File di root project ini berfungsi sebagai konfigurasi dan kontrol build.

- `package.json`
  - Daftar dependency, devDependency, dan script seperti `dev`, `build`, `start`, dan `lint`
- `package-lock.json`
  - Lockfile dependency npm
- `tsconfig.json`
  - Konfigurasi TypeScript
- `next.config.ts`
  - Konfigurasi Next.js
- `eslint.config.mjs`
  - Konfigurasi linting ESLint
- `postcss.config.mjs`
  - Konfigurasi PostCSS untuk Tailwind
- `components.json`
  - Konfigurasi komponen style system, biasanya terkait shadcn
- `README.md`
  - Dokumentasi dasar proyek dan cara menjalankan aplikasi

## Pola Struktur Yang Dipakai

Struktur proyek ini mengikuti pola berikut:

1. Halaman utama ada di `app/`
2. Layout global dan styling global tetap di level root `app/`
3. Logic fitur dipisahkan ke `lib/cores/features/`
4. Komponen UI generik dipisahkan dari komponen spesifik fitur
5. Aset, dokumen desain, dan requirement disimpan di folder yang sesuai per fungsinya

## Aturan Penempatan File

- Taruh halaman baru di `app/`
- Taruh komponen reusable di `components/`
- Taruh helper, constants, dan logic domain di `lib/`
- Taruh aset gambar atau SVG di `public/`
- Taruh referensi desain di `design/`
- Taruh requirement atau catatan proyek di `docs/`
- Taruh aturan internal agent di `.agent/`

## Catatan Untuk Pengembangan Berikutnya

- Jika ada fitur baru yang cukup besar, buat folder feature sendiri di bawah `lib/cores/features/`
- Jika ada komponen yang dipakai lebih dari satu halaman, pindahkan ke `components/` atau `components/ui/`
- Jika ada token visual baru, simpan di `app/globals.css` atau file constant yang relevan agar tidak tercecer
- Jika ada aset baru, simpan di `public/` dengan struktur folder yang jelas

## Ringkasan Singkat

Urutan baca struktur project yang paling penting:

1. `app/` untuk entry point aplikasi
2. `lib/cores/features/splash/` untuk isi landing page
3. `components/ui/` untuk komponen dasar
4. `app/globals.css` untuk fondasi styling
5. `docs/` dan `design/` untuk panduan desain dan requirement
