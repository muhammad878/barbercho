import { Phone, MapPin, MessageCircle, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 border-2 border-accent-500/30 rounded-full text-accent-500 font-bold text-xs sm:text-sm mb-6 shadow-lg shadow-accent-500/20">
            <MessageCircle className="w-4 h-4 mr-2" />
            HUBUNGI KAMI
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 text-white px-4">
            MARI <span className="text-gradient">TERHUBUNG</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Siap untuk booking? Hubungi kami via WhatsApp untuk booking langsung atau follow Instagram kami untuk update terbaru.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-primary-800 border-2 border-accent-500/30 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-display font-semibold mb-6 text-white">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone size={20} className="text-primary-900" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">Telepon & WhatsApp</h4>
                      <a href="tel:+62851663484874" className="text-gray-300 hover:text-accent-500 transition-colors block">
                        0851-6638-4874
                      </a>
                      <p className="text-xs text-gray-400 mt-1">Klik untuk menelpon</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Instagram size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">Instagram</h4>
                      <a 
                        href="https://www.instagram.com/barbercho.ind?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent-500 font-semibold hover:text-accent-400 transition-colors"
                      >
                        @barbercho.ind
                      </a>
                      <p className="text-xs text-gray-400 mt-1">Follow untuk update terbaru</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin size={20} className="text-primary-900" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white">Lokasi</h4>
                      <p className="text-gray-300">Barbershop rumahan</p>
                      <a 
                        href="https://maps.app.goo.gl/RLAar8S6kAJQc7TT9" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-accent-500 font-semibold hover:text-accent-400 transition-colors inline-flex items-center gap-1 mt-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        Lihat di Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-800 border-2 border-accent-500/30 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-display font-semibold mb-6 text-white">Jam Operasional</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-300">Minggu</span>
                    <span className="font-bold text-white">13.00–23.00</span>
                  </div>
                  <div className="h-px bg-accent-500/20"></div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-300">Senin</span>
                    <span className="font-bold text-white">13.00–23.00</span>
                  </div>
                  <div className="h-px bg-accent-500/20"></div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-300">Selasa</span>
                    <span className="font-bold text-white">13.00–23.00</span>
                  </div>
                  <div className="h-px bg-accent-500/20"></div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-300">Rabu</span>
                    <span className="font-bold text-white">13.00–23.00</span>
                  </div>
                  <div className="h-px bg-accent-500/20"></div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-300">Kamis</span>
                    <span className="font-bold text-white">13.00–23.00</span>
                  </div>
                  <div className="h-px bg-accent-500/20"></div>
                  <div className="flex items-center justify-between py-2 bg-accent-500/10 px-3 -mx-3 rounded-lg">
                    <span className="text-accent-500 font-semibold">Jumat</span>
                    <span className="font-bold text-accent-500">09.00–23.00</span>
                  </div>
                  <div className="h-px bg-accent-500/20"></div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-300">Sabtu</span>
                    <span className="font-bold text-white">13.00–23.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-8">
              <div className="bg-primary-800 border-2 border-accent-500/30 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-white">Aksi Cepat</h3>
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/62851663484874?text=Halo%2C%20saya%20mau%20booking%20haircut%20dong!%20%E2%9C%82%EF%B8%8F" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-accent-500/20 border-2 border-accent-500/30 rounded-xl hover:bg-accent-500/30 transition-all group hover:border-accent-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 mr-4 shadow-lg">
                      <MessageCircle size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white group-hover:text-accent-500">Booking via WhatsApp</h4>
                      <p className="text-gray-300 text-sm">Booking langsung & konsultasi</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.instagram.com/barbercho.ind?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-accent-500/20 border-2 border-accent-500/30 rounded-xl hover:bg-accent-500/30 transition-all group hover:border-accent-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 mr-4 shadow-lg">
                      <Instagram size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white group-hover:text-accent-500">Follow Instagram</h4>
                      <p className="text-gray-300 text-sm">Lihat karya & update terbaru</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+62851663484874" 
                    className="flex items-center p-4 bg-accent-500/20 border-2 border-accent-500/30 rounded-xl hover:bg-accent-500/30 transition-all group hover:border-accent-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 mr-4 shadow-lg">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white group-hover:text-accent-500">Telpon Langsung</h4>
                      <p className="text-gray-300 text-sm">0851-6638-4874</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-primary-800/60 border-2 border-accent-500/30 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-white">Kenapa Memilih Kami?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Barber profesional & berpengalaman</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Suasana rumah yang nyaman</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Jadwal fleksibel</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Pelayanan personal</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    <span className="text-gray-300">Harga terjangkau</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
