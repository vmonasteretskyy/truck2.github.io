$(document).ready(function() {
  $(".collapse_title").click(function() {
    $(this).toggleClass("active_collapse");
    $(this)
      .next()
      .slideToggle(200);
  });
  $(".menu li a ").on("click", function(event) {
    event.preventDefault();

    var id = $(this).attr("href"),
      top = $(id).offset().top;

    $("body,html").animate({ scrollTop: top }, 1000);
  });
});
