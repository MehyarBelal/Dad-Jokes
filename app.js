$(".loader").addClass("display");
$("button").click(function () {
  $(".loader").removeClass("display");
  setTimeout(function () {
    $(".loader").addClass("display");
  }, 500);
  $.ajax({
    url: "https://official-joke-api.appspot.com/random_joke",
    success: function (result) {
      let joke = result.setup + " " + result.punchline;

      $(".jokes").append('<div "shadow" id="joke-block">' + joke + "</div>");
    },
  });
});
