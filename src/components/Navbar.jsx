import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import LoginModal from './Login/LoginModal';
import SignupModal from './Signup/SignupModal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const location = useLocation();

    // close search dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                !event.target.closest(".search-dropdown") &&
                !event.target.closest(".search-icon")
            ) {
                setIsSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Function to open LoginModal
    const openLogin = () => {
        setIsSignupOpen(false); // Close SignupModal
        setIsLoginOpen(true);  // Open LoginModal
    };

    // Function to open SignupModal
    const openSignup = () => {
        setIsLoginOpen(false); // Close LoginModal
        setIsSignupOpen(true); // Open SignupModal
    };

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
                <img
                    src={assets.search_icon}
                    alt="Search"
                    className="h-4 w-4 cursor-pointer"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                />
                <img src={assets.favorites_icon} alt="Wishlist" className="h-4 w-4 cursor-pointer" />
                <img src={assets.shopping_cart_icon} alt="Cart" className="h-4 w-4 cursor-pointer" />
                <img
                    src={assets.profile_icon}
                    alt="Account"
                    className="h-4 w-4 cursor-pointer"
                    onClick={() => setIsLoginOpen(true)} // Open LoginModal
                />
            </div>

            {/* Search Dropdown */}
            {isSearchOpen && (
                <div className="absolute top-16 right-0 w-full bg-black text-white p-4 pl-40 shadow-lg search-dropdown">
                    <div className="relative w-100">
                        {/* Search icon inside input */}
                        {searchValue === "" && (
                            <img
                                src={assets.search_icon}
                                alt="Search Icon"
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none opacity-50"
                            />
                        )}

                        {/* Input field */}
                        <input
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Search"
                            className="w-full bg-black border-b border-gray-400 outline-none py-1 text-sm placeholder-gray-500 pl-7"
                        />
                    </div>
                    <div className="mt-3 text-sm">
                        <p className="text-gray-400 mb-1 font-semibold">Popular Searches</p>
                        <ul className="space-y-1">
                            {["birthstones", "diamond", "charlotte", "necklace"].map(
                                (item) => (
                                    <li
                                        key={item}
                                        className="cursor-pointer hover:text-gray-300"
                                        onClick={() => {
                                            console.log("Searching:", item);
                                            setIsSearchOpen(false);
                                        }}
                                    >
                                        {item}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            )}

            {/* login modal */}
            <LoginModal
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onSignupClick={openSignup} // Pass function to switch to SignupModal
            />

            {/* signup modal */}
            <SignupModal
                isOpen={isSignupOpen}
                onClose={() => setIsSignupOpen(false)}
                onLoginClick={openLogin} // Pass function to switch to LoginModal
            />
        </nav>


    );
};

export default Navbar;