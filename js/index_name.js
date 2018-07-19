// starting position on window's scroll position
var position = $(window).scrollTop();

// each letter
var i = $("#i");
var e = $("#e");
var f = $("#f");
// the top position of each letter
var iTop = i.css('top').replace('px','');
var eTop = e.css('top').replace('px','');
var fTop = f.css('top').replace('px','');
var iTopOriginal = i.css('top').replace('px','');
var eTopOriginal = e.css('top').replace('px','');
var fTopOriginal = f.css('top').replace('px','');

$(window).on('scroll', function() {
  
  var scroll = $(window).scrollTop();
  
  // 100 is an arbitrary number. Replace
  // it with the position from the top you
  // want the animation to begin.
  if (scroll >= 0) {
   	if (scroll > position) {
      // animate letters up
      animateUp();
    }
    else {
      // animate letters going down
      animateDown();
    }

     position = scroll;  // update position
   }
  
});


function animateUp() {  
  // If the letters top position is greater
  // than 0, reduce it until its 0
  if (iTop > 0) {
    i.css('top', iTop - 1);
    iTop--;
  }
  else {
    iTop = 0;
  }
  if (eTop > 0) {
    e.css('top', eTop - 1);
    eTop--;
  }
  else {
    eTop = 0;
  }
  if (fTop > 0) {
    f.css('top', fTop - 1);
    fTop--;
  }
  else {
    fTop = 0;
  }
}


function animateDown() {  
  // if the top of the letters
  // are greater than -1 and are 
  // under the original top position,
  // add 1px to the top position of
  // the letter
  if (iTop >= 0 && iTop < iTopOriginal) {
    i.css('top', iTop + 1);
    iTop++;
  }
  if (eTop >= 0 && eTop < eTopOriginal) {
    e.css('top', eTop + 1);
    eTop++;
  }
   if (fTop >= 0 && fTop < fTopOriginal) {
    f.css('top', fTop + 1);
    fTop++;
  }
}