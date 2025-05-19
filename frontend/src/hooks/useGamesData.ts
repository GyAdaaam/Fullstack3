import { useEffect, useState } from "react";
import GamesServices from "../services/gamesServices";
import { countries, Country } from "../constants/countries";

export interface Game {
  mufaj_ids: string;
  jatek_id : string;
  nev: string;
  kep_id: string;
  platform?: string;
  mufaj?: string;
  ar: number;
  kiado_id: number;
  fejleszto_id: number;
}

export interface Genre {
  mufaj_id : number;
  mufaj_nev : string;
}

export interface Category {
  kategoria_id : number;
  kategoria_nev : string;
}

export interface Platforms {
  platform_id : number;
  platform_nev : string;
}

export interface Publishers {
  kiado_id : number;
  kiado_nev : string;
}

export interface Developers {
  fejleszto_id : number;
  fejleszto_nev : string;
}

interface RawGameData {
  jatek_id: number;
  fejleszto_id: number;
  kiado_id: number;
  nev: string;
  megjelenesi_datum: string;
  ar: number;
  ajanlott_eletkor: number;
  kep_id: number;
  kep_db: number;
  db: number;
  leiras: string;
  fejleszto_nev: string;
  kiado_nev: string;
  platform_nev: string;
  kategoria_nev: string;
  mufaj_nev: string;
  mufaj_ids: string; 
}

const getRandomCountry = (): Country => {
  return countries[Math.floor(Math.random() * countries.length)];
};

const getRandomGames = (games: Game[], count: number): Game[] => {
  const maxCount = Math.min(count, 100);
  const shuffled = [...games].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, maxCount);
};

const useGamesData = (gameId?: number) => {
  const [games, setGames] = useState<Game[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [platforms, setPlatforms] = useState<Platforms[]>([]);
  const [loading, setLoading] = useState(true);
  const [publishers, setPublishers] = useState<Publishers[]>([]);
  const [developers, setDevelopers] = useState<Developers[]>([]);
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [
          allGames,
          allGenres,
          allCategories,
          allPlatforms,
          allDevelopers,
          allPublishers,
        ] = await Promise.all([
          GamesServices.getAllGames(),
          GamesServices.getAllGenres(),
          GamesServices.getAllCategories(),
          GamesServices.getAllPlatforms(),
          GamesServices.getAllDevelopers(),
          GamesServices.getAllPublishers(),
        ]);

        setGames(allGames);
        setGenres(allGenres);
        setCategories(allCategories);
        setPlatforms(allPlatforms);
        setDevelopers(allDevelopers);
        setPublishers(allPublishers);
      } catch(error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [gameId]);

  const randomGames = getRandomGames(games, 100);

  return {
    loading,
    randomGames,
    genres,
    categories,
    platforms,
    publishers,
    developers,
    getRandomCountry,
    game,
  };
};

export default useGamesData;
