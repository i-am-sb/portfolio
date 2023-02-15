$(function() {

	$('#st-accordion').accordion({
		oneOpenedItem : true
	});

	$('.list-expandable>li').click(function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$(this).children('ul.check-list').slideDown('fast');
		} else {
			$(this).addClass('active')
			$(this).children('ul.check-list').slideUp('fast');
		}
	});
});

jQuery(function($) {

	$.supersized({

		// Functionality for the Background Slideshow
		slide_interval : 7000, // Length between transitions
		transition : 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed : 1000, // Speed of transition

		// Components
		slide_links : 'blank', // Individual links for each slide (Options: false, 'num', 'name', 'blank')
		slides : [// Slideshow Images
		{
			image : 'images/slideshow_01.jpg',
			title : 'Image title'
		}, {
			image : 'images/slideshow_02.jpg',
			title : 'Image title'
		}, {
			image : 'images/slideshow_03.jpg',
			title : 'Image title'
		}, {
			image : 'images/slideshow_04.jpg',
			title : 'Image title'
		} // Be sure there is no comma after your last slide

		]

	});

});

// Functionality for Recent Project Toggle
function showonlyone(thechosenone) {
	var newsbox = document.getElementsByTagName("div");
	for (var x = 0; x < newsbox.length; x++) {
		name = newsbox[x].getAttribute("class");
		if (name == 'news-description') {
			if (newsbox[x].id == thechosenone) {
				newsbox[x].style.display = 'block';
			} else {
				newsbox[x].style.display = 'none';
			}
		}
	}
}

function unhide(element, divID) {
	var item = document.getElementById(divID);

	if (item) {
		if ($(item).hasClass('hidden')) {
			$(element).css('background', 'url("images/icon_sq_collapse.png") no-repeat #000');
			$(item).removeClass('hidden');
			$(item).addClass('unhidden');
		} else {
			$(item).removeClass('unhidden');
			$(item).addClass('hidden');
			$(element).css('background', 'url("images/icon_sq_expand.png") no-repeat #ff3c00');
		}
	}

	adjustRespCaption();
}

function getURLParameter(name) {
	return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]);
}

function submitContactForm() {
	$.post('http://error404.000webhost.com/?', $('#contactform').serialize(), function(response) {
		$('#contactResponse').html(response);
	}, 'html');
}

function adjustworkItems() {
	var containerWidth = $('ul.work').width();
	if (containerWidth == 0)
		return;
	var itemWidth = $('ul.work').children('li.item').width();

	var remaining = containerWidth % itemWidth;
	var itemsCount = Math.floor(containerWidth / itemWidth);
	var itemMargin = remaining / (itemsCount - 1);

	itemMargin = Math.floor(itemMargin);

	var i = 1;

	$('ul.work li.item').each(function() {
		if ((i % itemsCount) != 0) {
			$(this).css('margin-right', itemMargin);
		} else {
			$(this).css('margin-right', 0);
		}
		i++;
	});
}


$(window).resize(function() {
	adjustworkItems();
	adjustRespCaption();
	//                $('ul.work').addClass('work-force-auto-height');
});

function adjustRespCaption() {
	$('.responsive-caption').each(function() {
		$(this).height($(this).parent().height() - (parseInt($(this).css('padding-top')) + parseInt($(this).css('padding-bottom'))) - 7);
	});

}


$(document).ready(function() {
	adjustRespCaption();

	var section = getURLParameter('section');
	if (section.length != 0) {
		$('#' + section).siblings('a').click();
	}

	$('#work').resize(function() {
		adjustworkItems();
	})
});
