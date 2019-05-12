//file
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
    div.style.display = "none";
  }
}
function add_file(){
    var fileNew = document.createElement("li");
    var inputValue = document.getElementById("add_link_input").value;
    var t = document.createTextNode(inputValue);
    fileNew.append(t);
    if (inputValue === '') {
        alert("Không có link tải lên");
    } else {
        file_list.append(fileNew);
    }
    document.getElementById("add_link_input").value = "";
    // var span = document.createElement("SPAN");
    // var txt = document.createTextNode("\u00D7");
    // span.className = "file_close";
    // span.appendChild(txt);
    // li.appendChild(span);
    // for (i = 0; i < file_close.length; i++) {
    //     file_close[i].onclick = function() {
    //     var div = this.parentElement;
    //     div.style.display = "none";
    //     }
    // }
}

