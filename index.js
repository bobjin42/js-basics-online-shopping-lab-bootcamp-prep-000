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
    var itemObj = cart[i];
    var name = itemObj.itemName;
    var price = itemObj.itemPrice;
    var midEle = `you have ${name} at $${price}`;
    var lastEle = `and ${name} at $${price}`;
    if(cart.length === 1){
      return `In your cart, ${midEle}`;
    }else if(cart.length > 1){
      return
    }
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
