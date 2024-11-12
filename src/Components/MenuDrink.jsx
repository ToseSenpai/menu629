import React, { useState } from 'react';
import './MenuDrink.css';
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
document.head.appendChild(fontAwesomeLink);

const categories = [
  {
    id: 1,
    name: 'Birra alla Spina',
    icon: 'fas fa-beer', // Classe Font Awesome
    drinks: [
      { name: 'HB Original', description: 'Bionda tedesca - Alcol 5,1% Vol.', price: '€3.50 (30cl) / €5.50 (50cl)' },
      { name: 'HB Weisse', description: 'Bionda torbida tedesca - Alcol 5,1% Vol.', price: '€4.00 (30cl) / €6.00 (50cl)' },
      { name: 'HB Urbock', description: 'Ambrata tedesca - Alcol 7,2% Vol.', price: '€4.00 (20cl) / €6.00 (40cl)' },
      { name: 'Complot IPA', description: 'Bionda torbida Belga - Alcol 6,6% Vol.', price: '€4.00 (30cl) / €6.00 (50cl)' },
      { name: 'Tennent\'s Super', description: 'Bionda scozzese - Alcol 9% Vol.', price: '€6.00' },
    ],
  },
  {
    id: 2,
    name: 'Birra in Bottiglia',
    icon: 'fas fa-beer',
    drinks: [
      { name: 'Bayerisch Export', description: 'Tedesca, Lager, 500ml, 5.3%', price: '€5.00' },
      { name: 'Lupulus', description: 'Belga, Strong Ale, 750ml, 8.5%', price: '€14.00' },
      { name: 'Norbertus', description: 'Tedesca, Doppio Malto, 500ml, 7.0%', price: '€6.00' },
      { name: 'Corona', description: 'Birra chiara messicana.', price: '€4.00' },
      { name: 'Desperados', description: 'Birra con tequila.', price: '€4.50' },
      { name: 'Ceres', description: 'Birra danese.', price: '€4.50' },
      { name: 'Beck\'s', description: 'Birra tedesca.', price: '€4.00' },
    ],
  },
  {
    id: 3,
    name: 'Birra Artigianale',
    icon: 'fas fa-beer',
    drinks: [
      { name: 'GHOSST', description: 'Belgian Strong Ale con zucchero candito.', price: '€6.00 (33cl)' },
      { name: 'Swatch Blanche', description: 'Birra bianca, leggera e rinfrescante.', price: '€6.00 (33cl)' },
      { name: 'Flooke', description: 'Amber Lager dal colore mogano intenso.', price: '€6.00 (33cl)' },
      { name: 'Alter Native', description: 'IPA con pesche, unica e alternativa.', price: '€6.00 (33cl)' },
      { name: 'Aero', description: 'American Pale Ale gluten free.', price: '€6.00 (33cl)' },
    ],
  },
  {
    id: 4,
    name: 'Cocktail',
    icon: 'fas fa-cocktail', 
    drinks: [
      { name: 'Aperol Spritz', description: 'Aperol, spumante, soda.', price: '€6.00' },
      { name: 'Moscow Mule', description: 'Vodka, ginger beer, lime.', price: '€6.00' },
      { name: 'Mojito', description: 'Rum, menta, lime, zucchero di canna, soda.', price: '€6.00' },
      { name: 'Cosmopolitan', description: 'Vodka, triple sec, succo lime, cranberry.', price: '€6.00' },
      { name: 'Margarita', description: 'Tequila, triple sec, succo di limone.', price: '€6.00' },
      { name: 'Long Island Iced Tea', description: 'Tequila, vodka, gin, rum, cola.', price: '€6.00' },
      { name: 'Mojito Cocco', description: 'Rum chiaro, batida de cocco, lemon soda, lime, menta fresca.', price: '€6.00' },
      { name: 'Blue Margarita', description: 'Tequila, triple sec, blue curacao, succo di limone.', price: '€6.00' },
{ name: 'Caipiroska', description: 'Vodka, lime, zucchero di canna.', price: '€6.00' },
{ name: 'Black Russian', description: 'Vodka, kahlua.', price: '€6.00' },
{ name: 'Cuba Libre', description: 'Rum scuro, cola, lime fresco.', price: '€6.00' },
{ name: 'Japanese Ice Tea', description: 'Vodka, gin, rum chiaro, midori, sweet sour, lemon soda.', price: '€6.00' },
{ name: 'Kamikaze', description: 'Vodka, triple sec, succo di limone, sweet sour.', price: '€6.00' },
{ name: 'Mai Tai', description: 'Rum chiaro, rum scuro, orzata, succo di cranberry.', price: '€6.00' },
{ name: 'Sex on the Beach', description: 'Vodka, vodka alla pesca, succo di cranberry, succo d\'arancia.', price: '€6.00' },
{ name: 'Tequila Sunrise', description: 'Tequila, succo d\'arancia, granatina.', price: '€6.00' },
{ name: 'Pina Colada', description: 'Rum chiaro, succo d\'ananas, sciroppo di cocco.', price: '€6.00' },
{ name: 'Invisibile', description: 'Rum bianco, triple sec, gin, vodka, sweet sour.', price: '€6.00' },
{ name: 'Zombie', description: 'Rum chiaro, rum scuro, papaja, succo d\'arancia.', price: '€6.00' },
{ name: 'Rabbit', description: 'Rum chiaro, succo d\'ananas, sciroppo di fragole.', price: '€6.00' },
{ name: 'Americano', description: 'Bitter campari, vermut rosso, soda.', price: '€6.00' },
{ name: 'Negroni', description: 'Bitter campari, vermut rosso, gin.', price: '€6.00' },
{ name: 'Sbagliato', description: 'Bitter campari, vermut rosso, spumante.', price: '€6.00' },
{ name: 'Vodka Sour', description: 'Vodka, sweet sour.', price: '€6.00' },
{ name: 'Corona Sunrise', description: 'Corona, tequila, granatina, succo d\'arancia.', price: '€6.00' },
{ name: 'Paloma', description: 'Tequila, succo di pompelmo, succo di limone, sciroppo di zucchero, soda.', price: '€6.00' },
{ name: 'Jack e Coca', description: 'Jack Daniel\'s, cola.', price: '€7.00' },
{ name: 'White Russian', description: 'Vodka, kahlua, panna montata.', price: '€7.00' }

      // Aggiungi altri cocktail qui
    ],
  },
  {
    id: 5,
    name: 'Virgin Cocktail',
    icon: 'fas fa-leaf',
    drinks: [
      { name: 'Virgin Mojito', description: 'Menta, lime, zucchero, soda.', price: '€5.00' },
      { name: 'Virgin Colada', description: 'Succo d\'ananas, cocco, panna.', price: '€5.00' },
      { name: 'Tropical Oasis', description: 'Succo pesca, ananas, papaya.', price: '€5.00' },
      { name: 'Strawberry Surprise', description: 'Sciroppo di fragola, maracuja, succo di mela verde.', price: '€5.00' }

      // Aggiungi altri virgin cocktail qui
    ],
  },
  {
    id: 6,
    name: 'Distillati',
    icon: 'fas fa-glass-whiskey',
    drinks: [
      { name: 'Gin del Professore', description: 'Gin artigianale italiano.', price: '€12.00' },
      { name: 'Monkey 47', description: 'Gin premium dalla Germania.', price: '€12.00' },
      { name: 'Grey Goose', description: 'Vodka francese premium.', price: '€8.00' },
      { name: 'Talisker Storm', description: 'Whisky scozzese.', price: '€7.00' },
      { name: 'Oban 14', description: 'Whisky scozzese invecchiato.', price: '€8.00' },
      { name: 'Havana 7', description: 'Rum cubano invecchiato.', price: '€6.00' },
      { name: 'Star of Bombay', description: 'Gin and tonic premium.', price: '€10.00' },
{ name: 'Hendrick’s', description: 'Gin and tonic con cetriolo o rosa.', price: '€10.00' },
{ name: 'Malfy Pompelmo', description: 'Gin italiano al pompelmo.', price: '€10.00' },
{ name: 'Malfy Arancia', description: 'Gin italiano all’arancia.', price: '€10.00' },
{ name: 'Malfy Limone', description: 'Gin italiano al limone.', price: '€10.00' },
{ name: 'Bulldog', description: 'Gin inglese dal gusto deciso.', price: '€11.00' },
{ name: 'Roku Gin', description: 'Gin giapponese con botaniche locali.', price: '€10.00' },
{ name: 'Gin Milano', description: 'Gin artigianale italiano.', price: '€12.00' },
{ name: 'Gin Mare', description: 'Gin mediterraneo con botaniche.', price: '€11.00' },
{ name: 'Monkey 47', description: 'Gin premium dalla Germania.', price: '€12.00' },
{ name: 'Nordés', description: 'Gin spagnolo con botaniche galiziane.', price: '€11.00' },
{ name: '903 Tipica', description: 'Grappa tradizionale italiana.', price: '€4.00' },
{ name: 'Prime Uve Bianca', description: 'Grappa bianca italiana.', price: '€6.00' },
{ name: 'Prime Uve Nere', description: 'Grappa nera italiana.', price: '€6.00' },
{ name: 'Ardbeg Ten', description: 'Whisky torbato scozzese.', price: '€8.00' },
{ name: 'Glenmorangie', description: 'Whisky scozzese morbido.', price: '€7.00' },
{ name: 'Anniversario Pampero', description: 'Rum venezuelano invecchiato.', price: '€6.00' },
{ name: 'Matusalem 7', description: 'Rum cubano morbido e invecchiato.', price: '€7.00' },
{ name: 'Zacapa 23', description: 'Rum guatemalteco premium.', price: '€9.00' }

      // Aggiungi altri distillati qui
    ],
  },
  {
    id: 7,
    name: 'Soft Drink',
    icon: 'fas fa-wine-glass-alt',
    drinks: [
      { name: 'Pepsi Cola', description: 'Bevanda gassata al gusto di cola.', price: '€3.50' },
      { name: 'Lemon Soda', description: 'Bevanda al gusto di limone.', price: '€3.50' },
      { name: 'Chinotto Lurisia', description: 'Bevanda al chinotto.', price: '€4.00' },
      { name: 'Red Bull', description: 'Bevanda energetica.', price: '€4.00' },
      { name: 'Acqua ½ litro', description: 'Acqua minerale.', price: '€1.50' },
      { name: 'Estathé Pesca / Limone', description: 'Tè freddo al gusto pesca o limone.', price: '€3.50' },
{ name: 'Coca Cola / Fanta / Sprite', description: 'Bibita in bottiglia.', price: '€3.50' },
{ name: 'Succo (Pesca, Pera, Ananas, ACE)', description: 'Succo di frutta disponibile in vari gusti.', price: '€3.50' },
{ name: 'Chinotto Lurisia', description: 'Bevanda italiana al chinotto.', price: '€4.00' },
{ name: 'Tonica Premium Indian', description: 'Tonica premium in bottiglia.', price: '€4.00' },
{ name: 'Ginger Beer Premium Indian', description: 'Ginger beer premium in bottiglia.', price: '€4.00' }

    ],
  },
  {
    id: 8,
    name: 'Caffetteria',
    icon: 'fas fa-coffee',
    drinks: [
      { name: 'Caffè Espresso', description: 'Classico caffè italiano.', price: '€1.50' },
      { name: 'Cappuccino', description: 'Espresso con latte montato.', price: '€2.50' },
      { name: 'Caffè Shakerato', description: 'Espresso freddo shakerato.', price: '€3.50' },
      { name: 'Cioccolata Calda', description: 'Bevanda al cioccolato.', price: '€4.00' },
      { name: 'Tè Caldo', description: 'Infuso di tè caldo.', price: '€3.00' },
    ],
  },
  {
    id: 9,
    name: 'Vini e Bollicine',
    icon: 'fas fa-wine-bottle',
    drinks: [
      { name: 'Muller Thurgau', description: 'Vino bianco, calice o bottiglia.', price: '€5.00 (calice) / €16.00 (bottiglia)' },
      { name: 'Bonarda', description: 'Vino rosso, calice o bottiglia.', price: '€5.00 (calice) / €16.00 (bottiglia)' },
      { name: 'Prosecco Brut', description: 'Vino frizzante.', price: '€5.00 (calice) / €20.00 (bottiglia)' },
      { name: 'Ferrari Brut', description: 'Spumante italiano.', price: '€35.00' },
      { name: 'Champagne', description: 'Champagne francese.', price: '€70.00' },
    ],
  },
];

const MenuDrink = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="menu-container">
      {categories.map((category, index) => (
        <div key={category.id} className="menu-item">
          <div
            className={`menu-title ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <i className={category.icon} style={{ marginRight: '10px' }}></i>
            <h2>{category.name}</h2>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>

          <div className={`menu-content ${activeIndex === index ? 'show' : ''}`}>
            {category.drinks.map((drink, idx) => (
              <div key={idx} className="drink-item">
                <h3>{drink.name} <span className="price">{drink.price}</span></h3>
                <p>{drink.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuDrink;