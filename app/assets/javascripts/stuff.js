
(function($) {
var INTERVAL = 3000, ENABLE_POLLING = false;
var id, timer;
var previousFreeze = false, isFrozen = false;

function loadParticipants() {
  $.getJSON('/rounds/participations/' + id, function(data) {
    $(document).trigger('startVoting', data);
    beginVoting();
  });
}

function beginVoting() {
  timer = window.setInterval(function pollWinner() {
    $.getJSON('/rounds/voting/' + id, function(data) {
      if (data.voting_done) {
        window.clearInterval(timer);
        $.getJSON('/rounds/winner/' + id, function(data) {
          $(document).trigger('winnerAnnounced', data);
        });
      }
    });
  }, INTERVAL);
}

var params = (function(a) {
  if (a == "") return {};
  var b = {};
  for (var i = 0; i < a.length; ++i) {
      var p = a[i].split('=');
      if (p.length != 2) continue;
      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
})(window.location.search.substr(1).split('&'));

$(document).bind('imageUploaded', function(event, url) {
  $.getJSON('/rounds/pic/' + id, {
    face: url.match(/\/(.{5})\..{3}$/)[1]
  });
});

if (ENABLE_POLLING) timer = window.setInterval(function poll() {
  $.getJSON('/rounds/state/' + id, function(data) {
    if (data.is_frozen) {
      isFrozen = true;
    }
    if (!previousFreeze && isFrozen) {
      $(document).trigger('roomFrozen');
    }
    if (data.in_room == data.pic_taken) {
      window.clearInterval(timer);
      loadParticipants();
    }
    previousFreeze = isFrozen;
  });
}, INTERVAL);

})(jQuery);

