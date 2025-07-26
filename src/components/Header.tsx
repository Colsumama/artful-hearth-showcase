import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-ceramic-warm to-ceramic-terracotta rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg font-playfair">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground font-playfair">Ceramicados</h1>
              <p className="text-sm text-muted-foreground font-inter">Cerámicas únicas</p>
            </div>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-foreground hover:text-ceramic-earth transition-colors font-inter font-medium">Inicio</a>
            <a href="#sobre-nosotros" className="text-foreground hover:text-ceramic-earth transition-colors font-inter font-medium">Nosotros</a>
            <a href="#productos" className="text-foreground hover:text-ceramic-earth transition-colors font-inter font-medium">Productos</a>
            <a href="#contacto" className="text-foreground hover:text-ceramic-earth transition-colors font-inter font-medium">Contacto</a>
          </nav>

          {/* Botón menú móvil */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-foreground hover:text-ceramic-earth transition-colors font-inter font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#sobre-nosotros" 
                className="text-foreground hover:text-ceramic-earth transition-colors font-inter font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a 
                href="#productos" 
                className="text-foreground hover:text-ceramic-earth transition-colors font-inter font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
              </a>
              <a 
                href="#contacto" 
                className="text-foreground hover:text-ceramic-earth transition-colors font-inter font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;