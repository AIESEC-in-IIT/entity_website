import Navbar from "@/components/ogv/Navbar_OGV";
import ProjectCard from "@/components/ogv/ProjectCard";
import { OGV_Projects } from "@/constants/ogv_data";
import { lato } from "@/constants/font_settings";
import Countries_OGV from "@/components/ogv/Countries_OGV";
import Footer from "@/components/common/Footer";
import Benefits from "@/components/ogv/Benefits";
import Requirements from "@/components/ogv/Requirements";
import CountryBanner from "@/components/common/CountryBanner";
import Contact from "@/components/ogv/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={`${lato.className} px-4 py-8`}>
        <h1 className="text-3xl font-bold text-center mb-10">
          All Volunteering Projects
        </h1>
        <div className="flex flex-col items-center gap-6">
          {OGV_Projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <hr className="border-grey-blue pb-2" />
      <Countries_OGV />
      <Benefits />
      <Requirements />
      <CountryBanner />
      <Contact />
      <Footer />
    </>
  );
}
