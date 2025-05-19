import http from '../http-common';

const getAllGames = () => http.get('/games').then(res => res.data);
const getAllGenres = () => http.get('/games/genres').then(res => res.data);
const getAllCategories = () => http.get('/games/categories').then(res => res.data);
const getAllPlatforms = () => http.get('/games/platforms').then(res => res.data);
const getAllPublishers = () => http.get('/games/publishers').then(res => res.data);
const getAllDevelopers = () => http.get('/games/developers').then(res => res.data);
const getGameById = (id: number) => http.get(`/games/${id}`).then(res => res.data);

const gameHttp = {
  getAllGames,
  getAllGenres,
  getAllCategories,
  getAllPlatforms,
  getAllPublishers,
  getAllDevelopers,
  getGameById,
};

export default gameHttp;
