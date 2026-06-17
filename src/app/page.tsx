import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Home from "@/components/sections/Home";
import Journey from "@/components/sections/Journey";
import Offers from "@/components/sections/Offers";
import Skills from "@/components/sections/Skills";
import Works from "@/components/sections/Works";


export default function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Offers />
      <Skills />
      <Journey />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}
