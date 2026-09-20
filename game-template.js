// TEMPLATE DATA REFERENCE
// Data utama saat ini berada di script.js pada array `games`.
// Gunakan file ini sebagai contoh format ketika menambahkan game baru.

const gameTemplate = {
  id: 13,
  name: "Nama Game",
  category: "rpg", // moba | fps | rpg | sandbox
  image: "assets/games/nama-game.png",
  type: "topup",
  desc: "Mata uang / item",
  packages: [
    { name: "100 Item", price: 15000 },
    { name: "500 Item", price: 70000 }
  ]
};
