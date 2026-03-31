// src/components/Pricing.tsx (เพิ่มปุ่ม Add to Cart)
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap } from 'lucide-react';
import { PricingPlan } from '@/types/index';
import { useCart } from '@/Contexts/CartContext';

const pricingPlans: PricingPlan[] = [
  {
    name: 'The Starter',
    price: 1590,
    description: '1 กระปุก / 30 วัน',
    features: ['ทดลองประสิทธิภาพ', 'สมาธิคมชัด', 'จัดส่งฟรี'],
    id: 'starter',
  },
  {
    name: 'The Executive',
    price: 4290,
    description: '3 กระปุก ( คุ้มสุด )',
    features: ['ประหยัด 15%', 'ผลลัพธ์สูงสุด 12 สัปดาห์', 'Priority Support + Ebook'],
    popular: true,
    badge: '🔥 ขายดีที่สุด',
    id: 'executive',
  },
];

const Pricing: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (plan: PricingPlan) => {
    addToCart({
      id: plan.id,
      name: plan.name,
      price: plan.price,
      variant: plan.description,
    });
  };

  return (
    <div id="pricing">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        เลือกแผนที่ใช่สำหรับคุณ
      </motion.h2>
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 max-w-5xl mx-auto px-4">
        {pricingPlans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`flex flex-col w-full md:w-1/2 relative bg-white rounded-3xl shadow-xl p-8 premium-card text-center ${
              plan.popular ? 'bg-gradient-to-br from-[#0A1F3E] to-[#142B4A] text-white transform border-2 border-[#D4AF37]' : ''
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-[#0A1F3E] px-4 py-1 rounded-full text-sm font-bold">
                {plan.badge}
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className={`text-4xl font-extrabold my-4 ${plan.popular ? '' : 'text-[#0A1F3E]'}`}>
              ฿{plan.price.toLocaleString()}
            </p>
            <p className={`mb-6 ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>{plan.description}</p>
            <ul className="flex-grow space-y-3 text-left mb-8 mt-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className={`w-5 h-5 ${plan.popular ? 'text-[#D4AF37]' : 'text-[#D4AF37]'}`} />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleAddToCart(plan)}
              className={`cursor-pointer mt-auto w-full py-3 rounded-full font-bold transition-all ${
                plan.popular
                  ? 'bg-[#D4AF37] text-[#0A1F3E] hover:scale-105'
                  : 'btn-outline-gold hover:bg-[#D4AF37] hover:text-white'
              }`}
            >
              หยิบใส่ตะกร้า
            </button>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center max-w-md mx-auto bg-white p-5 rounded-xl shadow-md flex items-center justify-center gap-3"
      >
        <Zap className="w-6 h-6 text-[#D4AF37]" />
        <span className="font-medium">
          <strong>One - Step Checkout</strong> ข้อมูลในหน้าเดียว จบไว ไม่รอโหลด
        </span>
      </motion.div>
    </div>
  );
};

export default Pricing;