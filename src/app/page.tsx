import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services"; // Usamos el archivo Services.tsx que tenés en la carpeta sections
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services /> 
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}