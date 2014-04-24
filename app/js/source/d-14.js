(function(){
  'use strict';

  $(document).ready(init);

  var selected;
  var selectedArea;

  function init(){
    $('#rectangulate').on('click', rectangulate);
    $('body').on('click', '.box', activate);
    $('body').keydown(moveDiv);
  }

  function rectangulate(){
    var $div = $('<div class="box" id="'+ $('body div').length +'">');
    $div.css({
      'top': generateYPosition(),
      'left': generateXPosition(),
      'background-color': generateColor(),
      'border': '1px dashed #333',
      'width': generateWidth() + 'px',
      'height': generateHeight() + 'px',
      'position': 'absolute',
      'z-index':1
    });

    $('body').append($div);
  }

  function generateYPosition(){
    var y = Math.floor(Math.random() * (window.innerHeight - generateHeight()));
    return y;
  }

  function generateXPosition(){
    var x = Math.floor(Math.random() * (window.innerWidth - generateWidth()));
    return x;
  }

  function generateWidth(){
    var width = Math.floor(Math.random() * 200);
    return width;
  }

  function generateHeight(){
    var height = Math.floor(Math.random() * 200);
    return height;
  }

  function generateColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var a = (Math.random()*2);
    return 'rgba(' + r + ', ' + g + ', ' + b + ', '+ a + ')';
  }

  function activate(){
    selected = $(this);
    if(selected.hasClass('active')){
      $(selected).removeClass('active');
    } else {
      $('.box').removeClass('active');
      $(selected).toggleClass('active');
      $(selected).css('z-index', 1000);
    }
  }

  function moveDiv(key){
    var cssTop = parseInt($(selected).css('top'));
    var cssLeft = parseInt($(selected).css('left'));
    var cssBottom = $(selected).parent().height() - $(selected).height();
    var cssRight = $(selected).parent().width() - $(selected).width();

    var width = parseInt($(selected).css('width'));
    var height = parseInt($(selected).css('height'));

    selectedArea = totalArea(xSpace(cssLeft, width),ySpace(cssTop, height));
    console.log(selectedArea);

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

  function xSpace(left,width){
    var array = [];
    for(var i = left; i <= (left + width); i++){
      array.push(i);
    }
    return array;
  }

  function ySpace(top,height){
    var array = [];
    for(var i = top; i <= (top + height); i++){
      array.push(i);
    }
    return array;
  }

  function totalArea(array1,array2){
    return array1.concat(array2);
  }




  // var anyMatchInArray = function (target, toMatch) {
  //
  //   var found, targetMap, i, j, cur;
  //
  //   var target = totalArea();
  //
  //   found = false;
  //   targetMap = {};
  //
  //   // Put all values in the `target` array into a map, where
  //   //  the keys are the values from the array
  //   for (i = 0, j = target.length; i < j; i++) {
  //       cur = target[i];
  //       targetMap[cur] = true;
  //   }
  //
  //   // Loop over all items in the `toMatch` array and see if any of
  //   //  their values are in the map from before
  //   for (i = 0, j = toMatch.length; !found && (i < j); i++) {
  //       cur = toMatch[i];
  //       found = !!targetMap[cur];
  //       // If found, `targetMap[cur]` will return true, otherwise it
  //       //  will return `undefined`...that's what the `!!` is for
  //   }
  //
  //   return found;
  // };







})();
