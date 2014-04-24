(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#start').on('click', pullInput);
  }

  function pullInput(){
    var input = $('#numbers').val().split(',');
    makeArray(input[0] * 1, input[1] * 1).map(function(x){return x*x;}).filter(isEven).forEach(paint);
  }

  function makeArray(start, end){
    var array = [];
    for(var i = start; i <= end; i++){
      array.push(i);
    }
    return array;
  }

  function isEven(x){
    return x % 2 === 0;
  }

  function paint(x){
    $('#divs').append('<div>'+ x +'</div>');
  }

})();
