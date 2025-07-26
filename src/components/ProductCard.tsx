import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleWhatsAppClick = () => {
    alert("Preview: En la versión final este botón conectará con WhatsApp de CerámicaDos");
  };

  return (
    <Card className="group overflow-hidden hover-lift shadow-soft hover:shadow-ceramic transition-all duration-500 animate-reveal-scale backdrop-blur-sm glass-effect bg-white/70 backdrop-blur-xl border border-ceramic-earth/10 shadow-lg">
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-6 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-ceramic transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        <h3 className="text-xl font-semibold text-foreground mb-2 font-playfair group-hover:text-ceramic-earth transition-colors duration-300">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 font-inter leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-extrabold font-playfair text-ceramic-earth drop-shadow-lg animate-price-pop tracking-tight select-none">
            {product.price}
          </span>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-ceramic-earth hover:bg-ceramic-earth/90 text-white gap-2 font-inter font-medium shadow-soft hover:shadow-ceramic transition-all duration-300 cursor-not-allowed opacity-75"
          >
            <MessageCircle size={16} />
            Consultar
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;