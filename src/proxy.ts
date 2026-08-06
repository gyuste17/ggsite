import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';
  const pathname = url.pathname;

  // Evitar procesar archivos estáticos o peticiones internas de Next.js
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // Archivos como favicon.ico, imágenes, etc.
  ) {
    return NextResponse.next();
  }

  // Detectar subdominio
  let subdomain = '';
  
  // En local, el host puede ser barpaco.localhost:3000 o localhost:3000
  const isLocalhost = host.includes('localhost') || host.includes('127.0.0.1');
  
  if (isLocalhost) {
    const parts = host.split('.');
    // Si partes tiene más de 1 elemento, p.ej. "barpaco.localhost:3000"
    if (parts.length > 1 && parts[0] !== 'localhost') {
      subdomain = parts[0];
    }
  } else {
    // En producción, p.ej. barpaco.ggsite.es o ggsite.es
    const parts = host.split('.');
    // Para ggsite.es, partes.length es 2. Si es barpaco.ggsite.es, partes.length es 3.
    if (parts.length > 2 && parts[0] !== 'www') {
      subdomain = parts[0];
    }
  }

  // Si hay un subdominio válido y no es "www"
  if (subdomain && subdomain !== 'www') {
    // Reescribimos internamente la ruta hacia /site/[tenant]
    url.pathname = `/site/${subdomain.toLowerCase()}${pathname === '/' ? '' : pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Configurar en qué rutas se ejecuta el middleware
export const config = {
  matcher: [
    /*
     * Coincidir con todas las rutas de solicitud excepto las que comiencen con:
     * - api (rutas API)
     * - _next/static (archivos estáticos)
     * - _next/image (optimización de imágenes)
     * - favicon.ico (icono de página)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
