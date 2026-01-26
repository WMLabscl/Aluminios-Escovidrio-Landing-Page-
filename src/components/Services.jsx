import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Bath,
  Building2,
  Store,
  Layers,
  Frame,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import WindowCard from './WindowCard';

// Función para obtener una imagen aleatoria de la lista
const getRandomImage = (imagesArray) => {
  if (!imagesArray || imagesArray.length === 0) return '';
  const randomIndex = Math.floor(Math.random() * imagesArray.length);
  return imagesArray[randomIndex];
};

// Mapeo de imágenes por carpeta
const imagesByFolder = {
  corredera: [],
  Espejo: [],
  estructura_aluminio: [
    '482814474_17999231708743444_6055099387735897776_n.jpg',
    '497700101_2969279473250653_191982162148070328_n.jpg',
    '6v.jpg',
    'IMG-20220727-WA0006.jpg',
    'IMG-20250428-WA0050.jpg'
  ],
  mampara: [
    '495626474_1265685728898989_8758367974658501146_n.jpg',
    '495740747_1265685792232316_7688221330303923588_n.jpg',
    '496129138_2969279586583975_4528704696128898885_n.jpg',
    '496846536_2967061113472489_8928101082387728749_n.jpg'
  ],
  muro_cortina: [
    'IMG-20221228-WA0020.jpg',
    'IMG-20221228-WA0022.jpg'
  ],
  puerta_abatir: [
    '497452938_2967043973474203_3157446910009545092_n.jpg',
    '497730396_2967043830140884_4646310097903872390_n.jpg'
  ],
  puerta_protex: [],
  shower_door: [
    'Instalación Shower Door.webp',
    'ShowerDoor1.jpg'
  ],
  tabiqueria: [
    '20191221_023007.jpg',
    '20191221_023057.jpg',
    '482814474_17999231708743444_6055099387735897776_n.jpg',
    '496623623_2967043790140888_6311689693379842145_n.jpg',
    '497401962_2967061043472496_846511607164150840_n.jpg',
    '497700101_2969279473250653_191982162148070328_n.jpg',
    '497918652_2969279496583984_5746662825604783873_n.jpg',
    '6v.jpg',
    'IMG-20220727-WA0006.jpg',
    'IMG-20250428-WA0041.jpg',
    'IMG-20250428-WA0050.jpg'
  ],
  Termopaneles: [],
  terraza: [
    '20151020_125635.jpg',
    '497565253_2969279716583962_7857608246141149214_n.jpg',
    'Imagen050.jpg',
    'Imagen051.jpg'
  ],
  ventana: [
    '1488164429446.jpg',
    '20170327_143602.jpg',
    '20170327_143651.jpg',
    '480673499_2875036056008329_3566610964624800863_n.jpg',
    '482934038_17999231582743444_1105562867850966242_n.jpg',
    '483140585_17999231699743444_664604759368707324_n.jpg',
    '494785961_1257320593068836_3240275310418893189_n.jpg',
    '495864832_1265685802232315_8170720385946364809_n.jpg',
    '497659317_2967061120139155_5391164871097361164_n.jpg',
    '497723520_2967060880139179_6903255764604621073_n.jpg',
    '497737636_2969279609917306_7174726317726191180_n.jpg',
    '498015363_2971969636314970_2220696492859032201_n.jpg',
    '498120949_2969279336584000_9076649173241451573_n.jpg'
  ],
  Vitrinas: [
    '20210602_183049.jpg',
    '20210605_194914.jpg',
    '496253542_1265685882232307_8710265664608572397_n.jpg',
    'IMG-20250428-WA0063.jpg',
    'Screenshot_20200402-185007.jpg'
  ]
};

