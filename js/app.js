// Time checker

let greetingText = document.querySelector('.message');

const currentDate = new Date();
let currentHour = currentDate.getHours();

if (currentHour < 12) {
	greetingText.textContent = '👋 Good morning';
} else if (currentHour < 18) {
	greetingText.textContent = '👋 Good afternoon';
} else {
	greetingText.textContent = '👋 Good evening';
}
