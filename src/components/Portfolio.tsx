import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioImages = [
    {
      id: 1,
      src: "/src/assets/Screenshot 2025-10-26 204654.png",
      title: "Classic Barbershop",
      description: "Suasana barbershop profesional dengan dekorasi menarik"
    },
    {
      id: 2,
      src: "/src/assets/Screenshot 2025-10-26 204711.png",
      title: "Fade Haircut Premium",
      description: "Potongan fade tajam dengan detail presisi"
    },
    {
      id: 3,
      src: "/src/assets/Screenshot 2025-10-26 204726.png",
      title: "Modern Pompadour",
      description: "Gaya pompadour dengan teknik profesional"
    },
    {
      id: 4,
      src: "/src/assets/Screenshot 2025-10-26 204741.png",
      title: "Textured Style",
      description: "Styling tekstur rambut dengan volume sempurna"
    },
    {
      id: 5,
      src: "/src/assets/Screenshot 2025-10-26 204758.png",
      title: "Korean Style Cut",
      description: "Potongan gaya Korea dengan volume natural"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % portfolioImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? portfolioImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-primary-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 border-2 border-accent-500/30 rounded-full text-accent-500 font-bold text-xs sm:text-sm mb-6 shadow-lg shadow-accent-500/20">
            📸 GALERI KAMI
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6 px-4">
            PORTFOLIO{' '}
            <span className="text-accent-500 relative">
              EXCELLENCE
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent-500 rounded-full"></div>
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Lihat kualitas karya kami. Setiap potongan, setiap gaya, setiap detail penting bagi kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl bg-primary-800 border-2 border-accent-500/30 shadow-2xl hover:shadow-accent-500/30 hover:border-accent-500 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-white/80">{image.description}</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg">👁️</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for image viewing */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X size={24} />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  src={portfolioImages[selectedImage].src}
                  alt={portfolioImages[selectedImage].title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-semibold mb-2">{portfolioImages[selectedImage].title}</h3>
                <p className="text-white/80">{portfolioImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 rounded-2xl p-8 sm:p-12 border-2 border-accent-500/30 shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Siap untuk <span className="text-accent-500">Gaya Baru?</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
            Dapatkan potongan rambut profesional seperti di portfolio kami!
          </p>
          <a 
            href="https://wa.me/62851663484874?text=Halo%2C%20saya%20mau%20booking%20haircut%20dong!%20%E2%9C%82%EF%B8%8F" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 rounded-lg text-base sm:text-lg font-bold text-primary-900 hover:bg-accent-400 transition-all duration-300 shadow-xl hover:shadow-accent-500/50 hover:scale-105"
          >
            📱 Pesan Janji Temu
          </a>
        </div>
      </div>
    </section>
  );
}
