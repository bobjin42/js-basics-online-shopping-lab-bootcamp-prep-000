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
  pair.itemPrice = Math.floor(Math.random()*100) + 1;
  cart.push(pair);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var firstEle = `${cart[0].itemName} at $${cart[0].itemPrice}`;
  var lastEle = `${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}`
  var newStr = "";
  if(cart.length === 0){
    return `Your shopping cart is empty.`
  }else if(cart.length === 1){
    return `In your cart, you have ${firstEle}.`
  }
  for(var i = 1; i < cart.length -1; i++){
    var itemObj = cart[i];
    var name = itemObj.itemName;
    var price = itemObj.itemPrice;
    var pushEle = `${name} at $${price}, `;
    newStr += pushEle;
    if(cart.length === 2){
      return `In your cart, you have ${firstEle}, and ${newStr}.`;
    }  
    }
    return `In your cart, you have ${firstEle}, ${newStr}and ${lastEle}.`
  }

function total() {
  var sum = 0;
  for(var i = 0; i < cart.length; i++){
    var ele =  cart[i];
    var price = ele.itemPrice;
    sum += price;
  }
  return sum;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    var ele = cart[i];
    var name = ele.itemName;
    if(name === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  // write your code here
}
