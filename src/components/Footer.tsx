import { Heart, Instagram, Phone } from "lucide-react";
import AboutMeDialog from "@/components/AboutMeDialog";
import TermsDialog from "@/components/TermsDialog";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold">
              Eli Cordeiro <span className="italic text-gold font-medium">Doces</span>
            </h3>
            <p className="text-primary-foreground/60 mt-1 text-sm">
              Doces exclusivos que fazem histórias
            </p>
            <AboutMeDialog>
              <button className="text-primary-foreground/60 hover:text-primary-foreground text-sm mt-2 transition-colors underline underline-offset-2">
                Sobre Mim
              </button>
            </AboutMeDialog>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/elicordeirodoces"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5521996979718?text=Ol%C3%A1%21%20Gostaria%20de%20fazer%20um%20pedido%20ou%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20doces."
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center space-y-2">
          <TermsDialog>
            <button className="text-primary-foreground/60 hover:text-primary-foreground text-xs transition-colors underline underline-offset-2">
              Termos de Uso
            </button>
          </TermsDialog>
          <p className="text-primary-foreground/40 text-xs">
            © 2026 Eli Cordeiro Doces. · Todos os direitos reservados. · Desenvolvido por{" "}
            <a
              href="https://emanuel-site.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary-foreground transition-colors"
            >
              Emanuel Teixeira
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
