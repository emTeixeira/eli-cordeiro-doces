import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ReactNode } from "react";

interface TermsDialogProps {
  children: ReactNode;
}

const TermsDialog = ({ children }: TermsDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg bg-background border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-foreground">
            Termos de Uso
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
          <p>
            © 2026 Eli Cordeiro Doces. Todos os direitos reservados.
          </p>
          <p>
            As imagens utilizadas neste site, incluindo fotos de fundo e galeria de produtos, são de autoria própria ou licenciadas para uso comercial. É vedada a reprodução, distribuição ou utilização sem autorização expressa.
          </p>
          <p>
            Para mais informações, entre em contato através dos nossos canais oficiais.
          </p>
          <div className="border-t border-border pt-4 mt-4">
            <p className="text-xs text-muted-foreground/70">
              Desenvolvido por <strong className="text-foreground">Emanuel Teixeira</strong>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsDialog;
