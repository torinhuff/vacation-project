$(document).ready(function() {
  $("form#vacasurvey").submit(function(event) {
    event.preventDefault();
    var answer1 = parseInt($("input:radio[name=answer1]:checked").val());
    var answer2 = parseInt($("input:radio[name=answer2]:checked").val());
    var answer3 = parseInt($("input:radio[name=answer3]:checked").val());
    var answer4 = parseInt($("input:radio[name=answer4]:checked").val());
    var answer5 = parseInt($("input:radio[name=answer5]:checked").val());
    var result = answer1 + answer2 + answer3 + answer4 + answer5;

    if (result <= 5) {
      $("#destination1").slideDown().show();
      $("#destination2").hide();
      $("#destination3").hide();
    } else if ((result > 5) && (result <= 10)) {
      $("#destination2").slideDown().show();
      $("#destination1").hide();
      $("#destination3").hide();
    } else if ((result > 10) && (result <= 15)) {
      $("#destination3").slideDown().show();
      $("#destination2").hide();
      $("#destination1").hide();
    }
  });

});

function getRandom() {
  var random = Math.random() * 25;

  if (random <= 5) {
    $("#destination1").slideDown().show();
    $("#destination2").hide();
    $("#destination3").hide();
    $("#destination4").hide();
    $("#destination5").hide();
  } else if ((random > 5) && (random <= 10)) {
    $("#destination2").slideDown().show();
    $("#destination1").hide();
    $("#destination3").hide();
    $("#destination4").hide();
    $("#destination5").hide();
  } else if ((random > 10) && (random <= 15)) {
    $("#destination3").slideDown().show();
    $("#destination2").hide();
    $("#destination1").hide();
    $("#destination4").hide();
    $("#destination5").hide();
  } else if ((random > 15) && (random <= 20)) {
    $("#destination4").slideDown().show();
    $("#destination5").hide();
    $("#destination3").hide();
    $("#destination2").hide();
    $("#destination1").hide();
  } else if ((random > 20) && (random <= 25)) {
    $("#destination5").slideDown().show();
    $("#destination4").hide();
    $("#destination3").hide();
    $("#destination2").hide();
    $("#destination1").hide();
  }

}
