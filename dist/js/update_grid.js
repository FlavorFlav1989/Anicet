var isOnDiv = false;
var scrollPossibleDown = true;

$( document ).ready(function() {
	update_gallery()
	update_grid_v2();
	init_modal();
	$(".gallery_container").mouseover(function(){console.log("in!"); isOnDiv=true;});
	$(".gallery_container").mouseout(function(){isOnDiv=false;});
});

$( window ).resize(function() {
	update_gallery()
	update_grid_v2();
	init_modal();
});
function set_img_height(opt){
	$('.gallery_element').each(function(){
		$(this).css('height', getRandomArbitrary(100, 300) + 'px');
	});
	/*var max_height = $('.gallery_container').height();
	console.log(max_height);
	$('.gallery_container').each(function(){
		var numb_img = $(this).find('.gallery_element').length;
		var numb_portion = 1;
		var numb_col = 1;
		switch(opt){
			case 1 : 	numb_col = 4;
						numb_portion = numb_img / numb_col;
						break;
			case 2 : 	numb_col = 3;
						numb_portion = numb_img / numb_col;
						break;
			case 3 : 	numb_col = 2;
						numb_portion = numb_img / numb_col;
						break;
		}
		console.log(numb_img, numb_portion, numb_col);
		var last_col_1 = -1;
		var last_col_2 = -1;
		var last_col_3 = -1;
		var last_col_4 = -1;
		
		last_col_1 = numb_img - numb_img % numb_col;
		last_col_2 = numb_img - numb_img % (numb_col + 1);
		last_col_3 = numb_img - numb_img % (numb_col + 2);
		last_col_4 = numb_img - numb_img % (numb_col + 3);
		
		var height_col_1 = 0;
		var height_col_2 = 0;
		var height_col_3 = 0;
		var height_col_4 = 0;
		var j = 0;
		for(var i = 0; i < numb_img; i++){
			if(i == last_col_1){
				if((max_height - height_col_1) <= (max_height / numb_portion))
					$($(this).find('.gallery_element')[i]).css('height', (max_height - height_col_1) + 'px');
				else
					rand = getRandomArbitrary(50, (max_height / numb_portion));
					$($(this).find('.gallery_element')[i]).css('height', rand + 'px');
					
			}
			else if(i == last_col_2){
				if((max_height - height_col_2) <= (max_height / numb_portion))
					$($(this).find('.gallery_element')[i]).css('height', (max_height - height_col_2) + 'px');
				else
					rand = getRandomArbitrary(50, (max_height / numb_portion));
					$($(this).find('.gallery_element')[i]).css('height', rand + 'px');
					
			}
			else if(i == last_col_3){
				if((max_height - height_col_3) <= (max_height / numb_portion))
					$($(this).find('.gallery_element')[i]).css('height', (max_height - height_col_3) + 'px');
				else
					rand = getRandomArbitrary(50, (max_height / numb_portion));
					$($(this).find('.gallery_element')[i]).css('height', rand + 'px');
					
			}
			else if(i == last_col_4){
				if((max_height - height_col_4) <= (max_height / numb_portion))
					$($(this).find('.gallery_element')[i]).css('height', (max_height - height_col_4) + 'px');
				else
					rand = getRandomArbitrary(50, (max_height / numb_portion));
					$($(this).find('.gallery_element')[i]).css('height', rand + 'px');
			}
			else{
				rand = getRandomArbitrary(50, (max_height / numb_portion));
				if((j + 1) == 1)
					height_col_1 += rand;
				if((j + 1) == 2)
					height_col_2 += rand;
				if((j + 1) == 3)
					height_col_3 += rand;
				if((j + 1) == 4)
					height_col_4 += rand;
				$($(this).find('.gallery_element')[i]).css('height', rand + 'px');
			}
			j++;
			if(j == numb_col)
				j = 0;				
		}
		$(this).find('.gallery_element').each(function(){
			$(this).css('height', getRandomArbitrary(50, (max_height / numb_portion)) + 'px');
		});
	});*/
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

var decouverte_img = ['124', '132', '139', '155',
"\"De retour dans mon pays natal, l'un des pays les plus pauvres au monde, quelque chose m'a frappée. Ce n'était pas la pauvreté en elle-même, ni la saleté que j'avais oubliée, ni l'incroyable passivité de beaucoup face à la misère dont enfant, je ne me rendais pas vraiment compte. Non, ce qui m'a frappée avant tout, c'est la résilience, l'espoir et l'optimisme qui les animent, jour après jour.De retour dans mon pays natal, l'un des pays les plus pauvres au monde, quelque chose m'a frappée. Ce n'était pas la pauvreté en elle-même, ni la saleté que j'avais oubliée, ni l'incroyable passivité de beaucoup face à la misère dont enfant, je ne me rendais pas vraiment compte. Non, ce qui m'a frappée avant tout, c'est la résilience, l'espoir et l'optimisme qui les animent, jour après jour.\"",
 '156', '160', 
"\”Aux Philippines, on ressent partout cette atmosphère si particulière et ces bruits si caractéristiques. Des cocotiers à perte de vue, une chaleur étouffante, des attroupements d'enfants, des déchets plastiques, des matchs de basket, et des chiens errants. Mais aussi des échoppes remplies, des tuk-tuk à toutes épreuves, des élevages de coqs, des stands de brochettes, des maisons modestes, et des maisons insalubres.\”",
'176', '187', '201', '202', 
"\”Embarquer pour un tel voyage, c'est aussi accepter le voyage vers les autres, ouvrir les yeux sur ce qui les motive, leurs habitudes, leurs peurs. C'est oser se montrer sous un angle plus personnel, dévoiler ses forces tout autant que ses faiblesses. C'est sortir de sa zone de confort.\”", 
'221', '347'];

var travail_img = ['074', '217', '229', '230', '233',
"\”Nous démarrons notre chantier de rénovation de la salle de classe avec l'espoir, un peu naïf, de ne pas perturber les leçons en cours dans les classes à proximité. Espoir de courte durée, au regard de ces petits yeux observateurs, et moyennement discrets, qui apparaissent régulièrement entre les fentes des fenêtres. Les écoliers les plus téméraires n'hésitent même pas à venir inspecter les travaux au plus près des travailleurs, et pas seulement lors de la pause récréation... \”Que peuvent bien faire ces étrangers, dans notre ancienne salle de travaux pratiques ?\”",
'256', 
"\” Une fille qui scie des planches ?!!. La plupart des philippins sont éduqués à travers une image précise des rôles homme\/femme. Les yeux ébahis des filles qui nous voyaient tous bricoler à part égale était une belle découverte ! En espérant que cela puisse permettre à tous de pouvoir être aussi libres que possible dans leur modèle social et de se construire sans barrière ni préjugé.\”" ,
'415', '431', '517'];

var enfance_img = ['026', '321', '324', '343','043',
"\”La chaleur, aussi présente dans l’air que dans les cœurs. Quand je repense à notre voyage, je vois du orange : une couleur chaude et paisible. La nature est luxuriante, le soleil brille presque toujours. A chaque classe sont associés un nom de fruit et une couleur flashy. La petite section A « mandarine », la grande section B « noix de coco ». De chacune d’elle émane une ambiance particulière enthousiaste, animée, joyeuse. La classe que nous avons réalisé resplendit d’un beau dégradé de bleu.\”",
 '412', '473', '486'];

var partage_img = ['031', '035',  '050', '058', '066', 
"\"Pour moi, la solidarité est ce qui nous fait lever la tête devant un chantier que l'on pensait très ambitieux dans le temps imparti, et dire \"On a déjà fait tout ça ?!\" C'est une force invisible qui ne se nourrit pas proportionnellement du nombre de personnes impliquées, mais se multiplie avec une logique bien à elle, et transforme tout défi en une victoire collective.\"", 
'072', '118', '149', '192', '272', '533'];

var merci_img = ['246', '323'];

function update_gallery(){
	if(window.innerHeight / window.innerWidth  > 1.3){
		update_gallery_all(3);
		set_img_height(3)
	}
	else if(window.innerWidth >= 1300){
		update_gallery_all(1);
		set_img_height(1)
	}
	else if(window.innerWidth >= 700 && window.innerWidth < 1300){
		update_gallery_all(2);
		set_img_height(2)
	}
	else if(window.innerWidth < 700){
		update_gallery_all(3);
		set_img_height(3)
	}
}
function update_gallery_all(opt){
	update_gallery_each(opt, 1);
	update_gallery_each(opt, 2);
	update_gallery_each(opt, 3);
	update_gallery_each(opt, 4);
	//update_gallery_each(opt, 5);
}
console.log($(".gallery_container"));


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
		
		if(pack_img[i].length < 10){
			var div = $('<div class="gallery_element">');
			var url = "url(images/" + folder + "/DSC_0" + pack_img[i] + ".jpg)";
			div.css({"background-image" : url});
		}
		else{
			var div = $('<div style="color : white; text-align : justify; font-family : vollkorn; font-style : italic;">');
			$(div).text(pack_img[i]);
		}
		$('#col-' + type + '-' + j).append($("<li>").append(div));
		
		/*var div = $('<div class="gallery_element">');
		var url = "url(images/" + folder + "/DSC_0" + pack_img[i] + ".jpg)";
		div.css({"background-image" : url});
		$('#col-' + type + '-' + j).append($("<li>").append(div));*/
	}
}

function getRandomArbitrary(min, max) {
 	return (max - min) + min;
  // return Math.random() * (max - min) + min;
}