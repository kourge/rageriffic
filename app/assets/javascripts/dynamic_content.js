

$(document).ready(function() {
  $("joinbutton").click(switchToCapture);
  printStartButton();
  $(document).bind('roomFrozen', switchToCapture);
  $(document).bind('startVoting', switchToVote);
  $(document).bind('winnerAnnounced', switchToWinner);
  //$(document).bind('participantUpdate', (e, data));
  $("#startbutton").click(function() {
    $(document).trigger('roomFrozen');
  });
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
  $("#startbutton").remove();
  $("#contentcontainer h1").remove()
  var instr = $('<h1>try to imitate the rage face</h1>');
  $(instr).insertAfter($("#logo"));
  $(cameraButton).insertAfter($("#status"));
  //var rageFaceJSON = jQuery.parseJSON(getRageFace);

  var header = $('<h1 id = "suggestedFace" class="imagetitle">selected rage face</h1>');
  var rageFace = $('<div id = "ragefacecontainerX"><img id="rageface" src="http://cache.ohinternet.com/images/1/13/Awesome.png" alt="rage face image"/>');
  $("#contentcontainer").append(header);
  $("#contentcontainer").append(rageFace);
}

function takePicture() {
  $(".imagetitle").remove();
  $("h1").html("waiting for others to submit...");
}

function switchToVote(e, data) {
  clearInterval(intervalID);
  $("#contentcontainer :not(:first-child)").remove();
  var rageFace = $('<div id = "ragefacecontainerX"><img id="rageface" src="http://cache.ohinternet.com/images/1/13/Awesome.png" alt="rage face image"/>');
  var form = $('<form id="voteform" action="" method="post">');
  var div1 = $('<div id="rowone">');
  var div2 = $('<div id = "rowtwo">');
  $("#contentcontainer").append(form);
  $(form).append(div1);

  for (var i = 0; i < data.length; i++) {
    var id = 'id' + data[i].id;
    var img = data[i].face; 
    var userImage = $('<div class ="voteImage userimagecontainer"><img class="userimage" src="http://i.imgur.com/' + 
                   img + '.jpg' + '" alt="Web cam"/><br /><input type="radio" name="vote" value = "'+ id +'"/></div>');
    $(div1).append(userImage);
  }


  var voteButton = $('<br clear = "all" /><input class = "button" id = "submitvotebutton" type="submit" value="" />').click(removeVoteButton);
  $("#contentcontainer").append(voteButton);
}

function removeVoteButton() {
  $('#submitvotebutton').remove();
  $("#contentcontainer").append('<h1>thanks for voting, now we wait...');
}


function switchToWinner(e, data) {
  clearInterval(intervalID);
  $("#contentcontainer :not(:first-child)").remove();
  var winner = $('<div class="imagediv winnercontainer"><img id = "winner" src = "http://i.imgur.com/' + data.face + '.jpg"  alt = "Rageriffic" />');
  $("#contentcontainer").append("<h1>WINNER!</h1>");
  $("#contentcontainer").append(winner);
}