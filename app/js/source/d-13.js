(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#start').on('click', start);
  }

  function start(){

    var sum = addElements();
    console.log(sum);

    var prd = multiplyElements();
    console.log(prd);

  }

  function makeOuterArray(){
    var outerArray = $('#numbers').val().split('-');
    return outerArray;
  }

  function makeAddArray(){
    var outerArray = makeOuterArray();
    var arrayAdd = outerArray[0].split('+').map(strip);
    return arrayAdd;
  }

  function makeProductArray(){
    var outerArray = makeOuterArray();
    var arrayProduct = outerArray[1].split('*').map(strip);
    return arrayProduct;
  }

  function strip(x){
    return x.trim();
  }

  function addElements(){
    var array = makeAddArray();
    var sum = 0;
    for(var i = 0; i < array.length; i++){
      if(array[i] % 2 !== 0){
        sum = sum + array[i] * 1;
      }
    }
    return sum;
  }

  function multiplyElements(){
    var array = makeProductArray();
    var prd = array[0];
    for(var i = 1; i < array.length; i++){
      if(array[i] % 2 !== 0){
        prd = prd * array[i];
      }
    }
    return prd;
  }



})();
