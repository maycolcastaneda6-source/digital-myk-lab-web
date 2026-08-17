import React, { useState } from 'react';
import { 
  Mail, 
  Globe, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Building, 
  User, 
  ArrowRight 
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AGENCY_INFO, CORE_SERVICES } from '../data/agencyData';
import { QuoteFormState } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormState>({
    clientName: '',
    phone: '',
    email: '',
    businessType: '',
    selectedServices: ['sitios-web-profesionales'],
    budgetRange: 'Estándar',
    projectDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleService = (serviceId: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceId);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== serviceId)
          : [...prev.selectedServices, serviceId]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName || !formData.phone) return;

    // Generate pre-filled WhatsApp message
    const serviceNames = formData.selectedServices
      .map((id) => {
        const found = CORE_SERVICES.find((s) => s.id === id);
        return found ? found.title : id;
      })
      .join(', ');

    const text = `Hola Digital MYK Lab! Mi nombre es *${formData.clientName}*.
Deseo cotizar para mi empresa/rubro (*${formData.businessType || 'General'}*).
• Servicios de interés: ${serviceNames || 'Asesoría general'}
• Teléfono de contacto: ${formData.phone}
• Email: ${formData.email || 'No especificado'}
• Detalles: ${formData.projectDetails || 'Solicito cotización técnica personalizada'}`;

    const whatsappUrl = `${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section 
      className="py-24 relative overflow-hidden bg-[#050814]"
      id="contacto"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#00d2ff]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-slate-200 uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5 text-[#00d2ff]" />
            <span>CONTACTO & COTIZACIÓN RÁPIDA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Iniciemos tu Proyecto con <span className="cyan-gradient-text">Digital MYK Lab</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Cuéntanos qué necesitas y te responderemos en menos de 15 minutos con una propuesta técnica y cotización adaptada a tu presupuesto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1529]/90 border border-white/10 shadow-xl space-y-6">
              
              <h3 className="text-xl font-extrabold text-white">
                Canales de Atención Directa
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* WhatsApp Official Link */}
                <a
                  href={`${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Digital MYK Lab, quiero conversar con un asesor.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 group-hover:scale-105 transition-transform flex items-center justify-center">
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                      WhatsApp Oficial
                    </span>
                    <span className="text-base font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                      {AGENCY_INFO.phoneFormatted}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#00d2ff]/50 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-[#00d2ff]/15 text-[#00d2ff] border border-[#00d2ff]/30 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                      Correo Electrónico
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#00d2ff] transition-colors">
                      {AGENCY_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Website */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 border border-white/5">
                  <div className="p-2.5 rounded-xl bg-[#f43f5e]/15 text-[#f43f5e] border border-[#f43f5e]/30">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                      Sitio Web Oficial
                    </span>
                    <span className="text-sm font-bold text-white">
                      {AGENCY_INFO.website}
                    </span>
                  </div>
                </div>

              </div>

              {/* Security Seal */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#00d2ff]/10 to-[#f43f5e]/10 border border-[#00d2ff]/30 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#00d2ff]" />
                  <span>Garantía y Seguridad Digital MYK Lab</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Todos nuestros proyectos se entregan con código fuente transferible en GitHub, certificados SSL y documentación técnica completa.
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Quotation Form */}
          <div className="lg:col-span-7">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1529]/95 border border-white/10 shadow-2xl">
              
              <h3 className="text-xl font-extrabold text-white mb-2">
                Cotizador Rápido de Proyectos
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Selecciona los servicios que deseas cotizar para tu empresa:
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">¡Solicitud Generada con Éxito!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Se ha abierto la ventana de WhatsApp con todos los detalles listos para ser enviados a nuestro equipo técnico.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
                  >
                    Hacer otra cotización
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  {/* Service Multi-Select Chips (All 4 Services) */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                      1. Selecciona los servicios requeridos (4 disponibles):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {CORE_SERVICES.map((s) => {
                        const selected = formData.selectedServices.includes(s.id);
                        return (
                          <button
                            type="button"
                            key={s.id}
                            onClick={() => toggleService(s.id)}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                              selected
                                ? 'bg-[#00d2ff]/15 border-[#00d2ff] text-white shadow-[0_0_15px_rgba(0,210,255,0.2)]'
                                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs">{s.title}</span>
                              <span className="text-[9px] font-mono text-slate-400">{s.number}</span>
                            </div>
                            <span className="text-[10px] opacity-75 mt-1">{s.badge}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Client Info Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Tu Nombre o Representante *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.clientName}
                          onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                          placeholder="Ej. Maycol Castillo"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d2ff]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ej. +51 929 327 654"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d2ff]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Correo Electrónico (Opcional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contacto@tuempresa.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d2ff]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Rubro o Tipo de Negocio
                      </label>
                      <input
                        type="text"
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        placeholder="Ej. E-commerce, Clínica, Servicios"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d2ff]"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Detalles o requerimientos adicionales:
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Explícanos brevemente qué funcionalidades necesitas..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d2ff] resize-none"
                    />
                  </div>

                  {/* Submit CTA with WhatsApp Icon */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl font-extrabold text-xs uppercase tracking-widest text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(37,211,102,0.4)] cursor-pointer"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>Enviar Cotización por WhatsApp</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
