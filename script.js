AOS.init({offset:0, disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches});

const dropdown = document.querySelector(".dropdown");
const hamburgBtn = document.querySelector(".hamburg");
function hamburg(){
    dropdown.classList.add("open");
    hamburgBtn.setAttribute("aria-expanded", "true");
}
function cancel(){
    dropdown.classList.remove("open");
    hamburgBtn.setAttribute("aria-expanded", "false");
}
// tutup menu kalau layar dilebarkan ke ukuran desktop
window.matchMedia("(min-width:885px)").addEventListener("change", e => { if (e.matches) cancel(); });
document.getElementById("year").textContent = new Date().getFullYear();

const nav = document.querySelector("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const root = document.documentElement;
window.addEventListener("pointermove", e => {
    root.style.setProperty("--mx", e.clientX + "px");
    root.style.setProperty("--my", e.clientY + "px");
}, { passive: true });

// foto sedikit miring mengikuti kursor
const photo = document.querySelector(".hero-photo");
photo.addEventListener("pointermove", e => {
    const r = photo.getBoundingClientRect();
    photo.style.setProperty("--rx", ((e.clientY - r.top) / r.height - 0.5) * -10 + "deg");
    photo.style.setProperty("--ry", ((e.clientX - r.left) / r.width - 0.5) * 10 + "deg");
});
photo.addEventListener("pointerleave", () => {
    photo.style.setProperty("--rx", "0deg");
    photo.style.setProperty("--ry", "0deg");
});

document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("pointermove", e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--x", (e.clientX - r.left) + "px");
        card.style.setProperty("--y", (e.clientY - r.top) + "px");
    });
});
