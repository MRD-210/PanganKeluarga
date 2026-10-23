        /* --- 0. PRELOADER DENGAN DURASI ~3 DETIK --- */
        function runPreloader() {
            const progressBar = document.getElementById('preloader-progress-bar');
            const percentText = document.getElementById('preloader-percent-text');
            const statusText = document.getElementById('preloader-status-text');
            const preloader = document.getElementById('app-preloader');

            const totalDuration = 3000; // 3 detik penuh
            const intervalTime = 30;    // interval render per 30 milidetik
            const totalSteps = totalDuration / intervalTime;
            let currentStep = 0;

            const stages = [
                { limit: 20, text: "Memuat modul gizi lintas generasi..." },
                { limit: 45, text: "Mengidentifikasi tanggal lahir & umur keluarga..." },
                { limit: 70, text: "Menyiapkan 15 resep medis lokal..." },
                { limit: 90, text: "Sinkronisasi sebaran posko dan pasar murah..." },
                { limit: 100, text: "Selamat Datang di PanganKeluarga!" }
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

        /* --- 1. DATA MASTER & LOCALSTORAGE --- */
        const APP_DATA = {
            familyName: localStorage.getItem('pangan_family_name') || "Keluarga Ibu Sari",
            familyMembers: JSON.parse(localStorage.getItem('pangan_members_dob')) || [
                { id: 1, name: "Arka", dob: "2023-04-12", note: "Fokus asam amino hewani penangkal stunting" },
                { id: 2, name: "Siti Rahma", dob: "2017-09-05", note: "Energi belajar sekolah & kalsium tulang" },
                { id: 3, name: "Rian Pratama", dob: "2011-02-18", note: "Zat besi aktif & puncak kepadatan tulang" },
                { id: 4, name: "Ibu Sari", dob: "1990-11-20", note: "Serat aktif & stamina kerja seimbang" },
                { id: 5, name: "Nenek Aminah", dob: "1956-06-14", note: "Rendah natrium & asam urat stabil" }
            ],
            waterGlasses: parseInt(localStorage.getItem('pangan_water')) || 6,
            shoppingItems: JSON.parse(localStorage.getItem('pangan_shopping')) || [
                { id: 1, name: "Telur Ayam Ras (1 kg)", price: 28000, category: "protein", checked: true },
                { id: 2, name: "Tempe Daun (3 papan)", price: 12000, category: "protein", checked: false },
                { id: 3, name: "Bayam Hijau Segar (2 ikat)", price: 6000, category: "sayur", checked: true },
                { id: 4, name: "Beras SPHP Bulog (5 kg)", price: 65000, category: "karbo", checked: false }
            ],
            forumPosts: JSON.parse(localStorage.getItem('pangan_forum_replies')) || [
                {
                    id: 1,
                    author: "Bu Rini (Kader RW 04)",
                    time: "Hari ini, 08.15 WIB",
                    text: "Ibu-ibu sekalian, di Balai RW sedang ada bibit cabai rawit & terong polybag gratis dari Puskesmas. Monggo diambil untuk pekarangan!",
                    likes: 12,
                    comments: [
                        { author: "Ibu Sari", text: "Terima kasih infonya Bu Rini, saya segera ke Balai RW!", time: "08.30 WIB" }
                    ]
                },
                {
                    id: 2,
                    author: "Pak Joyo (Lansia RW 02)",
                    time: "Kemarin, 16.40 WIB",
                    text: "Alhamdulillah tekanan darah stabil setelah rutin makan sup daun kelor kukus tanpa garam berlebih.",
                    likes: 8,
                    comments: []
                }
            ]
        };

        /* --- 15 RESEP LENGKAP: 5 STUNTING, 5 HIPERTENSI, 5 DIABETES --- */
        const RECIPES_15 = [
            // 5 RESEP STUNTING
            {
                id: 1,
                title: "Sup Bening Ikan Kembung & Daun Kelor",
                category: "stunting",
                time: "20 Menit",
                calories: 195,
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
                desc: "Solusi balita susah makan (GTM) dengan bentuk menarik kaya zinc dan vitamin A.",
                steps: [
                    "Tumis hati sapi giling bersama parutan wortel dan labu dengan mentega tipis.",
                    "Campurkan tumisan ke dalam nasi hangat pulen.",
                    "Bentuk bulat-bulat seukuran kepalan balita menggunakan cetakan bersih.",
                    "Sajikan bersama taburan kuning telur rebus parut."
                ]
            },
            {
                id: 4,
                title: "Opor Telur Puyuh & Tempe Kuah Susu Kedelai",
                category: "stunting",
                time: "25 Menit",
                calories: 210,
                desc: "Mengganti santan kental dengan susu kedelai tanpa gula untuk protein ganda aman cerna.",
                steps: [
                    "Rebus telur puyuh hingga matang lalu kupas bersih.",
                    "Tumis bumbu putih (bawang merah, bawang putih, ketumbar, kemiri sangrai).",
                    "Tuang susu kedelai murni dan masukkan tempe potong dadu bersama telur puyuh.",
                    "Masak api kecil hingga bumbu meresap dan kuah mengental harum."
                ]
            },
            {
                id: 5,
                title: "Nasi Tim Ikan Lele Gurih & Brokoli Cincang",
                category: "stunting",
                time: "30 Menit",
                calories: 205,
                desc: "Lele kaya asam lemak esensial fosfor pendukung pertumbuhan tinggi badan anak.",
                steps: [
                    "Fillet daging lele segar, cincang halus bersama bawang putih dan daun bawang.",
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
                desc: "Tinggi kalium alami dari labu siam untuk melenturkan pembuluh darah lansia.",
                steps: [
                    "Kukus tempe sebentar lalu potong korek api halus.",
                    "Tumis bawang putih dan irisan cabai merah tanpa minyak berlebih.",
                    "Masukkan serutan labu siam dan tempe kukus, percikkan sedikit air kaldu jamur non-MSG.",
                    "Masak cepat hingga labu layu renyah dan sajikan segar."
                ]
            },
            {
                id: 7,
                title: "Sayur Bening Oyong Jagung Manis Tanpa Garam Meja",
                category: "hipertensi",
                time: "15 Menit",
                calories: 110,
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
                desc: "Aroma kemangi dan rempah menggantikan kebutuhan rasa asin garam.",
                steps: [
                    "Suwir jamur tiram dan remas dengan air hangat, tiriskan hingga kering.",
                    "Campur jamur bersama tahu bejek, irisan tomat hijau, dan bawang merah iris.",
                    "Bungkus rapat dengan daun pisang dan sematkan lidi di ujungnya.",
                    "Kukus selama 20 menit lalu panggang teflon sebentar untuk aroma sangit sedap."
                ]
            },
            {
                id: 9,
                title: "Ikan Mas Panggang Kunyit Asam Segar",
                category: "hipertensi",
                time: "25 Menit",
                calories: 180,
                desc: "Kurkumin dan asam jawa membantu melancarkan sirkulasi tekanan sistolik.",
                steps: [
                    "Lumuri ikan mas bersih dengan air asam jawa, parutan kunyit segar, dan ketumbar.",
                    "Diamkan selama 15 menit agar bumbu rempah meresap.",
                    "Panggang di atas wajan anti-lengket dengan api sedang tanpa minyak.",
                    "Balik sekali hingga matang merata dan kulit kecokelatan harum."
                ]
            },
            {
                id: 10,
                title: "Sayur Asem Jakarta Segar Tanpa Terasi",
                category: "hipertensi",
                time: "20 Menit",
                calories: 95,
                desc: "Sensasi asam belimbing wuluh dan asam kandis menyegarkan tanpa menaikkan tensi.",
                steps: [
                    "Didihkan air dengan bumbu halus (bawang merah, cabai merah, kemiri bakar).",
                    "Masukkan kacang panjang, labu siam, dan melinjo.",
                    "Beri air perasan asam jawa muda murni.",
                    "Masak sampai sayuran matang pas tanpa menambahkan terasi olahan tinggi garam."
                ]
            },

            // 5 RESEP DIABETES
            {
                id: 11,
                title: "Nasi Merah Ubi Ungu Kukus & Teri Sangrai",
                category: "diabetes",
                time: "30 Menit",
                calories: 190,
                desc: "Karbohidrat kompleks pelepasan lambat menjaga lonjakan gula darah postprandial.",
                steps: [
                    "Campur beras merah yang sudah direndam dengan potongan ubi ungu dadu kecil.",
                    "Masak di rice cooker atau kukusan dengan takaran air cukup.",
                    "Sangrai ikan teri tawar tanpa minyak di wajan terpisah hingga renyah.",
                    "Taburkan teri sangrai di atas nasi merah hangat."
                ]
            },
            {
                id: 12,
                title: "Tumis Buncis Tahu Bumbu Lengkuas Serat Tinggi",
                category: "diabetes",
                time: "15 Menit",
                calories: 135,
                desc: "Serat larut buncis terbukti memperlambat penyerapan glukosa di usus halus.",
                steps: [
                    "Iris serong buncis muda dan potong dadu tahu putih kukus.",
                    "Tumis bawang putih cincang dan lengkuas geprek hingga wangi.",
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
                desc: "Polifenol daun katuk kaya antioksidan pelindung sel beta pankreas.",
                steps: [
                    "Petik daun katuk segar, cuci bersih dengan air mengalir.",
                    "Didihkan air bersama irisan bawang merah dan temu kunci.",
                    "Masukkan jagung manis muda (putren), masak 3 menit.",
                    "Masukkan daun katuk, didihkan selama 2 menit lalu angkat."
                ]
            },
            {
                id: 14,
                title: "Pecel Sayur Kukus Saus Kacang Sangrai Tanpa Gula Jawa",
                category: "diabetes",
                time: "20 Menit",
                calories: 160,
                desc: "Bumbu kacang alami tanpa tambahan gula merah menjaga indeks glikemik stabil.",
                steps: [
                    "Kukus terpisah tauge, kangkung, kacang panjang, dan bayam.",
                    "Haluskan kacang tanah sangrai tanpa minyak bersama cabai, bawang putih, dan kencur.",
                    "Larutkan bumbu dengan air asam jawa hangat tanpa tambahan gula merah.",
                    "Siram bumbu di atas tumpukan sayuran kukus segar."
                ]
            },
            {
                id: 15,
                title: "Kukus Ikan Kakap Tomat Ceri & Daun Kemangi",
                category: "diabetes",
                time: "20 Menit",
                calories: 175,
                desc: "Protein murni bebas lemak jenuh dan likopen tomat segar mengontrol metabolisme.",
                steps: [
                    "Letakkan fillet kakap putih di piring tahan panas.",
                    "Beri irisan bawang putih, jahe iris korek, dan belahan tomat ceri di atasnya.",
                    "Kukus dalam dandang panas selama 15 menit.",
                    "Beri daun kemangi segar di atas ikan 2 menit sebelum diangkat."
                ]
            }
        ];

        /* --- 2. LOGIKA UMUR & KATEGORISASI OTOMATIS BERDASARKAN TGL LAHIR --- */
        function calculateAgeAndCategory(dobString) {
            const birthDate = new Date(dobString);
            const today = new Date();
            
            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            
            if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
                years--;
                months += 12;
            }

            let category = 'dewasa';
            let badgeColor = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
            let label = 'Dewasa';

            if (years < 5) {
                category = 'balita';
                label = 'Balita';
                badgeColor = 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300';
            } else if (years >= 5 && years <= 11) {
                category = 'anak';
                label = 'Anak-Anak';
                badgeColor = 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300';
            } else if (years >= 12 && years <= 18) {
                category = 'remaja';
                label = 'Remaja';
                badgeColor = 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300';
            } else if (years >= 19 && years <= 59) {
                category = 'dewasa';
                label = 'Dewasa';
                badgeColor = 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300';
            } else {
                category = 'lansia';
                label = 'Lansia';
                badgeColor = 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300';
            }

            const ageText = years === 0 ? `${months} Bulan` : `${years} Tahun`;
            return { years, months, ageText, category, label, badgeColor };
        }

        function renderFamilyMembers() {
            const container = document.getElementById('family-members-list');
            container.innerHTML = '';
            
            const categoryCounts = {};

            APP_DATA.familyMembers.forEach(m => {
                const info = calculateAgeAndCategory(m.dob);
                categoryCounts[info.label] = (categoryCounts[info.label] || 0) + 1;

                const card = document.createElement('div');
                card.className = 'p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700 flex flex-col justify-between shadow-xs';
                card.innerHTML = `
                    <div>
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${info.badgeColor}">
                                ${info.label} (${info.ageText})
                            </span>
                            <button onclick="removeFamilyMember(${m.id})" title="Hapus Anggota" class="text-slate-400 hover:text-rose-500 text-xs"><i class="fa-solid fa-trash"></i></button>
                        </div>
                        <h4 class="font-bold text-sm text-slate-900 dark:text-white">${m.name}</h4>
                        <span class="text-[10px] text-slate-400 block mt-0.5"><i class="fa-regular fa-calendar mr-1"></i>Lahir: ${m.dob}</span>
                        <p class="text-xs text-slate-500 dark:text-slate-300 mt-2 leading-relaxed">${m.note}</p>
                    </div>
                `;
                container.appendChild(card);
            });

            const summaryStr = Object.entries(categoryCounts).map(([cat, cnt]) => `${cnt} ${cat}`).join(', ');
            document.getElementById('family-summary-badge').textContent = summaryStr || 'Belum ada anggota terdaftar';
        }

        function openAddMemberModal() { document.getElementById('member-modal').classList.remove('hidden'); }
        function closeAddMemberModal() { document.getElementById('member-modal').classList.add('hidden'); }

        function saveNewFamilyMember(e) {
            e.preventDefault();
            const newMem = {
                id: Date.now(),
                name: document.getElementById('new-member-name').value,
                dob: document.getElementById('new-member-dob').value,
                note: document.getElementById('new-member-note').value || 'Pola asupan gizi seimbang'
            };
            APP_DATA.familyMembers.push(newMem);
            localStorage.setItem('pangan_members_dob', JSON.stringify(APP_DATA.familyMembers));
            renderFamilyMembers();
            closeAddMemberModal();
        }

        function removeFamilyMember(id) {
            if (confirm('Hapus anggota keluarga ini dari pemantauan gizi?')) {
                APP_DATA.familyMembers = APP_DATA.familyMembers.filter(m => m.id !== id);
                localStorage.setItem('pangan_members_dob', JSON.stringify(APP_DATA.familyMembers));
                renderFamilyMembers();
            }
        }

        /* --- 3. FITUR GANTI NAMA PROFIL KELUARGA --- */
        function openEditFamilyModal() {
            document.getElementById('input-family-name').value = APP_DATA.familyName;
            document.getElementById('family-edit-modal').classList.remove('hidden');
        }

        function closeEditFamilyModal() {
            document.getElementById('family-edit-modal').classList.add('hidden');
        }

        function saveFamilyName(e) {
            e.preventDefault();
            const newName = document.getElementById('input-family-name').value.trim();
            if (newName) {
                APP_DATA.familyName = newName;
                localStorage.setItem('pangan_family_name', newName);
                renderFamilyHeader();
                closeEditFamilyModal();
            }
        }

        function renderFamilyHeader() {
            document.getElementById('banner-greeting').textContent = `Selamat Sehat, ${APP_DATA.familyName}!`;
            const authContainer = document.getElementById('auth-section');
            authContainer.innerHTML = `
                <div onclick="openEditFamilyModal()" title="Klik untuk mengganti nama keluarga" class="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-700 cursor-pointer group">
                    <div class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-bold text-xs group-hover:ring-2 group-hover:ring-emerald-500 transition">
                        ${APP_DATA.familyName.charAt(0)}
                    </div>
                    <div class="hidden sm:block text-left">
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 block leading-tight">${APP_DATA.familyName}</span>
                        <span class="text-[9px] text-slate-400">Klik ganti nama</span>
                    </div>
                    <i class="fa-solid fa-pen text-[10px] text-slate-400 group-hover:text-emerald-600 ml-1"></i>
                </div>
            `;
        }

        /* --- 4. NAVIGASI DENGAN INDIKATOR AKTIF TEGAS SEJAK AWAL --- */
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

        /* --- 5. PANDUAN GIZI TERMASUK TAB REMAJA --- */
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

        function setLifeCycle(cycle) {
            ['balita', 'anak', 'remaja', 'dewasa', 'lansia'].forEach(c => {
                const btn = document.getElementById(`btn-cycle-${c}`);
                if (c === cycle) {
                    btn.className = 'px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-xs';
                } else {
                    btn.className = 'px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300';
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
        }

        /* --- 6. PETA DENGAN INDIKATOR FILTER JELAS & MARKER BERWARNA --- */
        let leafletMap = null;
        let mapMarkers = [];

        const LOCATIONS = [
            { name: "Pasar Tradisional Merdeka", type: "pasar", lat: -6.2415, lng: 106.7905, desc: "Pasar grosir komoditas pokok pangan segar bersubsidi.", color: "orange" },
            { name: "Gerai Beras Murah Mandiri BAPANAS", type: "pasar", lat: -6.2450, lng: 106.7950, desc: "Distribusi beras SPHP Rp 54.000/5kg dan Minyakita.", color: "orange" },
            { name: "Kebun Gizi Hidroponik Komunitas RW 03", type: "kebun", lat: -6.2390, lng: 106.7920, desc: "Petik bayam & kelor mandiri gratis untuk keluarga balita.", color: "green" },
            { name: "Kebun Sayur Pekarangan Berseri RW 05", type: "kebun", lat: -6.2435, lng: 106.7860, desc: "Sentra tanaman cabai, terong, dan kangkung pekarangan.", color: "green" },
            { name: "Posko Penimbangan & Gizi Terpadu Melati", type: "posko", lat: -6.2470, lng: 106.7890, desc: "Layanan konsultasi gizi balita & lansia gratis setiap hari kerja.", color: "blue" }
        ];

        function initLeafletMap() {
            if (leafletMap) return;
            leafletMap = L.map('map').setView([-6.2425, 106.7915], 14);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(leafletMap);

            LOCATIONS.forEach(loc => {
                const marker = L.marker([loc.lat, loc.lng]).addTo(leafletMap);
                const typeLabel = loc.type === 'pasar' ? '🛒 Pasar Murah' : loc.type === 'kebun' ? '🌿 Kebun Gizi' : '🏥 Posko Gizi';
                marker.bindPopup(`
                    <div style="font-family:'Plus Jakarta Sans',sans-serif; font-size:12px;">
                        <span style="font-size:10px; font-weight:bold; color:#059669; text-transform:uppercase;">${typeLabel}</span>
                        <h4 style="font-weight:bold; margin:2px 0 4px 0;">${loc.name}</h4>
                        <p style="color:#64748b; font-size:11px; margin:0;">${loc.desc}</p>
                    </div>
                `);
                marker.locType = loc.type;
                mapMarkers.push(marker);
            });
        }

        function filterMap(type) {
            ['all', 'pasar', 'kebun', 'posko'].forEach(t => {
                const btn = document.getElementById(`btn-map-${t}`);
                if (btn) {
                    if (t === type) {
                        btn.className = 'map-filter-btn px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold shadow-xs transition';
                    } else {
                        btn.className = 'map-filter-btn px-3 py-1.5 rounded-lg text-slate-600 dark:text-slate-300 font-medium hover:bg-white dark:hover:bg-slate-800 transition';
                    }
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

        /* --- 7. RUANG BERBAGI WARGA DENGAN FITUR TANGGAPI AKTIF --- */
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

                    <!-- Kotak Balas Komentar -->
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
            const box = document.getElementById(`reply-box-${postId}`);
            box.classList.toggle('hidden');
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
                post.comments.push({
                    author: author,
                    text: text,
                    time: "Baru saja"
                });
                localStorage.setItem('pangan_forum_replies', JSON.stringify(APP_DATA.forumPosts));
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
            localStorage.setItem('pangan_forum_replies', JSON.stringify(APP_DATA.forumPosts));
            document.getElementById('forum-content').value = '';
            document.getElementById('forum-author').value = '';
            renderForum();
        }

        function likePost(id) {
            const p = APP_DATA.forumPosts.find(x => x.id === id);
            if (p) {
                p.likes++;
                localStorage.setItem('pangan_forum_replies', JSON.stringify(APP_DATA.forumPosts));
                renderForum();
            }
        }

        /* --- 8. RENDER 15 RESEP DENGAN FILTER & MODE MASAK --- */
        function renderRecipes(list) {
            const grid = document.getElementById('recipe-cards-grid');
            grid.innerHTML = '';
            
            list.forEach(r => {
                const badge = r.category === 'stunting' ? 'bg-amber-100 text-amber-800' :
                              r.category === 'hipertensi' ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800';
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
                    alert('Waktu memasak selesai! Periksa kematangan makanan Anda.');
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

        /* --- 9. GAME GO, SLOW, WHOA --- */
        const GAME_FOODS = [
            { icon: "🥬", name: "Sayur Bayam Bening", desc: "Sayuran hijau segar tanpa santan minyak.", answer: "GO" },
            { icon: "🍗", name: "Ayam Goreng Tepung Krispi", desc: "Daging berbalut tepung minyak jenuh tinggi.", answer: "WHOA" },
            { icon: "🍞", name: "Roti Gandum Oles Mentega Tipis", desc: "Karbohidrat kompleks dengan sedikit olesan lemak.", answer: "SLOW" },
            { icon: "🥤", name: "Minuman Soda Tinggi Sirup Fruktosa", desc: "Pemanis murni pemicu lonjakan gula darah.", answer: "WHOA" },
            { icon: "🥚", name: "Telur Rebus Tanpa Garam", desc: "Sumber asam amino murni berdaya cerna tinggi.", answer: "GO" }
        ];
        let gameIndex = 0;
        let gameScore = 0;

        function submitGameAnswer(ans) {
            const current = GAME_FOODS[gameIndex];
            if (ans === current.answer) {
                gameScore += 20;
                confetti({ particleCount: 30, spread: 50 });
                alert(`Tepat sekali! ${current.name} memang berkategori ${current.answer}. (+20 XP)`);
            } else {
                alert(`Kurang tepat. ${current.name} termasuk kategori ${current.answer}.`);
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
                alert(`Luar biasa! Misi selesai dengan Total Skor: ${gameScore} XP!`);
                gameIndex = 0;
                gameScore = 0;
                document.getElementById('game-round').textContent = 1;
                document.getElementById('game-score').textContent = 0;
            }
        }

        /* --- 10. FITUR HIDRASI, ANGGARAN & CUCI TANGAN --- */
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

        function logActivity() {
            alert('Aktivitas fisik keluarga hari ini berhasil dicatat (+25 XP Gizi Sehat)!');
            confetti({ particleCount: 40 });
        }

        let currentBudgetPeriod = 'harian';
        function setBudgetPeriod(period) {
            currentBudgetPeriod = period;
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

        /* --- 11. TOGGLE DARK/LIGHT MODE --- */
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
        if (localStorage.getItem('pangan_theme') === 'dark') {
            document.documentElement.classList.add('dark');
            const icon = document.getElementById('theme-icon');
            if (icon) icon.className = 'fa-solid fa-sun';
        }

        /* --- INISIALISASI SAAT HALAMAN DIBUKA --- */
        document.addEventListener('DOMContentLoaded', () => {
            runPreloader();
            renderFamilyHeader();
            renderFamilyMembers();
            setLifeCycle('balita');
            renderWaterTracker();
            setBudgetPeriod('harian');
            renderShoppingList();
            renderRecipes(RECIPES_15);
            renderForum();
        });
