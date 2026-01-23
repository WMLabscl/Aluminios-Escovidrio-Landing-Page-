import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'América 01135, San Bernardo, Chile',
      link: 'https://maps.google.com/?q=América+01135+San+Bernardo+Chile',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+56 9 5321 5308',
      link: 'tel:+56953215308',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@escovidrio.cl',
      link: 'mailto:contacto@escovidrio.cl',
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lun - Vie: 9:00 - 18:00',
      link: null,
    },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Cotizar', href: '#cotizar' },
  ];

  return (
    <footer className="relative bg-white border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-lg"></div>
              <div>
                <span className="text-xl font-bold gradient-text block">ESCOVIDRIO</span>
                <span className="text-xs text-text-gray">Vidrio & Aluminio</span>
              </div>
            </div>
            <p className="text-text-gray mb-6 leading-relaxed">
              Soluciones profesionales en vidrio y aluminio para transformar tus espacios.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-text-gray hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-text-dark font-semibold text-sm mb-1">{info.title}</div>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-text-gray text-sm hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <div className="text-text-gray text-sm">{info.content}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-gray text-sm">
              © {currentYear} ESCOVIDRIO. Todos los derechos reservados.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm">
              <a href="#" className="text-text-gray hover:text-primary transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-text-gray hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <p className="text-text-gray">
                Desarrollado por{' '}
                <a 
                  href="https://wmlabs.cl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  WM Labs
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <motion.a
        href="https://wa.me/56953215308"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-glow-lg z-50 hover:bg-green-600 transition-colors"
      >
        <Phone className="w-8 h-8 text-white" />
      </motion.a>
    </footer>
  );
};

export default Footer;
