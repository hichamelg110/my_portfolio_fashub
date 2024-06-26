
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './Accessories.css';

const accessoriesProducts = [
    { id: 14, name: "Her Moment To Shine Mini Bag - Silver", price: 9, image: "/07-11-22Studio3_ME_RL_08-58-15_10_E8AN01SV_Silver_0763_SG_468x.jpeg" },
    { id: 15, name: "You And Me Only Sunglasses - Silver", price: 1.98, image: "/03-25-24_S10_38_DR7355_Silver_CXB_13-12-55_10005_SG_ES_563efdd6-d304-4d3e-9a83-005525a3f508_468x.jpeg" },

  // i'll ad more accessories products
];

function Accessories() {
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
    <div className="accessories-container container mt-5">
      <h1 className="accessories-title text-center mb-4">Accessories Collection</h1>
      <div className="row">
        {accessoriesProducts.map(product => (
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

export default Accessories;
