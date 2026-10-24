/**
 * PanganKeluarga - Logika Aplikasi Lengkap
 * Dikembangkan oleh Tim Abula (2026)
 */

/* ==============================================================
   1. DATA MASTER 15 RESEP LENGKAP (5 STUNTING, 5 HIPERTENSI, 5 DIABETES)
   ============================================================== */
const RECIPES_15 = [
    // 5 RESEP KHUSUS STUNTING / RISIKO GIZI KURANG
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
            "Matikan api, masukkan daun kelor segar, aduk rata dan sajikan selagi hangat."
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

    // 5 RESEP KHUSUS HIPERTENSI (RENDAH GARAM)
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

    // 5 RESEP KHUSUS DIABETES (INDEKS GLIKEMIK RENDAH)
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
   2. PANDUAN GIZI 5 SIKLUS HIDUP
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
   3. DATA PERMAINAN EDUKASI GO, SLOW, WHOA (8 BAHAN VARIATIF)
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
   4. TITIK PETA LOKASI TERMASUK PILIHAN RUMAH
   ============================================================== */
const HOME_COORDINATES = {
    loc1: { name: "Rumah Anda (Jl. Mawar No. 12)", lat: -6.2395, lng: 106.7910, desc: "Wilayah RW 03, dekat kebun gizi komunitas." },
    loc2: { name: "Rumah Anda (Jl. Merdeka Selatan Blok B)", lat: -6.2420, lng: 106.7895, desc: "Wilayah RW 04, akses mudah ke pasar tradisional." },
    loc3: { name: "Rumah Anda (Kompleks Harapan Sehat)", lat: -6.2460, lng: 106.7925, desc: "Wilayah RW 05, dekat posko penimbangan gizi terpadu." }
};

const PUBLIC_LOCATIONS = [
    { name: "Pasar Tradisional Merdeka", type: "pasar", lat: -6.2415, lng: 106.7905, desc: "Pasar grosir komoditas pokok pangan segar bersubsidi." },
    { name: "Gerai Beras Murah Mandiri BAPANAS", type: "pasar", lat: -6.2450, lng: 106.7950, desc: "Distribusi beras SPHP Rp 54.000/5kg dan Minyakita." },
    { name: "Kebun Gizi Hidroponik Komunitas RW 03", type: "kebun", lat: -6.2390, lng: 106.7920, desc: "Petik bayam & kelor mandiri gratis untuk keluarga balita." },
    { name: "Kebun Sayur Pekarangan Berseri RW 05", type: "kebun", lat: -6.2435, lng: 106.7860, desc: "Sentra tanaman cabai, terong, dan kangkung pekarangan." },
    { name: "Posko Penimbangan & Gizi Terpadu Melati", type: "posko", lat: -6.2470, lng: 106.7890, desc: "Layanan konsultasi gizi balita & lansia gratis setiap hari kerja." }
];

/* ==============================================================
   5. STATE UTAMA & LOCALSTORAGE
   ============================================================== */
let APP_DATA = {
    familyName: localStorage.getItem('pangan_family_name') || "",
    headName: localStorage.getItem('pangan_head_name') || "",
    homeLocKey: localStorage.getItem('pangan_home_loc') || "loc1",
    familyMembers: JSON.parse(localStorage.getItem('pangan_members_v2')) || [],
    waterGlasses: parseInt(localStorage.getItem('pangan_water')) || 6,
    activityLogs: JSON.parse(localStorage.getItem('pangan_activities')) || [],
    shoppingItems: JSON.parse(localStorage.getItem('pangan_shopping')) || [
        { id: 1, name: "Telur Ayam Ras (1 kg)", price: 28000, category: "protein", checked: true },
        { id: 2, name: "Tempe Daun (3 papan)", price: 12000, category: "protein", checked: false },
        { id: 3, name: "Bayam Hijau Segar (2 ikat)", price: 6000, category: "sayur", checked: true },
        { id: 4, name: "Beras SPHP Bulog (5 kg)", price: 65000, category: "karbo", checked: false }
    ],
    forumPosts: JSON.parse(localStorage.getItem('pangan_forum_v2')) || [
        {
            id: 1,
            author: "Bu Rini (Kader RW 04)",
            time: "Hari ini, 08.15 WIB",
            text: "Ibu-ibu sekalian, di Balai RW sedang ada bibit cabai rawit & terong polybag gratis dari Puskesmas. Monggo diambil untuk pekarangan!",
            likes: 14,
            comments: [
                { author: "Kader Melati", text: "Siap Bu Rini, sangat bermanfaat untuk ketahanan dapur warga!", time: "08.40 WIB" }
            ]
        }
    ]
};

/* ==============================================================
   6. ONBOARDING & PRELOADER 3 DETIK PERSONAL
   ============================================================== */
function checkOnboarding() {
    if (!APP_DATA.familyName || APP_DATA.familyMembers.length === 0) {
        document.getElementById('app-preloader').style.display = 'none';
        document.getElementById('onboarding-modal').classList.remove('hidden');
        renderOnboardInitialRows();
    } else {
        runPreloader(`Selamat datang ${APP_DATA.familyName} (${APP_DATA.headName})`);
    }
}

function renderOnboardInitialRows() {
    const container = document.getElementById('onboard-members-list');
    container.innerHTML = '';
    // Tambah 2 baris awal default
    addOnboardMemberRow("Ibu Sari", "1990-11-20", "none");
    addOnboardMemberRow("Arka", "2023-04-12", "stunting");
}

function addOnboardMemberRow(name = '', dob = '', disease = 'none') {
    const container = document.getElementById('onboard-members-list');
    const row = document.createElement('div');
    row.className = 'onboard-member-row flex flex-wrap gap-2 items-center bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700';
    row.innerHTML = `
        <input type="text" placeholder="Nama..." value="${name}" required class="mem-name flex-1 min-w-[120px] px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:outline-none">
        <input type="date" value="${dob}" required class="mem-dob px-2 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:outline-none">
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

function handleOnboardingSubmit(e) {
    e.preventDefault();
    const familyName = document.getElementById('onboard-family-name').value.trim();
    const headName = document.getElementById('onboard-head-name').value.trim();
    const homeLocKey = document.getElementById('onboard-home-loc').value;

    const rows = document.querySelectorAll('.onboard-member-row');
    const members = [];
    rows.forEach((r, idx) => {
        const name = r.querySelector('.mem-name').value.trim();
        const dob = r.querySelector('.mem-dob').value;
        const disease = r.querySelector('.mem-disease').value;
        if (name && dob) {
            members.push({ id: Date.now() + idx, name, dob, disease });
        }
    });

    if (members.length === 0) {
        alert('Mohon masukkan minimal 1 anggota keluarga.');
        return;
    }

    // Simpan ke State & LocalStorage
    APP_DATA.familyName = familyName;
    APP_DATA.headName = headName;
    APP_DATA.homeLocKey = homeLocKey;
    APP_DATA.familyMembers = members;

    localStorage.setItem('pangan_family_name', familyName);
    localStorage.setItem('pangan_head_name', headName);
    localStorage.setItem('pangan_home_loc', homeLocKey);
    localStorage.setItem('pangan_members_v2', JSON.stringify(members));

    // Tutup onboarding dan jalankan loading 3 detik
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

    const totalDuration = 3000; // Tepat 3 Detik
    const intervalTime = 30;
    const totalSteps = totalDuration / intervalTime;
    let currentStep = 0;

    const stages = [
        { limit: 25, text: "Menyiapkan modul gizi & data lokal..." },
        { limit: 50, text: "Mendeteksi riwayat kesehatan keluarga..." },
        { limit: 75, text: "Menghubungkan resep medis & titik lokasi rumah..." },
        { limit: 100, text: "Sinkronisasi selesai!" }
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
   7. DETEKSI UMUR & SIKLUS HIDUP OTOMATIS
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

/* ==============================================================
   8. SISTEM OTOMATIS HUBUNGAN PENYAKIT KE RESEP
   ============================================================== */
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
                        <span class="font-bold text-emerald-900 dark:text-emerald-200">Seluruh Anggota Keluarga Bebas Riwayat Medis Kronis</span>
                        <p class="text-slate-500 dark:text-slate-400 text-[11px]">Tetap terapkan Isi Piringku seimbang untuk menjaga kebugaran harian.</p>
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

/* ==============================================================
   9. RENDER ANGGOTA KELUARGA & HEADER
   ============================================================== */
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
                    <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${info.badgeColor}">
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
    document.getElementById('banner-subgreeting').textContent = `Kepala Keluarga: ${APP_DATA.headName} • Menjaga ketahanan pangan & gizi seimbang lintas generasi.`;

    const authContainer = document.getElementById('auth-section');
    authContainer.innerHTML = `
        <div onclick="openEditFamilyModal()" title="Klik untuk mengubah nama & kepala keluarga" class="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-700 cursor-pointer group">
            <div class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-bold text-xs group-hover:ring-2 group-hover:ring-emerald-500 transition">
                ${APP_DATA.familyName.charAt(0) || 'K'}
            </div>
            <div class="hidden sm:block text-left">
                <span class="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 block leading-tight">${APP_DATA.familyName}</span>
                <span class="text-[9px] text-slate-400">${APP_DATA.headName}</span>
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

function openAddMemberModal() { document.getElementById('member-modal').classList.remove('hidden'); }
function closeAddMemberModal() { document.getElementById('member-modal').classList.add('hidden'); }

function saveNewFamilyMember(e) {
    e.preventDefault();
    const name = document.getElementById('new-member-name').value.trim();
    const dob = document.getElementById('new-member-dob').value;
    const disease = document.getElementById('new-member-disease').value;

    if (name && dob) {
        APP_DATA.familyMembers.push({ id: Date.now(), name, dob, disease });
        localStorage.setItem('pangan_members_v2', JSON.stringify(APP_DATA.familyMembers));
        renderFamilyMembers();
        renderDiseaseAlerts();
        closeAddMemberModal();
    }
}

function removeFamilyMember(id) {
    if (confirm('Hapus anggota keluarga ini dari pemantauan gizi?')) {
        APP_DATA.familyMembers = APP_DATA.familyMembers.filter(m => m.id !== id);
        localStorage.setItem('pangan_members_v2', JSON.stringify(APP_DATA.familyMembers));
        renderFamilyMembers();
        renderDiseaseAlerts();
    }
}

/* ==============================================================
   10. PANDUAN GIZI DENGAN REKOMENDASI ANGGOTA & RESEP
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

    // Tampilkan anggota keluarga mana saja yang berada pada siklus ini
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
                <span>Saat ini belum ada anggota keluarga terdaftar pada kategori ${cycle}. Anda tetap dapat mempelajari panduan porsinya di bawah ini.</span>
            </div>
        `;
    }

    // Tampilkan 2 resep rekomendasi spesifik siklus ini
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
   11. AKTIVITAS FISIK DENGAN DROPDOWN
   ============================================================== */
function renderActivityLogs() {
    const container = document.getElementById('activity-logs-container');
    container.innerHTML = '';
    
    document.getElementById('activity-badge-count').textContent = `${APP_DATA.activityLogs.length} Selesai`;

    if (APP_DATA.activityLogs.length === 0) {
        container.innerHTML = '<span class="text-slate-400 text-[10px] italic">Belum ada aktivitas dicatat hari ini.</span>';
        return;
    }

    APP_DATA.activityLogs.forEach((act, idx) => {
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
   12. PETA LEAFLET DENGAN TITIK RUMAH & FILTER JELAS
   ============================================================== */
let leafletMap = null;
let mapMarkers = [];

function initLeafletMap() {
    if (leafletMap) return;

    // Ambil koordinat rumah sesuai pilihan
    const homeLoc = HOME_COORDINATES[APP_DATA.homeLocKey] || HOME_COORDINATES.loc1;

    leafletMap = L.map('map').setView([homeLoc.lat, homeLoc.lng], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(leafletMap);

    // Pasang Titik Rumah Anda dengan Pin Khusus
    const homeIcon = L.divIcon({
        className: 'custom-home-icon',
        html: `<div style="background:#059669; color:#fff; width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 3px 8px rgba(0,0,0,0.3); border:2px solid #fff;"><i class="fa-solid fa-house" style="font-size:14px;"></i></div>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17]
    });

    const homeMarker = L.marker([homeLoc.lat, homeLoc.lng], { icon: homeIcon }).addTo(leafletMap);
    homeMarker.bindPopup(`
        <div style="font-family:'Plus Jakarta Sans',sans-serif; font-size:12px;">
            <span style="font-size:10px; font-weight:800; color:#059669;">RUMAH KELUARGA</span>
            <h4 style="font-weight:bold; margin:2px 0;">${APP_DATA.familyName}</h4>
            <p style="color:#64748b; font-size:11px; margin:0;">${homeLoc.name} - ${homeLoc.desc}</p>
        </div>
    `);
    homeMarker.locType = 'home';
    mapMarkers.push(homeMarker);

    // Pasang Titik Fasilitas Publik
    PUBLIC_LOCATIONS.forEach(loc => {
        const marker = L.marker([loc.lat, loc.lng]).addTo(leafletMap);
        const typeLabel = loc.type === 'pasar' ? '🛒 Pasar Murah' : loc.type === 'kebun' ? '🌿 Kebun Gizi' : '🏥 Posko Gizi';
        marker.bindPopup(`
            <div style="font-family:'Plus Jakarta Sans',sans-serif; font-size:12px;">
                <span style="font-size:10px; font-weight:bold; color:#059669; text-transform:uppercase;">${typeLabel}</span>
                <h4 style="font-weight:bold; margin:2px 0;">${loc.name}</h4>
                <p style="color:#64748b; font-size:11px; margin:0;">${loc.desc}</p>
            </div>
        `);
        marker.locType = loc.type;
        mapMarkers.push(marker);
    });
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
   13. NAVIGASI, RESEP & FORUM WARGA
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
            if (leafletMap) leafletMap.invalidateSize();
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
        alert('Selamat! Menu sehat bernutrisi berhasil disiapkan.');
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

/* ==============================================================
   14. FORUM RUANG BERBAGI DENGAN TANGGAPI
   ============================================================== */
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
        localStorage.setItem('pangan_forum_v2', JSON.stringify(APP_DATA.forumPosts));
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
    localStorage.setItem('pangan_forum_v2', JSON.stringify(APP_DATA.forumPosts));
    document.getElementById('forum-content').value = '';
    document.getElementById('forum-author').value = '';
    renderForum();
}

function likePost(id) {
    const p = APP_DATA.forumPosts.find(x => x.id === id);
    if (p) {
        p.likes++;
        localStorage.setItem('pangan_forum_v2', JSON.stringify(APP_DATA.forumPosts));
        renderForum();
    }
}

/* ==============================================================
   15. GAME QUIZ & HIDRASI / BELANJA
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
        alert(`Misi Kuis Gizi Selesai! Skor Akhir Anda: ${gameScore} XP!`);
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
    const icon = document.getElementById('theme-icon');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        localStorage.setItem('pangan_theme', 'light');
        icon.className = 'fa-solid fa-moon';
    } else {
        html.classList.add('dark');
        html.classList.remove('light');
        localStorage.setItem('pangan_theme', 'dark');
        icon.className = 'fa-solid fa-sun';
    }
}

/* ==============================================================
   16. INISIALISASI DASHBOARD
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
