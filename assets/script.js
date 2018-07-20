$( document ).ready(function() {
	//Apertura tarjeta
    $( ".card" ).click(function() {
  		$( this ).toggleClass("card--open")
	});

	// Like corazón
	$( ".card__like " ).click(function(e) {
  		$( this ).toggleClass("card__like--red")
  		e.preventDefault();

	});

	//

});