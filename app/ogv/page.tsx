import CountryBanner from "@/components/common/CountryBanner";
import Hero from "@/components/ogv/Hero_OGV";
import Products from "@/components/homepage/Products_Section";
import Navbar from "@/components/ogv/Navbar_OGV";
import Sample_Projects_OGV from "@/components/ogv/Sample_Projects_OGV";
import Countries_OGV from "@/components/ogv/Countries_OGV";
import Footer from "@/components/homepage/Footer";
import Benefits from "@/components/ogv/Benefits";
import Requirements from "@/components/ogv/Requirements";
import Contact from "@/components/ogv/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sample_Projects_OGV />
      <Countries_OGV />
      <Benefits />
      <Requirements />
      <CountryBanner />
      <Contact />
      <Footer />
    </>
  );
}
