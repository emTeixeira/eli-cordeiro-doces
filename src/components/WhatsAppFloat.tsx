import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/5521996979718?text=Ola%21%20Gostaria%20de%20fazer%20um%20pedido%20ou%20receber%20mais%20informacoes%20sobre%20os%20doces."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[hsl(142_70%_45%)] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      aria-label="WhatsApp"
    >
      <Phone className="w-6 h-6 text-[hsl(0_0%_100%)]" />
    </motion.a>
  );
};

export default WhatsAppFloat;
