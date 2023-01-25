let namaDepan, namaBelakang;
namaDepan = 'Guntur';
namaBelakang = 'Wahyu';
namaAsli = namaDepan + namaBelakang;
console.log(namaAsli);

function person() {
    return namaAsli;
} console.log(person());

function penjumlahan() {
    let hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}
let coba = penjumlahan(3, 5, 10);
console.log(coba);

let jeneng = ['Guntur Wahyu Septiaji', 'Lailatul Mufida', 'Ummul Azizah'];
for (let j = 0; j < jeneng.length; j++) {
    console.log(jeneng[j]);
}

// let angka;
// let angkaAsli;
// angka = 2+1; //3
// document.writeln('<p> 1+2 =' +angka+ '</p>');
// angkaAsli = angka;

// angka = angka - 1; //2
// document.writeln('<p>' + angkaAsli + '-1 = ' + angka + '</p>');
// angkaAsli = angka;

// angka = angka * 2; //4
// document.writeln('<p>' + angkaAsli + '*2 = ' + angka + '</p>');
// angkaAsli = angka;

// angka = angka *8; //32
// document.writeln(angka);

// Bisa juga ditulis seperti contoh di bawah ini
let angka;
let angkaAsli;
angka = 3;
document.writeln(`1+2 = ${angka}`);
angkaAsli = angka;

angka *= 20;
document.writeln(`${angkaAsli} *20 = ${angka}`);
angkaAsli = angka;

angka /= 10;
document.writeln('<p>' + angkaAsli + ' /10 = ' + angka + '</p>');
angkaAsli = angka;

angka -= 5;
document.writeln('<p>' + angkaAsli + ' -5 = ' + angka + '</p>');
angkaAsli = angka;

angka += 9;
let tampil = (+angkaAsli + ' + 9 = ' + angka);
document.writeln(tampil);
console.log(tampil);

let bintang = '';
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= i; j++) {
        bintang += '*';
    }
    bintang += '\n'
}
for (i = 10; i > 0; i--) {
    for (j = 0; j < i; j++) {
        bintang += '*';
    }
    bintang += '\n'
}
console.log(bintang);

let star = '';
for (let i = 10; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        star += '*';
    }
    star += '\n';
}

console.log(star);

// Operator Ternary

let nama = 'Guntur Wahyu Septiaji';
let nilai = 65;
let kataBijak;
if (nilai > 75) {
    kataBijak = `${nama} lulus seleksi SBMPTN`;
} else {
    kataBijak = `Tetap semangat dan jangan putus asa`;
}
console.log(kataBijak);

let orang = 'Farhan';
let value = 40;
let ucapan = value > 75 ? `${orang} dinyatakan lulus` : 'Jangan putus asa bro';
console.log(ucapan);