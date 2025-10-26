import { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, Scissors } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Layanan', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Harga', href: '#pricing' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-primary-900/98 backdrop-blur-2xl border-b border-accent-500/40 shadow-2xl' 
        : 'bg-primary-800/95 backdrop-blur-xl border-b border-accent-500/20'
    }`}>
      {/* Top Bar - Desktop Only */}
      <div className="hidden xl:block bg-primary-900/60 backdrop-blur-md border-b border-accent-500/10">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-3.5 h-3.5 text-accent-500" />
                <span className="font-medium">Buka: <span className="text-white">Setiap Hari 13.00-23.00</span></span>
              </div>
              <div className="w-px h-4 bg-accent-500/30"></div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Scissors className="w-3.5 h-3.5 text-accent-500" />
                <span className="font-medium">Barbershop <span className="text-accent-500">Premium</span></span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+62851663484874" className="flex items-center space-x-2 text-gray-300 hover:text-accent-500 transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span className="font-semibold">0851-6638-4874</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16 sm:h-18' : 'h-18 sm:h-20'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <a href="#home" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <div className={`bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shadow-lg shadow-accent-500/30 group-hover:shadow-accent-500/50 transition-all duration-300 border-2 border-accent-400/50 ${
                  scrolled ? 'w-11 h-11' : 'w-12 h-12 sm:w-14 sm:h-14'
                }`}>
                  <span className={`text-primary-900 font-black ${scrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'}`}>BC</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-primary-900 animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-display font-black text-white tracking-tight leading-none transition-all duration-300 ${
                  scrolled ? 'text-lg' : 'text-xl'
                }`}>
                  <span className="text-accent-500">Barber</span>Cho
                </h1>
                <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Premium Grooming</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="relative px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-accent-500/0 group-hover:bg-accent-500/10 rounded-lg transition-all duration-300"></span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-4/5 rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://wa.me/62851663484874?text=Halo%2C%20saya%20mau%20booking%20haircut%20dong!%20%E2%9C%82%EF%B8%8F"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 font-black px-6 xl:px-8 py-2.5 xl:py-3 rounded-lg hover:from-accent-400 hover:to-accent-500 transition-all duration-300 shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 hover:scale-105 border-2 border-accent-400/50"
            >
              <span className="relative z-10 flex items-center space-x-2 text-xs xl:text-sm uppercase tracking-wider">
                <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                <span>Book Now</span>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2 text-white hover:text-accent-500 transition-all duration-300"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute left-0 right-0 top-full bg-primary-900 backdrop-blur-3xl border-b-2 border-accent-500/40 shadow-2xl overflow-hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-6 bg-gradient-to-b from-primary-900 via-primary-900 to-primary-800">
          {/* Mobile Quick Info */}
          <div className="mb-6 space-y-3">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-800 to-primary-800/95 border-2 border-accent-500/40 rounded-xl shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Phone className="w-5 h-5 text-primary-900" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Hubungi Kami</div>
                  <div className="text-sm font-bold text-white">0851-6638-4874</div>
                </div>
              </div>
              <a
                href="https://wa.me/62851663484874?text=Halo%2C%20saya%20mau%20booking%20haircut%20dong!%20%E2%9C%82%EF%B8%8F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 font-bold px-4 py-2 rounded-lg text-sm hover:from-accent-400 hover:to-accent-500 transition-all duration-300 shadow-lg"
              >
                Chat
              </a>
            </div>
            
            <div className="flex items-center space-x-2 px-4 py-3 bg-primary-800 border-2 border-accent-500/30 rounded-xl shadow-lg">
              <Clock className="w-4 h-4 text-accent-500" />
              <span className="text-xs text-gray-300">Buka Setiap Hari: <span className="text-white font-semibold">13.00-23.00</span></span>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center justify-between px-4 py-4 bg-primary-800 hover:bg-primary-700 border-2 border-accent-500/30 hover:border-accent-500/60 rounded-xl transition-all duration-300 shadow-md"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-sm font-bold uppercase text-white group-hover:text-accent-500 transition-colors">{item.label}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
                  <svg className="w-4 h-4 text-accent-500 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-6 p-5 bg-gradient-to-br from-primary-800 via-primary-800 to-primary-700 border-2 border-accent-500/40 rounded-2xl shadow-xl">
            <h3 className="text-sm font-bold text-white mb-2">Siap untuk Tampilan Baru?</h3>
            <p className="text-xs text-gray-300 mb-4">Booking sekarang dan dapatkan layanan terbaik!</p>
            <a
              href="https://wa.me/62851663484874?text=Halo%2C%20saya%20mau%20booking%20haircut%20dong!%20%E2%9C%82%EF%B8%8F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-accent-500 to-accent-600 text-primary-900 font-black py-3.5 rounded-lg hover:from-accent-400 hover:to-accent-500 transition-all duration-300 shadow-lg text-sm uppercase tracking-wider hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Book Sekarang</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
