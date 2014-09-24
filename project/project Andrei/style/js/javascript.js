/* Slider news*/

$(document).ready(function(){

$('.c-slider-control-panel-list li').click(function(){
  $('.c-slider-content-footer-line').animate({'opacity':'0','bottom':'-10px'},800);
  var a = $(this).index();
  $('.c-slider-control-panel-list li').removeClass('active-slider-list').addClass('not-active-slider-list');
  $('.c-slider-control-panel-list li').eq(a).removeClass().addClass('active-slider-list');
  a -= 1; 
  var leftCss = (1194*(-a))+'px';
  $('.c-slider-content').animate({'margin-left':leftCss},1000);
  $('.c-slider-content-footer-line').animate({'opacity':'1','bottom':'0'},800);
});	

});

/* /Slider news*/