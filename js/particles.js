/* ==========================================================================
   EXPOSHERA SECURITY - FUTURISTIC DASHBOARD GRID CANVAS ANIMATION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let particleCount = 45;
    let clickRipple = null;
    let mouse = { x: null, y: null };

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    };

    class Particle {
        constructor(x, y, isTemp = false) {
            this.x = x !== undefined ? x : Math.random() * canvas.width;
            this.y = y !== undefined ? y : Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1.5;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
            this.pulse = Math.random() * Math.PI;
            this.isSpecial = Math.random() < 0.15; // 15% represent tracking nodes
            this.isTemporary = isTemp;
            this.lifespan = 1.0;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Boundary wrap around or bounce
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

            // Deceleration for pushed particles back to normal pacing
            const maxSpeed = 0.5;
            const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
            if (currentSpeed > maxSpeed) {
                this.speedX *= 0.95;
                this.speedY *= 0.95;
            }

            if (this.isSpecial) {
                this.pulse += 0.05;
            }

            if (this.isTemporary) {
                this.lifespan -= 0.015;
            }
        }

        draw() {
            const alpha = this.isTemporary ? Math.max(0, this.lifespan) : 1;
            
            // Draw core particle
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.isSpecial ? `rgba(6, 182, 212, ${0.7 * alpha})` : `rgba(30, 41, 59, ${0.35 * alpha})`;
            ctx.fill();

            // High-tech dashboard scanning effects
            if (this.isSpecial) {
                // Expanding glowing pulse
                const pulseRadius = this.size * 3 + Math.sin(this.pulse) * 5;
                ctx.beginPath();
                ctx.arc(this.x, this.y, Math.max(1, pulseRadius), 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(6, 182, 212, ${0.18 * alpha})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();

                // Target hair lines
                ctx.beginPath();
                ctx.moveTo(this.x - 6, this.y); ctx.lineTo(this.x + 6, this.y);
                ctx.moveTo(this.x, this.y - 6); ctx.lineTo(this.x, this.y + 6);
                ctx.strokeStyle = `rgba(6, 182, 212, ${0.12 * alpha})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();

                // Draw live coordinate text label
                ctx.font = '6px monospace';
                ctx.fillStyle = `rgba(6, 182, 212, ${0.3 * alpha})`;
                const posX = Math.floor(this.x);
                const posY = Math.floor(this.y);
                ctx.fillText(`TRK_${posX}:${posY}`, this.x + 10, this.y - 3);
            }
        }
    }

    const initParticles = () => {
        particles = [];
        if (window.innerWidth < 768) {
            particleCount = 18;
        } else {
            particleCount = 45;
        }
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    };

    const drawDashboardGrid = () => {
        const gridSpacing = 80;
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.015)';
        ctx.lineWidth = 0.5;

        // Draw Vertical Grid Lines
        for (let x = 0; x < canvas.width; x += gridSpacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        // Draw Horizontal Grid Lines
        for (let y = 0; y < canvas.height; y += gridSpacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
    };

    const drawConnections = () => {
        const maxDist = 130;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDist) {
                    const alpha = (1 - dist / maxDist) * 0.15;
                    const p1Alpha = particles[i].isTemporary ? particles[i].lifespan : 1;
                    const p2Alpha = particles[j].isTemporary ? particles[j].lifespan : 1;
                    const connectionAlpha = alpha * Math.min(p1Alpha, p2Alpha);

                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(6, 182, 212, ${connectionAlpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
    };

    // Tracking crosshair reticle following the cursor
    const drawMouseTracker = () => {
        if (mouse.x === null || mouse.y === null) return;
        
        // Very subtle grid alignment line sweep
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.03)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, mouse.y); ctx.lineTo(canvas.width, mouse.y);
        ctx.moveTo(mouse.x, 0); ctx.lineTo(mouse.x, canvas.height);
        ctx.stroke();

        // Small HUD Target reticle
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
        ctx.moveTo(mouse.x - 14, mouse.y); ctx.lineTo(mouse.x + 14, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 14); ctx.lineTo(mouse.x, mouse.y + 14);
        ctx.stroke();

        // Live coordinate typography tag
        ctx.font = '8px Courier New, monospace';
        ctx.fillStyle = 'rgba(6, 182, 212, 0.45)';
        ctx.fillText(`LOC: [${Math.floor(mouse.x)}, ${Math.floor(mouse.y)}]`, mouse.x + 15, mouse.y - 8);
    };

    // Click interactive ripple and node physics
    window.addEventListener('click', (e) => {
        // Trigger a sonar radar ping
        clickRipple = {
            x: e.clientX,
            y: e.clientY,
            radius: 0,
            maxRadius: 150,
            opacity: 1.0
        };

        // Spawn a burst of temporary telemetry coordinates
        for (let i = 0; i < 6; i++) {
            const tempNode = new Particle(e.clientX, e.clientY, true);
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 1.5 + 0.8;
            tempNode.speedX = Math.cos(angle) * speed;
            tempNode.speedY = Math.sin(angle) * speed;
            tempNode.isSpecial = Math.random() < 0.5;
            particles.push(tempNode);
        }

        // Apply physical repulsion to existing coordinates
        particles.forEach(p => {
            if (p.isTemporary) return;
            const dx = p.x - e.clientX;
            const dy = p.y - e.clientY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180) {
                const force = (180 - dist) / 180;
                p.speedX += (dx / dist) * force * 1.2;
                p.speedY += (dy / dist) * force * 1.2;
            }
        });
    });

    // Capture cursor coordinates
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    const drawClickRipple = () => {
        if (!clickRipple) return;

        clickRipple.radius += 3.5;
        clickRipple.opacity -= 0.022;

        if (clickRipple.opacity <= 0) {
            clickRipple = null;
            return;
        }

        // Sonar expanding stroke ring
        ctx.beginPath();
        ctx.arc(clickRipple.x, clickRipple.y, clickRipple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(6, 182, 212, ${clickRipple.opacity * 0.35})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Sonar center ping point
        ctx.beginPath();
        ctx.arc(clickRipple.x, clickRipple.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${clickRipple.opacity})`;
        ctx.fill();

        // Floating ping status label
        ctx.font = '7px monospace';
        ctx.fillStyle = `rgba(6, 182, 212, ${clickRipple.opacity * 0.55})`;
        ctx.fillText(`PING_[${Math.floor(clickRipple.x)}:${Math.floor(clickRipple.y)}]`, clickRipple.x + 12, clickRipple.y - 3);
    };

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        drawDashboardGrid();

        // Filter out expired temporary nodes
        particles = particles.filter(p => !p.isTemporary || p.lifespan > 0);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        drawConnections();
        drawMouseTracker();
        drawClickRipple();
        requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
});
