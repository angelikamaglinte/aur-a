import React from 'react'
import { assets } from '../../assets/assets';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const NewCollection = () => {
    return (
        <div className="px-6 md:px-16 lg:px-24 py-16">
            {/* Text Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <div className="max-w-lg">
                    <p className="text-sm md:text-base font-light tracking-wide mb-4 font-inter">
                        Jewelry is more than adornment — it’s a quiet expression of who you are. Thoughtfully crafted, timelessly worn.
                    </p>
                    <button className="group text-sm tracking-wide flex items-center gap-2 hover:text-black transition-all duration-300 relative pb-2 border-b-1 border-black font-inter cursor-pointer">
                        <span className="relative">
                            Discover the Collection
                        </span>
                        <ArrowUpRightIcon className="w-5 h-5" />
                    </button>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-8 md:mt-0" style={{ fontFamily: 'Canela Text, serif' }}>
                    OUR NEW COLLECTIONS
                </h2>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <img
                    src={assets.new_item_1}
                    alt="Collection 1"
                    className="w-full h-auto object-cover rounded-lg"
                />
                <img
                    src={assets.new_item_2}
                    alt="Collection 2"
                    className="w-full h-auto object-cover rounded-lg mt-20"
                />
                <img
                    src={assets.new_item_3}
                    alt="Collection 3"
                    className="w-full h-auto object-cover rounded-lg"
                />
                <img
                    src={assets.new_item_4}
                    alt="Collection 4"
                    className="w-full h-auto object-cover rounded-lg mt-20"
                />
            </div>
        </div>
    );
};

export default NewCollection
