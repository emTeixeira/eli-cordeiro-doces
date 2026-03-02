import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

const Location = () => {
  return (
    <section id="localizacao" className="py-20 md:py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
            Onde Estamos
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3">
            Nossa <span className="italic text-primary">localização</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-sm border border-border space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-soft flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg">Endereço</h3>
                <p className="text-muted-foreground mt-1">
                  R. José Ferreira Lemos - Eng. Belford
                  <br />
                  São João de Meriti - RJ, 25520-501
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-soft flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg">Horário</h3>
                <p className="text-muted-foreground mt-1">
                  Seg - Sáb: 8h às 20h
                  <br />
                  Domingo: Sob encomenda
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-soft flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg">Contato</h3>
                <p className="text-muted-foreground mt-1">(21) 99697-9718</p>
                <a
                  href="https://wa.me/5521996979718?text=Ola%21%20Gostaria%20de%20fazer%20um%20pedido%20ou%20receber%20mais%20informacoes%20sobre%20os%20doces."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium text-sm hover:underline"
                >
                  Enviar mensagem no WhatsApp →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-rose-soft flex items-center justify-center flex-shrink-0">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground text-lg">Instagram</h3>
                <a
                  href="https://instagram.com/elicordeirodoces"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  @elicordeirodoces
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-sm border border-border min-h-[400px]"
          >
            <iframe
              title="Localização Eli Cordeiro Doces"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5!2d-43.35!3d-22.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.+Jos%C3%A9+Ferreira+Lemos+-+Eng.+Belford%2C+S%C3%A3o+Jo%C3%A3o+de+Meriti+-+RJ%2C+25520-501!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
