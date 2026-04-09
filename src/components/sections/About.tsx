
"use client";

import { MapPin, Briefcase, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="sobre-mi" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden glass-effect border-accent/10">
              <img 
                src="/assets/fp.jpg" 
                alt="Consultor de Software" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">Sobre <span className="text-accent">mí</span></h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Soy consultor de software basado en <span className="text-foreground font-semibold">Córdoba, Argentina</span>. Mi enfoque principal es ayudar a pequeñas y medianas empresas a dar el salto hacia la digitalización.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-muted-foreground">Córdoba, Argentina (Remoto para todo el mundo)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-muted-foreground">Especialista en Low-Code y Arquitectura SQL</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-muted-foreground">Apasionado por la eficiencia operativa</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Creo que la tecnología no debería ser una barrera para el crecimiento, sino un puente. Transformo hojas de cálculo caóticas en aplicaciones móviles intuitivas y bases de datos optimizadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
