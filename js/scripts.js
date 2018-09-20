$(document).ready(function() {
$("form#animalChooser").submit(function(event) {

    event.preventDefault();

  var animal = parseInt($("select").val());
  console.log(animal);

  if (animal <= 1) {
    $("#turtle").show();
    $("#snake").hide();
    $("cheetah").hide();
  } else if (animal === 2) {
    $("#snake").show();
    $("#turtle").hide();
    $("#cheetah").hide();
  } else if (animal === 3) {
    $("#cheetah").show();
    $("#turtle").hide();
    $("#snake").hide();
  } else {
    alert("Something has gone wrong.  Try again, please.")
  }

  });
