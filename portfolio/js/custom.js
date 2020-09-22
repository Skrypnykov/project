$(window).scroll(function(){
    var docscroll=$(document).scrollTop();
    if(docscroll>$(window).height()){
      $('nav').css({'height': $('nav').height(),'width': $('nav').width()}).addClass('fixed');
    }else{
      $('nav').removeClass('fixed');
    }
});
