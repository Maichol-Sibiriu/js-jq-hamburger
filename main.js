// come aprire menu con un click
var hamburger = $(".fa-bars");
var list = $(".hamburger-menu");
hamburger.click( function() {
   list.show();
});


// come chiudere menu con un click
var close = $(".close")
close.click( function() {
  list.hide();
});
