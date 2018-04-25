const nav = document.getElementById('navbar');
const brand = document.getElementById('brand');

window.addEventListener('scroll', function(){
	if(window.pageYOffset > 100){
		nav.style.backgroundColor = `#192a56`;
		brand.style.visibility = `visible`;
	}
	else{
		nav.style.backgroundColor = `rgba(0,0,0,0)`;
		brand.style.visibility = `hidden`;
	}
});