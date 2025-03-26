function loadInventory() {
    fetch('php/inventory.php')
        .then(response => response.json())
        .then(data => {
            let inventoryList = document.getElementById('inventory-list');
            inventoryList.innerHTML = '';
            data.forEach(item => {
                inventoryList.innerHTML += `<div class="inventory-item">${item.name}: ${item.quantity}</div>`;
            });
        })
        .catch(error => console.error('Error:', error));
}