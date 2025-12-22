import React, { useEffect, useRef } from 'react';

const NexusBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const particleCount = 75; // Slightly more particles for better "nexus" look
        const connectionDistance = 165;
        const mouseRadius = 200;

        // Brand Palette: Vibrant Cyan and Purple (Matches tailwind.config.js)
        const colors = [
            'rgba(0, 255, 255,',   // #00FFFF Cyan (Primary)
            'rgba(153, 51, 255,',  // #9933FF Purple (Secondary)
            'rgba(0, 255, 255,',   // Cyan (Repeat for higher frequency)
            'rgba(153, 51, 255,'   // Purple (Repeat)
        ];

        let mouse = {
            x: null,
            y: null
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3.5 + 1.2; // Slightly larger for clarity
                this.speedX = (Math.random() - 0.5) * 0.45;
                this.speedY = (Math.random() - 0.5) * 0.45;

                // Shapes: 0=Circle, 1=Square, 2=Triangle
                this.shapeType = Math.floor(Math.random() * 3);

                // Assign a brand color
                this.colorBase = colors[Math.floor(Math.random() * colors.length)];
                this.opacity = Math.random() * 0.6 + 0.3; // Higher base opacity for clarity
                this.pulseSpeed = Math.random() * 0.015 + 0.005;
                this.pulseDir = 1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

                // Mouse Push Effect
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouseRadius) {
                        const force = (mouseRadius - distance) / mouseRadius;
                        this.x -= dx * force * 0.03;
                        this.y -= dy * force * 0.03;
                    }
                }

                // Clarity-focused Opacity Pulse (never goes too dim)
                this.opacity += this.pulseSpeed * this.pulseDir;
                if (this.opacity > 0.85 || this.opacity < 0.4) this.pulseDir *= -1;
            }

            draw() {
                ctx.fillStyle = `${this.colorBase}${this.opacity})`;
                ctx.beginPath();

                if (this.shapeType === 0) {
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                } else if (this.shapeType === 1) {
                    ctx.rect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
                } else {
                    ctx.moveTo(this.x, this.y - this.size * 1.2);
                    ctx.lineTo(this.x + this.size * 1.2, this.y + this.size * 1);
                    ctx.lineTo(this.x - this.size * 1.2, this.y + this.size * 1);
                    ctx.closePath();
                }

                ctx.fill();

                // Distinct Glow Effect for the "Primary" color
                if (this.colorBase.includes('0, 255, 255') && this.opacity > 0.6) {
                    ctx.shadowBlur = 12;
                    ctx.shadowColor = 'rgba(0, 255, 255, 0.4)';
                } else if (this.opacity > 0.6) {
                    ctx.shadowBlur = 8;
                    ctx.shadowColor = 'rgba(153, 51, 255, 0.3)';
                } else {
                    ctx.shadowBlur = 0;
                }
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawConnections = () => {
            ctx.shadowBlur = 0;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        // Lines are clearer now (mix of cyan and white/alpha)
                        const alpha = (1 - distance / connectionDistance) * 0.45;
                        ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
                        ctx.lineWidth = 1.0; // Slightly thicker lines for clarity
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            drawConnections();
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10 bg-[#09090B]"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default NexusBackground;
