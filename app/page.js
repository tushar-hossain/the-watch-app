import Banner from "./components/Banner";
import Products from "./components/Products";
import "./globals.css";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

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
        
      </section>
    </div>
  );
}
