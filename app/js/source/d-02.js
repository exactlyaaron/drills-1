(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('body').on('click', '#upperlower', printResult);
  }

  function printResult(){
    $('#divs').append(makeArray().map(makeDiv));
  }

  function makeArray(){
    var array = $('#words').val().split(',');
    return array;
  }

  function isOdd(word){
    return word.length % 2;
  }

  function makeDiv(word){

    if(isOdd(word)){
      return '<div class="odd">' + word + '</div>';
    } else {
      return '<div class="even">' + word + '</div>';
    }
  }
})();
