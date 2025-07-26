import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "María González",
    text: "Las cerámicas de Ceramicados son simplemente hermosas. La calidad artesanal se nota en cada detalle. Mi jarrón favorito está en el living y todos lo admiran.",
    rating: 5,
    location: "Buenos Aires"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    text: "Compré un set completo para mi cocina. Son piezas únicas que hacen que cada comida sea especial. El servicio al cliente es excelente.",
    rating: 5,
    location: "Córdoba"
  },
  {
    id: 3,
    name: "Ana Martínez",
    text: "Me encanta el trabajo artesanal. Cada pieza tiene su propia personalidad. Perfectas para regalar o decorar tu hogar con estilo.",
    rating: 5,
    location: "Rosario"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-ceramic-clay/10 to-ceramic-warm/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-4">
            Lo Que Dicen Nuestros <span className="text-ceramic-earth">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Estas son algunas de sus experiencias con Ceramicados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-ceramic-warm text-ceramic-warm" />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4 font-inter italic">
                "{testimonial.text}"
              </blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground font-inter">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;