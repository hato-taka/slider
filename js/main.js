$(function(){
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
  });
  
  $('.title').click(function(){
    css("color":"red");
  });
});
