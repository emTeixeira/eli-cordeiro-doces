import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AboutMeDialog from "@/components/AboutMeDialog";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="font-display text-xl md:text-2xl font-bold">
          <span className={scrolled || mobileOpen ? "text-primary" : "text-primary-foreground"}>
            Eli Cordeiro
          </span>{" "}
          <span className={scrolled ? "text-gold italic font-medium" : "text-gold italic font-medium"}>
            Doces
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide uppercase transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <AboutMeDialog>
            <button
              className={`text-sm tracking-wide uppercase transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              Sobre Mim
            </button>
          </AboutMeDialog>
          <a
            href="https://wa.me/5521996979718?text=Ola%21%20Gostaria%20de%20fazer%20um%20pedido%20ou%20receber%20mais%20informacoes%20sobre%20os%20doces."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="text-foreground" />
          ) : (
            <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground text-lg font-display py-2 border-b border-border/50"
                >
                  {link.label}
                </a>
              ))}
              <AboutMeDialog>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground text-lg font-display py-2 border-b border-border/50 text-left"
                >
                  Sobre Mim
                </button>
              </AboutMeDialog>
              <a
                href="https://wa.me/5521996979718"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-5 py-3 rounded-full text-center font-medium flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Peça pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
