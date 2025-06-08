import CountryBanner from "@/components/common/CountryBanner";
import Hero from "@/components/ogv/Hero_OGV";
import Products from "@/components/homepage/Products_Section";
import Navbar from "@/components/ogv/Navbar_OGV";
import Sample_Projects_OGV from "@/components/ogv/Sample_Projects_OGV";
import Countries_OGV from "@/components/ogv/Countries_OGV";
import Footer from "@/components/common/Footer";
import Benefits from "@/components/ogv/Benefits";
import Requirements from "@/components/ogv/Requirements";
import Contact from "@/components/ogv/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="ogv_sample_projects">
        <Sample_Projects_OGV />
      </div>
      <div id="ogv_countries">
        <Countries_OGV />
      </div>
      <Benefits />
      <div id="ogv_requirements">
        <Requirements />
      </div>
      <div id="ogv_contact">
        <Contact />
      </div>
      <CountryBanner />
      <Footer />
    </>
  );
}
