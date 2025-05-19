import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center background bg-no-repeat bg-cover items-center px-4">
      <h1 className="text-9xl font-extrabold text-white select-none">404</h1>
      <h2 className="text-4xl font-semibold text-white mb-4">Az oldal nem található</h2>
      <p className="mb-8 max-w-md text-center">
        Sajnos, az általad keresett oldal nem létezik vagy már nem érhető el.
      </p>

      <div className="flex justify-center mt-10">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
          whileTap={{
            scale: 1,
            transition: { duration: 0.1 },
          }}
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-[#e7162b] text-white py-3 px-8 md:py-4 md:px-10 lg:py-4 lg:px-10 text-lg md:text-xl lg:text-2xl font-bold"
          >
            <span className="text-3xl">Vissza a főoldalra</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
