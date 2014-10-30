
$(document).ready(function() {

	// Sign in

	$('.js-open-signin').on('click', function() {
		$('.login').toggleClass('js-show');
	});

	// helper text

	$('.js-helper__toggle').on('click', function() {
		$('.helper__body').toggleClass('js-show');
	});



		var $el, $ps, $up, totalHeight;

		$(".fader .btn").click(function() {
					
			totalHeight = 0

			$el = $(this);
			$p  = $el.parent();
			$up = $p.parent();
			$ps = $up.find("p:not('.read-more')");
			
			// measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
			$ps.each(function() {
				totalHeight += $(this).outerHeight();
			});
						
			$up
				.css({
					// Set height to prevent instant jumpdown when max height is removed
					"height": $up.height(),
					"max-height": 9999
				})
				.animate({
					"height": totalHeight
				});
			
			// fade out read-more
			$p.fadeOut();
			
			// prevent jump-down
			return false;

			
});

});
