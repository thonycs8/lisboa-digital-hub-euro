import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl = "https://wa.me/?phone=%2B351928294048&text=Olá%21+Gostaria+de+saber+mais+sobre+os+vossos+serviços.&type=phone_number&app_absent=0";

  useEffect(() => {
    // Show button after 2 seconds with animation
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="Contactar via WhatsApp"
    >
      {/* Pulse animation background */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
      
      {/* Main button */}
      <div className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group-hover:scale-110">
        <MessageCircle className="w-8 h-8" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Fale connosco no WhatsApp
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-black"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;