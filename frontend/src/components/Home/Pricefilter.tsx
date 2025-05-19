import { priceRanges } from '../../constants/homeitems';
import { motion } from 'framer-motion';

export default function PriceFilter() {
    return (
        <div className="flex flex-col items-center mt-10 px-4">
            <h2 className="text-3xl font-bold text-white mb-4">Játékok ár szerint</h2>
            <p className="text-neutral-400 mb-6">Tekinsd meg legjobb termékeinket a legalacsonyabb árakon!</p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8 w-full max-w-5xl">
                {priceRanges.map((range, index) => (
                    <motion.div
                        key={index}
                        className="bg-[#1C1C1C] text-white text-4xl font-bold py-16 px-10 rounded-lg shadow-lg flex flex-col items-center justify-center hover:shadow-2xl cursor-pointer"
                        whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
                        whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
                    >
                        <span>{range.price}</span>
                        <span className="text-[#E30419] text-2xl">{range.label}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
