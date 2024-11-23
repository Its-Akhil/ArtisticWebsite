import React, { useState, useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { gsap } from 'gsap';
import RevealOnScroll from '../common/RevealOnScroll';
import { addTitleHoverEffect } from '../../utils/titleAnimation';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      addTitleHoverEffect(titleRef.current);
    }

    // Interactive background animation
    if (canvasRef.current && sectionRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d')!;
      let width = sectionRef.current.offsetWidth;
      let height = sectionRef.current.offsetHeight;
      let animationFrameId: number;
      let mouseX = width / 2;
      let mouseY = height / 2;

      const resizeCanvas = () => {
        width = sectionRef.current!.offsetWidth;
        height = sectionRef.current!.offsetHeight;
        canvas.width = width;
        canvas.height = height * 1; // Modified canvas height
      };

      // Initialize dots
      const dots: Array<{x: number; y: number; vx: number; vy: number; radius: number; color: string}> = [];
      const numDots = Math.floor((width * height) / 15000); // More dots
      
      // Brighter, more visible colors with higher opacity
      const colors = [
        'rgba(255, 182, 193, 0.7)',  // Light pink
        'rgba(173, 216, 230, 0.7)',  // Light blue
        'rgba(144, 238, 144, 0.7)',  // Light green
        'rgba(221, 160, 221, 0.7)',  // Plum
        'rgba(255, 218, 185, 0.7)'   // Peach
      ];

      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.8, // Faster movement
          vy: (Math.random() - 0.5) * 0.8,
          radius: Math.random() * 3 + 2,    // Larger dots
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, width, height);

        // Update and draw dots
        dots.forEach((dot, i) => {
          // Move dots
          dot.x += dot.vx;
          dot.y += dot.vy;

          // Bounce off edges
          if (dot.x < 0 || dot.x > width) dot.vx *= -1;
          if (dot.y < 0 || dot.y > height) dot.vy *= -1;

          // Mouse interaction
          const dx = mouseX - dot.x;
          const dy = mouseY - dot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 200; // Increased interaction range

          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) * 0.8; // Stronger repulsion
            dot.x -= dx * force;
            dot.y -= dy * force;
          }

          // Draw dot
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
          ctx.fillStyle = dot.color;
          ctx.fill();

          // Connect nearby dots with thicker, more visible lines
          dots.slice(i + 1).forEach(otherDot => {
            const dx = dot.x - otherDot.x;
            const dy = dot.y - otherDot.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) { // Increased connection distance
              ctx.beginPath();
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(otherDot.x, otherDot.y);
              ctx.lineWidth = 2; // Thicker lines
              ctx.strokeStyle = `rgba(180, 180, 255, ${0.4 * (1 - distance / 120)})`; // More visible connections
              ctx.stroke();
            }
          });
        });

        animationFrameId = requestAnimationFrame(animate);
      };

      // Event listeners
      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
      };

      const handleResize = () => {
        resizeCanvas();
      };

      // Initialize
      resizeCanvas();
      window.addEventListener('resize', handleResize);
      canvas.addEventListener('mousemove', handleMouseMove);
      animate();

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        canvas.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section ref={sectionRef} id="contact" className="relative min-h-screen bg-gradient-to-b from-white to-gray-50" style={{ display: 'flex', alignItems: 'center' ,justifyContent: 'center' }}>
      {/* Interactive Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <h2 ref={titleRef} className="text-4xl font-bold mb-12 text-center font-handwritten cursor-pointer">
            Get in Touch
          </h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <RevealOnScroll direction="left" width='100%'>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-shadow resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-handwritten"
                >
                  Send Message
                </button>
              </form>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <div className="lg:pl-12">
              <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <h3 className="text-xl font-bold mb-4 font-handwritten">
                  Let's Connect
                </h3>
                <p className="text-gray-600 mb-6">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>
                <div className="space-y-4">
                  <SocialLink
                    href="mailto:your.email@example.com"
                    icon={<Mail className="w-5 h-5" />}
                    label="your.email@example.com"
                  />
                  <SocialLink
                    href="https://github.com/yourusername"
                    icon={<Github className="w-5 h-5" />}
                    label="GitHub"
                  />
                  <SocialLink
                    href="https://linkedin.com/in/yourusername"
                    icon={<Linkedin className="w-5 h-5" />}
                    label="LinkedIn"
                  />
                  <SocialLink
                    href="https://twitter.com/yourusername"
                    icon={<Twitter className="w-5 h-5" />}
                    label="Twitter"
                  />
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 font-handwritten">
                  Current Status
                </h3>
                <p className="text-gray-600">
                  Available for freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
