import React, { useState } from 'react';
import { assets } from '../../assets/assets'; // Ensure the correct path to your assets file

const OurCollection = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="px-6 md:px-16 lg:px-24 py-16">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-semibold text-right mb-8" style={{ fontFamily: 'Canela Text, serif' }}>
                OUR COLLECTIONS
            </h2>

            {/* Collection Items */}
            <div className="space-y-4">
                {/* Rings */}
                <div>
                    <div
                        className="flex justify-between items-center border-b pb-2 cursor-pointer"
                        onClick={() => toggleSection('rings')}
                    >
                        <h3 className="text-6xl font-semibold" style={{ fontFamily: 'Canela Text, serif' }}>RINGS</h3>
                        <img
                            src={openSection === 'rings' ? assets.dropdown_menu_up : assets.dropdown_menu_down}
                            alt="Dropdown Icon"
                            className="w-10 h-5"
                        />
                    </div>
                    {openSection === 'rings' && (
                        <div className="pl-4 mt-2 space-y-1">
                            <p>Sculpted</p>
                            <p>Stacked</p>
                            <p>Signature</p>
                        </div>
                    )}
                </div>

                {/* Earrings */}
                <div>
                    <div
                        className="flex justify-between items-center border-b pb-2 cursor-pointer"
                        onClick={() => toggleSection('earrings')}
                    >
                        <h3 className="text-6xl font-semibold" style={{ fontFamily: 'Canela Text, serif' }}>EARRINGS</h3>
                        <img
                            src={openSection === 'earrings' ? assets.dropdown_menu_up : assets.dropdown_menu_down}
                            alt="Dropdown Icon"
                            className="w-10 h-5"
                        />
                    </div>
                    {openSection === 'earrings' && (
                        <div className="pl-4 mt-2 space-y-1">
                            <p>Drop</p>
                            <p>Hoop</p>
                            <p>Stud</p>
                        </div>
                    )}
                </div>

                {/* Necklaces */}
                <div>
                    <div
                        className="flex justify-between items-center border-b pb-2 cursor-pointer"
                        onClick={() => toggleSection('necklaces')}
                    >
                        <h3 className="text-6xl font-semibold" style={{ fontFamily: 'Canela Text, serif' }}>NECKLACES</h3>
                        <img
                            src={openSection === 'necklaces' ? assets.dropdown_menu_up : assets.dropdown_menu_down}
                            alt="Dropdown Icon"
                            className="w-10 h-5"
                        />
                    </div>
                    {openSection === 'necklaces' && (
                        <div className="pl-4 mt-2 space-y-1">
                            <p>Layered</p>
                            <p>Charm</p>
                            <p>Statement</p>
                        </div>
                    )}
                </div>

                {/* Bracelets */}
                <div>
                    <div
                        className="flex justify-between items-center border-b pb-2 cursor-pointer"
                        onClick={() => toggleSection('bracelets')}
                    >
                        <h3 className="text-6xl font-semibold" style={{ fontFamily: 'Canela Text, serif' }}>BRACELETS</h3>
                        <img
                            src={openSection === 'bracelets' ? assets.dropdown_menu_up : assets.dropdown_menu_down}
                            alt="Dropdown Icon"
                            className="w-10 h-5"
                        />
                    </div>
                    {openSection === 'bracelets' && (
                        <div className="pl-4 mt-2 space-y-1">
                            <p>Cuffs</p>
                            <p>Chains</p>
                            <p>Everyday</p>
                        </div>
                    )}
                </div>

                {/* Watches */}
                <div>
                    <div
                        className="flex justify-between items-center border-b pb-2 cursor-pointer"
                        onClick={() => toggleSection('watches')}
                    >
                        <h3 className="text-6xl font-semibold" style={{ fontFamily: 'Canela Text, serif' }}>WATCHES</h3>
                        <img
                            src={openSection === 'watches' ? assets.dropdown_menu_up : assets.dropdown_menu_down}
                            alt="Dropdown Icon"
                            className="w-10 h-5"
                        />
                    </div>
                    {openSection === 'watches' && (
                        <div className="pl-4 mt-2 space-y-1">
                            <p>Elegant</p>
                            <p>Minimalist</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OurCollection;