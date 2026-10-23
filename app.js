 /* --- 1. STATE & PENYIMPANAN LOCALSTORAGE --- */
        const APP_DATA = {
            currentUser: JSON.parse(localStorage.getItem('pangan_user')) || {
                name: "Keluarga Ibu Sari",
                isLoggedIn: true
            },
            familyMembers: JSON.parse(localStorage.getItem('pangan_members')) || [
                { id: 1, name: "Arka", category: "balita", age: "3 th", note: "Fokus protein pencegah stunting" },
                { id: 2, name: "Ibu Sari", category: "dewasa", age: "34 th", note: "Serat aktif & mikronutrisi" },
                { id: 3, name: "Pak Danu", category: "dewasa", age: "37 th", note: "Stamina kerja & kontrol kalori" },
                { id: 4, name: "Nenek Aminah", category: "lansia", age: "68 th", note: "Rendah natrium & purin" }
            ],
            waterGlasses: parseInt(localStorage.getItem('pangan_water')) || 6,
            shoppingItems: JSON.parse(localStorage.getItem('pangan_shopping')) || [
                { id: 1, name: "Telur Ayam Negeri (1 kg)", price: 28000, category: "protein", checked: true },
                { id: 2, name: "Tempe Daun (3 papan)", price: 12000, category: "protein", checked: false },
                { id: 3, name: "Bayam Hijau Segar (2 ikat)", price: 6000, category: "sayur", checked: true },
                { id: 4, name: "Beras SPHP Bulog (5 kg)", price: 65000, category: "karbo", checked: false }
            ],
            forumPosts: JSON.parse(localStorage.getItem('pangan_forum')) || [
                { id: 1, author: "Bu Rini Handayani (Kader RW 04)", time: "Hari ini, 08.15 WIB", text: "Ibu-ibu, di Balai RW sedang ada pembagian polybag bibit cabai rawit dan terong ungu gratis hasil binaan Puskesmas. Monggo merapat!", likes: 14 },
                { id: 2, author: "Mbah Joyo (Lansia RW 02)", time: "Kemarin, 16.40 WIB", text: "Alhamdulillah tensi stabil setelah rutin minum kuah sayur daun kelor pot depan rumah tanpa garam berlebih.", likes: 8 }
            ]
        };

        const RECIPES = [
            {
                id: 1,
                title: "Sup Bening Ikan Kembung & Daun Kelor",
                category: "stunting",
                allergy: "bebas-kacang",
                calories: 195,
                time: "20 Menit",
                desc: "Tinggi protein hewani omega-3 dan zat besi alami untuk tumbuh kembang otak balita.",
                steps: [
                    "Rebus 600 ml air bersih bersama potongan jahe geprek, serai, dan daun salam hingga harum.",
                    "Masukkan ikan kembung segar yang telah dibersihkan dan dipotong dua. Masak dengan api sedang.",
                    "Tambahkan irisan labu siam dan wortel, rebus selama 5 menit sampai empuk.",
                    "Matikan api, masukkan daun kelor segar. Aduk sebentar dan sajikan selagi hangat."
                ]
            },
            {
                id: 2,
                title: "Pepes Tahu Telur Hati Ayam Tanpa MSG",
                category: "stunting",
                allergy: "bebas-seafood",
                calories: 160,
                time: "25 Menit",
                desc: "Pilihan lembut ramah kunyah balita dan lansia, kaya zat besi pencegah anemia.",
                steps: [
                    "Haluskan 300 gram tahu putih dengan garpu.",
                    "Campurkan rebusan hati ayam cincang halus, telur kocok, dan irisan daun kemangi.",
                    "Bungkus adonan seukuran kepalan tangan ke dalam daun pisang yang sudah dilayukan.",
                    "Kukus bungkusan selama 20 menit hingga matang padat dan harum merata."
                ]
            },
            {
                id: 3,
                title: "Orak-Arik Tempe & Labu Siam Rendah Garam",
                category: "hipertensi",
                allergy: "bebas-seafood",
                calories: 140,
                time: "15 Menit",
                desc: "Kaya serat larut air dan kalium untuk menjaga elastisitas pembuluh darah lansia.",
                steps: [
                    "Kukus tempe sebentar lalu potong korek api tipis.",
                    "Tumis bawang putih dan bawang merah iris dengan 1 sendok teh minyak kelapa hingga wangi.",
                    "Masukkan serutan labu siam dan tempe. Beri sedikit air agar empuk.",
                    "Beri sejumput garam meja dan lada bubuk sebelum diangkat."
                ]
            }
        ];

        /* --- 2. DARK MODE TOGGLE --- */
        function toggleDarkMode() {
            const html = document.documentElement;
            const icon = document.getElementById('theme-icon');
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('pangan_theme', 'light');
                icon.className = 'fa-solid fa-moon';
            } else {
                html.classList.add('dark');
                localStorage.setItem('pangan_theme', 'dark');
                icon.className = 'fa-solid fa-sun';
            }
        }
        if (localStorage.getItem('pangan_theme') === 'dark') {
            document.documentElement.classList.add('dark');
            document.getElementById('theme-icon').className = 'fa-solid fa-sun';
        }

        /* --- 3. NAVIGASI HALAMAN (ROUTER) --- */
        function navigate(pageId) {
            const pages = ['beranda', 'gizi', 'ekonomi', 'resep', 'edukasi', 'komunitas'];
            pages.forEach(p => {
                const el = document.getElementById(`page-${p}`);
                const nav = document.getElementById(`nav-${p}`);
                if (p === pageId) {
                    el.classList.remove('hidden');
                    if (nav) nav.className = 'nav-item px-3 py-2 rounded-lg text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-slate-800 transition';
                } else {
                    el.classList.add('hidden');
                    if (nav) nav.className = 'nav-item px-3 py-2 rounded-lg hover:text-emerald-600 dark:hover:text-emerald-400 transition text-slate-600 dark:text-slate-300';
                }
            });
            document.getElementById('mobile-menu').classList.add('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if (pageId === 'komunitas') setTimeout(initLeafletMap, 200);
        }

        function toggleMobileMenu() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        /* --- 4. RENDER PROFIL ANGGOTA KELUARGA --- */
        function renderFamilyMembers() {
            const container = document.getElementById('family-members-list');
            container.innerHTML = '';
            APP_DATA.familyMembers.forEach(m => {
                const badgeColor = m.category === 'balita' ? 'bg-amber-100 text-amber-800' :
                                   m.category === 'lansia' ? 'bg-purple-100 text-purple-800' : 'bg-emerald-100 text-emerald-800';
                const el = document.createElement('div');
                el.className = 'p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700 flex flex-col justify-between';
                el.innerHTML = `
                    <div>
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${badgeColor}">
                                ${m.category} (${m.age})
                            </span>
                            <button onclick="removeFamilyMember(${m.id})" class="text-slate-400 hover:text-rose-500 text-xs"><i class="fa-solid fa-trash"></i></button>
                        </div>
                        <h4 class="font-bold text-sm text-slate-900 dark:text-white">${m.name}</h4>
                        <p class="text-xs text-slate-500 dark:text-slate-300 mt-1">${m.note}</p>
                    </div>
                `;
                container.appendChild(el);
            });
        }

        function openAddMemberModal() { document.getElementById('member-modal').classList.remove('hidden'); }
        function closeAddMemberModal() { document.getElementById('member-modal').classList.add('hidden'); }
        function saveNewFamilyMember(e) {
            e.preventDefault();
            const newMem = {
                id: Date.now(),
                name: document.getElementById('new-member-name').value,
                category: document.getElementById('new-member-cat').value,
                age: document.getElementById('new-member-cat').value === 'balita' ? '3 th' : '40 th',
                note: document.getElementById('new-member-note').value || 'Pola makan seimbang'
            };
            APP_DATA.familyMembers.push(newMem);
            localStorage.setItem('pangan_members', JSON.stringify(APP_DATA.familyMembers));
            renderFamilyMembers();
            closeAddMemberModal();
        }
        function removeFamilyMember(id) {
            APP_DATA.familyMembers = APP_DATA.familyMembers.filter(m => m.id !== id);
            localStorage.setItem('pangan_members', JSON.stringify(APP_DATA.familyMembers));
            renderFamilyMembers();
        }

        /* --- 5. PANDUAN GIZI & SIKLUS HIDUP --- */
        const LIFE_CYCLE_DATA = {
            balita: {
                title: "Target Gizi: Balita (1-5 Tahun)",
                cal: "350 - 450 Kkal / Kali Makan",
                desc: "Prioritas asam amino esensial tinggi untuk pencegahan stunting dan pertumbuhan sel otak.",
                carb: "Nasi lembek / ubi lumat (100 - 150 gr)",
                veg: "Bayam, wortel cincang halus (100 gr)",
                prot: "Ikan kembung, telur rebus, hati ayam (50 gr)",
                fruit: "Pepaya manis / pisang kepok (50 gr)"
            },
            anak: {
                title: "Target Gizi: Anak-Anak (6-12 Tahun)",
                cal: "500 - 650 Kkal / Kali Makan",
                desc: "Kebutuhan energi aktivitas belajar dan kalsium untuk pertumbuhan tulang.",
                carb: "Nasi putih / jagung pipil (150 - 200 gr)",
                veg: "Sayur lodeh, capcay wortel buncis (150 gr)",
                prot: "Tempe goreng, ayam ungkep bumbu kuning (75 gr)",
                fruit: "Jeruk manis / semangka segar (75 gr)"
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
            ['balita', 'anak', 'dewasa', 'lansia'].forEach(c => {
                const btn = document.getElementById(`btn-cycle-${c}`);
                if (c === cycle) {
                    btn.className = 'px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white shadow-sm';
                } else {
                    btn.className = 'px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300';
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

        /* --- 6. PENGINGAT PERILAKU HIDUP SEHAT --- */
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

        /* --- 7. EKONOMI & DAFTAR BELANJA OTOMATIS --- */
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

        /* --- 8. DAPUR RESEP & MODE MASAK DISTRACTION-FREE --- */
        function renderRecipes(recipesToRender) {
            const grid = document.getElementById('recipe-cards-grid');
            grid.innerHTML = '';
            recipesToRender.forEach(r => {
                const card = document.createElement('div');
                card.className = 'bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm flex flex-col justify-between';
                card.innerHTML = `
                    <div class="p-5">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                                ${r.category}
                            </span>
                            <span class="text-xs text-slate-400"><i class="fa-regular fa-clock mr-1"></i>${r.time}</span>
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
            const allergy = document.getElementById('recipe-allergy-filter').value;

            const filtered = RECIPES.filter(r => {
                const matchQuery = r.title.toLowerCase().includes(query) || r.desc.toLowerCase().includes(query);
                const matchMed = (med === 'all') || (r.category === med);
                const matchAllergy = (allergy === 'all') || (r.allergy === allergy);
                return matchQuery && matchMed && matchAllergy;
            });
            renderRecipes(filtered);
        }

        let activeRecipe = null;
        let currentStepIndex = 0;
        let cookTimerInterval = null;
        let cookTimeRemaining = 600;

        function openCookingMode(recipeId) {
            activeRecipe = RECIPES.find(r => r.id === recipeId);
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
            { icon: "🥬", name: "Sayur Bayam Bening", desc: "Sayuran hijau segar tanpa santan kental.", answer: "GO" },
            { icon: "🍗", name: "Ayam Goreng Tepung Krispi", desc: "Daging ayam berbalut tepung minyak jenuh tinggi.", answer: "WHOA" },
            { icon: "🍞", name: "Roti Gandum Oles Mentega Tipis", desc: "Karbohidrat kompleks berserat sedikit olesan lemak.", answer: "SLOW" },
            { icon: "🥤", name: "Minuman Soda / Sirup Tinggi Gula", desc: "Pemanis tambahan tinggi pemicu lonjakan insulin.", answer: "WHOA" },
            { icon: "🥚", name: "Telur Rebus Tanpa Garam", desc: "Sumber protein esensial murni berdaya cerna tinggi.", answer: "GO" }
        ];
        let gameIndex = 0;
        let gameScore = 0;

        function submitGameAnswer(ans) {
            const current = GAME_FOODS[gameIndex];
            if (ans === current.answer) {
                gameScore += 20;
                confetti({ particleCount: 30, spread: 50 });
                alert(`Benar! ${current.name} memang berkategori ${current.answer}. (+20 XP)`);
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
                alert(`Luar biasa! Misi Edukasi selesai dengan Total Skor: ${gameScore} XP!`);
                gameIndex = 0;
                gameScore = 0;
                document.getElementById('game-round').textContent = 1;
                document.getElementById('game-score').textContent = 0;
            }
        }

        /* --- 10. PETA INTERAKTIF LEAFLET --- */
        let leafletMap = null;
        let mapMarkers = [];

        const LOCATIONS = [
            { name: "Pasar Tradisional Kebayoran Berseri", type: "pasar", lat: -6.2415, lng: 106.7905, desc: "Bahan pangan pokok segar harga bersubsidi BAPANAS" },
            { name: "Gerai Pangan Murah Mandiri RW 05", type: "pasar", lat: -6.2450, lng: 106.7950, desc: "Penyaluran beras SPHP dan minyak kita" },
            { name: "Kebun Komunitas Hijau Berdaya", type: "kebun", lat: -6.2390, lng: 106.7920, desc: "Panen bersama sayuran daun kelor & cabai hidroponik" }
        ];

        function initLeafletMap() {
            if (leafletMap) return;
            leafletMap = L.map('map').setView([-6.2415, 106.7905], 14);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(leafletMap);

            LOCATIONS.forEach(loc => {
                const marker = L.marker([loc.lat, loc.lng]).addTo(leafletMap);
                marker.bindPopup(`<b>${loc.name}</b><br><span style="font-size:11px">${loc.desc}</span>`);
                marker.locType = loc.type;
                mapMarkers.push(marker);
            });
        }

        function filterMap(type) {
            if (!leafletMap) return;
            mapMarkers.forEach(m => {
                if (type === 'all' || m.locType === type) {
                    leafletMap.addLayer(m);
                } else {
                    leafletMap.removeLayer(m);
                }
            });
        }

        /* --- 11. FORUM DISKUSI WARGA --- */
        function renderForum() {
            const container = document.getElementById('forum-posts-container');
            container.innerHTML = '';
            APP_DATA.forumPosts.forEach(post => {
                const card = document.createElement('div');
                card.className = 'p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700 space-y-1 text-xs';
                card.innerHTML = `
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-slate-900 dark:text-white">${post.author}</span>
                        <span class="text-[10px] text-slate-400">${post.time}</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${post.text}</p>
                    <div class="pt-1 flex items-center gap-4 text-[11px] text-slate-400 font-semibold">
                        <button onclick="likePost(${post.id})" class="hover:text-emerald-600 transition"><i class="fa-regular fa-thumbs-up mr-1"></i>${post.likes} Dukungan</button>
                        <button class="hover:text-emerald-600 transition"><i class="fa-regular fa-comment mr-1"></i>Tanggapi</button>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        function addForumPost(e) {
            e.preventDefault();
            const text = document.getElementById('forum-content').value;
            const author = document.getElementById('forum-author').value;
            const newPost = {
                id: Date.now(),
                author: author,
                time: "Baru saja",
                text: text,
                likes: 1
            };
            APP_DATA.forumPosts.unshift(newPost);
            localStorage.setItem('pangan_forum', JSON.stringify(APP_DATA.forumPosts));
            document.getElementById('forum-content').value = '';
            renderForum();
        }

        function likePost(id) {
            const p = APP_DATA.forumPosts.find(x => x.id === id);
            if (p) {
                p.likes++;
                localStorage.setItem('pangan_forum', JSON.stringify(APP_DATA.forumPosts));
                renderForum();
            }
        }

        /* --- 12. AUTENTIKASI BIOMETRIK & 1-KLIK (SIMULASI) --- */
        function openAuthModal() { document.getElementById('auth-modal').classList.remove('hidden'); }
        function closeAuthModal() { document.getElementById('auth-modal').classList.add('hidden'); }

        function renderAuthButton() {
            const container = document.getElementById('auth-section');
            if (APP_DATA.currentUser.isLoggedIn) {
                container.innerHTML = `
                    <div class="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-700">
                        <div class="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center font-bold text-xs">
                            S
                        </div>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-100 hidden sm:inline">${APP_DATA.currentUser.name}</span>
                        <button onclick="logout()" class="text-slate-400 hover:text-rose-500 text-xs ml-1"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
                    </div>
                `;
            } else {
                container.innerHTML = `
                    <button onclick="openAuthModal()" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm transition">
                        Masuk Akun
                    </button>
                `;
            }
        }

        function simulateBiometricAuth() {
            closeAuthModal();
            setTimeout(() => {
                alert('Autentikasi Sidik Jari Berhasil! Selamat datang kembali, Keluarga Ibu Sari.');
                APP_DATA.currentUser.isLoggedIn = true;
                localStorage.setItem('pangan_user', JSON.stringify(APP_DATA.currentUser));
                renderAuthButton();
            }, 600);
        }

        function simulateMagicLinkAuth() {
            closeAuthModal();
            setTimeout(() => {
                alert('Tautan Akses Sekali Klik Terverifikasi! Berhasil masuk tanpa sandi.');
                APP_DATA.currentUser.isLoggedIn = true;
                localStorage.setItem('pangan_user', JSON.stringify(APP_DATA.currentUser));
                renderAuthButton();
            }, 600);
        }

        function logout() {
            APP_DATA.currentUser.isLoggedIn = false;
            localStorage.setItem('pangan_user', JSON.stringify(APP_DATA.currentUser));
            renderAuthButton();
        }

        /* --- INISIALISASI SAAT HALAMAN DIBUKA --- */
        document.addEventListener('DOMContentLoaded', () => {
            renderAuthButton();
            renderFamilyMembers();
            setLifeCycle('balita');
            renderWaterTracker();
            setBudgetPeriod('harian');
            renderShoppingList();
            renderRecipes(RECIPES);
            renderForum();
        });