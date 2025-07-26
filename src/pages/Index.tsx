import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductCard from "@/components/ProductCard";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        
        <AboutSection />
        
        {/* Sección de productos */}
        <section id="productos" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-playfair">
                Nuestras <span className="text-ceramic-earth">Cerámicas</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
                Cada pieza es única y está creada con amor y dedicación. 
                Descubre nuestra colección de cerámicas artesanales.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* Sección de contacto */}
        <section id="contacto" className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-playfair">
              ¿Te Interesa Alguna Pieza?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-inter">
              Contáctanos por WhatsApp para consultar disponibilidad, precios especiales 
              o encargos personalizados. ¡Estamos aquí para ayudarte!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <a
                href="https://wa.me/5491123456789?text=Hola! Me interesa conocer más sobre Ceramicados y sus piezas artesanales."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors font-inter"
              >
                <span>📱</span>
                Contactar por WhatsApp
              </a>
              <a
                href="mailto:info@ceramicados.com"
                className="inline-flex items-center gap-2 border border-ceramic-earth text-ceramic-earth hover:bg-ceramic-earth hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors font-inter"
              >
                <span>✉️</span>
                Enviar Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
