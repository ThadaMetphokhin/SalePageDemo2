// src/components/Reviews.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Review } from '@/types/index';

const reviews: Review[] = [
    {
        id: 1,
        rating: 5,
        content:
            '" Focus ดีขึ้นมาก ไม่มีสมองล้า ช่วงบ่ายยัง productive อยู่ เปลี่ยนชีวิตการทำงานจริง ๆ "',
        author: 'executive, investment firm',
        title: 'Performance Executive',
    },
    {
        id: 2,
        rating: 5,
        content:
            '" ZenithCore+ เปลี่ยนเกมการทำงานของผม 10 ชั่วโมงโฟกัสจริง ไม่มี side effects แนะนำเลย "',
        author: 'tech founder, serial entrepreneur',
        title: 'Tech Leader',
    },
];

const Reviews: React.FC = () => {
    return (
        <section
            id="reviews"
            className="bg-[#F9F5EA] py-16 md:py-20"
            role="reviews"
        >
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl"
                >
                    Trusted by High-Performers
                </motion.h2>
                <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="premium-card rounded-2xl bg-white p-6 shadow-lg md:p-8"
                        >
                            <div className="mb-3 flex gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700 italic">
                                {review.content}
                            </p>
                            <p className="mt-4 font-bold text-[#0A1F3E]">
                                — {review.author}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
