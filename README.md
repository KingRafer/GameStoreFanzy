# GameStoreID — Coding Template

Template frontend untuk toko/top-up game berbasis HTML, CSS, dan JavaScript vanilla.

## Struktur

```text
GameStoreID-Coding-Template/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── games/
        ├── mobile-legends.png
        ├── roblox.png
        ├── free-fire.png
        ├── pubg-mobile.png
        ├── genshin-impact.png
        ├── valorant.png
        ├── honkai-star-rail.png
        └── call-of-duty-mobile.png
```

## Fitur template

- Katalog game berbasis data
- Top up dan paket harga
- Kartu akun game
- Keranjang belanja
- Checkout frontend
- Pilihan metode pembayaran sebagai simulasi
- Search game
- Filter kategori
- Dark/light mode
- Pilihan tema warna
- Responsive desktop/mobile
- Penyimpanan keranjang via `localStorage`

## Cara menambah game

Buka `script.js`, lalu tambahkan object baru ke array `games`:

```js
{
  id: 13,
  name: "Nama Game",
  category: "rpg",
  image: "assets/games/nama-game.png",
  type: "topup",
  desc: "Mata uang game",
  packages: [
    { name: "100 Item", price: 15000 },
    { name: "500 Item", price: 70000 }
  ]
}
```

Masukkan gambar game ke:

```text
assets/games/
```

Lalu sesuaikan nama file pada properti `image`.

## Catatan pembayaran

Checkout di template ini adalah **frontend/demo**. Belum ada backend, database, autentikasi, atau payment gateway sungguhan.

Untuk produksi, bagian checkout perlu dihubungkan ke backend dan payment gateway resmi, misalnya Midtrans/Xendit, termasuk webhook untuk verifikasi pembayaran.

## Menjalankan

Tidak membutuhkan framework. Cukup buka `index.html` di browser.

Untuk development yang lebih nyaman, gunakan Live Server atau server HTTP lokal.
