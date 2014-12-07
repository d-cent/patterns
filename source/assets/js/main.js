var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'default'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.controller('Ctrl', function($scope) {
  $scope.user = {
    name: 'awesome user'
  };
});




document.addEventListener("DOMContentLoaded", function() {

	// svg fallback

	if (!Modernizr.svg) {
		var imgs = document.getElementsByTagName('img');
		var endsWithDotSvg = /.*\.svg$/;
		var i = 0;
		var l = imgs.length;
		for (; i != l; ++i) {
			if (imgs[i].src.match(endsWithDotSvg)) {
				imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
			}
		}
	}


	// sign in: for demo purposes only

	(function(){

		var signToggle = document.querySelectorAll('.js-open-signin');

		[].forEach.call(signToggle, function(el) {
		  el.addEventListener("click", function() {

		  	var loginContent = document.querySelector('.login');

		    loginContent.classList.toggle('js-login-open');

		  });
		});

	})();

    (function(){

        var signToggle = document.querySelectorAll('.js-open-settings');

        [].forEach.call(signToggle, function(el) {
          el.addEventListener("click", function() {

              var loginContent = document.querySelector('.settings-container');

            loginContent.classList.toggle('js-settings-open');

          });
        });

    })();

	// helper text

	(function(){

		var helperToggle = document.querySelectorAll('.js-helper__toggle');

		[].forEach.call(helperToggle, function(el) {
		  el.addEventListener("click", function() {

		  	//var loginContent = document.querySelector('.helper__body');



		    el.nextElementSibling.classList.toggle('js-show');

		  });
		});

	})();



});




$(document).ready(function() {




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
