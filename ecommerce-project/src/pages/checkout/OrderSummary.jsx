import dayjs from "dayjs";
import axios from "axios";
import { DeliveryOptions } from "./DeliveryOptions";

export function OrderSummary({cart,deliveryOptions, loadCart}){
    return(
         <div className="order-summary">
            {cart.map((cartItem)=> { //generates html in react from backend
            //for "delivery-date" generation
            const selectDeliveryOption = deliveryOptions.find((deliveryOption)=>{
              return deliveryOption.id === cartItem.deliveryOptionId;
            })
           //matching deliveryOption will be saved i the variable
         
           //delete item from cart
           const deleteCartItem = async ()=>{
            await axios.delete(`https://ecommerce-backend-cm3m.onrender.com/api/cart-items/${cartItem.productId}`);
            await loadCart();
           };

           const updateCartItem = async ()=>{
            await axios.put(`https://ecommerce-backend-cm3m.onrender.com/api/cart-items/${cartItem.productId}`, {
              quantity : Number(cartItem.quantity)+1 
           })
           await loadCart();
           };
        
            //loops thru cart using .map() & for each cartItem return this html to display cartItem o checkout pg
              return(
                   <div key={cartItem.productId} className="cart-item-container">
                    <div className="delivery-date">
                      Delivery date: {dayjs(selectDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                    </div>
        
                    <div className="cart-item-details-grid">
                      <img className="product-image"
                        src={cartItem.product.image}/>
        
                      <div className="cart-item-details">
                        <div className="product-name">
                         {cartItem.product.name}
                        </div>
                        <div className="product-price">
                          ${(cartItem.product.priceCents/100).toFixed(2)}
                        </div>
                        <div className="product-quantity">
                          <span>
                            Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                          </span>
                          <span className="update-quantity-link link-primary"
                          onClick={updateCartItem}>
                            Update
                          </span>
                          <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>
                            Delete
                          </span>
                        </div>
                      </div>
        
        
        
                      <DeliveryOptions deliveryOptions={deliveryOptions} 
                      cartItem={cartItem} loadCart={loadCart}/>
                    </div>
                  </div>
              );
        
            })
            
            }
                </div>
    );
}