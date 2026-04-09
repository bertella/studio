"use client";

import { Terminal, MessageSquareMore } from "lucide-react"; // Cambiamos el icono aquí
import Link from "next/link";

export function Footer() {
  const phoneNumber = "5493512042270"; // Acordate de poner tu número real
  const message = "¡Hola! Vi tu web DoctaData y me gustaría consultarte por un proyecto.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <span className="font-headline font-bold text-lg tracking-tight">
              DoctaData<span className="text-accent">.</span>
            </span>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="#servicios" className="hover:text-accent transition-colors">Servicios</Link>
            <Link href="#portfolio" className="hover:text-accent transition-colors">Portafolio</Link>
            <Link href="#skills" className="hover:text-accent transition-colors">Experiencia</Link>
            <Link href="#contact" className="hover:text-accent transition-colors">Contacto</Link>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} DoctaData. Córdoba, Argentina.
          </p>
        </div>
      </div>

      {/* Botón Flotante de WhatsApp con efecto de invitación */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-[#20ba5a] transition-all duration-300 flex items-center justify-center group"
      >
        {/* Este es el efecto de pulso suave que invita a hacer clic */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:hidden"></span>
        
        <span className="absolute right-16 bg-white text-black text-sm py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl whitespace-nowrap pointer-events-none font-bold border border-gray-100">
          ¿Hablamos de tu próximo proyecto? 💬
        </span>
        
        <MessageSquareMore className="w-6 h-6" />
      </a>
    </footer>
  );
}