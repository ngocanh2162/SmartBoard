var file_list = document.getElementById("file_list");
var files = file_list.getElementsByTagName("li");
var i;
for (i = 0; i < files.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "file_close";
  span.appendChild(txt);
  files[i].appendChild(span);
}
var file_close = document.getElementsByClassName("file_close");
var i;
for (i = 0; i < file_close.length; i++) {
  file_close[i].onclick = function() {
    var div = this.parentElement;
    div.remove();
  }
}
function add_file(){
    var li = document.createElement("li");
    var linkNew = document.createElement("a");
    var inputLink = document.getElementById("add_link_input").value;
    var inputName = document.getElementById("add_link_name").value;
    if (inputLink === '') {
          alert("Không có link chia sẻ");
    } else {
      if (inputName === ''){
        var t = document.createTextNode(inputLink);
      } else{
        var t = document.createTextNode(inputName);
      }
      linkNew.appendChild(t);
      linkNew.href = inputLink;
      li.append(linkNew);
      file_list.append(li);
      document.getElementById("add_link_input").value = "";
    }
    // var files = document.querySelector('[type=file]').files;
    // var formData = new FormData();
    // for (let i = 0; i < files.length; i++){
    //   let file = files[i];
    //   formData.append('files[]', file)
    //   li.append(formData);
    //   file_list.append(li);
    // }
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "file_close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < file_close.length; i++) {
      file_close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
      }
    }
    de3_popup.style.display = "none";
}

function cancel_file(){
  document.getElementById("add_link_input").value = "";
  document.getElementById("add_file_select").value = "";
}

  