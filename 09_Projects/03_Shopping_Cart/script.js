document.addEventListener("DOMContentLoaded", () => {
  let productList = document.getElementById("product-list");
  let cartItems = document.getElementById("cart-items");
  let emptyCart = document.getElementById("empty-cart");
  let cartTotal = document.getElementById("cart-total");
  let totalPrice = document.getElementById("total-price");
  let checkoutBtn = document.getElementById("checkout-btn");

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 400,
    },
    {
      id: 3,
      name: "Product 3",
      price: 499,
    },
  ];

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  renderCart();
  console.log(cart);

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} -$${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      // console.log("clicked");
      let productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((product) => product.id === productId);
      console.log(product);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    saveCart();
    renderCart();
  }

  function renderCart() {
    cartItems.innerHTML = "";
    let calulatePrice = 0;
    if (cart.length > 0) {
      emptyCart.classList.add("hidden");
      cartTotal.classList.remove("hidden");
      cart.forEach((product, id) => {
        calulatePrice += product.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
        ${product.name} -$${product.price}
        <button data-id="${product.id}">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        totalPrice.innerHTML = `$${calulatePrice}`;
      });
    } else {
      cartItems.innerHTML = `<p id="empty-cart">Your cart is empty.</p>`;
      cartTotal.classList.add("hidden");
    }
  }

  cartItems.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let cartId = parseInt(e.target.getAttribute("data-id"));
      const updatedCart = cart.filter((product) => product.id !== cartId);
      // console.log(updatedCart);
      cart = [...updatedCart];
      // console.log(cart);
      saveCart();
      renderCart();
    }
  });

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    cart = [];
    alert("Checkout successfully");
    totalPrice.textContent = "$0.00";
    saveCart();
    renderCart();
  });

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});
