jQuery.fn.instruction = function(instruction) {
  return this.each(function(input){
    var $input = jQuery(input);
    var set = function() {
      if ($input.val() = '')
        $input.val(instruction).addClass('instruction');
    }
    var clear = function($inp) {
      if ($inp.val() == instruction)
        $input.val('').removeClass('instruction');
    }
    clear();
    set();
    $input.focus(clear).blur(set);
  }
}
