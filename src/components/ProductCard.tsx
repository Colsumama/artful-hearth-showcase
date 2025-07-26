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
    const message = `Hola! Me interesa el producto: ${product.name} - ${product.price}. ¿Podrías darme más información?`;
    const whatsappUrl = `https://wa.me/5491123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-scale-in">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 font-playfair">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 font-inter leading-relaxed">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-ceramic-earth font-playfair">{product.price}</span>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-green-600 hover:bg-green-700 text-white gap-2 font-inter font-medium"
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