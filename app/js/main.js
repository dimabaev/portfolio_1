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

 $(document).ready(function(){
        //Скрыть PopUp при загрузке страницы    
        PopUpHide();
    });
    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup1").show();
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup1").hide();
    }

