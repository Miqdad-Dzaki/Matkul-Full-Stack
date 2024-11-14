/* Kita akan mencoba menggunakan vanilla js (bukan jQuery) */

// Mengelola dropdown agar terbuka saat di-hover dan tertutup saat kursor keluar
const dropdownHover = document.getElementById("dropdownHover");
const dropdownMenu = document.getElementById("dropdownMenu");

// Tampilkan dropdown saat kursor diarahkan
dropdownHover.addEventListener("mouseover", function () {
    dropdownMenu.classList.add("show");
});

// Sembunyikan dropdown saat kursor keluar
dropdownHover.addEventListener("mouseleave", function () {
    dropdownMenu.classList.remove("show");
});

// card slider
const scrollLeftButton = document.getElementById('scrollleft');
const scrollRightButton = document.getElementById('scrollright');
const listboxWrapper = document.querySelector('.listbox-wrapper');
const items = document.querySelectorAll('.list-item');
// Tentukan lebar tiap item dan total jumlah item
const itemWidth = items[0].offsetWidth;
const totalItems = items.length;
let scrollPosition = itemWidth; // Mulai setelah item terakhir yang di-clone
// Clone item pertama dan terakhir
const firstClone = items[0].cloneNode(true);
const lastClone = items[totalItems - 1].cloneNode(true);
// Tambahkan item yang di-clone ke awal dan akhir wrapper
listboxWrapper.appendChild(firstClone);
listboxWrapper.insertBefore(lastClone, items[0]);
// Atur posisi awal di item pertama yang asli
listboxWrapper.style.transform = `translateX(-${scrollPosition}px)`;

// Fungsi untuk scroll ke kiri
scrollLeftButton.addEventListener('click', () => {
    scrollPosition -= itemWidth;
    listboxWrapper.style.transition = 'transform 0.5s ease';
    listboxWrapper.style.transform = `translateX(-${scrollPosition}px)`;
    // Jika mencapai item terakhir yang di-clone, reset ke item asli terakhir
    if (scrollPosition <= 0) {
        setTimeout(() => {
            listboxWrapper.style.transition = 'none';
            scrollPosition = totalItems * itemWidth;
            listboxWrapper.style.transform = `translateX(-${scrollPosition}px)`;
        }, 100); // Penundaan sesuai durasi transisi
    }
});

// Fungsi untuk scroll ke kanan
scrollRightButton.addEventListener('click', () => {
    scrollPosition += itemWidth;
    listboxWrapper.style.transition = 'transform 0.5s ease';
    listboxWrapper.style.transform = `translateX(-${scrollPosition}px)`;
    // Jika mencapai item pertama yang di-clone, reset ke item asli pertama
    if (scrollPosition >= (totalItems + 1) * itemWidth) {
        setTimeout(() => {
            listboxWrapper.style.transition = 'none';
            scrollPosition = itemWidth;
            listboxWrapper.style.transform = `translateX(-${scrollPosition}px)`;
        }, 100); // Penundaan sesuai durasi transisi
    }
});

// form listener
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const subscribe = document.getElementById('subscribe').checked;
    // Lanjutkan dengan logika penanganan formulir
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Subscribe:', subscribe);
    /// Reset the form fields
    form.reset();
});

// sweetalert2 checkbox
const subscribe = document.getElementById('subscribe');
subscribe.addEventListener('click', () => {
    const isSubscribed = subscribe.checked;

    Swal.fire({
        title: 'Are you sure?',
        text: 'You want to submit the form and subscribe to the newsletter?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit it!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Mengubah status checkbox menjadi sesuai dengan hasil konfirmasi
            subscribe.checked = isSubscribed;

            Swal.fire({
                title: 'Submitted!',
                text: `You ${subscribe.checked ? 'have' : 'have not'} subscribed to the newsletter.`,
                icon: 'success'
            });

            // Lanjutkan dengan logika penanganan formulir
            console.log('Email:', 'example@example.com');
            console.log('Message:', 'This is a test message.');
            console.log('Subscribe:', subscribe.checked);
        } else {
            // Jika dibatalkan, kembalikan checkbox ke status awal
            subscribe.checked = !isSubscribed;
        }
    });
});

// sweetalert2 submit button
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Validasi form
    if (!email || !message) {
        Swal.fire({
            title: 'Oops!',
            text: 'Please fill in all the required fields.',
            icon: 'error'
        });
        return;
    }

    Swal.fire({
        title: 'Are you sure?',
        text: 'You want to submit the form ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Submitted!',
                text: `You ${subscribe ? 'have' : 'have not'} submit form.`,
                icon: 'success'
            });
            // Lanjutkan dengan logika penanganan formulir
            console.log('Email:', email);
            console.log('Message:', message);
            console.log('subscribe:', subscribe);

            // Reset the form fields
            form.reset();
        } else {
            // Jika dibatalkan, kembalikan checkbox ke status awal
            document.getElementById('subscribe').checked = subscribe;
        }
    });
});

// footer
// Get all the tab links
const tabLinks = document.querySelectorAll('#footer-tabs .nav-link');
// Get all the tab content divs
const tabContents = document.querySelectorAll('#footer-tabs-content .tab-pane');

// Add click event listener to each tab link
tabLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        // Remove active class from all tab links and tab content
        tabLinks.forEach(l => l.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('show', 'active'));

        // Add active class to the clicked tab link and its corresponding tab content
        link.classList.add('active');
        tabContents[index].classList.add('show', 'active');
    });
});