
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './Dresses.css';

const dressesProducts = [
    { id: 13, name: "Living In It Textured Maxi Dress - Brown/combo", price: 51.99, image: "/05-04-24_S3_35_33389SK_Browncombo_TK_SS_12-09-06_2139_PXF_468x.jpeg" },

];

function Dresses() {
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
    <div className="dresses-container container mt-5">
      <h1 className="dresses-title text-center mb-4">Dresses Collection</h1>
      <div className="row">
        {dressesProducts.map(product => (
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

export default Dresses;
