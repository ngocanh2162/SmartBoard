var label_list = document.getElementsById("label_list1");
var myLabel = label_list.getElementsByClassName("de3_label");
var i;
for (i = 0; i < myLabel.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "label_close";
  span.appendChild(txt);
  myLabel[i].appendChild(span);
}

var label_close = document.getElementsByClassName("label_close");
var j;
for (j = 0; j < label_close.length; j++) {
  label_close[j].onclick = function() {
    var div = this.parentElement;
    div.remove();
  }
}

function add_new_label(){
  var span1 = document.createElement("div");
  span1.className = "de3_label";
  var inputValue = document.getElementById("label_input").value;
  var t = document.createTextNode(inputValue);
  span1.appendChild(t);
  if (inputValue === '') {
      alert("Thêm nhãn vô nha người ưi");
  } else {
      label_list.appendChild(span1);
  }
  document.getElementById("label_input").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "label_close";
  span.appendChild(txt);
  span1.appendChild(span);
  for (j = 0; j < label_close.length; j++) {
      label_close[j].onclick = function() {
      var div = this.parentElement;
      div.remove();
      }
  }
}
