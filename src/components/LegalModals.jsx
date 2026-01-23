import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText } from 'lucide-react';

const LegalModals = ({ isTermsOpen, isPrivacyOpen, onCloseTerms, onClosePrivacy }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <>
      {/* Modal de Términos y Condiciones */}
      <AnimatePresence>
        {isTermsOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={onCloseTerms}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            />
            
            {/* Modal Content */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 right-0 bottom-0 md:top-[5%] md:left-[5%] md:right-[5%] md:bottom-[5%] z-[101] flex items-center justify-center p-0 md:p-4"
            >
              <div className="bg-slate-900/95 backdrop-blur-xl border-0 md:border border-slate-700 rounded-none md:rounded-2xl shadow-2xl w-full h-full max-h-full overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-700 flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <FileText className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white">Términos y Condiciones</h2>
                      <p className="text-gray-400 text-xs md:text-sm">ESCOVIDRIO - Vidrio & Aluminio</p>
                    </div>
                  </div>
                  <button
                    onClick={onCloseTerms}
                    className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                  >
                    <X className="w-5 h-5 text-gray-300" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6">
                  <div className="prose prose-invert max-w-none">
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Última actualización: Enero 2026. Al solicitar una cotización o contratar nuestros servicios, 
                        usted acepta los siguientes términos y condiciones.
                      </p>
                    </div>

                    <section className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        1. Cotizaciones
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        • Todas las cotizaciones tienen una <strong className="text-white">validez de 10 días hábiles</strong> desde su emisión.
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        • Las cotizaciones están <strong className="text-white">sujetas a rectificación de medidas</strong> mediante 
                        una visita técnica en terreno antes de la fabricación.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        • Los precios pueden variar si las medidas reales difieren de las proporcionadas inicialmente por el cliente.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        2. Instalación y Responsabilidades
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        • El cliente debe <strong className="text-white">facilitar el acceso al área de trabajo</strong> y 
                        despejar completamente la zona donde se realizará la instalación.
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        • ESCOVIDRIO <strong className="text-white">no se responsabiliza por daños a muebles, objetos decorativos 
                        o elementos</strong> que no hayan sido retirados previamente del área de trabajo.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        • La empresa retirará los escombros generados durante la instalación. Los desechos anteriores (marcos viejos, 
                        materiales previos) deben ser gestionados por el cliente.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        3. Garantía
                      </h3>
                      <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4 mb-4">
                        <p className="text-green-300 leading-relaxed">
                          <strong>✓ Garantía legal de 6 meses</strong> por defectos de fabricación, instalación defectuosa 
                          o problemas estructurales del termopanel/vidrio templado atribuibles a la empresa.
                        </p>
                      </div>
                      <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                        <p className="text-red-300 font-semibold mb-2">✗ LA GARANTÍA NO CUBRE:</p>
                        <ul className="text-red-200 space-y-2 text-sm">
                          <li>• Roturas por golpes, impactos o accidentes causados por el usuario.</li>
                          <li>• Trizaduras por estrés térmico posterior a la entrega (cambios bruscos de temperatura).</li>
                          <li>• Rayones o daños superficiales por mal manejo o limpieza con productos abrasivos.</li>
                          <li>• Desprendimientos o daños causados por remodelaciones posteriores en el inmueble.</li>
                          <li>• Desgaste natural por uso o paso del tiempo.</li>
                        </ul>
                      </div>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        4. Forma de Pago
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        • <strong className="text-white">50% de anticipo</strong> al confirmar el pedido. Este pago autoriza 
                        el inicio de la fabricación del producto.
                      </p>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        • <strong className="text-white">50% restante al finalizar la instalación</strong>, previa conformidad 
                        del cliente con el trabajo realizado.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        • Formas de pago aceptadas: Efectivo, transferencia bancaria o depósito.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        5. Cancelaciones
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Si el cliente desea cancelar el pedido <strong className="text-white">después de haber pagado el anticipo 
                        y una vez iniciada la fabricación</strong>, el anticipo no será reembolsable, ya que los materiales 
                        son cortados y fabricados a medida específica.
                      </p>
                    </section>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 md:p-6 border-t border-slate-700 bg-slate-800/50 flex-shrink-0">
                  <button
                    onClick={onCloseTerms}
                    className="w-full btn-glow py-2 md:py-3 text-sm md:text-base font-semibold"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modal de Política de Privacidad */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={onClosePrivacy}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            />
            
            {/* Modal Content */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 right-0 bottom-0 md:top-[5%] md:left-[5%] md:right-[5%] md:bottom-[5%] z-[101] flex items-center justify-center p-0 md:p-4"
            >
              <div className="bg-slate-900/95 backdrop-blur-xl border-0 md:border border-slate-700 rounded-none md:rounded-2xl shadow-2xl w-full h-full max-h-full overflow-hidden flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-700 flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white">Política de Privacidad</h2>
                      <p className="text-gray-400 text-xs md:text-sm">Protección de Datos Personales</p>
                    </div>
                  </div>
                  <button
                    onClick={onClosePrivacy}
                    className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                  >
                    <X className="w-5 h-5 text-gray-300" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6">
                  <div className="prose prose-invert max-w-none">
                    <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-3 md:p-4 mb-4 md:mb-6">
                      <p className="text-blue-200 text-sm leading-relaxed">
                        <strong>ESCOVIDRIO</strong> cumple con la <strong>Ley 19.628 sobre Protección de la Vida Privada</strong> 
                        de Chile y se compromete a proteger sus datos personales.
                      </p>
                    </div>

                    <section className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        ¿Qué datos recopilamos?
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        Cuando usted solicita una cotización a través de nuestro formulario web o WhatsApp, recopilamos:
                      </p>
                      <ul className="text-gray-300 space-y-2">
                        <li>• <strong className="text-white">Nombre completo</strong></li>
                        <li>• <strong className="text-white">Número de teléfono</strong></li>
                        <li>• <strong className="text-white">Dirección del proyecto</strong> (opcional, solo si requiere visita técnica)</li>
                        <li>• <strong className="text-white">Descripción del servicio solicitado</strong></li>
                      </ul>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        ¿Para qué usamos sus datos?
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        Sus datos serán utilizados <strong className="text-white">exclusivamente</strong> para:
                      </p>
                      <ul className="text-gray-300 space-y-2">
                        <li>• Contactarlo para responder a su solicitud de cotización.</li>
                        <li>• Coordinar visitas técnicas en terreno (si aplica).</li>
                        <li>• Enviarle información relacionada con su proyecto (presupuesto, plazos, confirmaciones).</li>
                        <li>• Realizar seguimiento postventa y soporte de garantía.</li>
                      </ul>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Compartir información con terceros
                      </h3>
                      <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                        <p className="text-green-300 leading-relaxed">
                          <strong>✓ NO compartimos ni vendemos sus datos personales a terceros.</strong> Su información 
                          permanece confidencial y es de uso exclusivo de ESCOVIDRIO para fines comerciales relacionados 
                          con su proyecto.
                        </p>
                      </div>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Derechos del titular de datos
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        Usted tiene derecho a:
                      </p>
                      <ul className="text-gray-300 space-y-2">
                        <li>• <strong className="text-white">Acceder</strong> a sus datos almacenados en nuestro sistema.</li>
                        <li>• <strong className="text-white">Rectificar</strong> datos incorrectos o desactualizados.</li>
                        <li>• <strong className="text-white">Solicitar la eliminación</strong> de sus datos de nuestros registros 
                        en cualquier momento.</li>
                      </ul>
                      <div className="mt-4 bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Para ejercer estos derechos, puede contactarnos a través de WhatsApp al 
                          <a href="tel:+56953215308" className="text-primary font-semibold hover:underline ml-1">
                            +56 9 5321 5308
                          </a> o escribirnos directamente.
                        </p>
                      </div>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Seguridad de la información
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Implementamos medidas de seguridad razonables para proteger sus datos contra acceso no autorizado, 
                        pérdida o alteración. Sin embargo, ninguna transmisión por Internet es 100% segura.
                      </p>
                    </section>

                    <section className="mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Contacto
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        Si tiene preguntas sobre esta política de privacidad, puede contactarnos:
                      </p>
                      <div className="mt-3 space-y-2 text-gray-300">
                        <p>• WhatsApp: <a href="tel:+56953215308" className="text-primary hover:underline">+56 9 5321 5308</a></p>
                        <p>• Dirección: América 01135, San Bernardo, Chile</p>
                      </div>
                    </section>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 md:p-6 border-t border-slate-700 bg-slate-800/50 flex-shrink-0">
                  <button
                    onClick={onClosePrivacy}
                    className="w-full btn-glow py-2 md:py-3 text-sm md:text-base font-semibold"
                  >
                    Entendido
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default LegalModals;
