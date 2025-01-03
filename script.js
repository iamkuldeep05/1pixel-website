document.addEventListener('DOMContentLoaded', () => {
    const openFormButton = document.querySelector('#get-quote-button');
    const pageContent = document.querySelector('#page5-content');
    const contactFormContent = document.querySelector('#contact-form-content');
    const closeFormButton = document.querySelector('#close-form');

    // Show contact form inside page5
    openFormButton.addEventListener('click', () => {
        gsap.to(pageContent, { duration: 3, opacity: 0, y: -20, ease: "power2.out" });  // Fade out the main content
        gsap.to(contactFormContent, { duration: 3, opacity: 1, display: "block", y: 0, ease: "power2.out" });  // Fade in the form
    });

    // Close contact form and bring back the original content
    closeFormButton.addEventListener('click', () => {
        gsap.to(contactFormContent, { duration: 0.5, opacity: 0, y: -20, ease: "power2.in" });  // Fade out the form
        setTimeout(() => {
            contactFormContent.style.display = 'none';  // Hide the form
            gsap.to(pageContent, { duration: 0.7, opacity: 1, y: 0, ease: "power2.out" });  // Fade the content back in
        }, 500);  // Time to match fade-out duration
    });
});
