import { UserGroupIcon, BoltIcon, BookOpenIcon, MapIcon, PuzzlePieceIcon, ClockIcon, NewspaperIcon, TruckIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Categories(){
    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-2xl font-bold mb-2">Játék kategóriák</h2>
            <p className="font-bold mt-2 text-lg text-center text-neutral-500 max-w-4xl">
                Fedezd fel a legjobb játékokat a különböző kategóriákban!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center mt-10">


                <div className="relative w-full max-w-[280px] bg-[#1C1C1C] rounded-[15px] shadow-lg flex flex-col items-center p-12 transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer">
                    <UserGroupIcon className="h-12 w-12 text-[#E30419]" />
                    <h2 className="text-3xl font-bold mt-4 text-white">Sport</h2>
                    <motion.button className="bg-[#E30419] text-white font-bold py-2 px-4 rounded-full mt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                        Tovább
                    </motion.button>
                </div>


                <div className="relative w-full max-w-[280px] bg-[#1C1C1C] rounded-[15px] shadow-lg flex flex-col items-center p-12 transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer">
                    <BoltIcon className="h-12 w-12 text-[#E30419]" />
                    <h2 className="text-3xl font-bold mt-4 text-white">Akció</h2>
                    <motion.button className="bg-[#E30419] text-white font-bold py-2 px-4 rounded-full mt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                        Tovább
                    </motion.button>
                </div>


                <div className="relative w-full max-w-[280px] bg-[#1C1C1C] rounded-[15px] shadow-lg flex flex-col items-center p-12 transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer">
                    <BookOpenIcon className="h-12 w-12 text-[#E30419]" />
                    <h2 className="text-3xl font-bold mt-4 text-white">RPG</h2>
                    <motion.button className="bg-[#E30419] text-white font-bold py-2 px-4 rounded-full mt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                        Tovább
                    </motion.button>
                </div>


                <div className="relative w-full max-w-[280px] bg-[#1C1C1C] rounded-[15px] shadow-lg flex flex-col items-center p-12 transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer">
                    <MapIcon className="h-12 w-12 text-[#E30419]" />
                    <h2 className="text-3xl font-bold mt-4 text-white">Kaland</h2>
                    <motion.button className="bg-[#E30419] text-white font-bold py-2 px-4 rounded-full mt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                        Tovább
                    </motion.button>
                </div>


                <div className="relative w-full max-w-[280px] bg-[#1C1C1C] rounded-[15px] shadow-lg flex flex-col items-center p-12 transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer">
                    <TruckIcon className="h-12 w-12 text-[#E30419]" />
                    <h2 className="text-3xl font-bold mt-4 text-white">Verseny</h2>
                    <motion.button className="bg-[#E30419] text-white font-bold py-2 px-4 rounded-full mt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                        Tovább
                    </motion.button>
                </div>


                <div className="relative w-full max-w-[280px] bg-[#1C1C1C] rounded-[15px] shadow-lg flex flex-col items-center p-12 transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer">
                    <PuzzlePieceIcon className="h-12 w-12 text-[#E30419]" />
                    <h2 className="text-3xl font-bold mt-4 text-white">Puzzles</h2>
                    <motion.button className="bg-[#E30419] text-white font-bold py-2 px-4 rounded-full mt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                        Tovább
                    </motion.button>
                </div>


                <div className="relative w-full max-w-[280px] bg-[#1C1C1C] rounded-[15px] shadow-lg flex flex-col items-center p-12 transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer">
                    <ClockIcon className="h-12 w-12 text-[#E30419]" />
                    <h2 className="text-3xl font-bold mt-4 text-white">Stratégiai</h2>
                    <motion.button className="bg-[#E30419] text-white font-bold py-2 px-4 rounded-full mt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                        Tovább
                    </motion.button>
                </div>


                <div className="relative w-full max-w-[280px] bg-[#1C1C1C] rounded-[15px] shadow-lg flex flex-col items-center p-12 transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer">
                    <NewspaperIcon className="h-12 w-12 text-[#E30419]" />
                    <h2 className="text-3xl font-bold mt-4 text-white">Képregény</h2>
                    <motion.button className="bg-[#E30419] text-white font-bold py-2 px-4 rounded-full mt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                        Tovább
                    </motion.button>
                </div>
            </div>
        </div>
    );
};
