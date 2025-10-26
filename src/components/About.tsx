import { Award, Users, Scissors, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,000+', label: 'Happy Clients' },
  { icon: Scissors, value: '15+', label: 'Expert Stylists' },
  { icon: Award, value: '8+', label: 'Years Experience' },
  { icon: TrendingUp, value: '20+', label: 'Locations' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-primary-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center px-4 py-2 bg-accent-500/20 border border-accent-500/30 rounded-full text-accent-500 font-bold text-sm mb-6">
            <Award className="w-4 h-4 mr-2" />
            OUR STORY
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
            THE <span className="text-gradient">BarberCho</span> JOURNEY
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Where tradition meets excellence, and every cut tells a story
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Story */}
          <div className="space-y-8">
            {/* Story Cards */}
            <div className="space-y-6">
              <div className="bg-primary-800/60 backdrop-blur-sm border-2 border-accent-500/20 rounded-2xl p-6 hover:border-accent-500/50 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Award className="text-primary-900" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Premium Excellence</h3>
                    <p className="text-gray-300 leading-relaxed">
                      BarberCho is more than just a barbershop – it's a premium grooming destination where traditional barbering meets modern salon expertise. We combine the best of both worlds.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-800/60 backdrop-blur-sm border-2 border-accent-500/20 rounded-2xl p-6 hover:border-accent-500/50 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Scissors className="text-primary-900" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Skilled Artists</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Our team of skilled hair artists is passionate about helping you discover and express your unique style with precision and creativity.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-800/60 backdrop-blur-sm border-2 border-accent-500/20 rounded-2xl p-6 hover:border-accent-500/50 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <TrendingUp className="text-primary-900" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Always Evolving</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We use only premium products and stay updated with the latest techniques to ensure you always leave looking and feeling your best.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center px-10 py-4 bg-accent-500 text-primary-900 font-bold hover:bg-accent-400 transition-all duration-300 shadow-lg hover:shadow-accent-500/50 hover:scale-105 group"
            >
              <span className="group-hover:translate-x-1 transition-transform inline-block">Get in Touch</span>
            </a>
          </div>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-800 to-primary-900 border-2 border-accent-500/30 rounded-3xl p-8 text-center hover:shadow-accent-500/30 transition-all duration-500 hover:-translate-y-2 hover:border-accent-500 animate-on-scroll group"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="text-primary-900" size={32} />
                  </div>
                  <div className="text-4xl font-heading font-bold text-accent-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 border-2 border-accent-500/30 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          <div className="relative">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent mx-auto mb-6"></div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              "Confidence Starts Here"
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At BarberCho, we believe that great grooming is the foundation of confidence. 
              Every cut, every style, every detail matters in helping you look and feel your absolute best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
