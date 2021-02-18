//alert("ESTA TODO OK");

$(function(){
    $('.bxslider').bxSlider({
      mode: 'vertical',
      captions: true,
      slideWidth: 1200,
      slideheigth: 300,
      responsive:true,
      auto:true,
      pause:3000,
      speed:2000,


    });
  });



  $('.filtro').on('click',function(){
    $('.filtro').removeClass('is-red');
    $('.filtro').addClass('is-white');
  
  

    $(this).addClass('is-red');
    $(this).removeClass('is-white');
   

  });

