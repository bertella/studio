import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
// Importamos el componente de GTM en lugar del de Analytics
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'DoctaData | Soluciones de Software y Experto en Low-Code',
  description: 'Transformación digital para pequeñas empresas mediante AppSheet y optimización de bases de datos SQL.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        {/* Google Tag Manager en el Head (Mejor práctica para trackeo) */}
        <GoogleTagManager gtmId="GTM-PB257DS7" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}