let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

const removeButtons = document.querySelectorAll('.remove-item');

removeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const cartItem = button.closest('.cart-item');

        cartItem.remove();
    });
});


const addToCartButtons = document.querySelectorAll('.add-to-cart');

const cartItemsContainer = document.querySelector('.cart-items-container');

const totalPriceElement = document.getElementById('total-price');

let totalPrice = 0;

function updateTotalPrice() {
    totalPriceElement.textContent = `R$${totalPrice.toFixed(2)}`;
}

addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        const productName = this.dataset.name;
        const productPrice = parseFloat(this.dataset.price);
        const productImage = this.dataset.image;

        const sizeSelect = this.closest('.box').querySelector('.size-select');
        const selectedSize = sizeSelect ? sizeSelect.value : 'Não selecionado';

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span class="fas fa-times remove-item"></span>
            <img src="${productImage}" alt="${productName}">
            <div class="content">
                <h3>${productName}</h3>
                <div class="size">Tamanho: ${selectedSize}</div> <!-- Exibir o tamanho selecionado -->
                <div class="price">R$${productPrice.toFixed(2)}</div>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);

        totalPrice += productPrice;
        updateTotalPrice();

        cartItem.querySelector('.remove-item').addEventListener('click', function() {
            cartItemsContainer.removeChild(cartItem);

            totalPrice -= productPrice;

            updateTotalPrice();
        });
    });
});

let tamanhoFonte = 16;

function aumentarFonte() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
    if (tamanhoFonte > 10) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
}

function modoDaltonico() {
    document.body.classList.toggle("daltonico");
}


function modoSurdo() {
    const aviso = document.getElementById("mensagem-surdo");

    if(aviso.style.display === "none"){
        aviso.style.display = "block";
    } else {
        aviso.style.display = "none";
    }
}

function modoIdoso() {
    document.body.classList.toggle("idoso");
}
function modoIdoso() {
    document.body.classList.toggle("idoso");
}

const lupa = document.getElementById("lupa");

document.addEventListener("mousemove", (e) => {

    if(document.body.classList.contains("idoso")){

        lupa.style.left = (e.clientX + 20) + "px";
        lupa.style.top = (e.clientY + 20) + "px";

        const elemento = document.elementFromPoint(
            e.clientX,
            e.clientY
        );

        if(elemento){
            lupa.innerText =
                elemento.innerText.substring(0, 20);
        }
    }
});