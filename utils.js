/**
 * PanganKeluarga - Versi 1.1 (Tim Abula, 2026)
 * Berkas: utilitas keamanan (escapeHTML) & penyimpanan aman (loadJSON)
 */

/* ==============================================================
   0. UTILITAS KEAMANAN & PENYIMPANAN
   escapeHTML : mencegah XSS saat input pengguna dimasukkan ke innerHTML
   loadJSON   : membaca localStorage dengan aman (tidak crash bila data rusak)
   ============================================================== */
function escapeHTML(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function loadJSON(key) {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        console.warn('Data tersimpan rusak, diabaikan:', key);
        return null;
    }
}

