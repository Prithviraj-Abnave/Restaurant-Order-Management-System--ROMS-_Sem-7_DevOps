const API_BASE_URL = 'http://localhost:8081/api/menu-items';

// DOM Elements
const menuTableBody = document.getElementById('menuTableBody');
const itemModal = document.getElementById('itemModal');
const itemForm = document.getElementById('itemForm');
const modalTitle = document.getElementById('modalTitle');
const searchInput = document.getElementById('searchInput');

// State
let currentCategory = '';
let allItems = [];

// Load items on startup
document.addEventListener('DOMContentLoaded', fetchItems);

// Fetch items from the API
async function fetchItems() {
    try {
        let url = API_BASE_URL;
        const search = searchInput.value.trim();

        if (search) {
            url += `?search=${encodeURIComponent(search)}`;
        } else if (currentCategory) {
            url += `?category=${encodeURIComponent(currentCategory)}`;
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch items');

        const items = await response.json();
        allItems = items;
        renderTable(items);
        updateStats(items);
    } catch (error) {
        console.error('Error:', error);
        menuTableBody.innerHTML = `<tr><td colspan="5" class="empty-state"><div class="empty-icon">⚠️</div><p>Error loading data. Please ensure the backend is running on port 8081.</p></td></tr>`;
    }
}

// Update stat cards
function updateStats(items) {
    // Fetch all items (unfiltered) for accurate stats
    fetch(API_BASE_URL)
        .then(r => r.json())
        .then(all => {
            document.getElementById('stat-total').textContent = all.length;
            document.getElementById('stat-available').textContent = all.filter(i => i.available).length;
            document.getElementById('stat-unavailable').textContent = all.filter(i => !i.available).length;

            const cats = new Set(all.map(i => i.category));
            document.getElementById('stat-categories').textContent = cats.size || '0';
        })
        .catch(() => {});
}

// Render items in the table
function renderTable(items) {
    if (items.length === 0) {
        menuTableBody.innerHTML = `<tr><td colspan="5" class="empty-state"><div class="empty-icon">🍽️</div><p>No items found. Add your first menu item!</p></td></tr>`;
        return;
    }

    menuTableBody.innerHTML = items.map(item => `
        <tr>
            <td style="font-weight: 600;">${item.name}</td>
            <td>
                <span class="status-badge" style="background: var(--bg-subtle); color: var(--text-secondary);">
                    ${formatCategory(item.category)}
                </span>
            </td>
            <td class="text-mono" style="font-weight: 600;">₹${parseFloat(item.price).toFixed(2)}</td>
            <td>
                <span class="status-badge ${item.available ? 'status-available' : 'status-unavailable'}">
                    ${item.available ? 'Available' : 'Out of Stock'}
                </span>
            </td>
            <td>
                <div class="actions-cell">
                    <button class="btn btn-outline btn-sm" onclick='editItem(${JSON.stringify(item).replace(/'/g, "&#39;")})'>Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteItem(${item.id})">Delete</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Category filter via tab pills
function setCategory(category, btn) {
    currentCategory = category;

    // Update active pill
    document.querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');

    // Clear search when switching categories
    searchInput.value = '';
    fetchItems();
}

// Search filter (debounced)
function filterItems() {
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(itemData)
        });

        if (!response.ok) throw new Error('Failed to save item');

        closeModal();
        fetchItems();
    } catch (error) {
        console.error('Error saving item:', error);
        alert('Failed to save item. See console for details.');
    }
}

// Delete item (soft delete)
async function deleteItem(id) {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
        const response = await fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Failed to delete item');
        fetchItems();
    } catch (error) {
        console.error('Error deleting item:', error);
        alert('Failed to delete item.');
    }
}

// Helper formatting
function formatCategory(category) {
    return category.split('_').map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(' ');
}
