(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').on('click', chartQuote);
  }

  function chartQuote(){

  }


  // function getQuote(x){
  //   var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+x+'&callback=?';
  //   $.getJSON(url, function(data){
  //     sum(data.LastPrice);
  //   });
  // }

})();
