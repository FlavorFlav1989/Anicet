window.onload = function() { // add window.onload here and set it euqal to a function
  // Get the modal
  var modal = document.getElementById('myModal');
  var modalImg = document.getElementById("img01");
  var isOnImage = false;
  $("#img01").mouseenter(function(){isOnDiv=true;});
  $("#img01").mouseleave(function(){isOnDiv=false;});
 $('.gallery_element').click(function(){
	modal.style.display = "block";
	var img = $(this).css('background-image');
	img = img.replace(/(url\(|\)|")/g, '');
	modalImg.src = img;
 });

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  document.body.addEventListener('click', function(){
	if(!isOnImage)
		modal.style.display = "none";
  }, true); 
} // close the function