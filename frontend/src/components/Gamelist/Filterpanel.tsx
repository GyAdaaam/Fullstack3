import { useState } from "react";
import { motion } from "framer-motion";
import { Category, Developers, Genre, Platforms, Publishers } from "../../hooks/useGamesData";
import {
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  CurrencyEuroIcon,
  TagIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  BuildingStorefrontIcon,
  PuzzlePieceIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";
import { CommandLineIcon } from "@heroicons/react/20/solid";
import { countries } from "../../constants/countries";

interface GenresProps {
  genre: Genre[];
}

interface CategoryProps {
  category: Category[];
}

interface PlatformProps {
  platform: Platforms[];
}

interface DeveloperProps {
  developer: Developers[];
}

interface PublisherProps {
  publisher: Publishers[];
}

interface PriceRangeInputProps {
  minValue?: number;
  maxValue?: number;
  onPriceChange: (range: { min: number; max: number }) => void;
}

type CombinedProps = CategoryProps & GenresProps & PlatformProps & DeveloperProps & PublisherProps & PriceRangeInputProps;

export default function FilterPanel({
  minValue = 0,
  maxValue = 100,
  onPriceChange,
  genre,
  category,
  platform,
  publisher,
  developer,
}: CombinedProps) {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    price: true,
    onSale: false,
    publisher: false,
    platform: false,
    region: false,
    genre: false,
    features: false,
  });

  const [min, setMin] = useState<number>(minValue);
  const [max, setMax] = useState<number>(maxValue);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= max) {
      setMin(value);
      onPriceChange({ min: value, max });
    }
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= min) {
      setMax(value);
      onPriceChange({ min, max: value });
    }
  };

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-80 p-6 text-white rounded-2xl shadow-xl bg-[#1C1C1C] space-y-4">
      <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
        <AdjustmentsHorizontalIcon className="w-6 h-6" /> Szűrés
      </h2>

      {[
        {
          key: "price",
          label: "Ár",
          content: (
            <div className="flex justify-center items-center">
              <div className="flex gap-4 text-center items-center mt-4">
                <input
                  type="number"
                  min={0}
                  max={max}
                  value={min}
                  onChange={handleMinPriceChange}
                  className="w-16 p-1 rounded border text-white"
                  placeholder="Min"
                />
                <span>-</span>
                <input
                  type="number"
                  min={min}
                  max={1000}
                  value={max}
                  onChange={handleMaxPriceChange}
                  className="w-16 p-1 rounded border text-white"
                  placeholder="Max"
                />
                <span>€</span>
              </div>
            </div>
          ),
          icon: CurrencyEuroIcon,
        },
        { key: "onSale", label: "Akciós", content: ["Csak akciós termékek"], icon: TagIcon },
        {
          key: "publisher",
          label: "Kiadó",
          content: publisher.map((p) => p.kiado_nev),
          icon: BuildingStorefrontIcon,
        },
        {
          key: "developer",
          label: "Fejlesztő",
          content: developer.map((d) => d.fejleszto_nev),
          icon: CommandLineIcon,
        },
        {
          key: "platform",
          label: "Platform",
          content: platform.map((p) => p.platform_nev),
          icon: DevicePhoneMobileIcon,
        },
        { key: "region", label: "Régió", content: countries.map((c) => c.name), icon: GlobeAltIcon },
        { key: "genre", label: "Műfaj", content: genre.map((g) => g.mufaj_nev), icon: PuzzlePieceIcon },
        { key: "category", label: "Kategóriák", content: category.map((c) => c.kategoria_nev), icon: BoltIcon },
      ].map(({ key, label, content, icon: Icon }) => (
        <div key={key} className="border-b border-gray-700 pb-2">
          <button
            className="w-full flex justify-between items-center text-lg font-semibold"
            onClick={() => toggleSection(key)}
          >
            <span className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-gray-400" /> {label}
            </span>
            <motion.span animate={{ rotate: openSections[key] ? 180 : 0 }}>
              <ChevronDownIcon className="w-5 h-5" />
            </motion.span>
          </button>

          <motion.div
            initial={false}
            animate={{ height: openSections[key] ? "auto" : 0 }}
            className="overflow-hidden"
          >
            {key === "price" ? (
              content
            ) : Array.isArray(content) ? (
              <ul className="space-y-1 mt-2">
                {content.map((item: string, idx: number) => (
                  <li
                    key={`${key}-${idx}`}
                    className="cursor-pointer hover:text-gray-400 flex items-center gap-2"
                  >
                    <input type="checkbox" className="accent-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              content
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
