import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import RevealOnScroll from '../common/RevealOnScroll';

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
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <h2 className="text-4xl font-bold mb-12 text-center font-handwritten">
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
