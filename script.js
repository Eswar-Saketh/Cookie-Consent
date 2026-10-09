const cookieOverlay = document.querySelector('#cookie-overlay');
const cookiePopup = document.querySelector('#cookie-popup');
const acceptBtn = document.querySelector('#accept-btn');
const resetBtn = document.querySelector('#reset-btn');


function showPopup() {
    cookieOverlay.classList.remove('hidden');
    cookiePopup.classList.remove('hidden');
}

function hidePopup() {
    cookieOverlay.classList.add('hidden');
    cookiePopup.classList.add('hidden');
}

function checkConsent() {
    const consent = localStorage.getItem('cookieConsent');

    if (consent === 'accepted') {
        hidePopup();
    } else {
        showPopup();
    }
}

acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    hidePopup();
});

if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        localStorage.removeItem('cookieConsent');
        showPopup();
    });
}

checkConsent();
