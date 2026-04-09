"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje Enviado!",
      description: "Gracias por contactarme. Te responderé en menos de 24 horas.",
    });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Construyamos algo <span className="text-accent">juntos</span>.</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  ¿Listo para transformar tus flujos de trabajo? Ya sea que necesites una app de inventario o una reestructuración de base de datos, estoy para ayudarte.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-muted-foreground">hola@doctadata.tech</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Consulta Rápida</h4>
                    <p className="text-muted-foreground">Disponible para llamadas de descubrimiento de 15 min</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Ubicación</h4>
                    <p className="text-muted-foreground">Córdoba, Argentina | Remoto Internacional</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl glass-effect border-accent/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Nombre</Label>
                    <Input id="first-name" placeholder="Juan" className="bg-background/50" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Apellido</Label>
                    <Input id="last-name" placeholder="Pérez" className="bg-background/50" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email de trabajo</Label>
                  <Input id="email" type="email" placeholder="juan@empresa.com" className="bg-background/50" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input id="subject" placeholder="Consulta sobre Proyecto" className="bg-background/50" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">¿En qué puedo ayudarte?</Label>
                  <Textarea id="message" placeholder="Cuéntame sobre las necesidades de tu proyecto..." className="min-h-[150px] bg-background/50" required />
                </div>
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base font-bold">
                  Enviar Mensaje
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
