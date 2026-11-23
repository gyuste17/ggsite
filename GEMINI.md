# ggsite.es - Plataforma Multi-Tenant y Web Corporativa

Plataforma digital modular para la web corporativa de Guillermo Yuste y mini-webs de clientes bajo subdominios dinámicos (`negocio.ggsite.es`).

## Stack Tecnológico y Entorno

- **Framework:** Next.js 16 (App Router)
- **Frontend / UI:** React 19, Tailwind CSS v4, Lucide React
- **Arquitectura:** Multi-tenant gestionado por `src/proxy.ts` y configuración en `src/data/sites.json`
- **Dominio Público:** [https://ggsite.es](https://ggsite.es)
- **Repositorio Git:** [https://github.com/gyuste17/ggsite.git](https://github.com/gyuste17/ggsite.git) (Rama: `main`)

---

## Comandos Principales

```bash
# Servidor de desarrollo
npm run dev

# Compilación de producción
npm run build

# Linter
npm run lint

# Verificación de salud (Habilidad Antigravity)
# /health-check
```

---

## Arquitectura de Agentes y Reglas

- **[.agents/rules/ggsite-arquitectura.md](.agents/rules/ggsite-arquitectura.md):** Especificación completa de la arquitectura multi-tenant, `SiteConfig`, inyección de variables CSS inline y flujo de adición de nuevos negocios.
- **[.agents/rules/design-standards.md](.agents/rules/design-standards.md):** Pautas de diseño adaptadas a portfolios y SaaS corporativos.
- **[.agents/skills/health-check/SKILL.md](.agents/skills/health-check/SKILL.md):** Verificación de build y TypeScript (`/health-check`).

---

## Protocolo de Notificaciones

```bash
python "../Antigravity-Master/scripts/send_alert.py" --project "ggsite" --status "SUCCESS" --summary "<Resumen conciso>"
```

---

## 🎨 Generación de Imágenes (OpenAI)

**OBLIGATORIO:** Para generar cualquier imagen (logos, banners, assets, mockups), usar SIEMPRE el script centralizado de Antigravity-Master:

```bash
python "C:\Users\gyust\GY Antigravity\Antigravity-Master\scripts\generate_dalle_image.py" --prompt "<descripción>" --output "<ruta/local/destino.png>" --tier draft|standard|premium
```

| Tier | Coste | Uso |
|:-----|:------|:----|
| `draft` | ~$0.006 | Pruebas, borradores, iteraciones |
| `standard` | ~$0.013 | Assets para webs (DEFAULT) |
| `premium` | ~$0.05 | Producción final |

- **NO intentar llamar a la API de OpenAI directamente desde scripts propios.**
- **NO usar modelos obsoletos como `dall-e-3` o `dall-e-2`** (ya no existen). Los modelos actuales son `gpt-image-2.5-flare` y `gpt-image-2.5-sunburst` (Suite GPT-Image-2.5).
- La clave API se gestiona de forma segura desde `Antigravity-Master/config/openai.json`.
- Para previsualizar coste sin gastar: añadir `--dry-run`.

---

## 📧 Comunicaciones y Gmail (GSG Metrics)

Para cualquier correo o borrador de GSG:
- **Script orquestador:** `python "C:\Users\gyust\GY Antigravity\Antigravity-Master\scripts\gmail_client.py"`
- **Formato:** `verdana, sans-serif` (tamaño normal), `#073763` (azul marino), `14px` de margen entre párrafos.
- **Firma GSG:**
  ```text
  Guillermo Yuste
  609 269 480
  ```
- **Tono:** Estratégico, analítico, resolutivo y con cierres propositivos (`¿Cómo lo veis?`, `Quedamos a la espera`).

---

## 💰 Facturación y Cuentas Freelance (#GSG)

Este proyecto está vinculado a la hoja maestra oficial de contabilidad freelance:
- **Hoja Maestra:** [Freelance - Cuentas (Ingresos)](https://docs.google.com/spreadsheets/d/16IIl9BUP0rINQiDvmFX_qlpilf_Mq2YsAsKGE8qfOnA/edit?gid=720435967)
- **Gestor Seguro:** `C:\Users\gyust\GY Antigravity\Antigravity-Master\scripts\billing_client.py`
- **Configuración Fiscal de GSG:**
  - **Originante:** `GSG`
  - **Prefijo Factura:** `#GSG` (calcula correlativo automáticamente)
  - **Tipo de Servicio:** `Consultoría`
  - **Retención IRPF:** `Si` (15%)
  - **IVA:** `Si` (21%)
  - **Cuenta de Cobro:** `BBVA`
- **Regla de Oro:** Todo cambio se ejecuta de forma precisa, registrada en auditoría y 100% revertible (con snapshot previo automático).

---

## 🗂️ Estado del Proyecto y Arquitectura Híbrida (2026-11-22)

- **Estado actual:** 🟡 Pausado
- **Arquitectura híbrida:**
  - **Código fuente:** Se mantiene en local en `C:\Users\gyust\GY Antigravity\ggsite` respaldado en GitHub (`main`).
  - **Documentación, assets de negocio y entregables:** Centralizados en Google Drive (`G:\Mi unidad\2. Proyectos\`).
- **Nota operativa para agentes (Gemini / Claude):** Se han limpiado cachés regenerables (`node_modules`, `.next`) para ahorrar espacio en disco mientras el proyecto está pausado. Ejecutar `npm install` antes de lanzar servidores de desarrollo o compilar (`npm run build`).



