import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone } from 'lucide-react';

const Map = () => {
  const address = "América 01135, San Bernardo, Chile";
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  
  const openInMaps = () => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section id="ubicacion" className="py-24 relative bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Encuéntranos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-text-dark">
            Nuestra <span className="gradient-text">Ubicación</span>
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            Visítanos en nuestro taller en San Bernardo, cerca del Supermercado Lider Lo Blanco
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden glass-card p-2"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.8479752286786!2d-70.70336742475944!3d-33.59159097337198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d0b8f8c2d4f5%3A0x1e3f3e3e3e3e3e3e!2sAm%C3%A9rica%2001135%2C%20San%20Bernardo%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2scl!4v1705974000000!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
              title="Ubicación ESCOVIDRIO"
            ></iframe>
          </motion.div>

          {/* Info Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-dark mb-2">Dirección</h3>
                  <p className="text-text-gray leading-relaxed">
                    América 01135<br />
                    San Bernardo<br />
                    Región Metropolitana, Chile
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-dark mb-2">Teléfono</h3>
                  <a 
                    href="tel:+56953215308"
                    className="text-primary font-semibold text-lg hover:underline"
                  >
                    +56 9 5321 5308
                  </a>
                  <p className="text-text-gray text-sm mt-1">
                    Lun - Vie: 9:00 - 18:00
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openInMaps}
              className="w-full btn-glow py-4 text-lg flex items-center justify-center gap-3"
            >
              <Navigation className="w-5 h-5" />
              Abrir en Google Maps
            </motion.button>

            {/* Additional Info */}
            <div className="text-center pt-4">
              <p className="text-text-gray text-sm">
                A solo minutos del centro de San Bernardo
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Map;
