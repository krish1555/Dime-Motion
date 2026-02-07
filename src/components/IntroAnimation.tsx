import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo from '@/assets/logo.png';

const IntroAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        console.log("🎬 IntroAnimation: Starting");

        // Lock scroll and ensure black screen immediately
        document.body.style.overflow = 'hidden';
        document.body.style.backgroundColor = '#000';

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (!canvas || !ctx) return;

        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        // Timeline without auto-complete
        const tl = gsap.timeline();

        const cleanup = () => {
            console.log("✅ Animation complete");
            document.body.style.overflow = '';
            document.body.style.backgroundColor = '';
            if (containerRef.current) {
                containerRef.current.style.display = 'none';
            }
        };

        const particles: Array<{
            x: number;
            y: number;
            targetX: number;
            targetY: number;
            radius: number;
            alpha: number;
        }> = [];

        // Render loop
        const render = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
                ctx.fill();
            });
        };

        // Load and sample logo
        const img = new Image();
        img.src = logo;
        img.crossOrigin = "anonymous";

        const startAnimation = () => {
            console.log(`🌟 Starting with ${particles.length} particles`);

            gsap.ticker.add(render);

            // 1. Assemble particles to form logo (1.8s)
            tl.to(particles, {
                duration: 1.8,
                x: (i) => particles[i].targetX,
                y: (i) => particles[i].targetY,
                ease: "expo.out",
                stagger: { amount: 0.2, from: "random" }
            })
                // 2. Fade in actual logo image
                .to(logoRef.current, {
                    duration: 0.5,
                    opacity: 1,
                    ease: "power2.out"
                }, "-=0.3")
                // 3. Fade out particles
                .to(particles, {
                    duration: 0.4,
                    alpha: 0,
                    ease: "power2.in"
                }, "<")
                .call(() => {
                    gsap.ticker.remove(render);
                })
                // 4. Brief hold
                .to({}, { duration: 0.5 })
                // 5. Move to navbar & Fade Background
                .add(() => {
                    const navLogo = document.querySelector<HTMLImageElement>("#navbar-logo");

                    // Fade out black background revealing hero
                    gsap.to(containerRef.current, {
                        backgroundColor: 'rgba(0,0,0,0)',
                        duration: 1.0,
                        ease: "power2.inOut"
                    });

                    if (!navLogo || !logoRef.current) {
                        console.warn("⚠️ Nav logo not found, fading out");
                        gsap.to(containerRef.current, { opacity: 0, duration: 0.5, onComplete: cleanup });
                        return;
                    }

                    const targetRect = navLogo.getBoundingClientRect();
                    const sourceRect = logoRef.current.getBoundingClientRect();

                    // Calculate Scale
                    const scale = Math.min(
                        targetRect.width / sourceRect.width,
                        targetRect.height / sourceRect.height
                    );

                    // Calculate Position Delta
                    const deltaX = (targetRect.left + targetRect.width / 2) - (sourceRect.left + sourceRect.width / 2);
                    const deltaY = (targetRect.top + targetRect.height / 2) - (sourceRect.top + sourceRect.height / 2);

                    console.log(`Animating Logo: dx=${deltaX}, dy=${deltaY}, scale=${scale}`);

                    // Animate Logo to Navbar Position
                    gsap.to(logoRef.current, {
                        x: deltaX,
                        y: deltaY,
                        scale: scale,
                        duration: 1.0,
                        ease: "power3.inOut",
                        onComplete: () => {
                            // Reveal real nav logo
                            gsap.set(navLogo, { opacity: 1 });
                            // Cleanup overlay
                            cleanup();
                        }
                    });
                });
        };

        img.onload = () => {
            // Create temp canvas to sample logo pixels
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');

            if (!tempCtx) {
                console.error("Failed to get temp context");
                return;
            }

            // Logo size in center (larger for better sampling)
            const logoSize = Math.min(width, height) * 0.35;
            const logoWidth = logoSize;
            const logoHeight = (img.height / img.width) * logoSize;

            tempCanvas.width = width;
            tempCanvas.height = height;

            const centerX = (width - logoWidth) / 2;
            const centerY = (height - logoHeight) / 2;

            // Draw logo to temp canvas
            tempCtx.drawImage(img, centerX, centerY, logoWidth, logoHeight);

            try {
                const imageData = tempCtx.getImageData(0, 0, width, height);
                const data = imageData.data;

                // Sample pixels where logo exists (alpha > 100)
                const logoPixels: { x: number; y: number }[] = [];
                const samplingGap = 3; // Check every 3rd pixel

                for (let y = 0; y < height; y += samplingGap) {
                    for (let x = 0; x < width; x += samplingGap) {
                        const idx = (y * width + x) * 4;
                        const alpha = data[idx + 3];

                        if (alpha > 100) {
                            logoPixels.push({ x, y });
                        }
                    }
                }

                console.log(`📍 Found ${logoPixels.length} logo pixels`);

                // Create particles (more than logo pixels for fullness)
                const particleCount = Math.min(400, logoPixels.length);

                for (let i = 0; i < particleCount; i++) {
                    // Pick random logo pixel as target
                    const target = logoPixels[Math.floor(Math.random() * logoPixels.length)];

                    // Spawn from edges
                    const fromLeft = Math.random() < 0.5;
                    const fromTop = Math.random() < 0.5;

                    particles.push({
                        x: fromLeft ? -50 : width + 50,
                        y: fromTop ? -50 : height + 50,
                        targetX: target.x,
                        targetY: target.y,
                        radius: Math.random() * 1.5 + 0.8,
                        alpha: 1
                    });
                }

                startAnimation();

            } catch (e) {
                console.error("Failed to sample logo:", e);
                // Fallback: generic particles
                for (let i = 0; i < 300; i++) {
                    particles.push({
                        x: Math.random() < 0.5 ? -50 : width + 50,
                        y: Math.random() * height,
                        targetX: width / 2 + (Math.random() - 0.5) * 300,
                        targetY: height / 2 + (Math.random() - 0.5) * 200,
                        radius: 1.5,
                        alpha: 1
                    });
                }
                startAnimation();
            }
        };

        img.onerror = () => {
            console.error("Failed to load logo image");
            // Fallback particles
            for (let i = 0; i < 300; i++) {
                particles.push({
                    x: Math.random() < 0.5 ? -50 : width + 50,
                    y: Math.random() * height,
                    targetX: width / 2 + (Math.random() - 0.5) * 300,
                    targetY: height / 2 + (Math.random() - 0.5) * 200,
                    radius: 1.5,
                    alpha: 1
                });
            }
            startAnimation();
        };

    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden"
            style={{ zIndex: 9999 }}
        >
            <canvas ref={canvasRef} className="absolute inset-0" />
            <img
                ref={logoRef}
                src={logo}
                alt="Logo"
                className="relative w-[45vw] max-w-[450px] h-auto object-contain"
                style={{ opacity: 0 }}
            />
        </div>
    );
};

export default IntroAnimation;
