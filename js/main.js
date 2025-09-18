!(function (o, c) {
	var n = c.documentElement,
		t = ' w-mod-';
	(n.className += t + 'js'),
		('ontouchstart' in o || (o.DocumentTouch && c instanceof DocumentTouch)) &&
			(n.className += t + 'touch');
})(window, document);

var questions_obj = {};

function next(id, el) {
	var prev_id = id - 1;

	questions_obj[el.getAttribute('data-value')] = el.textContent.trim();
	$('input[name="questions"]').val(JSON.stringify(questions_obj));

	$('.question-1[question_num="' + prev_id + '"]').fadeOut(300, function () {
		$('.question-1[question_num="' + id + '"]').fadeIn(300);
	});
}

function block() {
	$('.question-1').fadeOut(300, function () {
		$('.question-1[question_num="block"]').fadeIn(300);
		$(
			'.waitpopup-overlay, .waitpopup, .exitpopup-overlay, .exitpopup'
		).remove();
	});
}

$(document).ready(function () {
	let result6 = '';
	let num = 1;
	$('.set-data').click(function (e) {
		result6 += `|${num++})` + $(this).attr('data-value') + '\n';

		$('input[name="answers"]').val(result6);
	});

	// Smooth scroll navigation function
	function smoothScrollTo(target) {
		const element = document.querySelector(target);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	}

	// Navigation menu smooth scroll
	$('.menu-link.main-menu-link').click(function (e) {
		e.preventDefault();
		const href = $(this).data('target');
		if (href) {
			smoothScrollTo(href);
		}
	});

	// Logo click handler
	$('.custom-logo-link').click(function (e) {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	});

	// Open form handler for "В корзину" buttons
	$('.open-form').click(function (e) {
		e.preventDefault();
		// Scroll to form or open modal here
		const formElement = document.querySelector('#register_form');
		if (formElement) {
			formElement.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	});
});
