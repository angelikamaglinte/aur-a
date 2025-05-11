import React from 'react';
import { assets } from '../../assets/assets';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const Hero = () => {
    return (
        <div className="flex flex-col gap-16">
            <section
                className="relative w-full h-screen bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${assets.home_hero})` }}
            >
                <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-5xl text-white pt-20 md:pt-32 lg:pt-40">
                    {/* heading */}
                    <h1
                        className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight "
                        style={{ fontFamily: 'Canela Text, serif' }}
                    >
                        <div>THE</div>
                        <div>ESSENCE OF</div>
                        <div className="font-bold">TIMELESS ELEGANCE</div>
                    </h1>

                    {/* subheading */}
                    <p className="mt-6 text-sm md:text-base font-light tracking-wide font-inter">
                        Handcrafted pieces inspired by nature, crafted for those who move through the world with quiet confidence
                    </p>

                    {/* explore new arrivals button */}
                    <button className="group mt-8 text-sm tracking-wide flex items-center gap-2 hover:text-white transition-all duration-300 relative pb-2 border-b-1 border-white font-inter cursor-pointer">
                        <span className="relative">
                            Explore New Arrivals
                        </span>
                        <ArrowUpRightIcon className="w-5 h-5" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Hero;