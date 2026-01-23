import { useState, useEffect } from 'react';

const IntroAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // 1. Fase de Logo quieto
    // 2. Fase de Apertura (inicia a los 0.8s en CSS)
    
    // Desmontar el componente cuando termine todo (2.5s aprox)
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!isAnimating) return null;

  return (
    <div className="intro-container">
      {/* --- HOJA IZQUIERDA --- */}
      <div className="door-panel panel-left">
        <div className="aluminum-frame frame-right"></div> {/* Perfil Central */}
        <div className="glass-surface">
            <div className="glass-shine"></div>
        </div>
        <div className="door-handle handle-left"></div> {/* Manilla */}
      </div>

      {/* --- HOJA DERECHA --- */}
      <div className="door-panel panel-right">
        <div className="aluminum-frame frame-left"></div> {/* Perfil Central */}
        <div className="glass-surface">
            <div className="glass-shine"></div>
        </div>
        <div className="door-handle handle-right"></div> {/* Manilla */}
      </div>
      
      {/* --- RIELES (Decorativo arriba y abajo) --- */}
      <div className="rail rail-top"></div>
      <div className="rail rail-bottom"></div>
    </div>
  );
};

export default IntroAnimation;
