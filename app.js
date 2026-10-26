/**
 * PanganKeluarga - Versi 1.1
 * Dikembangkan oleh Tim Abula (2026)
 */

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

/* ==============================================================
   2. DATA MASTER 15 RESEP LENGKAP
   ============================================================== */
const RECIPES_15 = [
    // 5 RESEP STUNTING
    {
        id: 1,
        title: "Sup Bening Ikan Kembung & Daun Kelor",
        category: "stunting",
        time: "20 Menit",
        calories: 195,
        targetCycle: "balita",
        desc: "Kaya omega-3 alami dan zat besi untuk perkembangan sel otak serta imun balita.",
        steps: [
            "Didihkan 600 ml air bersama jahe geprek, serai, dan daun salam.",
            "Masukkan ikan kembung segar, masak dengan api sedang selama 10 menit.",
            "Tambahkan potongan wortel dan labu siam hingga lunak.",
            "Matikan api, masukkan daun kelor segar, aduk rata dan sajikan hangat."
        ]
    },
    {
        id: 2,
        title: "Pepes Tahu Telur Hati Ayam Lembut",
        category: "stunting",
        time: "25 Menit",
        calories: 170,
        targetCycle: "balita",
        desc: "Kaya zat besi heme dan protein konsentrat tinggi pencegah anemia dini anak.",
        steps: [
            "Haluskan tahu putih, campur dengan telur kocok dan hati ayam rebus cincang.",
            "Bumbui dengan bawang putih halus, sedikit garam, dan daun kemangi.",
            "Bungkus adonan dalam daun pisang yang telah dilayukan.",
            "Kukus bungkusan selama 20 menit hingga matang padat merata."
        ]
    },
    {
        id: 3,
        title: "Bola-Bola Nasi Hati Sapi & Sayur Pelangi",
        category: "stunting",
        time: "20 Menit",
        calories: 220,
        targetCycle: "anak",
        desc: "Solusi anak susah makan (GTM) dengan bentuk menarik kaya zinc dan vitamin A.",
        steps: [
            "Tumis hati sapi giling bersama parutan wortel dan labu dengan mentega tipis.",
            "Campurkan tumisan ke dalam nasi hangat pulen.",
            "Bentuk bulat-bulat seukuran kepalan tangan balita.",
            "Sajikan bersama taburan kuning telur rebus parut."
        ]
    },
    {
        id: 4,
        title: "Opor Telur Puyuh & Tempe Kuah Susu Kedelai",
        category: "stunting",
        time: "25 Menit",
        calories: 210,
        targetCycle: "anak",
        desc: "Susu kedelai tanpa gula menggantikan santan untuk protein ganda aman cerna.",
        steps: [
            "Rebus telur puyuh hingga matang lalu kupas bersih.",
            "Tumis bumbu putih (bawang merah, putih, ketumbar sangrai).",
            "Tuang susu kedelai murni dan masukkan tempe potong dadu bersama telur puyuh.",
            "Masak api kecil hingga bumbu meresap dan kuah harum."
        ]
    },
    {
        id: 5,
        title: "Nasi Tim Ikan Lele Gurih & Brokoli Cincang",
        category: "stunting",
        time: "30 Menit",
        calories: 205,
        targetCycle: "balita",
        desc: "Lele kaya asam lemak esensial fosfor pendukung pertumbuhan tinggi badan anak.",
        steps: [
            "Fillet lele segar, cincang halus bersama bawang putih dan daun bawang.",
            "Campur beras dengan kaldu ayam kampung di mangkuk tahan panas.",
            "Beri topping lele cincang dan brokoli halus di atas beras.",
            "Kukus selama 30 menit hingga beras menjadi nasi tim lunak sempurna."
        ]
    },

    // 5 RESEP HIPERTENSI
    {
        id: 6,
        title: "Orak-Arik Tempe & Labu Siam Rendah Garam",
        category: "hipertensi",
        time: "15 Menit",
        calories: 140,
        targetCycle: "lansia",
        desc: "Tinggi kalium alami dari labu siam untuk melenturkan pembuluh darah lansia.",
        steps: [
            "Kukus tempe sebentar lalu potong korek api halus.",
            "Tumis bawang putih dan irisan cabai merah tanpa minyak berlebih.",
            "Masukkan serutan labu siam dan tempe kukus, beri sedikit kaldu jamur non-MSG.",
            "Masak cepat hingga labu layu renyah dan sajikan segar."
        ]
    },
    {
        id: 7,
        title: "Sayur Bening Oyong Jagung Manis Bebas Garam",
        category: "hipertensi",
        time: "15 Menit",
        calories: 110,
        targetCycle: "lansia",
        desc: "Diuretik alami pembantu ekskresi natrium lewat ginjal.",
        steps: [
            "Didihkan air bersama bawang merah iris dan temu kunci geprek.",
            "Masukkan potongan jagung manis pipil, rebus selama 5 menit.",
            "Masukkan oyong yang telah dikupas bergerigi dan dipotong bulat.",
            "Tambahkan daun kemangi sesaat sebelum api dimatikan."
        ]
    },
    {
        id: 8,
        title: "Pepes Jamur Tiram & Tahu Kemangi Bebas Natrium",
        category: "hipertensi",
        time: "20 Menit",
        calories: 125,
        targetCycle: "dewasa",
        desc: "Aroma kemangi dan rempah menggantikan kebutuhan rasa asin garam.",
        steps: [
            "Suwir jamur tiram dan remas air hangat, tiriskan kering.",
            "Campur jamur bersama tahu bejek, irisan tomat hijau, dan bawang merah iris.",
            "Bungkus rapat dengan daun pisang dan sematkan lidi di ujungnya.",
            "Kukus selama 20 menit lalu panggang teflon sebentar."
        ]
    },
    {
        id: 9,
        title: "Ikan Mas Panggang Kunyit Asam Segar",
        category: "hipertensi",
        time: "25 Menit",
        calories: 180,
        targetCycle: "dewasa",
        desc: "Kurkumin dan asam jawa membantu melancarkan sirkulasi tekanan darah.",
        steps: [
            "Lumuri ikan mas dengan perasan air asam jawa dan kunyit segar.",
            "Diamkan selama 15 menit agar bumbu meresap.",
            "Panggang di wajan anti-lengket dengan api sedang tanpa minyak.",
            "Balik sekali hingga matang merata dan harum."
        ]
    },
    {
        id: 10,
        title: "Sayur Asem Jakarta Segar Tanpa Terasi",
        category: "hipertensi",
        time: "20 Menit",
        calories: 95,
        targetCycle: "dewasa",
        desc: "Asam belimbing wuluh dan kandis menyegarkan tanpa menaikkan tekanan darah.",
        steps: [
            "Didihkan air dengan bumbu halus (bawang merah, cabai, kemiri bakar).",
            "Masukkan kacang panjang, labu siam, dan jagung.",
            "Beri air perasan asam jawa muda murni tanpa terasi kemasan tinggi garam.",
            "Masak sampai sayuran matang pas."
        ]
    },

    // 5 RESEP DIABETES
    {
        id: 11,
        title: "Nasi Merah Ubi Ungu Kukus & Teri Sangrai",
        category: "diabetes",
        time: "30 Menit",
        calories: 190,
        targetCycle: "dewasa",
        desc: "Karbohidrat kompleks pelepasan lambat menjaga lonjakan gula darah.",
        steps: [
            "Campur beras merah yang sudah direndam dengan potongan ubi ungu dadu.",
            "Masak di rice cooker atau kukusan sampai pulen.",
            "Sangrai teri tawar tanpa minyak di wajan terpisah hingga garing.",
            "Taburkan teri sangrai di atas nasi merah hangat."
        ]
    },
    {
        id: 12,
        title: "Tumis Buncis Tahu Bumbu Lengkuas Serat Tinggi",
        category: "diabetes",
        time: "15 Menit",
        calories: 135,
        targetCycle: "lansia",
        desc: "Serat larut buncis terbukti memperlambat penyerapan glukosa di usus.",
        steps: [
            "Iris serong buncis muda dan potong dadu tahu putih kukus.",
            "Tumis bawang putih cincang dan lengkuas geprek hingga harum.",
            "Masukkan buncis dan tahu, beri 3 sendok makan air kaldu.",
            "Masak cepat dengan api besar agar buncis tetap renyah berserat."
        ]
    },
    {
        id: 13,
        title: "Sayur Bening Daun Katuk & Jagung Muda",
        category: "diabetes",
        time: "15 Menit",
        calories: 105,
        targetCycle: "remaja",
        desc: "Polifenol daun katuk kaya antioksidan pelindung sensitivitas insulin.",
        steps: [
            "Petik daun katuk segar, cuci bersih dengan air mengalir.",
            "Didihkan air bersama irisan bawang merah dan temu kunci.",
            "Masukkan jagung manis muda, masak 3 menit.",
            "Masukkan daun katuk, didihkan 2 menit lalu angkat."
        ]
    },
    {
        id: 14,
        title: "Pecel Sayur Saus Kacang Sangrai Tanpa Gula Jawa",
        category: "diabetes",
        time: "20 Menit",
        calories: 160,
        targetCycle: "dewasa",
        desc: "Bumbu kacang alami tanpa tambahan gula merah menjaga indeks glikemik stabil.",
        steps: [
            "Kukus terpisah tauge, kangkung, kacang panjang, dan bayam.",
            "Haluskan kacang tanah sangrai tanpa minyak bersama cabai, bawang putih, dan kencur.",
            "Larutkan bumbu dengan air asam jawa hangat tanpa gula merah.",
            "Siram bumbu di atas tumpukan sayuran kukus segar."
        ]
    },
    {
        id: 15,
        title: "Kukus Ikan Kakap Tomat Ceri Kemangi",
        category: "diabetes",
        time: "20 Menit",
        calories: 175,
        targetCycle: "lansia",
        desc: "Protein murni bebas lemak jenuh dan likopen tomat segar mengontrol metabolisme.",
        steps: [
            "Letakkan fillet kakap putih di piring tahan panas.",
            "Beri irisan bawang putih, jahe iris korek, dan belahan tomat ceri.",
            "Kukus dalam dandang panas selama 15 menit.",
            "Beri daun kemangi segar di atas ikan 2 menit sebelum diangkat."
        ]
    }
];

