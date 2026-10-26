/** Data master wilayah (prototipe: 8 provinsi, 18 kota, 54 kecamatan). */

/* ==============================================================
   1. DATA MASTER WILAYAH SE-INDONESIA (PROVINSI -> KOTA -> KECAMATAN)
   ============================================================== */
const INDONESIA_REGIONS = [
    {
        province: "DKI Jakarta",
        cities: [
            {
                name: "Jakarta Selatan",
                lat: -6.2615, lng: 106.8106,
                districts: [
                    { name: "Kebayoran Baru", lat: -6.2444, lng: 106.7997 },
                    { name: "Tebet", lat: -6.2289, lng: 106.8575 },
                    { name: "Cilandak", lat: -6.2922, lng: 106.7972 },
                    { name: "Pasar Minggu", lat: -6.2891, lng: 106.8415 }
                ]
            },
            {
                name: "Jakarta Pusat",
                lat: -6.1805, lng: 106.8284,
                districts: [
                    { name: "Gambir", lat: -6.1754, lng: 106.8272 },
                    { name: "Menteng", lat: -6.1963, lng: 106.8335 },
                    { name: "Tanah Abang", lat: -6.1944, lng: 106.8145 }
                ]
            },
            {
                name: "Jakarta Timur",
                lat: -6.2250, lng: 106.9004,
                districts: [
                    { name: "Kramat Jati", lat: -6.2755, lng: 106.8689 },
                    { name: "Jatinegara", lat: -6.2301, lng: 106.8722 },
                    { name: "Duren Sawit", lat: -6.2343, lng: 106.9152 }
                ]
            },
            {
                name: "Jakarta Barat",
                lat: -6.1683, lng: 106.7589,
                districts: [
                    { name: "Kebon Jeruk", lat: -6.1915, lng: 106.7725 },
                    { name: "Grogol Petamburan", lat: -6.1622, lng: 106.7915 }
                ]
            },
            {
                name: "Jakarta Utara",
                lat: -6.1384, lng: 106.8640,
                districts: [
                    { name: "Kelapa Gading", lat: -6.1583, lng: 106.9083 },
                    { name: "Tanjung Priok", lat: -6.1264, lng: 106.8833 }
                ]
            }
        ]
    },
    {
        province: "Jawa Barat",
        cities: [
            {
                name: "Kota Bandung",
                lat: -6.9175, lng: 107.6191,
                districts: [
                    { name: "Coblong", lat: -6.8872, lng: 107.6156 },
                    { name: "Sukajadi", lat: -6.8892, lng: 107.5925 },
                    { name: "Cicendo", lat: -6.9069, lng: 107.5922 },
                    { name: "Lengkong", lat: -6.9317, lng: 107.6256 }
                ]
            },
            {
                name: "Kota Bogor",
                lat: -6.5971, lng: 106.8060,
                districts: [
                    { name: "Bogor Tengah", lat: -6.5950, lng: 106.7972 },
                    { name: "Bogor Selatan", lat: -6.6342, lng: 106.8089 },
                    { name: "Bogor Timur", lat: -6.6083, lng: 106.8222 }
                ]
            },
            {
                name: "Kota Depok",
                lat: -6.4025, lng: 106.7942,
                districts: [
                    { name: "Pancoran Mas", lat: -6.3986, lng: 106.8122 },
                    { name: "Beji", lat: -6.3711, lng: 106.8228 },
                    { name: "Sukmajaya", lat: -6.4011, lng: 106.8389 }
                ]
            },
            {
                name: "Kota Bekasi",
                lat: -6.2383, lng: 106.9756,
                districts: [
                    { name: "Bekasi Selatan", lat: -6.2625, lng: 106.9856 },
                    { name: "Bekasi Timur", lat: -6.2489, lng: 107.0122 }
                ]
            }
        ]
    },
    {
        province: "Jawa Tengah",
        cities: [
            {
                name: "Kota Semarang",
                lat: -6.9667, lng: 110.4167,
                districts: [
                    { name: "Semarang Tengah", lat: -6.9819, lng: 110.4219 },
                    { name: "Semarang Selatan", lat: -7.0019, lng: 110.4189 },
                    { name: "Banyumanik", lat: -7.0672, lng: 110.4206 }
                ]
            },
            {
                name: "Kota Surakarta (Solo)",
                lat: -7.5755, lng: 110.8243,
                districts: [
                    { name: "Banjarsari", lat: -7.5519, lng: 110.8206 },
                    { name: "Laweyan", lat: -7.5683, lng: 110.7989 },
                    { name: "Jebres", lat: -7.5622, lng: 110.8519 }
                ]
            }
        ]
    },
    {
        province: "DI Yogyakarta",
        cities: [
            {
                name: "Kota Yogyakarta",
                lat: -7.7956, lng: 110.3695,
                districts: [
                    { name: "Danurejan", lat: -7.7925, lng: 110.3725 },
                    { name: "Gondomanan", lat: -7.8019, lng: 110.3689 },
                    { name: "Kraton", lat: -7.8089, lng: 110.3622 },
                    { name: "Umbulharjo", lat: -7.8189, lng: 110.3889 }
                ]
            },
            {
                name: "Kabupaten Sleman",
                lat: -7.7156, lng: 110.3556,
                districts: [
                    { name: "Depok", lat: -7.7719, lng: 110.4056 },
                    { name: "Mlati", lat: -7.7419, lng: 110.3519 },
                    { name: "Ngaglik", lat: -7.7189, lng: 110.3889 }
                ]
            }
        ]
    },
    {
        province: "Jawa Timur",
        cities: [
            {
                name: "Kota Surabaya",
                lat: -7.2575, lng: 112.7521,
                districts: [
                    { name: "Tegalsari", lat: -7.2719, lng: 112.7389 },
                    { name: "Gubeng", lat: -7.2789, lng: 112.7589 },
                    { name: "Wonokromo", lat: -7.3019, lng: 112.7389 },
                    { name: "Genteng", lat: -7.2619, lng: 112.7489 }
                ]
            },
            {
                name: "Kota Malang",
                lat: -7.9666, lng: 112.6326,
                districts: [
                    { name: "Klojen", lat: -7.9789, lng: 112.6319 },
                    { name: "Lowokwaru", lat: -7.9419, lng: 112.6189 }
                ]
            }
        ]
    },
    {
        province: "Bali",
        cities: [
            {
                name: "Kota Denpasar",
                lat: -8.6705, lng: 115.2126,
                districts: [
                    { name: "Denpasar Selatan", lat: -8.6989, lng: 115.2289 },
                    { name: "Denpasar Barat", lat: -8.6656, lng: 115.1989 },
                    { name: "Denpasar Timur", lat: -8.6489, lng: 115.2419 }
                ]
            }
        ]
    },
    {
        province: "Sumatera Utara",
        cities: [
            {
                name: "Kota Medan",
                lat: 3.5952, lng: 98.6722,
                districts: [
                    { name: "Medan Kota", lat: 3.5819, lng: 98.6889 },
                    { name: "Medan Baru", lat: 3.5719, lng: 98.6589 },
                    { name: "Medan Barat", lat: 3.6019, lng: 98.6719 }
                ]
            }
        ]
    },
    {
        province: "Sulawesi Selatan",
        cities: [
            {
                name: "Kota Makassar",
                lat: -5.1477, lng: 119.4327,
                districts: [
                    { name: "Ujung Pandang", lat: -5.1389, lng: 119.4089 },
                    { name: "Panakkukang", lat: -5.1489, lng: 119.4489 },
                    { name: "Rappocini", lat: -5.1689, lng: 119.4389 }
                ]
            }
        ]
    }
];

