$(function () {
	$('.wrapper_1').hover(function() {
		$(this).children().stop().animate({
			opacity:0.1
		}, 400);
	},function() {
		$(this).children().stop().animate({
			opacity:1
		}, 400);
	});
});

$(document).ready(function() {
	$('.portfolio_box').hover(function() {
		$(".text-decor").stop(true, true).animate({fontSize: "17px", }, 400)
	}, function() {
		$(".text-decor").stop(true, true).animate({fontSize: "1px"}, 400)
	});
});
