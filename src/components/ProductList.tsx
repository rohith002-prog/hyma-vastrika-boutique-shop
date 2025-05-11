
import { useState } from 'react';
import { Product } from '@/lib/products';
import ProductCard from './ProductCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface ProductListProps {
  products: Product[];
  title?: string;
}

const ProductList = ({ products, title }: ProductListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  
  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Filter by price range
  const priceFilteredProducts = priceRange === 'all' 
    ? filteredProducts 
    : filteredProducts.filter(product => {
        switch(priceRange) {
          case 'under2000': return product.price < 2000;
          case '2000-5000': return product.price >= 2000 && product.price <= 5000;
          case '5000-10000': return product.price > 5000 && product.price <= 10000;
          case 'over10000': return product.price > 10000;
          default: return true;
        }
      });
  
  // Sort products
  const sortedProducts = [...priceFilteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low-high': return a.price - b.price;
      case 'price-high-low': return b.price - a.price;
      case 'name-a-z': return a.name.localeCompare(b.name);
      case 'name-z-a': return b.name.localeCompare(a.name);
      default: return 0;
    }
  });
  
  return (
    <div>
      {title && (
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-hyma-burgundy mb-8 text-center">
          {title}
        </h2>
      )}
      
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="search" className="mb-2 block">Search Products</Label>
            <Input
              id="search"
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          
          <div>
            <Label htmlFor="sort" className="mb-2 block">Sort By</Label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger id="sort" className="w-full">
                <SelectValue placeholder="Sort products" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                <SelectItem value="name-a-z">Name: A to Z</SelectItem>
                <SelectItem value="name-z-a">Name: Z to A</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="price" className="mb-2 block">Price Range</Label>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger id="price" className="w-full">
                <SelectValue placeholder="Select price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under2000">Under ₹2,000</SelectItem>
                <SelectItem value="2000-5000">₹2,000 - ₹5,000</SelectItem>
                <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
                <SelectItem value="over10000">Over ₹10,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {sortedProducts.length > 0 ? (
        <div className="product-grid">
          {sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
