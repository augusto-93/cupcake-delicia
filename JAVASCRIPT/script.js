document.addEventListener('DOMContentLoaded', function() {
    let cart = [];
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    function updateCart() {
        cartCountElement.innerText = cart.length;
        cartItemsElement.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerText = `${item.name} - R$ ${item.price}`;
            cartItemsElement.appendChild(itemElement);
            total += item.price;
        });

        totalPriceElement.innerText = total.toFixed(2);
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            cart.push({ name, price });
            updateCart();
        });
    });

    // Smooth scroll to menu
    window.scrollToMenu = function() {
        document.querySelector("#menu").scrollIntoView({
            behavior: "smooth"
        });
    };

    // Form validation and feedback
    const form = document.getElementById('contato-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const feedback = document.getElementById('form-feedback');
        feedback.innerText = 'Mensagem enviada com sucesso!';
        feedback.style.display = 'block';
        form.reset();
    });

    // Checkout button (alert for now)
    const checkoutButton = document.getElementById('checkout-btn');
    checkoutButton.addEventListener('click', function() {
        if (cart.length > 0) {
            alert(`Compra finalizada! Total: R$ ${totalPriceElement.innerText}`);
            cart = [];
            updateCart();
        } else {
            alert('Seu carrinho está vazio.');
        }
    });
});
