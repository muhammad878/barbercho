import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

const artists = [
  {
    name: 'Ryan Kurniawan',
    specialty: 'Master Barber & Colorist',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Dimas Pratama',
    specialty: 'Hair Styling Expert',
    experience: '8+ Years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Andi Setiawan',
    specialty: 'Precision Cutting Specialist',
    experience: '7+ Years',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Fajar Ramadhan',
    specialty: 'Perm & Treatment Expert',
    experience: '9+ Years',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
];

export default function HairArtists() {
  return (
    <section id="artists" className="section-padding bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 border border-accent-500/30 rounded-full text-accent-500 font-bold text-sm mb-6">
            <Instagram className="w-4 h-4 mr-2" />
            OUR TEAM
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
            Our <span className="text-gradient">Hair Artists</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the talented professionals who bring your vision to life
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artists.map((artist, index) => (
                <div
                key={index}
                className="group bg-primary-800 border-2 border-accent-500/30 overflow-hidden hover:shadow-accent-500/50 hover:border-accent-500 transition-all duration-500 hover:-translate-y-2 animate-on-scroll rounded-2xl"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-display font-semibold mb-1 text-white">{artist.name}</h3>
                    <p className="text-accent-500 text-sm font-medium mb-1">{artist.specialty}</p>
                    <p className="text-white/80 text-sm mb-4">{artist.experience}</p>

                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                      <button className="px-4 py-2 bg-primary-500 rounded-full text-sm font-medium hover:bg-primary-600 transition-all duration-300 text-white">
                        Book Now
                      </button>
                      <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                        <Instagram size={18} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-4 mt-12">
            <button className="p-3 rounded-full bg-white border border-neutral-200 hover:border-primary-500 hover:bg-primary-500 transition-all duration-300 shadow-medium">
              <ChevronLeft size={24} className="text-neutral-700 hover:text-white" />
            </button>
            <button className="p-3 rounded-full bg-white border border-neutral-200 hover:border-primary-500 hover:bg-primary-500 transition-all duration-300 shadow-medium">
              <ChevronRight size={24} className="text-neutral-700 hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
