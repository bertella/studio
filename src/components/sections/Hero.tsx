
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-semibold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-3 h-3" />
            Impulsando el Negocio Local
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Soluciones Digitales para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent/80 to-primary">PyMEs que quieren crecer</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000">
            Ayudo a comercios y pequeñas empresas a dejar el desorden de los Excel mediante aplicaciones personalizadas y automatización. Menos caos, más ventas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 text-base font-semibold group">
              <Link href="#contact" className="flex items-center gap-2">
                Pedí tu demo gratuita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/10 hover:bg-white/5 px-8 text-base font-semibold">
              <Link href="#portfolio">Ver Portafolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
