import { X } from "lucide-react";
import { useState } from "react";

const PreviewBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg">🎨</span>
          <div>
            <p className="font-semibold text-sm md:text-base">
              PREVIEW del Sitio Web para CerámicaDos
            </p>
            <p className="text-xs md:text-sm text-blue-100">
              Este es un ejemplo de cómo podría verse el sitio web de tu taller artesanal
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-blue-200 transition-colors ml-4"
          aria-label="Cerrar banner"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default PreviewBanner;
