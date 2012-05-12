
(function($) {
var INTERVAL = 5000, ENABLE_POLLING = false;
var id;
var previousFreeze = false, isFrozen = false;

$(document).bind('roomFrozen', function() {
  console.log('roomFrozen');
});

$(document).bind('startVoting', function() {
  console.log('startVoting');
});

if (ENABLE_POLLING) window.setInterval(function poll() {
  $.getJSON('/rounds/state/' + id, function(data) {
    if (data.is_frozen) {
      isFrozen = true;
    }
    if (!previousFreeze && isFrozen) {
      $(document).trigger('roomFrozen');
    }
    if (data.in_room == data.pic_taken) {
      $(document).trigger('startVoting');
    }
    previousFreeze = isFrozen;
  });
}, INTERVAL);

})(jQuery);

