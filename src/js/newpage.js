const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const navSection = document.querySelector('.navigation');

const footerYear = document.querySelector('.footer__year');

// const headerSection = document.querySelector('#header');
// const officeSection = document.querySelector('#office');
// const specSection = document.querySelector('#specjalizations');
// const contactSection = document.querySelector('#contact');

const handleNav = () => {
	burgerBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

const addNavShadow = () => {
	if (window.scrollY > 0) {
		navSection.classList.add('navigation__shadow');
	} else {
		navSection.classList.remove('navigation__shadow');
	}
};

const hendleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

hendleCurrentYear();

burgerBtn.addEventListener('click', handleNav);
navMobile.addEventListener('click', handleNav);
window.addEventListener('scroll', addNavShadow);
