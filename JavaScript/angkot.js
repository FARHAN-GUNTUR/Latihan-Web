let jumlahAngkot;
let angkotBeroperasi;
let noAngkot;
let kalimat;

jumlahAngkot = 10;
angkotBeroperasi = 5;
noAngkot = 1
while(noAngkot <= angkotBeroperasi) {
    kalimat = `Angkot no. ${noAngkot} milik Pak Dhika beroperasi dengan baik`;
    console.log(kalimat);
    noAngkot++;
}
for(noAngkot = angkotBeroperasi +1; noAngkot <= jumlahAngkot; noAngkot++) {
    kalimat = `Angkot no. ${noAngkot} milik Pak Dhika sedang rusak` 
    console.log(kalimat);
}
jumlahAngkot = 20;
angkotBeroperasi = 16;
noAngkot = 11;
for(noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    kalimat = noAngkot < angkotBeroperasi ? `Ankkot no. ${noAngkot} milik Pak Dhika beroperasi dengan baik` : `Angkot no. ${noAngkot} milik Pak Dhika sedang rusak`;
    console.log(kalimat)
}

jumlahAngkot = 30;
angkotBeroperasi = 25;
noAngkot = 21;
for (noAngkot; noAngkot<=jumlahAngkot; noAngkot++) {
    if(noAngkot <= angkotBeroperasi && noAngkot !== 22) {
        console.log('Angkot no. ' +noAngkot+ ' milik Pak Dhika sedang beroperasi');
    } else if(noAngkot === 28) {
        console.log('Angkot no. ' +noAngkot+ ' sedang lembur');
    } else {
        console.log('angkot no. ' +noAngkot+ ' milik Pak Dhika sedang rusak');
    }
}

let angka = prompt('Masukkan angka:')
if(angka % 2 == 0) {
    alert(angka+ ' adalah bilangan genap');
} else if(angka % 2 == 1) {
    alert(angka+ ' adalah bilangan ganjil'); 
} else {
    alert('yang anda masukkan bukan angka');
}

let i=10;
for(i; i >= 0; i--) {
    if(i <=4) {
        console.log('ada ' +i);
    } else {
        console.log('hanya ' +i);
    }
}

let kelompok = 1;
let jumlahAnggota = 20;
let anggotaAktif = 12;
for(kelompok; kelompok <= jumlahAnggota; kelompok++) {
    if(kelompok <= anggotaAktif) {
        console.log('ada ' +kelompok+ ' anggota aktif');
    }else {
        console.log(kelompok+' AFK');
    }
}

// OBJECT
let tim = {};
tim['eropa'] = ['belgia', 'jerman', 'prancis'];
tim['amerika'] = ['uruguay', 'brazil', 'argentina'];
tim['asia'] = ['jepang', 'korea', 'singapore'];
delete tim['asia'][1];

console.table(tim);


let grup = {
    A: ['Spanyol', 'Maroko', 'Wales', 'Polandia'],
    B: ['Inggris', 'Swedia', 'Rusia', 'China'],
    C: ['Polandia', 'Ghana', 'Amerika', 'Swiss']
};
console.table(grup);
console.info(`Ada 4 negara di grup A yaitu ${grup.A}`);
console.info(`Ada 4 negara di grup B yaitu ${grup.B}`);
console.info(`Ada 4 negara di grup C yaitu ${grup.C}`);

// Membuat Object Angkot
function Angkot (sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
    
    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.penumpang.length === 0) {
            alert('Angkot Kosong!!');
            return false;
        }

        for(let i = 0; i < this.penumpang.length; i++) {
            if(this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return penumpang;
            }
        }
    }
}
let angkot1, angkot2;
angkot1 = new Angkot ('Guntur', ['Purwodadi', 'Malang'], [], 0);
angkot2 = new Angkot ('Mufida', ['Lawang', 'Arjosari'], [], 0);