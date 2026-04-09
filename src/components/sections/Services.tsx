"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Calculator, Database, CheckCircle2, Globe, MonitorSmartphone } from "lucide-react";

const services = [
  {
    title: "Apps a medida (AppSheet)",
    description: "Digitalización total para sacar a los negocios del papel. Gestioná stock y ventas desde el celular, directamente en el mostrador.",
    icon: Box,
    features: ["Uso sin conexión", "Escaneo de códigos", "Acceso multiusuario"]
  },
  {
    title: "Automatización (AppScript)",
    description: "Hacé que los presupuestos y avisos se generen solos. Vinculamos tus planillas para que la información fluya sin errores humanos.",
    icon: Calculator,
    features: ["PDFs automáticos", "Envío de emails", "Sincronización de datos"]
  },
  {
    title: "Tableros de Control",
    description: "Visualización profesional en Tableau o Power BI. Dejá de adivinar y empezá a ver tu ganancia real y el estado de tu stock hoy.",
    icon: Database,
    features: ["Indicadores clave (KPIs)", "Análisis de tendencias", "Reportes visuales"]
  },
  {
    title: "Soporte Técnico Remoto ⚡",
    description: "Mantenimiento y optimización de sistemas para comercios. Resolución de problemas en tiempo real para que tu negocio nunca pare.",
    icon: MonitorSmartphone,
    features: ["Limpieza de Windows", "Configuración de periféricos", "Backups y Antivirus"]
  },
  {
    title: "Estrategia de Ventas Digitales 🚀",
    description: "Convertimos tu presencia online en una máquina de generar contactos. Optimizamos tu embudo de ventas para que el WhatsApp no pare de sonar.",
    icon: CheckCircle2, // Podés cambiarlo por otro si preferís
    features: ["Embudos para WhatsApp", "Captación de Leads", "Optimización de Conversión"]
  },
  {
    title: "Desarrollo Web",
    description: "Sitios institucionales y Web Apps modernas (React, Tailwind). Presencia digital profesional enfocada en captar nuevos clientes.",
    icon: Globe,
    features: ["Diseño Mobile-First", "Optimización SEO", "Alta Velocidad"]
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Servicios Especializados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Soluciones tecnológicas diseñadas para digitalizar tu empresa y maximizar la rentabilidad.
          </p>
        </div>
        
        {/* Usamos grid-cols-1 en móvil, 2 en tablets y 3 en pantallas grandes para acomodar los 5 servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="glass-effect border-none group hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
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