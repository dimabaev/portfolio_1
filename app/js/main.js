$(function () {
	$('.wrapper_1').hover(function() {
		$(this).children().stop().animate({
			paddingTop:"0%",
			opacity:0.3
		}, 400);
	},function() {
		$(this).children().stop().animate({
			paddingTop:"100%",
			opacity:1
		}, 400);
	});
});

 // $( '.navigation_item' ).click(function() {
 // 	$(this).slideUp();
 // });

