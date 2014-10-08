
var feature = {
	querySelectorAll : !!document.querySelectorAll,
};


// cut the mustard

if (feature.querySelectorAll) {

	var App = window.App || {};

	App.main = (function(window, document) {


	// sticky nav

	var sticky = document.querySelector('.header-login');
       var origOffsetY = sticky.offsetTop;

    function onScroll(e) {
        window.scrollY >= origOffsetY ? sticky.classList.add('header--sticky') : sticky.classList.remove('header--sticky');
    }

    document.addEventListener('scroll', onScroll);

		

	}(this, this.document));


}