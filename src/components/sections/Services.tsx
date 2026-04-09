
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Calculator, Database, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Inventory Systems",
    description: "Real-time tracking solutions that eliminate stockouts and overstocking issues for hardware stores and retailers.",
    icon: Box,
    features: ["Barcode scanning", "Cloud synchronization", "Automated reordering"]
  },
  {
    title: "Automated Budgeting",
    description: "Digital accounting tools that replace messy spreadsheets with automated reporting and clear financial insights.",
    icon: Calculator,
    features: ["Expense tracking", "Forecasting", "Custom reporting"]
  },
  {
    title: "SQL Optimization",
    description: "Deep-dive database tuning to ensure your business data remains fast, reliable, and perfectly organized.",
    icon: Database,
    features: ["Query performance", "Schema design", "Data migration"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Specialized Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Focused expertise in the tools that matter most for modern digital operations.
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
