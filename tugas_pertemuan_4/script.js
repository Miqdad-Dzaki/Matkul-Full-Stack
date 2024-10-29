// Ambil elemen header
const header = document.querySelector('header');
const sticky = header.offsetTop + 300;

console.log("Header loaded. Offset:", sticky); // Cek apakah header terdeteksi

// Fungsi untuk menambahkan atau menghapus kelas sticky
function stickyHeader() {
    console.log("Scroll position:", window.pageYOffset); // Log posisi scroll

    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Panggil fungsi stickyHeader saat pengguna menggulir
window.onscroll = function() {
    stickyHeader();
};
