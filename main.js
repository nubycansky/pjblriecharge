(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        } 
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });


    // vegetable carousel
    $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    // Product Detail Page Script
    // Tambahkan kode ini ke file JS Anda (main.js)
    document.addEventListener("DOMContentLoaded", function() {
    // 1. Ambil ID dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    // 2. Data produk (contoh)
    const products = [
    // --- Cold-Pressed Juice (CPJ) - Semua Varian CPJ 250 ml, Harga Rp25.000 ---
    {
        id: "orangesunset",
        name: "Orange Sunset",
        category: "Cold-Pressed Juice",
        price: "Rp28.000",
        img: "asset/orangesunset.jpg",
        desc: "Perpaduan wortel, nanas, pir, timun, dan lemon dalam Orange Sunset menghadirkan kesegaran alami dengan rasa manis-asam yang menyehatkan.",
        bahan: "Wortel, nanas, pir, timun, lemon",
        longdesc: "Kemasan ukuran 250ml. Baik untuk kesehatan mata, melembabkan dan menjaga kulit tetap segar, mendukung kesehatan pencernaan, membantu meningkatkan sistem imun, mempercepat proses detoksifikasi alami tubuh, dan memberikan rasa segar yang menyenangkan (stress relief).",
        penyimpanan: "Hanya bertahan 2-3 hari di kulkas (chiller) dan 2-3 jam pada suhu ruangan. Dapat dibekukan di freezer dan dapat bertahan sampai 7 hari."
    },
    {
        id: "redmoon",
        name: "Red Moon",
        category: "Cold-Pressed Juice",
        price: "Rp28.000",
        img: "asset/Cold pressed juice/red moon 2.jpg",
        desc: "Perpaduan kaya antioksidan dari apel, beetroot, wortel, lemon, dan jahe.",
        bahan: "Apple, beetroot, carrot, lemon, ginger",
        longdesc: "Kemasan ukuran 250ml. Kaya antioksidan, baik untuk detoksifikasi tubuh, baik untuk meningkatkan Hb bagi bumil, mencegah kanker dan anemia, mengurangi lemas dan nyeri bagi yang sedang haid, menurunkan hipertensi dan kolestrol, meningkatkan energi dan imunitas, memperbaiki kesehatan mata, pencernaan dan jantung, serta menyegarkan kulit secara alami.",
        penyimpanan: "Hanya bertahan 2-3 hari di kulkas (chiller) dan 2-3 jam pada suhu ruangan. Dapat dibekukan di freezer dan dapat bertahan sampai 7 hari."
    },
    {
        id: "greenaurora",
        name: "Green Aurora",
        category: "Cold-Pressed Juice",
        price: "Rp28.000",
        img: "asset/greenaurora.jpg",
        desc: "Perpaduan pokcoy, apel, timun, lemon, mint, dan nanas untuk proses detoksifikasi dan hidrasi.",
        bahan: "Pokcoy, apple, cucumber, lemon, mint, pineapple",
        longdesc: "Kemasan ukuran 250ml. Membantu proses detoksifikasi, meningkatkan hidrasi tubuh, menjaga kesehatan tulang, membantu menurunkan berat badan, memperkuat imunitas, mendukung kesehatan pencernaan, serta memberikan kesegaran alami yang menenangkan.",
        penyimpanan: "Hanya bertahan 2-3 hari di kulkas (chiller) dan 2-3 jam pada suhu ruangan. Dapat dibekukan di freezer dan dapat bertahan sampai 7 hari."
    },
    {
        id: "yellowsunrise",
        name: "Yellow Sunrise",
        category: "Cold-Pressed Juice",
        price: "Rp28.000",
        img: "asset/Cold pressed juice/yellow sunrise 2.jpg",
        desc: "Perpaduan Jeruk Sunkist, lemon, nanas, dan mint yang menyegarkan untuk meningkatkan daya tahan tubuh.",
        bahan: "Orange Sunkist, Lemon, pineapple, mint",
        longdesc: "Kemasan ukuran 250ml. Meningkatkan daya tahan tubuh, mendukung proses detoksifikasi alami, memperbaiki kesehatan pencernaan, menjaga hidrasi tubuh, serta memberikan kesegaran alami sepanjang hari.",
        penyimpanan: "Hanya bertahan 2-3 hari di kulkas (chiller) dan 2-3 jam pada suhu ruangan. Dapat dibekukan di freezer dan dapat bertahan sampai 7 hari."
    },
    {
        id: "rainforest",
        name: "Rain Forest",
        category: "Cold-Pressed Juice",
        price: "Rp28.000",
        img: "asset/Cold pressed juice/RAin Forest.jpg",
        desc: "Perpaduan semangka, nanas, timun, dan mint untuk hidrasi dan kesegaran maksimal.",
        bahan: "Watermelon, pineapple, cucumber, mint",
        longdesc: "Kemasan ukuran 250ml. Menjaga hidrasi tubuh, mendukung kesehatan pencernaan, meningkatkan daya tahan tubuh, membantu detoksifikasi, serta memberikan kesegaran maksimal.",
        penyimpanan: "Hanya bertahan 2-3 hari di kulkas (chiller) dan 2-3 jam pada suhu ruangan. Dapat dibekukan di freezer dan dapat bertahan sampai 7 hari."
    },
    {
        id: "redearth",
        name: "Red Earth",
        category: "Cold-Pressed Juice",
        price: "Rp28.000",
        img: "asset/Cold pressed juice/Red Earth 2.jpg",
        desc: "Perpaduan apel, tomat, wortel, dan lemon yang bermanfaat untuk kesehatan reproduksi dan kulit.",
        bahan: "Apple, Tomato, Carrot, Lemon",
        longdesc: "Kemasan ukuran 250ml. Bermanfaat untuk kesehatan reproduksi, mencegah penuaan dini, mendukung kesehatan mata dan kulit, membantu proses detoksifikasi serta memperkuat imunitas tubuh secara alami.",
        penyimpanan: "Hanya bertahan 2-3 hari di kulkas (chiller) dan 2-3 jam pada suhu ruangan. Dapat dibekukan di freezer dan dapat bertahan sampai 7 hari."
    },
    {
        id: "celeryquake",
        name: "Celery Quake",
        category: "Cold-Pressed Juice",
        price: "Rp28.000",
        img: "asset/Cold pressed juice/Celery quake.jpg",
        desc: "Perpaduan celery stick, apel, nanas, lemon, dan jahe untuk membantu menurunkan tekanan darah dan kolesterol.",
        bahan: "Batang seleri, apel, nanas, lemon, jahe",
        longdesc: "Kemasan ukuran 250ml. Membantu menurunkan tekanan darah (hipertensi), mengurangi peradangan, meredakan jerawat, menurunkan kolestrol, mendukung proses detoksifikasi, meningkatkan kesehatan pencernaan, serta memperkuat kekebalan tubuh.",
        penyimpanan: "Hanya bertahan 2-3 hari di kulkas (chiller) dan 2-3 jam pada suhu ruangan. Dapat dibekukan di freezer dan dapat bertahan sampai 7 hari."
    },
    {
        id: "wildnature",
        name: "Wild Nature",
        category: "Cold-Pressed Juice",
        price: "Rp28.000",
        img: "asset/wildnature.jpg",
        desc: "Perpaduan kale, pir, nanas, bengkoang, lemon, dan jahe yang kaya antioksidan.",
        bahan: "Kale, pear, pineapple, bengkoang, lemon, ginger",
        longdesc: "Kemasan ukuran 250ml. Kaya akan antioksidan, menjaga hidrasi dan elastisitas kulit, memperkuat sistem kekebalan tubuh, mendukung proses detoksifikasi alami, meningkatkan kesehatan pencernaan, serta memberikan energi dan kesegaran alami.",
        penyimpanan: "Hanya bertahan 2-3 hari di kulkas (chiller) dan 2-3 jam pada suhu ruangan. Dapat dibekukan di freezer dan dapat bertahan sampai 7 hari."
    },

    // --- Fitshot (Wellness Shot) - Semua Varian Fitshot 60 ml, Dijual Paket Isi 4 Botol Rp50.000 ---
    {
        id: "yellowturmeric",
        name: "Yellow Turmeric",
        category: "Fitshot (Wellness Shot)",
        price: "Rp50.000 (Paket 4 botol)",
        img: "asset/Fitshot yellow turmenic.jpg",
        desc: "Shot kunyit, jahe, buah, dan rempah untuk dorongan cepat menjaga imun tubuh.",
        bahan: "Turmeric, Ginger, Pear, pineapple, lemon, cayenne, black pepper",
        longdesc: "Pembelian per 4 pcs, tulis kombinasi varian yang diinginkan di catatan. Kemasan ukuran 60ml. Meningkatkan daya tahan/imunitas tubuh; Meringankan gejala flu, batuk, sakit tenggorokan; Melancarkan metabolisme pada tubuh; Meredakan peradangan kulit wajah dan organ dalam tubuh.",
        penyimpanan: "Dapat bertahan 5-7 hari di kulkas. Didesain untuk sekali minum."
    },
    {
        id: "redbeetshot",
        name: "Red Beet",
        category: "Fitshot (Wellness Shot)",
        price: "Rp50.000 (Paket 4 botol)",
        img: "asset/FitShot/Fitshot red beet.jpg",
        desc: "Shot bit, jahe, kencur, apel, jeruk nipis, dan lemon untuk dorongan cepat menjaga imun tubuh.",
        bahan: "Bit, jahe, kencur, apel, jeruk nipis, lemon",
        longdesc: "Pembelian per 4 pcs, tulis kombinasi varian yang diinginkan di catatan. Kemasan ukuran 60ml. Meningkatkan daya tahan/imunitas tubuh; Meringankan gejala flu, batuk, sakit tenggorokan; Melancarkan metabolisme pada tubuh; Meredakan peradangan kulit wajah dan organ dalam tubuh.",
        penyimpanan: "Dapat bertahan 5-7 hari di kulkas. Didesain untuk sekali minum."
    },
    {
        id: "greenceleryshot",
        name: "Green Celery",
        category: "Fitshot (Wellness Shot)",
        price: "Rp50.000 (Paket 4 botol)",
        img: "asset/FitShot/Fitshot Green Calory.jpg",
        desc: "Shot kale, seledri, apel, nanas, lemon, dan jahe untuk dorongan cepat menjaga imun tubuh.",
        bahan: "Kale, seledri, apel, nanas, lemon, jahe",
        longdesc: "Kemasan ukuran 60ml. Meningkatkan daya tahan/imunitas tubuh; Meringankan gejala flu, batuk, sakit tenggorokan; Melancarkan metabolisme pada tubuh; Meredakan peradangan kulit wajah dan organ dalam tubuh.",
        penyimpanan: "Dapat bertahan 5-7 hari di kulkas. Didesain untuk sekali minum."
    },
    {
        id: "orangecarrotshot",
        name: "Orange Carrot",
        category: "Fitshot (Wellness Shot)",
        price: "Rp50.000 (Paket 4 botol)",
        img: "asset/orangecarrot.jpg",
        desc: "Shot wortel, sunkist, timun, kunyit, lemon, dan lada hitam untuk dorongan cepat menjaga imun tubuh.",
        bahan: "Wortel, sunkist, timun, kunyit, lemon, lada hitam",
        longdesc: "Pembelian per 4 pcs, tulis kombinasi varian yang diinginkan di catatan. Kemasan ukuran 60ml. Meningkatkan daya tahan/imunitas tubuh; Meringankan gejala flu, batuk, sakit tenggorokan; Melancarkan metabolisme pada tubuh; Meredakan peradangan kulit wajah dan organ dalam tubuh.",
        penyimpanan: "Dapat bertahan 5-7 hari di kulkas. Didesain untuk sekali minum."
    },

    // --- Asinan/Rujak - Semua Varian dikemas dalam jar 600 ml, Harga Rp40.000 ---
    {
        id: "rujakkweni",
        name: "Rujak Kweni",
        category: "Asinan/Rujak",
        price: "Rp40.000",
        img: "asset/rujakkweni.jpg",
        desc: "Campuran buah-buahan segar dengan kuah cabai kental merah merona dan sari lemon impor.",
        bahan: "Mangga (musiman), kedondong, bengkoang, jambu kristal, salak pondoh, nanas, anggur merah, anggur hijau, delima merah, kuah cabai kental dengan sari lemon impor.",
        longdesc: "Cemilan enak berbahan dasar buah berkualitas yang memberikan kesegaran bernutrisi.",
        penyimpanan: "Simpan di dalam kulkas, sajikan dingin lebih nikmat. Bertahan 3-5 hari di kulkas."
    },
    {
        id: "asinanbuahkuahlemon",
        name: "Asinan Buah Kuah Lemon",
        category: "Asinan/Rujak",
        price: "Rp40.000",
        img: "asset/asinankuahlemon.jpg",
        desc: "Campuran buah-buahan segar dengan kuah kental jus mangga kweni yang telah dibumbui.",
        bahan: "Mangga (musiman), kedondong, pepaya, belimbing, bengkoang, jambu citra, nanas, manisan kolang kaling telang, dipadu dengan kuah kental jus mangga kweni yang telah dibumbui.",
        longdesc: "Cemilan enak berbahan dasar buah berkualitas yang memberikan kesegaran bernutrisi.",
        penyimpanan: "Simpan di dalam kulkas, sajikan dingin lebih nikmat. Bertahan 3-5 hari di kulkas."
    },
    {
        id: "asinankiamboysonkit",
        name: "Asinan Kiamboy Sonkit",
        category: "Asinan/Rujak",
        price: "Rp40.000",
        img: "asset/kiamboysonkit.jpg",
        desc: "Campuran buah-buahan segar dengan kuah putih manis asam asin khas manisan kiamboy dan kesegaran jeruk sonkit.",
        bahan: "Mangga, kedondong, bengkoang, kelengkeng, rambutan (musiman), salak pondoh, anggur hijau, potongan jeruk sonkit, dan manisan kiamboy. Kuah putih manis asam asin khas manisan kiamboy dengan kesegaran sari buah jeruk sonkit, dan potongan cabai rawit merah.",
        longdesc: "Cemilan enak berbahan dasar buah berkualitas yang memberikan kesegaran bernutrisi.",
        penyimpanan: "Simpan di dalam kulkas, sajikan dingin lebih nikmat. Bertahan 3-5 hari di kulkas."
    },
    {
        id: "ximilu",
        name: "Ximilu",
        category: "Lainnya",
        price: "Rp40.000",
        img: "asset/ximilu.jpg",
        desc: "Ximilu adalah dessert segar laktosa-free ala Hong Kong, menggunakan FiberCreme untuk rasa creamy yang sehat, kaya serat, dan berisi aneka buah segar serta chiaseed.",
        bahan: "Stroberi, apel, jeruk mandarin, kelengkeng, anggur, chia seed, dan agar-agar.",
        longdesc: "Kemasan ukuran 600ml. Ximilu adalah dessert segar laktosa-free ala Hong Kong, menggunakan FiberCreme sebagai pengganti susu untuk menghasilkan rasa creamy yang sehat dan tinggi serat. Aman bagi penderita intoleransi laktosa dan mendukung diet, dessert ini diperkaya dengan aneka buah segar (seperti stroberi, apel, dan anggur), serutan agar-agar, serta taburan superfood chiaseed, menjadikannya pilihan yang kaya vitamin dan baik untuk melancarkan pencernaan.",
        penyimpanan: "Simpan di dalam kulkas, sajikan dingin lebih nikmat. Bertahan 3-5 hari di kulkas."
    }
];

    /// 1. Cek apakah ID berhasil diambil
    
    console.log("ID yang diambil dari URL:", id); // CEK INI!

// 3. Cari produk berdasarkan id
    const product = products.find(p => p.id === id);

// 4. Cek apakah produk ditemukan
    console.log("Produk ditemukan:", product); // CEK INI!

    // 4. Masukkan data ke HTML
    if (product) {
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-category").textContent = product.category;
        document.getElementById("product-price").textContent = product.price;
        document.getElementById("product-description").textContent = product.desc;
        document.getElementById("product-bahan").textContent = product.bahan; 
        document.getElementById("product-longdescription").textContent = product.longdesc;
        document.getElementById("product-penyimpanan").textContent = product.penyimpanan;
        document.getElementById("product-image").src = product.img;
        document.getElementById("product-image").alt = product.name;
    }
});

