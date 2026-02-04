import { motion } from 'framer-motion';

const WindowCard = ({ children, title, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="relative w-full h-full min-h-[300px] rounded-2xl overflow-hidden cursor-pointer group shadow-xl bg-slate-800 border border-slate-700"
    >
      
      {/* --- CONTENIDO INTERNO (Lo que se ve al abrir) --- */}
      <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center z-0">
        {children}
      </div>

      {/* --- HOJA IZQUIERDA (Vidrio) --- */}
      <motion.div 
        className="absolute top-0 left-0 w-1/2 h-full z-10 flex flex-col"
        initial={{ x: 0 }}
        whileInView={{ x: "-100%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
      >
        {/* Marco de Aluminio */}
        <div className="w-full h-full bg-slate-100/10 backdrop-blur-md border-r-4 border-gray-400/50 relative overflow-hidden">
           {/* Reflejo del vidrio */}
           <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
           {/* Manilla (Handle) */}
           <div className="absolute top-1/2 right-2 w-1 h-12 bg-gray-300 rounded-full shadow-md transform -translate-y-1/2"></div>
        </div>
      </motion.div>

      {/* --- HOJA DERECHA (Vidrio) --- */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full z-10 flex flex-col"
        initial={{ x: 0 }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
      >
        {/* Marco de Aluminio */}
        <div className="w-full h-full bg-slate-100/10 backdrop-blur-md border-l-4 border-gray-400/50 relative overflow-hidden">
           {/* Reflejo del vidrio */}
           <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
           {/* Manilla (Handle) */}
           <div className="absolute top-1/2 left-2 w-1 h-12 bg-gray-300 rounded-full shadow-md transform -translate-y-1/2"></div>
        </div>
      </motion.div>

      {/* --- TÍTULO FLOTANTE (Encima del vidrio, desaparece al abrir) --- */}
      <motion.div 
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0, scale: 1.1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2 }}
      >
        <div className="bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/30">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            {title} <span className="text-xs text-primary">➜ Abrir</span>
          </h3>
        </div>
      </motion.div>

    </div>
  );
};

export default WindowCard;
