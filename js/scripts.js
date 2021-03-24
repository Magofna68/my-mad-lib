$(document).ready(function () {
  $("#form1").submit(function (event) {
    const person1Input = $("input#person1").val();
    const person2Input = $("input#person2").val();
    const adjective1Input = $("input#adjective1").val();
    const noun1Input = $("input#noun1").val();
    const person3Input = $("input#person3").val();
    const quoteInput = $("input#quote").val();
    const pastTenseVerbInput = $("input#past-tense-verb").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".adjective1").text(adjective1Input);
    $(".noun1").text(noun1Input);
    $(".person3").text(person3Input);
    $(".quote").text(quoteInput);
    $(".past-tense-verb").text(pastTenseVerbInput);

    $("#story").show();

    event.preventDefault();
  });
});
