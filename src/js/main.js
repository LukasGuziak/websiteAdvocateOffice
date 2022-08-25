const burgerBtn = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const navSection = document.querySelector('.navigation');

const headerSection = document.querySelector('#header');
const officeSection = document.querySelector('#office');
const specSection = document.querySelector('#specjalizations');
const contactSection = document.querySelector('#contact');

const handleNav = () => {
	burgerBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

const addNavShadow = () => {
	if (window.scrollY > 100) {
		navSection.classList.add('navigation__shadow');
	} else {
		navSection.classList.remove('navigation__shadow');
	}
};

const scrollSpy = () => {
	const windowYposition = window.pageYOffset;

	if (
		officeSection.offsetTop - 100 <= windowYposition &&
		specSection.offsetTop - 100 > windowYposition
	) {
		console.log('office');
		document.querySelector('.navOffice').classList.add('active');
		document.querySelector('.navHeader').classList.remove('active');
		document.querySelector('.navSpec').classList.remove('active');
		document.querySelector('.navContact').classList.remove('active');
	} else if (
		specSection.offsetTop - 100 <= windowYposition &&
		contactSection.offsetTop - 100 > windowYposition
	) {
		console.log('spec');
		document.querySelector('.navOffice').classList.remove('active');
		document.querySelector('.navHeader').classList.remove('active');
		document.querySelector('.navSpec').classList.add('active');
		document.querySelector('.navContact').classList.remove('active');
	} else if (contactSection.offsetTop - 100 <= windowYposition) {
		console.log('contact');
		document.querySelector('.navOffice').classList.remove('active');
		document.querySelector('.navHeader').classList.remove('active');
		document.querySelector('.navSpec').classList.remove('active');
		document.querySelector('.navContact').classList.add('active');
	} else {
		console.log('header');
		document.querySelector('.navOffice').classList.remove('active');
		document.querySelector('.navHeader').classList.add('active');
		document.querySelector('.navSpec').classList.remove('active');
		document.querySelector('.navContact').classList.remove('active');
	}
};

burgerBtn.addEventListener('click', handleNav);
navMobile.addEventListener('click', handleNav);
window.addEventListener('scroll', addNavShadow);
window.addEventListener('scroll', scrollSpy);
