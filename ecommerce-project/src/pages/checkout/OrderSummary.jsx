import dayjs from "dayjs";
import { DeliveryOptions } from "./DeliveryOptions";

export function OrderSummary({cart,deliveryOptions}){
    return(
         <div className="order-summary">
            {cart.map((cartItem)=> { //generates html in react from backend
            //for "delivery-date" generation
            const selectDeliveryOption = deliveryOptions.find((deliveryOption)=>{
              return deliveryOption.id === cartItem.deliveryOptionId;
            })
           //matching deliveryOption will be saved i the variable
        
        
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
                          <span className="update-quantity-link link-primary">
                            Update
                          </span>
                          <span className="delete-quantity-link link-primary">
                            Delete
                          </span>
                        </div>
                      </div>
        
        
        
                      <DeliveryOptions deliveryOptions={deliveryOptions} 
                      cartItem={cartItem}/>
                    </div>
                  </div>
              );
        
            })
            
            }
                </div>
    );
}