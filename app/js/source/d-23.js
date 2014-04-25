/* jshint camelcase:false */
/* global AmCharts:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeGraph();
    $('#add').click(addTemp);
  }

  var chart;
  function makeGraph(){

    chart = AmCharts.makeChart('graph', {
      'type': 'serial',
      'theme': 'light',
      'dataProvider': [],
      'valueAxes': [{
          'gridColor':'#FFFFFF',
      'gridAlpha': 0.2,
      'dashLength': 0
      }],
      'gridAboveGraphs': true,
      'startDuration': 1,
      'graphs': [{
          'balloonText': '[[category]]: <b>[[value]]</b>',
          'fillAlphas': 0.8,
          'lineAlpha': 0.2,
          'type': 'column',
          'valueField': 'temperature'
      }],
      'chartCursor': {
          'categoryBalloonEnabled': false,
          'cursorAlpha': 0,
          'zoomable': false
      },
      'categoryField': 'zip',
      'categoryAxis': {
          'gridPosition': 'start',
          'gridAlpha': 0
      },
    'exportConfig':{
      'menuTop': 0,
      'menuItems': [{
        'icon': '/lib/3/images/export.png',
        'format': 'png'
        }]
    }
    });
  }

  var zip;
  function addTemp(){
    zip = $('#zip').val().trim();
    chartTemp(zip);
  }

  function chartTemp(zip){
    var url = 'http://api.wunderground.com/api/bd42f70292516b80/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, function(conditions){
      addTempToChart(conditions);
    });
  }

  function addTempToChart(conditions){
    debugger;
    var condition = {};
    condition.zip = zip;
    condition.temperature = conditions.current_observation.temp_f;

    chart.dataProvider.push(condition);
    chart.validateData();
  }




})();
