import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage' //use HomePage() here
import { CheckoutPage } from './pages/CheckoutPage'; //use CheckoutPage() here
import { OrdersPage } from './pages/OrdersPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {

const [cart ,setCart] = useState([]); //moved state up for cart data from backed

//useEffect - so that functio runs only once after creation
useEffect(()=>{
axios.get('http://localhost:3000/api/cart-items?expand=product') //expand=product is a query parameter that causes the backend to expand the cart w product details
.then((response)=>{
  setCart(response.data);
  
});
}, [])


  return (
    //inside <App> add <Routes> component 
//path="/" -> index
<Routes>
<Route path="/" element={<HomePage cart={cart}/>}></Route> 
<Route path="checkout" element={<CheckoutPage cart={cart}/>}></Route>
<Route path="orders" element={<OrdersPage />}></Route>
</Routes>
//displays HomePage on going to the given url path
  );
}

export default App
