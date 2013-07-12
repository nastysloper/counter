$(document).ready(function(){
  var charcount = 0;
  $('.counter').html('character count: ' + charcount);
  
  $('textarea').bind('keyup', function(){
    var charactersUsed = $(this).val().length;
    $('.counter').html('character count: ' + charactersUsed);
  });

});