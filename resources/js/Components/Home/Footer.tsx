// src/components/Footer.tsx
import React from 'react';
import {
    Brain,
    Mail,
    Phone,
    MapPin,
    ChevronRight,
    Shield,
    Clock,
    CreditCard,
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    //const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'หน้าแรก', href: '/' },
        { name: 'เกี่ยวกับเรา', href: '/about' },
        { name: 'ผลิตภัณฑ์', href: '/products' },
        { name: 'บทความ', href: '/blog' },
        { name: 'แบบทดสอบ', href: '/quiz' },
        { name: 'รีวิว', href: '/reviews' },
    ];

    const productLinks = [
        { name: 'The Starter', href: '/products/starter' },
        { name: 'Executive Bundle', href: '/products/executive' },
        { name: 'Premium Package', href: '/products/premium' },
        { name: 'เปรียบเทียบแพ็กเกจ', href: '/compare' },
        { name: 'โปรโมชั่น', href: '/promotions' },
    ];

    const supportLinks = [
        { name: 'วิธีสั่งซื้อ', href: '/how-to-order' },
        { name: 'การจัดส่ง', href: '/shipping' },
        { name: 'นโยบายคืนสินค้า', href: '/returns' },
        { name: 'คำถามที่พบบ่อย', href: '/faq' },
        { name: 'ติดต่อเรา', href: '/contact' },
    ];

    const legalLinks = [
        { name: 'นโยบายความเป็นส่วนตัว', href: '/privacy' },
        { name: 'ข้อกำหนดการใช้งาน', href: '/terms' },
        { name: 'คำเตือนและข้อควรระวัง', href: '/disclaimer' },
        { name: 'นโยบายคุกกี้', href: '/cookies' },
    ];

    const socialLinks = [
        {
            icon: <FontAwesomeIcon icon={faFacebook} />,
            href: 'https://facebook.com/zenithcore',
            label: 'Facebook',
            color: 'hover:bg-[#1877F2]',
        },
        {
            icon: <FontAwesomeIcon icon={faInstagram} />,
            href: 'https://instagram.com/zenithcore',
            label: 'Instagram',
            color: 'hover:bg-gradient-to-r from-[#F58529] to-[#DD2A7B]',
        },
        {
            icon: <FontAwesomeIcon icon={faTwitter} />,
            href: 'https://twitter.com/zenithcore',
            label: 'Twitter',
            color: 'hover:bg-[#1DA1F2]',
        },
        {
            icon: <FontAwesomeIcon icon={faYoutube} />,
            href: 'https://youtube.com/zenithcore',
            label: 'YouTube',
            color: 'hover:bg-[#FF0000]',
        },
    ];

    // const paymentMethods = [
    //     { name: 'Visa', icon: '💳' },
    //     { name: 'Mastercard', icon: '💳' },
    //     { name: 'PromptPay', icon: '📱' },
    //     { name: 'TrueMoney', icon: '💰' },
    //     { name: 'Installment', icon: '📅' },
    // ];

    return (
        <footer className="bg-gradient-to-b from-[#0A1F3E] to-[#05152C] text-white" >
            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <div className="mb-4 flex items-center gap-2">
                            <img
                                fetchPriority="high"
                                width={32}
                                height={32}
                                src="/images/favicon.webp"
                                srcSet="
                                  /images/favicon.webp 10w,
                                  /images/favicon.webp 15w,
                                  /images/favicon.webp 32w
                                "
                                sizes="(max-width: 32px) 100vw, (max-width: 16) 50vw, 16px"
                                alt="ZenithCore+ Logo Footer"
                            />
                            <span className="text-xl font-bold tracking-tight">
                                Zenith
                                <span className="text-[#D4AF37]">Core</span>+
                            </span>
                        </div>
                        <p className="mb-4 text-sm leading-relaxed text-gray-400">
                            Elevate Your Cognitive Edge —
                            ผลิตภัณฑ์เสริมอาหารที่ออกแบบมาเพื่อเพิ่มประสิทธิภาพสมองและความจำสำหรับคนรุ่นใหม่
                        </p>
                        <div className="space-y-2 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-[#D4AF37]" />
                                <a
                                    href="mailto:contact@zenithcore.com"
                                    className="transition-colors hover:text-[#D4AF37]"
                                >
                                    contact@zenithcore.com
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-[#D4AF37]" />
                                <a
                                    href="tel:021234567"
                                    className="transition-colors hover:text-[#D4AF37]"
                                >
                                    02-123-4567
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-[#D4AF37]" />
                                <span>
                                    99 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย
                                    กรุงเทพฯ 10110
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="relative mb-4 inline-block text-lg font-semibold">
                            ลิงก์ด่วน
                            <div className="absolute bottom-0 left-0 mt-1 h-0.5 w-8 bg-[#D4AF37]"></div>
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-[#D4AF37]"
                                    >
                                        <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="relative mb-4 inline-block text-lg font-semibold">
                            ผลิตภัณฑ์
                            <div className="absolute bottom-0 left-0 mt-1 h-0.5 w-8 bg-[#D4AF37]"></div>
                        </h3>
                        <ul className="space-y-2">
                            {productLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-[#D4AF37]"
                                    >
                                        <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="relative mb-4 inline-block text-lg font-semibold">
                            ช่วยเหลือ
                            <div className="absolute bottom-0 left-0 mt-1 h-0.5 w-8 bg-[#D4AF37]"></div>
                        </h3>
                        <ul className="space-y-2">
                            {supportLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-[#D4AF37]"
                                    >
                                        <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal & Social */}
                    <div>
                        <h3 className="relative mb-4 inline-block text-lg font-semibold">
                            นโยบาย
                            <div className="absolute bottom-0 left-0 mt-1 h-0.5 w-8 bg-[#D4AF37]"></div>
                        </h3>
                        <ul className="mb-6 space-y-2">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-gray-400 transition-colors hover:text-[#D4AF37]"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Social Media */}
                        <h3 className="mb-3 text-lg font-semibold">
                            ติดตามเรา
                        </h3>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110 ${social.color}`}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-10 border-t border-white/10 pt-8">
                    <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                            <Shield className="h-5 w-5 text-[#D4AF37]" />
                            <span>ผลิตภัณฑ์คุณภาพ</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                            <Clock className="h-5 w-5 text-[#D4AF37]" />
                            <span>จัดส่งรวดเร็ว</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                            <CreditCard className="h-5 w-5 text-[#D4AF37]" />
                            <span>ชำระเงินปลอดภัย</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                            <Brain className="h-5 w-5 text-[#D4AF37]" />
                            <span>รับประกันคุณภาพ</span>
                        </div>
                    </div>
                </div>

                {/* Payment Methods
                <div className="mt-8 border-t border-white/10 pt-8">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-gray-400">
                                ช่องทางชำระเงิน:
                            </span>
                            <div className="flex gap-3">
                                {paymentMethods.map((method) => (
                                    <span
                                        key={method.name}
                                        className="text-2xl"
                                        title={method.name}
                                    >
                                        {method.icon}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="text-xs text-gray-500">
                            <span>FDA Registration No. 10-1-12345-6-0001</span>
                        </div>
                    </div>
                </div> */}
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-white/5 bg-black/20">
                <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-500 md:flex-row">
                        <p>
                            © 2026 cthdevs ZenithCore+ — Elevate Your Cognitive
                            Edge. All trademarks reserved.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="/privacy"
                                className="transition-colors hover:text-[#D4AF37]"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="/terms"
                                className="transition-colors hover:text-[#D4AF37]"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="/sitemap"
                                className="transition-colors hover:text-[#D4AF37]"
                            >
                                Sitemap
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
