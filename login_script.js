document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    console.log('Login attempt:', { email });

    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.textContent = 'Login...';
    submitBtn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
    
    setTimeout(() => {
        alert('Login successful!');
        submitBtn.textContent = 'Login';
        submitBtn.style.background = 'linear-gradient(135deg, var(--deep-blue), var(--soft-blue))';
    }, 1500);
});

const socialButtons = document.querySelectorAll('.social-btn');
socialButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});