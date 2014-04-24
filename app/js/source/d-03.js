(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('body').on('click', '#start', printResult);
  }

  function printResult(){
    makeArray().map(fourth).forEach(makeDiv);
  }

  function makeArray(){
    var numbers = $('#numbers').val();
    var array = numbers.split(',');
    return array;
  }

  function fourth(x){
    return Math.pow(x,4);
  }

  function makeDiv(number){
    $('#divs').append('<div>' + number + '</div>');
  }

})();
