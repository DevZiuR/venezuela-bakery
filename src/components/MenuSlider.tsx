
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const MenuSlider = () => {
  const [activeCategory, setActiveCategory] = useState('panaderia');

  const categories = [
    { id: 'panaderia', name: '🥐 PANADERÍA', icon: '🥐' },
    { id: 'postres', name: '🍰 POSTRES', icon: '🍰' },
    { id: 'pasapalos', name: '🥟 PASAPALOS', icon: '🥟' },
    { id: 'bebidas', name: '🥤 BEBIDAS', icon: '🥤' },
    { id: 'cafe', name: '☕ CAFÉ', icon: '☕' },
    { id: 'frituras', name: '🍳 FRITURAS', icon: '🍳' },
    { id: 'preparados', name: '🥪 PREPARADOS', icon: '🥪' },
    { id: 'kids', name: '👶 MENU KIDS', icon: '👶' }
  ];

  const menuItems = {
    panaderia: [
      { name: 'PAN PILITTA / SWEET BREAD', description: '', price: '$6.80' },
      { name: 'PAN FRANCÉS / FRENCH BREAD', description: '', price: '$0.92' },
      { name: 'CACHITOS (JAMÓN Y QUESO)', description: 'Stuffed Bread', price: '$4.35' },
      { name: 'PAN ANDINO / SWEET BREAD', description: '', price: '$7.30' },
      { name: 'PAN DE LECHE / MILK BREAD', description: '', price: '$6.80' },
      { name: 'LAMBADA / SWEET BREAD', description: '', price: '$18.00' },
      { name: 'PAN DE JAMÓN (NAVIDEÑO)', description: '', price: '$25.50' },
      { name: 'PAN DE QUESO / CHEESE BREAD', description: '', price: '$11.00' },
      { name: 'PAN DE QUESO Y TOCINETA', description: 'Cheese and Bacon Bread', price: '$12.00' },
      { name: 'PAN DE JAMÓN Y QUESO', description: 'Ham and Cheese Bread', price: '$12.00' },
      { name: 'PAN DE GUAYABA / GUAVA BREAD', description: '', price: '$7.00' },
      { name: 'PAN DE GUAYABA Y QUESO', description: 'Guava and Cheese Bread', price: '$7.50' },
      { name: 'OREJONES / EXTRA GUAVA BREAD', description: '', price: '$5.20' },
      { name: 'QUESADILLAS', description: 'Cheese and Cheese with Guava', price: '$4.50' },
      { name: 'GOLFEADOS', description: '', price: '$4.00' },
      { name: 'GOLFEADO CON QUESO DE MANO', description: 'Golfeados with Cheese', price: '$4.52' },
      { name: 'EMPANADAS HORNEADAS', description: 'Pollo, Carne mechada', price: '$4.35' },
      { name: 'PAN CANILLA / PLAIN BREAD', description: '', price: '$3.80' },
      { name: 'PAN CANILLA CON ORÉGANO', description: 'Oregano Bread', price: '$4.00' },
      { name: 'PAN CAMPESINO', description: 'Hard shell Bread', price: '$4.50' },
      { name: 'BIZCOCHOS / SWEET TOAST', description: '', price: '$3.64' },
      { name: 'PANINI X 4', description: '', price: '$5.72' },
      { name: 'PAN DE PERRO / HOT DOG BUN', description: '', price: '$5.72' },
      { name: 'PAN DE HAMBURGUESA', description: 'Hamburger Bun', price: '$5.72' },
      { name: 'PAN DE PEPITO / PEPITO BREAD', description: '', price: '$5.72' },
      { name: 'PAN DE SANDWICH', description: 'Sandwich Bread', price: '$5.72' },
      { name: 'PAN SERPENTINA', description: 'Serpentina Bread', price: '$5.72' },
      { name: 'SICILIANO / SICILIAN BREAD', description: '', price: '$5.80' }
    ],
    postres: [
      { name: 'PIE DE LIMÓN / LEMON PIE', description: '', price: '$7.00' },
      { name: 'PIE DE PARCHITA', description: 'Passion fruit pie', price: '$7.00' },
      { name: 'QUESILLO', description: '', price: '$7.00' },
      { name: 'TORTA 3 LECHES / 3 MILKS', description: '', price: '$7.00' },
      { name: 'MARQUESA DE CHOCOLATE', description: 'Chocolate Marquise', price: '$7.00' },
      { name: 'MILHOJAS', description: '', price: '$7.00' },
      { name: 'ENROLLADOS', description: '', price: '$7.00' },
      { name: 'DULCE DE LECHOZA CON PIÑA', description: '', price: '$7.00' },
      { name: 'TORTA DE PAN / BREAD CAKE', description: '', price: '$7.00' },
      { name: 'TORTA DE VAINILLA', description: 'Vanilla Cake', price: '$7.00' },
      { name: 'TORTA DE CHOCOLATE', description: 'Chocolate Cake', price: '$7.00' },
      { name: 'TORTA DE ZANAHORIA', description: 'Carrot Cake', price: '$7.00' },
      { name: 'BRAZO GITANO', description: '', price: '$7.00' },
      { name: 'TORTA NEGRA NAVIDEÑA', description: 'Temporada', price: '$7.00' }
    ],
    pasapalos: [
      { name: 'PASAPALOS VARIADOS 50 UNIDADES', description: '+Salsa, Tequeños, Pasteles, Empanadas', price: '$56.00' },
      { name: 'PASAPALOS VARIADOS 100 UNIDADES', description: '+Salsa, Tequeños, Pasteles, Empanadas', price: '$110.00' },
      { name: 'TEQUEÑOS 50 UNIDADES', description: '', price: '$53.48' },
      { name: 'TEQUEÑOS 100 UNIDADES', description: '', price: '$95.00' },
      { name: 'CACHITOS FIESTA UNIDAD', description: '', price: '$3.07' },
      { name: 'TÁRTARA 8OZ', description: '', price: '$4.00' },
      { name: 'SALSA PICANTE 8OZ', description: '', price: '$4.00' }
    ],
    bebidas: [
      { name: 'SODA DE LATA', description: '', price: '$2.86' },
      { name: 'SODA DE BOMBONITA', description: '', price: '$3.12' },
      { name: 'NESTEA', description: 'Durazno y Limón', price: '$4.00' },
      { name: 'PANELA CON LIMÓN', description: '', price: '$3.74' },
      { name: 'MALTA MALTÍN POLAR GRANDE', description: '', price: '$3.02' },
      { name: 'CHICHA ARTESANAL 1602', description: '', price: '$6.00' },
      { name: 'CHICHA EL CHICHERO 1L', description: '', price: '$8.50' },
      { name: 'CHICHA EL CHICHERO 330ML', description: '', price: '$4.63' },
      { name: 'JUGOS NATURALES', description: 'Parchita, Mora, Guanábana, Mango, Guayaba', price: '$4.00' },
      { name: 'JUGOS KIDS', description: '', price: '$1.50' },
      { name: 'AGUA', description: '', price: '$1.04' }
    ],
    cafe: [
      { name: 'CAFÉ LATTE 8OZ', description: '', price: '$2.60' },
      { name: 'CAFÉ LATTE 12OZ', description: '', price: '$3.12' },
      { name: 'CAFÉ AMERICANO', description: '', price: '$2.03' },
      { name: 'CAFÉ AMERICANO MEDIANO', description: 'Medium', price: '$2.50' },
      { name: 'CAFÉ EXPRESSO PEQUEÑO', description: 'Small', price: '$1.82' },
      { name: 'CAFÉ EXPRESSO MEDIANO', description: 'Medium', price: '$2.70' },
      { name: 'CAPPUCCINO PEQUEÑO', description: 'Small', price: '$2.70' },
      { name: 'CAPPUCCINO MEDIANO', description: 'Medium', price: '$3.12' },
      { name: 'TÉ CALIENTE / HOT TEA', description: '', price: '$2.60' },
      { name: 'VASO DE LECHE FRÍA', description: 'Cold Milk', price: '$3.12' },
      { name: 'CHOCOLATE CALIENTE', description: 'Hot Chocolate', price: '$3.12' }
    ],
    frituras: [
      { name: 'EMPANADAS FRITAS', description: 'Carne Mechada, Carne Molida, Pollo, Queso, Jamón y queso', price: '$4.35' },
      { name: 'EMPANADAS ESPECIALES', description: 'Marisco, Papa y queso, Pabellón, Cazón', price: '$4.53' },
      { name: 'PASTELES', description: 'Carne Molida, Papa con Queso, Queso, Pollo, Pizza', price: '$3.90' },
      { name: 'TEQUEÑOS X5', description: '', price: '$8.00' },
      { name: 'TEQUEÑOS POR UNIDAD', description: '', price: '$1.70' },
      { name: 'TEQUEÑOS DE GUAYABA', description: '', price: '$2.00' },
      { name: 'TEQUEÑOS DE NUTELLA', description: '', price: '$2.00' },
      { name: 'TEQUEYOYO PEQUEÑO', description: '', price: '$2.00' },
      { name: 'COMBO DE MANDOCAS', description: '2 Mandocas, queso y nata', price: '$9.88' },
      { name: 'MANDOCA', description: '1 Mandoca, queso y nata', price: '$5.00' }
    ],
    preparados: [
      { name: 'MOROCHOS DE JAMÓN Y QUESO', description: 'Lechuga, tomate y salsa', price: '$11.00' },
      { name: 'MOROCHOS CON PROTEÍNA', description: 'Carne, Pollo, Pernil o Lomo negro, Queso, lechuga, tomate', price: '$12.00' },
      { name: 'MOROCHOS DE PAN DULCE', description: 'Pan Pilitta relleno de Jamón y Queso y salsa rosada', price: '$13.52' },
      { name: 'COMBO AREPAS MOROCHAS', description: '2 arepas fritas con proteína, queso, lechuga, tomate', price: '$10.99' },
      { name: 'AREPA ASADA CON PROTEÍNA', description: 'Con carne, pollo, pernil o lomo negro y acompañantes', price: '$10.99' },
      { name: 'AREPA ASADA JAMÓN Y QUESO', description: 'Grilled Arepa with Ham and Cheese', price: '$8.32' },
      { name: 'PAN FRANCÉS CON JAMÓN Y QUESO', description: 'Lechuga, tomate y salsas', price: '$5.72' },
      { name: 'PAN FRANCÉS CON PROTEÍNA', description: 'Carne, pollo, pernil con acompañantes', price: '$6.76' },
      { name: 'CACHAPA TRADICIONAL', description: 'Queso de mano, nata y queso llanero', price: '$10.99' },
      { name: 'CACHAPA CON PROTEÍNA', description: 'Carne o pollo mechado con quesos', price: '$15.08' },
      { name: 'PATACÓN MIXTO', description: 'Con todas las proteínas y acompañantes', price: '$15.60' },
      { name: 'CLUB HOUSE', description: 'Huevo, jamón, queso, lechuga, tomate con papas fritas', price: '$12.50' },
      { name: 'CLUB SANDWICH', description: 'Jamón, queso blanco, lechuga, tomate, salsas', price: '$11.00' },
      { name: 'HAMBURGUESA', description: 'Carne o pollo, repollo, jamón, queso, papas, tocineta', price: '$13.99' },
      { name: 'PERRO CALIENTE', description: 'Salchicha, queso, repollo, papas ralladas, salsas', price: '$8.99' },
      { name: 'AREPA PABELLÓN', description: 'Carne mechada, frijoles negros, queso y plátano', price: '$10.99' },
      { name: 'BURRITO JAMÓN Y QUESO', description: 'Lechuga, tomate, jamón, queso, salsas, nata', price: '$11.00' },
      { name: 'PAN ANDINO PREPARADO', description: 'Nata y queso de mano', price: '$24.00' }
    ],
    kids: [
      { name: 'COMBO KIDS', description: '6 tequeños, ketchup, jugo y juguete', price: '$8.00' }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-5xl font-bold text-center text-[#731615] mb-16 font-cormorant">
          Nuestro Menú
        </h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-none border-0 transition-all duration-300 font-jost text-sm font-medium tracking-wider ${
                activeCategory === category.id
                  ? 'bg-[#2C384F] text-white'
                  : 'bg-gray-100 text-[#2C384F] hover:bg-gray-200'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Items - Match Reference Style */}
        <div className="max-w-5xl mx-auto bg-white">
          {menuItems[activeCategory]?.map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-6 border-b border-gray-200 last:border-b-0 transition-all duration-200 cursor-pointer rounded-lg hover:bg-[#ECC971]/30 hover:shadow-md active:bg-[#731615]/90 active:border active:border-[#ECC971] group"
              tabIndex={0}
            >
              <div className="flex-1 pr-8">
                <h3 className="text-lg font-medium text-[#2C384F] mb-1 font-cormorant tracking-wide uppercase group-hover:text-[#731615] group-active:text-white transition-colors">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-600 font-jost italic group-hover:text-[#2C384F] group-active:text-[#ECC971] transition-colors">
                    {item.description}
                  </p>
                )}
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold text-[#2C384F] font-cormorant group-hover:text-[#731615] group-active:text-[#ECC971] transition-colors">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Descargar Catálogo PDF Button */}
      <div className="flex justify-center mt-10">
        <a
          href="https://drive.google.com/file/d/15mIhAcNk6IGyHRmMDRljeO2jjnUZejiP/view"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#731615] text-[#ECC971] font-poppins px-8 py-3 rounded-md shadow-md hover:bg-[#5a1011] border-[#ECC971] transition-all duration-200 text-base font-semibold"
        >
          Descargar Catálogo PDF
        </a>
      </div>
    </section>
  );
};

export default MenuSlider;
