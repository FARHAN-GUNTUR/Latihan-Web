//! 1. FUNCTION DECLARATION
//* function tampilNama(nama) {
//*   return `Halo ${nama}`;
//* }
//* console.log(tampilNama('Guntur'));

//* function tampilNama(nama) {
//*   console.log (`Halo ${nama}`);
//* }
//* tampilNama('Guntur');



//* function sapa (nama1, nama2) {
//*   const halo = `Halo ${nama1} dan ${nama2}`
//*   return halo;
//* }
//* const tampil = sapa('Farhan', 'Guntur');
//* console.log(tampil);

//* function ipAkhir (mahasiswa, ip) {
//*   if ( ip >= 3.5 && ip <= 4 ) {
//*     return 'IP Anda A'
//*   } else if ( ip >= 3 && ip < 3.5 ) {
//*     return 'IP Anda B'
//*   } else if ( ip >= 2.5 && ip < 3) {
//*     return 'IP Anda C'
//*   } else {
//*     return 'Silahkan mengulang tahun depan karena ip anda D'
//*   }
//* }
//* let ipk = ipAkhir ('Guntur', 3.5);
//* console.log(ipk);


//! MENGHENTIKAN SEBUAH FUNCTION
//* function cari(angka1, angka2) {
//*   for (const temukan of angka1) {
//*     if (temukan === angka2) {
//*       return true;
//*     }
//*   }
//*   return false;
//* }
//* const pertama = [213, 1, 5, 6, 7, 2, 8, 9, 2, 215, 21, 313, 4];
//* const kedua = 1;
//* const ketemu = cari(pertama, kedua);
//* console.log(ketemu);
/////////////////////////////////////

//* function jumlahVolumeDuaKubus(sisiKubusA, sisiKubusB) {
//*   let volumeTotal = Math.pow(sisiKubusA, 3) + Math.pow(sisiKubusB, 3);
//*   return volumeTotal;
//* }
//* let volumeTotal = jumlahVolumeDuaKubus(8, 3);
//* console.log(volumeTotal);

//* function perhitunganDuaBilangan(bilangan1, bilangan2) {
//*   let jumlahBilangan = bilangan1 + bilangan2;
//*   return jumlahBilangan;
//* }
//* console.log(perhitunganDuaBilangan(15, 15));

//* function penjumlahan(nilai1, nilai2) {
//*   let nilaiTotal = nilai1 + nilai2;
//*   return nilaiTotal;
//* }
//* let nilai1 = parseInt(prompt('Masukkan angka pertama: '));
//* let nilai2 = parseInt(prompt('Masukkan angka kedua: '));
//* let jumlah = penjumlahan(Math.pow(nilai1, 2), Math.pow(nilai2, 2));
//* alert(`Hasilnya adalah ${jumlah}`);

//! CARA 1 TIDAK DISARANKAN, LEBIH BAIK MENGGUNAKAN CARA 2
//* function penjumlahan() {
//*   let hasil = 0;
//*   for (let i = 0; i < arguments.length; i++) {
//*     hasil += arguments[i];
//*   }
//*   return `Hasilnya adalah ${hasil}`;
//* }
//* let coba = penjumlahan(3, 5, 9);
//* console.log(coba);

//! CARA 2 MENGGUNAKAN FOR OF DAN REST PARAMETER
//* function penjumlahan(...angkaKedua){
//*   let total = 0
//*   for( const jumlah of angkaKedua) {
//*   total += jumlah
//*   }
//*   return total;
//* }
//* let totalAngka = penjumlahan(5,2,6,3,8,1,0,7);
//* console.log(totalAngka);



//! FUNCTION SEBAGAI VALUE
//* function sayHello(name) {
//*   console.log(`Selamat hari senin ${name}`);
//* }

//* sayHello('Guntur');
//* let say = sayHello;
//* say('Farhan');

//* function giveMeName(callbak) {
//*   callbak('Wahyu');
//* }
//* giveMeName(say)



//! FUNCTION DALAM FUNCTION
//* function first(ang1, ang2) {
//*   let satu = ang1 + ang2;

//*   function second(ang) {
//*     result = ang + satu;
//*   }
//*   second(10);

//*   function third(ang3) {
//*     result += ang3;
//*   }
//*   third(20);

//* };
//* first(6, 4);

//* console.log(result);



//! MENGHENTIKAN FUNCTION
// function cariAngka(angka1, angka2) {
//   for (const cari of angka1) {
//     if (cari === angka2) {
//       return `${cari} adalah angka yang anda cari`;
//     }
//   }
//   return `Masih belum ketemu`;
// }

// const pertama = [2, 3, 5, 7, 11, 13];
// const kedua = 7;
// const tampil = cariAngka(pertama, kedua);
// console.log(tampil);


// //! FUNCTION YANG MEMANGGIL DIRINYA SENDIRI
// function recursive ( nilai) {
//   if ( nilai === 1) {
//     return 1;
//   } else { 
//     return nilai * recursive(nilai - 1);
//   }
// }
// console.log(recursive(4));




//! 2.FUNCTION EXPRESSION
//* let tampilNama = function (nama) {
//*   return `Halo ${nama}`;
//* }
//* console.log(tampilNama('Farhan'));

//* let penjumlahan = function (bilangan1, bilangan2) {
//*   let total = bilangan1 + bilangan2
//*   return `Hasilnya adalah ${total}`;
//* }
//* console.log(penjumlahan(30, 30));

//* let volumeDuaKubus = function (a, b) {
//*   let hasil = a + b;
//*   return hasil;
//* }
//* let angka1 = parseInt(prompt('Masukkan angka 1'));
//* let angka2 = parseInt(prompt('Masukkan angka 2'));
//* let jumlah = volumeDuaKubus(Math.pow(angka1, 3), Math.pow(angka2, 3));
//* alert(jumlah);

