import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Bot, 
  Globe, 
  Gift, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  Phone, 
  Flame,
  Layers,
  ShoppingBag,
  Calendar,
  Clock,
  TrendingUp,
  Cpu,
  DollarSign,
  Headphones,
  Laptop
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AGENCY_INFO } from '../data/agencyData';

interface CombosSectionProps {
  onOpenChatbotWithQuery: (query: string) => void;
}

export const CombosSection: React.FC<CombosSectionProps> = ({
  onOpenChatbotWithQuery
}) => {
  const pillars = [
    {
      title: 'IA INTEGRADA',
      desc: 'Responde, guía y convierte automáticamente con inteligencia artificial.',
      icon: <Cpu className="w-5 h-5 text-[#00d2ff]" />
    },
    {
      title: 'AGENDA AUTOMÁTICA',
      desc: 'Reservas y citas sin intervención manual en tiempo real.',
      icon: <Calendar className="w-5 h-5 text-emerald-400" />
    },
    {
      title: 'INCREMENTA TUS VENTAS',
      desc: 'Más clientes, más ingresos y procesos de compra inmediatos.',
      icon: <TrendingUp className="w-5 h-5 text-[#f43f5e]" />
    },
    {
      title: 'AHORRA COSTOS',
      desc: 'Automatiza y trabaja con mayor eficiencia reduciendo tiempos.',
      icon: <DollarSign className="w-5 h-5 text-amber-400" />
    }
  ];

  const guarantees = [
    {
      title: '< 1 MINUTO En promedio',
      subtitle: 'Velocidad de atención: Respuestas instantáneas que convierten.',
      icon: <Zap className="w-5 h-5 text-[#00d2ff]" />
    },
    {
      title: '99.9% UPTIME',
      subtitle: 'Disponibilidad garantizada: Tu negocio siempre en línea.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    },
    {
      title: 'SOPORTE SIN LÍMITES 24/7/365',
      subtitle: 'Soporte real 24/7: Estamos contigo siempre que lo necesites.',
      icon: <Headphones className="w-5 h-5 text-[#f43f5e]" />
    },
    {
      title: 'INCREMENTO DE VENTAS',
      subtitle: 'Potencial comprobado: Automatización inteligente que impulsa tus resultados.',
      icon: <TrendingUp className="w-5 h-5 text-amber-400" />
    }
  ];

  const toolIntegrations = [
    { name: 'WhatsApp', icon: 'MessageSquare' },
    { name: 'Instagram', icon: 'Instagram' },
    { name: 'Messenger', icon: 'Facebook' },
    { name: 'Shopify', icon: 'ShoppingBag' },
    { name: 'HubSpot', icon: 'Layers' }
  ];

  return (
    <section 
      className="py-24 relative overflow-hidden bg-[#070c1a]"
      id="combos"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-[#00d2ff]/15 via-[#8b5cf6]/15 to-[#f43f5e]/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-500/20 via-[#f43f5e]/20 to-[#00d2ff]/20 border border-amber-400/50 text-xs sm:text-sm font-extrabold text-amber-300 uppercase tracking-widest shadow-[0_0_25px_rgba(245,158,11,0.3)] animate-pulse-subtle">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>OFERTA: WEB PROFESIONAL + ASISTENTE IA</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            ¡Consigue tu <span className="magenta-gradient-text">Asistente IA 24/7</span>... y tu{' '}
            <span className="gold-gradient-text">Sitio Web Profesional</span>{' '}
            <span className="text-white underline decoration-amber-400">Totalmente Gratis</span>!
          </h2>

          <p className="text-base sm:text-lg text-slate-200 font-medium">
            Implementación de IA de Vanguardia y Diseño Web Profesional Incluidos.
          </p>
        </div>

        {/* Big Offer Banner / Container */}
        <div className="relative rounded-3xl bg-[#0c1529]/95 backdrop-blur-2xl border-2 border-amber-400/40 p-6 sm:p-10 lg:p-12 shadow-[0_0_60px_rgba(245,158,11,0.2)] overflow-hidden">
          
          {/* Top Banner Tag */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 via-[#f43f5e] to-[#00d2ff] text-black font-black text-[11px] sm:text-xs uppercase tracking-widest px-6 py-2 rounded-bl-2xl shadow-lg">
            ★ OFERTA IRRESISTIBLE
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: 4 Pillars & Integrations */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] block mb-1">
                  Ecosistema Digital Completo
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Todo lo que tu negocio necesita para dominar tu mercado
                </h3>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {pillars.map((p, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/5 shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs text-white uppercase tracking-wide">
                        {p.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Integrations Bar */}
              <div className="pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-2.5">
                  Integrado con tus herramientas favoritas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {toolIntegrations.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-[#050814] border border-white/15 text-xs font-bold text-slate-200 flex items-center gap-2 shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#00d2ff]" />
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Laptop / Dashboard Preview & WhatsApp CTA */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#050814] border border-amber-400/30 shadow-2xl space-y-6 flex flex-col justify-between">
              
              {/* Laptop / Dashboard Simulation Card */}
              <div className="rounded-2xl bg-[#0c1424] border border-white/10 p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Laptop className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-white">Panel Dashboard en Vivo</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    Activo 24/7
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2 rounded-xl bg-white/5">
                    <span className="text-[10px] text-slate-400 block">Conversaciones</span>
                    <span className="text-base font-extrabold text-white">1,842</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5">
                    <span className="text-[10px] text-slate-400 block">Citas Agendadas</span>
                    <span className="text-base font-extrabold text-[#00d2ff]">328</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-400/10 to-[#f43f5e]/10 border border-amber-400/30 text-center">
                  <span className="text-[10px] text-amber-300 font-bold block">Ventas Generadas por Asistente IA</span>
                  <span className="text-lg font-extrabold text-white">$24,780 USD</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={`${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Digital MYK Lab, deseo reclamar la OFERTA: Asistente IA 24/7 + Sitio Web Profesional Gratis.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-4 rounded-xl font-extrabold text-xs uppercase tracking-widest text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(37,211,102,0.5)] cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>Reclamar Oferta en WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenChatbotWithQuery('Quiero información y condiciones de la Oferta: Asistente IA 24/7 + Web Gratis')}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#00d2ff]" />
                  <span>Consultar con el Asistente IA</span>
                </button>
              </div>

            </div>

          </div>

          {/* Bottom 4 Guarantees Strip */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guarantees.map((g, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-white/5 shrink-0 mt-0.5">
                  {g.icon}
                </div>
                <div>
                  <h5 className="font-extrabold text-xs text-white">
                    {g.title}
                  </h5>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-tight">
                    {g.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slogan Banner */}
          <div className="mt-8 pt-4 border-t border-white/10 text-center text-xs font-bold uppercase tracking-widest text-slate-300">
            <span className="text-[#00d2ff]">INNOVA</span>. <span className="text-[#f43f5e]">AUTOMATIZA</span>. <span className="text-amber-400">CONVIERTE</span>. — <span className="text-slate-400">Tu crecimiento es nuestra misión</span>.
          </div>

        </div>

      </div>
    </section>
  );
};
