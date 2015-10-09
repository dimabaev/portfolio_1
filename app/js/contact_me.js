// Объявление модуля
var contactMe = (function () {

	// Инициализирует наш модуль
	var init = function () {
		_setUpListners();
	};

	// Прослушивает события
	var _setUpListners = function () {
		$('#contact-me').on('submit', _submitForm);
	};

		var _submitForm = function (ev) {
			ev.preventDefault();

			var form = $(this),
				url = 'contactme.php',
				defObj =  _ajaxForm(form, url);
				// что-то будем делатть с ответом с сервера defObj
		};

	  var _ajaxForm = function (form, url) {
	  	if (!validation.validateForm(form)) return false;
	  	// если false то код ниже не произойдет никогда

	  };


	// Возвращаем объект (публичные методы)
	return {
		init: init
	};

})();

// Вызов модуля
contactMe.init();
