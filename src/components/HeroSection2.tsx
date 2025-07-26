import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { IconCraft, IconUnique, IconNatural } from "@/components/ui/custom-icons-new";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-ceramic-clay/20 to-ceramic-warm/10">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-ceramic-warm/10 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-ceramic-terracotta/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-ceramic-clay/15 rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-playfair">
            <span className="text-shimmer bg-gradient-to-r from-ceramic-earth via-ceramic-warm to-ceramic-terracotta bg-clip-text text-transparent">
              CerámicaDos
            </span>
            <br />
            <span className="text-foreground animate-reveal-up stagger-1">Taller Artesanal</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed font-inter">
            <em>"Este es un preview de cómo podría verse tu sitio web"</em>
            <br />
            Piezas únicas hechas a mano con técnicas tradicionales y cursos para aprender el arte de la cerámica. 
            Cada pieza refleja pasión y dedicación artesanal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up">
            <Button 
              onClick={scrollToProducts}
              size="lg"
              className="bg-ceramic-earth hover:bg-ceramic-earth/90 text-white px-8 py-3 text-lg font-inter font-medium"
            >
              Ver Catálogo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-ceramic-earth text-ceramic-earth hover:bg-ceramic-earth hover:text-white px-8 py-3 text-lg font-inter font-medium"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contáctanos
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="glass-effect p-6 rounded-xl hover-lift">
              <div className="text-ceramic-earth mb-3">
                <div className="w-12 h-12 bg-ceramic-earth/10 rounded-full flex items-center justify-center mx-auto">
                  <IconCraft className="w-7 h-7 text-ceramic-earth" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 font-playfair">Artesanía Tradicional</h3>
              <p className="text-muted-foreground text-sm font-inter">Técnicas ancestrales transmitidas de generación en generación</p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl hover-lift">
              <div className="text-ceramic-terracotta mb-3">
                <div className="w-12 h-12 bg-ceramic-terracotta/10 rounded-full flex items-center justify-center mx-auto">
                  <IconUnique className="w-7 h-7 text-ceramic-terracotta" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 font-playfair">Diseños Únicos</h3>
              <p className="text-muted-foreground text-sm font-inter">Cada pieza es una obra de arte irrepetible</p>
            </div>
            
            <div className="glass-effect p-6 rounded-xl hover-lift">
              <div className="text-ceramic-warm mb-3">
                <div className="w-12 h-12 bg-ceramic-warm/10 rounded-full flex items-center justify-center mx-auto">
                  <IconNatural className="w-7 h-7 text-ceramic-warm" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2 font-playfair">Materiales Naturales</h3>
              <p className="text-muted-foreground text-sm font-inter">Arcilla y materiales eco-amigables</p>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button 
              onClick={scrollToProducts}
              className="animate-bounce text-ceramic-earth hover:text-ceramic-earth/80 transition-colors"
              aria-label="Ver productos"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
