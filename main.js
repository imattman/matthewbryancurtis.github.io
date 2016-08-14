// Slide to section

$("nav a[href^='#']").click(function(e) {
  e.preventDefault();

  $("html, body").stop().animate({
    "scrollTop": $(this.hash).offset().top
  }, 900, "swing");
});

// Cross out list items
var listItems = $("#recipe li");

$(listItems).css("cursor", "pointer");

$(listItems).click(function () {
  $(this).toggleClass('crossout');
});
