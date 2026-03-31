// src/components/PainPoint.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, CloudRain, TrendingDown } from 'lucide-react';

const PainPoint: React.FC = () => {
  const painPoints = [
    {
      icon: Coffee,
      title: '☕ Coffee Crash',
      description: 'ดีดแค่ชั่วโมงเดียว แล้วง่วงกว่าเดิม',
    },
    {
      icon: CloudRain,
      title: '🧠 Brain Fog',
      description: 'ตื่นมาแต่สมองไม่สั่งการ คิดงานไม่ออก',
    },
    {
      icon: TrendingDown,
      title: '📉 Mid-day Slump',
      description: 'ช่วงบ่ายพลังงานดิ่งลงเหว จนทำงานพลาด',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white/50" role="painpoint">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12"
        >
          ทำไมกาแฟถึงไม่ใช่คำตอบอีกต่อไป ?
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-amber-50 to-white p-6 md:p-8 rounded-2xl shadow-md premium-card text-center"
            >
              <point.icon className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-lg md:text-xl mt-10 font-semibold text-gray-800"
        >
          ZenithCore+ คือการเติม <span className="gold-text-gradient font-bold">" เชื้อเพลิงระดับพรีเมียม "</span> ให้เซลล์สมองโดยตรง
        </motion.p>
      </div>
    </section>
  );
};

export default PainPoint;