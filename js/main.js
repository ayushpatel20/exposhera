/* ==========================================================================
   EXPOSHERA SECURITY FORCE - INTERACTIVE CLIENT SIDE SCRIPT
   ========================================================================== */

/* ── Login Dropdown Toggle ── */
window.toggleLoginDropdown = function(e) {
    e.stopPropagation();
    var btn  = document.getElementById('navLoginBtn');
    var menu = document.getElementById('loginDropdownMenu');
    if (!btn || !menu) return;
    var isOpen = menu.classList.contains('open');
    menu.classList.toggle('open', !isOpen);
    btn.classList.toggle('open', !isOpen);
};

// Close dropdown when clicking anywhere outside
document.addEventListener('click', function(e) {
    var dropdown = document.getElementById('navLoginDropdown');
    if (dropdown && !dropdown.contains(e.target)) {
        var menu = document.getElementById('loginDropdownMenu');
        var btn  = document.getElementById('navLoginBtn');
        if (menu) menu.classList.remove('open');
        if (btn)  btn.classList.remove('open');
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sideOverlay = document.querySelector('.side-overlay');
    const sideMenu = document.querySelector('.side-menu');
    const sideClose = document.querySelector('.side-close');

    if (menuToggle && sideMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            sideMenu.classList.toggle('show');
            if (sideOverlay) sideOverlay.classList.toggle('show');
            document.body.style.overflow = sideMenu.classList.contains('show') ? 'hidden' : '';
        });
    }

    const closeMobileMenu = () => {
        if (menuToggle) menuToggle.classList.remove('open');
        if (sideMenu) sideMenu.classList.remove('show');
        if (sideOverlay) sideOverlay.classList.remove('show');
        document.body.style.overflow = '';
    };

    if (sideClose) sideClose.addEventListener('click', closeMobileMenu);
    if (sideOverlay) sideOverlay.addEventListener('click', closeMobileMenu);

    // Close side menu when clicking on links
    const mobileLinks = document.querySelectorAll('.side-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // 2. Header scroll shadow
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // 3. Hero Slider Logic
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let autoSlideInterval;

    if (slides.length > 0) {
        const showSlide = (index) => {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentSlide = index;
        };

        const nextSlide = () => {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        };

        const startAutoSlide = () => {
            autoSlideInterval = setInterval(nextSlide, 5000);
        };

        const stopAutoSlide = () => {
            clearInterval(autoSlideInterval);
        };

        // Initialize Slider
        showSlide(0);
        startAutoSlide();

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                stopAutoSlide();
                showSlide(i);
                startAutoSlide();
            });
        });
    }

    // 4. Statistics Counters
    const counters = document.querySelectorAll('.counter-number');
    const counterSection = document.querySelector('.counter-section');

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            let current = 0;
            const duration = 2000; // ms
            const stepTime = 30; // ms
            const increment = target / (duration / stepTime);

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, stepTime);
        });
    };

    if (counters.length > 0 && counterSection) {
        let counterAnimated = false;
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counterAnimated) {
                    animateCounters();
                    counterAnimated = true;
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.25 });
        counterObserver.observe(counterSection);
    }

    // 5. Scroll Reveal animations
    const revealElements = document.querySelectorAll('.reveal-fade, .reveal-slide');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }

    // 6. Testimonials Carousel Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testiDots = document.querySelectorAll('.testi-dot');
    let currentTesti = 0;
    let testiInterval;

    if (testimonialSlides.length > 0) {
        const showTesti = (index) => {
            testimonialSlides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            testiDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            currentTesti = index;
        };

        const nextTesti = () => {
            let next = (currentTesti + 1) % testimonialSlides.length;
            showTesti(next);
        };

        showTesti(0);
        testiInterval = setInterval(nextTesti, 6000);

        testiDots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                clearInterval(testiInterval);
                showTesti(i);
                testiInterval = setInterval(nextTesti, 6000);
            });
        });
    }

    // 7. Products page category sorting
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Toggle active button class
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                productCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'flex';
                        setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.95)';
                        setTimeout(() => { card.style.display = 'none'; }, 300);
                    }
                });
            });
        });
    }

    // 8. Lightbox Gallery for Certifications
    const certCards = document.querySelectorAll('.cert-card');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (certCards.length > 0 && lightbox && lightboxImg) {
        certCards.forEach(card => {
            card.addEventListener('click', () => {
                const img = card.querySelector('.cert-img-wrapper img');
                const title = card.querySelector('.cert-body h3').textContent;
                if (img) {
                    lightboxImg.src = img.src;
                    if (lightboxCaption) lightboxCaption.textContent = title;
                    lightbox.classList.add('show');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('show');
            document.body.style.overflow = '';
        };

        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // 9. Floating Enquiry Popup Form Logic
    const openEnquiryBtns = document.querySelectorAll('.float-enquiry, .btn-enquire-now, #openEnquiry');
    const formOverlay = document.getElementById('formOverlay');
    const closeForm = document.getElementById('closeForm');
    const enquiryForm = document.getElementById('enquiryForm');
    const formContent = document.getElementById('formContent');
    const successMsg = document.getElementById('successMsg');

    if (formOverlay) {
        openEnquiryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                formOverlay.classList.add('show');
                document.body.style.overflow = 'hidden';
            });
        });

        const closeEnquiryForm = () => {
            formOverlay.classList.remove('show');
            document.body.style.overflow = '';
            // Reset visibility
            setTimeout(() => {
                if (formContent) formContent.style.display = 'block';
                if (successMsg) successMsg.style.display = 'none';
                if (enquiryForm) enquiryForm.reset();
            }, 500);
        };

        if (closeForm) closeForm.addEventListener('click', closeEnquiryForm);
        formOverlay.addEventListener('click', (e) => {
            if (e.target === formOverlay) {
                closeEnquiryForm();
            }
        });

        if (enquiryForm) {
            enquiryForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const btn = enquiryForm.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;

                // Capture form values
                const nameVal = enquiryForm.querySelector('input[type="text"]')?.value || 'N/A';
                const phoneVal = enquiryForm.querySelector('input[type="tel"]')?.value || 'N/A';
                const emailVal = enquiryForm.querySelector('input[type="email"]')?.value || 'N/A';
                const productVal = document.getElementById('enquiryProductSelect')?.value || 'N/A';
                const messageVal = document.getElementById('enquiryTextarea')?.value || 'N/A';

                const newEnquiry = {
                    id: 'ENQ-' + Date.now(),
                    name: nameVal,
                    phone: phoneVal,
                    email: emailVal,
                    product: productVal,
                    message: messageVal,
                    date: new Date().toLocaleString('en-IN')
                };

                // Store in localStorage
                try {
                    const existing = JSON.parse(localStorage.getItem('exposhera_enquiries')) || [];
                    existing.unshift(newEnquiry); // Add to beginning (newest first)
                    localStorage.setItem('exposhera_enquiries', JSON.stringify(existing));
                } catch (err) {
                    console.error('Error saving enquiry to localStorage:', err);
                }

                btn.disabled = true;
                btn.classList.add('btn-loading');
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

                setTimeout(() => {
                    btn.classList.remove('btn-loading');
                    btn.classList.add('btn-success');
                    btn.innerHTML = '<i class="fas fa-check"></i> Submitted!';

                    setTimeout(() => {
                        if (formContent) formContent.style.display = 'none';
                        if (successMsg) successMsg.style.display = 'block';

                        setTimeout(() => {
                            closeEnquiryForm();
                            // Restore original button state for next open
                            btn.disabled = false;
                            btn.classList.remove('btn-success');
                            btn.innerHTML = originalText;
                        }, 2000);
                    }, 800);
                }, 1500);
            });
        }
    }

    // 10. Scroll to Top Button
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 11. Reusable Click Ripple Effect for Buttons
    const createRipple = (e) => {
        const btn = e.currentTarget;
        
        // Remove existing ripples
        const existingRipples = btn.getElementsByClassName('btn-ripple');
        while (existingRipples.length > 0) {
            existingRipples[0].remove();
        }

        const circle = document.createElement('span');
        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        const radius = diameter / 2;

        const rect = btn.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${clickX - radius}px`;
        circle.style.top = `${clickY - radius}px`;
        circle.classList.add('btn-ripple');

        btn.appendChild(circle);
    };

    const rippleButtons = document.querySelectorAll('.btn, .bio-btn, .filter-btn');
    rippleButtons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
});
