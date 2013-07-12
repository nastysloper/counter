$(document).ready(function(){
  var charCount = 0;
  $('.counter').html('character count: ' + charCount);

  $('textarea').bind('keyup', function(){
    charCount += 1;
    console.log(charCount);
    $('.counter').html('character count: ' + charCount);
  });
});