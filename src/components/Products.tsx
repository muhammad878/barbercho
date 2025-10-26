import { ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    name: 'Premium Pomade',
    category: 'Hair Styling',
    price: 'Rp 150,000',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Matte Clay',
    category: 'Hair Styling',
    price: 'Rp 180,000',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Hair Serum',
    category: 'Hair Care',
    price: 'Rp 200,000',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Beard Oil',
    category: 'Grooming',
    price: 'Rp 120,000',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Hair Wax',
    category: 'Hair Styling',
    price: 'Rp 165,000',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Shampoo Pro',
    category: 'Hair Care',
    price: 'Rp 145,000',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-primary-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)',
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 border border-accent-500/30 rounded-full text-accent-500 font-bold text-sm mb-6">
            <ShoppingCart className="w-4 h-4 mr-2" />
            PREMIUM PRODUCTS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
            Our <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Shop our curated selection of professional-grade grooming products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-primary-900 border-2 border-accent-500/30 overflow-hidden hover:shadow-accent-500/50 hover:border-accent-500 transition-all duration-500 hover:-translate-y-2 animate-on-scroll rounded-2xl"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="aspect-square overflow-hidden bg-primary-800 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs text-accent-500 font-bold mb-2 uppercase tracking-wider">
                  {product.category}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-white">{product.name}</h3>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? 'text-accent-500 fill-accent-500' : 'text-gray-600'}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-400">({product.rating})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent-500">{product.price}</span>
                  <button className="flex items-center space-x-2 px-5 py-2.5 bg-accent-500 text-primary-900 font-bold hover:bg-accent-400 transition-all duration-300 hover:scale-105 group">
                    <ShoppingCart size={18} />
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="btn-outline text-lg px-8 py-4 hover:scale-105">
            Lihat Semua Produk
          </button>
        </div>
      </div>
    </section>
  );
}
