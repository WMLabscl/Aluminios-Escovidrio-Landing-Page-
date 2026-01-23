import { motion } from 'framer-motion';
import { ArrowRight, Shield, Star, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToCotizar = () => {
    document.querySelector('#cotizar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { icon: Star, value: '500+', label: 'Instalaciones' },
    { icon: Shield, value: '15+', label: 'Años' },
    { icon: TrendingUp, value: '100%', label: 'Satisfacción' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Imagenes/Proceso.webp"
          alt="Proceso de instalación ESCOVIDRIO"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-light-bg via-blue-50/90 to-light-bg"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-6"
          >
            Soluciones Profesionales desde 2010
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforma tus Espacios con
            <br />
            <span className="gradient-text">Vidrio & Aluminio</span>
          </h1>

          <p className="text-lg md:text-xl text-text-black max-w-3xl mx-auto mb-10 leading-relaxed">
            Diseños modernos y fabricación de alta calidad en San Bernardo.
            Desde ventanas hasta proyectos comerciales completos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToCotizar}
              className="btn-glow px-8 py-4 text-lg flex items-center gap-2"
            >
              Solicitar Cotización
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+56953215308"
              className="px-8 py-4 text-lg border-2 border-primary/30 rounded-full hover:border-primary hover:bg-primary/5 transition-all font-semibold text-text-dark"
            >
              Llamar Ahora
            </motion.a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-text-gray text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;
