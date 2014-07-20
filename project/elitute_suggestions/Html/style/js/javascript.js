$(document).ready(function(){

    var carouselPositionIndex = 0;

    var sliderItemWidth = 407;

    var sliderCountVisibleItems = 2;

    var sliderTotalItemsCount = $('.c-content-slider .item').length;

    var sliderContent = $('.c-content-slider');

    var carouselLists = sliderContent.children().length - 2;

    var itemWidth = itemWidth ? itemWidth : $(".item").first().outerWidth();

    var RecalculateSliderContainer = function () {
        sliderContent.css("width", (itemWidth + 18) * $(".item").length);
        carouselLists = sliderContent.children().length - 2;
    };

    RecalculateSliderContainer();


    $('.c-slider-control-right').click(function(){
         if ($(this).hasClass('disable')){
          return false;
        }

        $('.c-slider-control-right').removeClass('disable');
        $('.c-slider-control-left').removeClass('disable');

        var countNextItems = sliderTotalItemsCount - carouselPositionIndex - sliderCountVisibleItems;
        var slideItems = countNextItems >=2 ? 2 : 1;
        // alert(carouselPositionIndex);
        // alert(countNextItems);
        // alert(slideItems);

        if (carouselPositionIndex >= 0 && carouselPositionIndex < carouselLists && !$('.c-content-slider').hasClass('animate')) {
          $('.c-content-slider').addClass('animate');
          var oldLeftMargin = parseInt($('.c-content-slider').css('margin-left'));
          $('.c-content-slider').animate({'margin-left': (oldLeftMargin - sliderItemWidth*slideItems - 10) + 'px'},407,'swing',function(){$('.c-content-slider').removeClass('animate');});
          carouselPositionIndex = carouselPositionIndex + slideItems;
        }
        if (carouselPositionIndex < 0 || carouselPositionIndex >= carouselLists) {
          $('.c-slider-control-right').addClass('disable');
        }
    }); 

    $('.c-slider-control-left').click(function(){
          if ($(this).hasClass('disable')){
          return false;
        }
        $('.c-slider-control-right').removeClass('disable');
        $('.c-slider-control-left').removeClass('disable');

        var countNextItems = carouselPositionIndex;
        var slideItems = countNextItems >=2 ? 2 : 1;

        if (carouselPositionIndex > 0 && !$('.c-content-slider').hasClass('animate')) {
          $('.c-content-slider').addClass('animate');
          var oldLeftMargin = parseInt($('.c-content-slider').css('margin-left'));
          $('.c-content-slider').animate({'margin-left': (oldLeftMargin + sliderItemWidth*slideItems + 10) + 'px' },407,'swing',function(){$('.c-content-slider').removeClass('animate');});
            carouselPositionIndex = carouselPositionIndex - slideItems;
        }
        if (carouselPositionIndex <= 0) {
            $('.c-slider-control-left').addClass('disable');
        }
    }); 

    if (carouselPositionIndex == 0){
      $('.c-slider-control-left').addClass('disable');
    }else{
      $('.c-slider-control-left').removeClass('disable');
    };

    if (carouselPositionIndex == carouselLists){
      $('.c-slider-control-right').addClass('disable');
    }else{
      $('.c-slider-control-right').removeClass('disable');
    };
   

});

