import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-xl bg-gradient-to-r from-ceramic-earth/80 via-ceramic-warm/70 to-ceramic-terracotta/80 backdrop-blur-xl border-b border-ceramic-earth/30 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo y nombre */}
          <div className="flex items-center gap-4 group">
            <div className="group-hover:scale-105 transition-transform duration-300">
              <h1 className="text-3xl font-extrabold text-white drop-shadow-lg font-playfair tracking-wide animate-text-shimmer">
                Cerámica
                <span
                  className="font-extrabold text-white"
                  style={{
                    display: 'inline-block',
                    animation: 'dos-glow 2.5s ease-in-out infinite, dos-bounce 2.5s ease-in-out infinite',
                    textShadow: '0 0 12px #fff, 0 0 24px #fff8, 0 0 40px #fff4',
                  }}
                >
                  DOS
                </span>
                <style>{`
                  @keyframes dos-glow {
                    0%, 100% { text-shadow: 0 0 12px #fff, 0 0 24px #fff8, 0 0 40px #fff4; }
                    50% { text-shadow: 0 0 24px #fff, 0 0 48px #fff8, 0 0 80px #fff4; }
                  }
                  @keyframes dos-bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                  }
                `}</style>
              </h1>
              <p className="text-sm text-white/80 font-inter animate-fade-in-up tracking-wider">Taller Artesanal</p>
            </div>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex gap-8">
            <a href="#inicio" className="relative px-2 py-1 text-white font-inter font-semibold hover:text-ceramic-earth transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-ceramic-earth after:transition-all after:duration-300 hover:after:w-full">
              Inicio
            </a>
            <a href="#sobre-nosotros" className="relative px-2 py-1 text-white font-inter font-semibold hover:text-ceramic-earth transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-ceramic-earth after:transition-all after:duration-300 hover:after:w-full">
              Nosotros
            </a>
            <a href="#productos" className="relative px-2 py-1 text-white font-inter font-semibold hover:text-ceramic-earth transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-ceramic-earth after:transition-all after:duration-300 hover:after:w-full">
              Productos
            </a>
            <a href="#cursos" className="relative px-2 py-1 text-white font-inter font-semibold hover:text-ceramic-earth transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-ceramic-earth after:transition-all after:duration-300 hover:after:w-full">
              Cursos
            </a>
            <a href="#contacto" className="relative px-2 py-1 text-white font-inter font-semibold hover:text-ceramic-earth transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-ceramic-earth after:transition-all after:duration-300 hover:after:w-full">
              Contacto
            </a>
          </nav>

          {/* Botón menú móvil */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-ceramic-earth/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-ceramic-earth/30 bg-gradient-to-r from-ceramic-earth/80 via-ceramic-warm/70 to-ceramic-terracotta/80 animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              <a href="#inicio" className="text-white font-inter font-semibold hover:text-ceramic-earth transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</a>
              <a href="#sobre-nosotros" className="text-white font-inter font-semibold hover:text-ceramic-earth transition-colors" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
              <a href="#productos" className="text-white font-inter font-semibold hover:text-ceramic-earth transition-colors" onClick={() => setIsMenuOpen(false)}>Productos</a>
              <a href="#cursos" className="text-white font-inter font-semibold hover:text-ceramic-earth transition-colors" onClick={() => setIsMenuOpen(false)}>Cursos</a>
              <a href="#contacto" className="text-white font-inter font-semibold hover:text-ceramic-earth transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;