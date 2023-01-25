// TODO: OBJECT PADA JAVASCRIPT
//! 1. OBJECT LITERAL
//* let mahasiswa = {       //! PROPERTIES
//*   nama: 'Guntur Wahyu Septiaji',
//*   nilai: 80,
//*   belajar: function (naik) {        //! METHOD
//*     this.nilai += naik * 2;
//*     console.log(`Semangat belajarnya ${this.nama}`);
//*  },
//*   bolos: function (turun) {
//*     this.nilai -= turun;
//*     console.log(`Bolos tidak membuatmu keren bro`);
//*   },
//*   istirahat: function (naik) {
//*     this.nilai += naik;
//*     console.log(`Jangan menyerah`);
//*   }
//* };

//! 2. MEMBUAT OBJECT DENGAN
//! 2.1. FUNCITON DECLARATION
//* function Mahasiswa(nama, nilai) {
//*   let mahasiswa = {};
//*   mahasiswa.nama = nama;
//*   mahasiswa.nilai = nilai;

//*   mahasiswa.belajar = function (naik) {
//*     this.nilai += naik;
//*     console.log(`Semangat belajarnya ${this.nama}`);
//*   }

//*   mahasiswa.bolos = function (turun) {
//*     this.nilai -= turun;
//*     console.log(`Bolos tidak membuatmu keren bro`);
//*   }

//*   return mahasiswa;
//* }
//* let guntur = Mahasiswa('Guntur Wahyu Septiaji', 80);

//* function Kelompok(nama) {
//*   let kelompok = {};
//*   kelompok.nama = nama;
//*   kelompok.kerja = function (kerja) {
//*     this.nama += kerja;
//*     console.log(`Anda bekerja dengan baik`);
//*   }
//*   kelompok.malas = function (afk) {
//*     this.nama -= afk;
//*     console.log(`Jangan bermalas-malasan bro`);
//*   }
//*   return kelompok;
//* }
//* let guntur = Kelompok('Guntur Wahyu Septiaji')

//! FUNCTION EXPRESSION
//* const Mahasiswa = function (nama, nilai) {
//*   let mahasiswa = {};
//*   mahasiswa.nama = nama;
//*   mahasiswa.nilai = nilai;
//*   mahasiswa.belajar = naik => {
//*     mahasiswa.nilai += naik * 2;
//*     return `Semangat belajarnya ${nama}`
//*   },
//*     mahasiswa.bolos = turun => {
//*       mahasiswa.nilai -= turun;
//*       return `Jangan bolos ${nama}`;
//*     },
//*     mahasiswa.istirahat = naik => {
//*       mahasiswa.nilai += naik;
//*       return `Tetap semangat ${nama}`;
//*     }
//*   return mahasiswa;
//* }
//* let guntur = Mahasiswa('Farhan', 60);

//! 3. CONSTRUCTOR FUNCTION
//! 3.1. FUNCTION DECLARATION
//* function Mahasiswa(nama, nilai) {
//*   this.nama = nama;
//*   this.nilai = nilai;

//*   this.belajar = function (naik) {
//*     this.nilai += naik;
//*     console.log(`Semangat belajarnya ${this.nama}`);
//*   }

//*   this.bolos = function (turun) {
//*     this.nilai -= turun;
//*     console.log(`Bolos tidak membuatmu keren bro`);
//*   }
//* }
//* let guntur = new Mahasiswa('Guntur Wahyu Septiaji', 80);

//* function Kelompok(nama, subjek) {
//*   this.nama = nama;
//*   this.subjek = subjek;
//*   this.poin = function (kerja) {
//*     this.nama += kerja;
//*     console.log(`Anda bekerja dengan baik`);
//*   }
//*   this.malas = function (afk) {
//*     this.nama -= afk;
//*     console.log(`Jangan bermalas-malasan bro`);
//*   }
//* }
//* let guntur = new Kelompok('Guntur Wahyu Septiaji', 'Kerja')

//! 3.2. FUNCTION EXPRESSION
//* const Mahasiswa = function (nama, nilai) {
//*   this.nama = nama;
//*   this.nilai = nilai;
//*   this.belajar = naik => {
//*     this.nilai += naik * 2;
//*     console.log(`Semangar Belajarnya ${this.nama}`);
//*   }
//* }
//* let guntur = new Mahasiswa('Guntur', 80);
//! 3.2.1. OBJECT LITERAL
//* const Mahasiswa = function () {
//*   this.nama = 'Guntur Wahyu Septiaji';
//*   this.kerja = 'Programmer';
//*   this.perkenalan = function () {
//*     console.log(`Halo perkenalkan nama saya ${this.nama} dan saya bekerja sebagai ${this.kerja}`);
//*   }
//* }

