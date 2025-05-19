import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection(){
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="flex flex-col items-center justify-center h-full w-full z-10 text-center px-4 background bg-no-repeat bg-cover">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-transparent stroke-text">
          LevelUpDeals
        </h1>
        <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white">
          Üdvözlünk a legjobb játékajánlatok között!
        </h2>
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
              to="/jatekok"
              className="inline-flex items-center justify-center bg-[#e7162b] text-white py-3 px-8 md:py-4 md:px-10 lg:py-4 lg:px-10 rounded-full text-lg md:text-xl lg:text-2xl font-bold"
            >
              <span className="text-3xl">Fedezd fel a játékokat</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

