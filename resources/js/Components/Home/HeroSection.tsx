// src/components/Hero.tsx
import React from 'react';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Brain, Shield } from 'lucide-react';

const Hero: React.FC = () => {
    const features = [
        { icon: FlaskConical, text: 'Clinic-Grade' },
        { icon: Brain, text: '10h Focus' },
        { icon: Shield, text: 'Non-Jittery' },
    ];

    return (
        <section
            className="relative overflow-hidden pt-20 md:pt-24"
            role="herosection"
        >
            <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 md:py-16 lg:px-8 lg:py-20">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 text-center lg:text-left"
                    >
                        <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                            <span className="block font-serif">
                                Command Your Day,
                            </span>
                            <span className="gold-text-gradient">
                                Not Just Your Calendar.
                            </span>
                        </h1>
                        <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0 lg:text-xl">
                            ปฏิวัติการทำงานด้วย{' '}
                            <strong className="font-semibold text-[#585504]">
                                Bio - Hacking Formula
                            </strong>{' '}
                            ที่ช่วยให้สมองโฟกัสได้คมกริบ ( Laser-Sharp Focus )
                            นิ่ง และทรงพลังตลอด{' '}
                            <span className="font-bold text-[#585504]">
                                10 ชั่วโมง
                            </span>{' '}
                            โดยไม่มีอาการใจสั่น
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="#quiz-section"
                                className="btn-gold-premium inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3C550] px-8 py-3 text-base font-bold shadow-xl transition-all"
                            >
                                เริ่มต้นการอัปเกรดสมองของคุณ
                            </motion.a>
                        </div>
                        <div className="flex flex-wrap justify-center gap-5 pt-4 text-sm text-gray-500 lg:justify-start">
                            {features.map((feature, idx) => (
                                <span
                                    key={idx}
                                    className="flex items-center gap-2"
                                >
                                    <feature.icon className="h-4 w-4 text-[#D4AF37]" />
                                    {feature.text}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                    <Suspense fallback={'...'}>
                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex items-center justify-center"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-transparent blur-3xl"></div>
                                <img
                                    width={1200}
                                    height={768}
                                    src="/images/product.webp"
                                    srcSet="
                                  /images/product.webp 1200w
                                "
                                    alt="ZenithCore+ Premium Nootropic"
                                    className="relative w-full max-w-sm rounded-2xl border-4 border-[#D4AF37]/60 shadow-2xl md:max-w-md lg:max-w-lg"
                                />
                            </div>
                        </motion.div>
                    </Suspense>
                </div>
            </div>
        </section>
    );
};

export default Hero;
