import { useState } from 'react';
import { motion } from 'framer-motion';
import getFAQItems, { FAQItem } from '../../constants/faqitems';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const questions: FAQItem[] = getFAQItems();

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-lg mt-10 text-[#FFFFFF]">
      <h2 className="text-4xl font-bold text-center mb-8 tracking-wide text-[#FFFFFF]">
        Gyakran Ismételt Kérdések
      </h2>
      <div className="space-y-6">
        {questions.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'bg-[#1a1a1a]' : 'bg-red'
              }`}
            >
              <motion.div
                className="flex justify-between items-center p-5 cursor-pointer"
                onClick={() => toggleQuestion(index)}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-[#FFFFFF]" />
                  <span className="text-lg font-medium">{item.question}</span>
                </div>
                {activeIndex === index ? (
                  <ChevronUpIcon className="h-6 w-6 text-[#FFFFFF]" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-[#FFFFFF]" />
                )}
              </motion.div>
              {activeIndex === index && (
                <motion.div
                  className="px-5 pb-5 text-base"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {item.answer}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
