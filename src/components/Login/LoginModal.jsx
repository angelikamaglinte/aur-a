import React, { useEffect } from 'react';
import { assets } from '../../assets/assets';

const LoginModal = ({ isOpen, onClose, onSignupClick }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        // Cleanup when the component unmounts
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isOpen]);
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999] overflow-hidden">
            <div className="bg-white p-6 rounded-lg shadow-lg w-100 relative">
                <h2 className="text-4xl font-semibold mb-10 text-black text-center" style={{ fontFamily: 'Canela, serif' }}>Login</h2>
                <form>
                    <div className="mb-4">
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-none placeholder-black text-black font-inter"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-none placeholder-black text-black font-inter"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition font-inter"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 flex justify-center items-center">
                    <button
                        type="button"
                        className="w-full bg-white border border-gray-300 text-black py-2 rounded-full hover:bg-gray-100 transition flex items-center justify-center"
                    >
                        <img
                            src={assets.google_logo}
                            alt="Google"
                            className="h-5 w-5 mr-2"
                        />
                        Login with Google
                    </button>
                </div>
                <p className="text-sm text-center mt-4 text-black font-inter">
                    Don't have an account yet?{' '}
                    <span
                        className="text-black underline cursor-pointer"
                        onClick={onSignupClick} // Switch to SignupModal
                    >
                        Sign Up
                    </span>
                </p>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-5 text-gray-500 hover:text-gray-700 text-2xl"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default LoginModal;