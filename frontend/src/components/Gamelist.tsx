import React, { useState } from "react";
import GameCard from "./Gamelist/GameCard";
import FilterPanel from "./Gamelist/Filterpanel";
import useGamesData from "../hooks/useGamesData";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";

export default function GameList() {
  const {
    loading,
    randomGames,
    genres,
    categories,
    platforms,
    developers,
    publishers,
    getRandomCountry,
  } = useGamesData();

  const [showFilter, setShowFilter] = useState(true);

  const handlePriceChange = (range: { min: number; max: number }) => {
    console.log("Árváltozás:", range);
  };

  return (
    <div className="flex mt-10 items-start">
      <button
        className="md:hidden p-2 rounded-lg mb-4 flex items-center gap-2"
        onClick={() => setShowFilter(!showFilter)}
      >
        <AdjustmentsHorizontalIcon className="h-6 w-6" />
        Szűrő
      </button>

      <div
        className={`w-full ${
          showFilter ? "block" : "hidden"
        } md:block md:w-auto md:ml-20 md:mr-20 md:mt-0 mb-6 md:mb-0`}
      >
        <FilterPanel
          genre={genres}
          category={categories}
          platform={platforms}
          developer={developers}
          publisher={publishers}
          onPriceChange={handlePriceChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
        {randomGames.map((game) => {
          const publisher =
            publishers.find((p) => p.kiado_id === game.kiado_id) ?? null;
          const developer =
            developers.find((d) => d.fejleszto_id === game.fejleszto_id) ?? null;
          const mufajIds = game.mufaj_ids
            ? game.mufaj_ids.split(",").map((id: string) => Number(id.trim()))
            : [];
          const genresForGame = genres.filter((g) =>
            mufajIds.includes(g.mufaj_id)
          );

          return (
            <GameCard
              key={game.jatek_id}
              game={game}
              publisher={publisher}
              developer={developer}
              genre={genresForGame[0] ?? null}
              country={getRandomCountry()}
            />
          );
        })}
      </div>
    </div>
  );
}
