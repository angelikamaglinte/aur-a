import React from 'react';
import { assets } from '../assets/assets';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-6 md:px-16 lg:px-24">
            {/* Get in Touch and Image Cards Section */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                {/* Get in Touch Section */}
                <div className="mb-8 md:mb-0 md:w-1/3">
                    <h3 className="text-lg font-semibold mb-4 whitespace-nowrap">GET IN TOUCH</h3>
                    <button className="text-white px-4 py-2 rounded-full font-medium border hover:bg-white hover:text-black border-white cursor-pointer">
                        @auréa_id
                    </button>
                </div>

                {/* Image Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:w-2/3">
                    {/* Card 1 */}
                    <div className="flex flex-col items-start">
                        <img
                            src={assets.footer_item_1}
                            alt="Jewelry 1"
                            className="rounded-lg mb-4"
                        />
                        <p className="text-sm md:text-base font-light mb-2">
                            Each piece is an invitation to slow down, to feel, to remember — and to be remembered.
                        </p>
                        <button className="group text-sm tracking-wide flex items-center gap-2 transition-all duration-300 relative pb-2 border-b-1 border-white font-inter cursor-pointer">
                            <span className="relative">
                                Explore More
                            </span>
                            <ArrowUpRightIcon className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-start">
                        <img
                            src={assets.footer_item_2}
                            alt="Jewelry 2"
                            className="rounded-lg mb-4"
                        />
                        <p className="text-sm md:text-base font-light mb-2">
                            Each piece is an invitation to slow down, to feel, to remember — and to be remembered.
                        </p>
                        <button className="group text-sm tracking-wide flex items-center gap-2 transition-all duration-300 relative pb-2 border-b-1 border-white font-inter cursor-pointer">
                            <span className="relative">
                                Explore More
                            </span>
                            <ArrowUpRightIcon className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-start">
                        <img
                            src={assets.footer_item_3}
                            alt="Jewelry 3"
                            className="rounded-lg mb-4"
                        />
                        <p className="text-sm md:text-base font-light mb-2">
                            Each piece is an invitation to slow down, to feel, to remember — and to be remembered.
                        </p>
                        <button className="group text-sm tracking-wide flex items-center gap-2 transition-all duration-300 relative pb-2 border-b-1 border-white font-inter cursor-pointer">
                            <span className="relative">
                                Explore More
                            </span>
                            <ArrowUpRightIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-4xl md:text-5xl font-bold cursor-pointer" style={{ fontFamily: 'Canela Text, serif' }}>
                    <a href="#">AURÉA</a>
                </h1>
                <p className="text-sm md:text-base font-light mt-4 md:mt-0">
                    © 2025 Auréa. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;