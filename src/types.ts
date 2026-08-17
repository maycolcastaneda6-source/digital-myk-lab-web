export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  accentColor: 'cyan' | 'magenta' | 'blue' | 'gold';
  description: string;
  focus: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  interactiveDemoType: 'mobile-app' | 'speed-test' | 'chatbot-live';
  startingPrice: string;
  whatsappMessage: string;
}

export interface SpecialCombo {
  id: string;
  title: string;
  badge: string;
  headline: string;
  subheadline: string;
  priceNote: string;
  features: string[];
  integrations: {
    name: string;
    icon: string;
  }[];
  guarantees: string[];
  ctaText: string;
}

export interface ChatQuickReply {
  id: string;
  label: string;
  query: string;
  actionType?: 'service_details' | 'quote' | 'whatsapp' | 'video';
  targetId?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  quickReplies?: ChatQuickReply[];
  actionButton?: {
    label: string;
    url?: string;
    onClickAction?: string;
  };
}

export interface QuoteFormState {
  clientName: string;
  phone: string;
  email: string;
  businessType: string;
  selectedServices: string[];
  budgetRange: string;
  projectDetails: string;
}

export interface VideoDemo {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  badge: string;
  description: string;
  highlights: string[];
  videoSrc?: string;
}
