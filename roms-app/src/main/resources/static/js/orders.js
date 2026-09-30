const ORDERS_API = 'http://localhost:8081/api/orders';
const MENU_API = 'http://localhost:8081/api/menu-items';

// DOM Elements
const ordersTableBody = document.getElementById('ordersTableBody');
const orderModal = document.getElementById('orderModal');
const orderItemsContainer = document.getElementById('orderItemsContainer');

// State
let currentStatusFilter = '';
let menuItems = [];

// Load on startup
document.addEventListener('DOMContentLoaded', () => {
    fetchMenuItems();
    fetchOrders();
});

// Fetch available menu items for dropdown
async function fetchMenuItems() {
    try {
        const response = await fetch(MENU_API);
        if (!response.ok) throw new Error('Failed to fetch menu');
        menuItems = await response.json();
    } catch (error) {
        console.error('Error fetching menu:', error);
    }
}

// Fetch orders
async function fetchOrders() {
    try {
        let url = ORDERS_API;
        const params = [];

        if (currentStatusFilter) {
            params.push(`status=${currentStatusFilter}`);
        }
        const tableNum = document.getElementById('tableFilter').value;
        if (tableNum) {
            params.push(`tableNumber=${tableNum}`);
        }
        if (params.length > 0) {
            url += '?' + params.join('&');
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch orders');

        const orders = await response.json();
        renderOrders(orders);
        updateStats(orders);
    } catch (error) {
        console.error('Error:', error);
        ordersTableBody.innerHTML = `<tr><td colspan="7" class="empty-state"><div class="empty-icon">⚠️</div><p>Error loading orders. Ensure backend is running.</p></td></tr>`;
    }
}

// Update stat cards
function updateStats(filteredOrders) {
    // Fetch all orders for accurate stats
    fetch(ORDERS_API)
        .then(r => r.json())
        .then(all => {
            document.getElementById('stat-placed').textContent = all.filter(o => o.status === 'PLACED').length;
            document.getElementById('stat-preparing').textContent = all.filter(o => o.status === 'PREPARING').length;
            document.getElementById('stat-ready').textContent = all.filter(o => o.status === 'READY').length;
            document.getElementById('stat-served').textContent = all.filter(o => o.status === 'SERVED' || o.status === 'CLOSED').length;
        })
        .catch(() => {});
}

// Render orders table
function renderOrders(orders) {
    if (orders.length === 0) {
        ordersTableBody.innerHTML = `<tr><td colspan="7" class="empty-state"><div class="empty-icon">📋</div><p>No orders found. Create your first order!</p></td></tr>`;
        return;
    }

    ordersTableBody.innerHTML = orders.map(order => {
        const itemsSummary = order.items
            ? order.items.map(i => `${i.menuItem ? i.menuItem.name : 'Item'} ×${i.quantity}`).join(', ')
            : '—';

        const nextStatus = getNextStatus(order.status);
        const timeStr = new Date(order.createdAt).toLocaleString('en-IN', {
            day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
        });

        return `
            <tr>
                <td class="text-mono" style="font-weight: 700;">#${order.id}</td>
                <td style="font-weight: 600;">Table ${order.tableNumber}</td>
                <td style="font-size: 0.85rem; color: var(--text-secondary); max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${itemsSummary}</td>
                <td class="text-mono" style="font-weight: 600;">₹${parseFloat(order.totalAmount).toFixed(2)}</td>
                <td><span class="status-badge status-${order.status.toLowerCase()}">${order.status}</span></td>
                <td style="font-size: 0.82rem; color: var(--text-muted);">${timeStr}</td>
                <td>
                    <div class="actions-cell">
                        ${nextStatus ? `<button class="btn btn-success btn-sm" onclick="advanceStatus(${order.id}, '${nextStatus}')">${nextStatus}</button>` : ''}
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Get next valid status
function getNextStatus(current) {
    const flow = ['PLACED', 'PREPARING', 'READY', 'SERVED', 'CLOSED'];
    const idx = flow.indexOf(current);
    return idx >= 0 && idx < flow.length - 1 ? flow[idx + 1] : null;
}

// Advance order status
async function advanceStatus(orderId, newStatus) {
    try {
        const response = await fetch(`${ORDERS_API}/${orderId}/status`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus })
        });
        if (!response.ok) {
            const err = await response.text();
            throw new Error(err);
        }
        fetchOrders();
    } catch (error) {
        console.error('Error advancing status:', error);
        alert('Failed to update order status.');
    }
}

// Status filter
function setStatusFilter(status, btn) {
    currentStatusFilter = status;
    document.querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tableFilter').value = '';
    fetchOrders();
}

// ── New Order Modal ──────────────────────────────────────────

function openNewOrderModal() {
    document.getElementById('orderForm').reset();
    orderItemsContainer.innerHTML = '';
    addItemRow(); // Start with one row
    orderModal.classList.add('show');
}

function closeOrderModal() {
    orderModal.classList.remove('show');
}

// Dynamically add an item row to the order form
function addItemRow() {
    const row = document.createElement('div');
    row.className = 'order-item-row';

    const availableItems = menuItems.filter(i => i.available);
    let options = availableItems.map(i => `<option value="${i.id}">${i.name} — ₹${parseFloat(i.price).toFixed(2)}</option>`).join('');

    if (options === '') {
        options = '<option value="" disabled selected>No items available. Please add to menu first.</option>';
    }

    row.innerHTML = `
        <select class="form-select order-menu-item" required>${options}</select>
        <input type="number" class="form-input order-qty" required min="1" value="1" placeholder="Qty">
        <button type="button" class="btn btn-danger btn-sm" onclick="this.parentElement.remove()" style="flex-shrink: 0;">✕</button>
    `;
    orderItemsContainer.appendChild(row);
}

// Create order
async function createOrder(event) {
    event.preventDefault();

    const tableNumber = parseInt(document.getElementById('tableNumber').value);
    const rows = document.querySelectorAll('.order-item-row');
    const items = [];

    rows.forEach(row => {
        const menuItemId = parseInt(row.querySelector('.order-menu-item').value);
        const quantity = parseInt(row.querySelector('.order-qty').value);
        if (menuItemId && quantity > 0) {
            items.push({ menuItemId, quantity });
        }
    });

    if (items.length === 0) {
        alert('Please add at least one item to the order.');
        return;
    }

    try {
        const response = await fetch(ORDERS_API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tableNumber, items })
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(err);
        }

        closeOrderModal();
        fetchOrders();
    } catch (error) {
        console.error('Error creating order:', error);
        alert('Failed to create order: ' + error.message);
    }
}
