import axios from 'axios';
import { useEffect, useState} from 'react';
import { Header } from '../compo/Header';
import './HomePage.css';
//to import the css for HomePage
//import { products } from '../../start-code/data/products'; //imports products array from product.js file 

//has React code for the home page
//creates compo for the homepg
//{cart} data from app state passed thru prop

export function HomePage({cart}){
//returs all html code from home pg(copy code from idex.html)
//wrap in fragment to return only 1 elements

const[products, setProducts] = useState([]);
//const[cart ,setCart] = useState([]); -> move this cart useState up by shiftig to app compo
useEffect(()=>{
axios.get('http://localhost:3000/api/products') 
.then((response)=>{
  setProducts(response.data); //useState to generate html
} ) ;//data from backend saved directly into response

//cart state up to App load cart in both checkout & homepage 
//to get the cart quantity data from backend in the Header
/*axios.get('http://localhost:3000/api/cart-items')
.then((response)=>{
  setCart(response.data);
  
})*/

}, [] )


//to get data from backend
/* fetch('http://localhost:3000/api/products')

//func in .then() runs when the fetch() code finishes in future & backend gives a response

.then((response) => { //this param contains response from the backend
//console.log(response); //func to be executed
response.json().then((data) => {
console.log(data); //displays data we get from backends
})
}
) */

//<Header> add the cart prop to pass the cart data from useState to the Header where cart quatity is present ie <Header cart = {cart}/> 
return(
<>
<title>Ecommerce Project</title>
<Header cart = {cart}/> 
    <div className="home-page">
      <div className="products-grid">
        {products.map((product) => {
return (
        <div key= {product.id} 
        className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src={product.image} />
          </div>
          <div className="product-name limit-text-to-2-lines">
            {product.name}
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={`images/ratings/rating-${product.rating.stars * 10}.png`} />
            <div className="product-rating-count link-primary">
              {product.rating.count}
            </div>
          </div>

          <div className="product-price">
            ${(product.priceCents/100).toFixed(2)}
          </div>

          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
);
        })}
</div>

</div>
</>
);
}
