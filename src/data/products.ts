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
    name: "Jarrón Artesanal",
    price: "$120.000",
    description: "Elegante jarrón hecho a mano con técnicas tradicionales, perfecto para decorar cualquier ambiente.",
    image: ceramicVase1,
  },
  {
    id: 2,
    name: "Bowl de Cerámica",
    price: "$65.000",
    description: "Bowl artesanal con textura única, ideal para servir o como pieza decorativa en tu hogar.",
    image: ceramicBowl1,
  },
  {
    id: 3,
    name: "Taza Artesanal",
    price: "$38.000",
    description: "Taza hecha a mano con asa ergonómica, perfecta para disfrutar tu bebida favorita.",
    image: ceramicMug1,
  },
  {
    id: 4,
    name: "Set de Platos",
    price: "$180.000",
    description: "Conjunto de platos artesanales únicos, cada uno con su propia personalidad y textura.",
    image: ceramicPlates1,
  },
  {
    id: 5,
    name: "Maceta Decorativa",
    price: "$55.000",
    description: "Maceta con textura artesanal, perfecta para plantas suculentas o como elemento decorativo.",
    image: ceramicPot1,
  },
  {
    id: 6,
    name: "Fuente para Servir",
    price: "$95.000",
    description: "Amplia fuente artesanal, ideal para servir comidas especiales y ocasiones importantes.",
    image: ceramicDish1,
  },
];