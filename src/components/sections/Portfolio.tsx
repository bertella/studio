"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Layers, CheckCircle2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Gestión de Stock: Bulonera Córdoba",
    category: "AppSheet / Low-Code",
    description: "Sistema móvil a medida que eliminó el uso de planillas de papel.",
    longDescription: "Digitalización de inventario para una ferretería industrial. El sistema permite escanear códigos de barras, gestionar stock crítico y actualizar precios masivamente desde Google Sheets.",
    impact: ["Eliminación total del papel", "Control de stock en tiempo real", "Acceso multiusuario"],
    image: "/assets/imagen.png",
    tags: ["AppSheet", "Google Workspace", "Automatización"],
    link: "https://www.appsheet.com/start/df6d5a3d-1dc0-48d5-9699-fc5b99a054bb"
  },
  {
    title: "Análisis de Ventas y Rentabilidad",
    category: "Business Intelligence / Tableau",
    description: "Tablero interactivo para identificar productos estrella y márgenes.",
    longDescription: "Dashboard avanzado de BI que conecta múltiples fuentes de datos para visualizar el rendimiento comercial. Permite filtrar por categorías, periodos y analizar la rentabilidad neta.",
    impact: ["Visualización de márgenes reales", "Detección de productos obsoletos", "Toma de decisiones basada en datos"],
    image: "/assets/data.png", 
    tags: ["Tableau", "Análisis de Datos", "Estrategia"],
    link: "https://public.tableau.com/shared/5RZ8PDWCK?:display_count=n&:origin=viz_share_link" 
  },
  {
    title: "Ferretería: Cotizador Inteligente",
    category: "Web App / JavaScript / Cloud",
    description: "Aplicación para generar presupuestos en PDF con control de márgenes.",
    longDescription: "Herramienta web optimizada para vendedores de mostrador. Genera presupuestos profesionales en segundos, sincronizados con la lista de precios centralizada.",
    impact: ["Reducción de tiempo en mostrador", "Presupuestos en PDF automáticos", "Cálculo de margen dinámico"],
    image: "/assets/imagen copy.png", 
    tags: ["Tailwind CSS", "Apps Script", "PDF Engine"],
    link: "https://presupuesto-navy-five.vercel.app/" 
  },
  {
    title: "Veterinaria Vetlife",
    category: "Web App / Next.js",
    description: "Landing page moderna con diseño responsivo y optimización SEO.",
    longDescription: "Desarrollo de presencia digital para clínica veterinaria. Enfoque en UI/UX para facilitar la reserva de turnos y mejorar la visibilidad local en buscadores.",
    impact: ["Diseño 100% responsivo", "Optimización de carga (Core Web Vitals)", "Formulario de contacto integrado"],
    image: "/assets/vet-life.png",
    tags: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://https-github-com-bertella-vetlife.vercel.app/"
  },
  {
    title: "Optimización ROAS: E-commerce & Leads",
    category: "Data-Driven Marketing / GA4 / GAds",
    description: "Estrategia de Google Ads enfocada en maximizar el retorno de inversión.",
    longDescription: "Implementación avanzada de tracking para medir cada centavo invertido. Configuramos Google Analytics 4 y Conversion API para una atribución precisa de ventas.",
    impact: ["ROAS incrementado un 25%", "Tracking 100% preciso (CAPI)", "Optimización de CPA"],
    image: "/assets/gads.png",
    tags: ["Google Ads", "GA4", "Tag Manager"],
    link: "#" 
  },
  {
    title: "Escalado de Ventas: Meta Ads Performance",
    category: "Paid Social / Meta Business Suite",
    description: "Campañas de captación de clientes con embudos optimizados.",
    longDescription: "Diseño y ejecución de pauta en Facebook e Instagram. Utilizamos audiencias personalizadas y segmentación avanzada para escalar negocios de servicios y retail.",
    impact: ["Reducción de costo por lead 30%", "Escalado de ventas escalable", "Creativos de alto impacto"],
    image: "/assets/meta.jpg", 
    tags: ["Meta Ads", "Instagram Ads", "Conversion API"],
    link: "#" 
  }
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Portafolio</h2>
            <p className="text-muted-foreground">
              Una selección de proyectos de transformación digital enfocados en resultados reales.
            </p>
          </div>
          <div className="flex gap-2">
             <Badge variant="outline" className="border-accent/20 bg-accent/5 py-1.5 px-4 text-accent">Todos los Proyectos</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedProject(project)}
              className="group block cursor-pointer space-y-4"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.slice(0, 2).map(tag => (
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
                  <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground line-clamp-2 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {/* Cambios: max-h-[90vh] y overflow-hidden en el contenedor principal */}
        <DialogContent className="max-w-3xl bg-black/95 backdrop-blur-xl border-white/10 p-0 overflow-hidden text-white max-h-[90vh] flex flex-col">
          {selectedProject && (
            <>
              {/* Contenedor scrolleable interno */}
              <div className="overflow-y-auto flex-1 custom-scrollbar">
                <div className="relative aspect-video w-full">
                  <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    fill 
                    className="object-cover"
                  />
                  {/* Botón X manual para mobile (opcional, shadcn ya trae una pero esta es más visible) */}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 md:hidden"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
                
                <div className="p-6 md:p-10 space-y-8">
                  <div>
                    <div className="text-accent text-xs font-bold tracking-widest uppercase mb-2">
                      {selectedProject.category}
                    </div>
                    <DialogTitle className="text-3xl md:text-4xl font-bold leading-tight">
                      {selectedProject.title}
                    </DialogTitle>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed text-lg italic border-l-4 border-accent pl-4">
                      "{selectedProject.longDescription}"
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                      <div className="space-y-4">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-white/50">Impacto y Resultados</h4>
                        <ul className="space-y-3">
                          {selectedProject.impact.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col gap-3 justify-end">
                        {/* Botón de Acción Principal */}
                        <a 
                          href={selectedProject.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full py-4 bg-accent text-black text-center rounded-xl font-bold hover:brightness-110 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                        >
                          Visitar Proyecto <ExternalLink className="w-4 h-4" />
                        </a>
                        
                        {/* Botón "Volver" sugerido */}
                        <button 
                          onClick={() => setSelectedProject(null)}
                          className="w-full py-3 bg-white/5 text-white/80 text-center rounded-xl font-medium hover:bg-white/10 transition-all border border-white/5"
                        >
                          Volver a proyectos
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}