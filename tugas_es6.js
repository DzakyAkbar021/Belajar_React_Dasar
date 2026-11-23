const produk = [
    { nama: "Laptop", harga: 9500000 },
    { nama: "HP", harga: 4500000 },
    { nama: "Sepatu", harga: 800000 }
];

const promosi = produk.map((item) => {
    if (item.harga > 100000) {
        return `Produk ${item.nama} dijual dengan harga Rp${item.harga} - "Barang Mewah"`;
    } else {
        return `Produk ${item.nama} dijual dengan harga Rp${item.harga}`;
    }
});

console.log(promosi);