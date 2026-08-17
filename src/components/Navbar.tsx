import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { AGENCY_INFO } from '../data/agencyData';
import { Menu, X, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onOpenChatbot: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenChatbot,
  onScrollToSection
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Servicios', id: 'servicios' },
    { label: 'Combos', id: 'combos' },
    { label: 'Contacto', id: 'contacto' }
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050814]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
      id="main-navigation-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Requirement 1: Logo on the top-left */}
        <div 
          onClick={() => handleNavClick('hero')}
          className="cursor-pointer"
        >
          <Logo size="md" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-sm font-semibold text-slate-300 hover:text-[#00d2ff] transition-colors relative py-1 group cursor-pointer"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00d2ff] to-[#f43f5e] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          
          <button
            onClick={() => handleNavClick('como-funciona')}
            className="text-sm font-semibold text-slate-300 hover:text-[#00d2ff] transition-colors cursor-pointer"
          >
            Cómo Funciona
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Asistente IA trigger */}
          <button
            onClick={onOpenChatbot}
            className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-[#00d2ff]/15 to-[#f43f5e]/15 border border-[#00d2ff]/40 text-xs font-bold text-slate-200 hover:text-white hover:border-[#00d2ff] transition-all flex items-center gap-2 cursor-pointer group"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00d2ff] group-hover:rotate-12 transition-transform" />
            <span>Asistente IA</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </button>

          {/* WhatsApp Direct with WhatsApp Icon */}
          <a
            href={`${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Digital MYK Lab, deseo solicitar una cotización para mi negocio.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.4)] cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>{AGENCY_INFO.phone}</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenChatbot}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#00d2ff]"
            aria-label="Abrir Asistente IA"
          >
            <Sparkles className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pt-2 pb-6 bg-[#0c1424]/95 backdrop-blur-2xl border-b border-white/10 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left py-2.5 px-4 rounded-lg bg-white/5 text-slate-200 font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick('como-funciona')}
              className="text-left py-2.5 px-4 rounded-lg bg-white/5 text-slate-200 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Cómo Funciona (Demo en Video)
            </button>

            <div className="pt-3 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChatbot();
                }}
                className="w-full py-3 rounded-lg bg-white/10 border border-[#00d2ff]/40 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#00d2ff]" />
                <span>Abrir Asistente IA 24/7</span>
              </button>

              <a
                href={`${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Digital MYK Lab, quiero cotizar un proyecto.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp: {AGENCY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
