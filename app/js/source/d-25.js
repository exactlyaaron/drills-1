/* jshint camelcase:false */
/* global AmCharts:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    generateChart();
    $('#add').click(addStocks);
  }

  function addStocks(){
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(quote){
      addStockToChart(quote);
    });
  }

  function calculateStockValue(price, numberOfShares){
    return price * numberOfShares;
  }

  function addStockToChart(quote){

    var stock = {};
    var numberOfShares = $('#shares').val().trim() * 1;

    debugger;

    var test = chart.dataProvider.filter(function(stock){
      return stock.symbol === quote.Name;
    });

    if(test.length){
      test[0].stockValue += calculateStockValue(quote.LastPrice, numberOfShares);
    } else {
      stock.symbol = quote.Name;
      stock.stockValue = calculateStockValue(quote.LastPrice, numberOfShares);
      chart.dataProvider.push(stock);

    }

    chart.validateData();

  }

  var chart;
  function generateChart(){
      chart = AmCharts.makeChart('chartdiv', {
        'type': 'pie',
    	'theme': 'dark',
        'titles': [{
            'text': 'Your Stocks',
            'size': 16
        }],
        'dataProvider': [{
        }],
        'valueField': 'stockValue',
        'titleField': 'symbol',
        'startEffect': 'elastic',
        'startDuration': 2,
        'labelRadius': 15,
        'innerRadius': '50%',
        'depth3D': 10,
        'balloonText': '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
        'angle': 15,
        'exportConfig':{
          menuItems: [{
          icon: '/lib/3/images/export.png',
          format: 'png'
          }]
    	}
    });
  }

})();
