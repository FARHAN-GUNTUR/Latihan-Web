// ? DOM MANIPULATION
// getElementById
// getElementsByTagName
// getElementsByClassName
// querySelector
// querySelectorAll

// getElementsByTagName
const heading = document.getElementsByTagName ('h1');
heading[1].innerHTML = 'Website Pertamaku';
heading[1].style.color
const list = document.getElementsByTagName ('a');
for ( let j = 0; j < list.length; j++) {
    list[j].style.color = '#FF597B';
}




// getElementsByClassName
// const container = document.getElementsByClassName ('container-content');
// container[0].style.backgroundColor = '#eaeaea';

const tulis = document.getElementsByClassName ('tulisan');
for ( let i = 0; i < tulis.length; i++) {
    tulis[i].style.color = 'blue';
}

const satu = document.getElementsByClassName ('satu');
satu[0].style.fontSize = '20px';

// const ganti = document.getElementsByClassName ('paragraph');
// ganti.innerHTML = 'Farhan';
// const diatas tidak merubah heading 1 pada websitenya



// querySelector
// MENGHASILKAN SEBUAH ELEMEN
// SAMA SEPERTI SELCTOR PADA CSS
const select = document.querySelector ('.menu ul');
select.style.backgroundColor = 'blue';

const ganti = document.querySelector ('.paragraph h1');
ganti.innerHTML = 'Farhan'


// querySelectorAll
// MENGHASILKAN SEBUAH NODE LIST
const paragraph = document.querySelectorAll ('h1');
for ( let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.backgroundColor = 'orange';
}




const warna = document.querySelector ('.tulisan');
const warni = warna.getElementsByTagName ('p');
warni[0].style.backgroundColor = 'red';

const cobaGanti = document.querySelector ('.dua ul');
const coba = cobaGanti.getElementsByTagName ('a');
coba[2].style.backgroundColor = 'black';



// DOM MANIPULATION
// setAttribute
// ClassList


// setAttribute
let tambah = document.querySelector ('.menu ul');
let attribut;
let hilang;
attribut = tambah.getElementsByTagName ('a')[1];
attribut.setAttribute('link', '....');
attribut = tambah.getElementsByTagName ('li')[1]
attribut.setAttribute('id','list');
attribut = tambah.getElementsByTagName ('a')[2];
attribut.setAttribute('class','nama');

// const cari = document.querySelectorAll ('.tulisan p')[1];
// cari.classList.add('kesatu');
const cari = document.querySelector ('.satu');
// cari.classList.replace('satu','cari');
// cari.classList.remove ('satu');
// cari.removeAttribute ('style');



// DOM MANIPULATION
// MEMBUAT ELEMEN BARU
let buat = document.createElement ('h1');
let teks = document.createTextNode ('hubungi kontak di bawah ini');
let masuk = buat.appendChild(teks);
let container = document.querySelector ('.tiga');
container.appendChild(masuk);
container.style.textTransform = 'capitalize';
container.style.textAlign = 'center';


//! const liBaru = document.createElement ('li');
//! const textBaru = document.createTextNode ('Keenam');
//! const gabung = liBaru.appendChild(textBaru);
//! const tempat = document.querySelector ('.dua ul');
//! tempat.appendChild(gabung);

const liBaru = document.createElement ('li');
const textBaru = document.createTextNode ('Item Terbaru');
const gabung = liBaru.appendChild(textBaru);
const tempat = document.querySelector ('.dua ul');
const tempatBaru = tempat.querySelector ('li:nth-child(3)');
tempat.insertBefore(liBaru, tempatBaru);

const h1Baru = document.createElement ('h1');
const kalimat = document.createTextNode ('ini h1 baru');
const gabungkan = h1Baru.appendChild(kalimat);
const wadah = document.querySelector ('.satu');
const sebelumWadah = wadah.querySelector ('.tulisan');
const wadahFix = wadah.insertBefore(h1Baru, sebelumWadah);