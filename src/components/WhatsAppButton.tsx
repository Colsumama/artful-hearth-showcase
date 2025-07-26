import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    // Por ahora sin redirección - preview del sitio
    console.log("WhatsApp click - En la versión final se conectará con el número real de CerámicaDos");
    alert("Preview: En la versión final este botón se conectará directamente con WhatsApp de CerámicaDos");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-ceramic hover:shadow-warm transition-all duration-300 hover:scale-110 group animate-pulse-glow cursor-not-allowed opacity-75"
      aria-label="Contactar por WhatsApp (Preview)"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform animate-float" />
      <div className="absolute -top-12 right-0 bg-gray-800/90 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm">
        Preview - WhatsApp
      </div>
    </button>
  );
};

export default WhatsAppButton;