
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './Kids.css';

const kidsProducts = [
  { id: 5, name: "Mini Mickey Mouse Vintage Crew Neck Sweatshirt", price: 29.99, image: "/05-30-24_S6_51_MYSSUL8_SlateGrey_KT_AA_14-55-05_9902_CM_468x.jpeg" },
  { id: 16, name: "Mini Playing Dress Up Strappy Sandal - Silver", price: 16.9, image: "/02-09-23Studio6_HY_SR_14-58-02_25_OMO2230K_Silver_P_3461_ES_468x.jpeg" },
  { id: 6, name: "Mini Money Hungry Short Set - Red/Blackt", price: 21.99, image: "/04-16-24_S6_12_FNT802634_RedBlack_RA_IM_10-33-16_130869_PXF_c99fb3c9-f3cc-417f-baee-31a919ddf5ce_468x.jpeg" },
  { id: 7, name: "Mini Go America Short Set - Heather Grey", price: 16, image: "/06-06-24_S6_29_TP16635KD_HeatherGrey_RA_PC_13-33-42_11437_PXF_468x.jpeg" },


];

function Kids() {
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
    <div className="kids-container container mt-5">
      <h1 className="kids-title text-center mb-4">Kids' Collection</h1>
      <div className="row">
        {kidsProducts.map(product => (
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

export default Kids;