/* ==============================================================
   3. DATA PANDUAN GIZI 5 SIKLUS HIDUP
   ============================================================== */
const LIFE_CYCLE_DATA = {
    balita: {
        title: "Target Gizi: Balita (<5 Tahun)",
        cal: "350 - 450 Kkal / Kali Makan",
        desc: "Prioritas asam amino hewani esensial untuk pertumbuhan otak & pencegahan stunting dini.",
        carb: "Nasi lembek / kentang lumat (100 - 150 gr)",
        veg: "Bayam halus, wortel cincang (100 gr)",
        prot: "Ikan kembung, telur rebus, hati ayam (50 gr)",
        fruit: "Pepaya manis / pisang kepok (50 gr)"
    },
    anak: {
        title: "Target Gizi: Anak-Anak (5-11 Tahun)",
        cal: "500 - 650 Kkal / Kali Makan",
        desc: "Kebutuhan energi aktivitas belajar dan kalsium untuk pertumbuhan tulang.",
        carb: "Nasi putih / jagung pipil (150 - 200 gr)",
        veg: "Sayur lodeh, capcay wortel buncis (150 gr)",
        prot: "Tempe goreng, ayam ungkep bumbu kuning (75 gr)",
        fruit: "Jeruk manis / semangka segar (75 gr)"
    },
    remaja: {
        title: "Target Gizi: Remaja & Pelajar (12-18 Tahun)",
        cal: "650 - 750 Kkal / Kali Makan",
        desc: "Zat besi ekstra pencegah anemia pada remaja putri dan kalsium untuk puncak kepadatan massa tulang.",
        carb: "Nasi merah / kentang rebus / jagung (200 gr)",
        veg: "Sayur bayam bening, brokoli, daun singkong (150 gr)",
        prot: "Ikan laut segar, telur ayam, dada ayam, tempe (85 - 100 gr)",
        fruit: "Jeruk peras, pisang ambon, jambu biji kaya Vit C (100 gr)"
    },
    dewasa: {
        title: "Target Gizi: Dewasa Aktif (19-59 Tahun)",
        cal: "650 - 750 Kkal / Kali Makan",
        desc: "Menjaga stamina kerja harian dan kestabilan indeks massa tubuh produktif.",
        carb: "Nasi merah / ubi jalar rebus (200 gr)",
        veg: "Tumis kangkung, lalapan daun singkong (200 gr)",
        prot: "Ikan bakar kunyit, tahu bacem (100 gr)",
        fruit: "Pisang ambon / pepaya potong (100 gr)"
    },
    lansia: {
        title: "Target Gizi: Lansia (60+ Tahun)",
        cal: "400 - 500 Kkal / Kali Makan",
        desc: "Rendah garam (tensi stabil), rendah purin (bebas asam urat), tekstur lembut mudah cerna.",
        carb: "Nasi tim lembut / bubur oatmeal (150 gr)",
        veg: "Labu siam rebus, oyong bening (150 gr)",
        prot: "Ikan kukus jahe, tahu sutra lembut (60 gr)",
        fruit: "Buah naga / pisang mas lumat (60 gr)"
    }
};

/* ==============================================================
   4. DATA GAME GO, SLOW, WHOA
   ============================================================== */
const GAME_FOODS = [
    { icon: "🥬", name: "Sayur Bayam Bening", desc: "Sayuran hijau segar tanpa santan minyak.", answer: "GO" },
    { icon: "🍗", name: "Ayam Goreng Tepung Krispi", desc: "Daging berbalut tepung minyak jenuh tinggi.", answer: "WHOA" },
    { icon: "🍞", name: "Roti Gandum Oles Mentega Tipis", desc: "Karbohidrat kompleks dengan sedikit olesan lemak.", answer: "SLOW" },
    { icon: "🥤", name: "Minuman Soda Tinggi Sirup Fruktosa", desc: "Pemanis murni pemicu lonjakan gula darah.", answer: "WHOA" },
    { icon: "🥚", name: "Telur Rebus Tanpa Garam", desc: "Sumber asam amino murni berdaya cerna tinggi.", answer: "GO" },
    { icon: "🥣", name: "Sayur Lodeh Santan Encer Rumahan", desc: "Olahan sayuran berkuah santan encer porsi sedang.", answer: "SLOW" },
    { icon: "🍟", name: "Keripik Kentang Kemasan Asin", desc: "Camilan gurih tinggi natrium dan minyak goreng.", answer: "WHOA" },
    { icon: "🐟", name: "Ikan Kembung Kukus Bumbu Kunyit", desc: "Ikan kaya omega-3 tanpa minyak jenuh.", answer: "GO" }
];

/* ==============================================================
   5. STATE UTAMA APLIKASI
   ============================================================== */
let APP_DATA = {
    familyName: localStorage.getItem('pangan_family_name') || "",
    headName: localStorage.getItem('pangan_head_name') || "",
    province: localStorage.getItem('pangan_province') || "",
    city: localStorage.getItem('pangan_city') || "",
    district: localStorage.getItem('pangan_district') || "",
    address: localStorage.getItem('pangan_address') || "",
    districtCoords: JSON.parse(localStorage.getItem('pangan_district_coords')) || null,
    familyMembers: JSON.parse(localStorage.getItem('pangan_members_v11')) || [],
    waterGlasses: parseInt(localStorage.getItem('pangan_water')) || 6,
    activityLogs: JSON.parse(localStorage.getItem('pangan_activities')) || [],
    shoppingItems: JSON.parse(localStorage.getItem('pangan_shopping')) || [
        { id: 1, name: "Telur Ayam Ras (1 kg)", price: 28000, category: "protein", checked: true },
        { id: 2, name: "Tempe Daun (3 papan)", price: 12000, category: "protein", checked: false },
        { id: 3, name: "Bayam Hijau Segar (2 ikat)", price: 6000, category: "sayur", checked: true },
        { id: 4, name: "Beras SPHP Bulog (5 kg)", price: 65000, category: "karbo", checked: false }
    ],
    forumPosts: JSON.parse(localStorage.getItem('pangan_forum_v11')) || [
        {
            id: 1,
            author: "Bu Rini (Kader PKK)",
            time: "Hari ini, 08.15 WIB",
            text: "Ibu-ibu sekalian, di Balai RW sedang ada bibit cabai rawit & terong polybag gratis dari Puskesmas. Monggo diambil untuk pekarangan!",
            likes: 14,
            comments: [
                { author: "Kader Melati", text: "Siap Bu Rini, sangat bermanfaat untuk ketahanan dapur keluarga!", time: "08.40 WIB" }
            ]
        }
    ]
};

