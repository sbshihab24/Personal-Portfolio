import React, { useEffect, useRef } from 'react';

const NexusBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const particleCount = 70;
        const connectionDistance = 160;
        const mouseRadius = 180;

        // Color Palette: Deep Blue, Vibrant Blue, Cyan
        const colors = [
            'rgba(0, 255, 255,',   // Cyan
            'rgba(59, 130, 246,',  // Blue 500
            'rgba(37, 99, 235,',   // Blue 600
            'rgba(147, 197, 253,'  // Blue 300
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
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;

                // Randomly assign a shape: 0=Circle, 1=Square, 2=Triangle
                this.shapeType = Math.floor(Math.random() * 3);

                // Random color from palette
                this.colorBase = colors[Math.floor(Math.random() * colors.length)];
                this.opacity = Math.random() * 0.5 + 0.2;
                this.pulseSpeed = Math.random() * 0.02;
                this.pulseDir = 1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off edges
                if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                if (this.y > canvas.height || this.y < 0) this.speedY *= -1;

                // Mouse Interaction (Push effect)
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouseRadius) {
                        const force = (mouseRadius - distance) / mouseRadius;
                        this.x -= dx * force * 0.02;
                        this.y -= dy * force * 0.02;
                    }
                }

                // Opacity Pulse
                this.opacity += this.pulseSpeed * this.pulseDir;
                if (this.opacity > 0.7 || this.opacity < 0.2) this.pulseDir *= -1;
            }

            draw() {
                ctx.fillStyle = `${this.colorBase}${this.opacity})`;
                ctx.beginPath();

                if (this.shapeType === 0) {
                    // Circle
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                } else if (this.shapeType === 1) {
                    // Square
                    ctx.rect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
                } else {
                    // Triangle
                    ctx.moveTo(this.x, this.y - this.size);
                    ctx.lineTo(this.x + this.size, this.y + this.size);
                    ctx.lineTo(this.x - this.size, this.y + this.size);
                }

                ctx.fill();

                // Optional: Add a subtle glow
                if (this.opacity > 0.5) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = 'rgba(0, 255, 255, 0.3)';
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
            ctx.shadowBlur = 0; // Connections shouldn't glow too much
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const alpha = (1 - distance / connectionDistance) * 0.3;
                        ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
                        ctx.lineWidth = 0.8;
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

            // Draw particles
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            // Draw Nexus Connections
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
