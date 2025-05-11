
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-hyma-burgundy text-white py-20">
          <div className="absolute inset-0 bg-[url('/about-hero.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              About Hyma Vastrika
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              Crafting elegance through tradition and innovation
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-hyma-burgundy mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2018, Hyma Vastrika began as a small boutique in Hyderabad with a simple mission - to bring the rich heritage of Indian textiles and designs to modern fashion enthusiasts.
                </p>
                <p className="text-gray-600 mb-4">
                  Our founder, Hyma Reddy, grew up surrounded by the vibrant colors and intricate craftsmanship of traditional Indian garments. Inspired by her grandmother's saree collection, she decided to create a brand that honors these traditions while embracing contemporary styles.
                </p>
                <p className="text-gray-600">
                  Today, Hyma Vastrika has grown into a beloved destination for those seeking quality, authenticity, and elegance in their ethnic and fusion wear.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/about-story.jpg" 
                  alt="Hyma Vastrika Story" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-hyma-beige/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-hyma-burgundy mb-12 text-center">
              Our Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="mx-auto w-16 h-16 bg-hyma-gold/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-hyma-burgundy">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-hyma-burgundy mb-3">Passion</h3>
                <p className="text-gray-600">
                  We are deeply passionate about the rich textile heritage of India and bringing it to our customers with pride and dedication.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="mx-auto w-16 h-16 bg-hyma-gold/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-hyma-burgundy">
                    <path d="M12 22a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path>
                    <path d="M12 17a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4Z"></path>
                    <line x1="12" y1="12" x2="12" y2="17"></line>
                    <line x1="12" y1="3" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-hyma-burgundy mb-3">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality, ensuring that each garment meets our high standards of craftsmanship and durability.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="mx-auto w-16 h-16 bg-hyma-gold/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-hyma-burgundy">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-hyma-burgundy mb-3">Community</h3>
                <p className="text-gray-600">
                  We support local artisans and weavers, helping to preserve traditional crafts while providing sustainable livelihoods.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Location and Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-hyma-burgundy mb-12 text-center">
              Visit Our Store
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30447.397193207103!2d78.43632564999999!3d17.4380405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90df9f96cfd9%3A0x58427349d6623d0!2sSecunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1652345740200!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy"
                  title="Hyma Vastrika Location"
                ></iframe>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-hyma-burgundy mb-6">
                  Hyma Vastrika Boutique
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-hyma-burgundy mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p className="text-gray-600">
                        123 Fashion Street, <br />
                        Textile Market, <br />
                        Hyderabad, 500001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-hyma-burgundy mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-hyma-burgundy mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-600">contact@hymavastrika.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium mb-2">Store Hours</h4>
                  <div className="grid grid-cols-2 gap-2 text-gray-600">
                    <div>Monday - Friday</div>
                    <div>10:00 AM - 8:00 PM</div>
                    <div>Saturday</div>
                    <div>10:00 AM - 9:00 PM</div>
                    <div>Sunday</div>
                    <div>11:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
