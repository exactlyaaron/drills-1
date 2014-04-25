(function(){
  'use strict';

  $(document).ready(init);


  function init(){
    $('#get').click(getPosition);
  }

  function getPosition(){
    var symbol = $('#symbol').val().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';

    $.getJSON(url, function(data){
      var shares = $('#shares').val();
      var sharesDiv = '<div>SHARES: ' + shares + '</div>';
      var priceDiv = '<div>PRICE: $' + data.LastPrice + '</div>';
      var positionDiv = '<div>POSITION: $' + calculatePosition(shares, data.LastPrice) + '</div>';
      $('#position-wrapper').append(sharesDiv+priceDiv+positionDiv);
    });
  }

  function calculatePosition(shares, price){
    return (shares * price).toFixed(2);
  }



})();
