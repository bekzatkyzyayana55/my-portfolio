const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const themeBtn = document.getElementById("themeBtn");

menuBtn?.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// Сохранённую тему включаем при открытии страницы
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀";
}

themeBtn?.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    themeBtn.textContent = isDark ? "☀" : "☾";

    // Запоминаем выбор
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

const contactForm = document.getElementById("contactForm");

contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("sender").value.trim();
    const email = document.getElementById("senderEmail").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");

    if (!name || !email || !message) {
        status.textContent = "Барлық өрістерді толтырыңыз!";
        return;
    }

    status.textContent =
        "Рақмет! Демонстрациялық форма сәтті тексерілді.";

    contactForm.reset();
});
