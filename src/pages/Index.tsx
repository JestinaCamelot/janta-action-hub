import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import FeaturedCampaignSection from "@/components/FeaturedCampaignSection";
import NewsSection from "@/components/NewsSection";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import CallbackRequestForm from "@/components/CallbackRequestForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <FeaturedCampaignSection />
        <AboutSection />
        <NewsSection />
        <CallbackRequestForm />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
