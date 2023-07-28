// PENGATURAN

const dataUser = [
    {
        "nama": "Afryan Dwi Renaldi Putra",
        "foto": "afryan.jpg",
        "ig": "none"
    },
    {
        "nama": "Ahmad Permadi",
        "foto": "permadi.jpg",
        "ig": "none"
    },
    {
        "nama": "Alga Revansa",
        "foto": "alga.jpg",
        "ig": "none"
    },
    {
        "nama": "Anisa Septiana",
        "foto": "anisa.jpg",
        "ig": "none"
    },
    {
        "nama": "Bayu Dwi Afandi",
        "foto": "bayu.jpg",
        "ig": "none"
    },
    {
        "nama": "Bimantara Putra Purnama Ardy",
        "foto": "bimantara.jpg",
        "ig": "none"
    },
    {
        "nama": "Dhany Fahrudiansyah",
        "foto": "dhany.jpg",
        "ig": "none"
    },
    {
        "nama": "Distyana Resti Anggraini",
        "foto": "distyana.jpg",
        "ig": "none"
    },
    {
        "nama": "Elvista Bintang Falentino",
        "foto": "elvista.jpg",
        "ig": "none"
    },
    {
        "nama": "Firda Riky Febrian",
        "foto": "firda.jpg",
        "ig": "none"
    },
    {
        "nama": "Gallinggar Ndarudjati",
        "foto": "gallinggar.jpg",
        "ig": "none"
    },
    {
        "nama": "Gloryan Noval",
        "foto": "gloryan.jpg",
        "ig": "none"
    },
    {
        "nama": "Kafu Idza Putra",
        "foto": "kafu.jpg",
        "ig": "none"
    },
    {
        "nama": "Khoirmia Midayati",
        "foto": "khoirmia.jpg",
        "ig": "none"
    },
    {
        "nama": "Lilih Wibowo",
        "foto": "wibowo.jpg",
        "ig": "none"
    },
    {
        "nama": "Muhammad Irwin Ardiansyah",
        "foto": "irwin.jpg",
        "ig": "none"
    },
    {
        "nama": "Melandri Ilhada Setiawan",
        "foto": "melandri.jpeg",
        "ig": "none"
    },
    {
        "nama": "Muhammad Bryan Suryangga",
        "foto": "bryan.jpg",
        "ig": "none"
    },
    {
        "nama": "Muhammad Den Bagus Pamungkas",
        "foto": "bagus.jpg",
        "ig": "none"
    },
    {
        "nama": "Muhammad Muchlas Abdulloh",
        "foto": "muchlas.jpg",
        "ig": "none"
    },
    {
        "nama": "Muhammad Sigid Febriansyah",
        "foto": "sigid.jpg",
        "ig": "none"
    },
    {
        "nama": "Nathan Teddi Raharjo",
        "foto": "nathan.jpg",
        "ig": "none"
    },
    {
        "nama": "Nauval Maulana Choiri",
        "foto": "nauval.jpg",
        "ig": "none"
    },
    {
        "nama": "Noviandra Achmadienata Brilliant Tsany Utomo",
        "foto": "noviandra.jpg",
        "ig": "none"
    },
    {
        "nama": "Nur Laili Niswatul Khasanah",
        "foto": "laili.jpg",
        "ig": "none"
    },
    {
        "nama": "Prayoga Hafizzi",
        "foto": "prayoga.jpg",
        "ig": "none"
    },
    {
        "nama": "Rehan Agus Dwi Cahyono",
        "foto": "rehan.jpg",
        "ig": "none"
    },
    {
        "nama": "Reyhan Arsa Mulia Gutama",
        "foto": "reyhan.jpg",
        "ig": "none"
    },
    {
        "nama": "Rifka Indah Mawarni",
        "foto": "rifka.jpg",
        "ig": "none"
    },
    {
        "nama": "Rio Dian Pratama",
        "foto": "rio.jpg",
        "ig": "none"
    },
    {
        "nama": "Saldin Rafa Nurlaily",
        "foto": "saldin.jpg",
        "ig": "none"
    },
    {
        "nama": "Steven Rendhy Caprio",
        "foto": "steven.jpg",
        "ig": "none"
    },
    {
        "nama": "Yusuf Alan Nurwachid",
        "foto": "yusuf.jpg",
        "ig": "none"
    },
    {
        "nama": "Zurufin Rizka Rahayu",
        "foto": "zurufin.jpg",
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
                                    <img style="border-radius: 5px;" src="images/tkj1/${v.foto}" width="100">
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