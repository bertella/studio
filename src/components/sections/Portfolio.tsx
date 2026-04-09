"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Layers } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    title: "Gestión de Stock: Bulonera Córdoba",
    category: "AppSheet / Low-Code",
    description: "Sistema móvil a medida que eliminó el uso de planillas de papel. Permite el control de inventario en tiempo real, escaneo de productos y actualización automática de precios.",
    image: "/assets/imagen.png",
    tags: ["AppSheet", "Google Workspace", "Automatización"],
    link: "https://www.appsheet.com/start/df6d5a3d-1dc0-48d5-9699-fc5b99a054bb"
  },
  
    {
      title: "Análisis de Ventas y Rentabilidad",
      category: "Business Intelligence / Tableau",
      description: "Tablero interactivo que centraliza datos de ventas para identificar productos estrella y márgenes de ganancia real en tiempo real.",
      image: "/assets/data.png", // Asegurate de subir una captura del tablero con este nombre
      tags: ["Tableau", "Análisis de Datos", "Estrategia"],
      link: "https://public.tableau.com/shared/5RZ8PDWCK?:display_count=n&:origin=viz_share_link" // Pegá acá el link de tu perfil o del tablero específico
    },
    {
      title: "Ferreteria: Cotizador Inteligente",
      category: "Web App / JavaScript / Cloud / SQL",
      description: "Aplicación Mobile-First que permite generar presupuestos en PDF con control de márgenes y sincronización en tiempo real con Google Sheets.",
      image: "/assets/imagen copy.png", // Sugerencia: Captura de la vista de presupuesto en el celu
      tags: ["Tailwind CSS", "Apps Script", "PDF Engine"],
      link: " https://bertella.github.io/presupuesto/" // Asumiendo que ya lo tenés en GitHub Pages
    },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Portafolio</h2>
            <p className="text-muted-foreground">
              Una selección de proyectos de transformación digital entregados a clientes en diversas industrias.
            </p>
          </div>
          <div className="flex gap-2">
             <Badge variant="outline" className="border-accent/20 bg-accent/5 py-1.5 px-4 text-accent">Todos los Proyectos</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block cursor-pointer space-y-4"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted">
                <Image 
                  src={project.image || 'https://picsum.photos/seed/placeholder/800/600'} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md px-2 py-1 rounded border border-white/10 text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest">
                  <Layers className="w-3 h-3" />
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors flex items-center justify-between">
                  {project.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};