
const officeResources = JSON.parse(localStorage.getItem('officeResources') || '[]');

function displayOfficeResources() {
    const container = document.getElementById('office-container');
    container.innerHTML = '';

    if (officeResources.length === 0) {
        container.innerHTML = "<p>No office resources listed.</p>";
        return;
    }

    officeResources.forEach(resource => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            <h3>${resource.name}</h3>
            <p class="available"><strong>Quantity:</strong> ${resource.quantity}</p>
        `;
        container.appendChild(div);
    });
}


const items = JSON.parse(localStorage.getItem('inventory') || '[]');
const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');

function displayItems() {
    console.log("Items loaded:", items);
    console.log("Office resources loaded:", officeResources);
    const container = document.getElementById('items-container');
    container.innerHTML = '';

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p class="available"><strong>Available:</strong> ${item.available}</p>
            <p class="borrowed"><strong>Borrowed:</strong> ${item.borrowed}</p>
        `;
        container.appendChild(itemDiv);
    });
}

function displayTransactions() {
    const container = document.getElementById('transaction-container');
    container.innerHTML = '';

    if (transactions.length === 0) {
        container.innerHTML = "<p>No borrow history available.</p>";
        return;
    }

    const header = document.createElement('h2');
    header.textContent = "Borrow History";
    header.style.textAlign = "center";
    header.style.color = "#FF4136";
    container.appendChild(header);

    transactions.forEach(tran => {
        const div = document.createElement('div');
        div.className = 'item';
        div.innerHTML = `
            <p><strong>${tran.name}</strong> borrowed <strong>${tran.quantity}</strong> of <strong>${tran.item}</strong></p>
            <p>Status: <span class="${tran.status === 'Returned' ? 'available' : 'borrowed'}">${tran.status}</span></p>
            <p>Date Borrowed: ${tran.dateBorrowed || 'N/A'}</p>
            <p>Date Returned: ${tran.dateReturned || 'N/A'}</p>
        `;
        container.appendChild(div);
    });
}

window.onload = function () {
    displayOfficeResources();
    displayItems();
    displayTransactions();
};
