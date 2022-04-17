/*Get items from local storage as a javscript object*/
const cartItem = JSON.parse(localStorage.getItem("items"));

/*calculate the latest total cart number (after deleted a item)*/
function cartNumbersUpdate() {
  if (cartItem != null) {
    let cartNum = JSON.parse(localStorage.getItem("cartNumbers"));
    cartNum = 0;
    for (let i = 0; i < cartItem.length; i++) {
      let itemNum = cartItem[i].cartNumbers;
      itemNum = parseInt(itemNum);
      cartNum += itemNum;
      cartNum = parseInt(cartNum);
    }

    localStorage.setItem("cartNumbers", cartNum);
  }
}
cartNumbersUpdate();

/*calculate total price od item in cart fuction*/
function updateCartPrice() {
  if (cartItem != null) {
    let totalPrice = 0;
    let deliveryFee = 10;

    for (let i = 0; i < cartItem.length; i++) {
      let price = cartItem[i].price;
      let itemNum = cartItem[i].cartNumbers;
      totalPrice += price * itemNum;
      totalPrice = Math.round(totalPrice * 100) / 100;
    }

    document.getElementsByClassName("totalPrices")[0].innerText = "";
    document.getElementsByClassName("totalPrices")[0].innerText =
      "RM" + totalPrice;
    document
      .getElementsByClassName("orderValue")[0]
      .getElementsByClassName("summaryPrices")[0].innerText = "";
    document
      .getElementsByClassName("orderValue")[0]
      .getElementsByClassName("summaryPrices")[0].innerText = "RM" + totalPrice;

      
      if (totalPrice >= 100) {
        let subtotal = deliveryFee + (totalPrice - (totalPrice*0.10));
        subtotal = Math.round(subtotal * 100) / 100;
  
        document
        .getElementsByClassName("discount")[0]
        .getElementsByClassName("summaryPrices")[0].innerText = "";
      document
        .getElementsByClassName("discount")[0]
        .getElementsByClassName("summaryPrices")[0].innerText =
        "-RM" + (totalPrice*0.10);
  
        document
          .getElementsByClassName("deliveryFee")[0]
          .getElementsByClassName("summaryPrices")[0].innerText = "";
        document
          .getElementsByClassName("deliveryFee")[0]
          .getElementsByClassName("summaryPrices")[0].innerText =
          "RM" + deliveryFee;
        document
          .getElementsByClassName("subtotal")[0]
          .getElementsByClassName("summaryPrices")[0].innerText = "";
        document
          .getElementsByClassName("subtotal")[0]
          .getElementsByClassName("summaryPrices")[0].innerText = "RM" + subtotal;
      } else {
        let subtotal = totalPrice;
  
        document
          .getElementsByClassName("deliveryFee")[0]
          .getElementsByClassName("summaryPrices")[0].innerText = "";
        document
          .getElementsByClassName("deliveryFee")[0]
          .getElementsByClassName("summaryPrices")[0].innerText = "RM" + 0;
        document
          .getElementsByClassName("subtotal")[0]
          .getElementsByClassName("summaryPrices")[0].innerText = "";
        document
          .getElementsByClassName("subtotal")[0]
          .getElementsByClassName("summaryPrices")[0].innerText = "RM" + subtotal;
      }
  
  
      if (totalPrice >= 200) {
        let subtotal = deliveryFee + (totalPrice - (totalPrice*0.20));
        subtotal = Math.round(subtotal * 100) / 100;
  
        document
        .getElementsByClassName("discount")[0]
        .getElementsByClassName("summaryPrices")[0].innerText = "";
      document
        .getElementsByClassName("discount")[0]
        .getElementsByClassName("summaryPrices")[0].innerText =
        "-RM" + (totalPrice*0.20);
  
        document
          .getElementsByClassName("deliveryFee")[0]
          .getElementsByClassName("summaryPrices")[0].innerText = "";
        document
          .getElementsByClassName("deliveryFee")[0]
          .getElementsByClassName("summaryPrices")[0].innerText =
          "RM" + deliveryFee;
        document
          .getElementsByClassName("subtotal")[0]
          .getElementsByClassName("summaryPrices")[0].innerText = "";
        document
          .getElementsByClassName("subtotal")[0]
          .getElementsByClassName("summaryPrices")[0].innerText = "RM" + subtotal;
      } else {
        let subtotal = totalPrice;
  
        document
          .getElementsByClassName("deliveryFee")[0]
          .getElementsByClassName("summaryPrices")[0].innerText = "";
        document
          .getElementsByClassName("deliveryFee")[0]
          .getElementsByClassName("summaryPrices")[0].innerText = "RM" + 0;
        document
          .getElementsByClassName("subtotal")[0]
          .getElementsByClassName("summaryPrices")[0].innerText = "";
        document
          .getElementsByClassName("subtotal")[0]
          .getElementsByClassName("summaryPrices")[0].innerText = "RM" + subtotal;
      }
  }
}

