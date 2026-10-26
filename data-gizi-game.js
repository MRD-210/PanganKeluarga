/** Data panduan gizi 5 siklus hidup & data game Go/Slow/Whoa. */

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

