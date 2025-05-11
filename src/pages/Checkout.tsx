
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import AddressForm, { AddressFormValues } from '@/components/AddressForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingAddress, setShippingAddress] = useState<AddressFormValues | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [processingOrder, setProcessingOrder] = useState(false);
  
  const shippingCost = subtotal > 0 ? (subtotal > 5000 ? 0 : 150) : 0;
  const total = subtotal + shippingCost;
  
  if (items.length === 0) {
    navigate('/cart');
    return null;
  }
  
  const handleAddressSubmit = (data: AddressFormValues) => {
    setShippingAddress(data);
    setCurrentStep(2);
    window.scrollTo(0, 0);
  };
  
  const handlePlaceOrder = () => {
    setProcessingOrder(true);
    
    // Simulate order processing
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for shopping with Hyma Vastrika."
      });
      clearCart();
      navigate('/order-success');
      setProcessingOrder(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-hyma-beige/40">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif font-bold text-hyma-burgundy mb-8">
            Checkout
          </h1>
          
          {/* Checkout Steps */}
          <div className="mb-8">
            <div className="flex items-center max-w-2xl mx-auto">
              <div className={`flex-1 flex flex-col items-center ${currentStep >= 1 ? 'text-hyma-burgundy' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${currentStep >= 1 ? 'bg-hyma-burgundy text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span className="text-sm font-medium">Address</span>
              </div>
              <div className={`flex-1 h-1 ${currentStep >= 2 ? 'bg-hyma-burgundy' : 'bg-gray-200'}`}></div>
              <div className={`flex-1 flex flex-col items-center ${currentStep >= 2 ? 'text-hyma-burgundy' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${currentStep >= 2 ? 'bg-hyma-burgundy text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className="text-sm font-medium">Payment</span>
              </div>
              <div className={`flex-1 h-1 ${currentStep >= 3 ? 'bg-hyma-burgundy' : 'bg-gray-200'}`}></div>
              <div className={`flex-1 flex flex-col items-center ${currentStep >= 3 ? 'text-hyma-burgundy' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${currentStep >= 3 ? 'bg-hyma-burgundy text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span className="text-sm font-medium">Confirmation</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Step 1: Shipping Address */}
              {currentStep === 1 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-serif font-bold text-hyma-burgundy mb-6">
                    Shipping Address
                  </h2>
                  <AddressForm onSubmit={handleAddressSubmit} />
                </div>
              )}
              
              {/* Step 2: Payment */}
              {currentStep === 2 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-serif font-bold text-hyma-burgundy">
                      Payment Method
                    </h2>
                    <Button 
                      variant="ghost" 
                      onClick={() => setCurrentStep(1)}
                      className="text-hyma-burgundy hover:text-hyma-darkburgundy"
                    >
                      Edit Address
                    </Button>
                  </div>
                  
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online" className="text-base">Online Payment (Credit/Debit Card, UPI, Net Banking)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="text-base">Cash on Delivery</Label>
                    </div>
                  </RadioGroup>
                  
                  {paymentMethod === 'online' && (
                    <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                      <h3 className="text-lg font-medium mb-4">
                        Enter Card Details
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <input 
                            type="text"
                            id="cardNumber"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <input 
                              type="text"
                              id="expiry"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                              placeholder="MM/YY"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <input 
                              type="text"
                              id="cvv"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                              placeholder="123"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="nameOnCard">Name on Card</Label>
                          <input 
                            type="text"
                            id="nameOnCard"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8">
                    <Button 
                      onClick={() => setCurrentStep(3)}
                      className="w-full bg-hyma-burgundy hover:bg-hyma-darkburgundy text-white"
                      size="lg"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Step 3: Review Order */}
              {currentStep === 3 && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-serif font-bold text-hyma-burgundy mb-6">
                    Review Your Order
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Shipping Address</h3>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-medium">{shippingAddress?.fullName}</p>
                        <p>{shippingAddress?.addressLine1}</p>
                        {shippingAddress?.addressLine2 && <p>{shippingAddress.addressLine2}</p>}
                        <p>
                          {shippingAddress?.city}, {shippingAddress?.state} - {shippingAddress?.pincode}
                        </p>
                        <p className="mt-1">Phone: {shippingAddress?.phoneNumber}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        onClick={() => setCurrentStep(1)}
                        className="mt-2 text-hyma-burgundy hover:text-hyma-darkburgundy"
                        size="sm"
                      >
                        Edit
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Payment Method</h3>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p>{paymentMethod === 'online' ? 'Online Payment' : 'Cash on Delivery'}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        onClick={() => setCurrentStep(2)}
                        className="mt-2 text-hyma-burgundy hover:text-hyma-darkburgundy"
                        size="sm"
                      >
                        Edit
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Order Items</h3>
                      <div className="divide-y divide-gray-200">
                        {items.map((item) => (
                          <div 
                            key={`${item.product.id}-${item.size}-${item.color}`}
                            className="py-3 flex items-center"
                          >
                            <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
                              <img 
                                src={item.product.image || "/placeholder.svg"}
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="ml-4 flex-1">
                              <h4 className="font-medium">{item.product.name}</h4>
                              <div className="text-sm text-gray-500">
                                {item.size && `Size: ${item.size}, `}
                                {item.color && `Color: ${item.color}, `}
                                Qty: {item.quantity}
                              </div>
                            </div>
                            <div className="font-medium">
                              ₹{(item.product.price * item.quantity).toLocaleString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <Button 
                      onClick={handlePlaceOrder}
                      className="w-full bg-hyma-burgundy hover:bg-hyma-darkburgundy text-white"
                      size="lg"
                      disabled={processingOrder}
                    >
                      {processingOrder ? "Processing..." : "Place Order"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-serif font-bold text-hyma-burgundy mb-4">
                  Order Summary
                </h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between pb-3">
                    <span className="text-gray-600">Items ({items.length})</span>
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
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  <p className="mb-2">We accept:</p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 rounded"></div>
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

export default Checkout;
