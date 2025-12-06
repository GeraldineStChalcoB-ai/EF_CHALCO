const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function abrirMenu() {
    sideMenu.classList.add("abierto");
    overlay.classList.add("visible");
    menuBtn.setAttribute("aria-expanded", "true");
}

function cerrarMenu() {
    sideMenu.classList.remove("abierto");
    overlay.classList.remove("visible");
    menuBtn.setAttribute("aria-expanded", "false");
}

if (menuBtn && overlay) {
    menuBtn.onclick = () => sideMenu.classList.contains("abierto") ? cerrarMenu() : abrirMenu();
    overlay.onclick = cerrarMenu;

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") cerrarMenu();
    });
}