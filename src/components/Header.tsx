import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">Janta Foundation</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/#mission" className="text-sm font-medium transition-colors hover:text-primary">
            Our Mission
          </NavLink>
          <NavLink to="/campaigns" className="text-sm font-medium transition-colors hover:text-primary" activeClassName="text-primary">
            Campaigns
          </NavLink>
          <a href="/#news" className="text-sm font-medium transition-colors hover:text-primary">
            In The News
          </a>
          <a href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </a>
          <NavLink to="/volunteer" className="text-sm font-medium transition-colors hover:text-primary" activeClassName="text-primary">
            Volunteer
          </NavLink>
          <a href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact Us
          </a>
        </div>

        <div className="hidden md:block">
          <Button variant="cta" size="lg" asChild>
            <Link to="/volunteer">Get Involved</Link>
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
            <a href="/#mission" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Our Mission
            </a>
            <NavLink to="/campaigns" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Campaigns
            </NavLink>
            <a href="/#news" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              In The News
            </a>
            <a href="/#about" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </a>
            <NavLink to="/volunteer" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Volunteer
            </NavLink>
            <a href="/#contact" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </a>
            <Button variant="cta" className="w-full" asChild>
              <Link to="/volunteer">Get Involved</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
