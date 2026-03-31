// src/App.tsx
import { lazy, Suspense } from 'react';
// import Navbar from '@/Components/Home/Navbar';
// import Hero from '@/Components/Home/HeroSection';
// import PainPoint from '@/Components/Home/Painpoint';
// import Quiz from '@/Components/Home/Quiz';
// import Ingredients from '@/Components/Home/Ingredients';
// import Reviews from '@/Components/Home/Reviews';
// import Pricing from '@/Components/Home/Pricing';
// import About from '@/Components/Home/About';
// import Footer from '@/Components/Home/Footer';
// import CartDrawer from '@/Components/Home/CartDrawer';
const Navbar = lazy(() => import('@/Components/Home/Navbar'));
const Hero = lazy(() => import('@/Components/Home/HeroSection'));
const PainPoint = lazy(() => import('@/Components/Home/Painpoint'));
const Quiz = lazy(() => import('@/Components/Home/Quiz'));
const Ingredients = lazy(() => import('@/Components/Home/Ingredients'));
const Reviews = lazy(() => import('@/Components/Home/Reviews'));
const Pricing = lazy(() => import('@/Components/Home/Pricing'));
const About = lazy(() => import('@/Components/Home/About'));
const Footer = lazy(() => import('@/Components/Home/Footer'));
const CartDrawer = lazy(() => import('@/Components/Home/CartDrawer'));

import { CartProvider } from '@/Contexts/CartContext';

function App() {
    return (
        <CartProvider>
            <Suspense
                fallback={
                    <div className="flex h-screen items-center justify-center">
                        <span className="loading loading-xl loading-spinner"></span>
                    </div>
                }
            >
                <div className="min-h-screen">
                    <Navbar cartCount={2} />
                    <main>
                        <Hero />
                        <PainPoint />
                        <Quiz />
                        <Ingredients />
                        <Reviews />
                        <section className="bg-[#F9F5EA] py-16 md:py-20">
                            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                                <Pricing />
                            </div>
                        </section>
                        <About />
                    </main>
                    <Footer />
                    <CartDrawer />
                </div>
            </Suspense>
        </CartProvider>
    );
}

export default App;
