var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var pair = {};
  pair.itemName = item;
  pair.itemPrice = Math.floor(Math.random()) + 1;
  cart.push(pair);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  for(var i = 0; i < cart.length; i++){
    var item = cart[i];
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
