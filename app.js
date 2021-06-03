$(".loader").addClass("display");
$(".mainBtn").click(function () {
  $(".loader").removeClass("display");
  setTimeout(function () {
    $(".loader").addClass("display");
  }, 1000);
  $.ajax({
    url: "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes",
    success: function (result) {
      let joke = result.setup + " " + result.punchline;

      $(".jokes").append(
        '<div class="border lead" id="joke-block">' + joke + "</div>"
      );
    },
  });
});

$(".clear-btn").click(function () {
  $(".jokes").children().remove();
});
