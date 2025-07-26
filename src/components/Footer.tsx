import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 w-full glass-effect backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', border: '1px solid rgba(255,255,255,0.18)' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de la empresa */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-ceramic-warm to-ceramic-terracotta rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold font-playfair">C</span>
              </div>
              <h3 className="text-lg font-bold text-foreground font-playfair">
                <span className="font-extrabold bg-gradient-to-r from-ceramic-earth via-ceramic-warm to-ceramic-terracotta bg-clip-text text-transparent animate-text-shimmer">CerámicaDOS</span>
              </h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4 font-inter">
              Taller artesanal especializado en cerámicas únicas hechas a mano. 
              Cada pieza refleja nuestra pasión por este arte milenario.
            </p>
            <div className="bg-ceramic-warm/10 p-3 rounded-lg text-xs text-muted-foreground">
              <strong>Preview:</strong> Información de contacto real del taller será incluida aquí
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-playfair">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={16} />
                <span className="text-sm font-inter">info@ceramicados.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin size={16} />
                <span className="text-sm font-inter">[Ubicación del taller en Colombia]</span>
              </div>
              <div className="text-xs text-amber-700 bg-amber-50 p-2 rounded">
                <strong>Preview:</strong> Los datos de contacto reales serán incluidos en la versión final
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-playfair">Síguenos</h3>
            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => alert("Preview: En la versión final se conectará con Instagram de CerámicaDos")}
                className="bg-primary hover:bg-ceramic-earth text-primary-foreground p-3 rounded-full transition-colors cursor-not-allowed opacity-75"
                aria-label="Instagram (Preview)"
              >
                <Instagram size={20} />
              </button>
              <button
                onClick={() => alert("Preview: En la versión final se conectará con Facebook de CerámicaDos")}
                className="bg-primary hover:bg-ceramic-earth text-primary-foreground p-3 rounded-full transition-colors cursor-not-allowed opacity-75"
                aria-label="Facebook (Preview)"
              >
                <Facebook size={20} />
              </button>
            </div>
            <div className="mt-6 text-xs text-blue-700 bg-blue-50 p-2 rounded">
              <strong>Preview:</strong> Enlaces reales de redes sociales serán agregados
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm font-inter">
            © 2025 <span className="font-extrabold bg-gradient-to-r from-ceramic-earth via-ceramic-warm to-ceramic-terracotta bg-clip-text text-transparent animate-text-shimmer">CerámicaDOS</span>. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;