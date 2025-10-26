import { MapPin, Clock, Instagram } from 'lucide-react';

const locations = [
  {
    name: 'BarberCho',
    address: 'Barbershop rumahan dengan suasana nyaman',
    phone: '0851-6638-4874',
    link: 'https://maps.app.goo.gl/RLAar8S6kAJQc7TT9'
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 border-t border-accent-500/30">
      <div className="container-custom py-20">
        <div className="mb-16">
          {locations.map((location, index) => (
            <div key={index} className="max-w-2xl">
              <h3 className="text-2xl font-heading font-bold text-accent-500 mb-6">
                {location.name}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-accent-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">{location.address}</p>
                    <a 
                      href={location.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-500 text-sm hover:text-accent-400 transition-colors inline-flex items-center gap-1 mt-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      Lihat di Google Maps
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-accent-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href={`tel:+62${location.phone.replace(/[^0-9]/g, '')}`} className="text-gray-300 hover:text-accent-500 transition-colors">
                    {location.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-accent-500/30 pt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-white">About BarberCho</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Premium barbershop and salon combining traditional barbering with modern salon expertise.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="text-gray-300 text-sm hover:text-accent-500 transition-colors duration-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#artists" className="text-gray-300 text-sm hover:text-accent-500 transition-colors duration-300">
                    Hair Artists
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-gray-300 text-sm hover:text-accent-500 transition-colors duration-300">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 text-sm hover:text-accent-500 transition-colors duration-300">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-white">Jam Buka</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <Clock size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  <div className="text-sm space-y-1">
                    <p className="text-gray-300">Minggu: 13.00–23.00</p>
                    <p className="text-gray-300">Senin - Kamis: 13.00–23.00</p>
                    <p className="text-accent-500 font-semibold">Jumat: 09.00–23.00</p>
                    <p className="text-gray-300">Sabtu: 13.00–23.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-white">Follow Us</h3>
              <a
                href="https://www.instagram.com/barbercho.ind?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-pink-500/20 to-purple-600/20 border-2 border-accent-500/30 rounded-xl hover:border-accent-500 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <Instagram size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold group-hover:text-accent-500 transition-colors">@barbercho.ind</p>
                  <p className="text-gray-400 text-xs">Follow untuk update</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-500/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 BarberCho. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-accent-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-accent-500 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
