(function(){
  'use strict';

  $(document).ready(init);


  function init(){
    $('#get').click(addQuote);
  }

  function addQuote(){
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';

    $.getJSON(url, function(data){
      $('#quotes').append('<div class="quote-wrapper"><div class="symbol">'+data.Symbol+'</div><div class="company-name">'+data.Name+'</div><div class="price">$'+data.LastPrice+'</div></div>');
    });
  }



})();
