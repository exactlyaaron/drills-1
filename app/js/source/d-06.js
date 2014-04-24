(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#start').on('click', lastThree);
  }

  function lastThree(){
    var input = $('#numbers').val().split(',');
    makeArray((input[0] * 1), (input[1] * 1)).slice(-3).forEach(paint);
  }

  function makeArray(start, end){
    var array = [];
    for(var i = start; i <= end; i++){
      array.push(i);
    }
    return array;
  }

  function paint(x){
    $('#divs').append('<div>'+ x +'</div>');
  }

})();
