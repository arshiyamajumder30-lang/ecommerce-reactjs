import axios from 'axios';
import './checkout-header.css';
import './CheckoutPage.css';
//import dayjs from 'dayjs'; //for delivery opt date
import { useState, useEffect } from 'react';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({cart, loadCart}){

  const[deliveryOptions , setDeliveryOptions]= useState([]);
//create state to save the deliveryOptions
const [paymentSummary, setPaymentSummary]= useState([]);
//create state to save the paymetSummary

//use async await to fetch data
useEffect(()=>{
  const fetchCheckoutData = async ()=>{
    let response = await axios.get('http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime')
    setDeliveryOptions(response.data);
  



//useEffect fetches the data from backend
/*useEffect(()=>{
axios.get('http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime')
//adds query param for est delivery time
.then((response)=>{
setDeliveryOptions(response.data)
});*/

//to get backend data for payment summary use asyc await
  response = await axios.get('http://localhost:3000/api/payment-summary')
    setPaymentSummary(response.data)
  }
 fetchCheckoutData();
},[cart])


      return(
<>
   <title>Checkout</title> 

 <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <a href="/">
            <img className="logo" src="images/logo.png" />
            <img className="mobile-logo" src="images/mobile-logo.png" />
          </a>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (<a className="return-to-home-link"
            href="/">3 items</a>)
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>

    <div className="checkout-page">
      <div className="page-title">Review your order</div>

      <div className="checkout-grid">
      <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>

    <PaymentSummary paymentSummary={paymentSummary} />
      </div>
    </div>
</>
    );
}