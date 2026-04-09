
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generateProjectDescription } from "@/ai/flows/project-description-generator-flow";
import { Sparkles, Loader2, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AITool() {
  const [projectType, setProjectType] = useState("");
  const [outcomes, setOutcomes] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectType || !outcomes) {
      toast({
        title: "Missing Information",
        description: "Please fill in both the project type and outcomes.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await generateProjectDescription({ projectType, projectOutcomes: outcomes });
      setResult(response.description);
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "There was an error generating your description. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-tool" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Consultant Toolkit</h2>
            <p className="text-muted-foreground">Internal AI-powered tool to draft compelling case studies for your portfolio.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Card className="glass-effect border-accent/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  Project Draftsman
                </CardTitle>
                <CardDescription>Enter basic project details to generate professional copy.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleGenerate} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="type">Project Type</Label>
                    <Input 
                      id="type" 
                      placeholder="e.g. Hardware Store Inventory App" 
                      className="bg-background/50 border-white/10 focus:border-accent"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="outcomes">Key Outcomes</Label>
                    <Textarea 
                      id="outcomes" 
                      placeholder="e.g. Reduced stock errors by 40%, integrated vendor APIs, saved 10hrs/week"
                      className="min-h-[120px] bg-background/50 border-white/10 focus:border-accent"
                      value={outcomes}
                      onChange={(e) => setOutcomes(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      "Generate Description"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="glass-effect border-accent/10 min-h-[400px] flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Output Preview</CardTitle>
                  {result && (
                    <Button variant="ghost" size="sm" onClick={copyToClipboard} className="hover:bg-accent/10 hover:text-accent">
                      {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                      {copied ? "Copied" : "Copy Text"}
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col items-center justify-center text-center p-8">
                {result ? (
                  <p className="text-lg leading-relaxed text-left animate-in fade-in slide-in-from-top-4">
                    {result}
                  </p>
                ) : (
                  <div className="space-y-4 opacity-40">
                    <Sparkles className="w-12 h-12 mx-auto" />
                    <p>Your generated content will appear here.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
