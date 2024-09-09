document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('.nav-links a');

    // Check for saved theme in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        navbar.classList.add('dark-mode');
        links.forEach(link =>{
           link.classList.add('dark-mode');
        });
        toggleButton.classList.add('dark-mode');
    }

    // Toggle button click event
    toggleButton.addEventListener('click', () => {
        // Toggle dark-mode class
        body.classList.toggle('dark-mode');
        navbar.classList.toggle('dark-mode');
        links.forEach(link => link.classList.toggle('dark-mode'));
        toggleButton.classList.toggle('dark-mode');

        // Save theme preference in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
