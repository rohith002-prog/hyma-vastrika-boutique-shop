
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: 'dresses' | 'sarees';
  featured?: boolean;
  collection?: string;
  sizes?: string[];
  colors?: string[];
  material?: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Floral Embroidered Anarkali",
    price: 5999,
    description: "Beautiful traditional Anarkali dress with intricate floral embroidery. Perfect for weddings and special occasions.",
    image: "/anarkali1.jpg",
    category: "dresses",
    featured: true,
    collection: "Festival",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"],
    material: "Georgette",
    inStock: true
  },
  {
    id: 2,
    name: "Banarasi Silk Saree",
    price: 8999,
    description: "Elegant Banarasi silk saree with rich golden zari work. A timeless classic for your collection.",
    image: "/saree1.jpg",
    category: "sarees",
    featured: true,
    collection: "Wedding",
    colors: ["Red", "Maroon", "Navy Blue"],
    material: "Silk",
    inStock: true
  },
  {
    id: 3,
    name: "Designer Party Gown",
    price: 4599,
    description: "Modern party gown with contemporary design. Perfect for cocktail parties and evening events.",
    image: "/gown1.jpg",
    category: "dresses",
    featured: true,
    collection: "Party",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Blue", "Wine"],
    material: "Crepe",
    inStock: true
  },
  {
    id: 4,
    name: "Kanjeevaram Silk Saree",
    price: 12999,
    description: "Traditional Kanjeevaram silk saree with temple border. A must-have for your traditional wear collection.",
    image: "/saree2.jpg",
    category: "sarees",
    collection: "Wedding",
    colors: ["Gold", "Green", "Pink"],
    material: "Silk",
    inStock: true
  },
  {
    id: 5,
    name: "Embellished Sharara Set",
    price: 7599,
    description: "Three-piece sharara set with heavy embellishments. Perfect for festive occasions.",
    image: "/sharara1.jpg",
    category: "dresses",
    collection: "Festival",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Teal", "Pink", "Yellow"],
    material: "Georgette",
    inStock: true
  },
  {
    id: 6,
    name: "Cotton Printed Saree",
    price: 2499,
    description: "Comfortable cotton saree with modern prints. Perfect for daily wear and office.",
    image: "/saree3.jpg",
    category: "sarees",
    collection: "Daily",
    colors: ["Blue", "Yellow", "Green"],
    material: "Cotton",
    inStock: true
  },
  {
    id: 7,
    name: "Designer Lehenga Choli",
    price: 15999,
    description: "Heavy embroidered lehenga choli with contemporary design. Perfect for wedding functions.",
    image: "/lehenga1.jpg",
    category: "dresses",
    featured: true,
    collection: "Wedding",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Pink", "Royal Blue"],
    material: "Velvet",
    inStock: true
  },
  {
    id: 8,
    name: "Linen Digital Print Saree",
    price: 3499,
    description: "Light and comfortable linen saree with digital prints. Perfect for summer wear.",
    image: "/saree4.jpg",
    category: "sarees",
    collection: "Summer",
    colors: ["White", "Beige", "Light Blue"],
    material: "Linen",
    inStock: true
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByCollection = (collection: string): Product[] => {
  return products.filter(product => product.collection === collection);
};
