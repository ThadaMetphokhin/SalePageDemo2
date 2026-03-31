// src/components/Ingredients.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Leaf, Flower2 } from 'lucide-react';
import { Ingredient } from '@/types/index';

const ingredients: Ingredient[] = [
  {
    name: 'Alpha-GPC ( 99% Purity )',
    description: 'สารสื่อประสาทที่ช่วยให้คิดไวและจำแม่น เพิ่มประสิทธิภาพการเชื่อมต่อเซลล์สมอง',
    icon: 'Atom',
  },
  {
    name: 'L - Theanine & Caffeine Synergy',
    description: 'พลังงานที่นิ่ง ไม่ล้น ไม่ลน โฟกัสยาวนานโดยไม่มีอาการกระวนกระวาย',
    icon: 'Leaf',
  },
  {
    name: "Lion's Mane Extract",
    description: 'บำรุงเนื้อเยื่อสมองในระยะยาว ฟื้นฟูระบบประสาท เสริมความจำยั่งยืน',
    icon: 'Flower2',
  },
];

const iconMap = {
  Atom,
  Leaf,
  Flower2,
};

const Ingredients: React.FC = () => {
  return (
    <section id="science" className="py-16 md:py-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" role="ingredient">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3"
      >
        Science, Not Magic.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-gray-500 max-w-2xl mx-auto mb-12 md:mb-16"
      >
        ส่วนผสมระดับคลินิก พิสูจน์ด้วยงานวิจัย
      </motion.p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {ingredients.map((ingredient, idx) => {
          const IconComponent = iconMap[ingredient.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg premium-card text-center"
            >
              <div className="w-20 h-20 mx-auto bg-amber-50 rounded-full flex items-center justify-center mb-5">
                <IconComponent className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">{ingredient.name}</h3>
              <p className="text-gray-600">{ingredient.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Ingredients;