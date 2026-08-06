# Prompt Maestro: Generador de Mini-Webs para ggsite.es

Este archivo contiene el prompt maestro reutilizable. Cuando quieras crear una nueva web para un negocio local, copia el texto de abajo y envíaselo a la IA (a mí o a cualquier LLM) junto con los datos básicos del negocio que te haya facilitado el cliente.

---

## 📋 Copiar el siguiente Prompt:

```text
Actúa como un experto desarrollador de Next.js y redactor de textos persuasivos de marketing (copywriter).
Quiero que generes una nueva configuración JSON para añadir un negocio local al proyecto multi-tenant ggsite.es.

A continuación te facilito los datos básicos del negocio. Tu tarea es expandir esta información redactando textos premium, eligiendo una paleta de colores coherente y devolviendo un objeto de configuración JSON estructurado exactamente según el tipo 'SiteConfig'.

Aquí están los datos del negocio:
- Nombre del negocio: [INSERTAR NOMBRE COMERCIAL]
- Sector: [restaurante | servicios | belleza | general]
- Localización (Dirección y Ciudad): [INSERTAR DIRECCIÓN]
- Teléfono: [INSERTAR TELÉFONO DE CONTACTO]
- Correo electrónico: [INSERTAR CORREO (O DEJAR EN BLANCO)]
- Colores sugeridos o Estética: [INSERTAR COLORES (EJ: AZUL Y GRIS, RÚSTICO, ROSA PASTEL)]
- Detalle de Servicios ofrecidos: [INSERTAR SERVICIOS (EJ: FONTANERÍA EN GENERAL, DESATASCOS, REFORMA DE BAÑOS)]
- Información adicional sobre el negocio (su historia, valores o qué los hace únicos): [INSERTAR HISTORIA O VALORES]

Reglas estrictas para la generación:
1. Genera un identificador único en minúsculas y sin acentos ni caracteres especiales para el campo "id" y "subdomain" (ej. si el nombre es "Ana Estilistas", el subdomain y el id deben ser "anaestilistas").
2. En base a los colores sugeridos por el cliente, define:
   - "primary": Un color hexadecimal vibrante que combine perfectamente.
   - "secondary": Un color claro de contraste para fondos de acento.
   - "dark": true o false según la estética (para restaurantes de noche o fontaneros de urgencias puede convenir fondo oscuro, para peluquerías o bares familiares fondo claro).
   - "font": Selecciona una Google Font apropiada para el sector (ej: "Outfit" para estética/moderno, "Inter" para servicios/limpio, "Playfair Display" para restaurantes premium).
3. Redacta un Hero espectacular:
   - "title": Un título corto, directo e impactante que capture la atención del visitante en 2 segundos (ej: "Electricistas rápidos y de confianza en Sevilla").
   - "subtitle": Un subtítulo de unas 2 líneas con excelente copywriting que incite a la acción.
   - "backgroundImage": Usa una URL de Unsplash de alta definición con keywords asociadas al negocio (ej: para fontaneros usar 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80'). Asegúrate de elegir imágenes limpias e inspiradoras.
4. Redacta la sección "about" de forma profesional, cálida y convincente de entre 3 y 4 líneas.
5. Estructura e inventa descripciones atractivas para los servicios solicitados. Si el cliente solo dio nombres simples de servicios, tú debes expandirlos redactando qué incluye y su beneficio. Asigna un precio aproximado razonable o indícalo como "Desde X€" o "Consultar". Asocia fotos de Unsplash temáticas de alta definición y de tamaño medio ('&w=600') a cada servicio.
6. Agrega un array de 3 puntos fuertes ("features") con iconos válidos de Lucide que apliquen al negocio (ej: 'Heart', 'ShieldCheck', 'Clock', 'Utensils', 'Sparkles', 'Calendar', 'ClipboardCheck').
7. Agrega una lista de fotos para la sección "gallery" con 3 fotos atractivas de Unsplash que refuercen el sector.
8. Define el "whatsappMessage" personalizado con una llamada a la acción clara para pedir cita o presupuesto (ej: "Hola, me gustaría solicitar un presupuesto de fontanería para...").

Genera ÚNICAMENTE el objeto JSON de configuración y envuelve tu respuesta en un bloque de código Markdown. No agregues explicaciones adicionales.

Formato JSON esperado:
{
  "id": "...",
  "subdomain": "...",
  "name": "...",
  "sector": "restaurante | servicios | belleza | general",
  "theme": {
    "primary": "#...",
    "secondary": "#...",
    "dark": false,
    "font": "..."
  },
  "contact": {
    "phone": "...",
    "email": "...",
    "address": "...",
    "city": "...",
    "mapsUrl": "...",
    "whatsappMessage": "...",
    "schedule": "..."
  },
  "logoUrl": "",
  "hero": {
    "title": "...",
    "subtitle": "...",
    "backgroundImage": "..."
  },
  "about": "...",
  "services": [
    {
      "name": "...",
      "description": "...",
      "price": "...",
      "imageUrl": "..."
    }
  ],
  "features": [
    {
      "title": "...",
      "description": "...",
      "icon": "..."
    }
  ],
  "gallery": [
    "...", "...", "..."
  ]
}
```

---

## 🛠️ Cómo agregar el nuevo negocio al proyecto:

Una vez que la IA te devuelva el JSON:

1. Abre el archivo [`src/data/sites.json`](file:///c:/Users/gyust/OneDrive - guillermoyuste.es/Escritorio/GY Antigravity/ggsite/src/data/sites.json).
2. Pega el objeto JSON generado al final del array (asegúrate de separar los objetos con comas `,`).
3. Guarda el archivo.
4. ¡Listo! El middleware lo detectará automáticamente. Puedes comprobarlo abriendo en tu navegador la dirección `http://[subdomain].localhost:3000` (reemplaza `[subdomain]` por el subdominio que se haya configurado para el negocio).
