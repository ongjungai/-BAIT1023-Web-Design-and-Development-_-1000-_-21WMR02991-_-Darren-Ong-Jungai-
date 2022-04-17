/* submit button */
document.getElementById("checkout").onsubmit=function(){ 

  if(true){
      var is_submit = confirm("Are you sure you would like to submit the payment?");

      if(is_submit){
          var message =  "Your payment is successful!";
          alert(message);
      } else {
          return false;
      }
  } else{
      alert("Your payment is unsuccessful, please try again.");
      return false;
  }
  

  return false; //FALSE: form will not be submitted
}


/* bank hide and show div */
function banks() {
    var x = document.getElementById("bank");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


