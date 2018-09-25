$(document).ready(function() {
  $("form#vacasurvey").submit(function(event) {
    event.preventDefault();
    var answer1 = parseInt($("input:radio[name=answer1]:checked").val());
    var answer2 = parseInt($("input:radio[name=answer2]:checked").val());
    var answer3 = parseInt($("input:radio[name=answer3]:checked").val());
    var answer4 = parseInt($("input:radio[name=answer4]:checked").val());
    var answer5 = parseInt($("input:radio[name=answer5]:checked").val());
    var answer6 = parseInt($("input:radio[name=answer6]:checked").val());
    var answer7 = parseInt($("input:radio[name=answer7]:checked").val());
    var answer8 = parseInt($("input:radio[name=answer8]:checked").val());
    var result = answer1 + answer2 + answer3 + answer4 + answer5 + answer6 + answer7 + answer8;

    $("#questions").slideUp(400);
    $("html, body").animate({
      scrollTop: "10px"
    });

    if (result <= 8) {
      $("#destination1").slideUp().show();
      $("#destination2").hide();
      $("#destination3").hide();
    } else if ((result > 8) && (result <= 16)) {
      $("#destination2").slideUp().show();
      $("#destination1").hide();
      $("#destination3").hide();
    } else if ((result > 16) && (result <= 24)) {
      $("#destination3").slideUp().show();
      $("#destination2").hide();
      $("#destination1").hide();
    }
  });

});

function getRandom() {
  var random = Math.random() * 48;

  $("#questions").slideUp(400);
  $("html, body").animate({
    scrollTop: "10px"
  });

  if (random <= 8) {
    $("#destination1").slideUp().show();
    $("#destination2").hide();
    $("#destination3").hide();
    $("#destination4").hide();
    $("#destination5").hide();
    $("#destination6").hide();
  } else if ((random > 8) && (random <= 16)) {
    $("#destination2").slideUp().show();
    $("#destination1").hide();
    $("#destination3").hide();
    $("#destination4").hide();
    $("#destination5").hide();
    $("#destination6").hide();
  } else if ((random > 16) && (random <= 24)) {
    $("#destination3").slideUp().show();
    $("#destination2").hide();
    $("#destination1").hide();
    $("#destination4").hide();
    $("#destination5").hide();
    $("#destination6").hide();
  } else if ((random > 24) && (random <= 32)) {
    $("#destination4").slideUp().show();
    $("#destination5").hide();
    $("#destination3").hide();
    $("#destination2").hide();
    $("#destination1").hide();
    $("#destination6").hide();
  } else if ((random > 32) && (random <= 40)) {
    $("#destination5").slideUp().show();
    $("#destination4").hide();
    $("#destination3").hide();
    $("#destination2").hide();
    $("#destination1").hide();
    $("#destination6").hide();
  } else if ((random > 40) && (random <= 48)) {
    $("#destination6").slideUp().show();
    $("#destination4").hide();
    $("#destination3").hide();
    $("#destination2").hide();
    $("#destination1").hide();
    $("#destination5").hide();
  }


}
