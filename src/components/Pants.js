
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './Pants.css';

const pantsProducts = [
    { id: 9, name: "Hadwin Textured Shorts - Black/White", price: 35.99, image: "/04-10-24_S7_57_ZDF01H420025_BlackWhite_CZ_DJ_11-54-11_42230_BH_468x.jpeg" },


];

function Pants() {
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
    <div className="pants-container container mt-5">
      <h1 className="pants-title text-center mb-4">Pants Collection</h1>
      <div className="row">
        {pantsProducts.map(product => (
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

export default Pants;
