$(function(){
  $('.slider').slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
  });
  
  $('.title').click(function(){
    $(this).css({
      'color':'red',
      'font-size':'2rem',
    });
  });
});