/* ==============================================================
   6. ONBOARDING & POPULASI WILAYAH (PROVINSI -> KOTA -> KECAMATAN)
   ============================================================== */
function populateProvinceDropdown() {
    const provSelect = document.getElementById('onboard-provinsi');
    provSelect.innerHTML = '<option value="">-- Pilih Provinsi --</option>';
    INDONESIA_REGIONS.forEach((reg, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = reg.province;
        provSelect.appendChild(opt);
    });
}

function handleProvinceChange() {
    const provSelect = document.getElementById('onboard-provinsi');
    const citySelect = document.getElementById('onboard-kota');
    const distSelect = document.getElementById('onboard-kecamatan');

    citySelect.innerHTML = '<option value="">-- Pilih Kota / Kabupaten --</option>';
    distSelect.innerHTML = '<option value="">-- Pilih Kecamatan --</option>';

    const provIdx = provSelect.value;
    if (provIdx === "") return;

    const region = INDONESIA_REGIONS[provIdx];
    region.cities.forEach((c, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = c.name;
        citySelect.appendChild(opt);
    });
}

function handleCityChange() {
    const provSelect = document.getElementById('onboard-provinsi');
    const citySelect = document.getElementById('onboard-kota');
    const distSelect = document.getElementById('onboard-kecamatan');

    distSelect.innerHTML = '<option value="">-- Pilih Kecamatan --</option>';

    const provIdx = provSelect.value;
    const cityIdx = citySelect.value;
    if (provIdx === "" || cityIdx === "") return;

    const city = INDONESIA_REGIONS[provIdx].cities[cityIdx];
    if (city.districts && city.districts.length > 0) {
        city.districts.forEach((d, idx) => {
            const opt = document.createElement('option');
            opt.value = idx;
            opt.textContent = d.name;
            distSelect.appendChild(opt);
        });
    } else {
        // Fallback default kecamatan jika tidak didefinisikan
        const defaultDistricts = ["Pusat Kota", "Kecamatan Timur", "Kecamatan Barat", "Kecamatan Selatan"];
        defaultDistricts.forEach((dName, idx) => {
            const opt = document.createElement('option');
            opt.value = idx;
            opt.textContent = dName;
            distSelect.appendChild(opt);
        });
    }
}

function checkOnboarding() {
    if (!APP_DATA.familyName || !APP_DATA.districtCoords || APP_DATA.familyMembers.length === 0) {
        document.getElementById('app-preloader').style.display = 'none';
        document.getElementById('onboarding-modal').classList.remove('hidden');
        populateProvinceDropdown();
        renderOnboardInitialRows();
    } else {
        runPreloader(`Selamat datang ${APP_DATA.familyName} (${APP_DATA.headName})`);
    }
}

function renderOnboardInitialRows() {
    const container = document.getElementById('onboard-members-list');
    container.innerHTML = '';
    addOnboardMemberRow("Ibu Sari", "1990-11-20", "none");
    addOnboardMemberRow("Arka", "2023-04-12", "stunting");
}

function addOnboardMemberRow(name = '', dob = '', disease = 'none') {
    const container = document.getElementById('onboard-members-list');
    const row = document.createElement('div');
    row.className = 'onboard-member-row flex flex-wrap gap-2 items-center bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700';
    
    // Set max date ke hari ini
    const todayStr = new Date().toISOString().split('T')[0];

    row.innerHTML = `
        <input type="text" placeholder="Nama..." value="${name}" required class="mem-name flex-1 min-w-[120px] px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:outline-none">
        <div class="flex flex-col">
            <input type="date" value="${dob}" max="${todayStr}" required class="mem-dob px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:outline-none">
            <span class="mem-dob-err text-rose-500 font-bold text-[10px] hidden">Data tidak sesuai.</span>
        </div>
        <select class="mem-disease flex-1 min-w-[140px] px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:outline-none">
            <option value="none" ${disease === 'none' ? 'selected' : ''}>Sehat / Tanpa Riwayat</option>
            <option value="stunting" ${disease === 'stunting' ? 'selected' : ''}>Risiko Stunting / Gizi Balita</option>
            <option value="hipertensi" ${disease === 'hipertensi' ? 'selected' : ''}>Hipertensi (Rendah Garam)</option>
            <option value="diabetes" ${disease === 'diabetes' ? 'selected' : ''}>Diabetes (Glikemik Rendah)</option>
        </select>
        <button type="button" onclick="this.parentElement.remove()" class="text-rose-500 hover:text-rose-700 p-1"><i class="fa-solid fa-trash"></i></button>
    `;
    container.appendChild(row);
}

/* ==============================================================
   7. VALIDASI TAHUN LAHIR ("Data tidak sesuai.")
   ============================================================== */
function validateBirthYear(dobString) {
    if (!dobString) return false;
    const currentYear = new Date().getFullYear();
    const inputDate = new Date(dobString);
    const birthYear = inputDate.getFullYear();

    // Kebijakan: tahun lahir tidak boleh melebihi tahun sekarang (misal: 2027, 2029)
    if (isNaN(birthYear) || birthYear > currentYear || inputDate > new Date()) {
        return false;
    }
    return true;
}

function handleOnboardingSubmit(e) {
    e.preventDefault();
    const familyName = document.getElementById('onboard-family-name').value.trim();
    const headName = document.getElementById('onboard-head-name').value.trim();
    const provIdx = document.getElementById('onboard-provinsi').value;
    const cityIdx = document.getElementById('onboard-kota').value;
    const distIdx = document.getElementById('onboard-kecamatan').value;
    const detailAddress = document.getElementById('onboard-detail-address').value.trim();

    if (provIdx === "" || cityIdx === "" || distIdx === "") {
        alert("Mohon pilih Provinsi, Kota/Kabupaten, dan Kecamatan tempat tinggal Anda.");
        return;
    }

    const selectedRegion = INDONESIA_REGIONS[provIdx];
    const selectedCity = selectedRegion.cities[cityIdx];
    const selectedDistrict = (selectedCity.districts && selectedCity.districts[distIdx]) 
        ? selectedCity.districts[distIdx] 
        : { name: "Kecamatan Terpilih", lat: selectedCity.lat, lng: selectedCity.lng };

    const rows = document.querySelectorAll('.onboard-member-row');
    const members = [];
    let hasDateError = false;

    rows.forEach((r, idx) => {
        const name = r.querySelector('.mem-name').value.trim();
        const dob = r.querySelector('.mem-dob').value;
        const disease = r.querySelector('.mem-disease').value;
        const errSpan = r.querySelector('.mem-dob-err');

        if (!validateBirthYear(dob)) {
            hasDateError = true;
            if (errSpan) errSpan.classList.remove('hidden');
        } else {
            if (errSpan) errSpan.classList.add('hidden');
            if (name && dob) {
                members.push({ id: Date.now() + idx, name, dob, disease });
            }
        }
    });

    if (hasDateError) {
        alert("Data tidak sesuai. Tahun lahir tidak boleh melebihi tahun saat ini!");
        return;
    }

    if (members.length === 0) {
        alert("Mohon masukkan minimal 1 anggota keluarga yang valid.");
        return;
    }

    // Simpan ke State & LocalStorage
    APP_DATA.familyName = familyName;
    APP_DATA.headName = headName;
    APP_DATA.province = selectedRegion.province;
    APP_DATA.city = selectedCity.name;
    APP_DATA.district = selectedDistrict.name;
    APP_DATA.address = detailAddress;
    APP_DATA.districtCoords = { lat: selectedDistrict.lat, lng: selectedDistrict.lng };
    APP_DATA.familyMembers = members;

    localStorage.setItem('pangan_family_name', familyName);
    localStorage.setItem('pangan_head_name', headName);
    localStorage.setItem('pangan_province', selectedRegion.province);
    localStorage.setItem('pangan_city', selectedCity.name);
    localStorage.setItem('pangan_district', selectedDistrict.name);
    localStorage.setItem('pangan_address', detailAddress);
    localStorage.setItem('pangan_district_coords', JSON.stringify(APP_DATA.districtCoords));
    localStorage.setItem('pangan_members_v11', JSON.stringify(members));

    // Tutup onboarding dan aktifkan preloader 3 detik
    document.getElementById('onboarding-modal').classList.add('hidden');
    document.getElementById('app-preloader').style.display = 'flex';
    document.getElementById('app-preloader').classList.remove('opacity-0', 'pointer-events-none');

    initDashboardData();
    runPreloader(`Selamat datang ${familyName} (${headName})`);
}

