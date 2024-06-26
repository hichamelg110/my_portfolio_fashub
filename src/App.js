import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import FeaturedProducts from './components/FeaturedProducts';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import Women from './components/Women';
import Men from './components/Men';
import Kids from './components/Kids';
import Shirts from './components/Shirts';
import Pants from './components/Pants';
import Shoes from './components/Shoes';
import Accessories from './components/Accessories';
import Dresses from './components/Dresses';
import { CartProvider } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Banner />
                <FeaturedProducts />
              </>
            } />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/pants" element={<Pants />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/dresses" element={<Dresses />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;