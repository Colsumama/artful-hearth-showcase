import { Users, Award, Palette, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre-nosotros" className="py-20 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenido de texto */}
          <div className="animate-fade-in bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-6">
              Sobre <span className="font-extrabold bg-gradient-to-r from-ceramic-earth via-ceramic-warm to-ceramic-terracotta bg-clip-text text-transparent animate-text-shimmer">CerámicaDOS</span>
            </h2>
            <div className="space-y-6 font-inter text-muted-foreground">
              <div className="bg-ceramic-warm/10 p-4 rounded-lg border-l-4 border-ceramic-earth mb-6">
                <p className="text-sm font-semibold text-ceramic-earth uppercase tracking-wide">
                  💡 PREVIEW DEL SITIO WEB
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Este contenido es adaptable según las necesidades reales del taller
                </p>
              </div>
              <p className="text-lg leading-relaxed">
                CerámicaDos es un taller artesanal especializado en la creación de piezas 
                únicas de cerámica. Cada pieza refleja años de experiencia y pasión por 
                este arte milenario.
              </p>
              <p className="text-lg leading-relaxed">
                Nuestro enfoque combina técnicas tradicionales con diseños contemporáneos, 
                creando cerámicas que no solo son hermosas, sino también funcionales y 
                duraderas para el uso diario.
              </p>
              <p className="text-lg leading-relaxed">
                Trabajamos con arcillas selectas y esmaltes de alta calidad para garantizar 
                que cada pieza sea especial y refleje la dedicación que ponemos en nuestro trabajo.
              </p>
            </div>
          </div>

          {/* Estadísticas y características */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg p-8">
            <div className="text-center p-6 bg-card rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-ceramic-warm/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-ceramic-earth" />
              </div>
              <h3 className="text-2xl font-bold font-playfair text-foreground mb-2">500+</h3>
              <p className="text-muted-foreground font-inter">Clientes Satisfechos</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-ceramic-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-ceramic-earth" />
              </div>
              <h3 className="text-2xl font-bold font-playfair text-foreground mb-2">15+</h3>
              <p className="text-muted-foreground font-inter">Años de Experiencia</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-ceramic-clay/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-ceramic-earth" />
              </div>
              <h3 className="text-2xl font-bold font-playfair text-foreground mb-2">1000+</h3>
              <p className="text-muted-foreground font-inter">Piezas Creadas</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-ceramic-warm/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-ceramic-earth" />
              </div>
              <h3 className="text-2xl font-bold font-playfair text-foreground mb-2">100%</h3>
              <p className="text-muted-foreground font-inter">Hecho con Amor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;