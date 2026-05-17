import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EKD HUB | Gestión y ventas',
  description: 'Catálogo, boletas, stock, clientes, deudas y ventas por WhatsApp para EKD.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
