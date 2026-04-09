
"use client";

import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    name: "Bases de Datos Relacionales",
    skills: [
      { name: "PostgreSQL", level: 95 },
      { name: "MySQL / MariaDB", level: 90 },
      { name: "Optimización SQL", level: 92 },
      { name: "Diseño de Esquemas", level: 98 }
    ]
  },
  {
    name: "Plataformas Low-Code",
    skills: [
      { name: "Google AppSheet", level: 98 },
      { name: "Flujos de Automatización", level: 94 },
      { name: "Integración de APIs", level: 88 },
      { name: "Lógica de Apps Móviles", level: 95 }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Experiencia Técnica</h2>
            <p className="text-muted-foreground">Competencia técnica profunda en arquitectura de datos y despliegue rápido low-code.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {skillGroups.map((group, index) => (
              <div key={index} className="space-y-8">
                <h3 className="text-2xl font-bold text-accent flex items-center gap-3">
                  <span className="w-8 h-px bg-accent/30" />
                  {group.name}
                </h3>
                <div className="space-y-6">
                  {group.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-1.5 bg-primary/20" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-4">
            <span className="text-sm font-medium text-muted-foreground mr-2">También competente en:</span>
            {["JavaScript", "Node.js", "Firebase", "React", "Google Cloud", "Git", "REST APIs", "NoSQL"].map(skill => (
              <Badge key={skill} variant="secondary" className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-foreground border-none">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
