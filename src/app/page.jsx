import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import YoutubeVideos from "@/components/YoutubeVideos";
import ConsultancySection from "@/components/consultancy/ConsultancySection";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <ConsultancySection />
      <AboutUs />
      <Services />
      <Testimonial />
      <YoutubeVideos />
      <Footer />
    </>
  );
}
