import { Users, Clock, Award, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    name: "Curso Básico de Cerámica",
    description: "Aprende las técnicas fundamentales del modelado en arcilla. Perfecto para principiantes que quieren crear sus primeras piezas.",
    duration: "4 semanas",
    sessions: "8 clases",
    groupSize: "Máximo 6 personas",
    price: "Consultar precio",
    icon: Users,
    highlights: ["Técnicas básicas de modelado", "Uso del torno", "Esmaltado básico", "Tu primera pieza terminada"]
  },
  {
    id: 2,
    name: "Taller de Piezas Únicas",
    description: "Crea tu propia pieza personalizada con acompañamiento profesional. Ideal para regalos especiales o decoración del hogar.",
    duration: "1 día",
    sessions: "Sesión intensiva",
    groupSize: "Personalizado",
    price: "Consultar precio",
    icon: Award,
    highlights: ["Diseño personalizado", "Acompañamiento 1:1", "Pieza terminada y esmaltada", "Experiencia relajante"]
  },
  {
    id: 3,
    name: "Clases Particulares",
    description: "Atención personalizada para desarrollar técnicas específicas o proyectos avanzados. Horarios flexibles.",
    duration: "Flexible",
    sessions: "A convenir",
    groupSize: "Individual",
    price: "Consultar precio",
    icon: Clock,
    highlights: ["Horarios flexibles", "Atención personalizada", "Técnicas avanzadas", "Proyectos específicos"]
  }
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="py-20 bg-gradient-soft relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-10 w-40 h-40 bg-ceramic-warm/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-20 w-32 h-32 bg-ceramic-terracotta/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground mb-4">
            Cursos y <span className="text-ceramic-earth">Talleres</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Aprende el arte de la cerámica con nosotros. Ofrecemos cursos para todos los niveles, 
            desde principiantes hasta técnicas avanzadas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <Card 
                key={course.id} 
                className="p-6 hover-lift shadow-soft hover:shadow-ceramic transition-all duration-500 animate-reveal-up h-full flex flex-col glass-effect bg-white/70 backdrop-blur-sm border border-ceramic-warm/20 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-ceramic-earth/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-ceramic-earth/20 transition-colors duration-300 animate-pulse-glow">
                    <IconComponent className="w-6 h-6 text-ceramic-earth" />
                  </div>
                  <h3 className="text-lg font-bold font-playfair text-foreground group-hover:text-ceramic-earth transition-colors duration-300">{course.name}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4 font-inter flex-grow">
                  {course.description}
                </p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-ceramic-earth" />
                    <span className="font-inter">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-ceramic-earth" />
                    <span className="font-inter">{course.sessions}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-ceramic-earth" />
                    <span className="font-inter">{course.groupSize}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 font-inter">Incluye:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {course.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center font-inter">
                        <span className="w-2 h-2 bg-ceramic-earth rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-ceramic-earth font-playfair">
                      {course.price}
                    </span>
                  </div>
                  <Button 
                    className="w-full bg-ceramic-earth hover:bg-ceramic-earth/90 text-white font-inter cursor-not-allowed opacity-75"
                    onClick={() => alert("Preview: En la versión final este botón conectará con WhatsApp de CerámicaDos")}
                  >
                    Más Información
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12 animate-fade-in-up">
          <h3 className="text-2xl font-bold font-playfair text-foreground mb-4">
            ¿Tienes una Idea Especial?
          </h3>
          <p className="text-muted-foreground mb-6 font-inter">
            También ofrecemos talleres temáticos, workshops para empresas, y clases para eventos especiales. 
            ¡Contáctanos para crear una experiencia personalizada!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-ceramic-earth hover:bg-ceramic-earth/90 text-white px-8 py-3 font-inter cursor-not-allowed opacity-75"
              onClick={() => alert("Preview: En la versión final este botón conectará con WhatsApp de CerámicaDos")}
            >
              Consultar Taller Personalizado
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-ceramic-earth text-ceramic-earth hover:bg-ceramic-earth hover:text-white px-8 py-3 font-inter cursor-not-allowed opacity-75"
              onClick={() => alert("Preview: En la versión final se mostrará calendario real")}
            >
              Ver Horarios Disponibles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
