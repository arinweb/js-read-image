

function previewFile(input) {
 var file = $(input).get(0).files[0];
 if (file) {
  var reader = new FileReader();
  alert("ÇALIŞTI");
  reader.onload = function() {
   $("img").attr("src", reader.result);
  }
  reader.readAsDataURL(file);
 } else {
  alert("Hoooop");
 }
}
