document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');

const validateField = (input, validationFn) => {
    const formGroup = input.closest('.form-group');
    const isValid = validationFn(input.value);
    formGroup.classList.toggle('error', !isValid);
    return isValid;
};

const validateEmail = (value) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailRegex.test(value);
};

const validatePassword = (value) => {
    return value.length >= 8;
};

const handleInput = (input, validationFn) => {
    input.addEventListener('input', () => {
        validateField(input, validationFn);
    });
};

handleInput(email, validateEmail);
handleInput(password, validatePassword);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isEmailValid = validateField(email, validateEmail);
    const isPasswordValid = validateField(password, validatePassword);

    if (isEmailValid && isPasswordValid) {
        // Simulate login (replace with actual backend authentication)
        console.log('Login attempted');
        console.log('Email:', email.value);

        // Optional: Show success message or redirect
        alert('Login successful! Redirecting to dashboard.');
        window.location.href = 'dashboard.html'; // Replace with your actual dashboard page
    }
});

// Social login event listeners
document.querySelector('.google-btn').addEventListener('click', () => {
    // Redirect to Google OAuth
    window.location.href = 'https://accounts.google.com/o/oauth2/auth';
});

document.querySelector('.github-btn').addEventListener('click', () => {
    // Redirect to GitHub OAuth
    window.location.href = 'https://github.com/login/oauth/authorize';
});
});