//! 3. ARROW FUNCTION
//* const tampilNama = function (nama) {
//*   return `Halo ${nama}`;
//* }
//* console.log(tampilNama('Guntur Wahyu Septiaji'));

//* const tampilNama = nama => `Halo ${nama}`
//* console.log(tampilNama('Guntur'));

//* const tampilNama = (nama) => {
//*   return `Halo ${nama}`;
//* }
//* console.log(tampilNama('Farhan'));

//* const tampilNama = (nama, waktu) => {
//*   return `Halo ${nama} Selamat hari ${waktu}`;
//* }
//* console.log(tampilNama('Farhan', 'Jumat'));

//* const tampilNama = function (nama, waktu) {
//*   return `Halo ${nama} Selamat ${waktu}`;
//* }
//* console.log(tampilNama('Guntur', 'Pagi'));

//* const tampilNama = function (nama,) {
//*   return `Halo ${nama} Selamat ${waktu}`;
//* }

//* console.log(tampilNama('Guntur'));

//! IMPLISIT RETURN
//* const tampilNama = nama => `Halo ${nama}`
//* console.log(tampilNama('Guntur'));


//* let mahasiswa = ['Guntur', 'Wahyu', 'Septiaji', 'Farhan'];
//* let jumlahHuruf = mahasiswa.map(function (nama) {
//*   return nama.length;
//* })
//* console.log(jumlahHuruf);
//* let jumlahHuruf = mahasiswa.map(nama => nama.length);
//* console.table(jumlahHuruf);
//* let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jumlahHuruf: nama.length }));
//* console.table(jumlahHuruf);



//* let club = ['Real Madrid', 'Barcelona', 'Atetico Madrid', 'Bayern Munchen'];
//* let nama = club.map(function (posisi) {
//*   return posisi.length;
//* })
//* console.table(club);

//* let club = ['Real Madrid', 'Barcelona', 'Atetico Madrid', 'Bayern Munchen'];
//* let nama = club.map(posisi => posisi.length);
//* console.table(club);

//* let club = ['Real Madrid', 'Barcelona', 'Atetico Madrid', 'Bayern Munchen'];
//* let nama = club.map(posisi => ({ Nama: posisi, jumlahHuruf: posisi.length }));
//* console.table(nama);

//* const kelompok = nomer => `Selamat Bekerja Kelompok ${nomer}`;
//* console.log(kelompok('6'));


//! EXPRESSION
//* const Mahasiswa = function () {
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
//*   this.perkenalan = () => {
//*     return `Perkenalkan nama saya ${this.nama} dan saya bekerja sebagai ${this.pekerjaan}`;
//*   }

//* }
//* const guntur = new Mahasiswa();

//! DECLARATION
//* function Mahasiswa() {
//*   this.nama = 'Guntur Wahyu Septiaji';
//*   this.pekerjaan = 'Programmer';
//*   this.perkenalan = function () {
//*     return `Perkenalkan nama saya ${this.nama} dan saya bekerja sebagai ${this.pekerjaan}`;
//*   }
//* }
//* const guntur = new Mahasiswa();

//! 4. MENGUBAH OBJECT MENJADI ARROW FUNCTION
//! 4.1. OBJECT LITERAL MENJADI ARROW FUNCTION
//* let mahasiswa = {
//! PROPERTIES
//*   nama: 'Guntur Wahyu Septiaji',
//*   nilai: 80,
//! METHOD
//*   belajar: naik => {
//*     mahasiswa.nilai += naik * 2;
//*     return `Semangat belajarnya ${mahasiswa.nama}`;
//*   },
//*   bolos: turun => {
//*     mahasiswa.nilai -= turun;
//*     return `Suatu hari kamu akan menyesal`;
//*   },
//*   istirahat: naik => {
//*     mahasiswa.nilai += naik;
//*     return `Jangan menyerah`;
//*   }
//* };

//! CONSTUCTOR FUNCTION MENJADI ARROW FUNCTION
//* const Mahasiswa = function (nama, nilai) {
//*   this.nama = nama;
//*   this.nilai = nilai;
//*   this.belajar = naik => {
//*     this.nilai += naik * 2;
//*     return `Semangat Belajarnya ${this.nama}`;
//*   }
//*   this.bolos = turun => {
//*     this.nilai -= turun;
//*     return `Jangan bolos ${this.nama}`;
//*   }
//* }
//* let guntur = new Mahasiswa('Guntur', 80);

//*const Mahasiswa = function (nama, nilai) {
//*  let mahasiswa = {};
//*  mahasiswa.nama = nama;
//*  mahasiswa.nilai = nilai;
//*  mahasiswa.belajar = naik => {
//*    mahasiswa.nilai += naik * 2;
//*    return `Semangat belajarnya ${nama}`
//*  },
//*    mahasiswa.bolos = turun => {
//*      mahasiswa.nilai -= turun;
//*      return `Jangan bolos ${nama}`;
//*    },
//*    mahasiswa.istirahat = naik => {
//*      mahasiswa.nilai += naik;
//*      return `Tetap semangat ${nama}`;
//*    }
//*  return mahasiswa;
//*}
//*let guntur = Mahasiswa('Farhan', 60);





//! HIGHER ORDER FUNCTION
// const ip = [3.4, 3.3, 3.6, 3.9, 4.0, 3.7, 3.8, 4.0];
// let ipk = ip.filter(a => a > 3.6).map(a => a + a).reduce((a, b) => a + b + 0);
// console.log(ipk);

