import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Bot, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  Flame,
  Zap,
  TrendingUp,
  Laptop,
  MessageSquare
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { VIDEO_SHOWCASE, AGENCY_INFO } from '../data/agencyData';

interface VideoSectionProps {
  onOpenChatbot: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onOpenChatbot }) => {
  const [activeTab, setActiveTab] = useState<'app' | 'web' | 'chatbot' | 'combo'>('chatbot');

  return (
    <section 
      className="py-24 relative overflow-hidden bg-[#050814]"
      id="como-funciona"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-[#00d2ff]/10 via-[#8b5cf6]/10 to-[#f43f5e]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-bold text-[#00d2ff] uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DEMOSTRACIÓN INTERACTIVA</span>
          </div>

          {/* REQUIREMENT 4: "Mira cómo funciona" */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Mira cómo funciona
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Explora las 4 soluciones digitales de Digital MYK Lab: Apps personalizadas, Sitios Web de alta velocidad en Vercel, Chatbots de atención continua y Ecosistemas completos con IA.
          </p>
        </div>

        {/* REQUIREMENT 4: Prominent Glassmorphism Central Container */}
        <div 
          className="relative rounded-3xl bg-[#0c1529]/80 backdrop-blur-2xl border border-white/15 p-4 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(0,210,255,0.15)] overflow-hidden"
          id="video-glass-container"
        >
          {/* Neon accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00d2ff] via-[#8b5cf6] to-[#f43f5e]" />

          {/* Interactive Demo Selector Tabs: 4 Products/Services */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00d2ff] animate-ping" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                SIMULADOR DEL ECOSISTEMA DIGITAL
              </span>
            </div>

            {/* Switch Tabs - 4 Products */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 text-xs">
              <button
                onClick={() => setActiveTab('app')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'app'
                    ? 'bg-gradient-to-r from-[#f43f5e] to-[#ec4899] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>1. App a la Medida</span>
              </button>

              <button
                onClick={() => setActiveTab('web')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'web'
                    ? 'bg-gradient-to-r from-[#00d2ff] to-[#0099ff] text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>2. Web en Vercel</span>
              </button>

              <button
                onClick={() => setActiveTab('chatbot')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'chatbot'
                    ? 'bg-gradient-to-r from-[#38bdf8] to-[#0070f3] text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Bot className="w-3.5 h-3.5" />
                <span>3. Chatbot IA 24/7</span>
              </button>

              <button
                onClick={() => setActiveTab('combo')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'combo'
                    ? 'bg-gradient-to-r from-amber-400 to-[#f43f5e] text-black font-extrabold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>4. Ecosistema IA + Web</span>
              </button>
            </div>
          </div>

          {/* Central Glass Video & Simulator Showcase Stage */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left/Main: Interactive Video / Simulator Screen */}
            <div className="lg:col-span-8 relative aspect-video w-full rounded-2xl bg-[#030611] border border-white/10 overflow-hidden shadow-2xl group flex flex-col justify-between p-4 sm:p-6">
              
              {/* Top simulation window controls */}
              <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-[11px] text-slate-300 ml-2">
                    {activeTab === 'app' && 'app://digitalmyk-dashboard.cloud'}
                    {activeTab === 'web' && 'https://tu-empresa.vercel.app (100% Speed)'}
                    {activeTab === 'chatbot' && 'digitalmyk://agent-ia-whatsapp.live'}
                    {activeTab === 'combo' && 'ecosystem://digitalmyk-ia-plus-web.pro'}
                  </span>
                </div>

                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase">
                  En Vivo
                </span>
              </div>

              {/* Dynamic Interactive Visual Content based on Tab */}
              <div className="my-auto py-4">
                {activeTab === 'app' && (
                  <div className="space-y-3 max-w-md mx-auto animate-in fade-in duration-300">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold">Ventas del Día</span>
                        <div className="text-lg font-extrabold text-white">$24,850.00 USD</div>
                      </div>
                      <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>+18.4% hoy</span>
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-slate-400 block text-[10px]">Nuevos Pedidos</span>
                        <span className="font-bold text-white">142 Órdenes</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-slate-400 block text-[10px]">Usuarios Activos</span>
                        <span className="font-bold text-[#f43f5e]">1,842 en línea</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'web' && (
                  <div className="space-y-4 max-w-md mx-auto text-center animate-in fade-in duration-300">
                    <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10">
                      <div className="grid grid-cols-3 gap-6 text-center px-4">
                        <div>
                          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100</div>
                          <div className="text-[10px] text-slate-400 uppercase font-bold">Performance</div>
                        </div>
                        <div>
                          <div className="text-2xl sm:text-3xl font-extrabold text-[#00d2ff]">0.6s</div>
                          <div className="text-[10px] text-slate-400 uppercase font-bold">Carga Total</div>
                        </div>
                        <div>
                          <div className="text-2xl sm:text-3xl font-extrabold text-[#f43f5e]">A+</div>
                          <div className="text-[10px] text-slate-400 uppercase font-bold">SEO Score</div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-400" />
                        <span>Alojado en <strong>Vercel Edge CDN Global</strong></span>
                      </span>
                      <span className="font-mono text-emerald-400">SSL 100% ACTIVO</span>
                    </div>
                  </div>
                )}

                {activeTab === 'chatbot' && (
                  <div className="space-y-3 max-w-md mx-auto animate-in fade-in duration-300">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#00d2ff]/20 text-[#00d2ff] border border-[#00d2ff]/40 flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="p-3 rounded-xl bg-[#131d36] border border-white/10 text-xs text-slate-100 shadow-md">
                        <p className="font-semibold text-[#00d2ff] mb-0.5">Asistente Virtual Digital MYK</p>
                        <p>¡Hola! He detectado que buscas automatizar atención y leads en WhatsApp. ¿Deseas agendar o cotizar?</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 justify-end">
                      <div className="p-3 rounded-xl bg-[#25D366] text-black font-semibold text-xs shadow-md">
                        <p>Quiero agendar para hoy a las 4:00 PM y ver precios de Chatbot.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#00d2ff]/20 text-[#00d2ff] border border-[#00d2ff]/40 flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="p-3 rounded-xl bg-[#131d36] border border-emerald-500/40 text-xs text-slate-100 shadow-md space-y-1.5">
                        <p className="text-emerald-300 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>¡Cita Sincronizada en Google Calendar!</span>
                        </p>
                        <p className="text-[11px] text-slate-300">Notificación enviada al WhatsApp +51 929 327 654.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'combo' && (
                  <div className="space-y-3 max-w-md mx-auto animate-in fade-in duration-300">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-400/15 via-[#f43f5e]/15 to-[#00d2ff]/15 border border-amber-400/40 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-amber-300 text-xs font-black uppercase">🔥 Oferta Asistente IA + Web</span>
                        <span className="text-emerald-400 font-mono text-[10px] font-bold">100% INCLUIDO</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-center text-xs">
                        <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                          <span className="text-[10px] text-slate-400 block">Conversaciones IA</span>
                          <span className="text-sm font-extrabold text-white">1,842</span>
                        </div>
                        <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                          <span className="text-[10px] text-slate-400 block">Web Vercel</span>
                          <span className="text-sm font-extrabold text-amber-300">GRATIS</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-200 text-center font-medium">
                        Integrado en WhatsApp, Instagram, Shopify y HubSpot.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Simulation Bar with Action */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-[#00d2ff]" />
                  <span className="text-[11px]">Tecnología con Garantía Digital MYK Lab</span>
                </div>

                <button
                  onClick={onOpenChatbot}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#00d2ff]" />
                  <span>Interactuar en Vivo</span>
                </button>
              </div>

            </div>

            {/* Right: Feature Highlights & Summary */}
            <div className="lg:col-span-4 space-y-4 text-slate-300 text-xs sm:text-sm">
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Automatización Total y Control en Tiempo Real
              </h3>

              <p className="text-slate-300 leading-relaxed text-xs">
                {VIDEO_SHOWCASE.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {VIDEO_SHOWCASE.highlights.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200">{point}</span>
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp Consultation CTA with authentic WhatsApp Icon */}
              <div className="pt-4">
                <a
                  href={`${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Digital MYK Lab, vi la demostración en vivo de sus 4 servicios y quiero cotizar por WhatsApp.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-extrabold text-xs uppercase tracking-widest text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(37,211,102,0.4)] cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Cotizar por WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
