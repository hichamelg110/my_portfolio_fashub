
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import Login from './Login';
import './Header.css';

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [showSignOut, setShowSignOut] = useState(false);
  const { cart } = useCart();

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLogin(false);
  };

  const handleSignOut = () => {
    setUser(null);
    setShowSignOut(false);
  };

  return (
    <header className="bg-white py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">
            <Link to="/" className="text-decoration-none">
              <h1 className="m-0">Fashion<span className="hub-text">Hub</span></h1>
            </Link>
          </div>
          <div className="col-9">
            <nav>
              <ul className="nav justify-content-end mb-2">
                <li className="nav-item"><Link className="nav-link text-dark" to="/women">Women</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark" to="/men">Men</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark" to="/kids">Kids</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark" to="/search"><i className="fas fa-search"></i></Link></li>
                <li className="nav-item">
                  {user ? (
                    <div className="user-icon-container">
                      <button
                        className="user-icon"
                        onClick={() => setShowSignOut(!showSignOut)}
                        style={{ backgroundColor: user.color }}
                      >
                        {user.firstName.substring(0, 2).toUpperCase()}
                      </button>
                      {showSignOut && (
                        <button className="sign-out-btn" onClick={handleSignOut}>
                          Sign Out
                        </button>
                      )}
                    </div>
                  ) : (
                    <a className="nav-link text-dark" href="#" onClick={(e) => { e.preventDefault(); setShowLogin(true); }}>
                      <i className="fas fa-user"></i>
                    </a>
                  )}
                </li>
                <li className="nav-item"><Link className="nav-link text-dark" to="/favorites"><i className="fas fa-heart"></i></Link></li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/cart">
                    <i className="fas fa-shopping-bag"></i>
                    {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
                  </Link>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className="nav">
                <li className="nav-item"><Link className="nav-link text-dark" to="/shoes">Shoes</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark" to="/shirts">Shirts</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark" to="/dresses">Dresses</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark" to="/pants">Pants</Link></li>
                <li className="nav-item"><Link className="nav-link text-dark" to="/accessories">Accessories</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {showLogin && <Login onClose={() => setShowLogin(false)} onLogin={handleLogin} />}
    </header>
  );
}

export default Header;
