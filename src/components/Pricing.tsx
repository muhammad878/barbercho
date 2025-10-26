import { Check } from 'lucide-react';

export default function Pricing() {
  const services = [
    {
      name: "Potong Rambut Dasar",
      price: "25K",
      duration: "30 menit",
      features: [
        "Potong rambut profesional",
        "Styling dasar",
        "Keramas",
        "Blow dry"
      ]
    },
    {
      name: "Grooming Lengkap",
      price: "100K",
      duration: "60 menit",
      features: [
        "Potong rambut premium",
        "Cukur & styling jenggot",
        "Keramas & treatment",
        "Cuci muka",
        "Aplikasi moisturizer",
        "Konsultasi rambut"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 bg-primary-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 border-2 border-accent-500/30 rounded-full text-accent-500 font-bold text-xs sm:text-sm mb-6 shadow-lg shadow-accent-500/20">
            💰 HARGA TRANSPARAN
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6 px-4">
            DAFTAR{' '}
            <span className="text-accent-500 relative">
              HARGA
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent-500 rounded-full"></div>
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Harga jelas dan transparan untuk semua layanan. Tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-primary-900 to-primary-800 rounded-2xl border-2 border-accent-500/30 hover:border-accent-500 shadow-2xl hover:shadow-accent-500/20 transition-all duration-300 overflow-hidden group"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500/5 rounded-bl-full group-hover:bg-accent-500/10 transition-all duration-300"></div>
              
              <div className="p-6 sm:p-8 md:p-10">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <div className="flex items-baseline justify-center mb-3">
                    <span className="text-3xl sm:text-4xl font-bold text-accent-500">Rp</span>
                    <span className="text-5xl sm:text-6xl font-bold text-accent-500 ml-1">{service.price}</span>
                  </div>
                  <div className="inline-flex items-center px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full">
                    <span className="text-sm sm:text-base text-accent-500 font-semibold">⏱️ {service.duration}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="https://wa.me/62851663484874?text=Halo%2C%20saya%20mau%20booking%20haircut%20dong!%20%E2%9C%82%EF%B8%8F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block py-4 px-6 font-bold text-center text-base sm:text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-accent-500 text-primary-900 hover:bg-accent-400 shadow-lg shadow-accent-500/30"
                >
                  📱 Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-accent-500/30 shadow-2xl max-w-5xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
              Informasi <span className="text-accent-500">Tambahan</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center md:text-left bg-primary-900/50 rounded-xl p-6 border border-accent-500/20 hover:border-accent-500/40 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-500/20 rounded-full mb-4">
                  <span className="text-2xl">🕒</span>
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">Jam Operasional</h4>
                <div className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-1">
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span className="text-white font-semibold">13.00–23.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Senin - Kamis</span>
                    <span className="text-white font-semibold">13.00–23.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-accent-500 font-semibold">Jumat</span>
                    <span className="text-accent-500 font-semibold">09.00–23.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span className="text-white font-semibold">13.00–23.00</span>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left bg-primary-900/50 rounded-xl p-6 border border-accent-500/20 hover:border-accent-500/40 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-500/20 rounded-full mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">Lokasi</h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">
                  Barbershop rumahan<br/>
                  Suasana nyaman & pribadi
                </p>
                <a 
                  href="https://maps.app.goo.gl/RLAar8S6kAJQc7TT9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-500 font-semibold hover:text-accent-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Lihat di Google Maps
                </a>
              </div>
              <div className="text-center md:text-left bg-primary-900/50 rounded-xl p-6 border border-accent-500/20 hover:border-accent-500/40 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-500/20 rounded-full mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h4 className="font-bold text-white mb-3 text-lg">Pembayaran</h4>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  ✓ Tunai<br/>
                  ✓ Transfer Bank<br/>
                  ✓ <span className="text-accent-500 font-semibold">E-Wallet & QRIS</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
