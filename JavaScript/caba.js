let ucapan;
for (let i = 0; i <= 40; i++) {
    ucapan = i % 2 == 0 ? `${i} adalah bilangan genap` : `${i} adalah bilangan ganjil`;
    console.log(ucapan);
}

let usia = 20;
let nama = 'Guntur Wahyu Septiaji';
if (usia <= 5) {
    console.log(`${nama} masih balita`);
} else if (usia > 5 && usia <= 12) {
    console.log(`${nama} anak-anak`);
} else if (usia > 12 && usia <= 21) {
    console.log(`${nama} seorang remaja`);
} else {
    console.log(`${nama} golongan tua`);
}

function sapaan(nama1,) {
    alert('halo ' + nama1);
}
let nama1 = prompt('Siapa Nama Kamu??')
sapaan(nama1)

for (var i = 10; i >= 0; i--) {
    console.log(i);
}

let k = 0;
while (k <= 10) {
    console.log(k);
    k++;
}

let nami = ['Farhan', 'Guntur', 'Wahyu', 'Septiaji'];
for (let i = 0; i < nami.length; i++) {
    console.log('Nama Kelompok : ' + (i + 1) + nami[i]);
}

let jeneng = ['Guntur', 'Wahyu']
// console.log(jeneng.join(' '))
// jeneng.unshift('Farhan',);
// jeneng.push('Septiaji');
jeneng[1] = 'Farhan';
delete jeneng[1];
jeneng.push('Mufida');
jeneng.splice(3, 0, 'Septiaji');
console.table(jeneng);