// --- MOCK DATABASE DATA (Ganti dengan data asli Anda) ---
    const testimonialsData = [
        { text: "Produk Rie.charge sangat berkualitas dan membantu kesehatan keluarga saya. Sangat recommended! Keluarga saya jadi lebih sehat setelah rutin mengonsumsi produk dari Rie.charge.", client: "Siti Nurhaliza", location: "Bogor", rating: 5 },
        { text: "Jus cold-pressednya segar sekali, terasa seperti baru diperas. Sempurna untuk memulai hari!", client: "Ahmad Rizky", location: "Jakarta", rating: 5 },
        { text: "Ximilu laktosa-free adalah penemuan terbaik! Rasa creamy-nya pas dan aman buat perut. Akan pesan lagi.", client: "Maya Sari", location: "Depok", rating: 4 },
        { text: "Fitshot-nya benar-benar memberikan energi instan. Ukuran pas untuk dibawa bepergian. Bintang 5!", client: "Budi Santoso", location: "Bekasi", rating: 5 },
        { text: "Awalnya ragu, tapi asinan buahnya pedas manisnya balance banget. Kualitas buahnya premium.", client: "Tia Agustina", location: "Bandung", rating: "5" },
        { text: "Pengiriman cepat dan packaging sangat rapi. Produk jus tidak ada yang tumpah, sangat profesional.", client: "Faisal Rahman", location: "Bogor", rating: 4 },
        
        // Data Halaman 2
        { text: "Setelah konsumsi rutin 1 bulan, badan terasa lebih ringan. Recomended untuk detox!", client: "Dewi Puspita", location: "Jakarta", rating: 5 },
        { text: "Pesan Ximilu untuk acara keluarga, semua suka! Rasa segarnya beda dari es buah biasa.", client: "Hendra Wijaya", location: "Depok", rating: 5 },
        { text: "Ada satu botol jus yang terasa kurang manis, mungkin harus lebih konsisten rasanya.", client: "Kevin Lee", location: "Tangerang", rating: 3 },
        { text: "Layanan pelanggan sangat responsif. Produk datang sesuai pesanan dan masih dingin.", client: "Nur Lela", location: "Bogor", rating: 5 },
        { text: "Harga cukup premium, tapi sebanding dengan kualitas bahan baku yang digunakan.", client: "Rio Saputra", location: "Jakarta", rating: 4 },
        { text: "Asinan buahnya porsi besar, bisa untuk sharing. Sambalnya nendang!", client: "Windy A.", location: "Bekasi", rating: 5 },
        
         { text: "Setelah konsumsi rutin 1 bulan, badan terasa lebih ringan. Recomended untuk detox!", client: "Dewi Puspita", location: "Jakarta", rating: 5 },
        { text: "Pesan Ximilu untuk acara keluarga, semua suka! Rasa segarnya beda dari es buah biasa.", client: "Hendra Wijaya", location: "Depok", rating: 5 },
        { text: "Ada satu botol jus yang terasa kurang manis, mungkin harus lebih konsisten rasanya.", client: "Kevin Lee", location: "Tangerang", rating: 3 },
        { text: "Layanan pelanggan sangat responsif. Produk datang sesuai pesanan dan masih dingin.", client: "Nur Lela", location: "Bogor", rating: 5 },
        { text: "Harga cukup premium, tapi sebanding dengan kualitas bahan baku yang digunakan.", client: "Rio Saputra", location: "Jakarta", rating: 4 },
        { text: "Asinan buahnya porsi besar, bisa untuk sharing. Sambalnya nendang!", client: "Windy A.", location: "Bekasi", rating: 5 }
        // Tambahkan lebih banyak data di sini
    ];

    const itemsPerPage = 6; // Menampilkan 6 testimoni per halaman
    let currentPage = 1;

    const testimonialGrid = document.getElementById('testimonial-grid');
    const paginationControls = document.getElementById('pagination-controls');

    // Fungsi untuk membuat bintang rating
    function createRatingStars(rating) {
        let starsHtml = '';
        const maxRating = 5;
        const fullStarIcon = '<i class="fas fa-star"></i>';
        const emptyStarIcon = '<i class="fas fa-star text-light"></i>'; // Atau kelas lain untuk bintang kosong

        for (let i = 0; i < maxRating; i++) {
            if (i < rating) {
                starsHtml += fullStarIcon;
            } else {
                // Asumsi bintang kosong menggunakan warna yang lebih terang/muted
                starsHtml += emptyStarIcon;
            }
        }
        return `<div class="d-flex text-primary mb-2">${starsHtml}</div>`;
    }

    // Fungsi untuk menampilkan testimoni di halaman yang dipilih
    function renderTestimonials(page) {
        testimonialGrid.innerHTML = ''; // Kosongkan grid sebelum mengisi ulang

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageData = testimonialsData.slice(start, end);

        pageData.forEach(item => {
            const ratingStars = createRatingStars(item.rating);
            
            const itemHtml = `
                <div class="col-md-6 col-lg-4">
                    <div class="testimonial-item bg-white rounded p-4 shadow-sm border border-light"> 
                        <div class="d-flex flex-column">
                            ${ratingStars}
                            <p class="mb-4">
                                "${item.text}"
                            </p>
                            <div class="d-flex align-items-center">
                                <i class="fas fa-user-circle fa-2x text-secondary me-2"></i>
                                <div>
                                    <h6 class="text-dark mb-0">${item.client}</h6>
                                    <small class="text-muted">${item.location}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            testimonialGrid.innerHTML += itemHtml;
        });
        
        // Setelah merender testimoni, render kontrol pagination
        renderPaginationControls();
    }

    // Fungsi untuk membuat kontrol pagination
    function renderPaginationControls() {
        paginationControls.innerHTML = '';
        const pageCount = Math.ceil(testimonialsData.length / itemsPerPage);

        // Tombol Previous
        const prevDisabled = currentPage === 1 ? 'disabled' : '';
        paginationControls.innerHTML += `
            <li class="page-item ${prevDisabled}">
                <a class="page-link" href="#" onclick="changePage(event, ${currentPage - 1})" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
        `;

        // Tombol Angka Halaman
        for (let i = 1; i <= pageCount; i++) {
            const activeClass = i === currentPage ? 'active' : '';
            paginationControls.innerHTML += `
                <li class="page-item ${activeClass}">
                    <a class="page-link" href="#" onclick="changePage(event, ${i})">${i}</a>
                </li>
            `;
        }

        // Tombol Next
        const nextDisabled = currentPage === pageCount ? 'disabled' : '';
        paginationControls.innerHTML += `
            <li class="page-item ${nextDisabled}">
                <a class="page-link" href="#" onclick="changePage(event, ${currentPage + 1})" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        `;
    }

    // Fungsi global untuk mengubah halaman saat tombol diklik
    window.changePage = function(event, newPage) {
        event.preventDefault();
        const pageCount = Math.ceil(testimonialsData.length / itemsPerPage);

        if (newPage >= 1 && newPage <= pageCount) {
            currentPage = newPage;
            renderTestimonials(currentPage);
            // Opsional: Scroll ke atas halaman setelah ganti halaman
            // window.scrollTo(0, 0); 
        }
    }

    // Inisialisasi: Render halaman pertama saat halaman dimuat
    document.addEventListener('DOMContentLoaded', () => {
        renderTestimonials(currentPage);
    });

})(jQuery);

