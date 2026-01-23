import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, User, CheckCircle, Sparkles } from 'lucide-react';

const WhatsAppForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    selectedServices: [],
    message: '',
  });

  const services = [
    'Ventanas de Aluminio',
    'Mamparas de Baño',
    'Cierre de Terrazas',
    'Vitrinas Comerciales',
    'Termopaneles',
    'Espejos',
  ];

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('Por favor ingresa tu nombre');
      return;
    }

    if (formData.selectedServices.length === 0) {
      alert('Por favor selecciona al menos un servicio');
      return;
    }

    // Construir mensaje para WhatsApp
    const servicesText = formData.selectedServices.join(', ');
    const detailsText = formData.message.trim() || 'Sin detalles adicionales';
    
    const whatsappMessage = `Hola ESCOVIDRIO, soy *${formData.name}*.%0A%0AMe interesa cotizar:%0A📋 ${servicesText}%0A%0ADetalles:%0A${detailsText}`;
    
    const whatsappURL = `https://wa.me/56953215308?text=${whatsappMessage}`;

    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');

    // Reset form
    setFormData({
      name: '',
      selectedServices: [],
      message: '',
    });
  };

  return (
    <section id="cotizar" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 132, 255, 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 glow-pulse"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Cotización Rápida y Gratuita
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Solicita tu <span className="gradient-text">Cotización</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Completa el formulario y te contactaremos vía WhatsApp de inmediato
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 md:p-10 bg-slate-800/50 border-slate-700"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Input */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-3">
                <User className="w-5 h-5 text-primary" />
                Tu Nombre
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ej: Juan Pérez"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>

            {/* Service Selection - Chips */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-4">
                <CheckCircle className="w-5 h-5 text-primary" />
                Servicios de Interés
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {services.map((service) => {
                  const isSelected = formData.selectedServices.includes(service);
                  return (
                    <motion.button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        isSelected
                          ? 'bg-primary text-white shadow-glow border-2 border-primary'
                          : 'bg-slate-700/50 text-gray-300 border-2 border-slate-600 hover:border-primary/50'
                      }`}
                    >
                      {isSelected && (
                        <CheckCircle className="w-4 h-4 inline mr-1" />
                      )}
                      {service}
                    </motion.button>
                  );
                })}
              </div>
              <p className="text-gray-400 text-sm mt-2">
                * Selecciona uno o más servicios
              </p>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="flex items-center gap-2 text-white font-semibold mb-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                Detalles del Proyecto (Opcional)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntanos más sobre tu proyecto: medidas, colores, plazos, etc."
                rows="4"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-glow py-4 text-lg flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Enviar a WhatsApp
            </motion.button>

            {/* Privacy Notice */}
            <p className="text-center text-gray-400 text-sm">
              🔒 Tu información está segura. Solo la usaremos para contactarte sobre tu cotización.
            </p>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-300 mb-4">¿Prefieres llamar directamente?</p>
          <a
            href="tel:+56953215308"
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:underline"
          >
            Click aquí +56 9 5321 5308
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppForm;
