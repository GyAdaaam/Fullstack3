import { FireIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

export default function BannerPromo(){

    const days = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
    const randomIndex = Math.floor(Math.random() * days.length);
    const randomDay = days[randomIndex];

    const currentYear = new Date().getFullYear();
    const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0'); 
    const currentDay = String(new Date().getDate()).padStart(2, '0');


  return (
    <section className="max-w-5xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-red-600 via-red-500 to-pink-600 text-white shadow-xl flex flex-col items-center space-y-6">
      <h2 className="text-3xl font-extrabold tracking-tight drop-shadow-md flex items-center space-x-2">
        <FireIcon className="w-8 h-8 text-white" />
        <span>Tavaszi akció!</span>
        <FireIcon className="w-8 h-8 text-white" />
      </h2>
      <p className="text-lg max-w-xl text-center font-medium drop-shadow-sm">
        <span className="font-black">-70%</span> kedvezmény több mint 500 játékra – csak {randomDay + "ig"}!
      </p>
      <Link
        to="/jatekok"
        className="bg-white text-red-600 font-bold rounded-full px-8 py-3 transition transform hover:scale-105 hover:shadow-lg">
        <span className="text-2xl">Nézd meg az akciókat</span>
      </Link>
      <p className="text-sm text-center">Érvényes: {currentYear}.{currentMonth}.{currentDay}-tól visszavonásig.</p>
    </section>
  );
};
