(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#start').on('click', start);
  }

  function start(){
    var array = makeArray().map(strip).map(exponentiate).forEach(paint);
    console.log(array);
  }

  function makeArray(){
    var string = $('#numbers').val();
    var array = string.split(',');
    return array;
  }

  function strip(x){
    return x.trim();
  }

  function square(x){
    return x*x;
  }

  function cube(x){
    return x*x*x;
  }

  function exponentiate(x){

    if(isOdd(x)){
      return cube(x);
    } else {
      return square(x);
    }
  }

  function isOdd(x){
    return x % 2;
  }

  function paint(x){
    if(isOdd(x)){
      var $odd = $('<div class="odd">' + x + '</div>');
      $('#divs').append($odd);
    } else {
      var $even = $('<div class="even">' + x + '</div>');
      $('#divs').append($even);
    }
  }


})();
