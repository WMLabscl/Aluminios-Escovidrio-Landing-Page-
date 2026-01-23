import { motion } from 'framer-motion';
import {
  Home,
  Bath,
  Building2,
  Store,
  Layers,
  Frame,
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Ventanas de Aluminio',
      description: 'Ventanas modernas con excelente aislamiento térmico y acústico',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      featured: true,
    },
    {
      icon: Bath,
      title: 'Mamparas de Baño',
      description: 'Diseños elegantes y funcionales para tu baño',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop',
      featured: false,
    },
    {
      icon: Building2,
      title: 'Cierre de Terrazas',
      description: 'Amplía tus espacios con cerramientos de alta calidad',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      featured: true,
    },
    {
      icon: Store,
      title: 'Vitrinas Comerciales',
      description: 'Soluciones profesionales para tu negocio',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
      featured: false,
    },
    {
      icon: Layers,
      title: 'Termopaneles',
      description: 'Eficiencia energética y confort para tu hogar',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop',
      featured: false,
    },
    {
      icon: Frame,
      title: 'Espejos a Medida',
      description: 'Espejos decorativos y funcionales personalizados',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop',
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Crystal Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-lg blur-2xl crystal-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-cyan-400/10 rounded-lg blur-2xl crystal-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-blue-400/10 rounded-lg blur-2xl crystal-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/10 rounded-lg blur-2xl crystal-float" style={{animationDelay: '6s'}}></div>
        
        {/* Grid Pattern (simulating glass/aluminum structure) */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(0, 132, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 132, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 shimmer-effect" style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 132, 255, 0.05), transparent)',
          backgroundSize: '200% 100%'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Soluciones Integrales en
            <span className="gradient-text"> Vidrio & Aluminio</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios profesionales para proyectos 
            residenciales y comerciales
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative glass-card p-6 hover:scale-[1.02] cursor-pointer overflow-hidden ${
                service.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA Link */}
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                  <span>Más información</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-2xl transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            ¿No encuentras lo que buscas? Realizamos proyectos personalizados
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#cotizar')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-glow px-8 py-3"
          >
            Consultar Proyecto Personalizado
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
