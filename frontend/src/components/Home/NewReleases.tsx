import React from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { Game, Genre, Developers, Publishers } from "../../hooks/useGamesData";
import { Country } from "../../constants/countries";

interface NewReleasesProps {
  games: Game[];
  publishers: (Publishers | null)[];
  developers: (Developers | null)[];
  genres: (Genre | null)[];
  countries: Country[];
  onAddToCart: (gameName: string) => void;
}

export default function NewReleases({
  games,
  publishers,
  developers,
  genres,
  countries,
  onAddToCart,
}: NewReleasesProps) {
  const handleAddToCart = (gameName: string) => {
    toast.success(` ${gameName} hozzáadva a kosárhoz!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      style: {
        background: "#1E1E1E",
        color: "#fff",
        border: "1px solid #E30419",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(227, 4, 25, 0.5)",
      },
      icon: <PlusCircleIcon />,
    });
    onAddToCart(gameName);
  };

  const getGameMetaData = (
    index: number,
    genres: (Genre | null)[],
    publishers: (Publishers | null)[],
    countries: Country[]
  ) => {
    return {
      genreName: genres[index]?.mufaj_nev || "Kaland",
      publisherName: publishers[index]?.kiado_nev || "Ismeretlen kiadó",
      country: countries[index] || { code: "us", name: "USA" },
    };
  };

  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <ToastContainer className="mt-16" />
      <h2 className="text-4xl text-center font-bold mb-8">Friss megjelenések</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {games.length > 0 ? (
          games.slice(0, 3).map((game, index) => {
            const { genreName, publisherName, country } = getGameMetaData(index, genres, publishers, countries);
            const key = game.kep_id;

            return (
              <div key={key} className="rounded-2xl overflow-hidden border border-neutral-800">
                <div className="img w-full h-[180px] rounded-t-[10px] overflow-hidden relative">
                  <img
                    src={`http://localhost:8080/images/header/${game.kep_id}.jpg`}
                    alt={game.nev}
                    className="w-full h-full object-cover"
                  />
                  <motion.button
                    className="absolute top-2 left-2 bg-black bg-opacity-60 px-2 py-1 text-xs font-semibold text-white rounded"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {publisherName}
                  </motion.button>
                </div>

                <div className="p-4 flex-1">
                  <h1 className="font-semibold text-white text-xl text-center truncate">{game.nev}</h1>
                </div>

                <div className="flex justify-center space-x-2 text-neutral-300 text-xs mb-2">
                  <span className="bg-[#2a2a2a] px-2 py-0.5 rounded-full">{genreName}</span>
                </div>

                <div className="flex items-center justify-center text-sm text-white space-x-2 mb-3">
                  <img
                    src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                    alt={country.name}
                    title={`Elérhető itt: ${country.name}`}
                    className="w-5 h-3 rounded-sm"
                  />
                  <span>{country.name}</span>
                </div>

                <div className="text-center text-2xl font-bold text-white mb-4">{game.ar}€</div>

                <div className="flex justify-center mb-4 space-x-4 px-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#E30419] text-white py-1 px-3 rounded hover:bg-red-700 transition-colors duration-200"
                    onClick={() => handleAddToCart(game.nev)}
                  >
                    Kosárba
                  </motion.button>
                  <motion.button
                    className="border border-white text-white py-1 px-3 rounded hover:bg-white hover:text-black transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Lehetőségek
                  </motion.button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-white">Nincsenek elérhető játékok.</p>
        )}
      </div>
    </section>
  );
}
