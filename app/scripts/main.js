$(document).ready(function() {
	// Add fallback for IE
	if(!Modernizr.testAllProps('pointerEvents')) {
		$('html').addClass('pointerEvents');
	}

	//Parallax effect
	// $(window).scroll(function() {
	// 	var scrollTop = $(this).scrollTop();
	// 	var heightVod = Math.round($('#vod').offset().top) - 250;
	// 	var heightLineup = Math.round($('#line-up').offset().top) - 500;
	// 	// var vodScrollTop = 5;
	// 	// var lineUpScrollTop = 100;
	// 	// console.log($(this).scrollTop(), sVod, sLineup);
	// 	// While I'am into VOD
	// 	if(scrollTop > heightVod && scrollTop < heightLineup) {
	// 		console.log('VOD');
	//     if (scrollTop > vodScrollTop) {
	//         $('.ovnis').animate({left: '-=10'}, 10);
	//     } else {
	//         $('.ovnis').animate({right: '+=10'}, 10);
	//     }
	// 	}
	// 	// While I'am into Line Up
	// 	if(scrollTop > heightLineup && scrollTop > heightVod) {
	// 		console.log('Line up');
	//     if (scrollTop > lineUpScrollTop) {
	//         $('#line-up .hover-image').before().css('width', '2000%')
	//     } else {
	//         $('#line-up .hover-image').before().css('width', '50%')
	//     }
	// 	}
	// });
	// Re determinate size on viewport resize
});

// Determine image height in windows load
$(window).load(function() {
	// Set height
	$('figure').each(function(){
		$(this).css('height', $('figure').height());
	});
});


// var lastScrollTop = 0;
// $("div").scroll(function (event) {
//     var st = $(this).scrollTop();
//     if (st > lastScrollTop) {
//         $('img').animate({top: '-=10'}, 10);
//     } else {
//         $('img').animate({top: '+=10'}, 10);
//     }
//     lastScrollTop = st;
// });
