const API_BASE_URL = 'http://localhost:8081/api/menu-items';

// DOM Elements
const menuTableBody = document.getElementById('menuTableBody');
const itemModal = document.getElementById('itemModal');
const itemForm = document.getElementById('itemForm');
const modalTitle = document.getElementById('modalTitle');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

// Load items on startup
document.addEventListener('DOMContentLoaded', fetchItems);

// Fetch items from the API
async function fetchItems() {
    try {
        let url = API_BASE_URL;
        const search = searchInput.value.trim();
        const category = categoryFilter.value;

        if (search) {
            url += `?search=${encodeURIComponent(search)}`;
        } else if (category) {
            url += `?category=${encodeURIComponent(category)}`;
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch items');
        
        const items = await response.json();
        renderTable(items);
    } catch (error) {
        console.error('Error:', error);
        // Show empty state or error message
        menuTableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 20px;">Error loading data. Please ensure the backend is running.</td></tr>`;
    }
}

// Render items in the table
function renderTable(items) {
    if (items.length === 0) {
        menuTableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 20px;">No items found.</td></tr>`;
        return;
    }

    menuTableBody.innerHTML = items.map(item => `
        <tr>
            <td style="font-weight: 500;">${item.name}</td>
            <td>
                <span class="badge" style="background-color: #f3f4f6; color: #374151;">
                    ${formatCategory(item.category)}
                </span>
            </td>
            <td>₹${parseFloat(item.price).toFixed(2)}</td>
            <td>
                <span class="badge ${item.available ? 'badge-success' : 'badge-danger'}">
                    ${item.available ? 'Available' : 'Out of Stock'}
                </span>
            </td>
            <td>
                <button class="btn btn-secondary" style="padding: 6px 12px; margin-right: 8px;" onclick='editItem(${JSON.stringify(item).replace(/'/g, "&#39;")})'>Edit</button>
                <button class="btn btn-danger" onclick="deleteItem(${item.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

// Filter triggers
function filterItems() {
    // Basic debounce
    clearTimeout(window.filterTimeout);
    window.filterTimeout = setTimeout(fetchItems, 300);
}

// Modal functions
function openModal() {
    itemForm.reset();
    document.getElementById('itemId').value = '';
    modalTitle.textContent = 'Add Menu Item';
    itemModal.classList.add('show');
}

function closeModal() {
    itemModal.classList.remove('show');
}

function editItem(item) {
    document.getElementById('itemId').value = item.id;
    document.getElementById('itemName').value = item.name;
    document.getElementById('itemCategory').value = item.category;
    document.getElementById('itemPrice').value = item.price;
    document.getElementById('itemAvailable').checked = item.available;
    
    modalTitle.textContent = 'Edit Menu Item';
    itemModal.classList.add('show');
}

// Save or Update item
async function saveItem(event) {
    event.preventDefault();
    
    const id = document.getElementById('itemId').value;
    const itemData = {
        name: document.getElementById('itemName').value,
        category: document.getElementById('itemCategory').value,
        price: parseFloat(document.getElementById('itemPrice').value),
        available: document.getElementById('itemAvailable').checked
    };

    try {
        const url = id ? `${API_BASE_URL}/${id}` : API_BASE_URL;
        const method = id ? 'PUT' : 'POST';

        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemData)
        });

        if (!response.ok) throw new Error('Failed to save item');
        
        closeModal();
        fetchItems(); // Refresh table
    } catch (error) {
        console.error('Error saving item:', error);
        alert('Failed to save item. See console for details.');
    }
}

// Delete item (soft delete)
async function deleteItem(id) {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Failed to delete item');
        
        fetchItems(); // Refresh table
    } catch (error) {
        console.error('Error deleting item:', error);
        alert('Failed to delete item.');
    }
}

// Helper formatting
function formatCategory(category) {
    return category.split('_').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ');
}
