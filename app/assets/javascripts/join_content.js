$(document).ready(function() {
  addRoundIdToJoinLink();
})

function addRoundIdToJoinLink() {
  $("#nameform").attr('action', function(i, h) {
     return h + "/" + window.rid;
  });
}