//* function Mahasiswa() {
//*   this.nama = 'Guntur Wahyu Septiaji';
//*   this.pekerjaan = 'Programmer';
//*   this.perkenalan = function () {
//*     return `Perkenalkan nama saya ${this.nama} dan saya bekerja sebagai ${this.pekerjaan}`;
//*   }
//* }
//* const guntur = new Mahasiswa();

//* const Mahasiswa = function () {
//*   this.nama = 'Guntur Wahyu Septiaji';
//*   this.pekerjaan = 'Programmer';
//*   this.perkenalan = function () {
//*     return `Perkenalkan nama saya ${this.nama} dan saya bekerja sebagai ${this.pekerjaan}`;
//*   }

//* }
//* const guntur = new Mahasiswa();


//! 4. OBJECT CREATE
//! 4.1 OBJECT CREATE
//* const dataMahasiswa = {
//*   belajar: function (naik) {
//*     this.nilai += naik * 2;
//*     console.log(`Semangat belajarnya ${this.nama}`);
//*   },
//*   bolos: function (turun) {
//*     this.nilai -= turun;
//*     console.log(`Bolos tidak membuatmu keren bro`);
//*   },
//*   istirahat: function (naik) {
//*     this.nilai += naik;
//*     console.log(`Kalo lelah istirahat bukan menyerah`);
//*   }
//* }
//* function Mahasiswa(nama, nilai) {
//*   let mahasiswa = {};
//*   mahasiswa.nama = nama;
//*   mahasiswa.nilai = nilai;
//*   mahasiswa.belajar = dataMahasiswa.belajar;
//*   mahasiswa.bolos = dataMahasiswa.bolos;
//*   mahasiswa.istirahat = dataMahasiswa.istirahat;
//*   return mahasiswa;
//* }

//* let guntur = Mahasiswa('Guntur Wahyu Septiaji', 80);
//* let farhan = Mahasiswa('Farhan', 85);

//! 4.2 OBJECT CREATE
//* const dataMahasiswa = {
//*   belajar: function (naik) {
//*     this.nilai += naik * 2;
//*     console.log(`Semangat belajarnya ${this.nama}`);
//*   },
//*   bolos: function (turun) {
//*     this.nilai -= turun;
//*     console.log(`Suatu saat nanti kamu pasti akan menyesal`);
//*   },
//*   istirahat: function (istirahat) {
//*     this.nilai += istirahat;
//*     console.log(`Capek boleh, nyerah jangan`);
//*   }
//* }

//* function Mahasiswa(nama, nilai) {
//*   let mahasiswa = Object.create(dataMahasiswa);
//*   mahasiswa.nama = nama;
//*   mahasiswa.nilai = nilai;
//*   return mahasiswa;
//* }
//* let guntur = Mahasiswa('Guntur Wahyu Septiaji', 90);
//* let farhan = Mahasiswa('Farhan', 80);

//! 5. OBJECT PROTOTYPE
//* function Mahasiswa(nama, nilai) {
//*   this.nama = nama;
//*   this.nilai = nilai;
//* }
//* Mahasiswa.prototype.belajar = function (naik) {
//*   this.nilai += naik * 2;
//*   return `Semangat belajarnya ${this.nama}`;
//* }
//* Mahasiswa.prototype.bolos = function (turun) {
//*   this.nilai -= turun;
//*   return `Bolos tidak membuatmu keren bro`;
//* }
//* Mahasiswa.prototype.istirahat = function (istirahat) {
//*   this.nilai += istirahat;
//*   return `Kalo lelah istirahat bukan menyerah`;
//* }
//* let guntur = new Mahasiswa('Guntur Wahyu Septiaji', 90);
//* let farhan = new Mahasiswa('Farhan', 80);

//! 6. OBJECT CLASS
// class Mahasiswa {
//   constructor(nama, nilai) {
//     this.nama = nama;
//     this.nilai = nilai;
//   }
//   belajar(naik) {
//     this.nilai += naik * 2;
//     return `Semangat belajarnya ${this.nama}`;
//   }
//   bolos(turun) {
//     this.nilai -= turun;
//     return `Bolos tidak membuatmu keren bro`;
//   }
//   istirahat(istirahat) {
//     this.nilai += istirahat;
//     return `Kalo lelah istirahat bukan menyerah`;
//   }
// }
// let guntur = new Mahasiswa('Guntur Wahyu Septiaji', 90);
// let farhan = new Mahasiswa('Farhan', 80);

// let dropdown = document.querySelector('.dropdown');
// function showMenu() {
//   dropdown.style.right = '0';
// }
// function hideMenu() {
//   dropdown.style.right = '-150px'
// }

const list = document.querySelector('.list');
const bars = document.querySelector('.fa-bars');
bars.addEventListener('click', function () {
  list.classList.toggle('active');
})

document.addEventListener('click', function (e) {
  if (!bars.contains(e.target) && !list.contains(e.target)) {
    list.classList.remove('active');
  }
});