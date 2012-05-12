var images1 = ["surprised-gasp.png", "me-gusta-me-gusta.png", "angry-dark-stare.png", "angry-no.png", "neutral-whyyyyy.png", "determined-challenge-accepted.png", "cereal-guy-cereal-guy-spitting.png", "surprised-clever-girl.png", "angry-son-i-am-disappoint.png", "determined-fumanchu-computer-stare.png", "annoyed-dude-come-on.png", "happy-grin.png", "happy-i-see-what-you-did-there.png", "fuck-yeah.png", "fuck-yeah-aww-yeah.png", "awesome_fa.png", "happy-big-smile.png"];

var images = {"happy-kitteh-smile.png":"http://i.imgur.com/7Ll2A.png","surprised-wut.png":"http://i.imgur.com/r1KuX.png","misc-actually-pretty-badass.png":"http://i.imgur.com/VA9sz.png","misc-seriously.png":"http://i.imgur.com/Auhjg.png","neutral-gentlemen.png":"http://i.imgur.com/rHzTQ.png","disgusted-mother-of-god.png":"http://i.imgur.com/YQWHM.png","crafty-daily-lie.png":"http://i.imgur.com/POz1h.png","laughing-lol-crazy.png":"http://i.imgur.com/jpZBX.png","okay-okay.png":"http://i.imgur.com/dvIJf.png","surprised-open-mouth.png":"http://i.imgur.com/h8RNN.png","rage-mega-rage.png":"http://i.imgur.com/CW6tv.png","troll-troll-face.png":"http://i.imgur.com/qFKUh.png","misc-herp-derp.png":"http://i.imgur.com/RMT5I.png","neutral-suspicious.png":"http://i.imgur.com/3Kmfr.png","sad-numb.png":"http://i.imgur.com/s3UmI.png","fuck-that-bitch-scared-yao.png":"http://i.imgur.com/x1WSE.png","me-gusta-muy-elegante.png":"http://i.imgur.com/dK31E.png","misc-ohhh-yes.png":"http://i.imgur.com/mmrbs.png","sweet-jesus.png":"http://i.imgur.com/7nzB5.png", "sad-forever-alone.png":"http://i.imgur.com/I2bLl.png","determined-serious-chiseled-not-okay.png":"http://i.imgur.com/E22JW.png","misc-clean-all-the-things.png":"http://i.imgur.com/z8lKb.png","misc-spiderpman.png":"http://i.imgur.com/q9NCf.png","happy-oh-stop-it-you.png":"http://i.imgur.com/LAB9v.png","happy-lesquee.png":"http://i.imgur.com/nn619.png","annoyed-facepalm-picard.png":"http://i.imgur.com/GuWUc.png","rage-rage.png":"http://i.imgur.com/G29yK.png","neutral-poker-face-2.png":"http://i.imgur.com/UidYa.png","surprised-rainbow-face.png":"http://i.imgur.com/tjTEA.png","disgusted-impossibru.png":"http://i.imgur.com/of98K.png","happy-awww.png":"http://i.imgur.com/qe6hC.png","misc-jackie-chan.png":"http://i.imgur.com/kGrjo.png","happy-cuteness-overload.png":"http://i.imgur.com/Ndkn3.png", "annoyed-objection.png":"http://i.imgur.com/vDrt2.png", "happy-cuteness-overload.png":"http://i.imgur.com/C335L.png","obama-really-not-bad.png":"http://i.imgur.com/Jtexk.png","angry-y-u-no.png":"http://i.imgur.com/3DZT7.png","surprised-omg.png":"http://i.imgur.com/KYvOH.png","surprised-reaction-guy.png":"http://i.imgur.com/8MOcF.png","angry-desk-flip.png":"http://i.imgur.com/ha1RR.png"};

var i = -1;
var links = {};
var not_done = [];

function Upload() {
  if (i < images1.length - 1) {
    i++;
    if (images[images1[i]] == undefined) {
      console.log(images1[i])
      $.post("http://api.imgur.com/2/upload.json",
             {key: "e0c2bcb83dab53d4d21d7fc77ef3f8c2",
              image: "http://alltheragefaces.com/img/faces/png/" + images1[i]},
             function(data) {
              links[images1[i]] = data.upload.links.original;
             }, "json");
    }
    var t = setTimeout("Upload()", 250);
  }
}

$(document).ready(function () {
  Upload();
});