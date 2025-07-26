import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de la empresa */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-ceramic-warm to-ceramic-terracotta rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">A</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">Alfarería Artesanal</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Creamos piezas únicas de cerámica artesanal con técnicas tradicionales 
              y diseños contemporáneos. Cada pieza es moldeada con amor y dedicación.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail size={16} />
                <span className="text-sm">info@alfareriaartesanal.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin size={16} />
                <span className="text-sm">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/alfareriaartesanal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-ceramic-earth text-primary-foreground p-3 rounded-full transition-colors"
                aria-label="Síguenos en Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/alfareriaartesanal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-ceramic-earth text-primary-foreground p-3 rounded-full transition-colors"
                aria-label="Síguenos en Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Alfarería Artesanal. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;