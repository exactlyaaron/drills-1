(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('body').on('click', '#equals', printResult);
  }

  function printResult(){
    var num1 = $('#num1').val() * 1;
    var num2 = $('#num2').val() * 1;
    var result = add(num1, num2);

    $('#result').text(result);
  }

  function add(num1, num2){
    return num1 + num2;
  }


})();
