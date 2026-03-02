import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const menuCategories = [
  {
    category: "Tortas & Bolos",
    emoji: "🍰",
    items: [
      { name: "Torta Cookie com Nutella", desc: "Crocante e irresistível", price: "R$ 140,00" },
      { name: "Torta de Limão Trufado", desc: "Cremosa e refrescante", price: "R$ 10,00 pote" },
      { name: "Bolo de Cenoura com Chocolate", desc: "Clássico e delicioso", price: "R$ 10,00 pote" },
      { name: "Banoffee", desc: "Banana, doce de leite e chantilly", price: "R$ 10,00 pote" },
    ],
  },
  {
    category: "Sobremesas de Travessa",
    emoji: "🍫",
    items: [
      { name: "Bombom de Travessa 1L", desc: "Camadas de chocolate e creme", price: "R$ 75,00" },
      { name: "Bombom de Travessa 2L", desc: "Para toda a família", price: "R$ 140,00" },
      { name: "Bombom no Pote", desc: "Ninho, chocolate e chantilly", price: "R$ 10,00 pote" },
      { name: "Pavê de Leite Ninho (4 pessoas)", desc: "Cremoso e irresistível", price: "R$ 50,00" },
      { name: "Pavê de Leite Ninho (10 pessoas)", desc: "Para festas e reuniões", price: "R$ 80,00" },
    ],
  },
  {
    category: "Salgados",
    emoji: "🥧",
    items: [
      { name: "Empada 1,5kg", desc: "Massa crocante e recheio generoso", price: "R$ 75,00" },
      { name: "Empada 2kg", desc: "Tamanho família", price: "R$ 145,00" },
    ],
  },
];

const MenuSection = () => {
  return (
    <section id="cardapio" className="py-20 md:py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
            Nosso Cardápio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3">
            Feitos com <span className="italic text-primary">amor</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Cada doce é preparado artesanalmente com ingredientes selecionados
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{cat.emoji}</div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                {cat.category}
              </h3>
              <div className="space-y-5">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-2">
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <span className="text-primary font-semibold text-sm whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="text-muted-foreground text-sm mb-8">
            * Tamanhos grandes têm valor a combinar. Entre em contato!
          </p>
          <a
            href="https://wa.me/5521996979718?text=Ola%21%20Gostaria%20de%20fazer%20um%20pedido%20ou%20receber%20mais%20informacoes%20sobre%20os%20doces."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity text-lg"
          >
            <Phone className="w-5 h-5" />
            Peça agora pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
