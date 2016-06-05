$(function() {
  return $('#new_painting').fileupload({
    dataType: "script",
    add: function(e, data) {
      var file, types, progress_bar_id;
      types           = /(\.|\/)(gif|jpe?g|png|mp4)$/i; // regex
      file            = data.files[0];
      progress_bar_id = new Date()/1;
      if (types.test(file.type) || types.test(file.name)) {
        data.context = $(tmpl("template-upload", file, progress_bar_id));
        // console.log("data.context: ", data.context);
        /*
        data.context will return the file name and progress bar like this:
        
        video.mp4
        <div class="progress"><div class="bar" style="width: 0%;"></div></div>"
        */

        // $('#new_painting') is the form tag
        // so, what we're doing here is, add the progress bar(s) after user
        // select file(s)
        $('#new_painting').append(data.context);
        return data.submit();
      } else {
        return alert(file.name + " format is not supported");
      }
    },
    progress: function(e, data) {
      var progress;
      if (data.context) {
        progress = parseInt(data.loaded / data.total * 100, 10);
        return data.context.find('.bar').css('width', progress + '%'); // width: 50%;
      }
    },
    done: function (e, data) {
      // removing the progress bar
      $(data.context).remove();
    }
  });
});
