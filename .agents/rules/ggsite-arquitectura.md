# Reglas de Arquitectura y Escalabilidad - ggsite.es

Este documento define la estructura técnica del proyecto **ggsite.es**, su flujo multi-tenant, el prompt de automatización y el plan de escalabilidad futuro para la base de datos. Cualquier agente de IA que trabaje en este repositorio debe respetar estas directrices.

---

## 🏗️ 1. Arquitectura Multi-tenant Actual

La plataforma funciona como una web madre (`ggsite.es`) y múltiples mini-webs de clientes servidas a través de subdominios dinámicos (`negocio.ggsite.es` o `negocio.localhost:3000`).

- **Enrutamiento**: Se gestiona mediante [`src/proxy.ts`](src/proxy.ts) (Next.js v16). Si se detecta un subdominio válido, reescribe la petición internamente a `/site/[tenant]`.
- **Datos de Clientes**: Guardados en un archivo JSON local en [`src/data/sites.json`](src/data/sites.json) estructurado mediante la interfaz de TypeScript `SiteConfig` en [`src/types/site.ts`](src/types/site.ts).
- **Estilos del Tenant**: Se inyectan como variables CSS inline (`--tenant-primary`, `--tenant-secondary`) en el layout del tenant [`src/app/site/[tenant]/layout.tsx`](src/app/site/%5Btenant%5D/layout.tsx), lo que permite que Tailwind CSS v4 aplique clases personalizadas como `bg-tenant-primary` de forma dinámica.

---

## 🚀 2. Flujo de Adición de Nuevos Negocios

El proyecto cuenta con un prompt estructurado en [`PROMPT_GENERADOR.md`](PROMPT_GENERADOR.md).
Cuando se soliciten nuevos negocios:
1. Leer los datos básicos (nombre, sector, contacto, colores).
2. Generar el JSON correspondiente que satisfaga `SiteConfig`.
3. Añadir el objeto al final del array en `src/data/sites.json`.
4. Probar localmente en `http://[subdomain].localhost:3000`.

---

## 📈 3. Plan de Escalabilidad Futura (Migración a Base de Datos)

Cuando el volumen de webs supere los 20-30 negocios, o cuando se requiera un panel de administración para que los clientes gestionen sus datos, se debe migrar de la base de datos mock JSON a una base de datos PostgreSQL/Supabase utilizando Prisma ORM.

### Paso 1: Configurar Prisma
Instalar Prisma y definir el modelo en `prisma/schema.prisma` mapeando los campos de la interfaz `SiteConfig`.
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Site {
  id             String    @id @default(uuid())
  subdomain      String    @unique
  name           String
  sector         String    // "restaurante" | "servicios" | "belleza" | "general"
  themePrimary   String
  themeSecondary String
  themeDark      Boolean   @default(false)
  themeFont      String?
  phone          String
  email          String
  address        String
  city           String
  mapsUrl        String?
  whatsappMsg    String?
  schedule       String?
  logoUrl        String?
  heroTitle      String
  heroSubtitle   String
  heroBgImage    String?
  about          String    @db.Text
  services       Service[]
  features       Feature[]
  gallery        String[]  // Array de URLs
  instagram      String?
  facebook       String?
  twitter        String?
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
}

model Service {
  id          String   @id @default(uuid())
  siteId      String
  site        Site     @relation(fields: [siteId], references: [id], onDelete: Cascade)
  name        String
  description String   @db.Text
  price       String?
  imageUrl    String?
}

model Feature {
  id          String   @id @default(uuid())
  siteId      String
  site        Site     @relation(fields: [siteId], references: [id], onDelete: Cascade)
  title       String
  description String   @db.Text
  icon        String?
}
```

### Paso 2: Adaptar el Helper de Datos
Únicamente se debe reescribir [`src/lib/sites.ts`](src/lib/sites.ts) para que consuma Prisma en lugar de importar el JSON local.

Ejemplo de adaptación del helper:
```typescript
import { PrismaClient } from '@prisma/client';
import { SiteConfig } from '@/types/site';

const prisma = new PrismaClient();

export async function getSiteBySubdomain(subdomain: string): Promise<SiteConfig | null> {
  const dbSite = await prisma.site.findUnique({
    where: { subdomain: subdomain.toLowerCase() },
    include: { services: true, features: true }
  });

  if (!dbSite) return null;

  // Mapeamos el modelo de base de datos a la interfaz SiteConfig utilizada por las plantillas
  return {
    id: dbSite.id,
    subdomain: dbSite.subdomain,
    name: dbSite.name,
    sector: dbSite.sector as any,
    theme: {
      primary: dbSite.themePrimary,
      secondary: dbSite.themeSecondary,
      dark: dbSite.themeDark,
      font: dbSite.themeFont || undefined
    },
    contact: {
      phone: dbSite.phone,
      email: dbSite.email,
      address: dbSite.address,
      city: dbSite.city,
      mapsUrl: dbSite.mapsUrl || undefined,
      whatsappMessage: dbSite.whatsappMsg || undefined,
      schedule: dbSite.schedule || undefined
    },
    logoUrl: dbSite.logoUrl || undefined,
    hero: {
      title: dbSite.heroTitle,
      subtitle: dbSite.heroSubtitle,
      backgroundImage: dbSite.heroBgImage || undefined
    },
    about: dbSite.about,
    services: dbSite.services.map(s => ({
      name: s.name,
      description: s.description,
      price: s.price || undefined,
      imageUrl: s.imageUrl || undefined
    })),
    features: dbSite.features.map(f => ({
      title: f.title,
      description: f.description,
      icon: f.icon || undefined
    })),
    gallery: dbSite.gallery,
    social: {
      instagram: dbSite.instagram || undefined,
      facebook: dbSite.facebook || undefined,
      twitter: dbSite.twitter || undefined
    }
  };
}
```

Al hacer esto, **ninguna de las plantillas sectoriales ni el proxy de subdominios sufrirá modificaciones**, garantizando una migración totalmente transparente y escalable.
