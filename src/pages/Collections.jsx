import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Collections = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category') || 'all';

    const [products, setProducts] = useState([]);
    const [visibleProducts, setVisibleProducts] = useState(8);

    useEffect(() => {
        const fetchProducts = async () => {
            const mockProducts = [
                // Earrings
                { id: 1, name: 'Elegant Earrings', category: 'earrings', price: 120, image: assets.earrings1 },
                { id: 2, name: 'Hoop Earrings', category: 'earrings', price: 80, image: assets.earrings2 },
                { id: 3, name: 'Stud Earrings', category: 'earrings', price: 60, image: assets.earrings3 },
                { id: 4, name: 'Drop Earrings', category: 'earrings', price: 100, image: assets.earrings4 },

                // Rings
                { id: 5, name: 'Stacked Rings', category: 'rings', price: 150, image: assets.ring1 },
                { id: 6, name: 'Gold Band Ring', category: 'rings', price: 200, image: assets.ring2 },
                { id: 7, name: 'Diamond Solitaire Ring', category: 'rings', price: 500, image: assets.ring3 },
                { id: 8, name: 'Minimalist Ring', category: 'rings', price: 120, image: assets.ring4 },
                { id: 9, name: 'Vintage Ring', category: 'rings', price: 300, image: assets.ring5 },
                { id: 10, name: 'Rose Gold Ring', category: 'rings', price: 250, image: assets.ring6 },
                { id: 11, name: 'Sculpted Ring', category: 'rings', price: 180, image: assets.ring7 },
                { id: 12, name: 'Signature Ring', category: 'rings', price: 220, image: assets.ring8 },
                { id: 13, name: 'Classic Band Ring', category: 'rings', price: 140, image: assets.ring9 },
                { id: 14, name: 'Statement Ring', category: 'rings', price: 400, image: assets.ring10 },
                { id: 15, name: 'Twist Ring', category: 'rings', price: 160, image: assets.ring11 },
                { id: 16, name: 'Halo Ring', category: 'rings', price: 450, image: assets.ring12 },
                { id: 17, name: 'Infinity Ring', category: 'rings', price: 300, image: assets.ring13 },
                { id: 18, name: 'Crown Ring', category: 'rings', price: 280, image: assets.ring14 },
                { id: 19, name: 'Chevron Ring', category: 'rings', price: 170, image: assets.ring15 },
                { id: 20, name: 'Bar Ring', category: 'rings', price: 190, image: assets.ring16 },
                { id: 21, name: 'Geometric Ring', category: 'rings', price: 210, image: assets.ring17 },
                { id: 22, name: 'Floral Ring', category: 'rings', price: 230, image: assets.ring18 },

                // Necklaces
                { id: 23, name: 'Gold Necklace', category: 'necklaces', price: 200, image: assets.necklace1 },
                { id: 24, name: 'Silver Pendant Necklace', category: 'necklaces', price: 180, image: assets.necklace2 },
                { id: 25, name: 'Pearl Necklace', category: 'necklaces', price: 300, image: assets.necklace3 },
                { id: 26, name: 'Layered Necklace', category: 'necklaces', price: 250, image: assets.necklace4 },
                { id: 27, name: 'Charm Necklace', category: 'necklaces', price: 150, image: assets.necklace5 },
                { id: 28, name: 'Statement Necklace', category: 'necklaces', price: 400, image: assets.necklace6 },
                { id: 29, name: 'Minimalist Necklace', category: 'necklaces', price: 120, image: assets.necklace7 },

                // Bracelets
                { id: 30, name: 'Silver Bracelet', category: 'bracelets', price: 100, image: assets.bracelet1 },
                { id: 31, name: 'Gold Cuff Bracelet', category: 'bracelets', price: 150, image: assets.bracelet2 },
                { id: 32, name: 'Beaded Bracelet', category: 'bracelets', price: 80, image: assets.bracelet3 },
                { id: 33, name: 'Chain Bracelet', category: 'bracelets', price: 120, image: assets.bracelet4 },
                { id: 34, name: 'Charm Bracelet', category: 'bracelets', price: 140, image: assets.bracelet5 },
                { id: 35, name: 'Leather Bracelet', category: 'bracelets', price: 90, image: assets.bracelet6 },
                { id: 36, name: 'Diamond Bracelet', category: 'bracelets', price: 500, image: assets.bracelet7 },
                { id: 37, name: 'Rose Gold Bracelet', category: 'bracelets', price: 200, image: assets.bracelet8 },
                { id: 38, name: 'Minimalist Bracelet', category: 'bracelets', price: 110, image: assets.bracelet9 },
            ];

            const filteredProducts =
                category === 'all'
                    ? mockProducts
                    : mockProducts.filter((product) => product.category === category);

            setProducts(filteredProducts);
        };

        fetchProducts();
    }, [category]);

    const handleCategoryClick = (newCategory) => {
        navigate(`/collections?category=${newCategory}`);
    };

    const handleLoadMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8); // Load 8 more products
    };

    return (
        <div className="px-6 md:px-16 lg:px-24 py-16 pt-24">
            {/* Category Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold mb-4">SHOP ALL</h1>
                <p className="text-sm font-light mb-6">
                    Can't decide? You don't have to. Shop all fine jewelry in one place—rings, necklaces, bracelets, and more.
                </p>
                <div className="relative group">
                    {/* Left Arrow */}
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        onClick={() => {
                            const container = document.getElementById('category-scroll');
                            let start = container.scrollLeft;
                            const distance = -400; // Scroll left by 400px
                            const duration = 300; // Duration in milliseconds
                            const startTime = performance.now();

                            const animateScroll = (currentTime) => {
                                const elapsed = currentTime - startTime;
                                const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1
                                container.scrollLeft = start + distance * progress;

                                if (progress < 1) {
                                    requestAnimationFrame(animateScroll);
                                }
                            };

                            requestAnimationFrame(animateScroll);
                        }}
                    >
                        <img src={assets.arrow_left} alt="Left Arrow" className="w-6 h-6" />
                    </button>

                    {/* Categories */}
                    <div
                        id="category-scroll"
                        className="flex overflow-x-auto space-x-4 scrollbar-hide"
                    >
                        <button
                            onClick={() => handleCategoryClick('earrings')}
                            className="flex-shrink-0 text-left"
                        >
                            <img
                                src={assets.earrings1}
                                alt="Earrings"
                                className="w-80 h-70 object-cover rounded-2xl"
                            />
                            <p className="mt-2 text-sm font-medium">Earrings</p>
                        </button>
                        <button
                            onClick={() => handleCategoryClick('rings')}
                            className="flex-shrink-0 text-left"
                        >
                            <img
                                src={assets.ring2}
                                alt="Rings"
                                className="w-80 h-70 object-cover rounded-2xl"
                            />
                            <p className="mt-2 text-sm font-medium">Rings</p>
                        </button>
                        <button
                            onClick={() => handleCategoryClick('necklaces')}
                            className="flex-shrink-0 text-left"
                        >
                            <img
                                src={assets.necklace1}
                                alt="Necklaces"
                                className="w-80 h-70 object-cover rounded-2xl"
                            />
                            <p className="mt-2 text-sm font-medium">Necklaces</p>
                        </button>
                        <button
                            onClick={() => handleCategoryClick('bracelets')}
                            className="flex-shrink-0 text-left"
                        >
                            <img
                                src={assets.bracelet2}
                                alt="Bracelets"
                                className="w-80 h-70 object-cover rounded-2xl"
                            />
                            <p className="mt-2 text-sm font-medium">Bracelets</p>
                        </button>
                        <button
                            onClick={() => handleCategoryClick('new')}
                            className="flex-shrink-0 text-left"
                        >
                            <img
                                src={assets.new_item_1}
                                alt="New"
                                className="w-80 h-70 object-cover rounded-2xl"
                            />
                            <p className="mt-2 text-sm font-medium">New</p>
                        </button>
                        <button
                            onClick={() => handleCategoryClick('best-sellers')}
                            className="flex-shrink-0 text-left"
                        >
                            <img
                                src={assets.new_item_2}
                                alt="Best Sellers"
                                className="w-80 h-70 object-cover rounded-2xl"
                            />
                            <p className="mt-2 text-sm font-medium">Best Sellers</p>
                        </button>
                    </div>

                    {/* Right Arrow */}
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        onClick={() => {
                            const container = document.getElementById('category-scroll');
                            container.scrollLeft += 400; // Instantly scroll right by 400px
                        }}
                    >
                        <img src={assets.arrow_right} alt="Right Arrow" className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Product List */}
            <h1 className="text-3xl font-semibold mb-6 capitalize">{category.replace('-', ' ')}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products.slice(0, visibleProducts).map((product) => (
                    <div key={product.id} className="flex flex-col items-start">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <p className="text-sm font-light mt-2">{product.name}</p>
                        <p className="text-sm font-medium">${product.price}</p>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {visibleProducts < products.length && (
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 mb-4">
                        You've viewed {Math.min(visibleProducts, products.length)} of {products.length} products
                    </p>
                    <button
                        onClick={handleLoadMore}
                        className="px-6 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition cursor-pointer"
                    >
                        Load More
                    </button>
                </div>
            )}

            {/* flash banner */}
            <div className="mt-12 border-t border-b py-4 overflow-hidden">
                <div className="flex justify-center items-center space-x-8 text-sm font-medium animate-scroll">
                    <p>FREE SHIPPING ON ORDER OVER $75</p>
                    <p>2-YEAR WARRANTY</p>
                    <p>30+ STORES WORLDWIDE</p>
                    <p>FREE SHIPPING ON ORDER OVER $75</p>
                    <p>2-YEAR WARRANTY</p>
                    <p>30+ STORES WORLDWIDE</p>
                </div>
            </div>

            {/* shop by category */}
            <div className="relative group mt-10">
                {/* categories */}
                <div
                    id="category-scroll"
                    className="flex overflow-x-auto space-x-4 scrollbar-hide"
                >
                    <button
                        onClick={() => handleCategoryClick('earrings')}
                        className="flex-shrink-0 text-left"
                    >
                        <img
                            src={assets.earrings1}
                            alt="Earrings"
                            className="w-82 h-70 object-cover rounded-2xl"
                        />
                        <p className="mt-2 text-sm font-medium underline">SHOP EARRINGS</p>
                    </button>
                    <button
                        onClick={() => handleCategoryClick('rings')}
                        className="flex-shrink-0 text-left"
                    >
                        <img
                            src={assets.ring2}
                            alt="Rings"
                            className="w-82 h-70 object-cover rounded-2xl"
                        />
                        <p className="mt-2 text-sm font-medium underline">SHOP RINGS</p>
                    </button>
                    <button
                        onClick={() => handleCategoryClick('necklaces')}
                        className="flex-shrink-0 text-left"
                    >
                        <img
                            src={assets.necklace1}
                            alt="Necklaces"
                            className="w-82 h-70 object-cover rounded-2xl"
                        />
                        <p className="mt-2 text-sm font-medium underline">SHOP NECKLACES</p>
                    </button>
                    <button
                        onClick={() => handleCategoryClick('bracelets')}
                        className="flex-shrink-0 text-left"
                    >
                        <img
                            src={assets.bracelet2}
                            alt="Bracelets"
                            className="w-82 h-70 object-cover rounded-2xl"
                        />
                        <p className="mt-2 text-sm font-medium underline">SHOP BRACELETS</p>
                    </button>
                    <button
                        onClick={() => handleCategoryClick('best-sellers')}
                        className="flex-shrink-0 text-left"
                    >
                        <img
                            src={assets.new_item_2}
                            alt="Best Sellers"
                            className="w-82 h-70 object-cover rounded-2xl"
                        />
                        <p className="mt-2 text-sm font-medium underline">BEST SELLERS</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Collections;