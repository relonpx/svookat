

import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <div className="container-2">
        <div className="flex ai-center jc-sb">
          <h1 className="home-logo">SVOOKAT</h1>
          <div className="search flex ai-center">
            <input className="search-bar" type="search" placeholder="search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="menu">
            <div className="menus">
              <a href="/" className="shape">
                <i className="fa-solid fa-house"></i>
              </a>
              <a href="/checkout" className="shape">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
              <a href="/order" className="shape">
                <i className="fa-solid fa-bag-shopping"></i>
              </a>
            </div>
            <img src="https://www.kejati-bali.go.id/assets/images/no-people.png" alt="" className="pp" />
          </div>
        </div>
      </div>
    </nav>
  );
}
