import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './DrinkMenu.css';

const categories = [
  { id: 'beer', name: 'Birra' },
  { id: 'virgin', name: 'Cocktail' },
  { id: 'gin', name: 'Cocktail analcolici' },
  { id: 'vodka', name: 'Distillati' },
  { id: 'whisky', name: 'Shot' },
  { id: 'rum', name: 'Soft drink' },
  { id: 'grappa', name: 'Vino' },
  { id: 'bonus', name: 'Caffetteria' }
];

const drinks = [
  { id: 'hb-original', name: 'HB Original', description: 'Bionda tedesca - Alcol 5,1% Vol.', category: 'beer', tags: ['Premium'], price: '€7.00' },
  { 
    id: 'hb-original', 
    name: 'HB Original', 
    description: 'Bionda tedesca - Alcol 5,1% Vol.',
    category: 'beer',
    tags: ['Alla spina','Tedesca', 'Hell'],
    variants: [
      { size: '30cl', price: '€3.50' },
      { size: '50cl', price: '€5.50' }
    ]
  },
  { 
    id: 'hb-weisse', 
    name: 'HB Weisse', 
    description: 'Bionda torbida tedesca - Alcol 5,1% Vol. ',
    category: 'beer',
    tags: ['Alla spina','Tedesca', 'Weisse'],
    variants: [
      { size: '30cl', price: '€4.00' },
      { size: '50cl', price: '€6.00' }
    ]
  },
  { 
    id: 'hb-urbock', 
    name: 'HB Urbock', 
    description: 'Ambrata tedesca - Alcol 7,2% Vol.',
    category: 'beer',
    tags: ['Alla spina','Tedesca', 'Bock'],
    variants: [
      { size: '20cl', price: '€4.00' },
      { size: '40cl', price: '€6.00' }
    ]
  },
  { 
    id: 'complot-ipa', 
    name: 'Complot IPA', 
    description: 'Bionda torbida Belga - Alcol 6,6% Vol.',
    category: 'beer',
    tags: ['Alla spina','IPA', 'Belga'],
    variants: [
      { size: '30cl', price: '€4.00' },
      { size: '50cl', price: '€6.00' }
    ]
  },
  { 
    id: 'tennents-super', 
    name: 'Tennent\'s Super', 
    description: 'Bionda scozzese - Alcol 9% Vol.',
    category: 'beer',
    tags: ['Alla spina','Scozzese', 'Lager'],
    variants: [
      { size: '40cl', price: '€5.00' }
    ]
  },

  // Cocktails Premium €7.00
  { id: 'jack-cola', name: 'Jack e Coca', description: 'Jack Daniel\'s, cola', category: 'cocktails', tags: ['Premium'], price: '€7.00' },
  { id: 'white-russian', name: 'White Russian', description: 'Vodka, kahlua, panna montata', category: 'cocktails', tags: ['Premium'], price: '€7.00' },

  // Virgin Cocktails €5.00
  { id: 'virgin-mojito', name: 'Virgin Mojito', description: 'Lime, menta, zucchero di canna, lemon soda', category: 'virgin', tags: ['Analcolico'], price: '€5.00' },
  { id: 'virgin-colada', name: 'Virgin Colada', description: 'Succo d\'ananas, cocco, panna', category: 'virgin', tags: ['Analcolico'], price: '€5.00' },
  { id: 'tropical-oasis', name: 'Tropical Oasis', description: 'Succo pesca, succo d\'ananas, sciroppo alla papaya', category: 'virgin', tags: ['Analcolico'], price: '€5.00' },
  { id: 'strawberry-surprise', name: 'Strawberry Surprise', description: 'Sciroppo fragola, maracuja, succo di mela verde', category: 'virgin', tags: ['Analcolico'], price: '€5.00' },

  // Gin & Tonic
  { id: 'star-bombay', name: 'Star of Bombay', description: 'Con tonica premium indian', category: 'gin', tags: ['Premium'], price: '€10.00' },
  { id: 'hendricks', name: 'Hendrick\'s', description: 'Con tonica premium indian', category: 'gin', tags: ['Premium'], price: '€10.00' },
  { id: 'bulldog', name: 'Bulldog', description: 'Con tonica premium indian', category: 'gin', tags: ['Premium'], price: '€11.00' },
  { id: 'gin-mare', name: 'Gin Mare', description: 'Con tonica premium indian', category: 'gin', tags: ['Premium'], price: '€11.00' },
  { id: 'monkey-47', name: 'Monkey 47', description: 'Con tonica premium indian', category: 'gin', tags: ['Premium'], price: '€12.00' },

  // Vodka
  { id: 'grey-goose', name: 'Grey Goose', description: 'Vodka premium francese', category: 'vodka', tags: ['Premium'], price: '€8.00' },
  { id: 'belvedere', name: 'Belvedere', description: 'Vodka premium polacca', category: 'vodka', tags: ['Premium'], price: '€8.00' },

  // Whisky
  { id: 'talisker', name: 'Talisker Storm', description: 'Single malt scotch whisky', category: 'whisky', tags: ['Premium'], price: '€7.00' },
  { id: 'oban', name: 'Oban 14', description: 'Single malt scotch whisky', category: 'whisky', tags: ['Premium'], price: '€8.00' },
  { id: 'ardbeg', name: 'Ardbeg Ten', description: 'Single malt scotch whisky', category: 'whisky', tags: ['Premium'], price: '€8.00' },
  { id: 'glenmorangie', name: 'Glenmorangie', description: 'Single malt scotch whisky', category: 'whisky', tags: ['Premium'], price: '€7.00' },

  // Rum
  { id: 'pampero', name: 'Anniversario Pampero', description: 'Rum invecchiato venezuelano', category: 'rum', tags: ['Premium'], price: '€6.00' },
  { id: 'havana-7', name: 'Havana 7', description: 'Rum invecchiato cubano', category: 'rum', tags: ['Premium'], price: '€6.00' },
  { id: 'matusalem', name: 'Matusalem 7', description: 'Rum invecchiato dominicano', category: 'rum', tags: ['Premium'], price: '€7.00' },
  { id: 'zacapa', name: 'Zacapa 23', description: 'Rum invecchiato premium', category: 'rum', tags: ['Super Premium'], price: '€9.00' },

  // Grappe
  { id: '903-tipica', name: '903 Tipica', description: 'Grappa classica', category: 'grappa', tags: ['Classica'], price: '€4.00' },
  { id: 'prime-uve-bianca', name: 'Prime Uve Bianca', description: 'Grappa di uve bianche', category: 'grappa', tags: ['Premium'], price: '€6.00' },
  { id: 'prime-uve-nere', name: 'Prime Uve Nere', description: 'Grappa di uve rosse', category: 'grappa', tags: ['Premium'], price: '€6.00' }
];

const MenuDrink = () => {
  const [selectedCategory, setSelectedCategory] = useState('cocktails');
  const categoryContainerRef = useRef(null);
  const filteredDrinks = drinks.filter(drink => drink.category === selectedCategory);

  const scroll = (direction) => {
    if (categoryContainerRef.current) {
      const scrollAmount = 200;
      const newScrollPosition = categoryContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      categoryContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="menu-container">
      <div className="category-nav">
        <div className="scroll-buttons">
          <button 
            className="scroll-button"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div 
            className="category-container"
            ref={categoryContainerRef}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <button 
            className="scroll-button"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="drinks-grid">
        {filteredDrinks.map((drink) => (
          <div key={drink.id} className="drink-card">
            <div className="drink-content">
              <h3 className="drink-name">{drink.name}</h3>
              <p className="drink-description">{drink.description}</p>
              <div className="drink-tags">
                {drink.tags.map((tag, index) => (
                  <span key={index} className="drink-tag">{tag}</span>
                ))}
              </div>
              <p className="drink-price">{drink.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDrink;