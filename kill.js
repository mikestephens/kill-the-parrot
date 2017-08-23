var matches = new Array();

var allParrot = document.querySelectorAll("[data-emoji-name]");
for(var i =0; i < allParrot.length; i++){
  var d = allParrot[i];
  console.log(d);
  if(d.dataset.emojiName.indexOf('parrot') !== -1) {
    matches.push(d);
    d.click();
    if($(".btn_danger").length() > 0) {
      $(".btn_danger").click();
    }
  }
}
