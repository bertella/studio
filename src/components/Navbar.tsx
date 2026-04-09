"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded-lg bg-primary group-hover:bg-accent transition-colors duration-300">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">
            DoctaData<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#sobre-mi" className="hover:text-accent transition-colors">Sobre mí</Link>
          <Link href="#servicios" className="hover:text-accent transition-colors">Servicios</Link>
          <Link href="#portfolio" className="hover:text-accent transition-colors">Portafolio</Link>
          <Link href="#skills" className="hover:text-accent transition-colors">Experiencia</Link>
          <Link href="#ai-tool" className="hover:text-accent transition-colors">Redactor AI</Link>
          <Button asChild variant="outline" className="border-accent/20 hover:border-accent hover:bg-accent/5">
            <Link href="#contact">Contacto</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
