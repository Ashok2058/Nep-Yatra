// Get elements
const loginBtn = document.querySelector('.login-btn');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const userBtn = document.querySelector('.user-btn');
const ownerBtn = document.querySelector('.owner-btn');

// Open popup
loginBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    popup.style.display = 'block';
});

// Close popup
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
});

// User/Owner action
userBtn.addEventListener('click', () => {
    alert('Open User Login/Sign In Form');
    overlay.style.display = 'none';
    popup.style.display = 'none';
});

ownerBtn.addEventListener('click', () => {
    alert('Open Owner Login/Sign In Form');
    overlay.style.display = 'none';
    popup.style.display = 'none';
});
