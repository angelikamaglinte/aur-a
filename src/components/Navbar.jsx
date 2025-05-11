import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation(); // Get the current route

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Determine if the navbar should be black
    const isCollectionsPage = location.pathname === '/collections';

    return (
        <nav
            className={`w-full fixed top-0 z-50 px-6 py-4 flex justify-between items-center text-white transition-all duration-300 ${isCollectionsPage || isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
                }`}
        >
            {/* logo */}
            <div className="text-2xl font-serif font-bold">
                <img src={assets.logo} alt="Auréa Logo" className="h-8 object-contain" />
            </div>

            {/* hamburger icon for mobile */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg
                        className="w-6 h-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            {/* nav links */}
            <ul
                className={`${isMenuOpen ? 'flex' : 'hidden'
                    } md:flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 text-sm tracking-wide font-light absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent px-6 py-4 md:p-0`}
            >
                <li className="hover:text-gray-300 cursor-pointer"><Link to="/collections?category=all">Collections</Link></li>
                <li className="hover:text-gray-300 cursor-pointer"><Link to="/collections?category=new">New</Link></li>
                <li className="hover:text-gray-300 cursor-pointer"><Link to="/collections?category=best-sellers">Best Sellers</Link></li>
                <li className="hover:text-gray-300 cursor-pointer"><Link to="/collections?category=earrings">Earrings</Link></li>
                <li className="hover:text-gray-300 cursor-pointer"><Link to="/collections?category=rings">Rings</Link></li>
                <li className="hover:text-gray-300 cursor-pointer"><Link to="/collections?category=necklaces">Necklaces</Link></li>
                <li className="hover:text-gray-300 cursor-pointer"><Link to="/collections?category=bracelets">Bracelets</Link></li>
            </ul>

            {/* icons */}
            <div className="hidden md:flex space-x-4 items-center">
                <img src={assets.search_icon} alt="Search" className="h-4 w-4 cursor-pointer" />
                <img src={assets.favorites_icon} alt="Wishlist" className="h-4 w-4 cursor-pointer" />
                <img src={assets.shopping_cart_icon} alt="Cart" className="h-4 w-4 cursor-pointer" />
                <img src={assets.profile_icon} alt="Account" className="h-4 w-4 cursor-pointer" />
            </div>
        </nav>
    );
};

export default Navbar;