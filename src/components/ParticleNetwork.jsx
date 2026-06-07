import { useEffect, useRef } from 'react';

const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Configuration
    const colors = [
      '#4CA6F3', // Light Blue
      '#123FA8', // Dark Blue
      '#2B67C7', // Brand Accent
      '#8b5cf6', // Purple
      '#f43f5e', // Rose
      '#f59e0b', // Amber
      '#10b981'  // Emerald
    ];
    
    let mouse = {
      x: -1000,
      y: -1000,
      isActive: false
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        // Burst outward with random velocity
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        
        this.size = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.life = 1.0; // opacity starts at 1
        this.decay = Math.random() * 0.02 + 0.015; // How fast it disappears
      }

      update() {
        // Slight attraction back to the mouse to make them "move with cursor"
        if (mouse.isActive) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
             this.vx += (dx / dist) * 0.05;
             this.vy += (dy / dist) * 0.05;
          }
        }

        // Apply velocity
        this.x += this.vx;
        this.y += this.vy;
        
        // Friction so they slow down beautifully
        this.vx *= 0.95;
        this.vy *= 0.95;
        
        this.life -= this.decay;
      }

      draw() {
        if (this.life <= 0) return;
        
        ctx.beginPath();
        // Draw as a short line (dash) oriented in the direction it's moving
        const speed = Math.max(0.5, Math.sqrt(this.vx * this.vx + this.vy * this.vy));
        const length = speed * 4 + 2; 
        
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - (this.vx/speed)*length, this.y - (this.vy/speed)*length);
        
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size;
        ctx.lineCap = 'round';
        // Fade out as life decreases
        ctx.globalAlpha = this.life;
        ctx.stroke();
      }
    }

    const init = () => {
      resize();
      particles = [];
    };

    const animate = () => {
      // Clear the canvas each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles, removing dead ones
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const addParticles = (x, y) => {
      // Spawn particles around the cursor
      const count = Math.floor(Math.random() * 4) + 3; // 3 to 6 particles per movement tick
      for (let i = 0; i < count; i++) {
        // Small random offset so they don't all spawn at the exact center pixel
        const offsetX = (Math.random() - 0.5) * 15;
        const offsetY = (Math.random() - 0.5) * 15;
        particles.push(new Particle(x + offsetX, y + offsetY));
      }
      
      // Prevent memory leaks by capping max particles
      if (particles.length > 300) {
        particles.splice(0, particles.length - 300);
      }
    };

    // Event listeners
    window.addEventListener('resize', init);
    
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
      addParticles(mouse.x, mouse.y);
    });
    
    window.addEventListener('mouseout', () => {
      mouse.isActive = false;
    });
    
    window.addEventListener('touchmove', (e) => {
      if(e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.isActive = true;
        addParticles(mouse.x, mouse.y);
      }
    });
    
    window.addEventListener('touchend', () => {
      mouse.isActive = false;
    });

    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[0]"
    />
  );
};

export default ParticleNetwork;
