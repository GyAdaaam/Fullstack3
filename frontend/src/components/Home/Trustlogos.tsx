import { motion } from "framer-motion";
import { trustItems } from "../../constants/trustitems";

export default function TrustLogos() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24 px-6 max-w-7xl mx-auto text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Vásárolj Teljes Bizalommal
      </h2>
      <p className="text-neutral-400 text-lg mb-16 max-w-2xl mx-auto">
        Biztosítjuk, hogy minden egyes vásárlás nálunk nem csak gyors és kényelmes,
        hanem maximálisan védett és átlátható is. Íme, miért válasz minket több ezer
        elégedett vásárló.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {trustItems.map(({ title, description, icon: Icon }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-start gap-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-left"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-700">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-white font-semibold text-lg">{title}</h4>
            <p className="text-neutral-400 text-sm leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
