import { Link } from 'react-router';
//used in place of <Link> tags to go to another pg w/o reloading - spcl JS feature

import './header.css'; //imports css of header
//passing the cart data thru props from useState which is fetched from backend in the header compo to get the cart quantity
export  function Header({cart}){ //cart is the prop here from HomePage.jsx
let totalQuantity = 0;
//tp calculate cart quantity - loop thru the cart. each cart item passed as param to the inner func
cart.forEach((cartItem)=>{
  totalQuantity+= cartItem.quantity;
});

    return(
 <div className ="header">
      <div className ="left-section">
        <Link to="/" className="header-link">
          <img className="logo"
            src="images/logo-white.png" />
          <img className="mobile-logo"
            src="images/mobile-logo-white.png" />
        </Link>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <Link className ="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>


    );
}