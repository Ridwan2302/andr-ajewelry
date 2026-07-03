import { useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import Products from "./components/Products";
import About from "./components/About";
import Engagements from "./components/Engagements";
import FeatureBanner from "./components/FeatureBanner";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-ink bg-cream overflow-x-hidden">
      <AnnouncementBar />
      <Header onToggleMenu={() => setMenuOpen((v) => !v)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero />
      <Collections />
      <Products />
      <About />
      <Engagements />
      <FeatureBanner />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
