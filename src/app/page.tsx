'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Utensils, 
  Wrench, 
  Scissors, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  Send,
  Sun,
  Moon,
  FileText,
  BadgePercent
} from 'lucide-react';

export default function MotherPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    sector: 'restaurante',
    insuranceCheck: 'si',
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
    
    const whatsappText = `Hola ggsite! Estoy interesado en la digitalización a coste cero.
- Negocio: ${formData.businessName}
- Propietario: ${formData.ownerName}
- Teléfono: ${formData.phone}
- Sector: ${formData.sector}
- ¿Desea estudio de seguros gratis?: ${formData.insuranceCheck === 'si' ? 'Sí' : 'No'}
- Mensaje: ${formData.message}`;

    const whatsappUrl = `https://wa.me/34600123456?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 overflow-hidden selection:bg-indigo-500/30 ${
      darkMode ? 'bg-[#07090e] text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      
      {/* Auroras de fondo */}
      {darkMode ? (
        <>
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
          <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
          <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-purple-500/5 blur-[130px] pointer-events-none" />
        </>
      )}

      {/* HEADER */}
      <header className={`relative z-10 max-w-6xl mx-auto px-6 py-6 flex items-center justify-between border-b backdrop-blur-md transition-colors duration-300 ${
        darkMode ? 'border-slate-900/60' : 'border-slate-200'
      }`}>
        <a href="#" className="text-2xl font-black tracking-tight flex items-center gap-1.5">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ggsite</span>
          <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>.es</span>
        </a>
        
        <nav className={`hidden md:flex items-center gap-8 text-sm font-semibold transition-colors ${
          darkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          <a href="#how-it-works" className={`transition-colors ${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-950'}`}>¿Cómo funciona?</a>
          <a href="#templates" className={`transition-colors ${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-950'}`}>Plantillas</a>
          <a href="#benefits" className={`transition-colors ${darkMode ? 'hover:text-slate-100' : 'hover:text-slate-950'}`}>Beneficios</a>
        </nav>

        <div className="flex items-center gap-4">
          {/* Switch Modo Claro/Oscuro */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer ${
              darkMode 
                ? 'border-slate-800 bg-slate-900/50 text-amber-400 hover:text-amber-300' 
                : 'border-slate-250 bg-white text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Alternar modo oscuro"
          >
            {darkMode ? <Sun size={18} className="animate-spin-slow" /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-5 py-2.5 rounded-xl transition duration-300 shadow-lg shadow-indigo-600/10 text-sm flex items-center gap-2"
          >
            Digitalizar ya
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className={`inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 transition-colors duration-300 ${
          darkMode 
            ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300' 
            : 'bg-indigo-50/80 border-indigo-200 text-indigo-700'
        }`}>
          <Sparkles size={14} />
          Digitalización Local Premium
        </div>

        <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>
          Tu página web profesional,{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            a coste cero.
          </span>
        </h1>

        <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed transition-colors duration-300 ${
          darkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Digitalizamos tu bar, restaurante, peluquería o negocio local sin que te cueste nada. Analizamos tus seguros actuales sin compromiso, mejoramos tus condiciones y te regalamos tu web totalmente personalizada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#templates"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold px-8 py-4 rounded-xl transition duration-300 shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-3 text-lg"
          >
            Ver Demos de Plantillas
            <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className={`w-full sm:w-auto font-bold px-8 py-4 rounded-xl border transition duration-300 flex items-center justify-center gap-2 text-lg ${
              darkMode 
                ? 'bg-slate-900/80 hover:bg-slate-800 border-slate-800 text-slate-200' 
                : 'bg-white hover:bg-slate-100 border-slate-250 text-slate-700'
            }`}
          >
            Digitalizar mi Negocio
          </a>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="how-it-works" className={`relative z-10 py-24 border-t border-b transition-colors duration-300 ${
        darkMode ? 'border-slate-900 bg-slate-950/40' : 'border-slate-200 bg-slate-100/40'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider">El Proceso</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">Digitalización Sencilla en 3 Pasos</h2>
            <div className="w-12 h-1 bg-indigo-600 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`border rounded-2xl p-8 relative transition duration-300 ${
              darkMode 
                ? 'bg-[#0b0e14] border-slate-900 hover:border-slate-800' 
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}>
              <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
                <Sparkles size={22} />
              </div>
              <h3 className="text-xl font-bold mb-4">1. Elige tu Plantilla</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Elige la plantilla que mejor se adapte a tu actividad comercial (restauración, estética, oficios o un diseño corporativo general).
              </p>
            </div>

            <div className={`border rounded-2xl p-8 relative transition duration-300 ${
              darkMode 
                ? 'bg-[#0b0e14] border-slate-900 hover:border-slate-800' 
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}>
              <div className="w-12 h-12 bg-indigo-500/10 text-indigo-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
                <FileText size={22} />
              </div>
              <h3 className="text-xl font-bold mb-4">2. Revisamos tus Seguros</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Analizamos tus pólizas actuales sin ningún compromiso. Si logramos mejorar tus precios o coberturas, nos nombras mediador de tus seguros.
              </p>
            </div>

            <div className={`border rounded-2xl p-8 relative transition duration-300 ${
              darkMode 
                ? 'bg-[#0b0e14] border-slate-900 hover:border-slate-800' 
                : 'bg-white border-slate-200 hover:border-slate-300'
            }`}>
              <div className="w-12 h-12 bg-purple-500/10 text-purple-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-xl font-bold mb-4">3. Web Gratis Activa</h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Nos pasas los datos básicos de tu negocio y publicamos tu página web totalmente personalizada a coste cero y lista para recibir clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANTILLAS DEMO */}
      <section id="templates" className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider">Demostraciones</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">Nuestras Plantillas Disponibles</h2>
            <p className={`mt-4 max-w-xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Diseños modernos optimizados para convertir visitas en llamadas telefónicas o reservas por WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Restauración */}
            <div className={`border rounded-2xl overflow-hidden group transition duration-300 flex flex-col justify-between shadow-xl ${
              darkMode 
                ? 'bg-[#0b0e14] border-slate-900/80 hover:border-indigo-500/35 hover:shadow-2xl hover:shadow-indigo-950/20' 
                : 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-100/40'
            }`}>
              <div>
                <div className="h-48 bg-gradient-to-br from-amber-600/20 to-orange-700/20 relative flex items-center justify-center">
                  <Utensils size={48} className="text-orange-500 group-hover:scale-110 transition duration-300" />
                  <span className="absolute top-4 right-4 bg-orange-600/10 text-orange-600 border border-orange-500/20 px-3 py-1 rounded-full text-xs font-bold">
                    Hostelería
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Restauración</h3>
                  <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Ideal para bares, cafeterías y restaurantes. Incluye menú/carta digital interactivo, reservas directas a WhatsApp, horarios y mapa interactivo.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href="/site/barpaco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center border font-semibold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg text-sm ${
                    darkMode
                      ? 'bg-slate-900 hover:bg-indigo-600 hover:text-white border-slate-800 hover:border-indigo-500/30 text-slate-300'
                      : 'bg-slate-50 hover:bg-indigo-600 hover:text-white border-slate-200 hover:border-indigo-500/30 text-slate-700'
                  }`}
                >
                  Ver Demo (Bar Paco)
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Oficios */}
            <div className={`border rounded-2xl overflow-hidden group transition duration-300 flex flex-col justify-between shadow-xl ${
              darkMode 
                ? 'bg-[#0b0e14] border-slate-900/80 hover:border-indigo-500/35 hover:shadow-2xl hover:shadow-indigo-950/20' 
                : 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-100/40'
            }`}>
              <div>
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-sky-700/20 relative flex items-center justify-center">
                  <Wrench size={48} className="text-sky-500 group-hover:scale-110 transition duration-300" />
                  <span className="absolute top-4 right-4 bg-sky-500/10 text-sky-600 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-bold">
                    Servicios
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Servicios Técnicos</h3>
                  <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Pensada para fontaneros, electricistas, pintores o cerrajeros. Enfoque directo en llamadas de urgencia 24h, listado de servicios y testimonios.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href="/site/fontanerogomez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center border font-semibold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg text-sm ${
                    darkMode
                      ? 'bg-slate-900 hover:bg-indigo-600 hover:text-white border-slate-800 hover:border-indigo-500/30 text-slate-300'
                      : 'bg-slate-50 hover:bg-indigo-600 hover:text-white border-slate-200 hover:border-indigo-500/30 text-slate-700'
                  }`}
                >
                  Ver Demo (Fontanería Gómez)
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Estética */}
            <div className={`border rounded-2xl overflow-hidden group transition duration-300 flex flex-col justify-between shadow-xl ${
              darkMode 
                ? 'bg-[#0b0e14] border-slate-900/80 hover:border-indigo-500/35 hover:shadow-2xl hover:shadow-indigo-950/20' 
                : 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-100/40'
            }`}>
              <div>
                <div className="h-48 bg-gradient-to-br from-pink-600/20 to-purple-700/20 relative flex items-center justify-center">
                  <Scissors size={48} className="text-pink-500 group-hover:scale-110 transition duration-300" />
                  <span className="absolute top-4 right-4 bg-pink-500/10 text-pink-600 border border-pink-500/20 px-3 py-1 rounded-full text-xs font-bold">
                    Cuidado Personal
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Belleza & Estética</h3>
                  <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Perfecto para peluquerías, centros de estética y manicura. Estilo elegante, lista de precios/tratamientos, galería de trabajos y agenda WhatsApp.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <a
                  href="/site/peluqueriaana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center border font-semibold py-3 rounded-xl transition duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg text-sm ${
                    darkMode
                      ? 'bg-slate-900 hover:bg-indigo-600 hover:text-white border-slate-800 hover:border-indigo-500/30 text-slate-300'
                      : 'bg-slate-50 hover:bg-indigo-655 hover:text-white border-slate-200 hover:border-indigo-500/30 text-slate-700'
                  }`}
                >
                  Ver Demo (Ana Estilistas)
                  <ChevronRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="benefits" className={`relative z-10 py-24 border-t transition-colors duration-300 ${
        darkMode ? 'border-slate-900 bg-slate-950/20' : 'border-slate-200 bg-slate-100/10'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider font-sans">Ventajas ggsite</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-6 tracking-tight">Tu web sin costes ni dolores de cabeza</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <BadgePercent size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Sin Cuota de Alta ni Mensual</h4>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      No cobramos por el diseño ni la programación. El servicio se cubre al trasladar la mediación de tus seguros (local, comercio, coche, etc.) a nuestra correduría asociada, optimizando tu precio.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Hosting Premium Incluido</h4>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Tu web se aloja en servidores de alta velocidad a nivel mundial con Vercel. Máxima disponibilidad y velocidad de carga garantizada sin que pagues nada de mantenimiento.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Diseño Adaptable (Responsive)</h4>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      Más del 80% de tus clientes te buscarán en el móvil. Todas nuestras plantillas están adaptadas para verse increíbles y ser cómodas de navegar en pantallas pequeñas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-3xl border transition duration-300 shadow-xl ${
              darkMode ? 'bg-[#0b0e14] border-slate-900 shadow-black/20' : 'bg-white border-slate-200 shadow-slate-100'
            }`}>
              <h3 className="text-xl font-bold mb-4">¿Por qué lo hacemos a cambio de la mediación?</h3>
              <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Es una colaboración en la que todos ganamos. Al nombrarnos mediadores de tus pólizas de seguros existentes (comercio, responsabilidad civil, vida, vehículos):
              </p>
              
              <div className="space-y-3 text-sm font-medium">
                <div className={`flex items-center gap-3 p-3 rounded-lg border ${
                  darkMode ? 'bg-slate-950/60 border-slate-900' : 'bg-slate-50 border-slate-100'
                }`}>
                  <span className="text-indigo-600 font-bold">✔</span>
                  <span>Analizamos tus pólizas y te buscamos mejores ofertas en aseguradoras líderes.</span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-lg border ${
                  darkMode ? 'bg-slate-950/60 border-slate-900' : 'bg-slate-50 border-slate-100'
                }`}>
                  <span className="text-indigo-600 font-bold">✔</span>
                  <span>Tú no pagas más; al contrario, solemos reducir el importe anual de tus seguros.</span>
                </div>
                <div className={`flex items-center gap-3 p-3 rounded-lg border ${
                  darkMode ? 'bg-slate-950/60 border-slate-900' : 'bg-slate-50 border-slate-100'
                }`}>
                  <span className="text-indigo-600 font-bold">✔</span>
                  <span>A cambio, nosotros financiamos la creación y el mantenimiento de tu nueva web.</span>
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
            <span className="text-indigo-600 font-bold text-sm uppercase tracking-wider">Solicitud</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight font-sans">Digitaliza tu Negocio Hoy</h2>
            <p className={`mt-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Déjanos los datos básicos de tu negocio y te informaremos sin compromiso.</p>
          </div>

          {formSubmitted ? (
            <div className={`border p-8 rounded-3xl text-center ${
              darkMode ? 'bg-emerald-950/20 border-emerald-500/20' : 'bg-emerald-50 border-emerald-200'
            }`}>
              <div className="w-16 h-16 bg-emerald-550/10 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">¡Solicitud Lista para Enviar!</h3>
              <p className={`mb-6 max-w-md mx-auto text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Se ha abierto la aplicación de WhatsApp para enviarnos tus datos. Nos pondremos en contacto contigo en breve.
              </p>
              <button 
                onClick={() => setFormSubmitted(false)} 
                className="text-xs text-indigo-600 font-bold uppercase tracking-wider hover:underline cursor-pointer"
              >
                Enviar otro formulario
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={`p-8 rounded-3xl shadow-2xl grid md:grid-cols-2 gap-6 border transition duration-300 ${
              darkMode 
                ? 'bg-[#0b0e14] border-slate-900/60' 
                : 'bg-white border-slate-200'
            }`}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Nombre del Negocio</label>
                <input
                  type="text"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Ej: Cafetería Avenida, Pintores Sevilla..."
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition ${
                    darkMode 
                      ? 'bg-[#07090e] border-slate-900 text-white placeholder-slate-600' 
                      : 'bg-slate-50 border-slate-350 text-slate-800 placeholder-slate-400'
                  }`}
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
                  placeholder="Ej: Manuel García"
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition ${
                    darkMode 
                      ? 'bg-[#07090e] border-slate-900 text-white placeholder-slate-600' 
                      : 'bg-slate-50 border-slate-300 text-slate-800 placeholder-slate-400'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Teléfono móvil</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Ej: +34 600 000 000"
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition ${
                    darkMode 
                      ? 'bg-[#07090e] border-slate-900 text-white' 
                      : 'bg-slate-50 border-slate-350 text-slate-800'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Sector de Actividad</label>
                <select
                  name="sector"
                  value={formData.sector}
                  onChange={handleInputChange}
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition ${
                    darkMode 
                      ? 'bg-[#07090e] border-slate-900 text-slate-300' 
                      : 'bg-slate-50 border-slate-350 text-slate-700'
                  }`}
                >
                  <option value="restaurante">Restauración (Bares, Cafés, Rest.)</option>
                  <option value="servicios">Servicios y Oficios (Fontanería, Reparaciones...)</option>
                  <option value="belleza">Belleza y Cuidado (Peluquería, Estética...)</option>
                  <option value="general">Otros comercios locales</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">¿Quieres una revisión gratuita de tus seguros comerciales?</label>
                <select
                  name="insuranceCheck"
                  value={formData.insuranceCheck}
                  onChange={handleInputChange}
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition ${
                    darkMode 
                      ? 'bg-[#07090e] border-slate-900 text-slate-300' 
                      : 'bg-slate-50 border-slate-350 text-slate-700'
                  }`}
                >
                  <option value="si">Sí, quiero el estudio gratuito para beneficiarme de la web gratis</option>
                  <option value="no">Solo quiero información general sobre las plantillas</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Mensaje o comentarios adicionales</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos un poco sobre tu negocio y qué te gustaría incluir en la página web..."
                  className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition ${
                    darkMode 
                      ? 'bg-[#07090e] border-slate-900 text-white' 
                      : 'bg-slate-50 border-slate-350 text-slate-800'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="md:col-span-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold py-4 rounded-xl transition duration-300 shadow-lg shadow-indigo-600/10 flex items-center justify-center gap-2 cursor-pointer text-lg"
              >
                <Send size={18} />
                Enviar Solicitud
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`relative z-10 py-16 border-t text-center px-6 transition-colors duration-300 ${
        darkMode ? 'border-slate-900/60 bg-slate-950/80 text-slate-500' : 'border-slate-200 bg-white text-slate-450'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-semibold">
          <p>
            ggsite<span className="text-indigo-600">.es</span> - Soluciones de Digitalización
          </p>
          <p>© {new Date().getFullYear()} ggsite.es. Todos los derechos reservados.</p>
          <p>Digitalización inteligente para negocios locales.</p>
        </div>
      </footer>
      
    </div>
  );
}
