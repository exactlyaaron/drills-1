(function(){
  'use strict';

  $(document).ready(init);

  var sumArray = [];

  function init(){
    $('#sum').on('click', sumQuotes);
  }

  function sumQuotes(){
    var array = makeArray();
    return array;
  }

  function makeArray(){
    var array = $('#symbols').val().toUpperCase().split(',').map(strip).forEach(getQuote);
    return array;
  }

  function strip(x){
    return x.trim();
  }

  function getQuote(x){
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+x+'&callback=?';
    $.getJSON(url, function(data){
      sum(data.LastPrice);
    });
  }

  function sum(x){
    sumArray.push(x);
    var total = sumArray.reduce(function(a, b) {
      return a + b;
    });
    $('#sumnumber').text('$'+total);
  }

})();
