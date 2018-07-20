$( document ).ready(function() {
	// Apertura tarjeta
    $( ".card" ).click(function(e) {
  		$( this ).toggleClass("card--open");
  			e.preventDefault();
	});

	// Like corazón
	$( ".card__like " ).click(function(e) {
  		$(".card__like" ).toggleClass("card__like--red");
  			e.preventDefault();
  			e.stopPropagation();
  			//return false;
	});

	// Botón seguir
	$( ".card__follow-btn" ).click(function() {
  		$( this ).toggleClass("card__follow-btn--following");
  			return false;
	});

});