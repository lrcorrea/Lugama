$("document").ready(function(){
    $('#slider_topo').DrSlider({
			userCSS: true,
            duration: 2000,
            showProgress: false,
            width: 1210,
            height: 450
	});
        // $('#slider_modal').DrSlider({
		// 	userCSS: true,
        //     duration: 200000,
        //     showNavigation: false,
        //     showProgress: false,
        //     width: 807,
        //     height: 590
		// });
    $("#slider").easySlider({
		auto: true, 
		continuous: true
	});
    $("#slider2").easySlider({ 
	    auto: false, 
		continuous: true,
        nextId: "slider1next",
		prevId: "slider1prev"
	});
    
    function modalAbre(){
		$("#modal").fadeIn(500);
	}
	setTimeout(modalAbre, 1000);
    
	$(".btn_modal").click(function(){
		$("#modal").fadeIn(500);
	});

	$(".fechar, #modal").click(function(event){
		if(event.target !== this){
			return;
		}
		$("#modal").fadeOut(500);
	});
    $(function(){
        $(window).scroll(function(){
            var window_scrolltop = $(this).scrollTop();
            
            $('.bg_fixed').each(function(){
                var obj = $(this);
                
            if ( window_scrolltop >= obj.position().top - obj.height() 
                && window_scrolltop <= obj.position().top + obj.height()) {
                
                var divisor = 4;
                
                if ( obj.is(':first-child') ) {
                    var bg_pos = ( window_scrolltop - obj.position().top ) / divisor;
                } else {
                    var bg_pos = ( window_scrolltop - obj.position().top + ( obj.height() - 100 ) ) / divisor;
                }
                
                obj.children('.text').css({
                    'bottom' : ( window_scrolltop - obj.position().top + 100 ) + 'px'
                });
                
            } 
            });
        });
    });
});