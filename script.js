document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Dynamic greeting based on time of day
const header = document.querySelector('header');
const now = new Date();
const hours = now.getHours();
let greeting;

if (hours < 12) {
    greeting = 'Good Morning';
} else if (hours < 18) {
    greeting = 'Good Afternoon';
} else {
    greeting = 'Good Evening';
}

const greetingElement = document.createElement('p');
greetingElement.textContent = `${greeting}! Welcome to my portfolio.`;
header.appendChild(greetingElement);