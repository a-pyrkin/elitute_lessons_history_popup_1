
$(document).ready(function(){

        $('.bg-overlay-dark').hide();
        $('#dialog').hide();

    var carouselContainers = $('#dialog, .bg-overlay-dark');
    var onCarouselHiding = function() {
        $('.bg-overlay-dark').hide();
        $('#dialog').hide();
        carouselPositionIndex = 0;
        enableClosing = false;
        $('#dialog').removeClass('open');
    };



    $('.c-open-poup').click(function(){
     if ($('#dialog').hasClass('open')){
      onCarouselHiding(); 
      $('#dialog').removeClass('open')

      return false;
    }
      $('#dialog').addClass('open');
        carouselContainers.show();
        $('.c-open-poup').addClass('active');
    });


    $('.c-close-popup, .bg-overlay-dark').click(onCarouselHiding);
    
    $(document).on('keydown', function(e){
            if (e.keyCode == 27) {
            onCarouselHiding();
        }
    })
})