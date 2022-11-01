
$(document).on('ready', function() {
    "use strict"; //Start of Use Strict
    var menu_li = $('.navbar-nav li a');
    var collapse = $('.navbar-collapse');   
    var top_nav = $('#top-nav');


    //MENU SCROLL
    if (top_nav.length) {
        var x = top_nav.offset().top;
        if (x > 50) {
            top_nav.fadeIn();
        } else {
            top_nav.fadeOut();
        }
        $(document).on('scroll', function() {
            var y = $(this).scrollTop();
            if (y > 50) {
                top_nav.fadeIn();
            } else {
                top_nav.fadeOut();
            }
        });
    }

    //RESPONSIVE MENU SHOW AND HIDE FUNCTION
    if (menu_li.length) {
        menu_li.on("click", function(event) {
			var disp = $(".navbar-toggler").css('display'); 
			if( !$(".navbar-toggler").hasClass('collapsed') ){			
				if(collapse.hasClass('show')){
					collapse.removeClass('show').slideUp( "slow");
				}
			}            
        });    
    }	
	

    //MENU BAR SMOOTH SCROLLING FUNCTION
    const menu_list = $('.navbar-nav');
    if (menu_list.length) {
        menu_list.on("click", ".pagescroll", function(event) {
            event.stopPropagation();
            event.preventDefault();
            const hash_tag = $(this).attr('href');
            if ($(hash_tag).length) {
                $('html, body').animate({
                    scrollTop: $(hash_tag).offset().top - 0
                }, 2000);
            }
            return false;
        });
    }
	
	// ===== Scroll to Top ==== 
	$(window).on('scroll', function() {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$('#return-to-top').fadeIn(200);    // Fade in the arrow
		} else {
			$('#return-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	$('#return-to-top').on("click", function() {      // When arrow is clicked
		$('body,html').animate({
			scrollTop : 0                       // Scroll to top of body
		}, 500);
	});

    //CLINIC HTML - GALLERY POPUP
    const gallery = $('.popup-gallery');
    if (gallery.length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    }
	
	//CLINIC HTML - DATEPICKER//
    const datepicker = $('.datepicker');
    if (datepicker.length) {
        $(".datepicker").datepicker({
            autoclose: true,
            format: 'dd/mm/yyyy',
            todayHighlight: true
        }).datepicker();
		
	$(document).on("change", ".datepicker", function(event) { 
			 event.preventDefault();
			 $(this).find('.form-input').removeClass('error');
			 $(this).find('label.error').css('display','none');
		 });
    }
	

    //CONTACT FORM VALIDATION	
    if ($('.book-form, .header-form').length) {
        $('.book-form, .header-form').each(function() {
            $(this).validate({
                errorClass: 'error',
                submitHandler: function(form) {
                    $.ajax({
                        type: "POST",
                        url: "mail/mail.php",
                        data: $(form).serialize(),
                        success: function(data) {
                            if (data) {
                                $('.sucessMessage').html('Mail Sent Successfully!!!');
                                $('.sucessMessage').show();
                                $('.sucessMessage').delay(3000).fadeOut();
                            } else {
                                $('.failMessage').html(data);
                                $('.failMessage').show();
                                $('.failMessage').delay(3000).fadeOut();
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            $('.failMessage').html(textStatus);
                            $('.failMessage').show();
                            $('.failMessage').delay(3000).fadeOut();
                        }
                    });
                }
            });
        });
    }

    return false;
    // End of use strict
});