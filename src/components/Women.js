
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import './Women.css';

const womenProducts = [
  { id: 11, name: "Breezy Paradise Linen Cover Up Cargo Pants Set - Black", price: 41.99, image: "/05-10-24_S1_43_ZDRC30379_Black_KT_SS_14-00-00_73415_PXF_468x.jpeg" },
  { id: 12, name: "Exceeding Expectations Heels - Gold", price: 34.99, image: "/05-24-24_S8_23_KOLA18_Gold_ID_PC_11-06-49_84834_PXF_SL_468x.jpeg" },
  { id: 13, name: "Living In It Textured Maxi Dress - Brown/combo", price: 51.99, image: "/05-04-24_S3_35_33389SK_Browncombo_TK_SS_12-09-06_2139_PXF_468x.jpeg" },
  { id: 14, name: "Her Moment To Shine Mini Bag - Silver", price: 9, image: "/07-11-22Studio3_ME_RL_08-58-15_10_E8AN01SV_Silver_0763_SG_468x.jpeg" },
  { id: 15, name: "You And Me Only Sunglasses - Silver", price: 1.98, image: "/03-25-24_S10_38_DR7355_Silver_CXB_13-12-55_10005_SG_ES_563efdd6-d304-4d3e-9a83-005525a3f508_468x.jpeg" },

];

function Women() {
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
    <div className="women-container container mt-5">
      <h1 className="women-title text-center mb-4">Women's Collection</h1>
      <div className="row">
        {womenProducts.map(product => (
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

export default Women;