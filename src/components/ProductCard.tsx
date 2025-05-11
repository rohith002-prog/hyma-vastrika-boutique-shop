
import { Link } from 'react-router-dom';
import { Product } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(product, 1, product.sizes ? product.sizes[0] : undefined, product.colors ? product.colors[0] : undefined);
  };
  
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden pb-[125%]">
        <img 
          src={product.image || "/placeholder.svg"} 
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <span className="absolute top-2 right-2 bg-hyma-gold px-3 py-1 text-xs font-medium text-hyma-burgundy rounded-full">
            Featured
          </span>
        )}
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg text-hyma-burgundy font-medium mb-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-hyma-burgundy font-bold mb-3">
          ₹{product.price.toLocaleString()}
        </p>
        <div className="flex justify-between items-center">
          <Link to={`/product/${product.id}`} className="text-sm text-hyma-burgundy hover:text-hyma-gold underline">
            View Details
          </Link>
          <Button 
            onClick={handleAddToCart} 
            size="sm"
            className="bg-hyma-burgundy text-white hover:bg-hyma-darkburgundy"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
