$( document ).ready(function() {
	update_gallery()
	update_grid_v2();
	set_img_height();
	init_modal();
});

$( window ).resize(function() {
	update_gallery()
	update_grid_v2();
	set_img_height();
	init_modal();
});
function set_img_height(){
	$('.gallery_element').each(function(){
		$(this).css('height', getRandomArbitrary(100, 300) + 'px');
	});
}
function update_grid_v2(){
	var gallery_container_width = window.innerWidth * 0.9;
	var gallery_container_height = window.innerHeight * 0.9;
	ratio = window.innerHeight / window.innerWidth
	if(ratio < 0.3){
		gallery_container_width = window.innerWidth * 0.6;
	}
		
	$('.background_container').css('width', gallery_container_width + 'px');
	$('.background_container').css('height', gallery_container_height + 'px');
	$('.gallery_container').css('width', gallery_container_width + 'px');
	$('.gallery_container').css('height', gallery_container_height + 'px');
}
function update_grid(){
	if($(this).innerWidth() > 740){
		$('.hex-container').each(function(){
			var i = 2;
			$(this).find('.hex').each(function(){
				i++;
				$(this).removeClass('hex-gap');
				$(this).removeClass('hex-3');
				$(this).removeClass('hex-2');
				$(this).removeClass('hex-1');
				if(i == 7){
					$(this).addClass('hex-gap');
					i = 0;
				}
				
			});
		});
	}
	else if($(this).innerWidth() < 740 && $(this).innerWidth() > 500){
		$('.hex-container').each(function(){
			var i = 4;
			var j = 1;
			$(this).find('.hex').each(function(){
				i++;
				j++;
				$(this).removeClass('hex-gap');
				$(this).removeClass('hex-3');
				$(this).removeClass('hex-2');
				$(this).removeClass('hex-1');
				if(i == 5){
					$(this).addClass('hex-3');
					i = 0;
				}
				if(j == 5){
					$(this).addClass('hex-gap');
					$(this).addClass('hex-2');
					j = 0;
				}
				
			});
		});
	}
	else if ($(this).innerWidth() < 500){
		$('.hex-container').each(function(){
			var i = 0;
			var j = 2;
			$(this).find('.hex').each(function(){
				i++;
				j++;
				$(this).removeClass('hex-gap');
				$(this).removeClass('hex-3');
				$(this).removeClass('hex-2');
				$(this).removeClass('hex-1');
				if(i == 3){
					$(this).addClass('hex-1');
					$(this).addClass('hex-gap');
					i = 0;
				}
				if(j == 3){
					$(this).addClass('hex-2');
					j = 0;
				}
				
			});
		});
	}
}

var decouverte_img = ['124', '132', '139', '155', '156', '160', '176', '187', '201', '202', '221', '347'];
var travail_img = ['074', '217', '229', '230', '233', '256', '415', '431', '517'];
var enfance_img = ['026', '321', '324', '343', '412', '473', '486'];
var partage_img = ['031', '035', '043', '050', '058', '066', '072', '118', '149', '192', '272'];
var merci_img = ['246', '323', '533'];

function update_gallery(){
	if(window.innerHeight / window.innerWidth  > 1.3){
		update_gallery_all(3);
	}
	else if(window.innerWidth >= 1300){
		update_gallery_all(1);
	}
	else if(window.innerWidth >= 700 && window.innerWidth < 1300){
		update_gallery_all(2);
	}
	else if(window.innerWidth < 700){
		update_gallery_all(3);
	}
}
function update_gallery_all(opt){
	update_gallery_each(opt, 1);
	update_gallery_each(opt, 2);
	update_gallery_each(opt, 3);
	update_gallery_each(opt, 4);
	update_gallery_each(opt, 5);
}
function update_gallery_each(opt, type){
	var folder = "";
	var pack_img = [];
	switch(type){
		case 1 : folder = "Decouverte";
				 pack_img = decouverte_img;
				break;
		case 2 : folder = "Enfancephilippine";
					pack_img = enfance_img;
				break;
		case 3 : folder = "Partage";
				pack_img = partage_img;
				break;
		case 4 : folder = "Travaux";
				pack_img = travail_img;
				break;				
		case 5 : folder = "Merci";
				pack_img = merci_img;
				break;
	}
	$('#flux' + type).find('.boardz').empty();
	if(opt == 1){
		$('#flux' + type).find('.boardz').append("<ul id='col-" + type + "-1'></ul>");
		$('#flux' + type).find('.boardz').append("<ul id='col-" + type + "-2'></ul>");
		$('#flux' + type).find('.boardz').append("<ul id='col-" + type + "-3'></ul>");
		$('#flux' + type).find('.boardz').append("<ul id='col-" + type + "-4'></ul>");
		var j = 1;
		for(var i = 0; i < pack_img.length; i++){
			append(i, j);
			if((j) % 4 == 0)
				j = 0;
			j++;
		}
	}
	if(opt == 2){
		$('#flux' + type).find('.boardz').append("<ul id='col-" + type + "-1'></ul>");
		$('#flux' + type).find('.boardz').append("<ul id='col-" + type + "-2'></ul>");
		$('#flux' + type).find('.boardz').append("<ul id='col-" + type + "-3'></ul>");
		var j = 1;
		for(var i = 0; i < pack_img.length; i++){
			append(i, j);
			if((j) % 3 == 0)
				j = 0;
			j++;
		}
	}
	if(opt == 3){
		$('#flux' + type).find('.boardz').append("<ul id='col-" + type + "-1'></ul>");
		$('#flux' + type).find('.boardz').append("<ul id='col-" + type + "-2'></ul>");
		var j = 1;
		for(var i = 0; i < pack_img.length; i++){
			append(i, j);
			if((j) % 2 == 0)
				j = 0;
			j++;
		}
	}
	function append(i, j){
		var div = $('<div class="gallery_element">');
		var url = "url(images/" + folder + "/DSC_0" + pack_img[i] + ".jpg)";
		div.css({"background-image" : url});
		$('#col-' + type + '-' + j).append($("<li>").append(div));
	}
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}