import { Scissors, Wind, Sparkles, Palette, Star, MoreHorizontal } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Potong Rambut',
    description: 'Potong rambut profesional dengan teknik modern',
    price: 'Mulai Rp 25k',
  },
  {
    icon: Wind,
    title: 'Perm',
    description: 'Styling keriting permanen yang tahan lama',
    price: 'Mulai Rp 250k',
  },
  {
    icon: Sparkles,
    title: 'Smoothing',
    description: 'Treatment rambut halus dan lurus',
    price: 'Mulai Rp 400k',
  },
  {
    icon: Palette,
    title: 'Pewarnaan',
    description: 'Pewarnaan rambut dan highlight profesional',
    price: 'Mulai Rp 200k',
  },
  {
    icon: Star,
    title: 'Cukur Jenggot',
    description: 'Cukur bersih dengan perawatan premium',
    price: 'Mulai Rp 30k',
  },
  {
    icon: MoreHorizontal,
    title: 'Layanan Lainnya',
    description: 'Treatment rambut, spa, dan lainnya',
    price: 'Custom',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-primary-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 border-2 border-accent-500/30 rounded-full text-accent-500 font-bold text-xs sm:text-sm mb-6 shadow-lg shadow-accent-500/20">
            ✂️ LAYANAN KAMI
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6 text-white px-4">
            LAYANAN <span className="text-accent-500">PREMIUM</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Pengalaman grooming premium yang disesuaikan dengan gaya Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-primary-900 to-primary-800 border-2 border-accent-500/30 rounded-2xl p-6 sm:p-8 hover:border-accent-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-500/30 flex flex-col"
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent-500/5 rounded-bl-full group-hover:bg-accent-500/10 transition-all duration-300"></div>
                
                <div className="flex-grow">
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4 sm:mb-6 shadow-lg">
                    <Icon className="text-primary-900" size={28} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-heading font-bold mb-3 text-white group-hover:text-accent-500 transition-colors">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-accent-500/20">
                  <span className="text-accent-500 font-bold text-base sm:text-lg">{service.price}</span>
                  <a 
                    href="https://wa.me/62851663484874?text=Halo%2C%20saya%20mau%20booking%20haircut%20dong!%20%E2%9C%82%EF%B8%8F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-accent-500/30 text-accent-500 font-bold text-xs sm:text-sm rounded-lg hover:bg-accent-500 hover:text-primary-900 hover:border-accent-500 transition-all duration-300"
                  >
                    Pesan
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 rounded-2xl p-8 sm:p-12 border-2 border-accent-500/30 shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Siap untuk <span className="text-accent-500">Tampil Percaya Diri?</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penampilan terbaik Anda
          </p>
          <a 
            href="https://wa.me/62851663484874?text=Halo%2C%20saya%20mau%20booking%20haircut%20dong!%20%E2%9C%82%EF%B8%8F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-primary-900 font-bold text-base sm:text-lg rounded-lg hover:bg-accent-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-500/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
