const namaSaya = "Husein";
let usia = 32;

let biodata = document.getElementById('biodata');
console.log(biodata)

function generateBiodata() {
    let generasi
    if (usia < 10) {
        generasi = 'anda anak anak'
    } else if (usia > 10 && usia < 21) {
        generasi = 'remaja'
    } else if (usia > 21 && usia < 30) {
        generasi = 'dewasa'
    }
    else {
        generasi = 'kolot bedegong'
    }
    return biodata.innerHTML = generasi
}

console.log(`nama saya adalah ${namaSaya} dan usia saya ${usia} tahun`)
console.log(namaSaya);
console.log(usia);

generateBiodata(); 