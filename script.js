// script.js

// Function to validate the entire form
function validateForm() {
    let isValid = true;

    // Validate each field
    isValid &= validateName();
    isValid &= validateEmail();
    isValid &= validatePhone();
    isValid &= validatePassword();
    isValid &= validateConfirmPassword();

    return isValid; // Prevent form submission if any validation fails
}

// Validate Full Name
function validateName() {
    const name = document.getElementById('fullName').value;
    const nameError = document.getElementById('nameError');
    if (name.length < 5) {
        nameError.textContent = "Name must be at least 5 characters long.";
        return false;
    }
    nameError.textContent = ""; // Clear error
    return true;
}

// Validate Email
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    if (!email.includes('@')) {
        emailError.textContent = "Enter a valid email.";
        return false;
    }
    emailError.textContent = ""; // Clear error
    return true;
}

// Validate Phone Number
function validatePhone() {
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^[0-9]{10}$/;

    if (phone === "123456789" || !phonePattern.test(phone)) {
        phoneError.textContent = "Enter a valid 10-digit phone number.";
        return false;
    }
    phoneError.textContent = ""; // Clear error
    return true;
}

// Validate Password
function validatePassword() {
    const password = document.getElementById('password').value;
    const name = document.getElementById('fullName').value;
    const passwordError = document.getElementById('passwordError');

    if (password.length < 8 || password === 'password' || password === name) {
        passwordError.textContent = "Password must be at least 8 characters and not 'password' or your name.";
        return false;
    }
    passwordError.textContent = ""; // Clear error
    return true;
}

// Validate Confirm Password
function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    }
    confirmPasswordError.textContent = ""; // Clear error
    return true;
}