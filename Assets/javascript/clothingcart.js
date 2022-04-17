let carts = document.querySelectorAll('.add-cart1');


let products = [
    {
        name: 'OWN THE RUN TEE',
        tag: 'clothing_1',
        price: 149,
        inCart: 0
    },
    
    {
        name: 'BRANDLOVE TEE',
        tag: 'clothing_2',
        price: 149,
        inCart: 0
    },

    {
        name: 'OWN THE RUN SGL',
        tag: 'clothing_3',
        price: 99,
        inCart: 0
    },

    {
        name: 'SHOWTIME LOGO GRAPHIC TEE',
        tag: 'clothing_4',
        price: 139,
        inCart: 0
    },

    {
        name: 'M D4T TEE',
        tag: 'clothing_5',
        price: 149,
        inCart: 0
    },
    
    {
        name: 'R.Y.V. CHECKS TEE',
        tag: 'clothing_6',
        price: 179,
        inCart: 0
    },

    {
        name: 'ADIDAS SPORTSWEAR FUTURE ICONS 3-STRIPES PANTS',
        tag: 'clothing_7',
        price: 209,
        inCart: 0
    },

    {
        name: 'FUTURE ICONS PANTS',
        tag: 'clothing_8',
        price: 249,
        inCart: 0
    },

    {
        name: 'ADIDAS SPRT LIGHTNING TRACK PANTS',
        tag: 'clothing_9',
        price: 230,
        inCart: 0
    },

    {
        name: 'GRAPHICS Y2K TRACK PANTS',
        tag: 'clothing_10',
        price: 329,
        inCart: 0
    },

    {
        name: 'TECHFIT 3-STRIPES FITTED LONG SLEEVE TOP',
        tag: 'clothing_11',
        price: 149,
        inCart: 0
    },

    {
        name: 'ADIDAS SPRT TRACK PANTS',
        tag: 'clothing_12',
        price: 249,
        inCart: 0
    },

    {
        name: 'OZTRADAMUS WINDBREAKER',
        tag: 'clothing_13',
        price: 329,
        inCart: 0
    },

    {
        name: 'ADIDAS ORIGINALS X KEVIN LYONS HOODIE',
        tag: 'clothing_14',
        price: 349,
        inCart: 0
    },

    {
        name: 'ADICROSS FUTURA PANTS',
        tag: 'clothing_15',
        price: 419,
        inCart: 0
    },

    {
        name: 'ADICOLOR CLASSICS TREFOIL HOODIE',
        tag: 'clothing_16',
        price: 329,
        inCart: 0
    },

    {
        name: 'TIRO 21 3/4 PANTS',
        tag: 'clothing_17',
        price: 179,
        inCart: 0
    },

    {
        name: 'SPRT LIGHTNING WINDBREAKER',
        tag: 'clothing_18',
        price: 379,
        inCart: 0
    },

    {
        name: 'OWN THE RUN SHO',
        tag: 'clothing_19',
        price: 129,
        inCart: 0
    },

    {
        name: 'T-MAC LEGEND RECODED JACKET',
        tag: 'clothing_20',
        price: 499,
        inCart: 0
    },

    {
        name: 'ADICOLOR INTERLOCK SHORTS',
        tag: 'clothing_21',
        price: 349,
        inCart: 0
    },

    {
        name: 'ESSENTIALS FEELVIVID DROP SHOULDER SWEATSHIRT',
        tag: 'clothing_22',
        price: 229,
        inCart: 0
    },

    {
        name: '4KRFT SHORTS',
        tag: 'clothing_23',
        price: 169,
        inCart: 0
    },

    {
        name: 'ESSENTIALS EMBROIDERED SMALL LOGO SWEATSHIRT',
        tag: 'clothing_24',
        price: 179,
        inCart: 0
    },

    {
        name: 'AEROREADY ESSENTIALS LINEAR LOGO SHORTS',
        tag: 'clothing_25',
        price: 149,
        inCart: 0
    },

    {
        name: 'LOUNGEWEAR ESSENTIALS SLIM 3-STRIPES TEE',
        tag: 'woman-1',
        price: 99,
        inCart: 0
    },

    {
        name: 'ADIDAS SPORTSWEAR STUDIO LOUNGE SUMMER CREW SWEATSHIRT',
        tag: 'woman-2',
        price: 249,
        inCart: 0
    },

    {
        name: 'ADICOLOR CLASSICS WOVEN BACK CUFF JOGGERS',
        tag: 'woman-3',
        price: 299,
        inCart: 0
    },

    {
        name: 'TECHFIT PERIOD-PROOF 7/8 TIGHTS',
        tag: 'woman-4',
        price: 279,
        inCart: 0
    },

    {
        name: '3-STRIPES SHORTS',
        tag: 'woman-5',
        price: 149,
        inCart: 0
    },

    {
        name: 'ADICOLOR CLASSICS TREFOIL TEE',
        tag: 'woman-6',
        price: 129,
        inCart: 0
    },

    {
        name: 'PRIMEBLUE SST TRACK JACKET',
        tag: 'woman-7',
        price: 299,
        inCart: 0
    },

    {
        name: 'ALWAYS ORIGINAL RELAXED PANTS',
        tag: 'woman-8',
        price: 379,
        inCart: 0
    },

    {
        name: 'HYPERGLAM AEROREADY TRAINING HIGH-RISE TIGHT SHORTS',
        tag: 'woman-9',
        price: 139,
        inCart: 0
    },

    {
        name: 'RICH MNISI SHORT TIGHTS',
        tag: 'woman-10',
        price: 149,
        inCart: 0
    },

    {
        name: 'ALWAYS ORIGINAL TEE',
        tag: 'woman-11',
        price: 189,
        inCart: 0
    },

    {
        name: 'DISNEY BAMBI GRAPHIC SWEATER',
        tag: 'woman-12',
        price: 299,
        inCart: 0
    },

    {
        name: 'REGULAR JOGGER PANTS',
        tag: 'woman-13',
        price: 269,
        inCart: 0
    },

    {
        name: 'HYPERGLAM TRAINING GRAPHIC TIGHTS',
        tag: 'woman-14',
        price: 179,
        inCart: 0
    },

    {
        name: 'ADICOLOR CLASSICS POPLIN SHORTS',
        tag: 'woman-15',
        price: 229,
        inCart: 0
    },

    {
        name: 'ALWAYS ORIGINAL OVERSIZED CROPPED TEE',
        tag: 'woman-16',
        price: 169,
        inCart: 0
    },

    {
        name: 'ADICOLOR CLASSICS HIGH-SHINE TRACK JACKET',
        tag: 'woman-17',
        price: 209,
        inCart: 0
    },

    {
        name: 'MET WOVEN PANTS',
        tag: 'clothing-18',
        price: 399,
        inCart: 0
    },

    {
        name: 'OPTIME TRAINING BIKE SHORT TIGHTS',
        tag: 'woman-19',
        price: 199,
        inCart: 0
    },

    {
        name: 'SOLID 5-INCH SHORTS',
        tag: 'woman-20',
        price: 269,
        inCart: 0
    },

    {
        name: 'RUNNER TEE',
        tag: 'woman-21',
        price: 149,
        inCart: 0
    },

    {
        name: 'ADICOLOR NYLON TRACK TOP',
        tag: 'woman-22',
        price: 239,
        inCart: 0
    },

    {
        name: 'ADICOLOR PLISSÉ PANTS',
        tag: 'woman-23',
        price: 299,
        inCart: 0
    },

    {
        name: 'ADIDAS X MARIMEKKO YOGA TIGHTS',
        tag: 'woman-24',
        price: 279,
        inCart: 0
    },

    {
        name: 'ADIDAS BY STELLA MCCARTNEY SHORTS',
        tag: 'woman-25',
        price: 209,
        inCart: 0
    },

    {
        name: 'TREFOIL TEE',
        tag: 'kids-1',
        price: 129,
        inCart: 0
    },

    {
        name: 'DISNEY MICKEY AND FRIENDS TEE',
        tag: 'kids-2',
        price: 149,
        inCart: 0
    },

    {
        name: 'DISNEY MICKEY MOUSE SUMMER SET',
        tag: 'kids-3',
        price: 159,
        inCart: 0
    },

    {
        name: 'ADIDAS X CLASSIC LEGO® TRACK SUIT',
        tag: 'kids-4',
        price: 179,
        inCart: 0
    },

    {
        name: 'ADIDAS X LEGO® VIDIYO™ TEE SHIRT',
        tag: 'kids-5',
        price: 109,
        inCart: 0
    },

    {
        name: 'ADIDAS X CLASSIC LEGO® SHORTS',
        tag: 'kids-6',
        price: 129,
        inCart: 0
    },

    {
        name: '3-STRIPES TEE',
        tag: 'kids-7',
        price: 119,
        inCart: 0
    },

    {
        name: 'ADIDAS X CLASSIC LEGO® SHORTS',
        tag: 'kids-8',
        price: 109,
        inCart: 0
    },

    {
        name: 'LB CO GRA TEE2',
        tag: 'kids-9',
        price: 69,
        inCart: 0
    },

    {
        name: '3-STRIPES FULL-ZIP HOODIE',
        tag: 'kids-10',
        price: 209,
        inCart: 0
    },

    {
        name: 'REAL MADRID MARVEL AVENGERS JERSEY',
        tag: 'kids-11',
        price: 319,
        inCart: 0
    },

    {
        name: 'BIG KIDS LIL STRIPE GRAPHIC TEE',
        tag: 'kids-12',
        price: 99,
        inCart: 0
    },

    {
        name: 'ADIDAS X LEGO® VIDIYO™ TEE LONGSLEEVE',
        tag: 'kids-13',
        price: 109,
        inCart: 0
    },

    {
        name: 'STUDIO LOUNGE BOTANICAL DYE SPORT SHORTS',
        tag: 'kids-14',
        price: 119,
        inCart: 0
    },

    {
        name: 'ADIDAS X LEGO® VIDIYO™ BOMBER JACKET',
        tag: 'kids-15',
        price: 279,
        inCart: 0
    },

    {
        name: 'ADICOLOR TEE',
        tag: 'kids-16',
        price: 109,
        inCart: 0
    },

    {
        name: 'ADICOLOR SHORTS AND TEE SET',
        tag: 'kids-17',
        price: 139,
        inCart: 0
    },

    {
        name: 'STUDIO LOUNGE BOTANICAL DYE SPORT CREW SWEATSHIRT',
        tag: 'kids-18',
        price: 179,
        inCart: 0
    },

    {
        name: '3-STRIPES PANTS',
        tag: 'kids-19',
        price: 159,
        inCart: 0
    },

    {
        name: 'LG COTTON TEE',
        tag: 'kids-20',
        price: 69,
        inCart: 0
    },
    
];

for(let i=0; i < carts.length; i++){
    carts1[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){

    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers1){
        document.querySelector('.right span').textContent = productNumbers;  
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers1);

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
            <td class="productimg">
                <img src="../Assets/img/Clothing(M)/${item.tag}.png">
            </td>
            <td class="product" colspan="2">
                <span>${item.name}</span>
            </td>
            <td class="price">
                RM${item.price}.00
            </td>
            <td class="quantity">
                <span>${item.inCart}</span>
            </td>
            <td class="total>
                RM${item.inCart * item.price}.00
            </td>

            `
        });

        productContainer.innerHTML += `
            <td class="cartTotalContainer">
                <h4 class="cartTotal">
                    RM${cartCost}.00
                </h4>
            </td>
            <td class="bin">
                <ion-icon name="trash-bin-outline"></ion-icon>
            </td>

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