import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <img src="/wp7030283-fashion-girl-wallpapers.jpg" alt="Fashion Banner" className="img-fluid w-100" />
      <div className="banner-text position-absolute top-50 start-50 translate-middle text-center">
        <div className="text-box">
          <h2 className="banner-headline">Discover Your Style</h2>
          <p className="banner-subtext">Find the latest trends for the whole family</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
