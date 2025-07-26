import Header from "@/components/Header";
import AnimatedParticles from "@/components/AnimatedParticles";
import DecorativeCeramics from "@/components/DecorativeCeramics";
import HeroSection from "@/components/HeroSection2";
import AboutSection from "@/components/AboutSection";
import ProductCard from "@/components/ProductCard";
import CoursesSection from "@/components/CoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
// import PreviewBanner from "@/components/PreviewBanner";
import DecorativeElements from "@/components/DecorativeElements";
import { products } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedParticles />
      <DecorativeElements />
      {/* <PreviewBanner /> */}
      <Header />
      
      <main>
        <HeroSection />
        
        <AboutSection />
        
        {/* Sección de productos */}
        <section id="productos" className="py-20 flex justify-center items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="text-center mb-16 animate-fade-in bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-playfair">
                Nuestras <span className="text-ceramic-earth">Cerámicas</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
                Cada pieza es única y está creada con dedicación artesanal. 
                Descubre algunos ejemplos de nuestro trabajo en <span className="font-extrabold bg-gradient-to-r from-ceramic-earth via-ceramic-warm to-ceramic-terracotta bg-clip-text text-transparent animate-text-shimmer">CerámicaDOS</span>.
              </p>
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg max-w-md mx-auto">
                <p className="text-sm text-amber-800">
                  <strong>Nota:</strong> Productos e imágenes son de ejemplo para este preview
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <div className="flex justify-center items-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 animate-fade-in glass-effect backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', border: '1px solid rgba(255,255,255,0.18)' }}>
              <CoursesSection />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 animate-fade-in glass-effect backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-8" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)', border: '1px solid rgba(255,255,255,0.18)' }}>
              <TestimonialsSection />
            </div>
          </div>
        </div>

        {/* Sección de contacto */}
        <section id="contacto" className="py-20 flex justify-center items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg p-8 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-playfair">
              ¿Te Interesa Alguna Pieza?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-inter">
              <strong>Para <span className="font-extrabold bg-gradient-to-r from-ceramic-earth via-ceramic-warm to-ceramic-terracotta bg-clip-text text-transparent animate-text-shimmer">CerámicaDOS</span>:</strong> Los clientes podrán contactarte directamente 
              por WhatsApp para consultar disponibilidad, precios y encargos personalizados.
            </p>
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-2xl mx-auto">
              <p className="text-sm text-blue-800">
                <strong>Preview:</strong> Los números de teléfono y emails serán los reales de <span className="font-extrabold bg-gradient-to-r from-ceramic-earth via-ceramic-warm to-ceramic-terracotta bg-clip-text text-transparent animate-text-shimmer">CerámicaDOS</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <button
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors font-inter cursor-not-allowed opacity-75"
                onClick={() => alert("Preview: En la versión final este botón conectará con WhatsApp real")}
              >
                <span>WA</span>
                Contactar por WhatsApp
              </button>
              <button
                className="inline-flex items-center gap-2 border border-ceramic-earth text-ceramic-earth hover:bg-ceramic-earth hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors font-inter cursor-not-allowed opacity-75"
                onClick={() => alert("Preview: En la versión final este botón abrirá el email real")}
              >
                <span>@</span>
                Enviar Email
              </button>
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
