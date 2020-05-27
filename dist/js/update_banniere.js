$( document ).ready(function() {
update_banniere();
});

$( window ).resize(function() {
update_banniere();
	
});

function update_banniere(){
	if($(window).width() < 499){
		$('.banniere').css('width', '196px');
	}
	else if($(window).width() < 900){
		$('.banniere').css('width', '296px');
	}
	else{
		$('.banniere').css('width', '396px');
	}
}