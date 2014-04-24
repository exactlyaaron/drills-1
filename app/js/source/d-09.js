(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#randomize').on('click', randomize);
  }

  function randomize(){
    $('#random').css('background-color', generateColor());
  }

  function generateColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var a = (Math.random()*2);
    return 'rgba(' + r + ', ' + g + ', ' + b + ', '+ a + ')';
  }

})();
