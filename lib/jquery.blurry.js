(function($) {

  $.fn.blurry = function(strength) {
    var image = $(this)[0];
    var element = $('<canvas>')[0];
    element.width = image.width;
    element.height = image.height;
    
    var context = element.getContext("2d");
    context.drawImage(image, 0, 0, image.width, image.height);
    context.globalAlpha = 0.5; 

    for (var y = -strength; y <= strength; y += 2) {
      for (var x = -strength; x <= strength; x += 2) {
        context.drawImage(element, x, y);
        if (x >= 0 && y >= 0) {
          context.drawImage(element, -(x - 1), -(y - 1));
        }
      }
    }
    
    context.globalAlpha = 1.0;
    $(this).replaceWith(element);
  };

})(jQuery);