function runPreloader(welcomeMsg = "Selamat datang!") {
    const progressBar = document.getElementById('preloader-progress-bar');
    const percentText = document.getElementById('preloader-percent-text');
    const statusText = document.getElementById('preloader-status-text');
    const welcomeEl = document.getElementById('preloader-welcome-text');
    const preloader = document.getElementById('app-preloader');

    welcomeEl.textContent = welcomeMsg;

    const totalDuration = 3000; // 3 Detik
    const intervalTime = 30;
    const totalSteps = totalDuration / intervalTime;
    let currentStep = 0;

    const stages = [
        { limit: 25, text: "Menyiapkan modul gizi keluarga..." },
        { limit: 50, text: "Menghubungkan data lokasi tempat tinggal di Indonesia..." },
        { limit: 75, text: "Sinkronisasi titik pasar Google Maps..." },
        { limit: 100, text: "Selesai! Membuka Portal..." }
    ];

    const timer = setInterval(() => {
        currentStep++;
        const progress = Math.min(100, Math.floor((currentStep / totalSteps) * 100));

        progressBar.style.width = progress + '%';
        percentText.textContent = progress + '%';

        const stage = stages.find(s => progress <= s.limit);
        if (stage) statusText.textContent = stage.text;

        if (currentStep >= totalSteps) {
            clearInterval(timer);
            setTimeout(() => {
                preloader.classList.add('opacity-0', 'pointer-events-none');
                setTimeout(() => { preloader.style.display = 'none'; }, 700);
            }, 200);
        }
    }, intervalTime);
}

/* ==============================================================
   8. TOMBOL KELUAR / RESET AKUN (DI TARO PADA MODAL UBAH PROFIL)
   ============================================================== */
function confirmLogoutAndReset() {
    const konfirmasi = confirm(
        "Apakah Anda yakin ingin keluar dan mereset profil keluarga serta tempat tinggal?\n\nSeluruh data pendaftaran akan dibersihkan dan Anda dapat mengisi ulang dari awal."
    );

    if (konfirmasi) {
        // Bersihkan LocalStorage
        localStorage.removeItem('pangan_family_name');
        localStorage.removeItem('pangan_head_name');
        localStorage.removeItem('pangan_province');
        localStorage.removeItem('pangan_city');
        localStorage.removeItem('pangan_district');
        localStorage.removeItem('pangan_address');
        localStorage.removeItem('pangan_district_coords');
        localStorage.removeItem('pangan_members_v11');

        // Reset State Objek
        APP_DATA.familyName = "";
        APP_DATA.headName = "";
        APP_DATA.province = "";
        APP_DATA.city = "";
        APP_DATA.district = "";
        APP_DATA.address = "";
        APP_DATA.districtCoords = null;
        APP_DATA.familyMembers = [];

        // Hapus instance leaflet jika ada
        if (leafletMap) {
            leafletMap.remove();
            leafletMap = null;
            mapMarkers = [];
        }

        closeEditFamilyModal();
        checkOnboarding();
    }
}

/* ==============================================================
   9. DETEKSI UMUR & SIKLUS HIDUP OTOMATIS
   ============================================================== */
function calculateAgeAndCycle(dobString) {
    const birthDate = new Date(dobString);
    const today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        years--;
        months += 12;
    }

    let cycle = 'dewasa';
    let label = 'Dewasa';
    let badgeColor = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';

    if (years < 5) {
        cycle = 'balita';
        label = 'Balita';
        badgeColor = 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300';
    } else if (years >= 5 && years <= 11) {
        cycle = 'anak';
        label = 'Anak-Anak';
        badgeColor = 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300';
    } else if (years >= 12 && years <= 18) {
        cycle = 'remaja';
        label = 'Remaja';
        badgeColor = 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300';
    } else if (years >= 19 && years <= 59) {
        cycle = 'dewasa';
        label = 'Dewasa';
        badgeColor = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
    } else {
        cycle = 'lansia';
        label = 'Lansia';
        badgeColor = 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300';
    }

    const ageText = years === 0 ? `${months} Bulan` : `${years} Tahun`;
    return { years, months, ageText, cycle, label, badgeColor };
}

function renderDiseaseAlerts() {
    const container = document.getElementById('disease-alert-section');
    container.innerHTML = '';

    const conditionMap = {
        stunting: { label: "Risiko Stunting / Butuh Protein", icon: "fa-child-reaching", color: "amber", target: "stunting" },
        hipertensi: { label: "Hipertensi (Rendah Garam)", icon: "fa-heart-pulse", color: "rose", target: "hipertensi" },
        diabetes: { label: "Diabetes (Glikemik Rendah)", icon: "fa-droplet", color: "blue", target: "diabetes" }
    };

    const membersWithIssues = APP_DATA.familyMembers.filter(m => m.disease && m.disease !== 'none');

    if (membersWithIssues.length === 0) {
        container.innerHTML = `
            <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between text-xs">
                <div class="flex items-center gap-2.5">
                    <i class="fa-solid fa-circle-check text-emerald-600 text-base"></i>
                    <div>
                        <span class="font-bold text-emerald-900 dark:text-emerald-200">Seluruh Anggota Keluarga Bebas Riwayat Medis Khusus</span>
                        <p class="text-slate-500 dark:text-slate-400 text-[11px]">Tetap terapkan Isi Piringku seimbang untuk menjaga kebugaran keluarga.</p>
                    </div>
                </div>
                <button onclick="navigate('resep')" class="font-bold text-emerald-700 dark:text-emerald-400 hover:underline">Lihat Resep Sehat →</button>
            </div>
        `;
        return;
    }

    membersWithIssues.forEach(m => {
        const cond = conditionMap[m.disease];
        if (!cond) return;

        const matchingRecipes = RECIPES_15.filter(r => r.category === cond.target).slice(0, 2);

        const alertBox = document.createElement('div');
        alertBox.className = `p-4 rounded-2xl bg-${cond.color}-50/90 dark:bg-${cond.color}-950/30 border border-${cond.color}-200 dark:border-${cond.color}-800/50 space-y-2.5`;
        alertBox.innerHTML = `
            <div class="flex flex-wrap justify-between items-center gap-2">
                <div class="flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-${cond.color}-600 text-white flex items-center justify-center text-xs">
                        <i class="fa-solid ${cond.icon}"></i>
                    </span>
                    <div>
                        <span class="text-xs font-black text-slate-900 dark:text-white">Perhatian Menu Medis untuk ${m.name}</span>
                        <span class="text-[10px] block text-slate-500 dark:text-slate-400 font-semibold">Diagnosis: ${cond.label}</span>
                    </div>
                </div>
                <button onclick="filterRecipesByDisease('${cond.target}')" class="px-3 py-1 bg-${cond.color}-600 hover:bg-${cond.color}-700 text-white rounded-lg text-xs font-bold transition shadow-xs">
                    Buka 5 Resep ${cond.label.split(' ')[0]} →
                </button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                ${matchingRecipes.map(r => `
                    <div onclick="openCookingMode(${r.id})" class="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex justify-between items-center cursor-pointer hover:border-${cond.color}-500 transition">
                        <div>
                            <span class="font-bold text-slate-800 dark:text-slate-100 block leading-tight">${r.title}</span>
                            <span class="text-[10px] text-slate-400">${r.calories} Kkal • ${r.time}</span>
                        </div>
                        <i class="fa-solid fa-arrow-right text-[11px] text-slate-400"></i>
                    </div>
                `).join('')}
            </div>
        `;
        container.appendChild(alertBox);
    });
}

