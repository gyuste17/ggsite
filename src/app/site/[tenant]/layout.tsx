import React from 'react';
import { getSiteBySubdomain } from '@/lib/sites';
import { Metadata } from 'next';
import { headers } from 'next/headers';

function getRootDomain(host: string): string {
  const isLocalhost = host.includes('localhost') || host.includes('127.0.0.1');
  const protocol = isLocalhost ? 'http://' : 'https://';
  
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
}


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

  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const rootDomain = getRootDomain(host);

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
            href={rootDomain}
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

      
      {children}
    </div>
  );
}
