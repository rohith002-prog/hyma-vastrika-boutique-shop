
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-hyma-burgundy text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4 text-hyma-gold">Hyma Vastrika</h3>
            <p className="text-sm mb-4 max-w-xs text-hyma-cream/90">
              Elegant and traditional dresses and sarees for all occasions. 
              Bringing timeless fashion to your wardrobe with unique designs and quality fabrics.
            </p>
            <div className="flex items-center gap-4">
              <Link to="#" className="text-hyma-gold hover:text-hyma-cream">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link to="https://www.instagram.com/hyma.vastrika?igsh=MTI4bG14aTYyb2hzMg==" target="_blank" rel="noopener noreferrer" className="text-hyma-gold hover:text-hyma-cream">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4 text-hyma-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-hyma-cream/90 hover:text-hyma-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products?category=dresses" className="text-sm text-hyma-cream/90 hover:text-hyma-gold">
                  Dresses
                </Link>
              </li>
              <li>
                <Link to="/products?category=sarees" className="text-sm text-hyma-cream/90 hover:text-hyma-gold">
                  Sarees
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-hyma-cream/90 hover:text-hyma-gold">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-hyma-cream/90 hover:text-hyma-gold">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-hyma-cream/90 hover:text-hyma-gold">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4 text-hyma-gold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-hyma-gold mr-2" />
                <p className="text-sm text-hyma-cream/90">+91 7075239997</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-hyma-gold mr-2" />
                <p className="text-sm text-hyma-cream/90">contact@hymavastrika.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-4 border-t border-hyma-gold/30 text-center">
          <p className="text-sm text-hyma-cream/70">
            &copy; {new Date().getFullYear()} Hyma Vastrika. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
