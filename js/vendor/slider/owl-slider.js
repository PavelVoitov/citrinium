// JavaScript Document
$(document).on('ready', function() {

	  // Custom Navigation Events
	  $(".next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
		owl.trigger('owl.prev');
	  })
	  $(".play").click(function(){
		owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
	  })
	  $(".stop").click(function(){
		owl.trigger('owl.stop');
	  })

	  // CLININC TESTIMONIAL CAROUSEL
	  const owl = $("#owl-demo2");
	  owl.owlCarousel({
		  autoPlay: 4000,
		  items : 2, //2 items above 1000px browser width
		  itemsDesktop : [1920,2], //2 items between 1920px and 901px
		  itemsDesktopSmall : [900,2], // 2 items between 900px and 641px
		  itemsTablet: [640,1], //1 item between 640 and 0
		  itemsMobile : [380,1]
	  });

});