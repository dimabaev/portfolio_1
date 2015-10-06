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

// $(document).ready(function() {
// 	$(".load-link").click(function() {
// 		$(".popup_container").animate({top: "50%"}, 400)
// 	});
// });

// $(document).ready(function() {
// 	$(".load-link").click(function() {
// 		$(".popup").animate({opacity: 1}, 400)
// 	});
// });



 // $(document).ready(function(){
 //        //Скрыть PopUp при загрузке страницы    
 //        PopUpHide();
 //    });
 //    //Функция отображения PopUp
 //    function PopUpShow(){
 //        $("#popup1").show();
 //    }
 //    //Функция скрытия PopUp
 //    function PopUpHide(){
 //        $("#popup1").hide();
 //    }

