
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OrderSuccess = () => {
  // Generate a random order ID
  const orderId = `HV${Math.floor(10000 + Math.random() * 90000)}`;
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-16 bg-hyma-beige/30 flex justify-center items-center">
        <div className="container max-w-lg mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-green-600">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
            </div>
            
            <h1 className="font-serif text-2xl font-bold text-hyma-burgundy mb-4">
              Order Placed Successfully!
            </h1>
            
            <p className="text-gray-600 mb-6">
              Thank you for shopping with Hyma Vastrika. Your order has been received and will be processed soon.
            </p>
            
            <div className="bg-hyma-beige/50 rounded-lg p-4 mb-6">
              <h2 className="font-medium mb-2">Order Details</h2>
              <p className="text-gray-700">Order ID: <span className="font-semibold">{orderId}</span></p>
              <p className="text-gray-700 text-sm mt-1">
                A confirmation email has been sent to your registered email address.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/products" className="flex-1">
                <Button 
                  variant="outline" 
                  className="w-full border-hyma-burgundy text-hyma-burgundy hover:bg-hyma-burgundy hover:text-white"
                >
                  Continue Shopping
                </Button>
              </Link>
              
              <Link to="/" className="flex-1">
                <Button className="w-full bg-hyma-burgundy hover:bg-hyma-darkburgundy text-white">
                  Go to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderSuccess;
