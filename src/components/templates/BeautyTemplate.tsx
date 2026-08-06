'use client';

import React from 'react';
import { SiteConfig } from '@/types/site';
import LucideIcon from './Shared/LucideIcon';

interface Props {
  config: SiteConfig;
}

const getRootDomain = () => {
  if (typeof window === 'undefined') return '/';
  const host = window.location.host;
  const isLocalhost = host.includes('localhost') || host.includes('127.0.0.1');
  const protocol = window.location.protocol + '//';
  
  if (isLocalhost) {
    return `${protocol}localhost:3000`;
  }
  
  const parts = host.split('.');
  const isVercelApp = host.endsWith('vercel.app');
  
  if (isVercelApp) {
    if (parts.length > 3) {
      return `${protocol}${parts.slice(1).join('.')}`;
    }
  } else {
    if (parts.length > 2) {
      return `${protocol}${parts.slice(1).join('.')}`;
    }
  }
  
  return `${protocol}${host}`;
};

export default function BeautyTemplate({ config }: Props) {
  const isDark = config.theme.dark;
  const whatsappUrl = `https://wa.me/${config.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(config.contact.whatsappMessage || 'Hola! Me gustaría pedir una cita.')}`;

  return (
    <div className={`scroll-smooth ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-pink-50/20 text-slate-800'}`}>
      
      {/* HEADER */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-200 ${
        isDark ? 'bg-slate-950/80 border-slate-900' : 'bg-white/85 border-pink-100/50'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tight flex items-center gap-2 font-serif italic text-tenant-primary">
            {config.name}
          </a>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#about" className={`hover:text-tenant-primary transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Nosotros</a>
            <a href="#prices" className={`hover:text-tenant-primary transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Precios & Servicios</a>
            <a href="#gallery" className={`hover:text-tenant-primary transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Trabajos</a>
            <a href="#contact" className={`hover:text-tenant-primary transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Cita</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a
              href={getRootDomain()}
              className={`flex items-center gap-1 font-bold text-xs sm:text-sm hover:text-tenant-primary transition-colors ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              <LucideIcon name="ArrowLeft" size={15} />
              Volver a ggsite
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tenant-primary text-white font-semibold px-5 py-2.5 rounded-full hover:bg-tenant-primary/95 transition duration-300 shadow-md shadow-tenant-primary/10 flex items-center gap-2 text-sm"
            >
              <LucideIcon name="Calendar" size={16} />
              Pedir Cita
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center py-20 px-6 overflow-hidden">
        {config.hero.backgroundImage && (
          <div className="absolute inset-0 z-0">
            <img
              src={config.hero.backgroundImage}
              alt={config.name}
              className="w-full h-full object-cover filter brightness-60"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${
              isDark 
                ? 'from-slate-950/90 via-slate-950/70 to-transparent' 
                : 'from-pink-900/40 via-white/80 to-white/10'
            }`} />
          </div>
        )}

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-tenant-primary/10 text-tenant-primary border border-tenant-primary/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Salón de Belleza Premium
            </span>
            <h1 className={`text-4xl sm:text-6xl font-black mb-6 tracking-tight leading-tight font-serif ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {config.hero.title}
            </h1>
            <p className={`text-lg sm:text-xl mb-10 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {config.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tenant-primary hover:bg-tenant-primary/95 text-white font-bold px-8 py-4 rounded-full transition duration-300 shadow-lg shadow-tenant-primary/20 flex items-center justify-center gap-2"
              >
                Reservar Cita por WhatsApp
                <LucideIcon name="MessageSquare" size={18} />
              </a>
              <a
                href="#prices"
                className={`font-bold px-8 py-4 rounded-full border transition duration-300 flex items-center justify-center gap-2 ${
                  isDark 
                    ? 'border-slate-800 text-white hover:bg-slate-900' 
                    : 'border-pink-200 text-slate-700 bg-white/70 hover:bg-white'
                }`}
              >
                Ver Lista de Precios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-tenant-primary font-bold text-sm uppercase tracking-wider">El Salón</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-6 tracking-tight font-serif">Tu momento de mimo y bienestar</h2>
            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {config.about}
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-tenant-primary/10 text-tenant-primary flex items-center justify-center flex-shrink-0">
                  <LucideIcon name="Sparkles" size={16} />
                </div>
                <p className="text-sm font-medium">Asesoramiento personalizado de imagen</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-tenant-primary/10 text-tenant-primary flex items-center justify-center flex-shrink-0">
                  <LucideIcon name="Heart" size={16} />
                </div>
                <p className="text-sm font-medium">Productos profesionales libres de tóxicos</p>
              </div>
            </div>
          </div>
          <div className="relative">
            {config.gallery && config.gallery[0] && (
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src={config.gallery[0]}
                  alt="Tratamiento Capilar"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tenant-secondary rounded-full -z-10 opacity-70" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-tenant-primary/15 rounded-[2rem] -z-10 blur-xl" />
          </div>
        </div>
      </section>

      {/* CARTA DE PRECIOS */}
      <section id="prices" className={`py-24 px-6 border-t border-b transition-colors duration-200 ${
        isDark ? 'bg-slate-900/50 border-slate-900' : 'bg-pink-50/15 border-pink-100/50'
      }`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-tenant-primary font-bold text-sm uppercase tracking-wider font-serif">Nuestras Tarifas</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight font-serif">Servicios & Precios</h2>
            <div className="w-12 h-1 bg-tenant-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {config.services.map((service, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition duration-300 hover:shadow-lg ${
                  isDark
                    ? 'bg-slate-900 border-slate-800/80 hover:border-slate-750'
                    : 'bg-white border-pink-100/40 hover:border-pink-200'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-bold text-lg font-serif">{service.name}</h3>
                    {service.price && (
                      <span className="bg-tenant-primary/10 text-tenant-primary font-extrabold px-3 py-1 rounded-full text-sm">
                        {service.price}
                      </span>
                    )}
                  </div>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-tenant-primary hover:underline flex items-center gap-1"
                  >
                    Reservar este servicio <LucideIcon name="MessageSquare" size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARACTERISTICAS */}
      {config.features && (
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8">
            {config.features.map((feat, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-14 h-14 bg-tenant-primary/10 text-tenant-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  {feat.icon && <LucideIcon name={feat.icon} size={24} />}
                </div>
                <h3 className="font-bold text-xl mb-3 font-serif">{feat.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* GALLERY */}
      {config.gallery && config.gallery.length > 1 && (
        <section id="gallery" className={`py-24 px-6 transition-colors duration-200 ${
          isDark ? 'bg-slate-900/30' : 'bg-pink-50/10'
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-tenant-primary font-bold text-sm uppercase tracking-wider">Inspiración</span>
              <h2 className="text-3xl font-extrabold mt-2 font-serif">Nuestros Resultados</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {config.gallery.map((img, i) => (
                <div key={i} className="aspect-[3/4] rounded-3xl overflow-hidden group shadow-lg">
                  <img
                    src={img}
                    alt={`Trabajo realizado ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter brightness-95"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACTO & RESERVA CITA */}
      <section id="contact" className={`py-24 px-6 border-t transition-colors duration-200 ${
        isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-pink-100/30'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-tenant-primary font-bold text-sm uppercase tracking-wider font-serif">Agenda</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-6 font-serif">¿Reservamos tu momento?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-tenant-primary/10 text-tenant-primary flex items-center justify-center flex-shrink-0">
                    <LucideIcon name="MapPin" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Dirección del Salón</h4>
                    <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{config.contact.address}, {config.contact.city}</p>
                    {config.contact.mapsUrl && (
                      <a
                        href={config.contact.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-tenant-primary hover:underline font-semibold mt-1 inline-block"
                      >
                        Ver mapa interactivo
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-tenant-primary/10 text-tenant-primary flex items-center justify-center flex-shrink-0">
                    <LucideIcon name="Clock" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Horarios</h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {config.contact.schedule}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-tenant-primary/10 text-tenant-primary flex items-center justify-center flex-shrink-0">
                    <LucideIcon name="Phone" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Teléfono & WhatsApp</h4>
                    <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{config.contact.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-3xl border ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-pink-50/10 border-pink-100/50'
            }`}>
              <h3 className="text-xl font-bold mb-4 font-serif">Solicitar Cita</h3>
              <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Completa el formulario y te confirmaremos la cita de inmediato por WhatsApp.</p>
              <form onSubmit={(e) => { e.preventDefault(); window.open(whatsappUrl, '_blank'); }} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Tu Nombre"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-tenant-primary/20 focus:border-tenant-primary ${
                      isDark 
                        ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600' 
                        : 'bg-white border-pink-100 text-slate-800 placeholder-slate-400'
                    }`}
                  />
                </div>
                <div>
                  <select
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-tenant-primary/20 focus:border-tenant-primary ${
                      isDark 
                        ? 'bg-slate-950 border-slate-800 text-white' 
                        : 'bg-white border-pink-100 text-slate-800'
                    }`}
                  >
                    <option value="">Selecciona un Servicio</option>
                    {config.services.map((s, idx) => (
                      <option key={idx} value={s.name}>{s.name} ({s.price})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <input
                    type="datetime-local"
                    required
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-tenant-primary/20 focus:border-tenant-primary ${
                      isDark 
                        ? 'bg-slate-950 border-slate-800 text-white' 
                        : 'bg-white border-pink-100 text-slate-800'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-tenant-primary hover:bg-tenant-primary/95 text-white font-bold py-4 rounded-xl transition duration-300 shadow-lg shadow-tenant-primary/10 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LucideIcon name="MessageSquare" size={18} />
                  Solicitar por WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-12 border-t text-center px-6 transition-colors duration-200 ${
        isDark ? 'bg-slate-950 border-slate-900 text-slate-500' : 'bg-pink-50/20 border-pink-100/50 text-slate-500'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} {config.name}. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-1.5 font-sans">
            Creado con ❤️ por
            <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="font-bold text-tenant-primary hover:underline">
              ggsite.es
            </a>
          </p>
        </div>
      </footer>

      {/* BOTON RESERVAR FLOTANTE */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 shadow-green-500/30"
        title="Reservar Cita"
      >
        <LucideIcon name="MessageSquare" size={26} />
      </a>
    </div>
  );
}
