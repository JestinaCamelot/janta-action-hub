import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Janta Foundation</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#mission" className="text-sm font-medium transition-colors hover:text-primary">
            Our Mission
          </a>
          <a href="#campaigns" className="text-sm font-medium transition-colors hover:text-primary">
            Our Campaigns
          </a>
          <a href="#news" className="text-sm font-medium transition-colors hover:text-primary">
            In The News
          </a>
          <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </a>
          <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact Us
          </a>
        </div>

        <div className="hidden md:block">
          <Button variant="cta" size="lg">
            Get Involved
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#mission" className="text-sm font-medium transition-colors hover:text-primary">
              Our Mission
            </a>
            <a href="#campaigns" className="text-sm font-medium transition-colors hover:text-primary">
              Our Campaigns
            </a>
            <a href="#news" className="text-sm font-medium transition-colors hover:text-primary">
              In The News
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact Us
            </a>
            <Button variant="cta" className="w-full">
              Get Involved
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
