import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Heart, X } from "lucide-react";
import { motion } from "framer-motion";
import eliPhoto from "@/assets/eli-about.jpg";
import { ReactNode } from "react";

interface AboutMeDialogProps {
  children: ReactNode;
}

const AboutMeDialog = ({ children }: AboutMeDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl p-0 overflow-hidden bg-background border-border">
        <div className="flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
          {/* Photo */}
          <div className="md:w-1/2 shrink-0">
            <img
              src={eliPhoto}
              alt="Eli Cordeiro"
              className="w-full h-auto md:h-full md:object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-1">
              Eli Cordeiro
            </h2>
            <span className="text-gold italic font-display text-lg mb-4">
              Sobre Mim
            </span>

            <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
              <p>
                Olá! Eu sou a Eli, confeiteira apaixonada por criar doces que fazem parte das histórias mais especiais das pessoas.
              </p>
              <p>
                Sou casada e mãe orgulhosa de dois filhos maravilhosos: o <strong className="text-foreground">Yuri</strong> e o <strong className="text-foreground">Enzo</strong>. Minha família é meu maior tesouro e minha maior inspiração na cozinha.
              </p>
              <p>
                Amo profundamente a minha família e a <strong className="text-foreground">Deus</strong>, que me deu o dom de transformar ingredientes simples em momentos de felicidade. Cada doce que faço carrega um pedacinho do meu amor e da minha fé.
              </p>
              <p className="flex items-center gap-1 text-primary font-medium">
                <Heart className="w-4 h-4" />
                Feito com amor, fé e dedicação
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutMeDialog;
