"use strict";

const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
  
};

const resetCart = () => {
  $('#cart-total').html('0.00'); //Replace HTML inside the element
  $('#cart-items').empty(); //Removes all children of element (keep parent)
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());  //
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.

//Add Item to Cart:
const addToCart = $('.add-to-order');
  
addToCart.on('click', ()=> {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);

});

//Place an Order:
const placeOrder = $('#place-order');

placeOrder.on('click', () => {
  const totalOrder = $('#cart-items').children().length;
  //$('#coffee-sold-counter').addClass($('#cart-items').children().length);
  $('#coffee-sold-counter').html(totalOrder);  //WORKSSSS Counts the coffees added to cart!
  
  setProgressAndStatus($('#cart-items').children().length, "Loading Coffee...");
  resetCart();

})