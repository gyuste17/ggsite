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

export default function ServiceTemplate({ config }: Props) {
  const isDark = config.theme.dark;
  const cleanPhone = config.contact.phone.replace(/[^0-9+]/g, '');
  const whatsappUrl = `https://wa.me/${config.contact.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(config.contact.whatsappMessage || 'Hola, necesito un presupuesto.')}`;

  return (
    <div className={`scroll-smooth ${isDark ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* BARRA DE URGENCIAS / TOPBAR */}
      <div className="bg-tenant-primary text-white text-center py-2.5 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 select-none animate-pulse">
        <LucideIcon name="Clock" size={16} />
        <span>¡SERVICIO DE URGENCIAS 24 HORAS DISPONIBLE!</span>
        <span className="hidden sm:inline">|</span>
        <a href={`tel:${cleanPhone}`} className="underline hover:no-underline">Llama ya: {config.contact.phone}</a>
      </div>

      {/* HEADER */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-200 ${
        isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-2">
            <span className="text-tenant-primary">
              <LucideIcon name="ShieldCheck" className="inline-block" size={26} />
            </span>
            {config.name}
          </a>
          
          <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
            <a href="#services" className={`hover:text-tenant-primary transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Servicios</a>
            <a href="#about" className={`hover:text-tenant-primary transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Nosotros</a>
            <a href="#features" className={`hover:text-tenant-primary transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Garantías</a>
            <a href="#contact" className={`hover:text-tenant-primary transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Contacto</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <a
              href={getRootDomain()}
              className={`flex items-center gap-1 font-bold text-xs sm:text-sm hover:text-tenant-primary transition-colors ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              <LucideIcon name="ArrowLeft" size={15} />
              Volver a ggsite
            </a>
            <a
              href={`tel:${cleanPhone}`}
              className="bg-tenant-primary text-white font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl hover:bg-tenant-primary/95 transition duration-300 shadow-md shadow-tenant-primary/20 flex items-center gap-2 text-xs sm:text-sm"
            >
              <LucideIcon name="Phone" size={16} />
              Llamar Ahora
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative py-20 lg:py-28 px-6 overflow-hidden">
        {config.hero.backgroundImage && (
          <div className="absolute inset-0 z-0">
            <img
              src={config.hero.backgroundImage}
              alt={config.name}
              className="w-full h-full object-cover filter brightness-35 select-none"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${
              isDark ? 'from-slate-950 via-slate-950/80 to-transparent' : 'from-slate-900 via-slate-900/80 to-transparent'
            }`} />
          </div>
        )}

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 text-white">
            <span className="inline-block bg-tenant-primary/20 text-tenant-primary border border-tenant-primary/30 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-6">
              Técnicos Profesionales Autorizados
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
              {config.hero.title}
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-slate-200 leading-relaxed max-w-2xl">
              {config.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${cleanPhone}`}
                className="bg-tenant-primary hover:bg-tenant-primary/95 text-white font-bold px-8 py-4 rounded-xl transition duration-300 shadow-lg shadow-tenant-primary/30 flex items-center justify-center gap-3 text-lg"
              >
                <LucideIcon name="Phone" size={22} className="animate-bounce" />
                {config.contact.phone}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl border border-white/20 transition duration-300 flex items-center justify-center gap-3 text-lg"
              >
                <LucideIcon name="MessageCircle" size={22} />
                Presupuesto Gratis
              </a>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-2">
                <LucideIcon name="ShieldCheck" className="text-tenant-primary" size={18} />
                Presupuesto sin compromiso
              </span>
              <span className="flex items-center gap-2">
                <LucideIcon name="ShieldCheck" className="text-tenant-primary" size={18} />
                Garantía por escrito
              </span>
              <span className="flex items-center gap-2">
                <LucideIcon name="ShieldCheck" className="text-tenant-primary" size={18} />
                Llegamos en 30 minutos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* DETALLES DE SERVICIOS */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-tenant-primary font-bold text-sm uppercase tracking-wider">¿Qué necesitas solucionar?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">Nuestros Servicios de Fontanería</h2>
          <div className="w-12 h-1 bg-tenant-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.services.map((service, i) => (
            <div
              key={i}
              className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                isDark 
                  ? 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:shadow-black/25' 
                  : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-slate-200/40'
              }`}
            >
              <div>
                {service.imageUrl && (
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    {service.price && (
                      <span className="absolute bottom-3 left-3 bg-tenant-primary text-white font-black px-3 py-1 rounded-lg text-sm shadow">
                        {service.price}
                      </span>
                    )}
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 tracking-tight">{service.name}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 mt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center inline-block bg-tenant-primary/10 text-tenant-primary hover:bg-tenant-primary hover:text-white font-bold py-2.5 rounded-lg text-sm transition"
                >
                  Consultar Servicio
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section id="about" className={`py-24 px-6 border-t border-b transition-colors duration-200 ${
        isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            {config.gallery && config.gallery[0] && (
              <div className="aspect-video sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={config.gallery[0]}
                  alt="Equipo de Trabajo"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-tenant-primary/10 rounded-full -z-10 blur-xl" />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-tenant-primary font-bold text-sm uppercase tracking-wider">Sobre Nosotros</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-6 tracking-tight">Experiencia y Honestidad a su Servicio</h2>
            <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {config.about}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-tenant-primary/5 border border-tenant-primary/10">
                <span className="block text-2xl font-black text-tenant-primary mb-1">20+</span>
                <span className="text-xs font-bold uppercase text-slate-500">Años de experiencia</span>
              </div>
              <div className="p-4 rounded-xl bg-tenant-primary/5 border border-tenant-primary/10">
                <span className="block text-2xl font-black text-tenant-primary mb-1">100%</span>
                <span className="text-xs font-bold uppercase text-slate-500">Garantizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARACTERISTICAS / GARANTIAS */}
      {config.features && (
        <section id="features" className="py-24 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-tenant-primary font-bold text-sm uppercase tracking-wider">Nuestros Compromisos</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 tracking-tight">¿Por qué confiar en nosotros?</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {config.features.map((feat, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border transition duration-300 ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-900'
                    : 'bg-white border-slate-200 hover:bg-slate-100 hover:shadow-lg'
                }`}
              >
                <div className="w-12 h-12 bg-tenant-primary/10 text-tenant-primary rounded-xl flex items-center justify-center mb-6">
                  {feat.icon && <LucideIcon name={feat.icon} size={24} />}
                </div>
                <h3 className="font-bold text-xl mb-3">{feat.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CONTACTO & MAPA */}
      <section id="contact" className={`py-24 px-6 border-t transition-colors duration-200 ${
        isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-tenant-primary font-bold text-sm uppercase tracking-wider">Contacto Directo</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-6 tracking-tight">Estamos a tu disposición</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-tenant-primary/10 text-tenant-primary flex items-center justify-center flex-shrink-0">
                    <LucideIcon name="Phone" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Teléfono de Asistencia</h4>
                    <p className="text-xl font-black text-tenant-primary mt-1">
                      <a href={`tel:${cleanPhone}`}>{config.contact.phone}</a>
                    </p>
                    <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Llamadas directas para averías urgentes</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-tenant-primary/10 text-tenant-primary flex items-center justify-center flex-shrink-0">
                    <LucideIcon name="Clock" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Horario de Servicio</h4>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {config.contact.schedule}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-tenant-primary/10 text-tenant-primary flex items-center justify-center flex-shrink-0">
                    <LucideIcon name="MapPin" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Zona de Cobertura</h4>
                    <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{config.contact.address}, {config.contact.city}</p>
                    <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Desplazamiento rápido por toda la provincia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-2xl border ${
              isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <h3 className="text-xl font-bold mb-4">¿Quieres que te llamemos?</h3>
              <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Déjanos tu problema y tus datos y un técnico se pondrá en contacto contigo inmediatamente.</p>
              <form onSubmit={(e) => { e.preventDefault(); window.open(whatsappUrl, '_blank'); }} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Tu Nombre"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-tenant-primary/20 focus:border-tenant-primary ${
                      isDark 
                        ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600' 
                        : 'bg-white border-slate-300 text-slate-800 placeholder-slate-400'
                    }`}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Tu Teléfono"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-tenant-primary/20 focus:border-tenant-primary ${
                      isDark 
                        ? 'bg-slate-950 border-slate-800 text-white' 
                        : 'bg-white border-slate-300 text-slate-800'
                    }`}
                  />
                </div>
                <div>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe brevemente la avería o el servicio que necesitas (ej: cambiar grifo, fuga de agua, etc.)"
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-tenant-primary/20 focus:border-tenant-primary ${
                      isDark 
                        ? 'bg-slate-950 border-slate-800 text-white' 
                        : 'bg-white border-slate-300 text-slate-800'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-tenant-primary hover:bg-tenant-primary/95 text-white font-bold py-4 rounded-xl transition duration-300 shadow-lg shadow-tenant-primary/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LucideIcon name="MessageCircle" size={18} />
                  Solicitar Presupuesto
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={`py-12 border-t text-center px-6 transition-colors duration-200 ${
        isDark ? 'bg-slate-900 border-slate-800 text-slate-500' : 'bg-slate-100 border-slate-200 text-slate-500'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} {config.name}. Todos los derechos reservados.</p>
          <p className="flex items-center justify-center gap-1.5">
            Desarrollado por
            <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className="font-bold text-tenant-primary hover:underline">
              ggsite.es
            </a>
          </p>
        </div>
      </footer>

      {/* BOTON LLAMAR FLOTANTE */}
      <a
        href={`tel:${cleanPhone}`}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-tenant-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 shadow-tenant-primary/30"
        title="Llamar Técnico"
      >
        <LucideIcon name="Phone" size={26} className="animate-bounce" />
      </a>
    </div>
  );
}
