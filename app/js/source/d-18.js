(function(){
  'use strict';

  $(document).ready(init);

  var timer;

  function init(){
    $('#get').on('click', getStocks);
  }

  function makeArray(){
    var array = $('#symbols').val().toUpperCase().split(',').map(strip).sort();
    return array;
  }

  function strip(x){
    return x.trim();
  }

  function getStocks(){
    generateTable();
    paintPrices();
    timer = setInterval(paintPrices, 5000);
  }

  function generateTable(){
    var array = makeArray();
    for(var i = 0; i < array.length; i++){
      var symbol = array[i];

      var $tr = $('<tr data-name='+symbol+'>');
      var tdSymbol = '<td>'+symbol+'</td>';
      var tdQuote = '<td class="price"></td>';

      $tr.append(tdSymbol + tdQuote);
      $('tbody').append($tr);
    }
  }

  function paintPrices(){
    var array = makeArray();

    for(var i = 0; i < array.length; i++){
      var symbol = array[i];
      var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
      getQuote(url, symbol);
    }
  }

  function getQuote(url, symbol) {
    $.getJSON(url, function(data){
      $('tbody tr[data-name='+symbol+'] td.price').text('$'+data.LastPrice);
      console.log('i refreshed');
    });
  }


})();
