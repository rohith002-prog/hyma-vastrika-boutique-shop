
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProductsByCategory, products } from '@/lib/products';
import ProductList from '@/components/ProductList';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [title, setTitle] = useState('All Products');
  const [displayProducts, setDisplayProducts] = useState(products);
  
  const category = searchParams.get('category');
  
  useEffect(() => {
    if (category) {
      setDisplayProducts(getProductsByCategory(category));
      setTitle(category === 'dresses' ? 'Dresses Collection' : 'Sarees Collection');
    } else {
      setDisplayProducts(products);
      setTitle('All Products');
    }
  }, [category]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-hyma-beige/40">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-hyma-burgundy mb-8 text-center">
            {title}
          </h1>
          
          <ProductList products={displayProducts} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
