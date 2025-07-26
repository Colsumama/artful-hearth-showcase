import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "María Alejandra Torres",
    text: "Las cerámicas de CerámicaDos son increíbles. Tomé el curso básico y ahora tengo mis propias piezas únicas. La instructora es muy paciente y profesional.",
    rating: 5,
    location: "Bogotá, Colombia"
  },
  {
    id: 2,
    name: "Carlos Andrés Vargas",
    text: "Compré varias piezas y también me inscribí en las clases. Es una experiencia relajante y creativa. Recomiendo tanto los productos como los cursos.",
    rating: 5,
    location: "Medellín, Colombia"
  },
  {
    id: 3,
    name: "Ana Sofía Ramírez",
    text: "Me encanta el taller! Las clases personalizadas me permitieron crear piezas únicas para mi hogar. Cada clase es una nueva aventura creativa.",
    rating: 5,
    location: "Cali, Colombia"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-soft relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-ceramic-warm/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-ceramic-terracotta/5 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in glass-effect backdrop-blur-xl bg-white/60 border border-ceramic-earth/10 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-4">
            Lo Que Dicen Nuestros <span className="text-ceramic-earth">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Estas son algunas experiencias de quienes han disfrutado nuestros productos y cursos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="p-6 hover-lift shadow-soft hover:shadow-ceramic transition-all duration-500 animate-reveal-up glass-effect bg-white/60 backdrop-blur-sm border border-ceramic-warm/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-ceramic-warm text-ceramic-warm animate-pulse-glow" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <blockquote className="text-muted-foreground mb-4 font-inter italic relative">
                <span className="text-4xl text-ceramic-warm/30 absolute -top-2 -left-2 font-serif">"</span>
                <span className="relative z-10">{testimonial.text}</span>
                <span className="text-4xl text-ceramic-warm/30 absolute -bottom-4 -right-2 font-serif">"</span>
              </blockquote>
              <div className="border-t border-ceramic-warm/20 pt-4">
                <p className="font-semibold text-foreground font-inter">{testimonial.name}</p>
                <p className="text-sm text-ceramic-earth font-medium">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;