function filterRecipesByDisease(category) {
    navigate('resep');
    document.getElementById('recipe-med-filter').value = category;
    filterRecipes();
}

function renderFamilyMembers() {
    const container = document.getElementById('family-members-list');
    container.innerHTML = '';
    
    const categoryCounts = {};

    APP_DATA.familyMembers.forEach(m => {
        const info = calculateAgeAndCycle(m.dob);
        categoryCounts[info.label] = (categoryCounts[info.label] || 0) + 1;

        const diseaseBadge = m.disease && m.disease !== 'none'
            ? `<span class="mt-1 inline-block text-[9px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 uppercase">${m.disease}</span>`
            : `<span class="mt-1 inline-block text-[9px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">Sehat</span>`;

        const card = document.createElement('div');
        card.className = 'p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700 flex flex-col justify-between shadow-xs';
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-1.5">
                    <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${info.badgeColor}">
                        ${info.label} (${info.ageText})
                    </span>
                    <button onclick="removeFamilyMember(${m.id})" title="Hapus Anggota" class="text-slate-400 hover:text-rose-500 text-xs"><i class="fa-solid fa-trash"></i></button>
                </div>
                <h4 class="font-bold text-sm text-slate-900 dark:text-white leading-tight">${m.name}</h4>
                ${diseaseBadge}
                <span class="text-[10px] text-slate-400 block mt-2"><i class="fa-regular fa-calendar mr-1"></i>Lahir: ${m.dob}</span>
            </div>
        `;
        container.appendChild(card);
    });

    const summaryStr = Object.entries(categoryCounts).map(([cat, cnt]) => `${cnt} ${cat}`).join(', ');
    document.getElementById('family-summary-badge').textContent = summaryStr || 'Belum ada anggota';
}

function renderFamilyHeader() {
    document.getElementById('banner-greeting').textContent = `Selamat Sehat, ${APP_DATA.familyName}!`;
    document.getElementById('banner-subgreeting').textContent = `Kepala Keluarga: ${APP_DATA.headName} • Wilayah: Kec. ${APP_DATA.district}, ${APP_DATA.city}`;
    document.getElementById('banner-location-badge').textContent = `Kec. ${APP_DATA.district}, ${APP_DATA.city}`;
    document.getElementById('map-district-badge').textContent = `Kecamatan ${APP_DATA.district}`;
    document.getElementById('map-header-sub').textContent = `Kecamatan ${APP_DATA.district}, ${APP_DATA.city}`;

    const authContainer = document.getElementById('auth-section');
    authContainer.innerHTML = `
        <div onclick="openEditFamilyModal()" title="Klik untuk Ubah Profil atau Keluar" class="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-700 cursor-pointer group">
            <div class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-bold text-xs group-hover:ring-2 group-hover:ring-emerald-500 transition">
                ${APP_DATA.familyName.charAt(0) || 'K'}
            </div>
            <div class="hidden sm:block text-left">
                <span class="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 block leading-tight">${APP_DATA.familyName}</span>
                <span class="text-[9px] text-slate-400">Kec. ${APP_DATA.district}</span>
            </div>
            <i class="fa-solid fa-pen text-[10px] text-slate-400 group-hover:text-emerald-600 ml-1"></i>
        </div>
    `;
}

function openEditFamilyModal() {
    document.getElementById('input-family-name').value = APP_DATA.familyName;
    document.getElementById('input-head-name').value = APP_DATA.headName;
    document.getElementById('family-edit-modal').classList.remove('hidden');
}

function closeEditFamilyModal() {
    document.getElementById('family-edit-modal').classList.add('hidden');
}

function saveFamilyProfile(e) {
    e.preventDefault();
    const newName = document.getElementById('input-family-name').value.trim();
    const newHead = document.getElementById('input-head-name').value.trim();
    if (newName && newHead) {
        APP_DATA.familyName = newName;
        APP_DATA.headName = newHead;
        localStorage.setItem('pangan_family_name', newName);
        localStorage.setItem('pangan_head_name', newHead);
        renderFamilyHeader();
        closeEditFamilyModal();
    }
}

function openAddMemberModal() {
    const todayStr = new Date().toISOString().split('T')[0];
    document.getElementById('new-member-dob').max = todayStr;
    document.getElementById('member-dob-error').classList.add('hidden');
    document.getElementById('member-modal').classList.remove('hidden');
}

function closeAddMemberModal() {
    document.getElementById('member-modal').classList.add('hidden');
}

function saveNewFamilyMember(e) {
    e.preventDefault();
    const name = document.getElementById('new-member-name').value.trim();
    const dob = document.getElementById('new-member-dob').value;
    const disease = document.getElementById('new-member-disease').value;

    if (!validateBirthYear(dob)) {
        document.getElementById('member-dob-error').classList.remove('hidden');
        alert("Data tidak sesuai. Tahun lahir tidak boleh melebihi tahun saat ini!");
        return;
    }

    if (name && dob) {
        APP_DATA.familyMembers.push({ id: Date.now(), name, dob, disease });
        localStorage.setItem('pangan_members_v11', JSON.stringify(APP_DATA.familyMembers));
        renderFamilyMembers();
        renderDiseaseAlerts();
        closeAddMemberModal();
    }
}

function removeFamilyMember(id) {
    if (confirm('Hapus anggota keluarga ini dari pemantauan gizi?')) {
        APP_DATA.familyMembers = APP_DATA.familyMembers.filter(m => m.id !== id);
        localStorage.setItem('pangan_members_v11', JSON.stringify(APP_DATA.familyMembers));
        renderFamilyMembers();
        renderDiseaseAlerts();
    }
}

/* ==============================================================
   10. PANDUAN GIZI 5 SIKLUS & REKOMENDASI RESEP
   ============================================================== */
let activeCycle = 'balita';

function setLifeCycle(cycle) {
    activeCycle = cycle;
    ['balita', 'anak', 'remaja', 'dewasa', 'lansia'].forEach(c => {
        const btn = document.getElementById(`btn-cycle-${c}`);
        if (btn) {
            btn.className = (c === cycle)
                ? 'px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-xs'
                : 'px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300';
        }
    });

    const data = LIFE_CYCLE_DATA[cycle];
    document.getElementById('cycle-target-title').textContent = data.title;
    document.getElementById('cycle-target-cal').textContent = data.cal;
    document.getElementById('cycle-target-desc').textContent = data.desc;
    document.getElementById('cycle-carb').textContent = data.carb;
    document.getElementById('cycle-veg').textContent = data.veg;
    document.getElementById('cycle-prot').textContent = data.prot;
    document.getElementById('cycle-fruit').textContent = data.fruit;

    const membersInCycle = APP_DATA.familyMembers.filter(m => {
        const info = calculateAgeAndCycle(m.dob);
        return info.cycle === cycle;
    });

    const alertEl = document.getElementById('cycle-members-alert');
    if (membersInCycle.length > 0) {
        alertEl.innerHTML = `
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-users text-emerald-600"></i>
                <span>Anggota keluarga pada siklus <b>${cycle.toUpperCase()}</b>: 
                    <b>${membersInCycle.map(m => `${m.name} (${calculateAgeAndCycle(m.dob).ageText})`).join(', ')}</b>
                </span>
            </div>
        `;
    } else {
        alertEl.innerHTML = `
            <div class="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <i class="fa-solid fa-circle-info"></i>
                <span>Belum ada anggota keluarga pada kategori ${cycle}. Anda tetap dapat mempelajari panduan porsinya di bawah ini.</span>
            </div>
        `;
    }

    const recommendedRecipes = RECIPES_15.filter(r => r.targetCycle === cycle || r.targetCycle === 'dewasa').slice(0, 2);
    const recContainer = document.getElementById('cycle-recipe-recommendation');
    recContainer.innerHTML = recommendedRecipes.map(r => `
        <div onclick="openCookingMode(${r.id})" class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 cursor-pointer hover:border-emerald-500 flex justify-between items-center transition">
            <div>
                <span class="font-bold text-slate-800 dark:text-slate-100 block leading-tight text-xs">${r.title}</span>
                <span class="text-[10px] text-slate-400">${r.calories} Kkal • ${r.time}</span>
            </div>
            <i class="fa-solid fa-fire-burner text-emerald-600 text-xs"></i>
        </div>
    `).join('');
}

/* ==============================================================
   11. AKTIVITAS FISIK & DROPDOWN LOG
   ============================================================== */
function renderActivityLogs() {
    const container = document.getElementById('activity-logs-container');
    container.innerHTML = '';
    
    document.getElementById('activity-badge-count').textContent = `${APP_DATA.activityLogs.length} Selesai`;

    if (APP_DATA.activityLogs.length === 0) {
        container.innerHTML = '<span class="text-slate-400 text-[10px] italic">Belum ada aktivitas dicatat hari ini.</span>';
        return;
    }

    APP_DATA.activityLogs.forEach((act) => {
        const item = document.createElement('div');
        item.className = 'p-1.5 rounded-lg bg-slate-50 dark:bg-slate-700/40 flex justify-between items-center';
        item.innerHTML = `
            <span class="font-semibold text-slate-700 dark:text-slate-200"><i class="fa-solid fa-circle-check text-emerald-500 mr-1.5"></i>${act.title}</span>
            <span class="text-[9px] text-slate-400">${act.time}</span>
        `;
        container.appendChild(item);
    });
}

function logDropdownActivity() {
    const dropdown = document.getElementById('activity-dropdown');
    const selected = dropdown.value;

    const newLog = {
        title: selected,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) + ' WIB'
    };

    APP_DATA.activityLogs.unshift(newLog);
    localStorage.setItem('pangan_activities', JSON.stringify(APP_DATA.activityLogs));
    renderActivityLogs();
    confetti({ particleCount: 35, spread: 50 });
}

/* ==============================================================
   12. PETA LEAFLET BERBASIS KECAMATAN TERPILIH & GOOGLE MAPS
   ============================================================== */
let leafletMap = null;
let mapMarkers = [];

function generateDistrictPOIs(baseCoords, districtName, cityName) {
    // Generate titik fasilitas lokal persis di dalam wilayah kecamatan terpilih
    const offset = 0.005;
    return [
        {
            name: `Pasar Tradisional & Inpres Kec. ${districtName}`,
            type: "pasar",
            lat: baseCoords.lat + offset,
            lng: baseCoords.lng + offset,
            desc: `Pasar rakyat penyedia sayur mayur dan pangan segar di Kecamatan ${districtName}.`,
            query: `Pasar Tradisional Kecamatan ${districtName} ${cityName}`
        },
        {
            name: `Gerai Pangan Murah BAPANAS Kec. ${districtName}`,
            type: "pasar",
            lat: baseCoords.lat - (offset * 0.8),
            lng: baseCoords.lng + offset,
            desc: `Titik distribusi beras SPHP subsidi dan minyak goreng di wilayah ${districtName}.`,
            query: `Pangan Murah ${districtName} ${cityName}`
        },
        {
            name: `Kebun Gizi & Hidroponik Warga Kec. ${districtName}`,
            type: "kebun",
            lat: baseCoords.lat + (offset * 0.6),
            lng: baseCoords.lng - offset,
            desc: `Pemberdayaan kebun sayur hidroponik daun kelor mandiri warga ${districtName}.`,
            query: `Kebun Komunitas ${districtName} ${cityName}`
        },
        {
            name: `Puskesmas & Posko Gizi Terpadu Kec. ${districtName}`,
            type: "posko",
            lat: baseCoords.lat - (offset * 0.6),
            lng: baseCoords.lng - (offset * 0.7),
            desc: `Posko pemantauan tumbuh kembang balita dan gizi lansia Kecamatan ${districtName}.`,
            query: `Puskesmas Kecamatan ${districtName} ${cityName}`
        }
    ];
}

function initLeafletMap() {
    const baseCoords = APP_DATA.districtCoords || { lat: -6.2444, lng: 106.7997 };
    const districtName = APP_DATA.district || "Kebayoran Baru";
    const cityName = APP_DATA.city || "Jakarta Selatan";

    if (!leafletMap) {
        leafletMap = L.map('map').setView([baseCoords.lat, baseCoords.lng], 14);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(leafletMap);
    } else {
        leafletMap.setView([baseCoords.lat, baseCoords.lng], 14);
        mapMarkers.forEach(m => leafletMap.removeLayer(m));
        mapMarkers = [];
    }

    // 1. Pasang Pin Rumah Anda di Kecamatan Terpilih
    const homeIcon = L.divIcon({
        className: 'custom-home-icon',
        html: `<div style="background:#059669; color:#fff; width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 10px rgba(0,0,0,0.35); border:2.5px solid #fff;"><i class="fa-solid fa-house" style="font-size:15px;"></i></div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18]
    });

    const homeGmapsLink = `https://www.google.com/maps/search/?api=1&query=${baseCoords.lat},${baseCoords.lng}`;

    const homeMarker = L.marker([baseCoords.lat, baseCoords.lng], { icon: homeIcon }).addTo(leafletMap);
    homeMarker.bindPopup(`
        <div style="font-family:'Plus Jakarta Sans',sans-serif; font-size:12px; min-width:180px;">
            <span style="font-size:10px; font-weight:800; color:#059669; text-transform:uppercase;">🏠 RUMAH ANDA</span>
            <h4 style="font-weight:bold; margin:2px 0;">${APP_DATA.familyName}</h4>
            <p style="color:#64748b; font-size:11px; margin:0 0 6px 0;">${APP_DATA.address}, Kec. ${districtName}</p>
            <a href="${homeGmapsLink}" target="_blank" style="display:inline-block; font-size:10px; font-weight:bold; color:#059669; text-decoration:underline;">
                Buka Lokasi di Google Maps ↗
            </a>
        </div>
    `);
    homeMarker.locType = 'home';
    mapMarkers.push(homeMarker);

    // 2. Pasang Titik Pasar & Fasilitas Publik Khusus di Kecamatan Ini
    const pois = generateDistrictPOIs(baseCoords, districtName, cityName);
    pois.forEach(p => {
        const marker = L.marker([p.lat, p.lng]).addTo(leafletMap);
        const typeLabel = p.type === 'pasar' ? '🛒 Pasar Murah' : p.type === 'kebun' ? '🌿 Kebun Gizi' : '🏥 Posko Gizi';
        const gmapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.query)}`;

        marker.bindPopup(`
            <div style="font-family:'Plus Jakarta Sans',sans-serif; font-size:12px; min-width:190px;">
                <span style="font-size:10px; font-weight:800; color:#059669; text-transform:uppercase;">${typeLabel}</span>
                <h4 style="font-weight:bold; margin:2px 0 4px 0;">${p.name}</h4>
                <p style="color:#64748b; font-size:11px; margin:0 0 6px 0;">${p.desc}</p>
                <a href="${gmapsLink}" target="_blank" style="display:inline-block; font-size:10px; font-weight:bold; color:#0284c7; text-decoration:underline;">
                    Buka di Google Maps ↗
                </a>
            </div>
        `);
        marker.locType = p.type;
        mapMarkers.push(marker);
    });

    // Perbaiki rendering tile jika map baru muncul
    setTimeout(() => {
        if (leafletMap) leafletMap.invalidateSize();
    }, 200);
}

function filterMap(type) {
    ['all', 'home', 'pasar', 'kebun', 'posko'].forEach(t => {
        const btn = document.getElementById(`btn-map-${t}`);
        if (btn) {
            btn.className = (t === type)
                ? 'map-filter-btn px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold shadow-xs transition'
                : 'map-filter-btn px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 font-medium hover:bg-white dark:hover:bg-slate-800 transition';
        }
    });

    if (!leafletMap) return;
    mapMarkers.forEach(m => {
        if (type === 'all' || m.locType === type) {
            leafletMap.addLayer(m);
        } else {
            leafletMap.removeLayer(m);
        }
    });
}

/* ==============================================================
   13. NAVIGASI, RESEP & FORUM
   ============================================================== */
function navigate(pageId) {
    const pages = ['beranda', 'gizi', 'ekonomi', 'resep', 'edukasi', 'komunitas'];
    pages.forEach(p => {
        const pageEl = document.getElementById(`page-${p}`);
        const navBtn = document.getElementById(`nav-${p}`);
        
        if (p === pageId) {
            pageEl.classList.remove('hidden');
            if (navBtn) {
                navBtn.className = 'nav-item px-3.5 py-2 rounded-xl text-emerald-700 dark:text-emerald-300 font-bold bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-emerald-700/50 transition shadow-xs';
            }
        } else {
            pageEl.classList.add('hidden');
            if (navBtn) {
                navBtn.className = 'nav-item px-3.5 py-2 rounded-xl hover:text-emerald-600 dark:hover:text-emerald-400 text-slate-600 dark:text-slate-300 transition';
            }
        }
    });
    document.getElementById('mobile-menu').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (pageId === 'komunitas') {
        setTimeout(() => {
            initLeafletMap();
        }, 150);
    }
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

function renderRecipes(list) {
    const grid = document.getElementById('recipe-cards-grid');
    grid.innerHTML = '';
    
    list.forEach(r => {
        const badge = r.category === 'stunting' ? 'bg-amber-100 text-amber-800' :
                      r.category === 'hipertensi' ? 'bg-rose-100 text-rose-800' : 'bg-blue-100 text-blue-800';
        const label = r.category === 'stunting' ? 'Anti-Stunting' :
                      r.category === 'hipertensi' ? 'Rendah Garam' : 'Glikemik Rendah';

        const card = document.createElement('div');
        card.className = 'bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm flex flex-col justify-between';
        card.innerHTML = `
            <div class="p-5">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full ${badge} uppercase tracking-wider">
                        ${label}
                    </span>
                    <span class="text-xs text-slate-400"><i class="fa-regular fa-clock mr-1"></i>${r.time} • ${r.calories} Kkal</span>
                </div>
                <h4 class="font-extrabold text-base text-slate-900 dark:text-white leading-snug">${r.title}</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">${r.desc}</p>
            </div>
            <div class="p-5 pt-0">
                <button onclick="openCookingMode(${r.id})" class="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition">
                    <i class="fa-solid fa-fire-burner"></i> Panduan Langkah Memasak
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterRecipes() {
    const query = document.getElementById('recipe-search').value.toLowerCase();
    const med = document.getElementById('recipe-med-filter').value;

    const filtered = RECIPES_15.filter(r => {
        const matchQ = r.title.toLowerCase().includes(query) || r.desc.toLowerCase().includes(query);
        const matchM = (med === 'all') || (r.category === med);
        return matchQ && matchM;
    });
    renderRecipes(filtered);
}

