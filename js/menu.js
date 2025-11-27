async function fetchFoodData() {
    try {
        const response = await fetch("js/foods.json");
        const data = await response.json();

        renderCategories(data.categories);

        const firstCategory = Object.keys(data.categories)[0];
        console.log(firstCategory);

        renderMenuItems(data.categories[firstCategory], firstCategory);

        setupCategorySwitching(data.categories);

        // document.querySelector(".menu-category").classList.add("active");
    } catch (error) {
        console.log(error);
    }
}

function renderCategories(categories) {
    const categoriesContainer = document.querySelector(".menu-categories");
    categoriesContainer.innerHTML = "";

    Object.keys(categories).forEach((categoryName, index) => {
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("menu-category");

        if (index === 0) {
            categoryElement.classList.add("active");
        }

        categoryElement.innerHTML = `
      <img width="200px" src="img/pasta.svg" alt="${categoryName}" />
      <div class="menu-category-info">
          <h3 class="menu-category-title">${categoryName}</h3>
          <p class="text-gray">${categories[categoryName].length} items in stock</p>
      </div>
    `;

        categoriesContainer.appendChild(categoryElement);
    });
}

function renderMenuItems(items, categoryName) {
    const menuItemsContainer = document.querySelector(".menu-items");
    const categoryTitleElement = document.querySelector(".primary-title");

    categoryTitleElement.textContent = `${categoryName} Menu`;

    menuItemsContainer.innerHTML = "";

    items.forEach((item) => {
        const menuItemElement = document.createElement("div");
        menuItemElement.classList.add("menu-item");

        menuItemElement.innerHTML = `
        <div class="menu-item-header">
                            <img
                                width="200px"
                                src="${item.image}"
                                alt="${item.name}"
                                class="menu-item-img"
                            />
                            <div class="menu-item-title">
                                <h3>${item.name}</h3>
                                <p class="text-gray menu-item-desc">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>

                        <div class="menu-item-footer">
                            <h3 class="menu-item-price"><span>$</span>${item.price.toFixed(
                                2
                            )}</h3>
                            <button class="menu-item-button" data-name="${
                                item.name
                            }" data-image="${item.image}" data-price="${
            item.price
        }">
                                Add to cart
                            </button>
                        </div>
      `;

        menuItemsContainer.appendChild(menuItemElement);
    });

    document.querySelectorAll(".menu-item-button").forEach((button) => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const image = button.getAttribute("data-image");
            const price = button.getAttribute("data-price");
            addToCart({ name, price, image });
        });
    });
}

function addToCart(selectedFood) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItemIndex = cart.findIndex(
        (item) => item.name === selectedFood.name
    );

    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({
            name: selectedFood.name,
            price: selectedFood.price,
            image: selectedFood.image,
            quantity: 1,
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartBadge();
    renderInvoice();

    Toastify({
        text: `${selectedFood.name} added to the cart!`,
        duration: 3000,
        close: true,
        gravity: "bottom",
        position: "center",
        style: {
            background: "#ff7a00",
        },
        stopOnFocus: true,
    }).showToast();
}

function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalUniqueItems = cart.length;

    document.getElementById("cart-badge").textContent = totalUniqueItems;
}

function setupCategorySwitching(categories) {
    const categoryElements = document.querySelectorAll(".menu-category");

    categoryElements.forEach((categoryElement) => {
        categoryElement.addEventListener("click", () => {
            const selectCategoryName = categoryElement.querySelector(
                ".menu-category-title"
            ).textContent;

            categoryElements.forEach((element) => {
                element.classList.remove("active");
            });

            categoryElement.classList.add("active");

            renderMenuItems(categories[selectCategoryName], selectCategoryName);
        });
    });
}

function renderInvoice() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const invoiceItemsContainer = document.querySelector(".invoice-items");
    const paymentSummaryContainer = document.querySelector(".payment-summary");

    invoiceItemsContainer.innerHTML = "<h2>Invoice</h2>";

    let subTotal = 0;

    cart.forEach((item, index) => {
        const itemTotalPrice = item.price * item.quantity;
        subTotal += itemTotalPrice;

        const invoiceItemElement = document.createElement("div");
        invoiceItemElement.classList.add("invoice-item");
        invoiceItemElement.innerHTML = `
        <img
            src="${item.image}"
            alt="${item.name}"
            width="200px"
            class="invoice-item-img"
        />

        <div class="invoice-item-details">
            <h3>${item.name}</h3>
            <div class="invoice-item-quantity">
                <button class="quantity-btn decrease" data-index="${index}">-</button>
                <input
                    type="text"
                    class="quantity-input"
                    value="${item.quantity}"
                />
                <button class="quantity-btn increase" data-index="${index}">+</button>
            </div>
        </div>

        <div class="invoice-item-price">
            <h3>$ ${itemTotalPrice.toFixed(2)}</h3>
        </div>
        `;

        invoiceItemsContainer.appendChild(invoiceItemElement);
    });

    const tax = subTotal * 0.04;
    const totalPayment = subTotal + tax;

    paymentSummaryContainer.innerHTML = `
        <h3>Payment Summary</h3>
        <div class="summary-details">
            <p class="text-gray">Sub Total</p>
            <p>$${subTotal.toFixed(2)}</p>
        </div>
        <div class="summary-details">
            <p class="text-gray">Tax</p>
            <p>$${tax.toFixed(2)}</p>
        </div>
        <div class="summary-total">
            <p class="text-gray">Total Payment</p>
            <p>$${totalPayment.toFixed(2)}</p>
        </div>
        <button class="pay-button">Pay $${totalPayment.toFixed(2)}</button>
    `;

    const increaseButton = document.querySelectorAll(".quantity-btn.increase");
    const decreaseButton = document.querySelectorAll(".quantity-btn.decrease");

    increaseButton.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            updateCartQuantity(index, 1);
        });
    });

    decreaseButton.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const index = event.target.dataset.index;
            updateCartQuantity(index, -1);
        });
    });

    document.querySelector(".pay-button").addEventListener("click", () => {
        document.getElementById("payment-modal").style.display = "flex";
    });
}

function updateCartQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart[index];

    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            cart.splice(index, 1);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    renderInvoice();
    updateCartBadge();
}

document.addEventListener("DOMContentLoaded", () => {
    fetchFoodData();
    updateCartBadge();
    renderInvoice();
});
