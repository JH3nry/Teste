const whatsappFloat = document.querySelector('.whatsapp-float');
const sectionHome = document.querySelector('#section-home');

function toggleWhatsAppButton() {
    const scrollPos = window.scrollY || window.pageYOffset;
    const homeBottom = sectionHome.offsetTop + sectionHome.offsetHeight;

    if (scrollPos > homeBottom - window.innerHeight * 0.3) {
        whatsappFloat.classList.remove('d-none');
    } else {
        whatsappFloat.classList.add('d-none');
    }
}

// Controle de menu ativo baseado na rolagem
const menuLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
const sections = Array.from(menuLinks).map(link => document.querySelector(link.getAttribute('href')));

function onScroll() {
    const scrollPos = window.scrollY || window.pageYOffset;

    let currentSectionIndex = sections.findIndex((section, i) => {
        if (!section) return false;
        const top = section.offsetTop - 100;
        const nextSection = sections[i + 1];
        const nextTop = nextSection ? nextSection.offsetTop - 100 : Infinity;
        return scrollPos >= top && scrollPos < nextTop;
    });

    if (currentSectionIndex === -1) currentSectionIndex = sections.length - 1;

    menuLinks.forEach((link, i) => {
        if (i === currentSectionIndex) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Corrige o último item se o scroll estiver no final da página
    if ((window.innerHeight + scrollPos) >= document.body.scrollHeight - 10) {
        menuLinks.forEach(link => link.classList.remove('active'));
        menuLinks[menuLinks.length - 1].classList.add('active');
    }
}

// Força scroll no topo ao carregar
function resetScroll() {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', () => {
    toggleWhatsAppButton();
    onScroll();
});

document.addEventListener('DOMContentLoaded', () => {
    resetScroll();
    toggleWhatsAppButton();
    onScroll();
});

// Também garante scroll topo no carregamento total da página
window.addEventListener('load', () => {
    resetScroll();
});

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                // Fecha o menu colapsado
                new bootstrap.Collapse(navbarCollapse).hide();
            }
        });
    });
});




