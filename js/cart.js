/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableBodyElem = document.querySelector('tbody');
  const newBodyElem = document.createElement('tbody');
  tableBodyElem = newBodyElem;
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  
  const tableBodyElem = document.querySelector('tbody');
  
  for (let i = 0; i < cart.items.length; i++) {
    
    const trElement = document.createElement('tr');
    trElement.setAttribute('id', i);
    
    const tdRemoveElement = document.createElement('td');
    tdRemoveElement.textContent = 'X';
    tdRemoveElement.setAttribute('id', i);
    trElement.appendChild(tdRemoveElement);
    // const buttonElem = document.createElement('button');
    // tdRemoveElement.appendChild(buttonElem);
    // buttonElem.textContent = 'X';
    
    const tdQuantityElem = document.createElement('td');
    tdQuantityElem.setAttribute('id', i);
    tdQuantityElem.textContent = cart.items[i].quantity;
    trElement.appendChild(tdQuantityElem);
    
    const tdNameElem = document.createElement('td');
    tdNameElem.setAttribute('id', i);
    tdNameElem.textContent = cart.items[i].product;
    trElement.appendChild(tdNameElem);
    tableBodyElem.appendChild(trElement);
  }

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  // const cartItem = JSON.parse(localStorage.getItem('cart'));
    console.log(event.target.id);
  cart.removeItem(event.target.id);
  localStorage.setItem('cart', JSON.stringify(this.items));
  // const removeTr = getElementById(event.target.id);
  // removeTr.remove();
  renderCart();
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table



// This will initialize the page and draw the cart on screen
renderCart();
