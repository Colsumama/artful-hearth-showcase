import { Users, Award, Palette, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenido de texto */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-6">
              Sobre <span className="text-ceramic-earth">Ceramicados</span>
            </h2>
            <div className="space-y-6 font-inter text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Somos una familia de artesanos ceramistas con más de 15 años de experiencia 
                creando piezas únicas que combinan técnicas tradicionales con diseños contemporáneos.
              </p>
              <p className="text-lg leading-relaxed">
                En nuestro taller de Buenos Aires, cada pieza nace de la pasión por el arte 
                cerámico y el compromiso con la calidad. Utilizamos arcillas selectas y 
                esmaltes naturales para crear cerámicas que no solo son hermosas, 
                sino también duraderas y funcionales.
              </p>
              <p className="text-lg leading-relaxed">
                Creemos que cada hogar merece piezas especiales que reflejen la personalidad 
                de quienes las habitan. Por eso, cada cerámica que creamos lleva consigo 
                nuestra dedicación y amor por este arte milenario.
              </p>
            </div>
          </div>

          {/* Estadísticas y características */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up">
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