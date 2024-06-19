import Hero from "@/app/_components/Hero";
import CategorySearch from "@/app/_components/CategorySearch";
import About from "@/app/_components/About";
import Services from "@/app/_components/Services";
import ContactUs from "./_components/ContactUs";
import OurDr from "./_components/OurDr";

export default function Home() {
  return (
    <div>
      {/* {Hero Section} */}
      <Hero />

      
      

      {/* Doctors */}
      <OurDr />

      {/* Services */}
      <Services />

      {/* About Us */}
      <About />

      {/* ContactUs */}
      <ContactUs />
    </div>
  );
}
