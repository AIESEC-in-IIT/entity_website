import CountryBanner from "@/components/common/CountryBanner";
import Hero from "@/components/homepage/Hero";
import Products from "@/components/homepage/Products_Section";
import Navbar from "@/components/homepage/Navbar";
import Footer from "@/components/common/Footer";

export default function Home() {
  return(
    <>   
      <Navbar />
      <Hero />
      <CountryBanner />
      <Products />
      <Footer />
    </>
  )
}
