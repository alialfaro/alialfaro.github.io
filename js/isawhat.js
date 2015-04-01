(function(){
  var $ = function(selector){
    return document.querySelectorAll(selector);
  };

  var vowels = ["a", "e", "i", "o", "u"];
  var whats = [
    "artist",
    "reader",
    "writer",
    "muso",
    "tumblr",
    "photographer",
    "redditor",
    "city girl",
    "chef",
    "Husky",
    "independent woman",
    "individual",
  ];

  var i;
  var iam;
  var isawhatSpans = $("#is-a .what span");
  setInterval(function(){
    i = Math.round(Math.random()*(whats.length-1));
    iam = whats[i];
    prefix = vowels.indexOf(iam[0]) === -1 ? "a" : "an";
    console.log(prefix, iam);

    isawhatSpans[0].innerHTML = prefix;
    isawhatSpans[1].innerHTML = iam;

  }, 1 * 1000);
}());
