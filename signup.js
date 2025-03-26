document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('signupForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const validateField = (input, validationFn) => {
    const formGroup = input.closest('.form-group');
    const isValid = validationFn(input.value);
    formGroup.classList.toggle('error', !isValid);
    return isValid;
};

const validateUsername = (value) => {
    return value.length >= 2 && value.length <= 50;
};

const validateEmail = (value) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailRegex.test(value);
};

const validatePassword = (value) => {
    return value.length >= 8;
};

const validatePasswordMatch = () => {
    return password.value === confirmPassword.value && password.value !== '';
};

const handleInput = (input, validationFn) => {
    input.addEventListener('input', () => {
        validateField(input, validationFn);
    });
};

handleInput(username, validateUsername);
handleInput(email, validateEmail);
handleInput(password, validatePassword);
handleInput(confirmPassword, validatePasswordMatch);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isUsernameValid = validateField(username, validateUsername);
    const isEmailValid = validateField(email, validateEmail);
    const isPasswordValid = validateField(password, validatePassword);
    const isConfirmPasswordValid = validateField(confirmPassword, validatePasswordMatch);

    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        // Simulate form submission (replace with actual backend logic)
        console.log('Form submitted successfully!');
        console.log('Username:', username.value);
        console.log('Email:', email.value);

        // Optional: Show success message or redirect
        alert('Registration successful! Redirecting to login page.');
        window.location.href = 'login.html';
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