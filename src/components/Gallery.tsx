import { motion } from "framer-motion";
import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const images = [
  { src: gallery1, alt: "Bombom de Travessa", label: "Bombom de Travessa" },
  { src: gallery2, alt: "Torta Cookie com Nutella", label: "Torta Cookie" },
  { src: gallery3, alt: "Empada", label: "Empada" },
  { src: gallery4, alt: "Pavê de Leite Ninho", label: "Pavê" },
  { src: gallery5, alt: "Banoffee", label: "Banoffee" },
  { src: gallery6, alt: "Bolo de Cenoura com Chocolate", label: "Bolo de Cenoura" },
  { src: gallery7, alt: "Bombom com Ninho, Chocolate e Chantilly", label: "Bombom no Pote" },
  { src: gallery8, alt: "Torta de Limão Trufado", label: "Torta de Limão" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-body">
            Nossas Criações
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3">
            Galeria de <span className="italic text-primary">doces</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300 flex items-end p-4">
                <span className="text-primary-foreground font-display text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