/*update item quantity and price*/
function updateItemQty() {
  var qty = document.getElementsByClassName("itemQuantity");

  for (let i = 0; i < qty.length; i++) {
    let items = [];

    qty[i].addEventListener("change", function (e) {
      if (e.target.value <= 0 || e.target.value == NaN) {
        cartItem.map((data) => {
          if (data == cartItem[i]) {
            data.cartNumbers = 1;
          }
        });
        items.push(JSON.stringify(cartItem));
      } else {
        cartItem.map((data) => {
          if (data == cartItem[i]) {
            data.cartNumbers = e.target.value;
          }
        });
        items.push(JSON.stringify(cartItem));
      }
      localStorage.setItem("items", items);
      window.location.reload();
    });
  }
}

/*remove function to the remove button*/
let removeItemBtn = document.getElementsByClassName("removeItemBtn");

function removeItem() {
  for (let i = 0; i < removeItemBtn.length; i++) {
    removeItemBtn[i].addEventListener("click", function (e) {
      if (confirm("Are you sure to remove this product?"))
        removeItemInLocalStorage(e);
    });
  }
}

function removeItemInLocalStorage(e) {
  let items = [];

  cartItem.map((data) => {
    let cartItemRow = e.target.parentElement.parentElement;

    if (
      data.imgSrc !== cartItemRow.children[0].children[0].src ||
      data.size !== cartItemRow.children[1].children[1].innerText ||
      data.name + "(" + data.color + ")" !==
        cartItemRow.children[1].children[0].innerText
    ) {
      items.push(data);
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
  window.location.reload();
}

/*display the item selected at product page*/
function displayCart() {
  let productContainer = document.getElementsByClassName("cartItemWrapper")[0];

  if (cartItem == null || cartItem.length == 0) {
    document.getElementsByClassName("cartWrapper")[0].innerHTML = "";

    document.getElementsByClassName("cartWrapper")[0].innerHTML += `
        <h1>Shopping Cart</h1>
        <div class="emptyCart">
            <div>Your cart is empty now...</div>
        </div>
        <div class="shopping-btn">
            <a href="product.html">
                <button>Start Shopping now</button>
            </a>
        </div>
        </div>

        `;
  }

  if (cartItem && productContainer) {
    productContainer.innerHTML = " ";

    if (cartItem.length != 0) {
      cartItem.map((item) => {
        productContainer.innerHTML += `<tr class="cartItem">
                                    <td class="imgContainer">
                                        <img class="cartImg" src="${
                                          item.imgSrc
                                        }"">
                                    </td>
                                    <td class="informationContainer" style="vertical-align: top;">
                                        <div class="cartName">${
                                          item.name + "(" + item.color + ")"
                                        }</div>
                                        <div class="itemSize">${item.size}</div>
                                    </td>
                                    <td class="cartPrice" data-label="price">RM${
                                      item.price
                                    }</td>
                                    <td class="itemQuantityContainer" data-label="qty">
                                        <input  class="itemQuantity" type="number" value="${
                                          item.cartNumbers
                                        }">         
                                    </td>
                                    <td class="rowTotalPrice" data-label="totalPrice">RM${
                                      Math.round(
                                        item.price * item.cartNumbers * 100
                                      ) / 100
                                    }</td>
                                    <td class="removeBtnContainer" data-label="removeBtn">
                                        <button class="fas fa-trash-alt removeItemBtn"></button>
                                    </td>
                                    </tr>`;
      });
      updateCartPrice();
      updateItemQty();
      removeItem();
    }
  }
}

displayCart();