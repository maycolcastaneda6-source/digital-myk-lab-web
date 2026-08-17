import { ServiceItem, SpecialCombo, VideoDemo } from '../types';

export const AGENCY_INFO = {
  name: 'Digital MYK Lab',
  badge: 'SEGURIDAD Y GARANTÍA',
  tagline: 'Desarrollo de Software a Medida, Sitios Web Ultrarrápidos & Asistentes con Inteligencia Artificial',
  phone: '929 327 654',
  phoneFormatted: '+51 929 327 654',
  email: 'compumasster@gmail.com',
  website: 'www.digitalmyklab.com',
  vercelUrl: 'https://digitalmyklab.vercel.app',
  whatsappBaseUrl: 'https://wa.me/51929327654',
  location: 'Perú · Servicios para todo el mundo',
  guaranteeText: '100% Código Seguro, Entregas a Tiempo y Soporte Continuo 24/7'
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'apps-a-la-medida',
    number: '01',
    title: 'Apps a la Medida',
    tagline: 'Tu negocio en la palma de la mano con control total y máxima escalabilidad',
    badge: 'CONTROL & ESCALABILIDAD',
    accentColor: 'magenta',
    focus: 'Control del Negocio, Paneles Administrativos y Escalabilidad',
    description: 'Diseñamos y programamos aplicaciones móviles y web personalizadas que centralizan tus ventas, pedidos, clientes y reportes en tiempo real con arquitectura de alto rendimiento.',
    benefits: [
      {
        title: 'Más Clientes y Fidelización',
        description: 'Llega a más personas con notificaciones directas y experiencia de usuario fluida.',
        icon: 'Users'
      },
      {
        title: 'Mayores Ventas y Conversión',
        description: 'Catálogo dinámico, pasarelas de pago integradas y compras en 1 clic.',
        icon: 'TrendingUp'
      },
      {
        title: 'Procesos Eficientes y Automatizados',
        description: 'Control de inventario, sincronización de stock y reportería financiera al instante.',
        icon: 'Cpu'
      },
      {
        title: 'Seguras, Rápidas y Escalables',
        description: 'Desarrolladas con tecnología de vanguardia preparadas para crecer con tu empresa.',
        icon: 'ShieldCheck'
      }
    ],
    techStack: ['React Native', 'Flutter', 'Node.js', 'PostgreSQL / Firebase', 'Tailwind', 'AWS / Cloud Run'],
    metrics: [
      { label: 'Control Operativo', value: '100%' },
      { label: 'Disponibilidad', value: '99.9%' },
      { label: 'Tiempo de Entrega', value: 'Ágil' }
    ],
    interactiveDemoType: 'mobile-app',
    startingPrice: 'A Medida',
    whatsappMessage: 'Hola Digital MYK Lab, deseo cotizar el desarrollo de una App a la Medida para mi negocio.'
  },
  {
    id: 'sitios-web-profesionales',
    number: '02',
    title: 'Sitios Web Profesionales',
    tagline: 'Páginas web ultrarrápidas, seguras y optimizadas para convertir visitas en clientes',
    badge: 'VELOCIDAD, SEO & VERCEL',
    accentColor: 'cyan',
    focus: 'Velocidad Récord, SEO de Alto Impacto y Despliegue en Vercel + GitHub',
    description: 'Desarrollo web a medida con código limpio, arquitectura optimizada para enamorar a Google y alojamiento en servidores CDN de altísimo rendimiento con carga en milisegundos.',
    benefits: [
      {
        title: 'Tecnología de Punta (Vercel + GitHub)',
        description: 'Código optimizado en VS Code y despliegue global para una velocidad de carga récord.',
        icon: 'Rocket'
      },
      {
        title: 'Máxima Seguridad (Certificado SSL)',
        description: 'Candado de seguridad SSL 100% incluido. La información de tus clientes siempre protegida.',
        icon: 'Lock'
      },
      {
        title: 'SEO de Alto Impacto para Google',
        description: 'Estructura semántica, metadatos enriquecidos y Core Web Vitals para los primeros lugares.',
        icon: 'BarChart3'
      },
      {
        title: 'Diseño Responsive & Alta Conversión',
        description: 'Adaptación perfecta a celulares, tablets y computadoras con CTAs de WhatsApp directos.',
        icon: 'Smartphone'
      }
    ],
    techStack: ['React 19', 'Vite / Next.js', 'Tailwind CSS', 'Vercel CDN', 'GitHub CI/CD', 'Schema SEO'],
    metrics: [
      { label: 'Google PageSpeed', value: '99+' },
      { label: 'Carga Promedio', value: '< 0.8s' },
      { label: 'Seguridad SSL', value: '100%' }
    ],
    interactiveDemoType: 'speed-test',
    startingPrice: 'Cotización Rápida',
    whatsappMessage: 'Hola Digital MYK Lab, quiero cotizar un Sitio Web Profesional ultrarrápido con SEO y Vercel.'
  },
  {
    id: 'automatizacion-chatbots',
    number: '03',
    title: 'Automatización con Chatbots',
    tagline: 'Automatiza. Conecta. Crece. Chatbots inteligentes para atención y ventas continuas',
    badge: 'ATENCIÓN 24/7 & LEADS',
    accentColor: 'blue',
    focus: 'Revoluciona tu Negocio con Chatbots: Automatización Inteligente y Crecimiento',
    description: 'Revoluciona la comunicación de tu empresa con chatbots inteligentes en WhatsApp, Instagram y Web. Automatiza la prospección, califica prospectos, agenda citas y vende sin intervención manual.',
    benefits: [
      {
        title: 'Atención 24/7 sin descanso',
        description: 'Siempre disponible para responder dudas frecuentes, cotizar y dar soporte instantáneo.',
        icon: 'Clock'
      },
      {
        title: 'Genera Leads Calificados',
        description: 'Convierte conversaciones en oportunidades filtrando datos clave de clientes potenciales.',
        icon: 'Target'
      },
      {
        title: 'Agenda Citas Automáticamente',
        description: 'Sincroniza y gestiona tus citas sin esfuerzo conectando con tu calendario y CRM.',
        icon: 'CalendarCheck'
      },
      {
        title: 'Vende Más y Fácil',
        description: 'Automatiza procesos de cobro, envía links de pago y catálogos de manera interactiva.',
        icon: 'Zap'
      }
    ],
    techStack: ['WhatsApp Cloud API', 'Meta Graph API', 'Flujos Automatizados', 'Webhooks & Zapier', 'CRM Sync'],
    metrics: [
      { label: 'Tiempo Respuesta', value: '< 1 seg' },
      { label: 'Disponibilidad', value: '24/7/365' },
      { label: 'Aumento Leads', value: '+45%' }
    ],
    interactiveDemoType: 'chatbot-live',
    startingPrice: 'Plan Flexible',
    whatsappMessage: 'Hola Digital MYK Lab, me interesa el servicio de Automatización con Chatbots (Atención 24/7 y Leads).'
  },
  {
    id: 'combo-web-asistente-ia',
    number: '04',
    title: 'Asistente IA + Web Gratis',
    tagline: '¡Consigue tu Asistente IA 24/7... y tu Sitio Web Profesional Totalmente Gratis!',
    badge: 'OFERTA: WEB + ASISTENTE IA',
    accentColor: 'gold',
    focus: 'Implementación de IA de Vanguardia y Diseño Web Profesional Incluidos',
    description: 'Adquiere tu solución integral de Inteligencia Artificial con agente conversacional de vanguardia, dashboard en tiempo real y llévate tu Sitio Web Profesional totalmente incluido.',
    benefits: [
      {
        title: 'IA Integrada de Vanguardia',
        description: 'Responde, guía y convierte clientes automáticamente con lenguaje natural y precisión.',
        icon: 'Cpu'
      },
      {
        title: 'Agenda Automática Multicanal',
        description: 'Reservas y citas sin intervención manual en WhatsApp, Instagram, Messenger y CRM.',
        icon: 'CalendarCheck'
      },
      {
        title: 'Incrementa tus Ventas y Ahorra Costos',
        description: 'Más clientes y más ingresos automatizando tus operaciones con máxima eficiencia.',
        icon: 'TrendingUp'
      },
      {
        title: 'Sitio Web Profesional 100% Incluido',
        description: 'Página corporativa moderna en Vercel con CDN mundial y certificado SSL garantizado.',
        icon: 'Rocket'
      }
    ],
    techStack: ['OpenAI / Gemini IA', 'Next.js / React', 'Vercel Edge CDN', 'Shopify & HubSpot', 'WhatsApp & Instagram'],
    metrics: [
      { label: 'Respuesta Promedio', value: '< 1 min' },
      { label: 'Uptime Garantizado', value: '99.9%' },
      { label: 'Soporte Sin Límites', value: '24/7/365' }
    ],
    interactiveDemoType: 'chatbot-live',
    startingPrice: 'Oferta Especial',
    whatsappMessage: 'Hola Digital MYK Lab, quiero aprovechar la OFERTA: Asistente IA 24/7 + Sitio Web Profesional Gratis.'
  }
];

