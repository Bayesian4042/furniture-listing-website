import { Furniture } from "@/types/furniture";

export const DUMMY_FURNITURE: Furniture[] = [
  {
    id: "1",
    name: "Modern Sofa",
    description: "Comfortable 3-seater sofa with premium fabric upholstery",
    price: 999.99,
    category: "Sofa",
    imageUrl: "https://picsum.photos/200/300?random=1",
    inStock: true,
    rating: 4.5
  },
  {
    id: "2",
    name: "Dining Table Set",
    description: "6-seater wooden dining table with matching chairs",
    price: 799.99,
    category: "Dining",
    imageUrl: "https://picsum.photos/200/300?random=2",
    inStock: true,
    rating: 4.8
  },
  {
    id: "3",
    name: "Queen Size Bed",
    description: "Elegant queen size bed with storage",
    price: 1299.99,
    category: "Bedroom",
    imageUrl: "https://picsum.photos/200/300?random=3",
    inStock: false,
    rating: 4.7
  },
  {
    id: "4",
    name: "Bookshelf",
    description: "Modern 5-tier bookshelf with metal frame",
    price: 249.99,
    category: "Storage",
    imageUrl: "https://picsum.photos/200/300?random=4",
    inStock: true,
    rating: 4.3
  },
  {
    id: "5",
    name: "Office Chair",
    description: "Ergonomic office chair with lumbar support",
    price: 299.99,
    category: "Office",
    imageUrl: "https://picsum.photos/200/300?random=5",
    inStock: true,
    rating: 4.6
  },
  {
    id: "6",
    name: "Coffee Table",
    description: "Round coffee table with glass top",
    price: 199.99,
    category: "Living Room",
    imageUrl: "https://picsum.photos/200/300?random=6",
    inStock: true,
    rating: 4.4
  }
];