let activeRecipe = null;
let currentStepIndex = 0;
let cookTimerInterval = null;
let cookTimeRemaining = 600;

function openCookingMode(recipeId) {
    activeRecipe = RECIPES_15.find(r => r.id === recipeId);
    currentStepIndex = 0;
    document.getElementById('cook-recipe-title').textContent = activeRecipe.title;
    updateCookingStepUI();
    document.getElementById('cooking-modal').classList.remove('hidden');
}

function closeCookingMode() {
    clearInterval(cookTimerInterval);
    document.getElementById('cooking-modal').classList.add('hidden');
}

function updateCookingStepUI() {
    document.getElementById('cook-step-number').textContent = `Langkah ${currentStepIndex + 1} dari ${activeRecipe.steps.length}`;
    document.getElementById('cook-step-text').textContent = activeRecipe.steps[currentStepIndex];
    document.getElementById('btn-prev-step').disabled = currentStepIndex === 0;
    document.getElementById('btn-next-step').textContent = currentStepIndex === activeRecipe.steps.length - 1 ? 'Selesai Memasak ✓' : 'Langkah Berikutnya →';
}

function nextCookingStep() {
    if (currentStepIndex < activeRecipe.steps.length - 1) {
        currentStepIndex++;
        updateCookingStepUI();
    } else {
        confetti({ particleCount: 70, spread: 70 });
        alert('Selamat! Hidangan sehat keluarga berhasil dimasak dengan sempurna!');
        closeCookingMode();
    }
}

