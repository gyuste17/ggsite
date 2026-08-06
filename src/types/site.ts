export interface SiteService {
  name: string;
  description: string;
  price?: string;
  imageUrl?: string;
}

export interface SiteFeature {
  title: string;
  description: string;
  icon?: string; // Nombre del icono
}

export interface SiteConfig {
  id: string;
  subdomain: string;
  name: string;
  sector: 'restaurante' | 'servicios' | 'belleza' | 'general';
  theme: {
    primary: string;     // color hexadecimal (ej: #ea580c)
    secondary: string;   // color hexadecimal (ej: #ffedd5)
    dark: boolean;       // modo oscuro predefinido para esta web
    font?: string;       // nombre de google font (opcional)
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    city: string;
    mapsUrl?: string;
    whatsappMessage?: string; // Mensaje por defecto para enviar por WhatsApp
    schedule?: string;        // Horario comercial (ej: "Lunes a Viernes de 9:00 a 20:00")
  };
  logoUrl?: string;
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  };
  about: string;
  services: SiteService[];
  features?: SiteFeature[];
  gallery?: string[];
  social?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}
