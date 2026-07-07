document.addEventListener('DOMContentLoaded', () => {
    fetch('content.json')
        .then(response => {
            if (!response.ok) throw new Error('CMS config file not found');
            return response.json();
        })
        .then(data => {
            applyCmsData(data);
        })
        .catch(err => {
            console.log('CMS Info: Using default pre-rendered page content.', err.message);
        });
});

function applyCmsData(data) {
    if (!data) return;

    // 1. Apply Global Branding & Contact Details
    if (data.branding) {
        const b = data.branding;
        
        // Update top-bar phone links
        document.querySelectorAll('.top-contact a[href^="tel:"]').forEach((el, idx) => {
            if (idx === 0 && b.phone1) {
                el.href = 'tel:' + b.phone1.replace(/[^0-9+]/g, '');
                el.innerHTML = '<i class="fas fa-phone-alt"></i> ' + b.phone1;
            } else if (idx === 1 && b.phone2) {
                el.href = 'tel:' + b.phone2.replace(/[^0-9+]/g, '');
                el.innerHTML = '<i class="fas fa-phone-alt"></i> ' + b.phone2;
            }
        });

        // Update other anchor phone elements across header and footer
        document.querySelectorAll('a[href^="tel:"]').forEach(el => {
            const currentHref = el.getAttribute('href').replace('tel:', '');
            if (currentHref.includes('95603') && b.phone1) {
                el.href = 'tel:' + b.phone1.replace(/[^0-9+]/g, '');
                if (el.innerHTML.includes('+91 95603') || el.textContent.includes('95603')) {
                    el.innerHTML = el.innerHTML.replace(/\+91\s*95603\s*93262|95603\s*93262/, b.phone1);
                }
            } else if (currentHref.includes('96674') && b.phone2) {
                el.href = 'tel:' + b.phone2.replace(/[^0-9+]/g, '');
                if (el.innerHTML.includes('+91 96674') || el.textContent.includes('96674')) {
                    el.innerHTML = el.innerHTML.replace(/\+91\s*96674\s*16082|96674\s*16082/, b.phone2);
                }
            }
        });

        // Update emails
        if (b.email) {
            document.querySelectorAll('a[href^="mailto:"]').forEach(el => {
                el.href = 'mailto:' + b.email;
                el.innerHTML = '<i class="fas fa-envelope"></i> ' + b.email;
            });
        }

        // Update Address Text in top bar
        if (b.address) {
            const addrEl = document.querySelector('.top-contact a[href="contact.html"]');
            if (addrEl) {
                // Keep the pin icon, replace with the simplified NCR/Delhi suffix
                const parts = b.address.split(',');
                const summary = parts.length > 2 ? parts[parts.length - 2].trim() + ', ' + parts[parts.length - 1].trim() : b.address;
                addrEl.innerHTML = '<i class="fas fa-map-marker-alt"></i> ' + summary;
            }
        }
    }

    // 2. Hero Carousel Slides Content & Backgrounds (Home Page)
    if (data.hero) {
        const slides = document.querySelectorAll('.hero-slider .slide');
        slides.forEach((slide, idx) => {
            const slideData = data.hero['slide' + (idx + 1)];
            if (slideData) {
                const badge = slide.querySelector('.slide-badge');
                if (badge && slideData.badge) {
                    const iconClass = idx === 0 ? 'fas fa-clock' : idx === 1 ? 'fas fa-user-shield' : 'fas fa-award';
                    badge.innerHTML = `<i class="${iconClass}"></i> ${slideData.badge}`;
                }
                const h1 = slide.querySelector('h1');
                if (h1 && (slideData.title_span || slideData.title_br)) {
                    h1.innerHTML = `<span>${slideData.title_span || ''}</span><br>${slideData.title_br || ''}`;
                }
                const p = slide.querySelector('p');
                if (p && slideData.desc) {
                    p.textContent = slideData.desc;
                }
                const bg = slide.querySelector('.slide-bg');
                if (bg && slideData.bg) {
                    bg.style.backgroundImage = `url('${slideData.bg}')`;
                }
            }
        });
    }

    // 3. About Section Content & Images (About page / Home page Intro)
    if (data.about) {
        const aboutContent = document.querySelector('.about-section, .about-intro, .about-detail-section');
        if (aboutContent) {
            const h2 = aboutContent.querySelector('h2');
            if (h2 && (data.about.title_span || data.about.title_br)) {
                h2.innerHTML = `<span>${data.about.title_span || ''}</span><br>${data.about.title_br || ''}`;
            }
            const paragraphs = aboutContent.querySelectorAll('.about-text p, .about-content p');
            if (paragraphs.length > 0 && data.about.desc_p1) paragraphs[0].textContent = data.about.desc_p1;
            if (paragraphs.length > 1 && data.about.desc_p2) paragraphs[1].textContent = data.about.desc_p2;

            const img = aboutContent.querySelector('.about-img img, .about-media img');
            if (img && data.about.bg) {
                img.src = data.about.bg;
            }
        }
    }
}
