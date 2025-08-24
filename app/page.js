import { Section } from "lucide-react";
import Banner from "./components/Banner";
import Products from "./components/Products";
import "./globals.css";
import Testimonials from "./Testimonials/Testimonials";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import LifestyleCarousel from "./LifestyleImages/LifestyleImages";

export default function home() {
  return (
    <div>
      {/* banner section */}
      <section>
        <Banner />
      </section>
      {/* products */}
      <section>
        <Products />
      </section>

      {/* Why Choose Us */}
      <section>
        <WhyChooseUs />
      </section>
      {/* Testimonials */}
      <section>
        <Testimonials />
      </section>
      
      {/* Lifestyle Images */}
      <LifestyleCarousel />
    </div>
  );
}
