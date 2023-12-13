
// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Find the corresponding navbar link and add the 'active' class
            let activeNavLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeNavLink) {
                activeNavLink.classList.add('active');
            }

            // Active sections for animation on scroll
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // Remove toggle icon and navbar when clicking navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation for footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', window.innerHeight + top >= document.scrollingElement.scrollHeight);

    // Animation for Skills section
    animateSection('#skills');

    // Animation for Contact section
    animateSection('#contact');
};

// Function to handle section animation
function animateSection(sectionId) {
    let section = document.querySelector(sectionId);
    if (section) {
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        if (top >= offset && top < offset + height) {
            section.classList.add('show-animate');
        } else {
            section.classList.remove('show-animate');
        }
    }
}