const Services = () => {
  const [randomImages, setRandomImages] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    {
      icon: Home,
      title: 'Ventanas',
      description: 'Ventanas modernas con excelente aislamiento térmico y acústico',
      folder: 'ventana'
    },
    {
      icon: Frame,
      title: 'Ventanas Correderas',
      description: 'Sistemas de ventanas correderas de alta calidad',
      folder: 'corredera'
    },
    {
      icon: Frame,
      title: 'Espejos',
      description: 'Espejos decorativos y funcionales personalizados',
      folder: 'Espejo'
    },
    {
      icon: Building2,
      title: 'Estructura de Aluminio',
      description: 'Estructuras resistentes y duraderas en aluminio',
      folder: 'estructura_aluminio'
    },
    {
      icon: Bath,
      title: 'Mamparas',
      description: 'Mamparas de baño elegantes y funcionales',
      folder: 'mampara'
    },
    {
      icon: Building2,
      title: 'Muro Cortina',
      description: 'Sistemas de fachadas de vidrio estructural',
      folder: 'muro_cortina'
    },
    {
      icon: Store,
      title: 'Puertas Abatibles',
      description: 'Puertas de aluminio de apertura abatible',
      folder: 'puerta_abatir'
    },
    {
      icon: Bath,
      title: 'Shower Door',
      description: 'Puertas de ducha en vidrio templado',
      folder: 'shower_door'
    },
    {
      icon: Building2,
      title: 'Tabiquería',
      description: 'Divisiones y tabiques en aluminio y vidrio',
      folder: 'tabiqueria'
    },
    {
      icon: Layers,
      title: 'Termopaneles',
      description: 'Eficiencia energética y confort para tu hogar',
      folder: 'Termopaneles'
    },
    {
      icon: Building2,
      title: 'Cierre de Terrazas',
      description: 'Amplía tus espacios con cerramientos de alta calidad',
      folder: 'terraza'
    },
    {
      icon: Store,
      title: 'Vitrinas Comerciales',
      description: 'Soluciones profesionales para tu negocio',
      folder: 'Vitrinas'
    },
  ];

  // Efecto para elegir las fotos al azar cuando carga la página
  useEffect(() => {
    const selectedImages = services.map(service => {
      const folderImages = imagesByFolder[service.folder] || [];
      if (folderImages.length === 0) return '';
      const randomImage = folderImages[Math.floor(Math.random() * folderImages.length)];
      return `/Imagenes/${service.folder}/${randomImage}`;
    });
    setRandomImages(selectedImages);
  }, []);

  // Funciones para el modal de galería
  const openGallery = (service) => {
    const images = imagesByFolder[service.folder] || [];
    if (images.length === 0) {
      // Si no hay imágenes, scroll a cotizar
      document.querySelector('#cotizar')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    setSelectedService(service);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedService(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedService) return;
    const images = imagesByFolder[selectedService.folder] || [];
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (!selectedService) return;
    const images = imagesByFolder[selectedService.folder] || [];
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Manejo de teclas de navegación
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedService) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeGallery();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedService, currentImageIndex]);

  return (
    <section id="services" className="py-24 relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* --- Animated Background Effects --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Crystal Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-lg blur-2xl crystal-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-cyan-400/10 rounded-lg blur-2xl crystal-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-blue-400/10 rounded-lg blur-2xl crystal-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/10 rounded-lg blur-2xl crystal-float" style={{animationDelay: '6s'}}></div>
        
        {/* Grid Pattern */}
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
        {/* --- Header --- */}
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
            Ofrecemos una amplia gama de servicios profesionales. Abre una ventana para ver nuestros trabajos reales.
          </p>
        </motion.div>

        {/* --- Bento Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px]"
            >
<WindowCard title={service.title} onClick={() => openGallery(service)}>
                
                {/* 1. IMAGEN DE FONDO (Aleatoria o patrón si no hay) */}
                {randomImages[index] ? (
                  <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ 
                      backgroundImage: `url('${randomImages[index]}')` 
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900">
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'linear-gradient(45deg, rgba(0, 132, 255, 0.1) 25%, transparent 25%, transparent 75%, rgba(0, 132, 255, 0.1) 75%, rgba(0, 132, 255, 0.1)), linear-gradient(45deg, rgba(0, 132, 255, 0.1) 25%, transparent 25%, transparent 75%, rgba(0, 132, 255, 0.1) 75%, rgba(0, 132, 255, 0.1))',
                      backgroundSize: '60px 60px',
                      backgroundPosition: '0 0, 30px 30px'
                    }}></div>
                  </div>
                )}

                {/* 2. OVERLAY OSCURO (Para leer el texto) */}
                <div className="absolute inset-0 bg-slate-900/70 group-hover:bg-slate-900/60 transition-colors duration-300"></div>

                {/* 3. CONTENIDO (Icono y Texto) */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-2 py-3 sm:p-4 md:p-6">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary" />
                  </div>
                  
                  <h4 className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-1 sm:mb-2 md:mb-3 lg:mb-4 drop-shadow-md leading-tight">
                    {service.title}
                  </h4>
                  
                  <p className="hidden sm:block text-gray-200 text-xs md:text-sm lg:text-base leading-relaxed mb-2 md:mb-4 lg:mb-6 drop-shadow-sm max-w-xs mx-auto">
                    {service.description}
                  </p>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openGallery(service);
                    }}
                    className="text-primary text-[10px] sm:text-xs md:text-sm font-bold hover:text-white hover:underline flex items-center gap-1 mx-auto transition-colors"
                  >
                    {imagesByFolder[service.folder]?.length > 0 
                      ? <span className="hidden sm:inline">Ver Galería →</span>
                      : <span className="hidden sm:inline">Cotizar →</span>}
                    {imagesByFolder[service.folder]?.length > 0 
                      ? <span className="sm:hidden">Ver →</span>
                      : <span className="sm:hidden">Cotizar →</span>}
                  </button>
                </div>

              </WindowCard>
            </motion.div>
          ))}
        </div>

        {/* --- Modal de Galería --- */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeGallery}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            >
              {/* Botón cerrar */}
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 z-50 text-white hover:text-primary transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Título del servicio */}
              <div className="absolute top-4 left-4 z-50">
                <h3 className="text-white text-2xl font-bold">{selectedService.title}</h3>
                <p className="text-gray-400 text-sm">
                  {currentImageIndex + 1} / {imagesByFolder[selectedService.folder]?.length || 0}
                </p>
              </div>

              {/* Contenedor de imagen */}
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
              >
                {/* Botón anterior */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                {/* Imagen */}
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  src={`/Imagenes/${selectedService.folder}/${imagesByFolder[selectedService.folder]?.[currentImageIndex]}`}
                  alt={`${selectedService.title} - ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />

                {/* Botón siguiente */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </motion.div>

              {/* Thumbnails */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto pb-2 px-4">
                {imagesByFolder[selectedService.folder]?.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-primary scale-110'
                        : 'border-white/30 hover:border-white/60'
                    }`}
                  >
                    <img
                      src={`/Imagenes/${selectedService.folder}/${image}`}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Bottom CTA --- */}
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