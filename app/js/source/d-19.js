(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#sum').on('click', sumQuotes);
  }

  function sumQuotes(){
    var symbols = $('#symbols').val().toUpperCase().split(',').map(strip).forEach(getQuote);
    return symbols;
  }

  function strip(symbol){
    return symbol.trim();
  }
  
  var sumTotal = 0;
  var count = 0;
  function getQuote(symbol, index, symbols){
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(data){
      count++;
      if(count === symbols.length){
        sum(data.LastPrice);
      }
    });
  }

  function sum(x){
    sumTotal += x;
    $('#sumnumber').text('$'+sumTotal);
  }

})();
