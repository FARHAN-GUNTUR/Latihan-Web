// ? Cara Kurang Tepat

// ! const close = document.querySelector ('.close');
// ! const card = document.querySelector ('.card');
// ! close.onclick = function () {
// ! card.style.display = 'none';
// ! }

/** ! const card = document.querySelectorAll ('.card');
const close = document.querySelectorAll ('.close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    card[i].style.display = 'none';
  };
}; */


// TODO: CARA AGAK BENAR
//! const close = document.querySeleectorAll ('.close');
//! for (let i = 0; i < close.length; i++) {
//!   close[i].addEventListener ('.click', function () {
//!     close[i].parentElement.style.display = 'none';
//!   })
//! }

// * CARA LUMAYAN BENAR
//! const close = document.querySelectorAll ('.close');
//! for ( i = 0; i < close.length; i++) {
//!   close[i].addEventListener ('click', function (e) {
//!     e.target.parentElement.style.display = "none";
//!   })
//! }


// *CARA YANG BENAR DAN RINGKAS
// const close = document.querySelectorAll ('.close');
// close.forEach (function (el) {
//   el.addEventListener ('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//     e.preventDefault ();
//   });
// });

// * EVENT BUBBLING *
// const close = document.querySelectorAll ('.close');
// close.forEach (function (el) {
//   el.addEventListener ('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//     e.preventDefault ();
//     e.stopPropagation ();
//   });
// });

// const card = document.querySelectorAll ('.card');
// card.forEach ( function (element) {
//   element.addEventListener ('click', function (e) {
//     e.target.classList.toggle ('ubah');
//   })
// })



const container = document.querySelector('.container');
// const cards = document.querySelectorAll('.card');
container.addEventListener('click', function (e) {
  if (e.target.className == 'close') {
    e.target.parentElement.style.display = 'none';
  } else if (e.target.className == 'card') {
    e.target.backgroundColor = 'blue';
  }
})