// =========================================
// CYBER//LAB
// Main JavaScript
// =========================================

console.log("CYBER//LAB initialized.");
console.log("> SYSTEM ONLINE_");

// -----------------------------------------
// MOBILE MENU
// -----------------------------------------

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

const MOBILE_BREAKPOINT = 700;

// Fermer le menu
function closeMenu() {

    if (!nav) return;

    nav.classList.remove("nav-open");

    menuBtn.setAttribute("aria-expanded", "false");
}

// Ouvrir le menu en panneau vertical (animé en CSS)
function openMenu() {

    if (!nav) return;

    nav.classList.add("nav-open");

    menuBtn.setAttribute("aria-expanded", "true");
}

if (menuBtn && nav) {

    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Ouvrir le menu");

    menuBtn.addEventListener("click", () => {

        const isOpen = nav.classList.contains("nav-open");

        if (isOpen) {

            closeMenu();

            menuBtn.setAttribute("aria-expanded", "false");

        } else {

            openMenu();

            menuBtn.setAttribute("aria-expanded", "true");

        }

    });

    // Fermer le menu après un clic sur un lien (vue mobile)
    nav.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            if (window.innerWidth <= MOBILE_BREAKPOINT) {

                closeMenu();

                menuBtn.setAttribute("aria-expanded", "false");

            }

        });

    });

    // Réafficher le menu normal dès qu'on repasse en desktop
    window.addEventListener("resize", () => {

        if (window.innerWidth > MOBILE_BREAKPOINT) {

            closeMenu();

        }

    });

    // Fermer le menu au clic en dehors du panneau
    document.addEventListener("click", (event) => {

        if (!nav.classList.contains("nav-open")) return;

        if (nav.contains(event.target) || menuBtn.contains(event.target)) return;

        closeMenu();

    });

    // Fermer le menu avec la touche Échap
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") closeMenu();

    });

}

// -----------------------------------------
// NAVBAR : version compacte au scroll
// -----------------------------------------

const navbar = document.querySelector(".navbar");

if (navbar) {

    const updateNavbar = () => {

        navbar.classList.toggle("scrolled", window.scrollY > 20);

    };

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, { passive: true });

}

// -----------------------------------------
// APPARITION AU SCROLL
// -----------------------------------------

// Seuls les éléments hors écran sont masqués : si le JS
// ne s'exécute pas, la page reste entièrement lisible.
const REVEAL_TARGETS = [
    ".section-title",
    ".cta",
    ".category-card",
    ".article-card",
    ".resource-group",
    ".resource-item",
    ".news-item",
    ".roadmap-step",
    ".note-box",
    ".warning-box",
    ".lab-info",
    ".article-full h2",
    ".article-full .lab-steps li"
].join(", ");

const REDUCED_MOTION = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !REDUCED_MOTION) {

    const revealTargets = document.querySelectorAll(REVEAL_TARGETS);

    // Effet cascade : décalage progressif entre éléments voisins
    const staggerDelay = (element) => {

        const siblings = Array.prototype.filter.call(
            element.parentNode.children,
            (child) => child.classList.contains("reveal")
        );

        const index = siblings.indexOf(element);

        return Math.min(Math.max(index, 0), 5) * 70;

    };

    const revealObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const element = entry.target;

            element.style.transitionDelay = staggerDelay(element) + "ms";

            element.classList.remove("reveal-pending");
            element.classList.add("reveal-in");

            // Nettoyage : les transitions de survol reprennent la main
            window.setTimeout(() => {

                element.style.transitionDelay = "";

                element.classList.remove("reveal");

            }, 1200);

            revealObserver.unobserve(element);

        });

    }, {
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.1
    });

    revealTargets.forEach((element) => {

        // Élément déjà dans le viewport : pas d'animation, pas de flash
        if (element.getBoundingClientRect().top < window.innerHeight * 0.9) {

            return;

        }

        element.classList.add("reveal", "reveal-pending");

        revealObserver.observe(element);

    });

}