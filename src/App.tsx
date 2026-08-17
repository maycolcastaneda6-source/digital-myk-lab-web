import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { VideoSection } from './components/VideoSection';
import { CombosSection } from './components/CombosSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiChatbotWidget } from './components/AiChatbotWidget';

export default function App() {
  // Asistente IA starts collapsed by default, unfolds on click
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenChatbotWithQuery = (query: string) => {
    setIsChatbotOpen(true);
    // You can interact with the widget or scroll to it
  };

  return (
    <div className="min-h-screen bg-[#050814] text-slate-100 selection:bg-[#00d2ff]/30 selection:text-[#00d2ff] relative">
      
      {/* 1. Header with Logo & Navigation (Requirement 1) */}
      <Navbar
        onOpenChatbot={() => setIsChatbotOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onOpenChatbot={() => setIsChatbotOpen(true)}
          onScrollToSection={scrollToSection}
        />

        {/* 2. Catálogo de Servicios (Tarjetas Estilo SaaS - Requirement 2) */}
        <ServicesSection
          onOpenChatbotWithQuery={handleOpenChatbotWithQuery}
        />

        {/* 4. Sección de Video ("Mira cómo funciona" con Glassmorphism - Requirement 4) */}
        <VideoSection
          onOpenChatbot={() => setIsChatbotOpen(true)}
        />

        {/* Combos & Ofertas (Web Profesional + Asistente IA) */}
        <CombosSection
          onOpenChatbotWithQuery={handleOpenChatbotWithQuery}
        />

        {/* Cotización Rápida & Contacto */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onScrollToSection={scrollToSection}
      />

      {/* 3. Floating AI Assistant (Starts OPEN in bottom-right corner - Requirement 3) */}
      <AiChatbotWidget
        isOpen={isChatbotOpen}
        onToggle={() => setIsChatbotOpen(!isChatbotOpen)}
      />

    </div>
  );
}
