$(window).scroll(function(e) {

    var distanceScrolled = $(this).scrollTop();

    $('.stock-header-header').css('-webkit-filter', 'blur('+distanceScrolled/60+'px)');
    $('.bond-header-header').css('-webkit-filter', 'blur('+distanceScrolled/60+'px)');


});



$(".navbar-toggler").click(function(){
  $("a").removeClass("effect");

});





$('.div').hide();
$('.high-a').hide();
$('.high-d').hide();
$('.low-d').hide();
$('.low-a').hide();
$('.Close').hide();
$('.change').hide();
$('.volume').hide();
$('.ticker').hide();
$('#stockquotes').css('padding-bottom','5%');



$('.High-a').click(function(){
  $('.high-a').fadeIn();

  $('.div').hide();
  $('.high-d').hide();
  $('.low-d').hide();
  $('.low-a').hide();
  $('.Close').hide();
  $('.change').hide();
  $('.volume').hide();
  $('.ticker').hide();

})
$('.Low-a').click(function(){
  $('.low-a').fadeIn();
  $('.div').hide();
  $('.high-a').hide();
  $('.high-d').hide();
  $('.low-d').hide();
  $('.Close').hide();
  $('.change').hide();
  $('.volume').hide();
  $('.ticker').hide();
})
$('.Ticker').click(function(){
  $('.ticker').fadeIn();

  $('.div').hide();
  $('.high-a').hide();
  $('.high-d').hide();
  $('.low-d').hide();
  $('.low-a').hide();
  $('.Close').hide();
  $('.change').hide();
  $('.volume').hide();
})
$('.Div').click(function(){
  $('.div').fadeIn();

  $('.high-a').hide();
  $('.high-d').hide();
  $('.low-d').hide();
  $('.low-a').hide();
  $('.Close').hide();
  $('.change').hide();
  $('.volume').hide();
  $('.ticker').hide();
})
$('.High-d').click(function(){
  $('.high-d').fadeIn();

  $('.div').hide();
  $('.high-a').hide();
  $('.low-d').hide();
  $('.low-a').hide();
  $('.Close').hide();
  $('.change').hide();
  $('.volume').hide();
  $('.ticker').hide();
})
$('.Low-d').click(function(){
  $('.low-d').fadeIn();

  $('.div').hide();
  $('.high-a').hide();
  $('.high-d').hide();
  $('.low-a').hide();
  $('.Close').hide();
  $('.change').hide();
  $('.volume').hide();
  $('.ticker').hide();
})
$('.closes').click(function(){
  $('.Close').fadeIn();

  $('.div').hide();
  $('.high-a').hide();
  $('.high-d').hide();
  $('.low-d').hide();
  $('.low-a').hide();
  $('.change').hide();
  $('.volume').hide();
  $('.ticker').hide();
})
$('.Change').click(function(){
  $('.change').fadeIn();

  $('.div').hide();
  $('.high-a').hide();
  $('.high-d').hide();
  $('.low-d').hide();
  $('.low-a').hide();
  $('.Close').hide();
  $('.volume').hide();
  $('.ticker').hide();
})
$('.Volume').click(function(){
  $('.volume').fadeIn();

  $('.div').hide();
  $('.high-a').hide();
  $('.high-d').hide();
  $('.low-d').hide();
  $('.low-a').hide();
  $('.Close').hide();
  $('.change').hide();
  $('.ticker').hide();
})
