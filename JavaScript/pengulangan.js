//! 1. PENGULANGAN FOR 
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    // continue;
  } console.log(`Pengulangan for ke : ${i} `);
  // console.log(`Bilangan ganjil ke ${[i]}`);
};

for (let i = 0; i <= 10; i++) {
  if (i <= 5) {
    console.log(`Angkot no. ${i} milik Pak Dhika beroperasi dengan baik`);
  } else if (i === 8) {
    console.log(`Angkot no. ${i} milik Pak Dhika sedang lembur`);
  } else {
    console.log(`Angkot no. ${i} milik Pak Dhika sedang tidak beroperasi`);
  }
};


//! 2. PENGULANGAN WHILE
let a = 11;
while (a <= 20) {
  if (a <= 16) {
    console.log(`Angkot no. ${a} milik Pak Dhika beroperasi dengan baik`);
  } else {
    console.log(`Angkot no. ${a} milik Pak Dhika sedang tidak beroperasi`);
  }
  a++;
}


let j = 0;
while (j <= 10) {
  console.log(`Pengulangan while ke ${j}`);
  j++;
}


// let k = 100;
let k = 1;
do {
  console.log(`do while ke - ${k}`);
  k++;
} while (k <= 10)

//! 
function one(value) {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
}
console.log(one(5));

//! 3. PENGULNGAN FOR IN
//! 3.1. FOR IN DI OBJECT  -> MENGEMBALIKAN PROPERTYNYA
const nama = {
  namaDepan: 'Guntur',
  namaTengah: 'Wahyu',
  namaBelakang: 'Septiaji',
  namaLengkap: 'Guntur Wahyu Septiaji'
}

for (const names in nama) {
  console.log(`${names} : ${nama[names]}`)
}

//! 3.2. FOR IN DI ARRAY  -> MENGEMBALIKAN INDEX
const orang = ['Guntur', 'Wahyu', 'Septiaji'];
for (const index in orang) {
  console.log(`Nama Orang : ${index} : ${orang[index]}`);
}

//! ATAU BISA MENGGUNAKAN CARA SEPERTI YANG DIBAWAH

let nami = ['Farhan', 'Guntur', 'Wahyu', 'Septiaji'];
for (let i = 0; i < nami.length; i++) {
  console.log(`Nama Kelompok : ${(i + 1)} = ${nami[i]}`);
}

//! 4. PENGULANGAN FOR OF  -> MENGEMBALIKAN VALUE
const people = ['Farhan', 'Guntur', 'Wahyu', 'Septiaji'];
for (const person of people) {
  console.log(`Nama Orang : ${person}`);
}


//! MENGGUNAKAN FUNCTION DENGAN REST PARAMETER DAN PENGULANGAN FOR OF
function penjumlahan(bilangan, ...angkaKedua) {
  let total = 0;
  for (const jumlah of angkaKedua) {
    total += jumlah;
  };
  return `Total penjumlahan dari ${bilangan} tersebut adalah ${total}`;
};
let totalAngka = penjumlahan('Bilangan', 5, 2, 6, 3, 8, 1, 0, 7, 3, 5, 12, 53);
console.log(totalAngka);


const Mahasiswa = function (nama, nilai) {
  this.nama = nama;
  this.nilai = nilai;
  this.belajar = naik => {
    this.nilai += naik * 2;
    return `Semangat Belajarnya ${this.nama}`;
  }
  this.bolos = turun => {
    this.nilai -= turun;
    return `Jangan bolos ${this.nama}`;
  }
}
let guntur = new Mahasiswa('Guntur', 80);

function first(ang1, ang2) {
  let satu = ang1 + ang2;

  function second(ang) {
    result = ang + satu;
  }
  second(10);

  function third(ang3) {
    result += ang3;

  }
  third(20);
  return third;
};
first(6, 4);

console.log(result);

const list = document.querySelector('.list');
const fa = document.querySelector('.fa-bars');
fa.addEventListener('click', function () {
  list.classList.toggle('active');
})

document.addEventListener('click', function (e) {
  if (!fa.contains(e.target) && !list.contains(e.target)) {
    list.classList.remove('active');
  }
});