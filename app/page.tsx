import About from "@/components/About";
import Architects from "@/components/Architects";
import Core from "@/components/Core";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Core />
      <Architects />
      <Partner />
    </div>
  );
}
