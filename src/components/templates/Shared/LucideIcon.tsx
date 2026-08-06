import React from 'react';
import * as Icons from 'lucide-react';

interface Props {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = '', size = 24 }: Props) {
  // Mapeamos los nombres comunes para evitar importar toda la librería en caliente si no es necesario,
  // pero usando las importaciones directas o un diccionario controlado es 100% seguro contra fallos.
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    // Icono por defecto en caso de no encontrarse
    return <Icons.HelpCircle className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
