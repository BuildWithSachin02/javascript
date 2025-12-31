const products_container = document.getElementById("products");



const Createproducts = (products)=>{
    products.forEach((product)=>{
        const items = document.createElement("div");
        items.classList.add("product-card");
        items.innerHTML = 
        `
      <img src="${product.thumbnail}" alt="${product.title}">

      <div class="product-info">
        <h3>${product.title}</h3>
        <p class="brand">${product.brand}</p>

        <div class="price-row">
          <span class="price">$ ${product.price}</span>
          <span class="rating">Rating: ${product.rating }</span>
        </div>

        <button onclick = "addToCart()" >Add to Cart</button>
      </div>
        `
        products_container.appendChild(items);
    });
};

const fetchProducts = ()=>{
     fetch("https://dummyjson.com/products")
    .then((res)=>{
        if(!res.ok){
            throw new Error("API response not ok");
        }
        return res.json();
    })
    .then((data)=>{
        Createproducts(data.products);
    })
    .catch((error)=>{
        console.log("Error Fetching products:", error);
        products_container.innerHTML = 
            `
                <p style = "color:red; text-align:center;">
                    X products load nhi ho paaye. please try again.
                </p>
            `;
    });
};
const getCart = (product)=>{
    let cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart):[];
};
function addToCart(product){
    let cart = getCart();
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Product add to cart!");
}
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-cart-btn")) {
    const product = {
      id: 1,
      title: "iPhone 15",
      price: 999,
      thumbnail: "image-url"
    };

    addToCart(product);
  }
});



fetchProducts();
