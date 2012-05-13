

$(document).ready(function() {
  printStartButton();
  $(document).bind('roomFrozen', switchToCapture);
  $(document).bind('startVoting', switchToVote);
  $(document).bind('winnerAnnounced', switchToWinner);
  //$(document).bind('participantUpdate', (e, data));
  $("#startbutton").click(function() {
    $(document).trigger('startClicked');
    $('#startbutton').remove();
  });
  $(document).trigger('joinGame');
});

function printStartButton() {
	if (window.isOwner == true) {
		var startButton = $('<button id="startbutton" class="button"></button>');
    $("#contentcontainer").append(startButton);
	} 
}

function switchToCapture() {
  $("#addfriends").remove();
  $("#welcome").remove();
  $("#logo").removeClass("hidden");
  $("#camerainterface").removeClass('hidden');
  var cameraButton = $('<button onclick = "webcam.capture(3); void(0);" class="button" id="camerabutton"></button>').click(takePicture);
  // $("#startbutton").remove();
  $("#contentcontainer h1").remove()
  var instr = $('<h1>try to imitate the rage face</h1>');
  $(instr).insertAfter($("#logo"));
  $(cameraButton).insertAfter($("#status"));
  //var rageFaceJSON = jQuery.parseJSON(getRageFace);

  var header = $('<h1 id = "suggestedFace" class="imagetitle">selected rage face</h1>');
  var rageFace = $('<div id = "ragefacecontainerX"></div>');
  var rageImage = $('<img id="rageface" alt="rage face image"/>');
  rageImage.attr('src', window.round.face);
  rageFace.append(rageImage);
  $("#contentcontainer").append(header);
  $("#contentcontainer").append(rageFace);
}

function takePicture() {
  $(".imagetitle").remove();
  $("h1").html("waiting for others to submit...");
}

function switchToVote(e, data) {
  $("#contentcontainer :not(:first-child)").remove();
  console.log(data)
  participations = data.participations
  var rageFace = $('<div id = "ragefacecontainerX">');
  var rageImage = $('<img id="rageface" alt="rage face image"/>');
  rageImage.attr('src', window.round.face);
  rageFace.append(rageImage);
  var form = $('<form id="voteform" action="" method="post">');
  var div1 = $('<div id="rowone">');
  var div2 = $('<div id = "rowtwo">');
  $("#contentcontainer").append(form);
  $(form).append(div1);
  var voteMessage = $('<br clear="all"><h1 id="submitvotebutton">Click your favorite Picture!</h1><br clear="all"')
  $("#contentcontainer").append(voteMessage);
  for(var i = 0; i < participations.length; i++) {
    var userWrap  = $('<div class ="voteImage userimagecontainer"></div>');
    var userImage = $('<img class="userimage" alt=Web cam"/><br />');
    userImage.attr('src', 'http://i.imgur.com/' + participations[i].face + '.png');
    userWrap.attr('p_id', participations[i].id);
    userWrap.append(userImage);
    $(div1).append(userWrap);
    $(userWrap).click(function() {
      console.log('triggering vote');
      $(document).trigger('sendVote', {p_id: parseInt(userWrap.attr('p_id'))});
      removeVoteButton();
    });
  }

}

function removeVoteButton() {
  $('#submitvotebutton').remove();
  $("#contentcontainer").append('<h1>thanks for voting, now we wait...');
}


function switchToWinner(e, data) {
  console.log("Switching to Winner Image");
  var winnerImageUrl = data.face;
  $("#contentcontainer :not(:first-child) ").remove();
  var winnerWrapper = $('<div class="imagediv winnercontainer">');
  var winnerImage = $('<img id="winner" alt="Rageriffic" />');
  winnerWrapper.append(winnerImage);
  console.log(winnerImageUrl);
  window.winnerImage = winnerImage
  winnerImage.attr('src', 'http://i.imgur.com/' + winnerImageUrl + ".png");
  $("#contentcontainer").append("<h1>WINNER!!!</h1>");
  $("#contentcontainer").append(winnerWrapper);
}

