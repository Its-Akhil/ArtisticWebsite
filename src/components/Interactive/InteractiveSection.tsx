import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Palette, Laptop } from 'lucide-react';
import RevealOnScroll from '../common/RevealOnScroll';

gsap.registerPlugin(ScrollTrigger);

const techIcons = [
  {
    Icon: Code2,
    label: 'Development',
    description: 'Full-stack development with modern technologies',
    color: '#FF6B6B'
  },
  {
    Icon: Palette,
    label: 'Design',
    description: 'Creative and intuitive user interfaces',
    color: '#4ECDC4'
  },
  {
    Icon: Laptop,
    label: 'Architecture',
    description: 'Scalable and maintainable solutions',
    color: '#45B7D1'
  }
];

const InteractiveSection = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createParticle = (x: number, y: number, color: string) => ({
      x,
      y,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      color,
      opacity: 1
    });

    // Initialize particles
    for (let i = 0; i < 30; i++) {
      particlesRef.current.push(
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          techIcons[Math.floor(Math.random() * techIcons.length)].color
        )
      );
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current = particlesRef.current.filter(particle => particle.opacity > 0);

      particlesRef.current.forEach((particle, i) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.opacity -= 0.005;
        particle.size *= 0.99;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            const gradient = ctx.createLinearGradient(
              particle.x, particle.y, 
              otherParticle.x, otherParticle.y
            );
            gradient.addColorStop(0, `${particle.color}${Math.floor((particle.opacity * 0.3) * 255).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(1, `${otherParticle.color}${Math.floor((otherParticle.opacity * 0.3) * 255).toString(16).padStart(2, '0')}`);

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = Math.min(particle.size, otherParticle.size) * 0.3;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    gsap.to(card, {
      x: (x - rect.width / 2) / rect.width * 15,
      y: (y - rect.height / 2) / rect.height * 15,
      duration: 0.3,
      ease: "power3.out"
    });
    
    const particleCount = 5;
    for (let i = 0; i < particleCount; i++) {
      const particle = createParticle(x + rect.left, y + rect.top, techIcons[index].color);
      particlesRef.current.push(particle);
    }
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <section className="relative min-h-[60vh] overflow-hidden py-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10 container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Expertise
          </h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {techIcons.map(({ Icon, label, description, color }, index) => (
            <RevealOnScroll key={label} delay={index * 0.2}>
              <div
                className="tech-card group relative bg-dark/5 backdrop-blur-lg p-6 rounded-xl border border-dark/10 
                  shadow-lg hover:shadow-xl transition-all cursor-pointer transform will-change-transform"
                onMouseMove={(e) => handleCardHover(e, index)}
                onMouseLeave={handleCardLeave}
              >
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div 
                      className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${color}15`,
                        transform: 'perspective(1000px)'
                      }}
                    >
                      <Icon 
                        className="w-6 h-6 transition-all duration-300 group-hover:rotate-12" 
                        style={{ color }}
                      />
                    </div>
                    <div className="transform transition-all duration-300 group-hover:translate-y-[-2px]">
                      <h3 className="text-xl font-semibold bg-clip-text" style={{ color }}>
                        {label}
                      </h3>
                      <p className="mt-2 text-dark/80 text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>

                <div 
                  className="absolute inset-0 rounded-xl transition-all duration-300 group-hover:opacity-100 opacity-50"
                  style={{
                    background: `linear-gradient(45deg, ${color}10, transparent)`,
                    filter: 'blur(8px)',
                    transform: 'translate3d(0, 0, 0)'
                  }}
                />
                
                <div
                  className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${color}05, transparent 70%)`,
                    filter: 'blur(12px)'
                  }}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;
