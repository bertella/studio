"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Layers } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const projects = [
  {
    title: "Hardware Store Inventory App",
    category: "AppSheet / Low-Code",
    description: "A comprehensive mobile solution for a local hardware store, featuring real-time stock counts, vendor integrations, and multi-location support.",
    image: PlaceHolderImages.find(img => img.id === 'inventory-app')?.imageUrl,
    tags: ["Barcode", "Cloud Sync", "Mobile-First"]
  },
  {
    title: "SMB Financial Dashboard",
    category: "SQL / Business Intelligence",
    description: "Centralized budgeting tool for a construction firm that automated their monthly reconciliation process.",
    image: PlaceHolderImages.find(img => img.id === 'budgeting-tool')?.imageUrl,
    tags: ["PostgreSQL", "Automation", "Fintech"]
  },
  {
    title: "Data Pipeline Optimization",
    category: "SQL Optimization",
    description: "Restructured legacy database for an e-commerce platform, reducing query times from 5s to under 100ms.",
    image: PlaceHolderImages.find(img => img.id === 'sql-optimization')?.imageUrl,
    tags: ["Indexing", "Query Tuning", "NoSQL Migration"]
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Portfolio</h2>
            <p className="text-muted-foreground">
              A selection of digital transformation projects delivered to clients across various industries.
            </p>
          </div>
          <div className="flex gap-2">
             <Badge variant="outline" className="border-accent/20 bg-accent/5 py-1.5 px-4 text-accent">All Projects</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-muted">
                <Image 
                  src={project.image || 'https://picsum.photos/seed/placeholder/800/600'} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={index === 0 ? "inventory app" : "business dashboard"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md px-2 py-1 rounded border border-white/10">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
