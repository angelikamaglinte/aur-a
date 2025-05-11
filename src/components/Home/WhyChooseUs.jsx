import React from 'react';
import { assets } from '../../assets/assets';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
    const imageData = [
        { src: assets.item_1, tags: ['Necklace', 'Stack'] },
        { src: assets.item_2, tags: ['Bracelet', 'Chain'] },
        { src: assets.item_3, tags: ['Rings', 'Elegant'] },
        { src: assets.item_4, tags: ['Bracelet', 'Tennis'] },
        { src: assets.item_5, tags: ['Necklace', 'Pearl'] }
    ];

    return (
        <div className="px-6 md:px-16 lg:px-24 py-16">
            {/* heading section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold" style={{ fontFamily: 'Canela Text, serif' }}>
                    WHY CHOOSE AURÉA
                </h2>
                <div className="max-w-lg mt-4 md:mt-0">
                    <p className="text-sm md:text-base font-light tracking-wide mb-4" style={{ fontFamily: 'Canela Text, serif' }}>
                        Each piece is an invitation to slow down, to feel, to remember — and to be remembered.
                    </p>
                    <button className="group text-sm tracking-wide flex items-center gap-2 hover:text-black transition-all duration-300 relative pb-2 border-b-2 border-black font-inter">
                        <span className="relative">
                            Discover the Collection
                        </span>
                        <ArrowUpRightIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* image grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {/* Image Card */}
                {imageData.map((item, index) => (
                    <div
                        key={index}
                        style={{ height: '500px' }}
                        className={`relative group ${index === 4 ? 'md:col-span-2 md:row-span-2' : ''}`}
                    >
                        <img
                            src={item.src}
                            alt={`Why Choose Us ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-end">
                            <div className="flex justify-between items-center w-full bg-[#EBEBEB] p-2 rounded-bl-lg rounded-br-lg">
                                {/* Left side: Tags */}
                                <div className="flex flex-row gap-2">
                                    {item.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="bg-black text-white text-xs px-3 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {/* Right side: Button */}
                                <button className="group text-xs tracking-wide flex items-center gap-1 hover:text-white transition-all duration-300 cursor-pointer">
                                    <span className="text-black">Explore More</span>
                                    <ArrowUpRightIcon className="w-4 h-4 text-black" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;