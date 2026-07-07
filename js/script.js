document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCursorLight();
    initCardTilt();
});

/* =========================================================================
   1. Interactive Canvas Particles
   ========================================================================= */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    const numberOfParticles = 60;
    const connectionDistance = 120;

    const mouse = {
        x: null,
        y: null,
        radius: 150
    };

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.baseSize = this.size;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Bounce off boundaries
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

            // Mouse interaction (gentle pull)
            if (mouse.x !== null && mouse.y !== null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.hypot(dx, dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    // Pull particle slightly
                    this.x -= (dx / distance) * force * 0.6;
                    this.y -= (dy / distance) * force * 0.6;
                }
            }
        }

        draw() {
            ctx.fillStyle = 'rgba(168, 85, 247, 0.45)'; // Purple accent
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function connectParticles() {
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let distance = Math.hypot(dx, dy);

                if (distance < connectionDistance) {
                    let opacity = 1 - (distance / connectionDistance);
                    ctx.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.15})`; // Cyan connection lines
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        connectParticles();
        requestAnimationFrame(animate);
    }

    init();
    animate();
}

/* =========================================================================
   2. Floating Cursor Light Effect
   ========================================================================= */
function initCursorLight() {
    const light = document.querySelector('.cursor-light');
    if (!light) return;

    // Show light since JS is available
    light.style.display = 'block';

    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;

    window.addEventListener('mousemove', (e) => {
        targetX = e.clientX + window.scrollX;
        targetY = e.clientY + window.scrollY;
    });

    // Smooth lerp function for light lag
    function updateLight() {
        currentX += (targetX - currentX) * 0.08;
        currentY += (targetY - currentY) * 0.08;
        light.style.left = `${currentX}px`;
        light.style.top = `${currentY}px`;
        requestAnimationFrame(updateLight);
    }
    updateLight();
}

/* =========================================================================
   3. Glassmorphic Card 3D Parallax Tilt Effect
   ========================================================================= */
function initCardTilt() {
    const card = document.querySelector('.card-container');
    if (!card) return;

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x coordinate inside the card
        const y = e.clientY - rect.top;  // y coordinate inside the card
        
        const cardWidth = rect.width;
        const cardHeight = rect.height;
        
        // Calculate tilt angles (-10deg to 10deg max)
        const rotateX = ((cardHeight / 2 - y) / (cardHeight / 2)) * 8;
        const rotateY = ((x - cardWidth / 2) / (cardWidth / 2)) * 8;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.01)`;
    });

    card.addEventListener('mouseleave', () => {
        // Smoothly return back to initial hover state
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)`;
    });
}
