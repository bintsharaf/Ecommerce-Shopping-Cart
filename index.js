//Cart will store all items
let cart = [];
//Add or update an item in cart
function addItem() {
    const name = document.querySelector("#name").value.trim();
    const quantity = Number(document.querySelector("#quantity").value);
    const price = Number(document.querySelector("#price").value);
    //Basic validation
    if (!name || quantity <= 0 || price <=0) {
        alert ("Please enter a valid item details");
        return;
    }
    //Check if item already exists 
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: Date.now(), 
            name,
            quantity,
            price
        });
    }
    wipeOffInputs();
    displayCartItems();
}
//Remove item from cart
function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    displayCartItems();
}
//Display the items on the cart with their sum up (total)
function displayCartItems() {
    const cartList = document.querySelector("#cart");
    const TotalAmount = document.querySelector("#total");
    cartList.innerHTML = "";
    let cartTotal = 0;
    cart.forEach(item => {
        const itemTotal = item.quantity * item.price;
        cartTotal += itemTotal;
        const li = document.createElement("li");
        li.textContent = `${item.name} | Qty: ${item.quantity} | ₦${itemTotal}`;
        const btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.onclick = () => removeItem(item.id);
        li.appendChild(btn);
        cartList.appendChild(li);
    });
    TotalAmount.textContent = `Total: ₦${cartTotal}`;
}
//Clear input fields after adding item
function wipeOffInputs() {
    document.querySelector("#name").value = "";
    document.querySelector("#quantity").value = "";
    document.querySelector("#price").value = "";
}