// Объявление модуля
var modalWindow = (function () {

	// Инициализирует наш модуль
	var init = function () {
		_setUpListners();
	};

	// Прослушивает события
	var _setUpListners = function () {
		$('#load_popup').on('click', _showModal); // открытие модоального окна
		$('#popup_form').on('submit', _addForm); // добавление проекта
	};

	//работает с модальным окном
	var _showModal = function  (ev) {
		console.log('вызов модоального окна');
		ev.preventDefault();
		var divPopup = $('.popup'),
			form = divPopup.find('#popup_form');
		divPopup.bPopup({
			speed: 650,
			transition: 'slideDown',
			onClose: function () {
				form.find('.server-mes').text('').hide();
				form.trigger("reset");
			}
		});
	};

 	//Добовляет проект
	var  _addForm = function (ev) {
		console.log('добавление проекта');
		ev.preventDefault();

		//Объявляем переменные
		var form = $(this),
			url = 'add_project.php',
			defObj = _ajaxForm(form, url);

	if(defObj){
		defObj.done (function(ans) {
			console.log(ans);
			var successBox = form.find('.success-mes'),
					errorBox = form.find('.error-mes');

			if (ans.status === 'OK') {
				errorBox.hide();
				successBox.text(ans.text).show();
			}else{
				successBox.hide();
				errorBox.text(ans.text).show();
			}
		});
	}
};

	// 	.fail(function() {
	// 		console.log("error");
	// 	});
	// };

	//Универсальная функция
	//1.Собирает данные из формы
	//2.проверяет форму
	//3.Делает запрос на сервер и возвращает ответ с сервера
	var _ajaxForm = function (form, url) {

		if (!validation.validateForm(form)) return false;

		//1. собрать данные из формы
		//2. проверить форму
		//3. вернуть ответ с сервера
		// if(!valid) return false;
		//
		data = form.serialize();

		var result = $.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		});
			return result;
	};

	// Возвращаем объект (публичные методы)
	return {
		init: init
	};

})();

// Вызов модуля
modalWindow.init();
