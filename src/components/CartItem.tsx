
import { useState } from 'react';
import { CartItem as CartItemType } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Plus, Minus } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const { product, quantity, size, color } = item;
  
  const handleQuantityChange = (newQuantity: number) => {
    setIsUpdating(true);
    onUpdateQuantity(product.id, newQuantity);
    setIsUpdating(false);
  };
  
  const handleRemove = () => {
    onRemove(product.id);
  };
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-6 border-b border-gray-200">
      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
        <img 
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-medium text-lg text-hyma-burgundy mb-1">{product.name}</h3>
        
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
          {size && <p>Size: {size}</p>}
          {color && <p>Color: {color}</p>}
          <p>Price: ₹{product.price.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 rounded-full"
            onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}
            disabled={isUpdating || quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
          
          <span className="px-4 font-medium">{quantity}</span>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8 rounded-full"
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={isUpdating}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="font-medium text-hyma-burgundy text-lg min-w-[100px] text-right">
          ₹{(product.price * quantity).toLocaleString()}
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 text-gray-400 hover:text-hyma-burgundy"
          onClick={handleRemove}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
