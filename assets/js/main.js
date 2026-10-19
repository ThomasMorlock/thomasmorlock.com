// Ensure DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-btn');

    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            alert('Hello! Your JavaScript boilerplate file is correctly linked.');
        });
    }
});