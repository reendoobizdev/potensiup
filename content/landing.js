export const content = {
    info: "Ikuti Webinar PotensiUP, 30 Juli 2022 13:00 - 15:00 WIB",
    infoButton: "Registrasi Webinar",
    infoLink:"https://bit.ly/WebinarPotensiUp",
    register:"https://forms.gle/cV3aKmuPfX7s3Znm9",
    head:{
        title: "PotensiUp | Mencetak generasi siap kerja",
        meta:{
            content: "PotensiUp, program akselerasi untuk mempermudah para fresh graduate untuk mendapatkan pekerjaan pertama"
        }
    },
    hero:{
        title: "Siap kerja bersama",
        titleBrand: "PotensiUp",
        subtitle: "Ikuti latihan intensif singkat, dapatkan sertifikat dan nikmati pekerjaan pertamamu.",
        button: "Daftar Sekarang",
    },
    menu:{

    },
    program:{
        title: "Alur Program",
        steps:[
            {
                id: "prog1",
                title: "Pelatihan skill",
                icon: "FaChalkboardTeacher",
                content: [
                    "Peserta dapat mengakses materi di web",
                    "Peserta masuk ke grup diskusi",
                    "Sesi live dan tugas harian",
                    "Kuis di tiap akhir pekan",
                ],
                time: "3 Bulan",
                notes: "Opsional"
            },
            {
                id: "prog2",
                title: "Proyek akhir (sertifikasi)",
                icon: "FaGraduationCap",
                content: "Mengerjakan tugas akhir berupa proyek sederhana yang sering ditemukan dalam perusahaan. Sertifikat diberikan bagi mereka yang dapat mengerjakan tugas dengan baik.",
                time: "2-4 Minggu"
            },
            {
                id: "prog3",
                title: "Simulasi tes masuk kerja",
                icon: "FaEdit",
                content: "Mengerjakan contoh soal yang biasa keluar saat tes masuk kerja. Contoh soal disiapkan dari beberapa perusahaan terkenal baik startup maupun korporat.",
                time: "1 Minggu"
            },
            {
                id: "prog4",
                title: "Penyaluran kerja",
                icon: "FaBriefcase",
                content: "Tim PotensiUp membantu merekomendasikan peserta ke perusahaan.",
                time: "1-3 Bulan"
            }
        ]
    },
    pricing:[
        {
            title:"Paket Siap Kerja",
            features: [
                {
                    name: "Pelatihan skill",
                    active: false
                },
                {
                    name: "Proyek akhir (sertifikasi)",
                    active: true
                },
                {
                    name: "Simulasi tes masuk kerja",
                    active: true
                },
                {
                    name: "Penyaluran kerja",
                    active: true
                },
            ],
            priceAfter: "Rp 1.000.000"
        },
        {
            title:"Paket Intensif",
            features: [
                {
                    name: "Pelatihan skill",
                    active: true
                },
                {
                    name: "Proyek akhir (sertifikasi)",
                    active: true
                },
                {
                    name: "Simulasi tes masuk kerja",
                    active: true
                },
                {
                    name: "Penyaluran kerja",
                    active: true
                },
            ],
            priceBefore: "Rp 2.000.000"
        },
        {
            title:"Paket Beasiswa",
            condition: "Perlu mengikuti tes beasiswa",
            features: [
                {
                    name: "Pelatihan skill",
                    active: true
                },
                {
                    name: "Proyek akhir (sertifikasi)",
                    active: true
                },
                {
                    name: "Simulasi tes masuk kerja",
                    active: true
                },
                {
                    name: "Penyaluran kerja",
                    active: true
                },
            ],
            priceAfter: "Rp 1.000.000",
            priceConditionAfter: "Hanya saat diterima kerja"
        }
    ]
}