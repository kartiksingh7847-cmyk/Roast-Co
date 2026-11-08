import { coffees } from "../data/product.js";
import { cart } from "./cart.js";

let html = '';
coffees.forEach((drinks) => {
  html += `<div class="product-preview">
        <img class="product-img" src="${drinks.img}">
        <div class="product-detail">
          <p class="product-name">${drinks.name}</p>
          <div class="rating">
            <img class="rating-img" src="images/ratings/rating-${drinks.rating}.png">
            <p class="rating-num">${drinks.count}</p>
          </div>
          <p class="product-price">₹${drinks.price}</p>
          <select class="dropdown" data-product-id="${drinks.id}">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          </select>
          <p class="added" data-product-id="${drinks.id}">${`<img class="checkmark" src="images/checkmark.png">`}Added</p>
          <button class="add" data-product-id="${drinks.id}">Add</button>
        </div>
      </div>`
});
document.querySelector('.product-grid').innerHTML = html;

document.querySelectorAll('.add').forEach((btn) => {
  let productId = btn.dataset.productId;
  btn.addEventListener('click',() => {
    let quantity = dropDownValue(productId);
    added(productId);
      cart.addToCart(productId,quantity);
    });
});
function dropDownValue(productId){
  let dropdown = document.querySelector(`.dropdown[data-product-id="${productId}"]`);
  return Number(dropdown.value);
}
function added(productId){
  let div;
  document.querySelectorAll('.added').forEach((added) => {
    console.log(added.dataset.productId);
    if(added.dataset.productId === productId) div = added;
  });
  div.classList.add('js-added');
  setTimeout(() => {
    div.classList.remove('js-added');
  },1000);
}