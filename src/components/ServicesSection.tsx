import React, { useState } from 'react';
import { 
  Smartphone, 
  Globe, 
  Bot, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Cpu, 
  Code2, 
  Lock, 
  BarChart3, 
  Users, 
  Clock, 
  CalendarCheck, 
  Target,
  Sparkles,
  Phone,
  Layers,
  Gift,
  Flame,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { CORE_SERVICES, AGENCY_INFO } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenChatbotWithQuery: (query: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenChatbotWithQuery
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'apps-a-la-medida':
        return <Smartphone className="w-6 h-6 text-[#f43f5e]" />;
      case 'sitios-web-profesionales':
        return <Globe className="w-6 h-6 text-[#00d2ff]" />;
      case 'automatizacion-chatbots':
        return <Bot className="w-6 h-6 text-[#38bdf8]" />;
      case 'combo-web-asistente-ia':
        return <Flame className="w-6 h-6 text-amber-400" />;
      default:
        return <Cpu className="w-6 h-6 text-white" />;
    }
  };

  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-4 h-4 text-[#f43f5e]" />;
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#00d2ff]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-amber-400" />;
      case 'Rocket': return <Zap className="w-4 h-4 text-[#00d2ff]" />;
      case 'Lock': return <Lock className="w-4 h-4 text-emerald-400" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4 text-[#f43f5e]" />;
      case 'Smartphone': return <Smartphone className="w-4 h-4 text-sky-400" />;
      case 'Clock': return <Clock className="w-4 h-4 text-amber-400" />;
      case 'Target': return <Target className="w-4 h-4 text-[#f43f5e]" />;
      case 'CalendarCheck': return <CalendarCheck className="w-4 h-4 text-emerald-400" />;
      case 'Zap': return <Zap className="w-4 h-4 text-[#00d2ff]" />;
      default: return <CheckCircle2 className="w-4 h-4 text-[#00d2ff]" />;
    }
  };

  const filteredServices = filterCategory === 'all'
    ? CORE_SERVICES
    : CORE_SERVICES.filter((s) => s.id === filterCategory);

  return (
    <section 
      className="py-24 relative overflow-hidden bg-[#050814]"
      id="servicios"
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#00d2ff]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#f43f5e]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-200 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-[#00d2ff]" />
            <span>CATÁLOGO DE SERVICIOS DIGITAL MYK LAB</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Nuestros <span className="brand-gradient-text">4 Servicios Principales</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Diferenciados y diseñados a la medida para potenciar cada área de tu empresa: desde desarrollo de software y webs ultrarrápidas, hasta chatbots y ecosistemas completos con Inteligencia Artificial.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filterCategory === 'all'
                ? 'bg-white/15 text-white border border-white/30 shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            Todos los Servicios (4)
          </button>

          {CORE_SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setFilterCategory(s.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                filterCategory === s.id
                  ? 'bg-[#00d2ff]/20 text-[#00d2ff] border border-[#00d2ff]/50 shadow-[0_0_15px_rgba(0,210,255,0.2)]'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              <span>{s.number}. {s.title}</span>
            </button>
          ))}
        </div>

        {/* 4 SaaS Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const isMagenta = service.accentColor === 'magenta';
            const isCyan = service.accentColor === 'cyan';
            const isBlue = service.accentColor === 'blue';
            const isGold = service.accentColor === 'gold';

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl bg-[#0c1529]/95 backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl group ${
                  isMagenta
                    ? 'border-[#f43f5e]/30 hover:border-[#f43f5e] hover:shadow-[0_0_35px_rgba(244,63,94,0.25)]'
                    : isCyan
                    ? 'border-[#00d2ff]/30 hover:border-[#00d2ff] hover:shadow-[0_0_35px_rgba(0,210,255,0.25)]'
                    : isBlue
                    ? 'border-[#3b82f6]/30 hover:border-[#3b82f6] hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]'
                    : 'border-amber-400/50 hover:border-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] ring-1 ring-amber-400/30'
                }`}
                id={`card-${service.id}`}
              >
                {/* Accent Top Bar */}
                <div 
                  className={`h-1.5 w-full ${
                    isMagenta
                      ? 'bg-gradient-to-r from-[#f43f5e] via-[#ec4899] to-[#f43f5e]'
                      : isCyan
                      ? 'bg-gradient-to-r from-[#00d2ff] via-[#38bdf8] to-[#00d2ff]'
                      : isBlue
                      ? 'bg-gradient-to-r from-[#38bdf8] via-[#0070f3] to-[#38bdf8]'
                      : 'bg-gradient-to-r from-amber-400 via-[#f43f5e] to-amber-400'
                  }`}
                />

                <div className="p-5 sm:p-6 space-y-5 flex-1">
                  
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className={`p-2.5 rounded-2xl border ${
                      isMagenta 
                        ? 'bg-[#f43f5e]/15 border-[#f43f5e]/40' 
                        : isCyan 
                        ? 'bg-[#00d2ff]/15 border-[#00d2ff]/40' 
                        : isBlue
                        ? 'bg-[#38bdf8]/15 border-[#38bdf8]/40'
                        : 'bg-amber-400/15 border-amber-400/40'
                    }`}>
                      {getServiceIcon(service.id)}
                    </div>

                    <div className="text-right">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block">
                        Servicio {service.number}
                      </span>
                      <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${
                        isMagenta 
                          ? 'bg-[#f43f5e]/10 border-[#f43f5e]/40 text-[#f43f5e]' 
                          : isCyan 
                          ? 'bg-[#00d2ff]/10 border-[#00d2ff]/40 text-[#00d2ff]' 
                          : isBlue
                          ? 'bg-[#38bdf8]/10 border-[#38bdf8]/40 text-[#38bdf8]'
                          : 'bg-amber-400/15 border-amber-400/50 text-amber-300'
                      }`}>
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Slogan */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium mt-1 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Focus summary box */}
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-[11px] text-slate-200">
                    <strong className="text-white block text-[10px] uppercase font-bold text-slate-400 mb-0.5">Enfoque:</strong>
                    <span>{service.focus}</span>
                  </div>

                  {/* Visual Preview Snapshot for each service */}
                  {service.id === 'automatizacion-chatbots' && (
                    <div className="p-2.5 rounded-xl bg-[#060b17] border border-[#38bdf8]/30 space-y-1.5 text-[10px]">
                      <div className="flex items-center justify-between text-slate-400 font-bold border-b border-white/5 pb-1">
                        <span className="text-[#38bdf8]">WhatsApp Bot Demo</span>
                        <span className="text-emerald-400">● 24/7 Activo</span>
                      </div>
                      <div className="bg-[#121d33] p-1.5 rounded-lg text-slate-200">
                        🤖 ¡Hola! ¿En qué puedo ayudarte hoy?
                      </div>
                      <div className="bg-[#00d2ff]/20 text-slate-100 p-1.5 rounded-lg text-right font-medium">
                        Quiero cotizar para mi empresa
                      </div>
                    </div>
                  )}

                  {service.id === 'combo-web-asistente-ia' && (
                    <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-400/10 to-[#f43f5e]/10 border border-amber-400/30 space-y-1 text-[10px]">
                      <div className="flex items-center justify-between text-amber-300 font-extrabold">
                        <span>🎁 Web Gratis + Asistente IA</span>
                        <span className="text-emerald-400">99.9% Uptime</span>
                      </div>
                      <p className="text-slate-300 text-[9px] leading-tight">
                        Integración multicanal: WhatsApp, Instagram, Messenger, Shopify y HubSpot.
                      </p>
                    </div>
                  )}

                  {/* Benefits List */}
                  <div className="space-y-2.5 pt-1">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Incluye:
                    </h4>
                    <div className="space-y-2">
                      {service.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="p-0.5 rounded bg-white/5 border border-white/5 shrink-0 mt-0.5">
                            {getBenefitIcon(b.icon)}
                          </div>
                          <div>
                            <span className="font-bold text-[11px] text-white block">
                              {b.title}
                            </span>
                            <span className="text-[10px] text-slate-400 leading-tight">
                              {b.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-1">
                    <div className="flex flex-wrap gap-1">
                      {service.techStack.slice(0, 4).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="p-4 sm:p-5 bg-[#070c1a] border-t border-white/10 flex flex-col gap-2">
                  
                  {/* WhatsApp Direct Action */}
                  <a
                    href={`${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer ${
                      isMagenta
                        ? 'bg-[#25D366] hover:bg-[#20ba5a]'
                        : isCyan
                        ? 'bg-[#25D366] hover:bg-[#20ba5a]'
                        : isBlue
                        ? 'bg-[#25D366] hover:bg-[#20ba5a]'
                        : 'bg-[#25D366] hover:bg-[#20ba5a] shadow-[0_0_20px_rgba(37,211,102,0.4)]'
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Cotizar en WhatsApp</span>
                  </a>

                  {/* Consult with AI Bot */}
                  <button
                    onClick={() => onOpenChatbotWithQuery(`Quiero cotizar e informarme sobre: ${service.title}`)}
                    className="w-full py-2 px-3 rounded-xl font-semibold text-[11px] text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3 h-3 text-[#00d2ff]" />
                    <span>Consultar con IA</span>
                  </button>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
