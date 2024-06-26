import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';
import { useCart } from '../CartContext';

const products = [
  { id: 1, name: "Lounge Pant - Slate Blue", price: 17.99, image: "/1719089405901.jpeg" },
  { id: 9, name: "Hadwin Textured Shorts - Black/White", price: 35.99, image: "/04-10-24_S7_57_ZDF01H420025_BlackWhite_CZ_DJ_11-54-11_42230_BH_468x.jpeg" },
  { id: 6, name: "Mini Money Hungry Short Set - Red/Blackt", price: 21.99, image: "/04-16-24_S6_12_FNT802634_RedBlack_RA_IM_10-33-16_130869_PXF_c99fb3c9-f3cc-417f-baee-31a919ddf5ce_468x.jpeg" },
  { id: 15, name: "You And Me Only Sunglasses - Silver", price: 1.98, image: "/03-25-24_S10_38_DR7355_Silver_CXB_13-12-55_10005_SG_ES_563efdd6-d304-4d3e-9a83-005525a3f508_468x.jpeg" },
  { id: 10, name: "Check My Bank Statement Knit Short Sleeve Button Up - Black", price: 32.99, image: "/04-27-23Studio7_CB_SS_14-02-06_82_ZDF01K310094_Black_6845_CM_468x.jpeg" },
  { id: 13, name: "Living In It Textured Maxi Dress - Brown/combo", price: 51.99, image: "/05-04-24_S3_35_33389SK_Browncombo_TK_SS_12-09-06_2139_PXF_468x.jpeg" },
  { id: 12, name: "Exceeding Expectations Heels - Gold", price: 34.99, image: "/05-24-24_S8_23_KOLA18_Gold_ID_PC_11-06-49_84834_PXF_SL_468x.jpeg" },
];

function FeaturedProducts() {
  const scrollRef = useRef(null);
  const { favorites, addToFavorites, removeFromFavorites } = useCart();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleFavoriteClick = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    if (favorites.some(fav => fav.id === product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <section className="featured-products container mt-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="products-container">
        <button className="nav-btn prev-btn" onClick={() => scroll('left')}>&lt;</button>
        <div className="products-scroll" ref={scrollRef}>
          {products.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <button className="favorite-btn" onClick={(e) => handleFavoriteClick(e, product)}>
                  <i className={`${favorites.some(fav => fav.id === product.id) ? 'fas' : 'far'} fa-heart`}></i>
                </button>
              </div>
              <div className="product-info">
                <h5 className="product-name">{product.name}</h5>
                <p className="product-price">£{product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
        <button className="nav-btn next-btn" onClick={() => scroll('right')}>&gt;</button>
      </div>
    </section>
  );
}

export default FeaturedProducts;
