
$(document).ready(function() {

	// Sign in

	$('.js-open-signin').on('click', function() {
		$('.login').toggleClass('js-show');
	});

	// helper text

	$('.js-helper__toggle').on('click', function() {
		$('.helper__body').toggleClass('js-show');
	});

});