function prevCookingStep() {
    if (currentStepIndex > 0) {
        currentStepIndex--;
        updateCookingStepUI();
    }
}

function startCookTimer() {
    clearInterval(cookTimerInterval);
    cookTimerInterval = setInterval(() => {
        cookTimeRemaining--;
        const m = Math.floor(cookTimeRemaining / 60);
        const s = cookTimeRemaining % 60;
        document.getElementById('cook-timer-display').textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
        if (cookTimeRemaining <= 0) {
            clearInterval(cookTimerInterval);
            alert('Waktu memasak selesai!');
        }
    }, 1000);
    document.getElementById('btn-start-cook-timer').textContent = 'Berjalan...';
}

function resetCookTimer() {
    clearInterval(cookTimerInterval);
    cookTimeRemaining = 600;
    document.getElementById('cook-timer-display').textContent = '10:00';
    document.getElementById('btn-start-cook-timer').textContent = 'Mulai Timer';
}

function renderForum() {
    const container = document.getElementById('forum-posts-container');
    container.innerHTML = '';
    
    APP_DATA.forumPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700 space-y-2 text-xs shadow-2xs';
        
        let commentsHtml = '';
        if (post.comments && post.comments.length > 0) {
            commentsHtml = `
                <div class="mt-2 pt-2 border-t border-slate-200 dark:border-slate-600 space-y-1.5 pl-3 border-l-2 border-emerald-500">
                    ${post.comments.map(c => `
                        <div class="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-100 dark:border-slate-700">
                            <div class="flex justify-between items-center text-[10px]">
                                <b class="text-slate-800 dark:text-slate-200">${c.author}</b>
                                <span class="text-slate-400">${c.time}</span>
                            </div>
                            <p class="text-slate-600 dark:text-slate-300 text-[11px] mt-0.5">${c.text}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        card.innerHTML = `
            <div class="flex justify-between items-center">
                <span class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <i class="fa-solid fa-circle-user text-emerald-600"></i> ${post.author}
                </span>
                <span class="text-[10px] text-slate-400">${post.time}</span>
            </div>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${post.text}</p>
            
            <div class="pt-1 flex items-center gap-4 text-[11px] text-slate-400 font-semibold">
                <button onclick="likePost(${post.id})" class="hover:text-emerald-600 transition"><i class="fa-regular fa-thumbs-up mr-1"></i>${post.likes} Dukungan</button>
                <button onclick="toggleReplyBox(${post.id})" class="hover:text-emerald-600 text-emerald-700 dark:text-emerald-400 font-bold transition"><i class="fa-regular fa-comment mr-1"></i>Tanggapi (${post.comments ? post.comments.length : 0})</button>
            </div>

            <div id="reply-box-${post.id}" class="hidden pt-2 border-t border-slate-200 dark:border-slate-600 space-y-2">
                <input type="text" id="reply-author-${post.id}" placeholder="Nama Anda..." class="w-full px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:outline-none">
                <div class="flex gap-2">
                    <input type="text" id="reply-text-${post.id}" placeholder="Tulis tanggapan Anda..." class="flex-1 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:outline-none">
                    <button onclick="submitReply(${post.id})" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold whitespace-nowrap">Balas</button>
                </div>
            </div>

            ${commentsHtml}
        `;
        container.appendChild(card);
    });
}

function toggleReplyBox(postId) {
    document.getElementById(`reply-box-${postId}`).classList.toggle('hidden');
}

function submitReply(postId) {
    const author = document.getElementById(`reply-author-${postId}`).value.trim() || APP_DATA.familyName;
    const text = document.getElementById(`reply-text-${postId}`).value.trim();

    if (!text) {
        alert('Tuliskan tanggapan terlebih dahulu.');
        return;
    }

    const post = APP_DATA.forumPosts.find(p => p.id === postId);
    if (post) {
        if (!post.comments) post.comments = [];
        post.comments.push({ author, text, time: "Baru saja" });
        localStorage.setItem('pangan_forum_v11', JSON.stringify(APP_DATA.forumPosts));
        renderForum();
    }
}

