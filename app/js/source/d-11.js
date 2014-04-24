(function(){
  'use strict';

  $(document).ready(init);

  var selected;

  function init(){
    paintBigDiv();
    paintSmallDiv();
    $('#bigdiv').on('click', activateBigDiv);
    $('#smalldiv').on('click', activateSmallDiv);
    $('body').keydown(moveDiv);
  }

  function paintBigDiv(){
    var $div = $('<div id="bigdiv">');
    $div.css({'top':Math.floor(Math.random() * (window.innerHeight - 300)), 'left':Math.floor(Math.random() * (window.innerWidth - 300))});
    $('body').append($div);
  }

  function paintSmallDiv(){
    var $div = $('<div id="smalldiv">');
    $div.css({'top':Math.floor(Math.random() * ($('#bigdiv').height() - 40)), 'left':Math.floor(Math.random() * ($('#bigdiv').width() - 40))});
    $('#bigdiv').append($div);
  }

  function activateBigDiv(){
    $('#smalldiv').removeClass('active');
    $('#bigdiv').toggleClass('active');
    selected = $(this);
  }

  function activateSmallDiv(){
    $('#bigdiv').removeClass('active');
    $('#smalldiv').toggleClass('active');
    selected = $(this);
    event.stopPropagation();
  }

  function moveDiv(key){

    var cssTop = parseInt($(selected).css('top'));
    var cssLeft = parseInt($(selected).css('left'));
    var cssBottom = $(selected).parent().height() - $(selected).height();
    var cssRight = $(selected).parent().width() - $(selected).width();

      switch(key.keyCode){
      case 38:
        if(cssTop > 0){
          $(selected).css('top', '-=10');
        }
        break;
      case 40:
        if(cssTop < cssBottom){
          $(selected).css('top', '+=10');
        }
        break;
      case 37:
        if(cssLeft > 0){
          $(selected).css('left', '-=10');
        }
        break;
      case 39:
        if(cssLeft < cssRight){
          $(selected).css('left', '+=10');
        }
        break;
      default:
        return;
      }

      if (key.keyCode > 36 || key.keyCode < 41){
        key.preventDefault();
      }

  }


})();
