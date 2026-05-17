# EKD HUB - Web rentable

Proyecto base profesional hecho con Next.js, pensado para publicar en Vercel y conectar Firebase.

## Incluye
- Landing page comercial
- Catálogo con precio minorista y mayorista
- Panel administrativo
- Clientes, deudas y cobros
- Boletas editables en concepto
- Botones de PDF, impresión y WhatsApp
- Plan Básico y Plan Premium
- Diseño responsive para celular

## Cómo ejecutarlo
```bash
npm install
npm run dev
```
Abrir: http://localhost:3000

## Próximos pasos técnicos
1. Crear proyecto en Firebase.
2. Agregar Auth para login.
3. Crear colecciones: productos, clientes, boletas, pagos, usuarios.
4. Conectar generación real de PDF con jsPDF.
5. Subir a Vercel.

## Variables recomendadas
Crear un archivo `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```
