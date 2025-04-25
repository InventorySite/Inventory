
function getBorrowedCount(itemName) {
  return (transactions || []).filter(tran =>
    tran.item === itemName && tran.status === "Borrowed"
  ).reduce((sum, tran) => sum + Number(tran.quantity || 0), 0);
}

const items = [
    { name: "Item 1", quantity: 50 },
    { name: "Item 2", quantity: 30 },
    { name: "Item 3", quantity: 100 }
];

function displayItems() {
    const container = document.getElementById('items-container');
    container.innerHTML = '';

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Quantity: ${item.quantity}</p>
        `;
        container.appendChild(itemDiv);
    });
}

window.onload = displayItems;
