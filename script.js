$(document).ready(function(){
  var charCount = 0;

  $('textarea').bind('keyup', function(){
    charCount += 1;
    console.log(charCount);
    $('.counter').html("Word count: " + charCount);
  });
});