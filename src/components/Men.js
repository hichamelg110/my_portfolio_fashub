
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './Men.css';

const menProducts = [
  { id: 8, name: "Palermo Crinkled Nylon Cropped Puffer - Red", price: 9, image: "/02-08-24_S7_90_ZDF01C410029_Red_CZ_DJ_15-16-25_22162_EH_468x.jpeg" },
  { id: 10, name: "Check My Bank Statement Knit Short Sleeve Button Up - Black", price: 32.99, image: "/04-27-23Studio7_CB_SS_14-02-06_82_ZDF01K310094_Black_6845_CM_468x.jpeg" },
  { id: 9, name: "Hadwin Textured Shorts - Black/White", price: 35.99, image: "/04-10-24_S7_57_ZDF01H420025_BlackWhite_CZ_DJ_11-54-11_42230_BH_468x.jpeg" },
  { id: 17, name: "Smiley Quilted Nylon Shacket - Cream", price: 27, image: "/09-01-23Studio8_CB_AP_11-57-43_54_FNMN390_Cream_2217_PLUS_MR_468x.jpeg" },

];

function Men() {
  const { favorites, addToFavorites, removeFromFavorites } = useCart();

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
    <div className="men-container container mt-5">
      <h1 className="men-title text-center mb-4">Men's Collection</h1>
      <div className="row">
        {menProducts.map(product => (
          <div key={product.id} className="col-md-2 mb-4">
            <Link to={`/product/${product.id}`} className="text-decoration-none">
              <div className="product-card">
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
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Men;