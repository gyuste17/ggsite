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

export default function RestaurantTemplate({ config }: Props) {
  const isDark = config.theme.dark;
  const whatsappUrl = `https://wa.me/${config.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(config.contact.whatsappMessage || 'Hola!')}`;

  return (
    <div className={`scroll-smooth ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-stone-50 text-stone-900'}`}>
      
      {/* HEADER */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-200 ${
        isDark ? 'bg-slate-950/80 border-slate-800/80' : 'bg-white/80 border-stone-200/80'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-black tracking-tight flex items-center gap-2">
            <span className="text-tenant-primary">
              <LucideIcon name="Utensils" className="inline-block" size={28} />
            </span>
            {config.name}
          </a>
          
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#about" className={`hover:text-tenant-primary transition-colors ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>Nosotros</a>
            <a href="#menu" className={`hover:text-tenant-primary transition-colors ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>Nuestra Carta</a>
            <a href="#features" className={`hover:text-tenant-primary transition-colors ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>Por qué elegirnos</a>
            <a href="#contact" className={`hover:text-tenant-primary transition-colors ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>Contacto</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a
              href={getRootDomain()}
              className={`hidden sm:flex items-center gap-1 font-bold text-sm hover:text-tenant-primary transition-colors ${
                isDark ? 'text-slate-400' : 'text-stone-500'
              }`}
            >
              <LucideIcon name="ArrowLeft" size={16} />
              Volver a ggsite
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tenant-primary text-white font-semibold px-5 py-2.5 rounded-full hover:bg-tenant-primary/95 transition duration-300 shadow-md shadow-tenant-primary/10 flex items-center gap-2 text-sm"
            >
              <LucideIcon name="MessageCircle" size={18} />
              Reservar Mesa
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 px-6 overflow-hidden">
        {/* Imagen de fondo */}
        {config.hero.backgroundImage && (
          <div className="absolute inset-0 z-0">
            <img
              src={config.hero.backgroundImage}
              alt={config.name}
              className="w-full h-full object-cover filter brightness-45 scale-105 select-none"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${
              isDark ? 'from-slate-950 via-slate-950/70 to-slate-950/50' : 'from-stone-50 via-stone-50/75 to-stone-50/40'
            }`} />
          </div>
        )}

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-tenant-primary/15 text-tenant-primary border border-tenant-primary/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Bienvenidos a {config.name}
          </span>
          <h1 className={`text-4xl sm:text-6xl font-black mb-6 tracking-tight leading-tight ${isDark ? 'text-white' : 'text-stone-900'}`}>
            {config.hero.title}
          </h1>
          <p className={`text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-700'}`}>
            {config.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="bg-tenant-primary hover:bg-tenant-primary/95 text-white font-bold px-8 py-4 rounded-full transition duration-300 shadow-lg shadow-tenant-primary/20 flex items-center justify-center gap-2"
            >
              Ver la Carta
              <LucideIcon name="Utensils" size={18} />
            </a>
            <a
              href="#contact"
              className={`font-bold px-8 py-4 rounded-full border transition duration-300 flex items-center justify-center gap-2 ${
                isDark 
                  ? 'border-slate-700 text-white hover:bg-slate-900' 
                  : 'border-stone-300 text-stone-800 hover:bg-stone-100'
              }`}
            >
              Horario y Contacto
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight">
              Nuestra Historia & Compromiso
            </h2>
            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-stone-700'}`}>
              {config.about}
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-tenant-primary/10 text-tenant-primary flex items-center justify-center">
                  <LucideIcon name="Utensils" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Comida Casera</h4>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>Ingredientes locales</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-tenant-primary/10 text-tenant-primary flex items-center justify-center">
                  <LucideIcon name="Clock" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Servicio Rápido</h4>
                  <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>Cálido y familiar</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {config.gallery && config.gallery[0] && (
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={config.gallery[0]}
                  alt="Nuestra Cocina"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-tenant-secondary rounded-2xl -z-10 opacity-60" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-tenant-primary/20 rounded-full -z-10 blur-xl" />
          </div>
        </div>
      </section>

      {/* CARTA / MENU */}
      <section id="menu" className={`py-24 px-6 border-t border-b transition-colors duration-200 ${
        isDark ? 'bg-slate-900/40 border-slate-900' : 'bg-stone-100/50 border-stone-200'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-tenant-primary font-bold text-sm uppercase tracking-wider">Carta Recomendada</span>
            <h2 className="text-3xl sm:text-5xl font-black mt-2 tracking-tight">Nuestras Especialidades</h2>
            <div className="w-12 h-1 bg-tenant-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {config.services.map((plato, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row gap-6 p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.01] hover:shadow-xl ${
                  isDark
                    ? 'bg-slate-900 border-slate-800/60 hover:border-slate-700/80 hover:shadow-black/40'
                    : 'bg-white border-stone-200/60 hover:border-stone-300 hover:shadow-stone-200/40'
                }`}
              >
                {plato.imageUrl && (
                  <div className="sm:w-36 sm:h-36 w-full h-44 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={plato.imageUrl}
                      alt={plato.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-bold text-lg sm:text-xl tracking-tight hover:text-tenant-primary transition-colors">
                        {plato.name}
                      </h3>
                      {plato.price && (
                        <span className="text-tenant-primary font-extrabold text-lg flex-shrink-0">
                          {plato.price}
                        </span>
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>
                      {plato.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-end">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-tenant-primary hover:underline flex items-center gap-1"
                    >
                      Pedir plato <LucideIcon name="ExternalLink" size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARACTERISTICAS */}
      {config.features && (
        <section id="features" className="py-24 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-tenant-primary font-bold text-sm uppercase tracking-wider">¿Por qué Paco?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">Qué nos hace diferentes</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.features.map((feat, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl border transition duration-300 ${
                  isDark
                    ? 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-900'
                    : 'bg-white border-stone-200 hover:bg-stone-50 hover:shadow-lg'
                }`}
              >
                <div className="w-12 h-12 bg-tenant-primary/10 text-tenant-primary rounded-2xl flex items-center justify-center mb-6">
                  {feat.icon && <LucideIcon name={feat.icon} size={24} />}
                </div>
                <h3 className="font-bold text-xl mb-3">{feat.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-stone-600'}`}>
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* GALLERY */}
      {config.gallery && config.gallery.length > 1 && (
        <section className={`py-24 px-6 transition-colors duration-200 ${
          isDark ? 'bg-slate-900/20' : 'bg-stone-100/30'
        }`}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl font-extrabold mb-12 tracking-tight">Nuestro Rincón en Fotos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {config.gallery.map((img, i) => (
                <div key={i} className="aspect-square rounded-2xl overflow-hidden group shadow-md">
                  <img
                    src={img}
                    alt={`Galería ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500 filter brightness-95 group-hover:brightness-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACTO & MAPA */}
      <section id="contact" className={`py-24 px-6 border-t transition-colors duration-200 ${
        isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-stone-200'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-tenant-primary font-bold text-sm uppercase tracking-wider">¡Te Esperamos!</span>
              <h2 className="text-3xl sm:text-5xl font-black mt-2 mb-6 tracking-tight">Contacto & Horarios</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-tenant-primary/10 text-tenant-primary flex items-center justify-center flex-shrink-0">
                    <LucideIcon name="MapPin" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Dirección</h4>
                    <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>{config.contact.address}, {config.contact.city}</p>
                    {config.contact.mapsUrl && (
                      <a
                        href={config.contact.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-tenant-primary hover:underline font-semibold mt-1 inline-block"
                      >
                        Cómo llegar en Google Maps
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-tenant-primary/10 text-tenant-primary flex items-center justify-center flex-shrink-0">
                    <LucideIcon name="Clock" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Horario de Apertura</h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>
                      {config.contact.schedule}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-tenant-primary/10 text-tenant-primary flex items-center justify-center flex-shrink-0">
                    <LucideIcon name="Phone" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Teléfono & WhatsApp</h4>
                    <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-stone-600'}`}>{config.contact.phone}</p>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-stone-500'}`}>Puedes escribirnos directamente para reservas</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {config.social?.instagram && (
                  <a
                    href={config.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full border flex items-center justify-center hover:text-tenant-primary hover:border-tenant-primary transition ${
                      isDark ? 'border-slate-800 text-slate-400' : 'border-stone-200 text-stone-600'
                    }`}
                  >
                    <LucideIcon name="Instagram" size={18} />
                  </a>
                )}
                {config.social?.facebook && (
                  <a
                    href={config.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full border flex items-center justify-center hover:text-tenant-primary hover:border-tenant-primary transition ${
                      isDark ? 'border-slate-800 text-slate-400' : 'border-stone-200 text-stone-600'
                    }`}
                  >
                    <LucideIcon name="Facebook" size={18} />
                  </a>
                )}
              </div>
            </div>

            <div className={`p-8 rounded-3xl border ${
              isDark ? 'bg-slate-900 border-slate-800/80 shadow-2xl shadow-black/20' : 'bg-stone-50 border-stone-200 shadow-xl'
            }`}>
              <h3 className="text-xl font-bold mb-6">Solicitar Reserva o Información</h3>
              <form onSubmit={(e) => { e.preventDefault(); window.open(whatsappUrl, '_blank'); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej: Juan Pérez"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-tenant-primary/20 focus:border-tenant-primary ${
                      isDark 
                        ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-650' 
                        : 'bg-white border-stone-300 text-stone-800 placeholder-stone-400'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Número de Personas</label>
                  <select
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-tenant-primary/20 focus:border-tenant-primary ${
                      isDark 
                        ? 'bg-slate-950 border-slate-800 text-white' 
                        : 'bg-white border-stone-300 text-stone-800'
                    }`}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Fecha & Hora</label>
                  <input
                    type="datetime-local"
                    required
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-tenant-primary/20 focus:border-tenant-primary ${
                      isDark 
                        ? 'bg-slate-950 border-slate-800 text-white' 
                        : 'bg-white border-stone-300 text-stone-800'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-tenant-primary hover:bg-tenant-primary/95 text-white font-bold py-4 rounded-xl transition duration-300 mt-2 shadow-lg shadow-tenant-primary/10 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LucideIcon name="MessageCircle" size={18} />
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-12 border-t text-center px-6 transition-colors duration-200 ${
        isDark ? 'bg-slate-950 border-slate-900 text-slate-500' : 'bg-stone-100 border-stone-200 text-stone-500'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} {config.name}. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-1.5">
            Creado con ❤️ por
            <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="font-bold text-tenant-primary hover:underline">
              ggsite.es
            </a>
          </p>
        </div>
      </footer>

      {/* BOTON DE WHATSAPP FLOTANTE */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 shadow-green-500/30"
        title="Reservar por WhatsApp"
      >
        <LucideIcon name="MessageCircle" size={30} />
      </a>
    </div>
  );
}
