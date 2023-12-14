
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












//contact section



const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".btn-submit");/**/
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email"); // Corrected selector for emailInput
const messageInput = document.querySelector("#message");
const phoneInput = document.querySelector("#phone");


const publicKey = "IOGismlBPkC1QGN4c";
const serviceID = "service_jpjfnx1";
const templateID = "template_2ntwzee";

emailjs.init(publicKey);

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    submitBtn.value = "Just a Moment...";

    const inputField = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
        phone:phoneInput.value
    };

    emailjs.send(serviceID, templateID, inputField)
        .then(() => {
            submitBtn.value = "Message sent successfully"; /**/
            messageInput.value = "";
            emailInput.value = "";
            phoneInput.value="";
            nameInput.value="";
        })
        .catch((error) => {
            console.error(error);
            submitBtn.value = "Something went wrong"; /**/
        });
});






