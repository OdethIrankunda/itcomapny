import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "./about/page";
import Services from "./services/page";
import WorkProcess from "@/components/work-process";
import ChooseUs from "@/components/choose-us";
import HeroFooter from "@/components/hero-footer";
import Projects from "@/components/projects";
import Awards from "@/components/awards";
import Contact from "@/components/contact";
import Testimonials from "@/components/testimonilas";
import Team from "@/components/team";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";

export default function Home() {
  return(
    <div className="">
    <Header/>
    <Hero/>
    <HeroFooter/>
      <About/>
      <Services/>
      <WorkProcess/>
      <ChooseUs/>
      <Projects/>
      <Awards/>
      <Contact/>
      <Testimonials/>
      <Team/>
      <Faqs/>
      <Footer/>
    </div>
  );
}