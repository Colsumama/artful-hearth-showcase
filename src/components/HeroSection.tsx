import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-ceramic-clay/20 to-ceramic-warm/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-ceramic-earth via-ceramic-warm to-ceramic-terracotta bg-clip-text text-transparent">
              Cerámicas
            </span>
            <br />
            <span className="text-foreground">Artesanales</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Piezas únicas creadas con técnicas tradicionales y diseños contemporáneos. 
            Cada cerámica cuenta una historia de dedicación y arte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProducts}
              size="lg"
              className="bg-ceramic-earth hover:bg-ceramic-earth/90 text-white px-8 py-3 text-lg"
            >
              Ver Catálogo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-ceramic-earth text-ceramic-earth hover:bg-ceramic-earth hover:text-white px-8 py-3 text-lg"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contactanos
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-ceramic-warm/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏺</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Hecho a Mano</h3>
              <p className="text-muted-foreground">Cada pieza es moldeada artesanalmente con técnicas tradicionales</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ceramic-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Diseño Único</h3>
              <p className="text-muted-foreground">Diseños originales que combinan tradición y modernidad</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ceramic-clay/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Materiales Naturales</h3>
              <p className="text-muted-foreground">Utilizamos arcillas de alta calidad y esmaltes naturales</p>
            </div>
          </div>

          <div className="mt-16">
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