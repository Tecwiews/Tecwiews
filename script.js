// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação de entrada para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards de serviços
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    const contactItems = document.querySelectorAll('.contact-item');
    
    [...serviceCards, ...contactItems].forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Efeito de hover suave para botões
document.querySelectorAll('.whatsapp-btn, .phone-btn, .cta-button').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Analytics de cliques (preparado para implementação futura)
function trackClick(element, action) {
    // Aqui você pode adicionar Google Analytics ou outro sistema de tracking
    console.log(`Click tracked: ${action} on element:`, element);
}

// Track cliques nos botões principais
document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtns = document.querySelectorAll('.whatsapp-btn-float');
    const phoneBtns = document.querySelectorAll('.phone-btn');
    
    whatsappBtns.forEach(btn => {
        btn.addEventListener('click', () => trackClick(btn, 'WhatsApp Float Click'));
    });
    
    phoneBtns.forEach(btn => {
        btn.addEventListener('click', () => trackClick(btn, 'Phone Click'));
    });
});

// Header sticky com efeito
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)';
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.background = 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});