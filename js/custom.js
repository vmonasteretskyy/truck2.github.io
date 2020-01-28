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

  var button_1 = $(".form_block_1 button");
  var button_2 = $(".form_block_2 button");
  var button_3 = $(".form_block_3 input[type='submit']");
  var block_1 = $(".form_block_1 ");
  var block_2 = $(".form_block_2 ");
  var block_3 = $(".form_block_3 ");
  var inputs_1 = $(".form_block_1 input[type=text]").toArray();
  var inputs_2 = $(".form_block_2 input[type=text]").toArray();
  var inputs_3 = $(".form_block_3 input[type=text]").toArray();

  var checking = false;
  function modals(block, inputs) {
    function checking(input) {
      var length = input.value.length;
      return length > 1;
    }
    if (inputs.every(checking)) {
      if (block.hasClass("form_block_1")) {
        $(".form_block_1").removeClass("active_block");
        $(".form_block_3").removeClass("active_block");
        $(".form_block_2").addClass("active_block");
      } else if (block.hasClass("form_block_2")) {
        $(".form_block_1").removeClass("active_block");
        $(".form_block_2").removeClass("active_block");
        $(".form_block_3").addClass("active_block");
      } else if (block.hasClass("form_block_3")) {
        $(".form_block_1").removeClass("active_block");
        $(".form_block_2").removeClass("active_block");
        $(".form_block_3").addClass("active_block");
      }
      inputs.forEach(function(e) {
        $(e).removeClass("empty");
      });
    } else {
      inputs.forEach(function(e) {
        if (e.value.length < 1) {
          $(e).addClass("empty");
        } else if (e.value.length > 1) {
          $(e).removeClass("empty");
        }
      });
      console.log("false checking");
    }
  }
  button_1.click(function(e) {
    modals(block_1, inputs_1);
  });
  button_2.click(function(e) {
    modals(block_2, inputs_2);
  });
  $(".close_btn").click(function() {
    $(".form_block_1").addClass("active_block");
    $(".form_block_2").removeClass("active_block");
    $(".form_block_3").removeClass("active_block");
  });
});
