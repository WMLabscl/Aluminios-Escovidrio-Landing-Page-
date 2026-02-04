import { motion } from 'framer-motion';
import { ArrowRight, Box, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-[#0f172a] overflow-hidden">
      {/* Fondo con superposición de ingeniería */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Imagenes/Proceso.webp" 
          alt="Instalación Punto Glass"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge Técnico */}
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-500 font-syncopate text-[10px] tracking-widest uppercase font-bold rounded">
              Línea Premium L25 · L20 · PVC
            </span>
          </div>

          {/* Título de Alto Impacto */}
          <h1 className="font-syncopate text-5xl md:text-7xl font-bold leading-none text-white mb-8 tracking-tighter">
            SOLUCIONES EN <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #f97316' }}>
              TERMOPANEL
            </span>
          </h1>

          {/* Listado de Especialidades (Lo que ellos hacen) */}
          <div className="grid grid-cols-2 gap-4 mb-12 text-slate-400 font-inter text-sm border-l-2 border-orange-500/30 pl-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              Ventanal Línea Premium
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              Shower Door a Medida
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              Cierres de PVC
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              Cristal Templado
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="flex flex-wrap gap-6">
            <button className="px-10 py-4 bg-orange-600 text-white font-syncopate text-[10px] font-bold uppercase tracking-widest hover:bg-orange-700 transition-all rounded-sm shadow-xl shadow-orange-900/40">
              Solicitar Presupuesto
            </button>
            <button className="group flex items-center gap-4 text-white font-syncopate text-[10px] font-bold uppercase tracking-widest border-b border-white/10 pb-2 hover:border-orange-500 transition-all">
              Ver Proyectos L25
              <ArrowRight className="w-4 h-4 text-orange-500 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Lado derecho: Visualización de Materiales */}
        <div className="relative hidden lg:block">
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-premium p-2 rounded-lg border border-white/10"
           >
              <img 
                src="/Imagenes/Instalación Ventana.webp" 
                alt="Termopanel Punto Glass" 
                className="rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay de Especificaciones */}
              <div className="absolute top-10 -right-10 bg-[#0f172a] border border-orange-500/50 p-6 rounded-lg shadow-2xl">
                <p className="text-orange-500 font-syncopate text-xs mb-1">Aislación Térmica</p>
                <p className="text-white font-bold text-2xl tracking-tighter">EFICIENCIA +100%</p>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;