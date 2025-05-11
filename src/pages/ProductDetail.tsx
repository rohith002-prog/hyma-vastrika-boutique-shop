
import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductById, getProductsByCategory, Product } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FeaturedCollection from '@/components/FeaturedCollection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [selectedColor, setSelectedColor] = useState<string | undefined>(undefined);
  
  const product = getProductById(Number(id));
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you are looking for does not exist or has been removed.</p>
            <Button onClick={() => navigate('/products')}>
              Back to Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Suggested products from the same category
  const suggestedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  // Set default size and color when product loads
  if (product.sizes && product.sizes.length > 0 && !selectedSize) {
    setSelectedSize(product.sizes[0]);
  }
  
  if (product.colors && product.colors.length > 0 && !selectedColor) {
    setSelectedColor(product.colors[0]);
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <nav className="text-sm text-gray-500">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link to="/" className="hover:text-hyma-burgundy">Home</Link>
                </li>
                <li className="flex items-center space-x-2">
                  <span>/</span>
                  <Link to="/products" className="hover:text-hyma-burgundy">Products</Link>
                </li>
                <li className="flex items-center space-x-2">
                  <span>/</span>
                  <Link 
                    to={`/products?category=${product.category}`} 
                    className="hover:text-hyma-burgundy"
                  >
                    {product.category === 'dresses' ? 'Dresses' : 'Sarees'}
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <span>/</span>
                  <span className="text-hyma-burgundy">{product.name}</span>
                </li>
              </ol>
            </nav>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={product.image || "/placeholder.svg"} 
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Product Details */}
            <div>
              <h1 className="font-serif text-3xl font-bold text-hyma-burgundy mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                {product.collection && (
                  <span className="inline-block bg-hyma-gold/20 text-hyma-burgundy text-sm px-3 py-1 rounded-full">
                    {product.collection} Collection
                  </span>
                )}
                {product.featured && (
                  <span className="inline-block bg-hyma-burgundy/10 text-hyma-burgundy text-sm px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="text-2xl font-bold text-hyma-burgundy mb-4">
                ₹{product.price.toLocaleString()}
              </div>
              
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              
              <div className="space-y-6 mb-8">
                {product.sizes && product.sizes.length > 0 && (
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Size
                    </Label>
                    <RadioGroup 
                      value={selectedSize} 
                      onValueChange={setSelectedSize}
                      className="flex flex-wrap gap-2"
                    >
                      {product.sizes.map((size) => (
                        <div key={size} className="flex items-center">
                          <RadioGroupItem 
                            value={size} 
                            id={`size-${size}`} 
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={`size-${size}`}
                            className="px-4 py-2 bg-white border border-gray-200 rounded-md text-center cursor-pointer peer-data-[state=checked]:bg-hyma-burgundy peer-data-[state=checked]:text-white hover:bg-gray-50"
                          >
                            {size}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}
                
                {product.colors && product.colors.length > 0 && (
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Color
                    </Label>
                    <RadioGroup 
                      value={selectedColor} 
                      onValueChange={setSelectedColor}
                      className="flex flex-wrap gap-2"
                    >
                      {product.colors.map((color) => (
                        <div key={color} className="flex items-center">
                          <RadioGroupItem 
                            value={color} 
                            id={`color-${color}`} 
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={`color-${color}`}
                            className="px-4 py-2 bg-white border border-gray-200 rounded-md text-center cursor-pointer peer-data-[state=checked]:bg-hyma-burgundy peer-data-[state=checked]:text-white hover:bg-gray-50"
                          >
                            {color}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}
                
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </Label>
                  <div className="flex items-center w-full max-w-[180px]">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-10 w-10 rounded-r-none"
                    >
                      -
                    </Button>
                    <div className="h-10 w-14 flex items-center justify-center border-y border-gray-200 bg-white">
                      {quantity}
                    </div>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-10 w-10 rounded-l-none"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={handleAddToCart}
                  className="bg-hyma-burgundy text-white hover:bg-hyma-darkburgundy flex-1"
                  size="lg"
                >
                  Add to Cart
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => {
                    handleAddToCart();
                    navigate('/cart');
                  }}
                  className="border-hyma-burgundy text-hyma-burgundy hover:bg-hyma-burgundy hover:text-white flex-1"
                >
                  Buy Now
                </Button>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="material">Materials</TabsTrigger>
                    <TabsTrigger value="shipping">Shipping</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="p-4">
                    <div className="text-gray-600">
                      <p className="mb-2">
                        {product.name} is part of our {product.collection || 'Standard'} Collection, 
                        designed to bring elegance and style to your wardrobe.
                      </p>
                      <p>
                        This product is carefully crafted to ensure quality and comfort for all occasions.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="material" className="p-4">
                    <div className="text-gray-600">
                      <p className="mb-2">
                        <strong>Material:</strong> {product.material || 'Premium Fabric'}
                      </p>
                      <p>
                        Our products are made using high-quality materials to ensure durability, 
                        comfort and elegant look. Dry clean recommended.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="shipping" className="p-4">
                    <div className="text-gray-600">
                      <p className="mb-2">
                        We ship all across India through trusted courier partners.
                      </p>
                      <p className="mb-2">
                        <strong>Standard Delivery:</strong> 3-5 business days
                      </p>
                      <p>
                        <strong>Express Delivery:</strong> 1-2 business days (additional charges apply)
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
          
          {/* Suggested Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-hyma-burgundy mb-6">
              You May Also Like
            </h2>
            <div className="product-grid">
              {suggestedProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Link to={`/product/${product.id}`} className="block relative pb-[125%]">
                    <img 
                      src={product.image || "/placeholder.svg"} 
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-medium text-lg text-hyma-burgundy mb-1">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-hyma-burgundy font-bold">
                      ₹{product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