function addForumPost(e) {
    e.preventDefault();
    const text = document.getElementById('forum-content').value.trim();
    const author = document.getElementById('forum-author').value.trim() || APP_DATA.familyName;
    const newPost = {
        id: Date.now(),
        author: author,
        time: "Baru saja",
        text: text,
        likes: 1,
        comments: []
    };
    APP_DATA.forumPosts.unshift(newPost);
    localStorage.setItem('pangan_forum_v11', JSON.stringify(APP_DATA.forumPosts));
    document.getElementById('forum-content').value = '';
    document.getElementById('forum-author').value = '';
    renderForum();
}

function likePost(id) {
    const p = APP_DATA.forumPosts.find(x => x.id === id);
    if (p) {
        p.likes++;
        localStorage.setItem('pangan_forum_v11', JSON.stringify(APP_DATA.forumPosts));
        renderForum();
    }
}

/* ==============================================================
   14. GAME QUIZ & HIDRASI / BELANJA
   ============================================================== */
let gameIndex = 0;
let gameScore = 0;

function submitGameAnswer(ans) {
    const current = GAME_FOODS[gameIndex];
    if (ans === current.answer) {
        gameScore += 25;
        confetti({ particleCount: 30, spread: 50 });
        alert(`Tepat sekali! ${current.name} adalah kategori ${current.answer}. (+25 XP)`);
    } else {
        alert(`Kurang tepat. ${current.name} semestinya masuk kelompok ${current.answer}.`);
    }

    document.getElementById('game-score').textContent = gameScore;
    gameIndex++;

    if (gameIndex < GAME_FOODS.length) {
        const next = GAME_FOODS[gameIndex];
        document.getElementById('game-round').textContent = gameIndex + 1;
        document.getElementById('game-food-icon').textContent = next.icon;
        document.getElementById('game-food-name').textContent = next.name;
        document.getElementById('game-food-desc').textContent = next.desc;
    } else {
        confetti({ particleCount: 100, spread: 80 });
        alert(`Misi Kuis Selesai! Skor Akhir Anda: ${gameScore} XP!`);
        gameIndex = 0;
        gameScore = 0;
        document.getElementById('game-round').textContent = 1;
        document.getElementById('game-score').textContent = 0;
    }
}

function renderWaterTracker() {
    const row = document.getElementById('water-glasses-row');
    row.innerHTML = '';
    for (let i = 1; i <= 8; i++) {
        const filled = i <= APP_DATA.waterGlasses;
        const icon = document.createElement('i');
        icon.className = `fa-solid fa-glass-water cursor-pointer transition ${filled ? 'text-blue-500 scale-110' : 'text-slate-300 dark:text-slate-700'}`;
        icon.onclick = () => { APP_DATA.waterGlasses = i; saveWater(); };
        row.appendChild(icon);
    }
    document.getElementById('water-display').textContent = `${APP_DATA.waterGlasses} / 8 Gelas`;
}

function updateWater(delta) {
    APP_DATA.waterGlasses = Math.max(0, Math.min(8, APP_DATA.waterGlasses + delta));
    saveWater();
}

function saveWater() {
    localStorage.setItem('pangan_water', APP_DATA.waterGlasses);
    renderWaterTracker();
}

let handwashTimer = null;
function startHandwashTimer() {
    let sec = 20;
    const btn = document.getElementById('btn-handwash-timer');
    clearInterval(handwashTimer);
    handwashTimer = setInterval(() => {
        sec--;
        btn.textContent = `Cuci Tangan: ${sec} Detik...`;
        if (sec <= 0) {
            clearInterval(handwashTimer);
            btn.textContent = `Selesai! Tangan Bersih Higienis ✓`;
            confetti({ particleCount: 50, spread: 60 });
            setTimeout(() => { btn.textContent = 'Mulai Timer 20 Detik'; }, 3000);
        }
    }, 1000);
}

function setBudgetPeriod(period) {
    document.getElementById('btn-period-harian').className = period === 'harian' ? 'py-2 rounded-xl font-bold bg-emerald-600 text-white' : 'py-2 rounded-xl font-bold border';
    document.getElementById('btn-period-bulanan').className = period === 'bulanan' ? 'py-2 rounded-xl font-bold bg-emerald-600 text-white' : 'py-2 rounded-xl font-bold border';
    document.getElementById('input-budget-limit').value = period === 'harian' ? 50000 : 1500000;
    calculateBudgetBreakdown();
}

function calculateBudgetBreakdown() {
    const total = parseFloat(document.getElementById('input-budget-limit').value) || 0;
    document.getElementById('alloc-veg').textContent = 'Rp ' + Math.round(total * 0.35).toLocaleString('id-ID');
    document.getElementById('alloc-prot').textContent = 'Rp ' + Math.round(total * 0.35).toLocaleString('id-ID');
    document.getElementById('alloc-carb').textContent = 'Rp ' + Math.round(total * 0.20).toLocaleString('id-ID');
    document.getElementById('alloc-spice').textContent = 'Rp ' + Math.round(total * 0.10).toLocaleString('id-ID');
}

function renderShoppingList() {
    const container = document.getElementById('shopping-items-grouped');
    container.innerHTML = '';
    let total = 0;

    APP_DATA.shoppingItems.forEach(item => {
        if (item.checked) total += item.price;
        const row = document.createElement('div');
        row.className = 'flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700 text-xs';
        row.innerHTML = `
            <label class="flex items-center gap-2 cursor-pointer flex-1">
                <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleShoppingItem(${item.id})" class="rounded text-emerald-600">
                <span class="${item.checked ? 'line-through text-slate-400' : 'font-bold text-slate-800 dark:text-slate-100'}">${item.name}</span>
            </label>
            <span class="font-semibold text-emerald-600 dark:text-emerald-400 mr-2">Rp ${item.price.toLocaleString('id-ID')}</span>
            <button onclick="deleteShoppingItem(${item.id})" class="text-slate-300 hover:text-rose-500"><i class="fa-solid fa-xmark"></i></button>
        `;
        container.appendChild(row);
    });
    document.getElementById('shopping-total').textContent = 'Rp ' + total.toLocaleString('id-ID');
}

function toggleShoppingItem(id) {
    const itm = APP_DATA.shoppingItems.find(i => i.id === id);
    if (itm) itm.checked = !itm.checked;
    localStorage.setItem('pangan_shopping', JSON.stringify(APP_DATA.shoppingItems));
    renderShoppingList();
}

function addCustomShoppingItem(e) {
    e.preventDefault();
    const itm = {
        id: Date.now(),
        name: document.getElementById('shop-name').value,
        price: parseInt(document.getElementById('shop-price').value) || 0,
        category: document.getElementById('shop-cat').value,
        checked: false
    };
    APP_DATA.shoppingItems.unshift(itm);
    localStorage.setItem('pangan_shopping', JSON.stringify(APP_DATA.shoppingItems));
    document.getElementById('shop-name').value = '';
    document.getElementById('shop-price').value = '';
    renderShoppingList();
}

function deleteShoppingItem(id) {
    APP_DATA.shoppingItems = APP_DATA.shoppingItems.filter(i => i.id !== id);
    localStorage.setItem('pangan_shopping', JSON.stringify(APP_DATA.shoppingItems));
    renderShoppingList();
}

function toggleDarkMode() {
    const html = document.documentElement;
    const icons = document.querySelectorAll('.theme-icon');
    
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        localStorage.setItem('pangan_theme', 'light');
        icons.forEach(i => i.className = 'theme-icon fa-solid fa-moon');
    } else {
        html.classList.add('dark');
        html.classList.remove('light');
        localStorage.setItem('pangan_theme', 'dark');
        icons.forEach(i => i.className = 'theme-icon fa-solid fa-sun');
    }
}

/* ==============================================================
   15. INISIALISASI DASHBOARD
   ============================================================== */
function initDashboardData() {
    renderFamilyHeader();
    renderFamilyMembers();
    renderDiseaseAlerts();
    setLifeCycle('balita');
    renderWaterTracker();
    renderActivityLogs();
    setBudgetPeriod('harian');
    renderShoppingList();
    renderRecipes(RECIPES_15);
    renderForum();
    document.getElementById('game-total-rounds').textContent = GAME_FOODS.length;
}

document.addEventListener('DOMContentLoaded', () => {
    initDashboardData();
    checkOnboarding();
});
