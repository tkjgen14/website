// PENGATURAN

const dataUser = [
    {
        "nama": "Achmad Akmal Dimyati",
        "foto": "no-profil.jpeg",
        "ig": "none"
    },
    {
        "nama": "Agus Isya Maksun",
        "foto": "agus.jpg",
        "ig": "none"
    },
    {
        "nama": "Aldhino Trianoval Putra Askani",
        "foto": "aldhino.jpg",
        "ig": "none"
    },
    {
        "nama": "Alfi Nur Riansyah",
        "foto": "alfi.jpg",
        "ig": "none"
    },
    {
        "nama": "Alviona Gista Jhonwinata",
        "foto": "alviona.jpg",
        "ig": "none"
    },
    {
        "nama": "Anggista Putri Kinanti",
        "foto": "anggista.jpg",
        "ig": "none"
    },
    {
        "nama": "Ardhi Nugroho",
        "foto": "ardhi.jpg",
        "ig": "none"
    },
    {
        "nama": "Bayu Rahmad Baihaqi",
        "foto": "bayu.jpg",
        "ig": "none"
    },
    {
        "nama": "Daysyani Sophi Masayu",
        "foto": "daysyani.jpg",
        "ig": "none"
    },
    {
        "nama": "Deva Stiya Nugroho",
        "foto": "deva.jpg",
        "ig": "none"
    },
    {
        "nama": "Dicky Indrasta Saputra",
        "foto": "dicky.jpg",
        "ig": "none"
    },
    {
        "nama": "Dimas Wahyu Ramadhan",
        "foto": "dimas.jpg",
        "ig": "none"
    },
    {
        "nama": "Eka Nova Andrianto",
        "foto": "no-profil.jpeg",
        "ig": "none"
    },
    {
        "nama": "Geri Dena Alfiana",
        "foto": "geri.jpg",
        "ig": "none"
    },
    {
        "nama": "Hilda Shintia Mustika Sari",
        "foto": "hilda.jpg",
        "ig": "none"
    },
    {
        "nama": "Laila Rochmatu Maghfiroh",
        "foto": "laila.jpg",
        "ig": "none"
    },
    {
        "nama": "Lintang Nasywa Shofa Maharani",
        "foto": "lintang.jpg",
        "ig": "none"
    },
    {
        "nama": "Ma'ripah Habibaturrohmah",
        "foto": "no-profil.jpeg",
        "ig": "none"
    },
    {
        "nama": "Mayzhaqi Vaganza",
        "foto": "mayzhaqi.jpg",
        "ig": "none"
    },
    {
        "nama": "Mochammad Faza Riski Azizi",
        "foto": "no-profil.jpeg",
        "ig": "none"
    },
    {
        "nama": "Muhammad Hafizh Hasyim",
        "foto": "hafizh.jpg",
        "ig": "none"
    },
    {
        "nama": "Muhammad Samsul Munir",
        "foto": "no-profil.jpeg",
        "ig": "none"
    },
    {
        "nama": "Nando Kurniawan",
        "foto": "nando.jpg",
        "ig": "none"
    },
    {
        "nama": "Nova Widiati",
        "foto": "nova.jpg",
        "ig": "none"
    },
    {
        "nama": "Nugroho Pandu Prabowo",
        "foto": "pandu.jpg",
        "ig": "none"
    },
    {
        "nama": "Panji Angga Saputra",
        "foto": "panji.jpg",
        "ig": "none"
    },
    {
        "nama": "Raihan Arvin Bahtiar",
        "foto": "raihan arvin.jpeg",
        "ig": "none"
    },
    {
        "nama": "Rangga Wahyuda Kusuma",
        "foto": "rangga.jpg",
        "ig": "none"
    },
    {
        "nama": "Rayhan Ardiansyah",
        "foto": "no-profil.jpeg",
        "ig": "none"
    },
    {
        "nama": "Revaldy Fradekta Sriyono Putra",
        "foto": "no-profil.jpeg",
        "ig": "none"
    },
    {
        "nama": "Ridwan Galuh Dwi Cahyono",
        "foto": "galuh.jpg",
        "ig": "none"
    },
    {
        "nama": "Riko Bimanda Maulana",
        "foto": "riko.jpg",
        "ig": "none"
    },
    {
        "nama": "Roy Ardhy Bagus Prayoga",
        "foto": "no-profil.jpeg",
        "ig": "none"
    },
    {
        "nama": "Setella Yoga Paradygma",
        "foto": "yoga.jpg",
        "ig": "none"
    },
    {
        "nama": "Vicky Leo Cahyo Putro",
        "foto": "vicky.jpg",
        "ig": "none"
    },
]


loopData(dataUser)
function loopData(data) {
    $.each(data, function (i, v) {
        $("#dataAPP").append(`
        <div class="accordions my-shadow borad-5 mb-3">
                    <div class="accordions-item borad-5">
                        <div class="accordions-item-header p-3" style="border-radius: 5px 5px 0 0;">
                            <div class="d-flex justify-content-between align-items-center">
                                <p class="f-18 fwb-6" style="color:#000000">${v.nama}</p>
                                <div class="d-flex align-items-center">
                                    <p class="f-16" style="color:#023385">Detail</p>
                                    <p class="f-16 ms-1" style="color:#023385"><i class="fa-solid fa-chevron-right"></i></p>
                                </div>
                            </div>
                        </div>
                        <div class="accordions-item-body"
                            style="border-top: 1px solid #ededed; border-radius: 0 0 5px 5px">
                            <div class="accordions-item-body-content p-3">
                                <div class="d-flex justify-content-between align-items-center">
                                    <img style="border-radius: 5px;" src="images/tkj2/${v.foto}" width="100">
                                    <div class="ms-4 w-100">
                                        <p class="fwb-6 f-18" style="color:#023385">${v.nama}</p>
                                        <p class="fwb-5 f-14 mt-3">Instagram :</p>
                                        <a target="_blank" href="https://instagram.com/${v.ig}">
                                        <p class="fwb-6 f-16" style="color:#023385">@${v.ig}</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `)
    })

}

const accordionItemHeaders = document.querySelectorAll(".accordions-item-header");
accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});