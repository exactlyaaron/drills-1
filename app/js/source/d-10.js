(function(){
  'use strict';

  $(document).ready(init);

  var clock;
  var timer;

  function init(){
    clearInterval(timer);
    $('#start').on('click', start);
    $('#stop').on('click', stop);
    clock = 0;
  }

  function count(){
    clock++;
    $('#clock').text(clock);
  }

  function start(){
    timer = setInterval(count, 1000);
    $('#clock').text(clock);
  }

  function stop(){
    clearInterval(timer);
  }

})();
