import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { softwareCards } from "../../constants/softwarecard";

export default function Softwares() {
  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <h2 className="text-4xl font-bold mb-6 text-white">Szoftverek</h2>
      <p className="text-lg text-center text-neutral-500 max-w-4xl mb-8">
        Tekintsd meg lenyűgöző szoftverkatalógusunkat, amely magában foglalja az operációs rendszereket,
        vírusirtókat, üzleti csomagokat és még sok mást!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center mt-10">
        {softwareCards.map((card, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`bg-[#E30419] rounded-xl shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-2xl w-full max-w-[500px] flex ${
                isEven ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="p-6 flex flex-col items-start">
                <h3 className="text-white text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-white text-sm mb-6">{card.description}</p>

                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1 },
                  }}
                  className="bg-white text-[#E30419] py-2 px-6 rounded-lg font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  <ShoppingCartIcon className="w-5 h-5" />
                  {card.buttonText}
                </motion.button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
