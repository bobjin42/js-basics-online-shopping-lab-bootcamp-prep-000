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
  var firstEle = `${cart[0].itemName} at ${cart[0].itemPrice`;
  var lastEle = `${cart[cart.length -1]} at ${cart[cart.length -1].itemPrice`;
  for(var i = 1; i < cart.length - 1; i++){
    var itemObj = cart[i];
    var name = itemObj.itemName;
    var price = itemObj.itemPrice;
    var pushEle = `${name} at $${price}`;
    if(cart.length === 0){
      return "Your shopping cart is empty.";
    } else if (cart.length === 1){
      return `In your cart, you have ${pushEle}`;
    } else if(cart.length === 2){
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
