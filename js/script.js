// ===== CONFIGURAÇÕES AO CARREGAR =====
document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("temaBtn");

    // ===== TEMA =====
    const tema = localStorage.getItem("tema");

    if (tema === "light") {
        document.body.classList.add("light");
        if (btn) btn.innerText = "☀️";
    } else {
        if (btn) btn.innerText = "🌙";
    }

    // ===== FONTE =====
    const fonteSalva = localStorage.getItem("fonte");

    if (fonteSalva) {
        tamanho = parseInt(fonteSalva);
        aplicarFonte();
    }
});


// ===== ALTERAR TEMA =====
function toggleTheme() {
    const btn = document.getElementById("temaBtn");

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("tema", "light");
        if (btn) btn.innerText = "☀️";
    } else {
        localStorage.setItem("tema", "dark");
        if (btn) btn.innerText = "🌙";
    }
}


// ===== ALTERAR FONTE =====
let nivel = 0;

// ===== APLICAR FONTE =====
function aplicarFonte() {
    document.body.classList.remove("font-1", "font-2");

    if (nivel === 1) {
        document.body.classList.add("font-1");
    } else if (nivel === 2) {
        document.body.classList.add("font-2");
    }

    localStorage.setItem("fonteNivel", String(nivel));
}

// ===== AUMENTAR =====
function aumentarFonte() {
    if (nivel < 1) {
        nivel++;
        aplicarFonte();
    }
}

// ===== DIMINUIR =====
function diminuirFonte() {
    if (nivel > 0) {
        nivel--;
        aplicarFonte();
    }
}

// ===== CARREGAR AUTOMÁTICO (ESSA É A PARTE IMPORTANTE) =====
document.addEventListener("DOMContentLoaded", function () {

    const salvo = localStorage.getItem("fonteNivel");

    if (salvo !== null) {
        nivel = parseInt(salvo);
    }

    // FORÇA aplicar sempre (mesmo se 0)
    aplicarFonte();
});