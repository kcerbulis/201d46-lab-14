/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {


  var currentCartFromLs = localStorage.getItem('cart');
  cart = JSON.parse(currentCartFromLs);
  // TODO: Find the table body
  var cartTableSelector = document.getElementById('cart');

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  for (var i = 0; i < cart.items.length; i++){

    var currentCartRow = document.createElement('tr');

    var currentItemDelete = document.createElement('td');
    currentItemDelete.innerHtml = '';
    currentCartRow.appendChild(currentItemDelete);

    var currentItemQuantity = document.createElement('td');
    currentItemQuantity.textContent = cart.items[i].quantity;
    currentCartRow.appendChild(currentItemQuantity);

    var currentCartItem = document.createElement('td');
    currentCartItem.textContent = cart.items[i].product;
    currentCartRow.appendChild(currentCartItem);

    cartTableSelector.appendChild(currentCartRow);


  }

  //
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}
// showCart();
function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
