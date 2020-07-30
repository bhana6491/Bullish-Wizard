$('.div').hide();
$('.high-a').hide();
$('.high-d').hide();
$('.low-d').hide();
$('.low-a').hide();
$('.Close').hide();
$('.change').hide();
$('.volume').hide();
$('.ticker').hide();
$('#stockquotes').css('padding-bottom','2%');



$('.High-a').click(function(){
  $('.high-a').fadeIn();
  window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
  });
  $('#stockquotes').css('padding-bottom','5%');
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
  $('#stockquotes').css('padding-bottom','5%');
  $('.low-a').fadeIn();
  window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
  });
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
  $('#stockquotes').css('padding-bottom','5%');
  $('.ticker').fadeIn();
  window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
  });
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
  $('#stockquotes').css('padding-bottom','5%');
  $('.div').fadeIn();
  window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
  });
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
  $('#stockquotes').css('padding-bottom','5%');
  $('.high-d').fadeIn();
  window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
  });
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
  $('#stockquotes').css('padding-bottom','5%');
  $('.low-d').fadeIn();
  window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
  });
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
  $('#stockquotes').css('padding-bottom','5%');
  $('.Close').fadeIn();
  window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
  });
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
  $('#stockquotes').css('padding-bottom','5%');
  $('.change').fadeIn();
  window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
  });
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
  $('#stockquotes').css('padding-bottom','5%');
  $('.volume').fadeIn();
  window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
  });
  $('.div').hide();
  $('.high-a').hide();
  $('.high-d').hide();
  $('.low-d').hide();
  $('.low-a').hide();
  $('.Close').hide();
  $('.change').hide();
  $('.ticker').hide();
})
