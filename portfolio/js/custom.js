$(document).ready(function(){
    $("header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

jQuery(window).scroll(function(){
    var $sections = $('section');
	$sections.each(function(i,el){
       	var top  = $(el).offset().top-100;
       	var bottom = top +$(el).height();
       	var scroll = $(window).scrollTop();
       	var id = $(el).attr('id');
   		if( scroll > top && scroll < bottom){
           	$('.nav-item-link.active').removeClass('active');
			$('.nav-item-link[href="#'+id+'"]').addClass('active');
       	}
    })
 });
