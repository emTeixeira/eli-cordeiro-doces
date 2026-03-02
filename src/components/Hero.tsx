import { motion } from "framer-motion";
import { Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bakery.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Doces artesanais Eli Cordeiro"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gradient-gold text-lg font-body tracking-[0.3em] uppercase mb-4 block">
            Doceria & Confeitaria
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight"
        >
          Eli Cordeiro
          <br />
          <span className="italic font-medium text-gold">Doces</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-primary-foreground/80 text-lg md:text-xl font-light mb-3"
        >
          ❤️ Doces exclusivos que fazem histórias
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-primary-foreground/80 text-lg md:text-xl font-light mb-10"
        >
          🍰 Felicidade em cada mordida
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" asChild>
            <a
              href="https://wa.me/5521996979718?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20pedido%20ou%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20doces."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-5 h-5 mr-2" />
              Peça pelo WhatsApp
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a
              href="https://instagram.com/elicordeirodoces"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 mr-2" />
              @elicordeirodoces
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
