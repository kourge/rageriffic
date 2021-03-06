
(function($) {
var INTERVAL = 3000, GIVEUP = 8, ENABLE_POLLING = true;
var id, timer, i = 0;
var previousFreeze = false, isFrozen = false;

function joinGame() {
  console.log("joining game");
  $.getJSON('/rounds/join/' + id,
    {name: window.name}
  , function(data) {
    window.p_id = data.id
    console.log("joined game");
  });
  getRound();
}

function startGame() {
  console.log("initiating game");
  $.getJSON('/rounds/start/' + id, {
    id: id
  });
}

function getRound() {
  $.getJSON('/rounds/round/' + id, function(data) {
    window.round = data;
  });
}

function loadParticipants() {
  $.getJSON('/rounds/participations/' + id, function(data) {
    $(document).trigger('startVoting', {participations: data});
    beginVoting();
  });
}

function beginVoting() {
  i = 0
  timer = window.setInterval(function pollWinner() {
    $.getJSON('/rounds/voting/' + id, function(data) {
      if (data.voting_done || i == GIVEUP) {
        window.clearInterval(timer);
        $.getJSON('/rounds/winner/' + id, function(data) {
          $(document).trigger('winnerAnnounced', data);
        });
      }
    });
    // i++;
  }, INTERVAL);
}

// get passed an object {p_id: ___}
function vote(p_id) {
  $.getJSON('/rounds/vote/' + id, p_id);
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

window.isOwner = !!params.owner;
window.name = params.name
window.rid = params.id;

$(document).ready(function() {
  var parts = $('#addfriends h1.h1words strong').html();
  if (parts) {
    parts = parts.split('/');
    id = parts[parts.length - 1];
  } else {
    parts = window.location.toString().split('/');
    id = id || parts[parts.length - 1];
  }
  window.rid = id
});

$(document).bind('joinGame', joinGame);
$(document).bind('imageUploaded', function(event, url) {
  $.getJSON('/rounds/pic/' + id, {
    face: url.match(/\/(.{5})\..{3}$/)[1],
    p_id: window.p_id
  });
});

$(document).bind('startClicked', function() {
  startGame();
});

$(document).bind('sendVote', function(e, p_id) {
  vote(p_id);
});

if (ENABLE_POLLING) timer = window.setInterval(function poll() {
  $.getJSON('/rounds/state/' + id, function(data) {
    $(document).trigger('updateJoinCount', data.in_room);
    if (data.is_frozen) {
      isFrozen = true;
    }
    if (!previousFreeze && isFrozen) {
      $(document).trigger('roomFrozen');
    }
    if(previousFreeze && isFrozen) {
      i++;
    }
    if (data.in_room == data.pics_taken || i == GIVEUP) {
      window.clearInterval(timer);
      loadParticipants();
    }
    previousFreeze = isFrozen;
  });
}, INTERVAL);

})(jQuery);

