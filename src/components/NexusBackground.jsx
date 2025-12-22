import React, { useEffect, useRef } from 'react';

const NexusBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const particleCount = 95; // Increased density for bolder look
        const connectionDistance = 175;
        const mouseRadius = 220;

        // Brand Palette: Vibrant Cyan and Purple
        const colors = [
            'rgba(0, 255, 255,',   // #00FFFF Cyan
            'rgba(153, 51, 255,',  // #9933FF Purple
            'rgba(255, 255, 255,'  // Pure White for occasional bright sparks
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
                this.size = Math.random() * 4 + 1.5; // Bolder particle size
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;

                this.shapeType = Math.floor(Math.random() * 3);
                this.colorBase = colors[Math.floor(Math.random() * colors.length)];
                this.opacity = Math.random() * 0.5 + 0.4; // Higher base visibility
                this.pulseSpeed = Math.random() * 0.015 + 0.005;
                this.pulseDir = 1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouseRadius) {
                        const force = (mouseRadius - distance) / mouseRadius;
                        this.x -= dx * force * 0.04;
                        this.y -= dy * force * 0.04;
                    }
                }

                this.opacity += this.pulseSpeed * this.pulseDir;
                if (this.opacity > 0.9 || this.opacity < 0.4) this.pulseDir *= -1;
            }

            draw() {
                ctx.fillStyle = `${this.colorBase}${this.opacity})`;
                ctx.beginPath();

                if (this.shapeType === 0) {
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                } else if (this.shapeType === 1) {
                    ctx.rect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
                } else {
                    ctx.moveTo(this.x, this.y - this.size * 1.3);
                    ctx.lineTo(this.x + this.size * 1.3, this.y + this.size * 1.1);
                    ctx.lineTo(this.x - this.size * 1.3, this.y + this.size * 1.1);
                    ctx.closePath();
                }

                ctx.fill();

                // Stronger Neon Bloom
                ctx.shadowBlur = 15;
                ctx.shadowColor = this.colorBase.includes('0, 255, 255')
                    ? 'rgba(0, 255, 255, 0.6)'
                    : 'rgba(153, 51, 255, 0.5)';
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawConnections = () => {
            // Using 'lighter' composite operation makes intersections GLOW
            ctx.globalCompositeOperation = 'lighter';

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const alpha = (1 - distance / connectionDistance) * 0.6;
                        ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
                        ctx.lineWidth = 1.6; // Significantly bolder lines
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            // Reset composite operation for other drawing
            ctx.globalCompositeOperation = 'source-over';
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
            className="fixed inset-0 w-full h-full -z-10 bg-[#060608]"
            style={{ pointerEvents: 'none' }}
        />
    );
};

export default NexusBackground;
