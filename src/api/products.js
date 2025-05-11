export default function handler(req, res) {
    const products = [
        { id: 1, name: 'Elegant Earrings', category: 'earrings', price: 120, image: '/assets/products/earrings1.jpg' },
        { id: 2, name: 'Hoop Earrings', category: 'earrings', price: 80, image: '/assets/products/earrings2.jpg' },
        { id: 3, name: 'Stacked Rings', category: 'rings', price: 150, image: '/assets/products/rings1.jpg' },
    ];

    const { category } = req.query;

    if (category && category !== 'all') {
        const filteredProducts = products.filter((product) => product.category === category);
        res.status(200).json(filteredProducts);
    } else {
        res.status(200).json(products);
    }
}