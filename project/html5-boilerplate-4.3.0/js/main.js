$(function () {

    $('.learn-more').mouseover(function(){
        $(this).find('.learn-more__dark').css({'display':'block'}).stop(true , false).fadeIn( 100 );
    });

    $('.learn-more').mouseout(function(){
        $(this).find('.learn-more__dark').stop(true , false).fadeOut( 100 );
    });

    });
