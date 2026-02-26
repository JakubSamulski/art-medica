const navbarHTML = `
<nav class="navbar">
    <div class="navbar-container">
        <a href="/" class="navbar-logo">
            <img src="/assets/logo_art_medica.png" alt="Art Medica" />
        </a>
        
        <button class="navbar-toggle" id="mobile-menu" aria-label="Menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </button>
        
        <ul class="navbar-menu" id="nav-menu">
            <li class="navbar-item">
                <a href="/zabiegi-chirurgiczne.html" class="navbar-link">Zabiegi chirurgiczne</a>
            </li>
            <li class="navbar-item">
                <a href="/medycyna-estetyczna.html" class="navbar-link">Medycyna estetyczna</a>
            </li>
            <li class="navbar-item">
                <a href="/chirurgia-estetyczna.html" class="navbar-link">Chirurgia estetyczna</a>
            </li>
            <li class="navbar-item">
                <a href="/lokalizacja.html" class="navbar-link">Lokalizacja</a>
            </li>
        </ul>
    </div>
</nav>
`;

const footerHTML = `
<footer class="footer">
    <div class="footer-container">
        <h2>Kontakt</h2>
        <h3>Ul. Paderewskiego 76b, Gorzów Wielkopolski, Polska</h3>
        <h4>Boczne wejście po lewej stronie budynku</h4>
        <h4>Email: zbigsam@gmail.com</h4>
        <h4>Telefon/SMS/Whatsapp: 515 247 843</h4>
    </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    // Inject Navbar
    const navbarContainer = document.getElementById("navbar-container");
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    }

    // Inject Footer
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navMenu = document.getElementById("nav-menu");

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener("click", () => {
            mobileMenu.classList.toggle("is-active");
            navMenu.classList.toggle("active");
        });
    }

    // Accordion Logic
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach(acc => {
        acc.addEventListener("click", function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;

            // Toggle icon
            const icon = this.querySelector(".accordion-icon");
            if (icon) {
                if (this.classList.contains("active")) {
                    icon.style.transform = "rotate(180deg)";
                } else {
                    icon.style.transform = "rotate(0deg)";
                }
            }

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});
