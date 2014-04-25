/* jshint camelcase:false */
/* global AmCharts:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    generateChart();
    $('#add').click(addZip);
  }

  var gaugeChart;
  function generateChart(){
      gaugeChart = AmCharts.makeChart('chartdiv', {
        'type': 'gauge',
    	'theme': 'none',
        'axes': [{
            'axisThickness':1,
             'axisAlpha':0.2,
             'tickAlpha':0.2,
             'valueInterval':2,
            'bands': [{
                'color': '#84b761',
                'endValue': 7,
                'startValue': 0
            }, {
                'color': '#fdd400',
                'endValue': 12,
                'startValue': 7
            }, {
                'color': '#cc4748',
                'endValue': 20,
                'innerRadius': '95%',
                'startValue': 12
            }],
            'bottomText': '0 km/h',
            'bottomTextYOffset': -20,
            'endValue': 20
        }],
        'arrows': [{}]
    });
  }

  function addZip(){
    chartSpeed();
    setInterval(chartSpeed, 2000);
  }

  function chartSpeed(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/bd42f70292516b80/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, function(conditions){
      addSpeedToChart(conditions);
    });
  }

  function addSpeedToChart(conditions){
    var value = conditions.current_observation.wind_mph;
    gaugeChart.arrows[0].setValue(value);
    gaugeChart.axes[0].setBottomText(value + ' mph');
  }




})();
