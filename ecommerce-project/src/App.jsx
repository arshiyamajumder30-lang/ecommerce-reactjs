import { Routes, Route } from 'react-router';
import { HomePage } from './pages/home/HomePage' //use HomePage() here
import { CheckoutPage } from './pages/checkout/CheckoutPage'; //use CheckoutPage() here
import { OrdersPage } from './pages/orders/OrdersPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {

const [cart ,setCart] = useState([]); //moved state up for cart data from backed

const loadCart = async() => {
const response = await axios.get('https://ecommerce-backend-cm3m.onrender.com/api/cart-items?expand=product')//expand=product is a query parameter that causes the backend to expand the cart w product details
//.then((response)=>{
setCart(response.data);
};
//useEffect - so that functio runs only once after creation
//using async await

useEffect(()=>{
 loadCart();
}, []);


  return (
    //inside <App> add <Routes> component 
//path="/" -> index
<Routes>
<Route path="/" element={<HomePage cart={cart} loadCart={loadCart} />}></Route> 
<Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>}></Route>
<Route path="orders" element={<OrdersPage  cart={cart} />}></Route>
</Routes>
//displays HomePage on going to the given url path
  );
}

export default App
