const kota = ['Jakarta', 'Bandung', 'Yogyakarta', 'Semarang'];
console.table(kota.join(' '));
const ibuKota = {
    Indonesia: 'Jakarta',
    Malaysia: 'Kuala Lumpur',
    Thailand: 'Bangkok',
    Singapore: 'Singapore'
}; console.table(ibuKota);

const nama = ['Guntur', 'Wahyu', 'Septiaji'];
for (let i = 0; i < 3; i++) {
    if (i == [0]) {
        console.log(`Kamu hebat ${nama[0]}`);
    } else if (i == [1]) {
        console.log(`Kuat terus ya ${nama[1]}`);
    } else { console.log(`terus semangat ${nama.join(' ')}`); }
}

const nilaiUlangan = [87, 82, 91, 85, 95, 100];
let motivasi;
for (let i = 0; i < nilaiUlangan.length; i++) {
    motivasi = nilaiUlangan[i] > 90 ? `Selamat nilai kamu adalah : ${nilaiUlangan[i]}` : `Nilai kamu ${nilaiUlangan[i]} dibawah KKM`;
    console.log(motivasi);
}

const name = ['Guntur', 'Wahyu'];
if(name[2] === undefined) {
    console.log('Nama tidak ditemukan');
} else {
    console.log(name[2]+ ' Ada');
}

const orang = {
    asli: 'indonesia'
};
if (orang.asli === undefined) {
    console.log ('Tidak ada');
} else {
    console.log ('Telah ditemukan');
}

let data = parseInt('100');
let data1 = parseInt('200');
let totalData = data + data1;
const typedata = typeof data;
console.log(totalData);
console.log(typedata);

function data0 (data1, data2) {
    let hasil = data1 + data2;
    return hasil;
}
let jumlah = data0(200, 500);
console.log(jumlah);

// Ternary Operator

const nilai = 65;
let ucapan;
if ( nilai > 75) {
    ucapan = 'Selamat anda dinyatakan lulus';
} else {
    ucapan = 'Coba lagi dalam 10 tahun kedepan';
}
console.log (ucapan);

const angka = 86;
let kata = angka > 75 ? 'Anda di terima di universitas' : 'Anda tidak lulus'
console.log(kata);

// Nullish Coalescing Operator

let buah;
if(buah === undefined) {
    buah = ['jambu', 'semangka', 'rambutan'];   
} else if(buah === null) {
    buah = ['nangka', 'mangga', 'nanas'];
}else {
    buah = ['buah naga', 'alpukat', 'apel'];
}
console.table(buah);

let tempat;
let wisata = tempat ?? ['Pantai', 'Gunung', 'Pegunungan'];
console.table(wisata);


// OPERATOR IN
let person = {
    firstName : 'Guntur',
    middleName : 'Wahyu',
    lastName : 'Septiaji',
    rightName : 'Guntur Wahyu Septiaji'
};
let keluar = 'middleName' in person;
let sebuahKata;
sebuahKata = keluar ? `Nama anda telah terdaftar` : 'Silahkan melakukan pendaftaran';
console.log(sebuahKata);

// OPERATOR TYPEOF
sebuahKata = typeof person;
console.log(sebuahKata);

// OPTIONAL CHAINING
const child = {
    addres: {
        age : 10,
        ice : 2
    }
};
let children = child?.addres?.age;
console.log(children);