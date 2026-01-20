import React, { useEffect, useRef, useState } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  // Particle class for cursor following effects
  class Particle {
    constructor(x, y, canvasWidth, canvasHeight) {
      this.x = x;
      this.y = y;
      this.baseX = x;
      this.baseY = y;
      this.size = Math.random() * 6 + 3; // Increased size range
      this.density = Math.random() * 30 + 1;
      // Brighter, more visible colors with higher contrast
      const colors = [
        'rgba(99, 102, 241, 0.9)',   // Bright blue
        'rgba(6, 182, 212, 0.9)',    // Bright cyan
        'rgba(245, 158, 11, 0.9)',   // Bright orange
        'rgba(168, 85, 247, 0.9)',   // Bright purple
        'rgba(34, 197, 94, 0.9)',    // Bright green
        'rgba(239, 68, 68, 0.9)'     // Bright red
      ];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
    }

    update(mouseX, mouseY) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Force direction and magnitude
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const maxDistance = 100;
      const force = (maxDistance - distance) / maxDistance;

      const directionX = forceDirectionX * force * this.density;
      const directionY = forceDirectionY * force * this.density;

      if (distance < maxDistance) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        // Return to original position
        if (this.x !== this.baseX) {
          const dx2 = this.x - this.baseX;
          this.x -= dx2 / 10;
        }
        if (this.y !== this.baseY) {
          const dy2 = this.y - this.baseY;
          this.y -= dy2 / 10;
        }
      }
    }

    draw(ctx) {
      // Add glow effect
      ctx.shadowBlur = this.size * 2;
      ctx.shadowColor = this.color;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();

      // Reset shadow for next particle
      ctx.shadowBlur = 0;
    }

    resize(canvasWidth, canvasHeight) {
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Reinitialize particles on resize
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push(new Particle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          canvas.width,
          canvas.height
        ));
      }
      particlesRef.current = particles;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update(mousePosition.x, mousePosition.y);
        particle.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation after particles are initialized
    setTimeout(() => {
      animate();
    }, 100);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
        style={{ background: 'transparent' }}
      />

      {/* Dynamic gradient background with animated mesh */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

        {/* Animated mesh gradient layers */}
        <div className="absolute inset-0 animate-mesh">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 via-pink-900/15 to-yellow-900/20"></div>
        </div>

        {/* Cursor following light effect */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl transition-all duration-1000 ease-out animate-glow"
          style={{
            background: `
              radial-gradient(circle,
                rgba(99, 102, 241, 0.4) 0%,
                rgba(6, 182, 212, 0.3) 25%,
                rgba(245, 158, 11, 0.2) 50%,
                rgba(168, 85, 247, 0.1) 75%,
                transparent 90%
              )
            `,
            left: `${mousePosition.x - 250}px`,
            top: `${mousePosition.y - 250}px`,
          }}
        />

        {/* Floating orbs with enhanced animations */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/25 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-3/4 left-1/2 w-56 h-56 bg-accent/35 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '6s'}}></div>
        <div className="absolute top-1/6 right-1/3 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-float-slow" style={{animationDelay: '9s'}}></div>

        {/* Geometric patterns with enhanced effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-24 h-24 border-2 border-primary/40 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute top-32 right-20 w-18 h-18 border-2 border-secondary/40 rotate-12 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 border-2 border-accent/50 rotate-30 animate-spin" style={{animationDuration: '25s'}}></div>
          <div className="absolute top-2/3 right-10 w-20 h-20 border-2 border-purple-400/30 rotate-60 animate-spin" style={{animationDuration: '30s'}}></div>
        </div>

        {/* Additional dynamic light spots */}
        <div className="absolute top-1/3 left-1/6 w-32 h-32 bg-gradient-radial from-white/10 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-40 h-40 bg-gradient-radial from-white/5 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Animated grid overlay */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </>
  );
};

export default AnimatedBackground;
