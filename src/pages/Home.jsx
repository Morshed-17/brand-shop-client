import { useEffect } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import Brands from "../components/Brands/Brands";
import TestiMoni from "../components/TestiMoni/TestiMoni";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-aos="fade-in" data-aos-duration="1000">
      <div data-aos="fade-up" data-aos-duration="1000">
        <Banner></Banner>
      </div >
      <div data-aos="fade-up" data-aos-duration="1000">
        <Brands></Brands>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <TestiMoni></TestiMoni>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <AboutUs></AboutUs>
      </div>
    </div>
  );
};

export default Home;
