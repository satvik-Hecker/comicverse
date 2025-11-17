/**
 * ComicVerse Hub - Custom Notification System
 * 
 * This file provides custom alert, confirm, and toast notification modals
 * to replace default JavaScript alerts and confirms.
 */

/**
 * Create notification modal HTML if it doesn't exist
 */
function initNotificationSystem() {
    if (!document.getElementById('notification-overlay')) {
        const notificationHTML = `
            <div class="notification-overlay" id="notification-overlay">
                <div class="notification-modal" id="notification-modal">
                    <div class="notification-header">
                        <h3 class="notification-title" id="notification-title"></h3>
                        <button class="notification-close" id="notification-close" aria-label="Close">×</button>
                    </div>
                    <div class="notification-body">
                        <p class="notification-message" id="notification-message"></p>
                    </div>
                    <div class="notification-footer" id="notification-footer">
                        <!-- Buttons will be dynamically inserted here -->
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', notificationHTML);
        setupNotificationEvents();
    }
}

/**
 * Setup notification event listeners
 */
function setupNotificationEvents() {
    const overlay = document.getElementById('notification-overlay');
    const closeBtn = document.getElementById('notification-close');
    
    if (overlay && closeBtn) {
        closeBtn.addEventListener('click', closeNotification);
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeNotification();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('active')) {
                closeNotification();
            }
        });
    }
}

/**
 * Show custom alert modal
 * @param {string} message - The message to display
 * @param {string} type - Type of alert: 'success', 'error', 'warning', 'info'
 * @param {string} title - Optional title (defaults based on type)
 */
function showAlert(message, type = 'info', title = null) {
    initNotificationSystem();
    
    const overlay = document.getElementById('notification-overlay');
    const modal = document.getElementById('notification-modal');
    const titleEl = document.getElementById('notification-title');
    const messageEl = document.getElementById('notification-message');
    const footerEl = document.getElementById('notification-footer');
    
    if (!overlay || !modal) return;
    
    // Set title based on type if not provided
    if (!title) {
        switch(type) {
            case 'success':
                title = 'Success!';
                break;
            case 'error':
                title = 'Error';
                break;
            case 'warning':
                title = 'Warning';
                break;
            default:
                title = 'Notification';
        }
    }
    
    // Set content
    titleEl.textContent = title;
    messageEl.textContent = message;
    
    // Set modal type class
    modal.className = `notification-modal notification-${type}`;
    
    // Set footer with OK button
    footerEl.innerHTML = `
        <button class="btn btn-primary notification-btn-ok" id="notification-ok">OK</button>
    `;
    
    // Setup OK button
    const okBtn = document.getElementById('notification-ok');
    if (okBtn) {
        okBtn.addEventListener('click', closeNotification);
        okBtn.focus();
    }
    
    // Show modal
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * Show custom confirm dialog
 * @param {string} message - The message to display
 * @param {string} title - Optional title
 * @returns {Promise<boolean>} - Promise that resolves to true if confirmed, false if cancelled
 */
function showConfirm(message, title = 'Confirm') {
    return new Promise((resolve) => {
        initNotificationSystem();
        
        const overlay = document.getElementById('notification-overlay');
        const modal = document.getElementById('notification-modal');
        const titleEl = document.getElementById('notification-title');
        const messageEl = document.getElementById('notification-message');
        const footerEl = document.getElementById('notification-footer');
        
        if (!overlay || !modal) {
            resolve(false);
            return;
        }
        
        // Set content
        titleEl.textContent = title;
        messageEl.textContent = message;
        modal.className = 'notification-modal notification-warning';
        
        // Set footer with Confirm and Cancel buttons
        footerEl.innerHTML = `
            <button class="btn btn-secondary notification-btn-cancel" id="notification-cancel">Cancel</button>
            <button class="btn btn-primary notification-btn-confirm" id="notification-confirm">Confirm</button>
        `;
        
        // Setup buttons
        const cancelBtn = document.getElementById('notification-cancel');
        const confirmBtn = document.getElementById('notification-confirm');
        
        const handleClose = (result) => {
            closeNotification();
            resolve(result);
        };
        
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => handleClose(false));
        }
        
        if (confirmBtn) {
            confirmBtn.addEventListener('click', () => handleClose(true));
            confirmBtn.focus();
        }
        
        // Show modal
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

/**
 * Show toast notification (non-blocking)
 * @param {string} message - The message to display
 * @param {string} type - Type: 'success', 'error', 'warning', 'info'
 * @param {number} duration - Duration in milliseconds (default: 3000)
 */
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Remove after duration
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, duration);
}

/**
 * Close notification modal
 */
function closeNotification() {
    const overlay = document.getElementById('notification-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initNotificationSystem();
});

