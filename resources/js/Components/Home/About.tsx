// src/components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="bg-white py-16 md:py-20" role="about">
            <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <FlaskConical className="gold-text-gradient mx-auto mb-4 h-16 w-16" />
                    <h3 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
                        About ZenithCore+ Lab
                    </h3>
                    <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                        ผลิตใน GMP-certified facility มาตรฐานสากล
                        ทุกแคปซูลผ่านการทดสอบความบริสุทธิ์ เรามุ่งมั่นให้
                        Bio-hacking
                        ปลอดภัยและเข้าถึงได้สำหรับนักขับเคลื่อนธุรกิจชั้นนำทั่วภูมิภาค
                    </p>
                </motion.div>
            </div>
            <div className="mt-15 text-center text-lg text-red-600">
                <p>
                    ⚠️ ข้อควรระวัง:
                    ผลิตภัณฑ์นี้ไม่ใช่ยาควรรับประทานภายใต้คำแนะนำของผู้เชี่ยวชาญ
                    ห้ามใช้ในหญิงตั้งครรภ์ หญิงให้นมบุตร และเด็กอายุต่ำกว่า 18
                    ปี
                </p>
            </div>
        </section>
    );
};

export default About;
