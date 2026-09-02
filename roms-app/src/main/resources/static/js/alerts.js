const ALERTS_API = 'http://localhost:8081/api/alerts';

// State
let currentFilter = 'active';

// Load on startup
document.addEventListener('DOMContentLoaded', fetchAlerts);

// Fetch alerts
async function fetchAlerts() {
    try {
        const endpoint = currentFilter === 'active' ? ALERTS_API : `${ALERTS_API}/all`;
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error('Failed to fetch alerts');

        const alerts = await response.json();
        renderAlerts(alerts);
        updateStats();
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('alertsList').innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">⚠️</div>
                <p>Error loading alerts. Ensure backend is running.</p>
            </div>`;
    }
}

// Update stat cards
async function updateStats() {
    try {
        const allResponse = await fetch(`${ALERTS_API}/all`);
        const all = await allResponse.json();

        const active = all.filter(a => !a.resolved);
        const oos = active.filter(a => a.type === 'OUT_OF_STOCK');
        const stale = active.filter(a => a.type === 'STALE_ORDER');

        document.getElementById('stat-active').textContent = active.length;
        document.getElementById('stat-oos').textContent = oos.length;
        document.getElementById('stat-stale').textContent = stale.length;

        // Update nav badge
        const badge = document.getElementById('navAlertBadge');
        if (badge) {
            if (active.length > 0) {
                badge.textContent = active.length;
                badge.style.display = 'inline';
            } else {
                badge.style.display = 'none';
            }
        }
    } catch (error) {
        console.error('Error updating stats:', error);
    }
}

// Render alerts as styled boxes
function renderAlerts(alerts) {
    const container = document.getElementById('alertsList');

    if (alerts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">✅</div>
                <p>No alerts to display. All operations are running smoothly!</p>
            </div>`;
        return;
    }

    container.innerHTML = alerts.map(alert => {
        const isOOS = alert.type === 'OUT_OF_STOCK';
        const typeLabel = isOOS ? 'OUT OF STOCK' : 'STALE ORDER';
        const boxClass = isOOS ? 'alert-danger' : '';
        const timeStr = new Date(alert.createdAt).toLocaleString('en-IN', {
            day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
        });
        const resolved = alert.resolved;

        return `
            <div class="alert-box ${boxClass}" style="${resolved ? 'opacity: 0.5;' : ''}">
                <div>
                    <div class="alert-type">${typeLabel}</div>
                    <div class="alert-message">${alert.message}</div>
                    <div class="alert-time">${timeStr}${alert.orderId ? ' · Order #' + alert.orderId : ''}${resolved ? ' · Resolved ✓' : ''}</div>
                </div>
                ${!resolved ? `<button class="btn btn-outline btn-sm" onclick="resolveAlert(${alert.id})">Resolve</button>` : ''}
            </div>
        `;
    }).join('');
}

// Resolve an alert
async function resolveAlert(id) {
    try {
        const response = await fetch(`${ALERTS_API}/${id}/resolve`, { method: 'PATCH' });
        if (!response.ok) throw new Error('Failed to resolve');
        fetchAlerts();
    } catch (error) {
        console.error('Error resolving alert:', error);
        alert('Failed to resolve alert.');
    }
}

// Filter toggle
function setAlertFilter(filter, btn) {
    currentFilter = filter;
    document.querySelectorAll('.tab-pill').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    fetchAlerts();
}
