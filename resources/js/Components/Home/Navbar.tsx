// src/components/Navbar.tsx (อัพเดทให้ใช้ Cart)
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ShoppingCartIcon,
    UserCircleIcon,
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { CrownIcon } from 'lucide-react';
import { useCart } from '@/Contexts/CartContext';

interface NavbarProps {
    cartCount?: number;
}

const Navbar: React.FC<NavbarProps> = () => {
    // const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { getTotalItems, setIsCartOpen } = useCart();
    const totalItems = getTotalItems();

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolled(window.scrollY > 10);
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    const navLinks = [
        { name: 'The Science', href: '#science' },
        { name: 'Performance Quiz', href: '#quiz-section' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'About Us', href: '#about' },
    ];

    const handleLinkClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                    //isScrolled
                    'border-b border-[#D4AF37]/40 bg-gradient-to-r from-[#1E3A5F] to-[#2C4A6E] shadow-2xl'
                    //:// 'bg-gradient-to-r from-[#1E3A5F] to-[#2C4A6E] shadow-lg'
                }`}
                role="navbar"
            >
                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between md:h-20">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="group flex cursor-pointer items-center gap-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F3C550] shadow-lg sm:h-9 sm:w-9">
                                <img
                                    fetchPriority="high"
                                    width={32}
                                    height={32}
                                    src="/images/favicon.webp"
                                    srcSet="
                                            /images/favicon.webp 32w,
                                          "
                                    sizes="50vw"
                                    alt="ZenithCore+ Logo Footer"
                                />
                            </div>
                            <span className="font-serif text-xl font-extrabold tracking-tight sm:text-2xl">
                                <span className="text-white">ZenithCore</span>
                                <span className="text-[#D4AF37]">+</span>
                            </span>
                        </motion.a>

                        {/* Desktop Menu */}
                        <div className="hidden items-center gap-6 md:flex lg:gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(link.href);
                                    }}
                                    className="group relative text-sm font-medium text-gray-100 transition-all duration-200 hover:text-[#D4AF37] lg:text-base"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            {/* Cart Icon with Badge */}
                            <motion.div
                                className="group relative cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsCartOpen(true)}
                            >
                                <ShoppingCartIcon className="h-5 w-5 text-gray-100 transition-colors group-hover:text-[#D4AF37] sm:h-6 sm:w-6" />
                                {totalItems > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3C550] text-xs font-bold text-[#1E3A5F] shadow-md"
                                    >
                                        {totalItems}
                                    </motion.span>
                                )}
                            </motion.div>

                            {/* Account Icon */}
                            <div className="group hidden cursor-pointer items-center sm:flex">
                                <UserCircleIcon className="h-5 w-5 text-gray-100 transition-colors group-hover:text-[#D4AF37] sm:h-6 sm:w-6" />
                            </div>

                            {/* CTA Button */}
                            <motion.a
                                href="#pricing"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleLinkClick('#pricing');
                                }}
                                className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F3C550] px-4 py-2 text-sm font-bold text-[#1E3A5F] shadow-lg transition-all hover:from-[#E2B94A] hover:to-[#D4AF37] hover:shadow-xl sm:px-5"
                                whileHover={{ scale: 1.05, y: -1 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Order Now
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </motion.a>

                            {/* Mobile Menu Button */}
                            <button
                                type="button"
                                onClick={() =>
                                    setIsMobileMenuOpen(!isMobileMenuOpen)
                                }
                                className="rounded-lg p-2 transition-colors hover:bg-white/10 md:hidden"
                            >
                                {isMobileMenuOpen ? (
                                    <XMarkIcon className="h-6 w-6 text-white" />
                                ) : (
                                    <Bars3Icon className="h-6 w-6 text-white" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <motion.div
                initial={false}
                animate={
                    isMobileMenuOpen
                        ? { height: 'auto', opacity: 1 }
                        : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className={`fixed top-16 right-0 left-0 z-40 cursor-pointer overflow-hidden border-b border-[#D4AF37]/20 bg-[#1E3A5F] shadow-xl md:top-20 md:hidden`}
            >
                <div className="space-y-3 px-5 py-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleLinkClick(link.href);
                            }}
                            className="block border-b border-white/10 py-3 font-medium text-gray-100 transition-colors last:border-0 hover:text-[#D4AF37]"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-4 pt-3">
                        <div className="group flex cursor-pointer items-center gap-2">
                            <UserCircleIcon className="h-6 w-6 text-gray-100 transition-colors group-hover:text-[#D4AF37]" />
                            <span className="text-gray-100 group-hover:text-[#D4AF37]">
                                Account
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Navbar;
