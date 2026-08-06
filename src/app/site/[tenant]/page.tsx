import React from 'react';
import { getSiteBySubdomain } from '@/lib/sites';
import { notFound } from 'next/navigation';
import RestaurantTemplate from '@/components/templates/RestaurantTemplate';
import ServiceTemplate from '@/components/templates/ServiceTemplate';
import BeautyTemplate from '@/components/templates/BeautyTemplate';

interface Props {
  params: Promise<{ tenant: string }>;
}

export default async function TenantPage({ params }: Props) {
  const resolvedParams = await params;
  const config = getSiteBySubdomain(resolvedParams.tenant);

  if (!config) {
    // Si no existe, next renderizará el layout con la versión no encontrada de forma controlada
    notFound();
  }

  // Renderizar la plantilla correspondiente según el sector del negocio
  switch (config.sector) {
    case 'restaurante':
      return <RestaurantTemplate config={config} />;
    case 'servicios':
      return <ServiceTemplate config={config} />;
    case 'belleza':
      return <BeautyTemplate config={config} />;
    default:
      // Plantilla por defecto general
      return <ServiceTemplate config={config} />;
  }
}
