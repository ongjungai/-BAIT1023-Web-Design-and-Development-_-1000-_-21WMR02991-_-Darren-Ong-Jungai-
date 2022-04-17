/* submit button */
document.getElementById("billing").onsubmit=function(){ 
    if(true){
        var is_submit = confirm("Are you sure you would like to submit the order?");

        if(is_submit){
            var message = "Your order is successful! Please pay by cash when arrived.";
            alert(message);
            window.print();
        } else {
            return false;
        }
    } else{
        alert("Your order is unsuccessful, please try again.");
        return false;
    }
    

    return false; //FALSE: form will not be submitted
}

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


/*if total more than RM100 then discount 10%*/ 
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

/*if total more than RM200 then discount 20%*/ 
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

