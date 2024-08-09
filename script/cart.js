document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    let totalPrice = 0;

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
        `;
        cartItemsContainer.appendChild(row);
        totalPrice += item.price * item.quantity;
    });

    totalPrice = totalPrice.toFixed(2); // Format total price to 2 decimal places

    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <td colspan="2">Total</td>
        <td>${totalPrice}</td>
    `;
    cartItemsContainer.appendChild(totalRow);

    document.getElementById('addToFavoritesButton').addEventListener('click', addToFavorites);
    document.getElementById('applyFavoritesButton').addEventListener('click', applyFavorites);
    document.getElementById('clearCartButton').addEventListener('click', clearCart);

    function addToFavorites() {
        localStorage.setItem('favorites', JSON.stringify(cartItems));
        alert('Cart items added to favorites!');
    }

    function applyFavorites() {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        localStorage.setItem('cart', JSON.stringify(favorites));
        location.reload();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        location.reload();
    }
});