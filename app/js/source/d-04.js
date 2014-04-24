(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('body').on('click', '#start', makeArrays);
  }

  function makeArrays(){
    var numbers = $('#numbers').val().split('-');
    var array1 = numbers[0].split(',');
    var array2 = numbers[1].split(',');
    assignElements(array1, array2);
  }

  function assignElements(a, b){
    for(var i = 0; i<a.length; i++){
      var x = a[i];
      var y = b[i];
      var z = exponentiate(x, y);
      paint(x, y, z);
    }
  }

  function exponentiate(base, exp){
    return Math.pow(base, exp);
  }

  function paint(base, exp, result){
    var div = '<div><div class="top">'+ base + '<sup>' + exp + '</sup></div><div class="bottom">'+ result +'</div></div>';
    $('#divs').append(div);
  }

})();
