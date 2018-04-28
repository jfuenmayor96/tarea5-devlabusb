const nav = document.getElementById('navbar');
const brand = document.getElementById('brand');

const mq = window.matchMedia( "(min-width: 992px)")

if(mq.matches){
	window.addEventListener('scroll', function(){
		if(window.pageYOffset > 100){
			nav.style.backgroundColor = `#192a56`;
			brand.style.opacity = `1`;
		}
		else{
			nav.style.backgroundColor = `rgba(0,0,0,0)`;
			brand.style.opacity = `0`;
		}
	});
}