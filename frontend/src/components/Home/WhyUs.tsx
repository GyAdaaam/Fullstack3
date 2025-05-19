import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { reasons } from "../../constants/whyusitems";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function WhyUs() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-white mb-12 text-center">
        Miért minket válassz?
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="group border border-neutral-800 transition-all bg-neutral-900 rounded-2xl p-6 shadow-md flex gap-4 items-start"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
            }}
            whileTap={{
              scale: 0.98,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="bg-[#E30419] p-3 rounded-full flex items-center justify-center">
              <CheckCircleIcon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white transition-colors">
                {reason.text}
              </h3>
              <p className="text-sm text-neutral-400 mt-1">{reason.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
