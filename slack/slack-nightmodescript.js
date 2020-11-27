//Append this to C:\Users\<user-name>\AppData\Local\slack\app-3.3.7\resources\app.asar.unpacked\src\static\interop.js
document.addEventListener('DOMContentLoaded', function() {
  $.ajax({
    url: 'https://raw.githubusercontent.com/anttipirskanen/anttipirskanen.github.io/master/slack-custom.css',
    success: function(css) {
      $("<style></style>").appendTo('head').html(css);
    }
  });
});
