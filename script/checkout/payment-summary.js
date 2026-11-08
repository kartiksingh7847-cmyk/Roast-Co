import { cart } from "../cart.js";
export function renderPaymentSummary() {
  let totalPrice = 0,
    totalQuantity = 0,
    shippingCost = cart.cartItem.length ? 60 : 0,
    beforeTax,
    tax,
    afterTax;
  cart.cartItem.forEach((cartItem) => {
    totalPrice += cartItem.price * cartItem.quantity;
    totalQuantity += cartItem.quantity;
  });
  beforeTax = totalPrice + shippingCost;
  tax = beforeTax * 0.1;
  afterTax = beforeTax + tax;
  let html = `<p class="order-summary-text">Order Summary</p>
              <div class="total-price"><p>Item Total(${totalQuantity}):</p><p>₹${totalPrice}</p></div>
              <div class="shipping-cost"><p>Shipping Cost:</p><p>₹${shippingCost}</p></div>
              <div class="before-tax"><p>Before Tax:</p><p>₹${beforeTax}</p></div>
              <div class="tax"><p>Estimated Tax(10%):</p><p>₹${tax}</p></div>
              <hr> 
              <div class="after-tax"><p>Order Total:</p><p>₹${afterTax}</p></div> 
              <button class="place-order">Place Order</button>
              `;
  document.querySelector(".payment-summary").innerHTML = html;
}
