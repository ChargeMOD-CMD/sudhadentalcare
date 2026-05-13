import { Toaster } from "sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About, Services, AISmile, Doctors, Stories } from "@/components/site/Sections";
import { Booking, Footer, ChatOrb } from "@/components/site/Booking";
import { SmileCursor } from "@/components/site/SmileCursor";

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SmileCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <AISmile />
        <Doctors />
        <Stories />
        <Booking />
      </main>
      <Footer />
      <ChatOrb />
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
}