
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FeaturedCollection from '@/components/FeaturedCollection';
import { getFeaturedProducts } from '@/lib/products';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-hyma-burgundy text-white py-24 md:py-32">
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
                Discover Timeless Elegance
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Exquisite dresses and sarees crafted with love and tradition. 
                Find your perfect attire for every occasion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products?category=dresses">
                  <Button size="lg" className="bg-white text-hyma-burgundy hover:bg-hyma-cream">
                    Shop Dresses
                  </Button>
                </Link>
                <Link to="/products?category=sarees">
                  <Button size="lg" className="bg-hyma-gold text-hyma-burgundy hover:bg-hyma-lightgold">
                    Shop Sarees
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Collections Introduction */}
        <section className="py-16 bg-hyma-cream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative rounded-lg overflow-hidden group">
                <img 
                  src="/saree-collection.jpg" 
                  alt="Saree Collection" 
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hyma-burgundy/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">Saree Collection</h3>
                    <p className="mb-4">Traditional and contemporary sarees for every occasion</p>
                    <Link to="/products?category=sarees">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-hyma-burgundy">
                        Explore Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden group">
                <img 
                  src="/dress-collection.jpg" 
                  alt="Dress Collection" 
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hyma-burgundy/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-serif font-bold mb-2">Dress Collection</h3>
                    <p className="mb-4">Elegant dresses designed for comfort and style</p>
                    <Link to="/products?category=dresses">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-hyma-burgundy">
                        Explore Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <FeaturedCollection 
          title="Featured Products" 
          subtitle="Discover our most popular designs and latest additions"
          products={featuredProducts}
          viewAllLink="/products"
          bgColor="bg-white"
        />
        
        {/* USP Section */}
        <section className="py-16 bg-hyma-beige">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-hyma-burgundy mb-3">
                Why Choose Hyma Vastrika
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We take pride in delivering quality fabrics, designs, and service to our customers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="mx-auto w-16 h-16 bg-hyma-gold/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-hyma-burgundy">
                    <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-hyma-burgundy mb-2">Quality Craftsmanship</h3>
                <p className="text-gray-600">
                  Every piece is meticulously crafted with attention to detail and quality
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="mx-auto w-16 h-16 bg-hyma-gold/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-hyma-burgundy">
                    <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16C3 16.55 3.45 17 4 17H20C20.55 17 21 16.55 21 16Z" />
                    <path d="M22 12H19V17H22V12Z" />
                    <path d="M2 12H5V17H2V12Z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-hyma-burgundy mb-2">Secure Payments</h3>
                <p className="text-gray-600">
                  Shop with confidence using our secure payment options
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="mx-auto w-16 h-16 bg-hyma-gold/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-hyma-burgundy">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-hyma-burgundy mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  Quick and reliable shipping to get your products to you on time
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-hyma-burgundy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">
                Join Our Newsletter
              </h2>
              <p className="mb-6">
                Subscribe to receive updates on new arrivals, exclusive offers, and styling tips
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-2 rounded-l focus:outline-none text-gray-700"
                />
                <Button className="bg-hyma-gold text-hyma-burgundy hover:bg-hyma-lightgold rounded-r">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
