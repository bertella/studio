"use client";

import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [state, handleSubmit] = useForm("mjgpddna");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-md mx-auto p-8 rounded-2xl bg-accent/10 border border-accent/20">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h2>
            <p className="text-muted-foreground mb-6">
              Gracias por contactarte. Te voy a responder a la brevedad para que empecemos a trabajar en tu proyecto.
            </p>
            <Button onClick={() => window.location.reload()} variant="outline">Enviar otro mensaje</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">¿Tenés un proyecto en mente?</h2>
          <p className="text-muted-foreground">
            Contame qué proceso querés digitalizar y buscamos la mejor vuelta técnica.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nombre</label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="Tu nombre o empresa" 
                  required 
                  className="bg-secondary/20 border-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input 
                  id="email"
                  name="email" 
                  type="email" 
                  placeholder="nombre@empresa.com" 
                  required 
                  className="bg-secondary/20 border-none"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Tipo de Solución</label>
              <select 
                id="service"
                name="service"
                className="w-full flex h-10 rounded-md bg-secondary/20 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border-none"
              >
                <option value="app_mobile">App Mobile (AppSheet)</option>
                <option value="automatizacion">Automatización (Apps Script)</option>
                <option value="bi_dashboard">Tableros BI (Tableau/PowerBI)</option>
                <option value="web_dev">Desarrollo Web</option>
                <option value="otro">Otro / Consulta General</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Mensaje</label>
              <Textarea 
                id="message"
                name="message"
                placeholder="Contame brevemente qué necesitás resolver..." 
                className="min-h-[150px] bg-secondary/20 border-none"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500" />
            </div>

            <Button 
              type="submit" 
              disabled={state.submitting}
              className="w-full gap-2 text-lg h-12 bg-accent hover:bg-accent/90"
            >
              <Send className="w-4 h-4" />
              {state.submitting ? "Enviando..." : "Enviar Presupuesto"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}