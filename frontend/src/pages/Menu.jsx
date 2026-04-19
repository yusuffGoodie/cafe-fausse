import './Menu.css';

function Menu() {
    const menuData = [
        {
            category: "Starters",
            items: [
                { name: "Bruschetta", price: "$8.50", desc: "Fresh tomatoes, basil, olive oil, and toasted baguette slices", img: "/images/menu_bruschetta_1776511767060.png" },
                { name: "Caesar Salad", price: "$9.00", desc: "Crisp romaine with homemade Caesar dressing", img: "/images/menu_caesar_salad_1776512007634.png" }
            ]
        },
        {
            category: "Main Courses",
            items: [
                { name: "Grilled Salmon", price: "$22.00", desc: "Served with lemon butter sauce and seasonal vegetables", img: "/images/grilled_salmon.jpg" },
                { name: "Ribeye Steak", price: "$28.00", desc: "12 oz prime cut with garlic mashed potatoes", img: "/images/gallery-ribeye-steak.webp" },
                { name: "Vegetable Risotto", price: "$18.00", desc: "Creamy Arborio rice with wild mushrooms", img: "/images/vegetable_risotto.webp" }
            ]
        },
        {
            category: "Desserts",
            items: [
                { name: "Tiramisu", price: "$7.50", desc: "Classic Italian dessert with mascarpone", img: "/images/menu_tiramisu_1776512411570.png" },
                { name: "Cheesecake", price: "$7.00", desc: "Creamy cheesecake with berry compote", img: "/images/cheesecake.webp" }
            ]
        },
        {
            category: "Beverages",
            items: [
                { name: "Red Wine (Glass)", price: "$10.00", desc: "A selection of Italian reds", img: "/images/red_wine.jpg" },
                { name: "White Wine (Glass)", price: "$9.00", desc: "Crisp and refreshing", img: "/images/white_wine.avif" },
                { name: "Craft Beer", price: "$6.00", desc: "Local artisan brews", img: "/images/menu_craft_beer.jpg" },
                { name: "Espresso", price: "$3.00", desc: "Strong and aromatic", img: "/images/menu_espresso_1776512291883.png" }
            ]
        }
    ];

    return (
        <div className="menu-page fade-in section container">
            <h1 className="section-title">Our Menu</h1>
            <div className="menu-container">
                {menuData.map((section, index) => (
                    <div key={index} className="menu-section">
                        <h2 className="menu-category">{section.category}</h2>
                        <div className="menu-grid">
                            {section.items.map((item, idx) => (
                                <div key={idx} className="menu-item">
                                    {item.img && (
                                        <div className="menu-item-image">
                                            <img src={item.img} alt={item.name} />
                                        </div>
                                    )}
                                    <div className="menu-item-content">
                                        <div className="menu-item-header">
                                            <h3>{item.name}</h3>
                                            <span className="price">{item.price}</span>
                                        </div>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