export const SPECIAL_COMBO: SpecialCombo = {
  id: 'combo-web-asistente-ia',
  title: 'OFERTA IRRESISTIBLE',
  badge: 'ECOSISTEMA DIGITAL INTEGRAL',
  headline: '¡Consigue tu Asistente IA 24/7... y tu Sitio Web Profesional Gratis!',
  subheadline: 'Implementación integral de Inteligencia Artificial de Vanguardia y Diseño Web Profesional Ultrarrápido.',
  priceNote: 'Adquiere tu solución de automatización con Asistente IA y llévate tu web corporativa incluida.',
  features: [
    'Asistente Virtual con IA Integrada 24/7',
    'Sitio Web Profesional con Alojamiento en Vercel',
    'Agenda Automática sincronizada con Calendario',
    'Integración multicanal con tus herramientas favoritas',
    'Certificado de Seguridad SSL y Optimización SEO',
    'Soporte Técnico Especializado Sin Límites'
  ],
  integrations: [
    { name: 'WhatsApp', icon: 'MessageSquare' },
    { name: 'Instagram', icon: 'Instagram' },
    { name: 'Messenger', icon: 'Facebook' },
    { name: 'Shopify', icon: 'ShoppingBag' },
    { name: 'HubSpot', icon: 'Layers' },
    { name: 'Google Calendar', icon: 'Calendar' }
  ],
  guarantees: [
    '< 1 Minuto tiempo de respuesta a clientes',
    '99.9% Uptime y disponibilidad garantizada',
    'Soporte 24/7/365 directo por WhatsApp',
    'Incremento comprobado en volumen de ventas'
  ],
  ctaText: 'Reclamar Oferta Web + Asistente IA'
};

