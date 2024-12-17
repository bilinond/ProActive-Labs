document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('The password must contain letters and numbers, at least 8 characters');
        return;
    }

    console.log('Registration:', {
        username,
        email
    });

    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.textContent = 'Registration...';
    submitBtn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
    
    setTimeout(() => {
        alert('Registration successful!');
        submitBtn.textContent = 'Register';
        submitBtn.style.background = 'linear-gradient(135deg, var(--deep-blue), var(--soft-blue))';
    }, 1500);
});

const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

confirmPasswordInput.addEventListener('input', function() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords don't match");
    } else {
        confirmPasswordInput.setCustomValidity('');
    }
});