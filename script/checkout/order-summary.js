import { cart } from "../cart.js";
import { renderPaymentSummary } from "./payment-summary.js";
export function renderOrderSummary(){
  let html = '';
cart.cartItem.forEach(cartItem => {
  let matched = cart.match(cartItem.id);

  html += `<div class="order-summary">
        <img class="order-img" src="${matched.img}">
        <div class="order-detail">
          <p class="order-name">${matched.name}</p>
          <p class="order-price">₹${matched.price}</p>
          <p class="order-quantity">Quantity: ${cartItem.quantity}</p>
          <div>
          <select class="change-quantity"data-product-id="${matched.id}">
          ${generateQuantityOption(cartItem.quantity)}
          </select>
          <button class="remove" data-product-id="${matched.id}">Remove</button>
          </div>
          </div>
      </div>`
});
document.querySelector('.order-summary-grid').innerHTML = html;
remove();
changeQuantity();
}
// fucntions
function remove(){
  document.querySelectorAll('.remove').forEach((btn) => {
  btn.addEventListener('click',() => {
    let productId = btn.dataset.productId;
    cart.remove(productId);
    renderOrderSummary();
    renderPaymentSummary();
  });
});
}
function changeQuantity(){
  document.querySelectorAll('.change-quantity').forEach((dropdown) => {
    dropdown.addEventListener('change',() => {
      let productId = dropdown.dataset.productId;
      let quantity = dropdown.value;
      cart.changeCartQuantity(productId,quantity);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}
function generateQuantityOption(quantity){
  let html = '';
  for(let i = 1 ; i <= 3 ;i++){
    html += `
            <option value="${i}" ${Number(quantity) === i ? 'selected' : ''}>${i}</option>
            `
  }
  return html;
}