export const VIDEO_SHOWCASE: VideoDemo = {
  id: 'demo-ecosistema',
  title: 'Mira cómo funciona la Tecnología de Digital MYK Lab',
  subtitle: 'Descubre cómo nuestras Apps, Sitios Web en Vercel y Asistentes IA transforman negocios reales.',
  duration: '01:45 Demo',
  badge: 'DEMO INTERACTIVA EN VIVO',
  description: 'Nuestra arquitectura combina el poder del frontend moderno (React + Tailwind), despliegues instantáneos en Vercel con CDN mundial y agentes de Inteligencia Artificial conectados a WhatsApp.',
  highlights: [
    'Carga instantánea en menos de 800 milisegundos',
    'Interacción con Chatbot IA en tiempo real sin latencia',
    'Panel de administración con métricas y sincronización de leads',
    'Código 100% modular y transferible a GitHub'
  ]
};

export const BOT_INITIAL_MESSAGES = [
  {
    id: 'welcome-1',
    sender: 'bot' as const,
    text: '¡Hola! Soy tu Asistente Digital MYK Lab 🤖. ¿Qué servicio te gustaría automatizar o cotizar hoy?',
    timestamp: 'Ahora',
    quickReplies: [
      { id: 'qr-web', label: '🌐 Cotizar Web', query: 'Quiero cotizar un Sitio Web Profesional' },
      { id: 'qr-bot', label: '🤖 Ver Asistentes IA', query: 'Quiero información sobre los Chatbots y Asistentes IA' },
      { id: 'qr-app', label: '📱 Apps a la Medida', query: 'Necesito una App a la Medida para mi empresa' },
      { id: 'qr-combo', label: '🔥 Oferta Web + IA', query: 'Cuéntame sobre el combo Web Gratis + Asistente IA' },
      { id: 'qr-wsp', label: '📲 WhatsApp Directo', query: 'Quiero hablar con un asesor por WhatsApp' }
    ]
  }
];
