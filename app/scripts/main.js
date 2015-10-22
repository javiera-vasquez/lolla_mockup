if(Modernizr.testAllProps('pointerEvents') === false) {
	// add fallback for IE
	$('html').addClass('pointerEvents');
}

$(window).load(function() {
	// Set height
	$('figure').each(function(){
		$(this).css('height', $('figure').height());
	});
});


