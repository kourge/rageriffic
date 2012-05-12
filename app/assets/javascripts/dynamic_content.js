var intervalID;

var long_ass_string = "";


$(document).ready(function() {
  printStartButton();
  $("#startbutton").click(switchToCapture);
});

function printStartButton() {
	if (/*getUserType() == owner*/true) {
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
  var rageFace = $('<div id = "ragefacecontainer"><img id="rageface" src="http://cache.ohinternet.com/images/1/13/Awesome.png" alt="rage face image"/>');
  $("#contentcontainer").append(header);
  $("#contentcontainer").append(rageFace);
}

function takePicture() {
  $(".imagetitle").remove();
  $("h1").html("waiting for others to submit...");
  //var status = $('<h1>waiting for others to submit...</h1>');
  //$("#contentcontainer").append(status);
  // Wait until the number of pictures taken == number of participants
  waitForVoting();
}

function waitForVoting () {
  intervalID = setInterval(getTotalVotes, 3000);
}

function getTotalVotes() {
  clearInterval(intervalID);
  //switchToVote();
}

function switchToVote() {
  $("#contentcontainer :not(:first-child)").remove();
  //$("#contentcontainer").empty();
  var rageFace = $('<div id = "ragefacecontainer"><img id="rageface" src="http://cache.ohinternet.com/images/1/13/Awesome.png" alt="rage face image"/>');
  var form = $('<form id="voteform" action="" method="post">');
  var div1 = $('<div id="rowone">');
  var div2 = $('<div id = "rowtwo">');
  $("#contentcontainer").append(form);
  $(form).append(div1);
  $(form).append(div2);
  var userImage = $('<div class="imagediv"><div class ="voteImage userimagecontainer"><img id="userimage" src="' + 
                    'http://i.imgur.com/' + 'Xs70N' + '.jpg' + '" alt="Web cam"/></div><br /><input type="radio" name="vote" />');
  $(div1).append(userImage);
  //var div2

}