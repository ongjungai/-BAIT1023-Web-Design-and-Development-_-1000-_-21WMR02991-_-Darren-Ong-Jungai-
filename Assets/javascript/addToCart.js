let carts = document.querySelectorAll('.add-cart');


let products = [
    {
        name: 'Adistar Shoes',
        tag: '1. Adistar Shoe(1)',
        price: 549,
        inCart: 0
    },
    
    {
        name: 'X9000L4 Heat.Rdy Shoes',
        tag: '2. X9000L4 Heat.Rdy Shoe(1)',
        price: 599,
        inCart: 0
    },

    {
        name: 'Response Super 2.0 Shoes',
        tag: '3. Response Super 2.0 Shoe(1)',
        price: 579,
        inCart: 0
    },

    {
        name: 'Ultra4D Hurricanes Shoes',
        tag: '4. Ultra4D Hurricanes Shoe(1)',
        price: 1099,
        inCart: 0
    },

    {
        name: 'Fluidstreet Shoes',
        tag: '5. Fluidstreet Shoe(1)',
        price: 299,
        inCart: 0
    },

    {
        name: 'X9000L4 Shoes',
        tag: '6. X9000L4 Shoe(1)',
        price: 599,
        inCart: 0
    },

    {
        name: 'Terrex Jawpaw Slip-On Heat.Rdy',
        tag: '7. Terrex Jawpaw Slip-On Heat.Rdy Shoe(1)',
        price: 249,
        inCart: 0
    },

    {
        name: 'Alphatorsion 2.0',
        tag: '8. Alphatorsion 2.0(1)',
        price: 449,
        inCart: 0
    },

    {
        name: 'Ultraboost 1.0 DNA Shoes',
        tag: '9. Ultraboost 1.0 DNA Shoe(1).png',
        price: 799,
        inCart: 0
    },

    {
        name: 'Ultraboost 22 Heat.Rdy',
        tag: '10. Ultraboost 22 Heat.Rdy(1)',
        price: 799,
        inCart: 0
    },

    {
        name: 'Response Shoes',
        tag: '11. Response Shoe(1)',
        price: 299,
        inCart: 0
    },

    {
        name: 'Ultraboost 21 X Parley Shoes',
        tag: '12. Ultraboost 21 X Parley Shoe(3)',
        price: 609,
        inCart: 0
    },

    {
        name: 'Ultraboost 5.0 DNA',
        tag: '13. Ultraboost 5.0 DNA(3)',
        price: 549,
        inCart: 0
    },

    {
        name: 'Adidas Futurecraft 4D Shoes',
        tag: '14. Adidas Futurecraft 4D Shoe(2)',
        price: 1099,
        inCart: 0
    },

    {
        name: 'Lite Racer 3.0 Shoes',
        tag: '15. Lite Racer 3.0 Shoe(1)',
        price: 229,
        inCart: 0
    },

    {
        name: 'Ultraboost 21 X Parley Shoes',
        tag: '16. Ultraboost 21 X Parley Shoe(2)',
        price: 869,
        inCart: 0
    },

    {
        name: 'Ultraboost 22 Shoes',
        tag: '17. Ultraboost 22 Shoe(9)',
        price: 799,
        inCart: 0
    },

    {
        name: 'X9000L3 Shoes',
        tag: '18. X9000L3 Shoe(1)',
        price: 499,
        inCart: 0
    },

    {
        name: 'Ultraboost 21 Shoes',
        tag: '19. Ultraboost 21 Shoe(3)',
        price: 559,
        inCart: 0
    },

    {
        name: 'Ultraboost 4.0 DNA Shoes',
        tag: '20. Ultraboost 4.0 DNA Shoe(5)',
        price: 759,
        inCart: 0
    },

    {
        name: 'EQ21 Run Shoes',
        tag: '21. EQ21 Run Shoe(2)',
        price: 379,
        inCart: 0
    },

    {
        name: 'Ultraboost 22 Shoes',
        tag: '22. Ultraboost 22 Shoe(8)',
        price: 799,
        inCart: 0
    },

    {
        name: 'Ultraboost 21 Shoes',
        tag: '23. Ultraboost 21 Shoe(2)',
        price: 559,
        inCart: 0
    },

    {
        name: 'Adidas Futurecraft 4D Shoes',
        tag: '24. Adidas Futurecraft 4D Shoe(1)',
        price: 1099,
        inCart: 0
    },

    {
        name: 'Ultraboost 4.0 DNA Shoes',
        tag: '25. Ultraboost 4.0 DNA Shoe(4)',
        price: 759,
        inCart: 0
    }

];

for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){

    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.right span').textContent = productNumbers;  
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.right span').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.right span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else{
        product.inCart = 1;
        cartItems = {
        [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost +
        product.price);
    }
    else{
        localStorage.setItem("totalCost", product.price);  
    }
  
}

function displayCart() {
    let d = -10;
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    let suborderValue = document.querySelector(".orderValue");
    let SubTotal = document.querySelector(".subtotal");
    let cartCost = localStorage.getItem('totalCost');
    if(cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <table class="cart">

            <tbody>
           <td><div class="productimg">
                <img src="../Assets/img/Shoes(M)/${item.tag}.png">
                </div></td>

           <td colspan="2"> <div class="product" style="margin-left:-90px;">
                <span>${item.name}</span>
            </div> </td>

            <td><div class="price">
                RM${item.price}.00
            </div></td>

            <td><div class="quantity">
                <span>${item.inCart}</span>
            </div></td>

            <td><div class="total">
                RM${item.inCart * item.price}.00
            </div></td>

            </tr>
            </tbody>
            </table>
            </tr>
            `
        });

        productContainer.innerHTML += ` 
        <tr>
        <td class="cartTotalContainer">
                
        </td>
        <h4 class="cartTotal" >
                  Total:  RM${cartCost}.00
                </h4>
        `;
        suborderValue.innerHTML += `
            <span class="summaryPrices">RM${cartCost}.00</span>
        `;
        let total = cartCost - d;
        SubTotal.innerHTML +=`
            <span class="summaryPrices">RM${total}.00</span>
        `
    }

}
   
onLoadCartNumbers();
displayCart();


