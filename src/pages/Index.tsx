import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import FeaturedCampaignSection from "@/components/FeaturedCampaignSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <FeaturedCampaignSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
