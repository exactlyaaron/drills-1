(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#start').on('click', start);
  }

  function start(){
    var input = $('#numbers').val().split(',');
    var array = makeArray(input[0] * 1, input[1] * 1);

    while(array.length > 1){
      var first = array.shift() * 1;
      var last = array.pop() * 1;
      var sum = addEnds(first,last);
      paint(sum);
    }

    if(array.length === 1){
      paint(array);
    }
  }

  function makeArray(start, end){
    var array = [];
    for(var i = start; i <= end; i++){
      array.push(i);
    }
    return array;
  }

  function addEnds(first,last){
    return first + last;
  }

  function paint(x){
    $('#divs').append('<div>'+ x +'</div>');
  }














})();
