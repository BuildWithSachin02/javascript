function loadCart() {
  let cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}
const cartContainer = document.getElementById("cart-items");

function showCartItems() {
  const cart = loadCart();

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>Price: $${item.price}</p>
    `;

    cartContainer.appendChild(div);
  });
}

showCartItems();
