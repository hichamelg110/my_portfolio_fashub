import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './Favorites.css';

function Favorites() {
  const { favorites, removeFromFavorites } = useCart();

  return (
    <div className="favorites-container container mt-5">
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        <div className="row">
          {favorites.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="favorite-item">
                <img src={product.image} alt={product.name} className="favorite-image" />
                <div className="favorite-info">
                  <h5>{product.name}</h5>
                  <p>£{product.price.toFixed(2)}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-primary me-2">View Details</Link>
                  <button className="btn btn-danger" onClick={() => removeFromFavorites(product.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;