$(function () {
	$('.wrapper_1').hover(function() {
		$(this).children().stop().animate({opacity:0}, 600);
	},function() {
		$(this).children().stop().animate({opacity:1}, 600);
	});
})

// $(function() {
// 	$('.text-decor').hover(function() {
// 		$(this).children().stop().animate({transform:'100%'}, 700);
// 	},function () {
// 		$(this).children().stop().animate({transform:'0%'}, 700);
// 	});
// })