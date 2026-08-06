'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Utensils, 
  Wrench, 
  Scissors, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Share2, 
  ChevronRight,
  Send,
  Zap
} from 'lucide-react';

export default function MotherPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    sector: 'restaurante',
    paymentMethod: 'trueque',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construimos el mensaje para enviar por WhatsApp
    const whatsappText = `Hola ggsite! Estoy interesado en digitalizar mi negocio.
- Nombre del negocio: ${formData.businessName}
- Propietario: ${formData.ownerName}
- Teléfono: ${formData.phone}
- Sector: ${formData.sector}
- Forma de pago preferida: ${formData.paymentMethod === 'trueque' ? 'Trueque (Servicios/Seguros)' : 'Bajo Coste'}
- Mensaje: ${formData.message}`;

    const whatsappUrl = `https://wa.me/34600123456?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans overflow-hidden selection:bg-indigo-500/30 selection:text-white">
      
      {/* Auroras de fondo */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-purple-650/10 blur-[130px] pointer-events-none" />

      {/* HEADER */}
      <header className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between border-b border-slate-900/60 backdrop-blur-md">
        <a href="#" className="text-2xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-2">
          ggsite<span className="text-blue-500">.es</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
          <a href="#how-it-works" className="hover:text-slate-100 transition-colors">¿Cómo funciona?</a>
          <a href="#templates" className="hover:text-slate-100 transition-colors">Plantillas</a>
          <a href="#benefits" className="hover:text-slate-100 transition-colors">Beneficios</a>
        </nav>

        <a
          href="#contact"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-5 py-2.5 rounded-xl transition duration-300 shadow-lg shadow-indigo-600/20 text-sm flex items-center gap-2"
        >
          Empezar ya
          <ArrowRight size={16} />
        </a>
      </header>

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 animate-pulse">
          <Sparkles size={14} />
          Digitalización Local e Inteligente
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight">
          Tu negocio en internet a cambio de{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            lo que mejor sabes hacer
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Diseñamos y programamos webs ultra rápidas y atractivas para hostelería, comercios y oficios tradicionales. Págala de forma cómoda o a través de **trueque de tus servicios** (seguros, asesorías, reparaciones, etc.).
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 text-lg"
          >
            Digitalizar mi negocio
            <ArrowRight size={20} />
          </a>
          <a
            href="#templates"
            className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-850 text-slate-200 font-bold px-8 py-4 rounded-xl border border-slate-800 transition duration-300 flex items-center justify-center gap-2 text-lg"
          >
            Ver Demos en Vivo
          </a>
        </div>

        {/* Pequeña fila de logos/iconos representativos */}
        <div className="mt-20 pt-10 border-t border-slate-900/60 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-500 text-sm font-semibold max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-500" />
            Sin cuotas de mantenimiento
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-500" />
            Optimizado para móviles
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-500" />
            Conexión directa WhatsApp
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-500" />
            Diseño Premium a Medida
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="how-it-works" className="relative z-10 py-24 border-t border-slate-900 bg-slate-950/40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-bold text-sm uppercase tracking-wider">El Proceso</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">El Trueque Digital de Toda la Vida</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">Te ayudamos a dar el salto a internet de la forma más sencilla, transparente y sin desembolsos asfixiantes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0b0e14] border border-slate-900 rounded-2xl p-8 relative group hover:border-slate-800 transition duration-300">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">1</div>
              <h3 className="text-xl font-bold mb-4 text-white">Elige tu Plantilla</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Elige el diseño base que mejor encaja con tu sector (restauración, peluquería, cerrajería o un diseño general).
              </p>
            </div>

            <div className="bg-[#0b0e14] border border-slate-900 rounded-2xl p-8 relative group hover:border-slate-800 transition duration-300">
              <div className="w-12 h-12 bg-indigo-500/10 text-indigo-400 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">2</div>
              <h3 className="text-xl font-bold mb-4 text-white">Acordamos el Trato</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Paga un coste mínimo inicial o intercambiémoslo por tus propios servicios o productos (ej. un seguro anual, vales de comida, etc.).
              </p>
            </div>

            <div className="bg-[#0b0e14] border border-slate-900 rounded-2xl p-8 relative group hover:border-slate-800 transition duration-300">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">3</div>
              <h3 className="text-xl font-bold mb-4 text-white">Web en 48 Horas</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nos pasas los datos básicos de tu negocio y la web se publica bajo tu propio subdominio listo para recibir clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANTILLAS DEMO */}
      <section id="templates" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-bold text-sm uppercase tracking-wider">Demostraciones</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">Explora Nuestras Plantillas</h2>
            <p className="text-slate-400 mt-4 max-w-xl mx-auto">Webs preparadas para convertir visitas en llamadas telefónicas o mensajes de WhatsApp inmediatamente.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Restauración */}
            <div className="bg-[#0b0e14] border border-slate-900/80 rounded-2xl overflow-hidden group hover:border-indigo-500/35 transition duration-300 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="h-48 bg-gradient-to-br from-amber-600/20 to-orange-700/20 relative flex items-center justify-center">
                  <Utensils size={48} className="text-orange-500 group-hover:scale-110 transition duration-300" />
                  <span className="absolute top-4 right-4 bg-orange-650/15 text-orange-450 border border-orange-500/20 px-3 py-1 rounded-full text-xs font-bold">
                    Hostelería
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Plantilla Restauración</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Ideal para bares, cafeterías y restaurantes. Incluye menú/carta digital interactivo, reserva por WhatsApp, horarios y localización en Google Maps.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href="/site/barpaco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-slate-900 hover:bg-indigo-600 hover:text-white border border-slate-800 hover:border-indigo-500/30 text-slate-300 font-semibold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg text-sm"
                >
                  Ver Demo Viva (Bar Paco)
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Oficios */}
            <div className="bg-[#0b0e14] border border-slate-900/80 rounded-2xl overflow-hidden group hover:border-indigo-500/35 transition duration-300 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-sky-700/20 relative flex items-center justify-center">
                  <Wrench size={48} className="text-sky-500 group-hover:scale-110 transition duration-300" />
                  <span className="absolute top-4 right-4 bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-bold">
                    Servicios de Oficio
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Plantilla Oficios</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Diseñada para fontaneros, electricistas, cerrajeros y pintores. Enfoque agresivo en llamadas rápidas, urgencias 24h, tarifas claras y testimonios de confianza.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href="/site/fontanerogomez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-slate-900 hover:bg-indigo-600 hover:text-white border border-slate-800 hover:border-indigo-500/30 text-slate-300 font-semibold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg text-sm"
                >
                  Ver Demo Viva (Fontanería Gómez)
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Estética */}
            <div className="bg-[#0b0e14] border border-slate-900/80 rounded-2xl overflow-hidden group hover:border-indigo-500/35 transition duration-300 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="h-48 bg-gradient-to-br from-pink-600/20 to-purple-700/20 relative flex items-center justify-center">
                  <Scissors size={48} className="text-pink-500 group-hover:scale-110 transition duration-300" />
                  <span className="absolute top-4 right-4 bg-pink-500/10 text-pink-400 border border-pink-500/20 px-3 py-1 rounded-full text-xs font-bold">
                    Belleza y Cuidado
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Plantilla Estética</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    Excelente para peluquerías, salones de uñas, masajistas y centros de estética. Incluye listado de tratamientos, galería de fotos de trabajos y agenda WhatsApp.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href="/site/peluqueriaana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-slate-900 hover:bg-indigo-600 hover:text-white border border-slate-800 hover:border-indigo-500/30 text-slate-300 font-semibold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg text-sm"
                >
                  Ver Demo Viva (Ana Estilistas)
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFICIOS / PROPUESTA VALOR */}
      <section id="benefits" className="relative z-10 py-24 bg-slate-950/30 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-indigo-400 font-bold text-sm uppercase tracking-wider">¿Por qué con nosotros?</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-6 tracking-tight">Todo lo que necesitas, sin complicaciones técnicas</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Velocidad Extrema</h4>
                    <p className="text-slate-450 text-sm leading-relaxed">Carga instantánea. A los buscadores como Google les encantan las webs veloces, mejorando tu posicionamiento de forma automática.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Cero Preocupaciones de Hosting</h4>
                    <p className="text-slate-450 text-sm leading-relaxed">Desplegado en servidores premium mundiales (Vercel). Olvídate de caídas del servidor o cuotas de mantenimiento mensual caras.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                    <Share2 size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Subdominio Incluido</h4>
                    <p className="text-slate-450 text-sm leading-relaxed">Te asignamos un subdominio gratuito tipo `tunegocio.ggsite.es` de por vida. Si quieres un dominio propio (`tunegocio.es`), te ayudamos a conectarlo.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0b0e14] border border-slate-900 rounded-3xl p-8 shadow-2xl relative">
              <h3 className="text-xl font-bold mb-4 text-white">Modelo de Trueque Sugerido</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Creemos en la economía local y circular. Valoramos tu trabajo tanto como el nuestro. Aquí tienes ejemplos de trueques que aceptamos:
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-900">
                  <span className="text-indigo-400 font-bold">✔</span>
                  <span>Seguro anual de local, automóvil o de hogar</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-900">
                  <span className="text-indigo-400 font-bold">✔</span>
                  <span>Cheques de comida o menús del día para el equipo</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-900">
                  <span className="text-indigo-400 font-bold">✔</span>
                  <span>Servicio de pintura, reformas o fontanería</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-900">
                  <span className="text-indigo-400 font-bold">✔</span>
                  <span>Asesoría fiscal, contable o gestiones administrativas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contact" className="relative z-10 py-24 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-bold text-sm uppercase tracking-wider">Da el Paso</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">Digitaliza tu Negocio</h2>
            <p className="text-slate-400 mt-4">Introduce los datos básicos de tu negocio y hablemos de cómo podemos colaborar.</p>
          </div>

          {formSubmitted ? (
            <div className="bg-emerald-950/20 border border-emerald-500/20 p-8 rounded-3xl text-center">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud Enviada con Éxito!</h3>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">Se ha abierto WhatsApp para enviarnos tu solicitud. Nos pondremos en contacto contigo en las próximas horas.</p>
              <button 
                onClick={() => setFormSubmitted(false)} 
                className="text-xs text-indigo-400 font-bold uppercase tracking-wider hover:underline"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#0b0e14] border border-slate-900 p-8 rounded-3xl shadow-2xl grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Nombre del Negocio</label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Ej: Pinturas Gómez, Cafetería Plaza..."
                  className="w-full bg-[#07090e] border border-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 text-white placeholder-slate-650"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Propietario / Contacto</label>
                <input
                  type="text"
                  name="ownerName"
                  required
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  placeholder="Ej: Alberto Gómez"
                  className="w-full bg-[#07090e] border border-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 text-white placeholder-slate-650"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Teléfono de Contacto</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Ej: +34 600 000 000"
                  className="w-full bg-[#07090e] border border-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 text-white placeholder-slate-650"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Sector de Actividad</label>
                <select
                  name="sector"
                  value={formData.sector}
                  onChange={handleInputChange}
                  className="w-full bg-[#07090e] border border-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 text-slate-300"
                >
                  <option value="restaurante">Restaurante / Bar / Cafetería</option>
                  <option value="servicios">Oficios (Fontanería, Cerrajería, Electricista, Pintor...)</option>
                  <option value="belleza">Salón de Belleza / Peluquería / Estética</option>
                  <option value="general">Otros comercios o servicios profesionales</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Forma de Colaboración Preferida</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  className="w-full bg-[#07090e] border border-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 text-slate-300"
                >
                  <option value="trueque">Trueque de servicios (Seguros, vales de comida, reparaciones, etc.)</option>
                  <option value="bajo-coste">Pago directo muy asequible (sin cuotas periódicas)</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Háblanos un poco de tu negocio</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Explícanos brevemente qué hacéis, dónde estáis ubicados y qué os gustaría que tuviera la web..."
                  className="w-full bg-[#07090e] border border-slate-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 text-white placeholder-slate-650"
                />
              </div>

              <button
                type="submit"
                className="md:col-span-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold py-4 rounded-xl transition duration-300 shadow-lg shadow-indigo-650/10 flex items-center justify-center gap-2 cursor-pointer text-lg"
              >
                <Send size={18} />
                Enviar Solicitud
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-16 border-t border-slate-900/60 bg-slate-950/80 text-slate-500 text-center px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="font-bold tracking-tight text-slate-350">
            ggsite<span className="text-blue-500">.es</span> - Digitalización de Confianza
          </p>
          <p>© {new Date().getFullYear()} ggsite.es. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-1">
            Diseñado con ❤️ para la economía local.
          </p>
        </div>
      </footer>
      
    </div>
  );
}
