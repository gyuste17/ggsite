import React from 'react';
import { getSiteBySubdomain } from '@/lib/sites';
import { Metadata } from 'next';

interface Props {
  children: React.ReactNode;
  params: Promise<{ tenant: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ tenant: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const config = getSiteBySubdomain(resolvedParams.tenant);

  if (!config) {
    return {
      title: 'Sitio No Encontrado - ggsite.es',
      description: 'El negocio que buscas no está registrado en nuestra plataforma.',
    };
  }

  return {
    title: `${config.name} | ${config.hero.title}`,
    description: config.hero.subtitle,
  };
}

export default async function TenantLayout({ children, params }: Props) {
  const resolvedParams = await params;
  const config = getSiteBySubdomain(resolvedParams.tenant);

  if (!config) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
            !
          </div>
          <h1 className="text-3xl font-black mb-4 tracking-tight">Sitio no encontrado</h1>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Lo sentimos, no hemos podido encontrar ninguna página web configurada para el subdominio <strong className="text-slate-200">"{resolvedParams.tenant}"</strong>.
          </p>
          <a
            href="http://localhost:3000"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-lg shadow-indigo-500/20"
          >
            Volver a ggsite.es
          </a>
        </div>
      </div>
    );
  }

  // Preparamos los estilos CSS del tenant
  const tenantStyles = {
    '--tenant-primary': config.theme.primary,
    '--tenant-secondary': config.theme.secondary,
    fontFamily: config.theme.font ? `'${config.theme.font}', sans-serif` : 'inherit',
  } as React.CSSProperties;

  return (
    <div 
      style={tenantStyles} 
      className={`min-h-screen antialiased transition-colors duration-200 ${
        config.theme.dark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      {/* Carga dinámica de la fuente desde Google Fonts */}
      {config.theme.font && (
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link 
            href={`https://fonts.googleapis.com/css2?family=${config.theme.font.replace(/ /g, '+')}:wght@300;400;500;600;700;800&display=swap`} 
            rel="stylesheet" 
          />
        </head>
      )}
      
      {children}
    </div>
  );
}
