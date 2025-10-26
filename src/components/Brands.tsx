import { Store } from 'lucide-react';

const brands = [
  { name: 'Uppercut', logo: 'UC' },
  { name: 'Layrite', logo: 'LR' },
  { name: 'Suavecito', logo: 'SV' },
  { name: 'American Crew', logo: 'AC' },
  { name: 'Baxter', logo: 'BX' },
  { name: 'Reuzel', logo: 'RZ' },
];

export default function Brands() {
  return (
    <section className="py-20 bg-primary-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
            Trusted <span className="text-accent-500">Brands</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We partner with the world's leading grooming brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-8 bg-primary-900 rounded-2xl border-2 border-accent-500/30 hover:border-accent-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-500/30"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-4 transition-all duration-300 shadow-lg group-hover:scale-110">
                <span className="text-2xl font-heading font-bold text-primary-900 transition-colors duration-300">
                  {brand.logo}
                </span>
              </div>
              <p className="text-sm font-bold text-white group-hover:text-accent-500 transition-colors duration-300">
                {brand.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-primary-900 rounded-full border-2 border-accent-500 shadow-lg hover:shadow-accent-500/30 transition-all">
            <Store className="text-accent-500" size={24} />
            <span className="text-white font-bold">
              20+ Premium Brands Available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
