import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";

export default function Home () {
  return (
    <div>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
}