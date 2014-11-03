
$(document).ready(function() {

	// Sign in

	$('.js-open-signin').on('click', function() {
		$('.login').slideToggle(300);
	});

	// helper text

	$('.js-helper__toggle').on('click', function() {
		$('.helper__body').slideToggle(300);
	});


	if ($('.fadeout').length) {

		var orig_text;

		$('.fadeout').each(function () {
			// console.log( $(this).children(":first")[0].clientHeight );
			if ($(this).children(":first")[0].clientHeight < 160) {
				$(this).parent().addClass('open');
				$(this).addClass('pt-fix');
				$(this).parent().find('.read-more').remove();
			}
		});

		//$('.fadeout.clickable').click(function (event) {
		//    event.preventDefault();

		//    $(this).addClass('open');
		//    $(this).removeClass('clickable');
		//    $(this).find('a').addClass('pt-fix');
		//    $(this).find('.read-more').remove();
		//});

		$('.read-more').find('a').click(function (event) {
			event.preventDefault();

			orig_text = $(this).text();
			$(this).parent().parent('.fadeout').addClass('open');
			$(this).addClass('pt-fix');
			$(this).parent().remove();

			// In case toggle between 'lue lisää' and 'pienennä teksti' is wanted

			//$('.fadeout').toggleClass('open');
			/*
			if( $('.fadeout').hasClass('open') ){
				$(this).text('Pienennä teksti');
				$(this).addClass('pt-fix');
			}else{
				$(this).text(orig_text);
				$(this).removeClass('pt-fix');
			}*/
		});
	}

		

});
