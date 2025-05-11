import React from 'react';
import { assets } from '../../assets/assets';

const AboutUs = () => {
    return (
        <div className="relative bg-cover bg-center text-white py-16 px-6 md:px-16 lg:px-24" style={{ backgroundImage: `url(${assets.about_aurea_bg})` }}>
            {/* title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4" style={{ fontFamily: 'Canela Text, serif' }}>
                ABOUT AURÉA
            </h2>

            {/* star icon */}
            <div className="flex justify-center mb-6">
                <span className="text-2xl md:text-3xl">✶</span>
            </div>

            {/* description */}
            <p className="text-center text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto mb-12 font-inter">
                Auréa is for the woman who leads with grace. Founded on the belief that jewelry should be soulful, intentional, and eternal.
            </p>

            {/* scrolling images */}
            {/* <div className="flex justify-center items-center space-x-6 px-4">
                <img src={assets.about_aurea_item_1} alt="Jewelry 1" className="w-150 h-100 object-contain rounded-lg" />
                <img src={assets.about_aurea_item_2} alt="Jewelry 2" className="w-150 h-100 object-contain rounded-lg" />
                <img src={assets.about_aurea_item_3} alt="Jewelry 3" className="w-150 h-100 object-contain rounded-lg" />
            </div> */}

            {/* guarantee */}
            <p className="text-center text-sm md:text-base font-light tracking-wide mt-12 font-inter">
                We offer 100% money back guaranteed.
            </p>
        </div>
    );
};

export default AboutUs;