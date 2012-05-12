var images1 = ["surprised-gasp.png", "me-gusta-me-gusta.png", "angry-dark-stare.png", "angry-no.png", "neutral-whyyyyy.png", "determined-challenge-accepted.png", "cereal-guy-cereal-guy-spitting.png", "surprised-clever-girl.png", "angry-son-i-am-disappoint.png", "determined-fumanchu-computer-stare.png", "annoyed-dude-come-on.png", "happy-grin.png", "happy-i-see-what-you-did-there.png", "fuck-yeah.png", "fuck-yeah-aww-yeah.png", "awesome_fa.png", "happy-big-smile.png"];

var i = -1;
var links = {};
var not_done = [];

function Upload() {
  if (i < images1.length - 1) {
    i++;
    console.log(images1[i])
    $.post("http://api.imgur.com/2/upload.json",
           {key: "e0c2bcb83dab53d4d21d7fc77ef3f8c2",
            image: "http://alltheragefaces.com/img/faces/png/" + images1[i]},
           function(data) {
            links[images1[i]] = data.upload.links.original;
           }, "json");
    var t = setTimeout("Upload()", 250);
  }
}

$(document).ready(function () {
  Upload();
});