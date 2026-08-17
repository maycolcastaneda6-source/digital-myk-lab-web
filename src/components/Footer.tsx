import React from 'react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AGENCY_INFO } from '../data/agencyData';
import { Mail, Globe, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030611] border-t border-white/10 text-slate-400 text-xs relative z-10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              Agencia especializada en desarrollo de software, apps a la medida, sitios web profesionales ultrarrápidos y automatización inteligente con Asistentes IA y Chatbots 24/7.
            </p>

            <div className="flex items-center gap-2 text-slate-400 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-[#00d2ff]" />
              <span>Despliegues en Vercel, GitHub y la Nube con Seguridad Garantizada.</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onScrollToSection('hero')}
                  className="hover:text-[#00d2ff] transition-colors cursor-pointer"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('servicios')}
                  className="hover:text-[#00d2ff] transition-colors cursor-pointer"
                >
                  Servicios SaaS (4)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('como-funciona')}
                  className="hover:text-[#00d2ff] transition-colors cursor-pointer"
                >
                  Cómo Funciona (Video Demo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('combos')}
                  className="hover:text-[#00d2ff] transition-colors cursor-pointer"
                >
                  Combos & Ofertas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('contacto')}
                  className="hover:text-[#00d2ff] transition-colors cursor-pointer"
                >
                  Cotización & Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider">
              Servicios Principales
            </h4>
            <ul className="space-y-2">
              <li className="text-slate-300">📱 1. Apps a la Medida</li>
              <li className="text-slate-300">🌐 2. Sitios Web Profesionales (Vercel)</li>
              <li className="text-slate-300">🤖 3. Automatización con Chatbots IA 24/7</li>
              <li className="text-amber-300 font-semibold">🔥 4. Asistente IA 24/7 + Web Gratis</li>
              <li className="text-slate-400 text-[11px] pt-1">🔒 Certificados SSL y Seguridad Cloud</li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase text-xs tracking-wider">
              Contacto Directo
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Digital MYK Lab, solicito información.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white font-semibold hover:text-emerald-400 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>{AGENCY_INFO.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="flex items-center gap-2 hover:text-[#00d2ff] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00d2ff]" />
                  <span>{AGENCY_INFO.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#f43f5e]" />
                  <span>{AGENCY_INFO.website}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300 font-semibold">{AGENCY_INFO.name}</strong>. Todos los derechos reservados. — <span className="text-slate-400 font-medium">{AGENCY_INFO.badge}</span>.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Subir al inicio</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
};
