import { useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Newsletter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-12 max-w-xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-4">Iratkozz fel hírlevelünkre</h2>
      <p className="mb-6 text-neutral-400">Értesülj elsőként az akciókról és új megjelenésekről!</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Email címed"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-3 rounded-xl bg-neutral-900 border border-neutral-700 focus:outline-none"
          required
        />
        <button
          type="submit"
          className="bg-[#E30419] hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          Feliratkozom
        </button>
      </form>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex justify-center items-center"
        >
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-900 p-8 rounded-xl text-center max-w-sm mx-auto shadow-lg relative"
          >
            <motion.button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              whileHover={{
                scale: 1.2,
                rotate: 45,
                transition: { duration: 0.2 }
              }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.1 }
              }}
            >
              <XMarkIcon className="w-6 h-6" />
            </motion.button>

            <h3 className="text-2xl font-bold text-[#E30419] mb-4">Sikeres feliratkozás!</h3>
            <p className="mb-6">
              Köszönjük, hogy feliratkoztál hírlevelünkre. Mostantól elsőként értesülhetsz az új akciókról és termékekről!
            </p>
            <p className="mb-6">
              Feliratkozott e-mail: <span className="font-semibold text-neutral-600">{email}</span>
            </p>

            <motion.button
              onClick={closeModal}
              className="bg-[#E30419] hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 }
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              Bezárom
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
