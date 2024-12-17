document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('forgotPasswordForm');
    const emailInput = document.getElementById('emailInput');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<div class="loading-spinner"></div>';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Restore password';

            if (emailInput.value.includes('@')) {
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
                emailInput.value = '';
            } else {
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
                emailInput.classList.add('shake-animation');
                
                setTimeout(() => {
                    emailInput.classList.remove('shake-animation');
                }, 500);
            }
        }, 1500);
    });

    emailInput.addEventListener('input', () => {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'none';
    });
});