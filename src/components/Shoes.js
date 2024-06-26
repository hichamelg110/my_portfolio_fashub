
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './Shoes.css';

const shoesProducts = [
    { id: 12, name: "Exceeding Expectations Heels - Gold", price: 34.99, image: "/05-24-24_S8_23_KOLA18_Gold_ID_PC_11-06-49_84834_PXF_SL_468x.jpeg" },
    { id: 16, name: "Mini Playing Dress Up Strappy Sandal - Silver", price: 16.9, image: "/02-09-23Studio6_HY_SR_14-58-02_25_OMO2230K_Silver_P_3461_ES_468x.jpeg" },

];

function Shoes() {
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
    <div className="shoes-container container mt-5">
      <h1 className="shoes-title text-center mb-4">Shoes Collection</h1>
      <div className="row">
        {shoesProducts.map(product => (
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

export default Shoes;
