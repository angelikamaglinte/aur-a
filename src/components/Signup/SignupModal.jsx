import React, { useEffect } from 'react';

const SignupModal = ({ isOpen, onClose, onLoginClick }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('scroll-lock');
        } else {
            document.body.classList.remove('scroll-lock');
        }

        // Cleanup when the component unmounts
        return () => {
            document.body.classList.remove('scroll-lock');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999] overflow-hidden">
            <div className="bg-white p-6 rounded-lg shadow-lg w-100 relative">
                <h2 className="text-4xl font-semibold mb-10 text-black text-center" style={{ fontFamily: 'Canela, serif' }}>Sign Up</h2>
                <form>
                    <div className="mb-4">
                        <input
                            type="firstname"
                            id="firstname"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-none placeholder-black text-black font-inter"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="lastname"
                            id="lastname"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black bg-none placeholder-black text-black font-inter"
                            placeholder="Last Name"
                        />
                    </div>
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
                        Sign Up
                    </button>
                </form>
                <p className="text-sm text-center mt-4 text-black font-inter">
                    Already have an account?{' '}
                    <span
                        className="text-black underline cursor-pointer"
                        onClick={onLoginClick} // Switch to LoginModal
                    >
                        Login
                    </span>
                </p>
                <button
                    onClick={onClose}
                    className="absolute top-2 right-5 text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default SignupModal;