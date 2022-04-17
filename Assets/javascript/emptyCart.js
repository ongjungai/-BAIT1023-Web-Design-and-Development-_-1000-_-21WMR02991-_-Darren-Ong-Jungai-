let emptyCart = document.getElementsByClassName("emptyCart")[0];
if (emptyCart) {
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs((slideIndex += n));
  }
}
