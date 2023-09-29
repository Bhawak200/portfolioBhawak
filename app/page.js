import HeroSection from "@/app/component/HeroSection";
import Navbar from "./component/Navbar";
import AboutSection from "./component/AboutSection";
import ProjectSection from "./component/ProjectSection";
import EmailSection from "./component/EmailSection";
import Footer from "./component/Footer";
import Achievment from "./component/Achievment";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto py-4 px-4 mt-24">
        <HeroSection />
        <AboutSection />
        <Achievment />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
