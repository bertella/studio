
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Calculator, Database, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Sistemas de Inventario",
    description: "Soluciones de seguimiento en tiempo real que eliminan los problemas de falta o exceso de stock para comercios y minoristas.",
    icon: Box,
    features: ["Escaneo de códigos de barras", "Sincronización en la nube", "Reordenamiento automático"]
  },
  {
    title: "Presupuestos Automatizados",
    description: "Herramientas de contabilidad digital que reemplazan planillas desordenadas con informes automáticos y claridad financiera.",
    icon: Calculator,
    features: ["Seguimiento de gastos", "Proyecciones", "Informes personalizados"]
  },
  {
    title: "Optimización SQL",
    description: "Ajuste profundo de bases de datos para asegurar que la información de tu negocio sea rápida, confiable y organizada.",
    icon: Database,
    features: ["Rendimiento de consultas", "Diseño de esquemas", "Migración de datos"]
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Servicios Especializados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enfoque en las herramientas que más importan para las operaciones digitales modernas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-effect border-none group hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
