import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Barbershop Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-primary-900/90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-transparent to-primary-900/80"></div>
      
      {/* Pattern Overlay - Subtle */}
      <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
      
      {/* Decorative Gold Accents */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-36 h-36 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-center min-h-[90vh] sm:min-h-[85vh] py-12">
          <div className="w-full max-w-5xl text-center space-y-8 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-4 sm:space-y-6">
                  {/* Badge with Stars */}
                  <div className="inline-flex items-center space-x-2 sm:space-x-3 animate-pulse">
                    <Star className="w-4 h-4 sm:w-6 sm:h-6 text-accent-500 fill-accent-500" />
                    <div className="px-3 py-2 sm:px-6 sm:py-3 bg-accent-500/20 backdrop-blur-md border-2 border-accent-500/40 text-accent-500 font-bold text-xs sm:text-sm tracking-wider shadow-lg shadow-accent-500/20">
                      BARBERSHOP TERBAIK
                    </div>
                    <Star className="w-4 h-4 sm:w-6 sm:h-6 text-accent-500 fill-accent-500" />
                  </div>
                  
                  {/* Main Heading with Star Decorations */}
                  <div className="relative px-4 sm:px-0">
                    <div className="absolute -left-6 top-0 hidden lg:block">
                      <Star className="w-6 h-6 text-accent-500 fill-accent-500 opacity-60" />
                    </div>
                    <div className="absolute -right-6 top-0 hidden lg:block">
                      <Star className="w-6 h-6 text-accent-500 fill-accent-500 opacity-60" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight max-w-4xl mx-auto text-center">
                      <span className="text-accent-500 drop-shadow-2xl text-3xl sm:text-5xl md:text-6xl lg:text-8xl">PREMIUM</span>
                      <br />
                      <span className="text-accent-500 text-5xl sm:text-6xl md:text-7xl lg:text-9xl drop-shadow-2xl" style={{textShadow: '0 0 40px rgba(212, 175, 55, 0.5)'}}>
                        BarberCho
                      </span>
                      <br />
                      <span className="text-accent-500 drop-shadow-2xl text-3xl sm:text-5xl md:text-6xl lg:text-8xl">BARBERSHOP</span>
                    </h1>
                    <div className="absolute -left-6 bottom-0 hidden lg:block">
                      <Star className="w-6 h-6 text-accent-500 fill-accent-500 opacity-60" />
                    </div>
                    <div className="absolute -right-6 bottom-0 hidden lg:block">
                      <Star className="w-6 h-6 text-accent-500 fill-accent-500 opacity-60" />
                    </div>
                  </div>
                  
                  {/* Subtitle */}
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium text-center drop-shadow-lg px-4 mb-8 sm:mb-0">
                    Layanan grooming profesional untuk penampilan terbaik Anda
                  </p>
                </div>
                
                {/* Service Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 max-w-4xl mx-auto px-4">
                  <div className="group text-center p-4 sm:p-5 bg-black/40 backdrop-blur-md rounded-xl border-2 border-accent-500/30 hover:border-accent-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-500/30">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/src/assets/icons/haircut.svg" alt="Potong Rambut" className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-500 transition-colors leading-tight">Potong Rambut</div>
                  </div>
                  <div className="group text-center p-4 sm:p-5 bg-black/40 backdrop-blur-md rounded-xl border-2 border-accent-500/30 hover:border-accent-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-500/30">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/src/assets/icons/styling.svg" alt="Styling" className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-500 transition-colors leading-tight">Styling</div>
                  </div>
                  <div className="group text-center p-4 sm:p-5 bg-black/40 backdrop-blur-md rounded-xl border-2 border-accent-500/30 hover:border-accent-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-500/30">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/src/assets/icons/beard.svg" alt="Jenggot" className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-500 transition-colors leading-tight">Jenggot</div>
                  </div>
                  <div className="group text-center p-4 sm:p-5 bg-black/40 backdrop-blur-md rounded-xl border-2 border-accent-500/30 hover:border-accent-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-500/30">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <img src="/src/assets/icons/grooming.svg" alt="Perawatan" className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-500 transition-colors leading-tight">Perawatan</div>
                  </div>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-4">
                <a 
                  href="https://wa.me/62851663484874?text=Halo%2C%20saya%20mau%20booking%20haircut%20dong!%20%E2%9C%82%EF%B8%8F" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-accent-500 text-primary-900 font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-accent-400 hover:shadow-2xl hover:shadow-accent-500/50 hover:scale-105 focus:outline-none border-2 border-accent-600 rounded-sm"
                >
                  <span className="flex items-center">
                    <img src="/src/assets/icons/whatsapp.svg" alt="WhatsApp" className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    <span className="whitespace-nowrap">Pesan via WhatsApp</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                <a 
                  href="#services"
                  className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 border-2 border-accent-500/50 bg-black/30 backdrop-blur-md text-accent-500 font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:bg-accent-500 hover:text-primary-900 hover:border-accent-500 focus:outline-none rounded-sm"
                >
                  <span className="flex items-center">
                    Layanan Kami
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-8 pt-6 sm:pt-8 border-t border-accent-500/30 px-4">
                <div className="flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-accent-500/30">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent-500 fill-accent-500" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">Rating 5.0</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-accent-500/30">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-200 whitespace-nowrap">09:00 - 21:00</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md px-3 sm:px-4 py-2 rounded-full border border-accent-500/30">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-200">Jakarta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
