document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.addtocart');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const productName = this.getAttribute('data-product-name');
            const productPrice = this.getAttribute('data-product-price');
            const quantityInput = document.getElementById(`${productId}-quantity`);
            const quantity = quantityInput.value;

            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                quantity: quantity
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Product added to cart!');
        });
    });
});