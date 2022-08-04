// Инициализация слайдера
$('.reviews__list').slick({
	autoplay: true,
	autoplaySpeed: 4000,
});

// Плавный скролинг до блока
$(function() {
	$('.menu a').click(function() {
		var _href = $(this).attr('href');
		$('html, body').animate({ scrollTop: $(_href).offset().top + 'px' }, 1500);
		return false;
	});
});