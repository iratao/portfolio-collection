$(document).ready(function() {
	var pages = $(".portfolio").length;
	var curPage = 1;

	var pageLeft = function() {
		console.log('pageLeft');
		if (curPage > 1) {
			var selector = '.portfolio:nth-child('+ curPage.toString() +')';
			$(selector).removeClass('active');
			curPage--;
			selector = '.portfolio:nth-child('+ curPage.toString() +')';
			$(selector).addClass('active');
		}
	};

	var pageRight = function() {
		console.log('pageright');
		if (curPage < pages) {
			var selector = '.portfolio:nth-child('+ curPage.toString() +')';
			$(selector).removeClass('active');
			curPage++;
			selector = '.portfolio:nth-child('+ curPage.toString() +')';
			$(selector).addClass('active');
		}
	};

	$('.left').click(function() {
		pageLeft();
	});

	$('.right').click(function() {
		pageRight();
	});

});