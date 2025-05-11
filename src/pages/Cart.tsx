
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import CartItem from '@/components/CartItem';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const shippingCost = subtotal > 0 ? (subtotal > 5000 ? 0 : 150) : 0;
  const total = subtotal + shippingCost;
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-12 bg-hyma-beige/40">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto h-16 w-16 text-hyma-burgundy/40">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-serif font-bold text-hyma-burgundy mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/products">
              <Button className="bg-hyma-burgundy text-white hover:bg-hyma-darkburgundy">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-hyma-beige/40">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold text-hyma-burgundy mb-8">
            Your Shopping Cart
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <h2 className="text-lg font-medium">
                    {items.length} {items.length === 1 ? 'Item' : 'Items'}
                  </h2>
                  <Button 
                    variant="ghost" 
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    Clear Cart
                  </Button>
                </div>
                
                <div>
                  {items.map((item) => (
                    <CartItem 
                      key={`${item.product.id}-${item.size}-${item.color}`}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeFromCart}
                    />
                  ))}
                </div>
                
                <div className="pt-4">
                  <Link to="/products">
                    <Button variant="outline" className="text-hyma-burgundy">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-serif font-bold text-hyma-burgundy mb-4">
                  Order Summary
                </h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between pb-3">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between pb-3">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? 'Free' : `₹${shippingCost.toLocaleString()}`}
                    </span>
                  </div>
                  
                  <div className="flex justify-between border-t border-gray-200 pt-3">
                    <span className="font-medium">Total</span>
                    <span className="font-bold text-hyma-burgundy text-xl">
                      ₹{total.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button 
                    className="w-full bg-hyma-burgundy hover:bg-hyma-darkburgundy text-white"
                    onClick={() => navigate('/checkout')}
                    size="lg"
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <div className="mt-4 text-center text-sm text-gray-500">
                    <p>Safe & Secure Checkout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
