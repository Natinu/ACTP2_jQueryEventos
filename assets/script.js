$( document ).ready(function() {
	// 2. Apertura tarjeta
    $( ".card" ).click(function(e) {
  		$( this ).toggleClass("card--open");
  			e.preventDefault();
	});

	// 3. Like corazón
	$( ".card__like " ).click(function(e) {
  		$(".card__like" ).toggleClass("card__like--red");
  			e.preventDefault();
  			e.stopPropagation();
  			//return false;
	});

	// 4. Botón seguir
	$( ".card__follow-btn" ).click(function() {
  		$( this ).toggleClass("card__follow-btn--following");
  			return false;
	});

	// 5. 
	$("#image" ).change(function() {
		$(".create__image").attr("src", "assets/images/squared/" + this.value);
			return false;
	});
  		


});