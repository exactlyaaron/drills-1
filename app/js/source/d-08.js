(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#toggle').on('click', toggleColor);
  }

  function toggleColor(){
    $('#toggle').toggleClass('green');
  }

})();
