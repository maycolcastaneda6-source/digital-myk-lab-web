import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Send, 
  X, 
  Minus, 
  Maximize2, 
  Sparkles, 
  Phone, 
  RotateCcw, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Cpu
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { AGENCY_INFO, BOT_INITIAL_MESSAGES, CORE_SERVICES } from '../data/agencyData';
import { ChatMessage, ChatQuickReply } from '../types';

interface AiChatbotWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
  onSelectServiceTab?: (serviceId: string) => void;
}

export const AiChatbotWidget: React.FC<AiChatbotWidgetProps> = ({
  isOpen,
  onToggle,
  onSelectServiceTab
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(BOT_INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText.trim();
    if (!query) return;

    // User Message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Ahora'
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Bot smart logic processing
    setTimeout(() => {
      generateBotResponse(query);
      setIsTyping(false);
    }, 800);
  };

  const generateBotResponse = (query: string) => {
    const q = query.toLowerCase();
    let botReplyText = '';
    let quickReplies: ChatQuickReply[] = [];
    let actionButton: ChatMessage['actionButton'] = undefined;

    if (q.includes('web') || q.includes('sitio') || q.includes('página') || q.includes('vercel')) {
      botReplyText = '🚀 **Sitios Web Profesionales en Digital MYK Lab**\n\nDesarrollamos páginas ultrarrápidas con React y Tailwind alojadas en Vercel + GitHub.\n\n• Carga en menos de 1 segundo\n• Candado SSL 100% incluido\n• SEO optimizado para aparecer en Google\n• Botón de WhatsApp integrado para cerrar ventas inmediatas.';
      quickReplies = [
        { id: 'cotizar-web-directo', label: '📲 Cotizar mi Web por WhatsApp', query: 'Quiero cotizar mi web por WhatsApp' },
        { id: 'ver-combos', label: '🔥 Ver Combo Web + IA Gratis', query: 'Cuéntame del combo Web + IA' },
        { id: 'ver-apps', label: '📱 Ver Apps Móviles', query: 'Ver Apps a la Medida' }
      ];
      actionButton = {
        label: 'Cotizar Web en WhatsApp',
        url: `${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Digital MYK Lab, quiero cotizar un Sitio Web Profesional ultrarrápido.')}`
      };
    } else if (q.includes('asistente') || q.includes('chatbot') || q.includes('bot') || q.includes('automatiz') || q.includes('ia')) {
      botReplyText = '🤖 **Chatbots e Inteligencia Artificial 24/7**\n\nNuestros asistentes inteligentes atienden a tus clientes los 365 días del año sin descanso:\n\n• Responden preguntas frecuentes al instante\n• Califican prospectos y filtran clientes reales\n• Agendan citas en Google Calendar / CRM\n• Integrados a WhatsApp, Instagram, Messenger y Web.';
      quickReplies = [
        { id: 'demo-bot', label: '📲 Probar Bot en WhatsApp', query: 'Quiero probar un Asistente en WhatsApp' },
        { id: 'combo-ia', label: '🎁 ¿Cómo obtengo la Web Gratis?', query: '¿Cómo funciona la promoción con Web Gratis?' }
      ];
      actionButton = {
        label: 'Implementar Asistente IA',
        url: `${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Digital MYK Lab, quiero integrar un Asistente IA en mi negocio.')}`
      };
    } else if (q.includes('app') || q.includes('aplicacion') || q.includes('movil') || q.includes('medida')) {
      botReplyText = '📱 **Apps a la Medida para tu Empresa**\n\nCreamos aplicaciones móviles y paneles web personalizados para tener el control total de tu negocio:\n\n• Gestión de pedidos e inventario\n• Dashboard de ventas y reportería en vivo\n• Notificaciones Push a clientes\n• Seguridad de datos y escalabilidad en la nube.';
      quickReplies = [
        { id: 'wsp-app', label: '📲 Asesoría Gratuita para mi App', query: 'Quiero asesoría gratuita para mi App' },
        { id: 'cotizar-web', label: '🌐 Ver Sitios Web', query: 'Quiero ver Sitios Web' }
      ];
      actionButton = {
        label: 'Solicitar Asesoría de App',
        url: `${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Digital MYK Lab, tengo una idea de App y deseo asesoría técnica.')}`
      };
    } else if (q.includes('combo') || q.includes('oferta') || q.includes('gratis') || q.includes('promocion')) {
      botReplyText = '🔥 **¡Oferta Irresistible Digital MYK Lab!**\n\nAl adquirir tu sistema de automatización con **Asistente IA 24/7**, te entregamos tu **Sitio Web Profesional totalmente incluido**.\n\n• Asistente IA configurado a tu medida\n• Web moderna optimizada en Vercel\n• Conexión directa a tus herramientas (WhatsApp, Shopify, CRM)\n• Soporte 24/7 garantizado.';
      quickReplies = [
        { id: 'reclamar-combo', label: '🎁 Reclamar esta Oferta', query: 'Quiero reclamar el combo Web + Asistente IA' },
        { id: 'preguntar-tiempo', label: '⏱️ ¿Cuánto demora la entrega?', query: '¿Cuáles son los tiempos de entrega?' }
      ];
      actionButton = {
        label: 'Reclamar Oferta Especial',
        url: `${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Digital MYK Lab, quiero aprovechar la Oferta: Asistente IA + Web Profesional.')}`
      };
    } else if (q.includes('tiempo') || q.includes('demora') || q.includes('plazo') || q.includes('entrega')) {
      botReplyText = '⏱️ **Tiempos de Entrega Ágiles**\n\n• **Sitios Web Profesionales:** 3 a 7 días hábiles.\n• **Chatbots con IA básica:** 2 a 4 días hábiles.\n• **Asistentes IA integrados a CRM:** 5 a 10 días hábiles.\n• **Apps a la Medida:** Según alcance y módulos requeridos.\n\nTodos nuestros proyectos cuentan con garantía de entrega a tiempo.';
      quickReplies = [
        { id: 'hablar-asesor', label: '📲 Hablar con un Asesor Ahora', query: 'Quiero hablar con un asesor humano' }
      ];
      actionButton = {
        label: 'Hablar con Maycol (Asesor)',
        url: `${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola, deseo coordinar los tiempos para mi proyecto.')}`
      };
    } else {
      botReplyText = `¡Excelente! Para brindarte la cotización exacta y mostrarte ejemplos en vivo de proyectos similares a tu rubro, nuestro equipo técnico está disponible en WhatsApp.\n\n📞 **Contacto directo:** ${AGENCY_INFO.phone}\n📧 **Email:** ${AGENCY_INFO.email}\n🛡️ **Garantía:** Seguridad, Código Limpio y Soporte Continuo.`;
      quickReplies = [
        { id: 'qr-1', label: '🌐 Cotizar Web', query: 'Quiero cotizar un Sitio Web' },
        { id: 'qr-2', label: '🤖 Asistentes IA', query: 'Quiero automatizar con Chatbots' },
        { id: 'qr-3', label: '📱 Apps Móviles', query: 'Quiero desarrollar una App' },
        { id: 'qr-4', label: '📲 WhatsApp 929 327 654', query: 'Enviar mensaje a WhatsApp' }
      ];
      actionButton = {
        label: 'Contactar por WhatsApp',
        url: `${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(`Hola Digital MYK Lab, consulta sobre: "${query}"`)}`
      };
    }

    const botMsg: ChatMessage = {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: botReplyText,
      timestamp: 'Ahora',
      quickReplies,
      actionButton
    };

    setMessages((prev) => [...prev, botMsg]);
  };

  const handleResetChat = () => {
    setMessages(BOT_INITIAL_MESSAGES);
  };

  return (
    <aside 
      aria-label="Asistente Virtual IA Digital MYK Lab"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none"
    >
      
      {/* REQUIREMENT 3: Chat window starts OPEN / UNFOLDED */}
      {isOpen && (
        <div 
          className="pointer-events-auto w-[92vw] sm:w-[390px] h-[540px] max-h-[82vh] bg-[#0c1424] border border-[#00d2ff]/40 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,210,255,0.2)] flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-6 duration-200 mb-3"
          id="digital-myk-ai-assistant"
        >
          {/* Header */}
          <div className="p-3.5 bg-gradient-to-r from-[#050814] via-[#0d172e] to-[#050814] border-b border-white/10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#00d2ff] to-[#f43f5e] p-[1.5px] shadow-[0_0_10px_rgba(0,210,255,0.5)]">
                  <div className="w-full h-full rounded-full bg-[#050814] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-[#00d2ff]" />
                  </div>
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#050814]" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-xs text-white tracking-wide">
                    Asistente Digital MYK Lab
                  </h3>
                  <span className="px-1.5 py-0.2 rounded text-[8px] font-bold bg-[#00d2ff]/20 text-[#00d2ff] border border-[#00d2ff]/40 uppercase">
                    IA 24/7
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>En línea · Respuesta instantánea</span>
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Reiniciar chat"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onToggle}
                title="Minimizar"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 text-xs bg-[#070c1a]/95">
            
            {/* Security Badge in Chat */}
            <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center gap-2 text-[10px] text-slate-400">
              <Shield className="w-3.5 h-3.5 text-[#00d2ff]" />
              <span>Canal Oficial de Digital MYK Lab · Seguridad y Garantía</span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#00d2ff] to-[#0099ff] text-black font-semibold rounded-br-none shadow-[0_0_15px_rgba(0,210,255,0.3)]'
                      : 'bg-[#121c33] border border-white/10 text-slate-100 rounded-bl-none shadow-md'
                  }`}
                >
                  <div className="whitespace-pre-line leading-relaxed">
                    {msg.text}
                  </div>

                  {/* Action Link button inside bot message */}
                  {msg.actionButton && (
                    <div className="mt-2.5 pt-2 border-t border-white/10">
                      <a
                        href={msg.actionButton.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-[11px] shadow-sm transition-all"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                        <span>{msg.actionButton.label}</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                      </a>
                    </div>
                  )}
                </div>

                <span className="text-[9px] text-slate-500 mt-1 px-1">
                  {msg.timestamp}
                </span>

                {/* Quick Reply Pills */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {msg.quickReplies.map((qr) => (
                      <button
                        key={qr.id}
                        onClick={() => handleSendMessage(qr.query)}
                        className="px-2.5 py-1.5 rounded-full bg-white/5 border border-[#00d2ff]/40 hover:bg-[#00d2ff]/20 hover:border-[#00d2ff] text-[11px] font-semibold text-slate-200 hover:text-white transition-all cursor-pointer flex items-center gap-1"
                      >
                        <span>{qr.label}</span>
                        <ChevronRight className="w-3 h-3 text-[#00d2ff]" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#121c33] border border-white/10 w-24">
                <div className="w-2 h-2 rounded-full bg-[#00d2ff] animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-[#f43f5e] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input & WhatsApp Action Bar */}
          <div className="p-3 bg-[#050814] border-t border-white/10 space-y-2">
            
            {/* Text Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Escribe tu consulta o cotización..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00d2ff] focus:ring-1 focus:ring-[#00d2ff] transition-all"
              />

              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2 rounded-xl bg-gradient-to-r from-[#00d2ff] to-[#0099ff] text-black font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-all cursor-pointer"
                aria-label="Enviar mensaje"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* WhatsApp Direct Banner */}
            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
              <span>¿Prefieres WhatsApp directo?</span>
              <a
                href={`${AGENCY_INFO.whatsappBaseUrl}?text=${encodeURIComponent('Hola Digital MYK Lab, quiero conversar con un asesor.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-bold flex items-center gap-1"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                <span>{AGENCY_INFO.phone}</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <div className="pointer-events-auto flex items-center gap-2.5">
        {!isOpen && (
          <button
            onClick={onToggle}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0c1424]/95 border border-[#00d2ff]/40 text-xs font-bold text-slate-200 hover:text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md cursor-pointer group transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Asistente IA 24/7</span>
            <Sparkles className="w-3.5 h-3.5 text-[#00d2ff] group-hover:rotate-12 transition-transform" />
          </button>
        )}

        <button
          onClick={onToggle}
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-[#00d2ff] via-[#8b5cf6] to-[#f43f5e] text-white shadow-[0_0_25px_rgba(0,210,255,0.5)] hover:shadow-[0_0_35px_rgba(244,63,94,0.7)] transition-all duration-300 transform hover:scale-110 cursor-pointer flex items-center justify-center"
          aria-label={isOpen ? 'Cerrar Asistente IA' : 'Abrir Asistente IA'}
          id="btn-toggle-chatbot"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <Bot className="w-6 h-6 text-white" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#050814] animate-ping" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#050814]" />
            </>
          )}
        </button>
      </div>

    </aside>
  );
};
