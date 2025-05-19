import { motion } from "framer-motion";
import { HeartIcon, PlusCircleIcon, TagIcon} from "@heroicons/react/20/solid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Country } from "../../constants/countries";
import { Game, Genre, Developers, Publishers } from "../../hooks/useGamesData";

interface BestbuyProps {
  games: Game[];
  publishers: (Publishers | null)[];
  developers: (Developers | null)[];
  genres: (Genre | null)[];
  countries: Country[];
  onAddToCart: (gameName: string) => void;
}

export default function Bestbuy({ games, publishers, developers, genres, countries, onAddToCart }: BestbuyProps) {
  const handleAddToCart = (gameName: string) => {
    console.log("Kosárba rakás:", gameName);
    toast.success(`${gameName} hozzáadva a kosárhoz!`, {
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

  const renderGameCard = (game: Game, publisher: Publishers | null, genre: Genre | null, country: Country, index: number) => (
    <div
      key={index}
      className="relative w-full max-w-[280px] bg-[#1C1C1C] rounded-[10px] shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer flex flex-col"
    >
      <div className="img object-scale-down w-full h-[180px] rounded-t-[10px] overflow-hidden relative">
        <img
          src={`http://localhost:8080/images/header/${game.kep_id}.jpg`}
          alt={game.nev}
          className="w-full h-full object-cover"
          onError={() => console.error("Image load failed:", `http://localhost:8080/images/header/${game.kep_id}.jpg`)}
        />
        <motion.button
          className="absolute top-2 left-2 bg-black bg-opacity-60 px-2 py-1 text-xs font-semibold text-white rounded"
          title={`Kiadó: ${publisher?.kiado_nev ?? "Ismeretlen kiadó"}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {publisher?.kiado_nev ?? "Ismeretlen kiadó"}
        </motion.button>
        <div className="absolute top-2 right-2 flex items-center space-x-2">
          <motion.div
            className="bg-white rounded-full p-1 transition-colors duration-200 ease-in-out hover:bg-[#E30419]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <HeartIcon className="text-[#E30419] h-5 w-5 hover:text-white" />
          </motion.div>
          <motion.div
            className="bg-white rounded-full p-1 transition-colors duration-200 ease-in-out hover:bg-[#E30419]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <TagIcon className="text-[#E30419] h-5 w-5 hover:text-white" />
          </motion.div>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-base font-semibold text-white text-center truncate mb-2">{game.nev}</h3>
        <div className="flex justify-center space-x-2 text-neutral-300 text-xs mb-2">
          <span className="bg-[#2a2a2a] px-2 py-0.5 rounded-full">{genre?.mufaj_nev ?? "Ismeretlen műfaj"}</span>
        </div>
        <div className="flex items-center justify-center text-sm text-white space-x-2 mb-3">
          <img
            src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
            alt={country.name}
            title={`Elérhető itt: ${country.name}`}
            className="w-5 h-3 rounded-sm"
            onError={() => console.error("Flag image load failed:", country.code)}
          />
          <span>{country.name}</span>
        </div>
        <div className="text-center text-2xl font-bold text-white mb-4">{game.ar}€</div>
        <div className="flex justify-center space-x-4">
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
    </div>
  );

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold mb-2">Legkelendőbb játékok a hónapban</h1>
      <h2 className="font-bold mt-2 text-lg text-center text-neutral-500 max-w-4xl">
        Legyél te is a trend része – válogass a legjobbak közül!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center mt-10">
        {games.slice(0, 4).map((game, i) =>
          renderGameCard(game, publishers[i] ?? null, genres[i] ?? null, countries[i] ?? countries[0], i)
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center mt-10">
        {games.slice(4, 8).map((game, i) =>
          renderGameCard(game, publishers[i + 4] ?? null, genres[i + 4] ?? null, countries[i + 4] ?? countries[0], i + 4)
        )}
      </div>
    </div>
  );
}
