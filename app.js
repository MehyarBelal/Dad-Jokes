$("button").click(function () {
  $.ajax({
    url: "https://official-joke-api.appspot.com/random_joke",
    success: function (result) {
      let joke = result.setup + " " + result.punchline;

      $(".jokes").append('<div "shadow" id="joke-block">' + joke + "</div>");
    },
  });
});
