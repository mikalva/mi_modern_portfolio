// Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
// Select array of nav items
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu
let showMenu = false;

// Menu button even listener; display/hide overlay
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
	if(!showMenu){
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		// Iterate list items
		navItems.forEach(item => item.classList.add('show'));
		// Menu state
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItems.forEach(item => item.classList.remove('show'));
		// Menu state
		showMenu = false;
	}
}