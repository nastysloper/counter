$(document).ready(function(){
  var charcount = 0;
  $('.counter').html(charcount);
  $('textarea').bind('keyup', function(){
    var charactersUsed = $(this).val().length;
    $('.counter').html(charactersUsed);
  });

});