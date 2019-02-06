// jquery partie 3 - exercice 3
// Du code en jQuery va pouvoir être tapé ici !
//déclaration de la variable
$(document).ready(function(){
  var numberquery = 80;
  count = 0;
  $('#controlClick').on('click', function(){
    var guessNumber = $('#number').val();
    count++;
    if(guessNumber < numberquery){
      $('#guessCount').html('Nombre de tentative :'+ count);
      $('#solution').html('Plus');
    }
    else if(guessNumber > numberquery){
      $('#guessCount').html('Nombre de tentative :'+ count);
      $('#solution').html('Moins');
    }
    else{
      $('#guessCount').html('Nombre de tentative :'+ count);
      $('#solution').html('Correct!')
    }
  });
});
