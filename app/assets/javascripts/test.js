function Upload(imagestream) {
  $.post("http://api.imgur.com/2/upload.json",
         {key: "e0c2bcb83dab53d4d21d7fc77ef3f8c2",
          image: "http://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif"},
          function(data) {
           
           return data.upload.links.original;
          }, "json");
}

$(document).ready(function () {
  var test = Upload();
  console.log(test);
});