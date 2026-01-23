import { motion } from 'framer-motion';
import { Truck, MapPin, Wrench, CheckCircle, Shield } from 'lucide-react';

const CoverageSection = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Transporte Especializado Incluido',
      description: 'Flota propia equipada con caballetes de seguridad para vidrios y aluminios'
    },
    {
      icon: Wrench,
      title: 'Instalación Profesional en Terreno',
      description: 'Servicio llave en mano. Llegamos, instalamos y garantizamos el resultado'
    },
    {
      icon: MapPin,
      title: 'Cobertura Total en Santiago',
      description: 'San Bernardo, Buin, Santiago Centro, Las Condes y toda la Región Metropolitana'
    }
  ];

  const locations = [
    'San Bernardo',
    'Buin',
    'Santiago Centro',
    'Las Condes',
    'Providencia',
    'Ñuñoa',
    'La Florida',
    'Maipú',
    'Puente Alto',
    'Peñalolén'
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Map Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230084ff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-900/50 to-slate-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl crystal-float" style={{animationDelay: '0s'}}></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl crystal-float" style={{animationDelay: '3s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Cobertura Total
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white leading-tight">
              Nos Movemos por Ti.<br />
              <span className="gradient-text">Sin Complicaciones.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Olvídate de los traslados riesgosos y la logística. Contamos con 
              vehículos de carga especializados para llevar tu proyecto seguro 
              hasta la puerta de tu casa. Instalación profesional incluida.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <Shield className="w-8 h-8 text-primary mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-gray-400 text-sm">Instalación Segura</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <div className="text-2xl font-bold text-white">+50</div>
                <div className="text-gray-400 text-sm">Comunas Cubiertas</div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => document.querySelector('#cotizar')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-glow px-8 py-4 inline-flex items-center gap-2"
              >
                <Truck className="w-5 h-5" />
                Consultar Disponibilidad
              </button>
            </motion.div>

            {/* Free Notice */}
            <p className="text-gray-400 text-sm mt-4">
              Visita técnica y cotización sin costo
            </p>
          </motion.div>

          {/* Right: Benefits Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main Benefits */}
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-6 bg-slate-800/50 border-slate-700 hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Coverage Areas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="glass-card p-6 bg-slate-800/50 border-slate-700"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-white">Comunas que Atendemos</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {locations.map((location, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-sm text-gray-300"
                  >
                    {location}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-4">
                <CheckCircle className="w-4 h-4 inline mr-1 text-primary" />
                Y muchas más en toda la Región Metropolitana
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;
