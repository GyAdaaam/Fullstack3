import footerlogo from "../assets/footerlogo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center mt-auto py-3 bg-[#101010]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-center md:items-center">
          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="h-1/2 w-1/2 mx-auto flex items-center justify-center"
            >
              <img
                src={footerlogo}
                alt="Footer Logo"
                title="Logó"
                className="footerlogo md:w-auto w-32 h-auto mx-auto md:mx-0"
              />
            </motion.div>
            <p className="mt-2 text-sm text-white">
              Copyright © {currentYear} LevelUpDeals Bolt. Minden jog fenntartva. Használati
              feltételek, Adatvédelmi szabályzat, Cookie-beállítások.
            </p>
            <hr className="border-t-2 border-gray-600 my-4 w-full" />
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center mt-4 md:mt-0">
            <h5 className="font-bold text-white">Hasznos linkek</h5>
            <ul className="list-none text-sm text-white">
              <li>
                <a href="/rolunk">Rólunk</a>
              </li>
              <li>
                <a href="/kapcsolat">Kapcsolat</a>
              </li>
              <li>
                <Link to="/adatvedelmiiranyelv">Adatvédelmi irányelv</Link>
              </li>
              <li>
                <a href="/hasznalatifeltetelek">Használati feltételek</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center mt-4 md:mt-0">
            <h5 className="font-bold text-white">Kapcsolat</h5>
            <ul className="list-none text-sm text-white">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  Github profil
                </a>
              </li>
              <li>
                <a href="/email">Email</a>
              </li>
              <li>
                <a href="/tel">Telefon: 12345678</a>
              </li>
              <li>
                <a href="/github" target="_blank" rel="noopener noreferrer">
                  Random Link
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t-2 border-gray-600 my-4" />

        <div className="w-full">
          <p className="text-center text-sm text-white">
            &copy; {currentYear} LevelUpDeals Minden jog fenntartva.
          </p>
          <p className="text-center text-xs text-gray-400 mt-2 px-4">
            Jogi nyilatkozat:  
            Az ezen az oldalon megjelenő játékokhoz tartozó képek, logók és egyéb vizuális elemek a megfelelő jogtulajdonosok tulajdonát képezik.  
            Az oldal kizárólag nem kereskedelmi, bemutató célokat szolgál, portfólió részeként készült.  
            Ez az oldal nem áll kapcsolatban a Valve Corporation-nel vagy a játékok kiadóival, és nem képviseli azokat.
          </p>
        </div>
      </div>
    </footer>
  );
}
