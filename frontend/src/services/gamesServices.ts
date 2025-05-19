import gameHttp from '../http/gameHttp';

export interface Game {
  mufaj_ids: string;
  jatek_id: string;
  nev: string;
  kep_id: string;
  platform?: string;
  mufaj?: string;
  ar: number;
  kiado_id: number;
  fejleszto_id: number;
}

export interface RawGameData {
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


const aggregateRawGameData = (data: RawGameData[]): Game => {
  return {
    jatek_id: data[0].jatek_id.toString(),
    nev: data[0].nev,
    kep_id: data[0].kep_id.toString(),
    platform: Array.from(new Set(data.map(d => d.platform_nev))).join(", "),
    mufaj: Array.from(new Set(data.map(d => d.mufaj_nev))).join(", "),
    ar: data[0].ar,
    kiado_id: data[0].kiado_id,
    fejleszto_id: data[0].fejleszto_id,
    mufaj_ids: data[0].mufaj_ids,
  };
};

const getAllGames = async (): Promise<Game[]> => {
  const data = await gameHttp.getAllGames();
  return data;
};

const getGameById = async (id: number): Promise<Game | null> => {
  const rawData = await gameHttp.getGameById(id);
  if (!rawData || !Array.isArray(rawData) || rawData.length === 0) return null;
  return aggregateRawGameData(rawData);
};

const getAllGenres = () => gameHttp.getAllGenres();
const getAllCategories = () => gameHttp.getAllCategories();
const getAllPlatforms = () => gameHttp.getAllPlatforms();
const getAllPublishers = () => gameHttp.getAllPublishers();
const getAllDevelopers = () => gameHttp.getAllDevelopers();

const GamesServices = {
  getAllGames,
  getGameById,
  getAllGenres,
  getAllCategories,
  getAllPlatforms,
  getAllPublishers,
  getAllDevelopers,
};

export default GamesServices;
