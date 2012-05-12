function UploadToImgur(imagestream) {
  $.post("http://api.imgur.com/2/upload.json",
         {key: "e0c2bcb83dab53d4d21d7fc77ef3f8c2",
          image: imagestream},
          function(data) {
            console.log(data.upload.links.original);
            $(document).trigger('imageUploaded', data.upload.links.original);
          }, "json");
}