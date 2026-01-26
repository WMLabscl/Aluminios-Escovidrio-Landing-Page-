import { motion } from 'framer-motion';
import { Award, Heart, Users, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Experiencia',
      description: 'Más de 20 años transformando espacios',
    },
    {
      icon: Zap,
      title: 'Rapidez',
      description: 'Proyectos ejecutados en tiempo récord',
    },
    {
      icon: Heart,
      title: 'Calidad',
      description: 'Materiales premium y garantía',
    },
    {
      icon: Users,
      title: 'Confianza',
      description: 'Cientos de clientes satisfechos',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre Nosotros
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Líderes en Soluciones de
              <span className="gradient-text"> Vidrio & Aluminio</span>
            </h2>
            <p className="text-text-gray text-lg mb-6 leading-relaxed">
              En <span className="text-blue font-semibold">ESCOVIDRIO</span>, 
              llevamos más de una década creando soluciones innovadoras que combinan 
              funcionalidad, diseño y durabilidad.
            </p>
            <p className="text-text-gray text-lg mb-8 leading-relaxed">
              Ubicados en San Bernardo, atendemos a clientes residenciales y comerciales 
              con el compromiso de superar sus expectativas en cada proyecto. Nuestro equipo 
              de especialistas se encarga de todo, desde el diseño hasta la instalación.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-dark mb-1">{feature.title}</h3>
                    <p className="text-text-gray text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pb-12"
          >
            <div className="glass-card p-4 overflow-visible relative">
              <img
                src="/Imagenes/Cierre de negocio.webp"
                alt="Cierre de negocio ESCOVIDRIO"
                className="w-full h-[500px] object-cover rounded-xl"
              />
              {/* Floating Badge */}
              <motion.div
                
                className="absolute bottom-4 left-4 md:bottom-8 md:left-8 glass-card p-6 border-primary/50 shadow-xl z-10"
              >
                <div className="text-4xl font-bold text-primary">20+</div>
                <div className="text-text-dark font-semibold">Años de</div>
                <div className="text-text-gray">Experiencia</div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
