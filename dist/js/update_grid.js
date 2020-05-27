$( document ).ready(function() {
update_grid_v2();
set_img_height();
});

$( window ).resize(function() {
update_grid_v2();
	
});
function set_img_height(){
	console.log("in");
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
	console.log($(this).innerWidth());
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

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}