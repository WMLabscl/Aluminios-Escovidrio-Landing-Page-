import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Clock } from 'lucide-react';
import { useState } from 'react';
import LegalModals from './LegalModals';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'América 01135, San Bernardo, Chile',
      link: 'https://www.google.com/maps/search/?api=1&query=América+01135,+San+Bernardo,+Chile',
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
      content: 'aluminios_escovidrio@live.cl',
      link: 'mailto:aluminios_escovidrio@live.cl',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
              src="/Imagenes/logo escovidrio solo ventana.webp" 
              alt="Escovidrio Logo" 
              className="w-12 h-12 object-contain"
            />
              <div>
                <span className="text-xl font-bold gradient-text block">ESCOVIDRIO</span>
                <span className="text-xs text-text-gray">Vidrio & Aluminio</span>
              </div>
            </div>
            <p className="text-text-gray mb-6 leading-relaxed">
              Soluciones profesionales en vidrio y aluminio para transformar tus espacios.
            </p>
            {/* ... resto del código anterior ... */}
            <div className="flex gap-4">
              {/* Botón de Facebook */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.facebook.com/aluminiosraes?locale=es_LA" // <--- AQUÍ PUSE TU LINK
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </motion.a>

              {/* Botón de Instagram */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/aluminiosescovidrio?igsh=d2t0YjJ0aW9md2N4" // <--- AQUÍ PUSE TU LINK
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </motion.a>
            </div>
            {/* ... resto del código ... */}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <div className="pt-6 sm:pt-8 border-t border-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
            <p className="text-text-gray text-xs sm:text-sm">
              © {currentYear} ESCOVIDRIO. Todos los derechos reservados.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
              <button 
                onClick={() => setIsTermsOpen(true)}
                className="text-text-gray hover:text-primary transition-colors cursor-pointer"
              >
                Términos y Condiciones
              </button>
              <button 
                onClick={() => setIsPrivacyOpen(true)}
                className="text-text-gray hover:text-primary transition-colors cursor-pointer"
              >
                Política de Privacidad
              </button>
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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-glow-lg z-50 hover:bg-green-600 transition-colors"
      >
        <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      </motion.a>

      {/* Legal Modals */}
      <LegalModals 
        isTermsOpen={isTermsOpen}
        isPrivacyOpen={isPrivacyOpen}
        onCloseTerms={() => setIsTermsOpen(false)}
        onClosePrivacy={() => setIsPrivacyOpen(false)}
      />
    </footer>
  );
};

export default Footer;
