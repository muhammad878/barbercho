import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ibra Him",
      role: "Pelanggan",
      rating: 5,
      text: "Hey guys, aq ada tempat cukur bagus nih pelayanan sangat baik ramah dan tempat bagus dan nyaman, rekomended banget nih buat kaum muda², pokoknya memuaskan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Ahmad Fariqul Anam",
      role: "Pelanggan",
      rating: 5,
      text: "Tempat nyaman. Pelayanan ramah, humble, memperhatikan kenyamanan customer. Mantap 👍🏻",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Raffi Hardiansyah",
      role: "Pelanggan",
      rating: 5,
      text: "Hayy adaa tempat potong rambut baru nihh, tempatnya nyaman, pelayanannya juga sangat ramah juga seru sangat recomen",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 4,
      name: "Dwi Nugroho",
      role: "Pelanggan",
      rating: 5,
      text: "Tempat nyaman, harga terjangkau free wifi free kopi, request sesuai keinginanmu, sangat rekomendasi gays 🤘",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 5,
      name: "zhenn",
      role: "Pelanggan",
      rating: 5,
      text: "hidden gem, kualitas cukur tidak usah ditanyakan lagi, kapster ramah enak diajak omong, free wifi free kopi",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 6,
      name: "Fahri Nurul A'la",
      role: "Pelanggan",
      rating: 5,
      text: "Tempatnya bagus, kualitasnya oke loh pelayanannya bagus dikasi rekomendasi bagaimana ngurus rambut pokoknya okelah, ada kopi gratis",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 7,
      name: "Naufal Putra",
      role: "Pelanggan",
      rating: 5,
      text: "topp tempat potong paling keren di jamin keren cukup datang dan buktikan langsung langsung suka",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 8,
      name: "Nor Rofii",
      role: "Pelanggan",
      rating: 5,
      text: "Tempatnya bagus nyaman, yang nyukur ramah orangnya",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 9,
      name: "Zexxo Pro",
      role: "Pelanggan",
      rating: 5,
      text: "Intinya rekomendasi banget potong rambut di sini👍😁, pelayannya juga ramah dan asik",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-primary-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-pattern opacity-[0.03]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 border-2 border-accent-500/30 rounded-full text-accent-500 font-bold text-xs sm:text-sm mb-6 shadow-lg shadow-accent-500/20">
            ⭐ ULASAN PELANGGAN
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-6 px-4">
            APA KATA{' '}
            <span className="text-accent-500 relative">
              PELANGGAN KAMI
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent-500 rounded-full"></div>
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Jangan hanya percaya kata-kata kami. Ini testimoni asli dari pelanggan yang puas dengan layanan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-gradient-to-b from-primary-900 to-primary-800 border-2 border-accent-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-accent-500/30 hover:border-accent-500 transition-all duration-300 relative hover:-translate-y-1 flex flex-col"
            >
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-accent-500/20 group-hover:text-accent-500/40 transition-colors" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-accent-500 fill-accent-500" />
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center pt-4 border-t border-accent-500/20">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4 border-2 border-accent-500/30"
                />
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-primary-900 to-primary-800 border-2 border-accent-500/30 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-accent-500/30 transition-all">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="p-4 bg-primary-800/50 rounded-xl border border-accent-500/20">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-accent-500 mb-2">500+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-semibold">Pelanggan Puas</div>
            </div>
            <div className="p-4 bg-primary-800/50 rounded-xl border border-accent-500/20">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-accent-500 mb-2">2+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-semibold">Tahun Pengalaman</div>
            </div>
            <div className="p-4 bg-primary-800/50 rounded-xl border border-accent-500/20">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-accent-500 mb-2">1000+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-semibold">Potong Rambut</div>
            </div>
            <div className="p-4 bg-primary-800/50 rounded-xl border border-accent-500/20">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-accent-500 mb-2">5.0</div>
              <div className="text-xs sm:text-sm text-gray-300 font-semibold">Rating Rata-rata</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 rounded-2xl p-8 sm:p-12 border-2 border-accent-500/30 shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Siap Merasakan <span className="text-accent-500">Layanan Kami?</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
            Bergabunglah dengan ratusan pelanggan yang puas dan booking sekarang!
          </p>
          <a 
            href="https://wa.me/62851663484874?text=Halo%2C%20saya%20mau%20booking%20haircut%20dong!%20%E2%9C%82%EF%B8%8F" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 rounded-lg text-base sm:text-lg font-bold text-primary-900 hover:bg-accent-400 transition-all duration-300 shadow-xl hover:shadow-accent-500/50 hover:scale-105"
          >
            📱 Booking Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
