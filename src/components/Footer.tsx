import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      {/* Final CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready to drive change in your community?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join us in making a difference through citizen-powered advocacy
          </p>
          <Button variant="cta" size="lg" className="text-lg px-8 py-6 h-auto">
            Contact Us / Get Involved
          </Button>
        </div>
      </section>

      <Separator />

      {/* Footer Links */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold text-primary">Janta Foundation</h3>
              <p className="text-sm text-muted-foreground">
                Mobilizing citizens for accountability and justice in everyday public issues.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#mission" className="text-muted-foreground hover:text-primary">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#campaigns" className="text-muted-foreground hover:text-primary">
                    Our Campaigns
                  </a>
                </li>
                <li>
                  <a href="#news" className="text-muted-foreground hover:text-primary">
                    In The News
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Connect With Us</h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/zishan.siddiqui.94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/zishan_s93/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/p/Quazi-Zishan-Siddiqui-voice-for-betterment-100063678821162/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                  aria-label="Facebook Page"
                  title="Voice for Betterment"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="mailto:contact@jantafoundation.org"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary/20"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Follow President Quazi Zeeshan Siddique
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      {/* Copyright */}
      <div className="py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Janta Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
