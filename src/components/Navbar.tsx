
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <nav className="bg-hyma-cream border-b border-hyma-gold/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/7b9eced5-d184-4383-9f5a-1a8b5375f58c.png"
              alt="Hyma Vastrika Logo"
              className="h-14 mr-3"
            />
          </Link>
          
          {!isMobile ? (
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6">
                <NavLink to="/" label="Home" />
                <NavLink to="/products?category=dresses" label="Dresses" />
                <NavLink to="/products?category=sarees" label="Sarees" />
                <NavLink to="/about" label="About" />
              </div>
              
              <div className="flex items-center gap-4">
                <Link to="/cart">
                  <Button variant="outline" size="icon" className="rounded-full border-hyma-gold hover:bg-hyma-gold/10">
                    <ShoppingCart className="h-5 w-5 text-hyma-burgundy" />
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <Link to="/cart" className="mr-2">
                <Button variant="outline" size="icon" className="rounded-full border-hyma-gold hover:bg-hyma-gold/10">
                  <ShoppingCart className="h-5 w-5 text-hyma-burgundy" />
                </Button>
              </Link>
              
              <Button variant="ghost" onClick={toggleMenu} size="icon">
                {isMenuOpen ? 
                  <X className="h-6 w-6 text-hyma-burgundy" /> : 
                  <Menu className="h-6 w-6 text-hyma-burgundy" />
                }
              </Button>
            </div>
          )}
        </div>
        
        {isMobile && isMenuOpen && (
          <div className="py-4 px-2 border-t border-hyma-gold/30 mt-3">
            <div className="flex flex-col space-y-3">
              <MobileNavLink to="/" label="Home" onClick={toggleMenu} />
              <MobileNavLink to="/products?category=dresses" label="Dresses" onClick={toggleMenu} />
              <MobileNavLink to="/products?category=sarees" label="Sarees" onClick={toggleMenu} />
              <MobileNavLink to="/about" label="About" onClick={toggleMenu} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link 
    to={to} 
    className="text-hyma-burgundy hover:text-hyma-darkburgundy font-medium text-base relative after:absolute after:bottom-[-4px] after:left-0 after:bg-hyma-gold after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
  >
    {label}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  label,
  onClick 
}: { 
  to: string; 
  label: string; 
  onClick: () => void;
}) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="text-hyma-burgundy hover:text-hyma-darkburgundy font-medium text-lg py-2 border-b border-hyma-gold/20"
  >
    {label}
  </Link>
);

export default Navbar;
