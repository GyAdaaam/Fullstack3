import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./Home/Herosection";
import Preorder from "./Home/Preorder";
import Softwares from "./Home/Softwares";
import PriceFilter from "./Home/Pricefilter";
import Bestbuy from "./Home/Bestbuy";
import Categories from "./Home/Categories";
import FAQ from "./Home/Faq";
import WhyUs from "./Home/WhyUs";
import BannerPromo from "./Home/BannerPromo";
import NewReleases from "./Home/NewReleases";
import Newsletter from "./Home/Newsletter";
import TrustLogos from "./Home/Trustlogos";
import { countries } from "../constants/countries";
import useGamesData from "../hooks/useGamesData";

export default function Home() {
  const { randomGames, publishers, developers, genres, getRandomCountry } = useGamesData();

  const handleAddToCart = (gameName: string) => {
  };

  const bestbuyGames = randomGames.slice(0, 8);
  const bestbuyPublishers = bestbuyGames.map(
    (game) => publishers.find((p) => p.kiado_id === game.kiado_id) ?? null
  );
  const bestbuyDevelopers = bestbuyGames.map(
    (game) => developers.find((d) => d.fejleszto_id === game.fejleszto_id) ?? null
  );
  const bestbuyGenres = bestbuyGames.map((game) => {
    const mufajIds = game.mufaj_ids
      ? game.mufaj_ids.split(",").map((id) => Number(id.trim()))
      : [];
    return genres.find((g) => mufajIds.includes(g.mufaj_id)) ?? null;
  });
  const bestbuyCountries = bestbuyGames.map(() => getRandomCountry());

  const preorderGames = randomGames.slice(8, 16);
  const preorderPublishers = preorderGames.map(
    (game) => publishers.find((p) => p.kiado_id === game.kiado_id) ?? null
  );
  const preorderDevelopers = preorderGames.map(
    (game) => developers.find((d) => d.fejleszto_id === game.fejleszto_id) ?? null
  );
  const preorderGenres = preorderGames.map((game) => {
    const mufajIds = game.mufaj_ids
      ? game.mufaj_ids.split(",").map((id) => Number(id.trim()))
      : [];
    return genres.find((g) => mufajIds.includes(g.mufaj_id)) ?? null;
  });
  const preorderCountries = preorderGames.map(() => getRandomCountry());

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 25, duration: 1.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Preorder
          games={preorderGames}
          publishers={preorderPublishers}
          developers={preorderDevelopers}
          genres={preorderGenres}
          countries={preorderCountries}
          onAddToCart={handleAddToCart}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Softwares />
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 30, duration: 1.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <PriceFilter />
      </motion.div>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 25, duration: 1.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Bestbuy
          games={bestbuyGames}
          publishers={bestbuyPublishers}
          developers={bestbuyDevelopers}
          genres={bestbuyGenres}
          countries={bestbuyCountries}
          onAddToCart={handleAddToCart}
        />
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 30, duration: 1.3 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Categories />
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 30, duration: 1.3 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <FAQ />
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <WhyUs />
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <BannerPromo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <NewReleases
          games={randomGames}
          publishers={publishers}
          developers={developers}
          genres={genres}
          countries={countries}
          onAddToCart={handleAddToCart}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Newsletter />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <TrustLogos />
      </motion.div>
    </div>
  );
}
