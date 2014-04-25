/* jshint camelcase:false */
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(getWeather);
  }

  function getWeather(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/bd42f70292516b80/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, weather);
  }

  function weather(conditions){
    var $img = $('<img>');
    $img.attr('src', conditions.current_observation.icon_url);
    $('#weather').append($img);

    var $div = $('<div>');
    $div.text(conditions.current_observation.temperature_string);
    $('#weather').append($div);

    console.log(conditions);
  }

})();
