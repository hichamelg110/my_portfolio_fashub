
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './Shirts.css';

const shirtsProducts = [
    { id: 17, name: "Smiley Quilted Nylon Shacket - Cream", price: 27, image: "/09-01-23Studio8_CB_AP_11-57-43_54_FNMN390_Cream_2217_PLUS_MR_468x.jpeg" },


];

function Shirts() {
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
    <div className="shirts-container container mt-5">
      <h1 className="shirts-title text-center mb-4">Shirts Collection</h1>
      <div className="row">
        {shirtsProducts.map(product => (
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

export default Shirts;