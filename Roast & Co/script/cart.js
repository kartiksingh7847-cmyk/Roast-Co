import { coffees } from "../data/product.js";

class Cart {
  cartItem = [];
  localStorageKey;
  constructor(key) {
    this.localStorageKey = key;
    this.loadFromStorage();
  }
  //Main function
  addToCart(productId,quantity) {
    let matched = this.match(productId);
    let existing = this.cartItem.find((cartItem) => cartItem.id === matched.id);
    if (existing) existing.quantity += quantity;
    else
      this.cartItem.push({
        id: matched.id,
        name: matched.name,
        price: matched.price,
        quantity: quantity,
      });
    this.saveToStorage();
  }
  remove(productId){
  this.cartItem = this.cartItem.filter((cartItem) => cartItem.id !== productId);    
  this.saveToStorage();
  }
  changeCartQuantity(productId,quantity){
    this.cartItem.forEach((cartItem) => {
      if(cartItem.id === productId) cartItem.quantity = quantity;
    });
    this.saveToStorage();
  }

  //Utility function
  match(productId) {
    return coffees.find((drinks) => drinks.id === productId);
  }
  saveToStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItem));
  }
  loadFromStorage() {
    this.cartItem =
      JSON.parse(localStorage.getItem(this.localStorageKey)) || [];
  }
}
export const cart = new Cart("cartItem");
