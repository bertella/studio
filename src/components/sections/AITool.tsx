"use client";

import { Layout, Database, Smartphone, BarChart3, Globe, Zap } from "lucide-react";

const services = [
  {
    title: "Desarrollo de Apps Mobile (Low-Code)",
    description: "Creación de aplicaciones a medida con AppSheet para gestión de stock, presupuestos y control de personal. Soluciones rápidas que funcionan sin conexión.",
    icon: <Smartphone className="w-8 h-8 text-accent" />,
  },
  {
    title: "Business Intelligence & Data",
    description: "Transformación de datos en decisiones. Tableros interactivos en Tableau o Looker Studio para visualizar márgenes de ganancia y rendimiento real.",
    icon: <BarChart3 className="w-8 h-8 text-accent" />,
  },
  {
    title: "Desarrollo Web Profesional",
    description: "Sitios web y Web Apps dinámicas (React, JavaScript, Tailwind). Optimizadas para velocidad, SEO y enfocadas en la conversión de clientes.",
    icon: <Globe className="w-8 h-8 text-accent" />,
  },
  {
    title: "Automatización de Procesos",
    description: "Chau a las tareas repetitivas. Conecto tus hojas de cálculo, correos y sistemas mediante scripts inteligentes para que el negocio trabaje solo.",
    icon: <Zap className="w-8 h-8 text-accent" />,
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Servicios</h2>
          <p className="text-muted-foreground">
            Soluciones tecnológicas diseñadas para digitalizar tu empresa y maximizar la rentabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-background border border-accent/10 hover:border-accent/40 transition-all duration-300 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}