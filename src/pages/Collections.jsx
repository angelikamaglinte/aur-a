import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Collections = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category') || 'all';

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const mockProducts = [
                { id: 1, name: 'Elegant Earrings', category: 'earrings', price: 120, image: assets.earrings1 },
                { id: 2, name: 'Hoop Earrings', category: 'earrings', price: 80, image: assets.earrings2 },
                { id: 3, name: 'Stacked Rings', category: 'rings', price: 150, image: assets.rings1 },
                { id: 4, name: 'Gold Necklace', category: 'necklaces', price: 200, image: assets.necklace1 },
                { id: 5, name: 'Silver Bracelet', category: 'bracelets', price: 100, image: assets.bracelet1 },
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

    return (
        <div className="px-6 md:px-16 lg:px-24 py-16 pt-24">
            {/* Category Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-semibold mb-4">SHOP ALL</h1>
                <p className="text-sm font-light mb-6">
                    Can't decide? You don't have to. Shop all fine jewelry in one place—rings, necklaces, bracelets, and more.
                </p>
                <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
                    <button
                        onClick={() => handleCategoryClick('earrings')}
                        className="flex-shrink-0 text-center"
                    >
                        <img
                            src={assets.earrings1}
                            alt="Earrings"
                            className="w-32 h-32 object-cover rounded-lg"
                        />
                        <p className="mt-2 text-sm font-medium">Earrings</p>
                    </button>
                    <button
                        onClick={() => handleCategoryClick('rings')}
                        className="flex-shrink-0 text-center"
                    >
                        <img
                            src={assets.rings1}
                            alt="Rings"
                            className="w-32 h-32 object-cover rounded-lg"
                        />
                        <p className="mt-2 text-sm font-medium">Rings</p>
                    </button>
                    <button
                        onClick={() => handleCategoryClick('necklaces')}
                        className="flex-shrink-0 text-center"
                    >
                        <img
                            src={assets.necklace1}
                            alt="Necklaces"
                            className="w-32 h-32 object-cover rounded-lg"
                        />
                        <p className="mt-2 text-sm font-medium">Necklaces</p>
                    </button>
                    <button
                        onClick={() => handleCategoryClick('bracelets')}
                        className="flex-shrink-0 text-center"
                    >
                        <img
                            src={assets.bracelet1}
                            alt="Bracelets"
                            className="w-32 h-32 object-cover rounded-lg"
                        />
                        <p className="mt-2 text-sm font-medium">Bracelets</p>
                    </button>
                    <button
                        onClick={() => handleCategoryClick('new')}
                        className="flex-shrink-0 text-center"
                    >
                        <img
                            src={assets.new_item_1}
                            alt="New"
                            className="w-32 h-32 object-cover rounded-lg"
                        />
                        <p className="mt-2 text-sm font-medium">New</p>
                    </button>
                    <button
                        onClick={() => handleCategoryClick('best-sellers')}
                        className="flex-shrink-0 text-center"
                    >
                        <img
                            src={assets.new_item_2}
                            alt="Best Sellers"
                            className="w-32 h-32 object-cover rounded-lg"
                        />
                        <p className="mt-2 text-sm font-medium">Best Sellers</p>
                    </button>
                </div>
            </div>

            {/* Product List */}
            <h1 className="text-3xl font-semibold mb-6 capitalize">{category.replace('-', ' ')}</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="flex flex-col items-start">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                        <p className="text-sm font-light mt-2">{product.name}</p>
                        <p className="text-sm font-medium">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collections;