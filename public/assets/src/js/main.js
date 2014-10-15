
var feature = {
	querySelectorAll : !!document.querySelectorAll,
};


// cut the mustard

if (feature.querySelectorAll) {

	var App = window.App || {};

	App.main = (function(window, document) {


	// login

	$('.js-open-signin').on('click', function () {
		$('.login').slidetoggle(200);
		alert('pöö');
	});



	}(this, this.document));


}
