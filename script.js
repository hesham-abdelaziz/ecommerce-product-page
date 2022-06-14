let cartIcon = document.querySelector('.cart-icon');
let cartContainer = document.querySelector('.cart');
let overlay = document.querySelector('.overlay');
let productImage = document.querySelector('.product-gallery img');
let galleryThumb = document.querySelector('.product-gallery-thumb');
let quantity = document.querySelector('.quantity-num');
let increaseBtn = document.querySelector('.increase');
let decreaseBtn = document.querySelector('.decrease');
let cartContent = document.querySelector('.cart-icon .cart-body .product span');
let addBtn = document.querySelector('.addBtn');
let cartItems = document.querySelector('.items-num');
let productInCart = document.querySelector('.cart-body ');
let emptyCart = document.querySelector('.empty');
let itemPrice = document.querySelector('.cart-body .product .price');
let productBigImg = document.querySelector('.body .product img ');
let drawerToggler = document.querySelector('.drawer-toggler');
let drawer = document.querySelector('.drawer');
let drawerClose = document.querySelector('.drawer .close');
let drawerOverlay = document.querySelector('.drawer-overlay');

let slideIndex = 1;

let clickNum = 1;
let number = 0;

let images = [
'images/image-product-1-thumbnail.jpg' , 
'images/image-product-2-thumbnail.jpg',
'images/image-product-3-thumbnail.jpg',
'images/image-product-4-thumbnail.jpg'
]
cartIcon.addEventListener('click' , () => {
    cartContainer.classList.toggle('opened');
    overlay.classList.toggle('open');
});

overlay.addEventListener('click' , () => {
    cartContainer.classList.remove('opened');
    overlay.classList.remove('open');
})
cartContainer.addEventListener('click' , (e) => {
e.stopPropagation();
});

let thumbImages = document.querySelectorAll('.thumb-image');

thumbImages.forEach(image => {
    image.addEventListener('click' , (e) => {
        thumbImages.forEach(item => {
            item.classList.remove('active');
        });
        clickNum = e.currentTarget.dataset.content;
        e.currentTarget.classList.add('active');
    });
});

function changeImage(img){

    productImage.src = img.src.replace('-thumbnail' , '');
}



quantity.innerHTML = number;



increaseBtn.addEventListener('click' , () => {

    number ++;
    quantity.innerHTML = number;
});

decreaseBtn.addEventListener('click' , (e) => {
    
        if(number <= 0){
            return;
        }
      
        else {

            number --;
            quantity.innerHTML = number;
        }


});

if(number == 0 ){
    productInCart.innerHTML = 'Your cart is empty.'
    
}

addBtn.addEventListener('click' , () => {
    if(number <= 0) {
        return;
    }
    const mainPrice = 125.00;

    productInCart.innerHTML =
    `
    <div class="product">
    <img src="images/image-product-1-thumbnail.jpg">
    <div
    style="display :flex;
    flex-direction : column;
    align-items : flex-start;
    "
    >
    <p class="name">fall limited edition sneakers</p>
    <span class="price">
    $${mainPrice}.00 x ${number}  <strong>$${mainPrice * number}.00</strong>
    </span>
    </div>
    <img class="delete-icon" src="images/icon-delete.svg">

    </div>
    <button class="checkOutBtn">Checkout</button>
    `

    let deleteIcon = document.querySelector('.delete-icon');





    cartItems.classList.add('haveItems');
    cartItems.innerHTML = number;

    
    
    deleteIcon?.addEventListener('click' , () => {
        productInCart.innerHTML = 'Your cart is empty.'
        cartItems.classList.remove('haveItems');
        
    })
});



drawerToggler.addEventListener('click' , () => {
    console.log('asd');
    drawer.classList.add('open');
    drawerOverlay.classList.add('open');
    document.body.style.overflowY = "hidden"
});

drawerClose.addEventListener('click' , () => {
    drawer.classList.remove('open');
    drawerOverlay.classList.remove('open');

});

drawerOverlay.addEventListener('click' , () =>{
    drawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
})



function showSlides(n) {
    let i;

    let slides = document.getElementsByClassName('slides');
    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

function plusSlides(n){
    showSlides(slideIndex +=n);
}

showSlides(slideIndex);