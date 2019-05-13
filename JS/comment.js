var activity_list = document.getElementById("activity_list");
var cmt_head = activity_list.getElementsByClassName("media-heading");
var i;
for (i = 0; i < cmt_head.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "cmt_close";
  span.appendChild(txt);
  cmt_head[i].appendChild(span);
}

var cmt_close = document.getElementsByClassName("cmt_close");
var j;
for (j = 0; j < cmt_close.length; j++) {
  cmt_close[j].onclick = function() {
    var div = this.parentElement.parentElement.parentElement;
    div.remove();
  }
}

function add_cmt(){
    var media = document.createElement("div");
    media.className = "media";
    var media_body = document.createElement("div");
    media_body.className = "media_body";
    var name = document.createElement("h4");
    name.className = "media-heading";
    var cmt = document.createElement("p");
    cmt.className = "cmt";
    var inputValue = document.getElementById("cmt_input").value;
    var t = document.createTextNode(inputValue);
    var t_name = document.createTextNode(inputValue);
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "cmt_close";
    span.appendChild(txt);
    if (inputValue === '') {
        alert("Thêm bình luận");
    } else {
        activity_list.appendChild(media);
        media.appendChild(media_body);
        media_body.appendChild(name);
        name.appendChild(t_name);
        name.appendChild(span);
        media_body.appendChild(cmt);
        cmt.appendChild(t);
    }
    document.getElementById("cmt_input").value = "";
    for (j = 0; j < cmt_close.length; j++) {
        cmt_close[j].onclick = function() {
          var div = this.parentElement.parentElement.parentElement;
          div.remove();
        }
    }
}

function cancel_cmt(){
    document.getElementById("cmt_input").value = "";
}