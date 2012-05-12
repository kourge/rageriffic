var images1 = ["happy-kitteh-smile.png", "crafty-daily-lie.png", "laughing-lol-crazy.png", "troll-troll-face.png", "okay-okay.png", "rage-mega-rage.png", "neutral-suspicious.png", "fuck-that-bitch-scared-yao.png", "sweet-jesus.png", "sad-forever-alone.png", "determined-serious-chiseled-not-okay.png", "happy-oh-stop-it-you.png", "misc-clean-all-the-things.png", "misc-spiderpman.png", "happy-lesquee.png", "annoyed-facepalm-picard.png", "rage-rage.png", "surprised-rainbow-face.png", "neutral-poker-face-2.png", "happy-awww.png", "disgusted-impossibru.png", "misc-jackie-chan.png", "surprised-gasp.png", "happy-cuteness-overload.png", "obama-really-not-bad.png", "angry-y-u-no.png", "surprised-omg.png", "surprised-reaction-guy.png", "angry-desk-flip.png", "me-gusta-me-gusta.png", "angry-dark-stare.png", "angry-no.png", "neutral-whyyyyy.png", "determined-challenge-accepted.png", "cereal-guy-cereal-guy-spitting.png", "surprised-clever-girl.png", "angry-son-i-am-disappoint.png", "determined-fumanchu-computer-stare.png", "annoyed-dude-come-on.png", "happy-grin.png", "happy-i-see-what-you-did-there.png", "fuck-yeah.png", "fuck-yeah-aww-yeah.png", "awesome_fa.png", "happy-big-smile.png", "annoyed-objection.png"];

var images = {"happy-kitteh-smile.png":"http://i.imgur.com/7Ll2A.png","surprised-wut.png":"http://i.imgur.com/r1KuX.png","misc-actually-pretty-badass.png":"http://i.imgur.com/VA9sz.png","misc-seriously.png":"http://i.imgur.com/Auhjg.png","neutral-gentlemen.png":"http://i.imgur.com/rHzTQ.png","disgusted-mother-of-god.png":"http://i.imgur.com/YQWHM.png","crafty-daily-lie.png":"http://i.imgur.com/POz1h.png","laughing-lol-crazy.png":"http://i.imgur.com/jpZBX.png","okay-okay.png":"http://i.imgur.com/dvIJf.png","surprised-open-mouth.png":"http://i.imgur.com/h8RNN.png","rage-mega-rage.png":"http://i.imgur.com/CW6tv.png","troll-troll-face.png":"http://i.imgur.com/qFKUh.png","misc-herp-derp.png":"http://i.imgur.com/RMT5I.png","neutral-suspicious.png":"http://i.imgur.com/3Kmfr.png","sad-numb.png":"http://i.imgur.com/s3UmI.png","fuck-that-bitch-scared-yao.png":"http://i.imgur.com/x1WSE.png","me-gusta-muy-elegante.png":"http://i.imgur.com/dK31E.png","misc-ohhh-yes.png":"http://i.imgur.com/mmrbs.png","sweet-jesus.png":"http://i.imgur.com/7nzB5.png"};

var links = {};

$(document).ready(function () {
  images1.forEach(function(image) {
    if (images[image] == undefined) {
      $.post("http://api.imgur.com/2/upload.json",
         {key: "e0c2bcb83dab53d4d21d7fc77ef3f8c2",
          image: "http://alltheragefaces.com/img/faces/png/" + image},
         function(data) {
          links[image] = data.upload.links.original;
         }, "json");
    }
  });
});