import { Terminal } from "lucide-react";
import Link from "next/link";

export function Footer() {
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
    </footer>
  );
}
