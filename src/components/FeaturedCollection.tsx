
import { Product } from '@/lib/products';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FeaturedCollectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  viewAllLink?: string;
  bgColor?: string;
}

const FeaturedCollection = ({ 
  title,
  subtitle,
  products,
  viewAllLink,
  bgColor = 'bg-white'
}: FeaturedCollectionProps) => {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-hyma-burgundy mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {viewAllLink && (
          <div className="mt-12 text-center">
            <Link to={viewAllLink}>
              <Button className="bg-hyma-burgundy text-white hover:bg-hyma-darkburgundy px-8">
                View All
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedCollection;
