const pBaru = document.createElement('p');
const textBaru = document.createTextNode('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum minus saepe sapiente fuga quasi est odit');
const satukan = pBaru.appendChild(textBaru);
const tempat = document.querySelector('.tulisan');
const tempatBaru = tempat.querySelector('p:first-child');
tempat.insertBefore(pBaru, tempatBaru);


// ! DOM EVENTS
// ? Event handlers
//! function ubahWarna() {
//!  logo.style.backgroundColor = 'lightblue';
//! }

//! const logo = document.querySelector ('.logo h1');
//! logo.onclick = ubahWarna;

const h1 = document.querySelectorAll('.tengah h1')[1];
h1.onclick = function () {
  h1.style.backgroundColor = '#6C00FF';
}

const heading = document.querySelector('nav');
const taruh = document.querySelector('.logo h1');
const liUbah = document.querySelector('ul');
heading.onclick = function () {
  taruh.classList.toggle('dinding');
  liUbah.classList.toggle('ul-ubah');
}

// const liUbah = document.querySelector ('ul');
// heading.onclick = function () {
//   liUbah.classList.toggle ('ul-ubah');
// }

// ? addEventListener
const p = document.querySelectorAll('.tulisan p')[1];
p.addEventListener('mouseenter', function () {
  p.style.color = 'tomato';
})
p.addEventListener('mouseout', function () {
  p.style.color = 'black';
})

const ul = document.querySelector('.list ul li:last-child');
ul.addEventListener('dblclick', function () {
  const liBaru = document.createElement('li');
  const kataBaru = document.createTextNode('learn');
  const gabungkan = liBaru.appendChild(kataBaru);
  const wadah = document.querySelector('.list ul');
  wadah.appendChild(gabungkan);
})

const tentang = document.querySelectorAll('.tentang h1')[0];
tentang.addEventListener('click', function () {
  tentang.style.color = '#FFB100';
  tentang.style.backgroundColor = 'tomato';
})

const pUbah = document.querySelector('.rumah');
const rumah = pUbah.querySelectorAll('.tentang')[2];
const rumah2 = pUbah.querySelectorAll('.tentang')[0];
pUbah.addEventListener('click', function () {
  rumah.classList.toggle('ubah');
  rumah2.classList.toggle('ubah');
})

// const rumah2 = pUbah.querySelectorAll ('.tentang')[0];
// pUbah.addEventListener ('click', function () {
//   rumah2.classList.toggle ('ubah');
// })

const ubahParagraf = document.querySelectorAll('.tulisan')[0];
const paragraf = document.querySelectorAll('.tulisan')[0];
ubahParagraf.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  paragraf.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const slider = document.getElementById('slider');
const awal = document.querySelector('.awal');
const akhir = document.querySelector('.akhir');

awal.innerHTML = slider.min;
akhir.innerHTML = slider.value;
slider.addEventListener('input', function () {
  akhir.innerHTML = slider.value;
})