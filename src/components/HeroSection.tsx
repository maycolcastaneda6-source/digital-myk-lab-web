import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Globe, 
  Bot, 
  Flame,
  CheckCircle2, 
  Code2, 
  Lock, 
  TrendingUp, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AGENCY_INFO } from '../data/agencyData';

interface HeroSectionProps {
  onOpenChatbot: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenChatbot,
  onScrollToSection
}) => {
  return (
    <section 
      className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center cyber-grid"
      id="hero"
    >
      {/* Ambient Neon Lighting Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00d2ff]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[400px] bg-[#f43f5e]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-[#3b82f6]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_20px_rgba(0,210,255,0.2)] animate-pulse-subtle">
            <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping" />
            <span className="text-xs font-bold text-slate-200 uppercase tracking-widest flex items-center gap-1.5">
              <span>AGENCIA DIGITAL & SOFTWARE</span>
              <span className="text-slate-500">•</span>
              <span className="text-[#00d2ff]">{AGENCY_INFO.badge}</span>
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Creamos la <span className="cyan-gradient-text">App a tu Medida</span>,{' '}
            <span className="text-white">Webs Ultrarrápidas</span> y{' '}
            <span className="magenta-gradient-text">Chatbots con IA 24/7</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Impulsa tu empresa, conecta con más clientes y automatiza tus ventas con soluciones tecnológicas de vanguardia alojadas en <strong className="text-white font-semibold">Vercel, GitHub y la Nube</strong>.
          </p>
        </div>

        {/* Interactive CTA Buttons with WhatsApp Icon */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          {/* Primary CTA */}
          <button
            onClick={() => onScrollToSection('servicios')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-widest text-black bg-gradient-to-r from-[#00d2ff] via-[#38bdf8] to-[#00d2ff] hover:opacity-95 transition-all flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(0,210,255,0.4)] cursor-pointer group"
          >
            <span>Explorar Servicios</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Asistente IA CTA */}
          <button
            onClick={onOpenChatbot}
            className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-widest text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00d2ff]/50 transition-all flex items-center justify-center gap-2.5 backdrop-blur-xl cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#00d2ff]" />
            <span>Hablar con Asistente IA</span>
          </button>

          {/* WhatsApp Direct with Authentic WhatsApp Icon */}
          <a
            href={`${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Digital MYK Lab, deseo cotizar un proyecto para mi negocio.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-extrabold text-xs sm:text-sm uppercase tracking-widest text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(37,211,102,0.4)] cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>WhatsApp Directo</span>
          </a>
        </div>

        {/* 4 Core Highlights Banner */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          
          {/* Card 1: Apps a la Medida */}
          <div 
            onClick={() => onScrollToSection('servicios')}
            className="p-5 rounded-2xl glass-card-hover border-t-2 border-t-[#f43f5e] cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#f43f5e]/15 border border-[#f43f5e]/30 flex items-center justify-center text-[#f43f5e]">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#f43f5e]">
                01 · Apps Móviles
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#f43f5e] transition-colors">
              Apps a la Medida
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Control total del negocio, dashboards de ventas y notificaciones push.
            </p>
          </div>

          {/* Card 2: Sitios Web Profesionales */}
          <div 
            onClick={() => onScrollToSection('servicios')}
            className="p-5 rounded-2xl glass-card-hover border-t-2 border-t-[#00d2ff] cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#00d2ff]/15 border border-[#00d2ff]/30 flex items-center justify-center text-[#00d2ff]">
                <Globe className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00d2ff]">
                02 · Web & SEO
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#00d2ff] transition-colors">
              Webs Ultrarrápidas
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Vercel + GitHub, SSL incluido, SEO de alto impacto y carga récord.
            </p>
          </div>

          {/* Card 3: Chatbots IA */}
          <div 
            onClick={() => onScrollToSection('servicios')}
            className="p-5 rounded-2xl glass-card-hover border-t-2 border-t-[#3b82f6] cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/15 border border-[#3b82f6]/30 flex items-center justify-center text-[#3b82f6]">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#3b82f6]">
                03 · Chatbots IA
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#3b82f6] transition-colors">
              Automatización 24/7
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Chatbots para WhatsApp, captación de leads y agenda automática.
            </p>
          </div>

          {/* Card 4: Asistente IA + Web Gratis */}
          <div 
            onClick={() => onScrollToSection('combos')}
            className="p-5 rounded-2xl glass-card-hover border-t-2 border-t-amber-400 cursor-pointer group ring-1 ring-amber-400/20"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-400">
                <Flame className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
                04 · Oferta Especial
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
              Asistente IA + Web
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Asistente IA 24/7 y llévate tu Sitio Web Profesional gratis.
            </p>
          </div>

        </div>

        {/* Live Metrics / Guarantee Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00d2ff]" />
            <span><strong>Seguridad & Garantía</strong> en cada entrega</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#f43f5e]" />
            <span><strong>Vercel + GitHub</strong> Despliegue en CDN mundial</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span><strong>IA de Vanguardia</strong> para atención continua 24/7</span>
          </div>
        </div>

      </div>
    </section>
  );
};
