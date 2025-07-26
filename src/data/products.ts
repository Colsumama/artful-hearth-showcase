// Importamos las imágenes
import ceramicVase1 from "@/assets/ceramic-vase-1.jpg";
import ceramicBowl1 from "@/assets/ceramic-bowl-1.jpg";
import ceramicMug1 from "@/assets/ceramic-mug-1.jpg";
import ceramicPlates1 from "@/assets/ceramic-plates-1.jpg";
import ceramicPot1 from "@/assets/ceramic-pot-1.jpg";
import ceramicDish1 from "@/assets/ceramic-dish-1.jpg";

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Jarrón Terracota",
    price: "$15.000",
    description: "Elegante jarrón con acabado en terracota, perfecto para decorar cualquier ambiente con estilo natural.",
    image: ceramicVase1,
  },
  {
    id: 2,
    name: "Bowl Artesanal",
    price: "$8.500",
    description: "Bowl de cerámica con textura rústica, ideal para servir ensaladas o como pieza decorativa.",
    image: ceramicBowl1,
  },
  {
    id: 3,
    name: "Taza de Café",
    price: "$6.000",
    description: "Taza artesanal con asa ergonómica, perfecta para disfrutar tu café matutino con estilo.",
    image: ceramicMug1,
  },
  {
    id: 4,
    name: "Set de Platos",
    price: "$25.000",
    description: "Conjunto de 4 platos artesanales con formas orgánicas, ideales para una mesa elegante y natural.",
    image: ceramicPlates1,
  },
  {
    id: 5,
    name: "Maceta Decorativa",
    price: "$12.000",
    description: "Maceta con textura artesanal, perfecta para plantas suculentas o como elemento decorativo.",
    image: ceramicPot1,
  },
  {
    id: 6,
    name: "Fuente para Servir",
    price: "$18.000",
    description: "Amplia fuente esmaltada, ideal para servir comidas especiales y ocasiones importantes.",
    image: ceramicDish1,
  },
];