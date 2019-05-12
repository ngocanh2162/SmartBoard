var label_list = document.getElementsByClassName("label_list");
var myLabel = labels.getElementsByClassName("de3_label");
var j;
for (j = 0; j < myLabel.length; j++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myLabel[j].appendChild(span);
}

var close = document.getElementsByClassName("close");
var j;
for (j = 0; j < close.length; j++) {
  close[j].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function add_new_label(){
  var span = document.createElement("span");
  var inputValue = document.getElementById("label_input").value;
  var t = document.createTextNode(inputValue);
  span.appendChild(t);
  if (inputValue === '') {
      alert("Phải thêm nhãn vô ô chứ bạn eiii!");
  } else {
      document.getElementById("label_list").appendChild(li);
  }
  document.getElementById("label_input").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  span.appendChild(span);

  for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      }
  }
}
