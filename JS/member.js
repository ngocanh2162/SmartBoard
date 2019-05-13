var mem_list = document.getElementById("mem_list");
var mem = mem_list.getElementsByClassName("de3_mem");
var i;
for (i = 0; i < mem.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "member_close";
  span.appendChild(txt);
  mem[i].appendChild(span);
}

var member_close = document.getElementsByClassName("member_close");
var j;
for (j = 0; j < member_close.length; j++) {
  member_close[j].onclick = function() {
    var div = this.parentElement;
    div.remove();
  }
}

function add_member(){
    var div1 = document.createElement("div");
    div1.className = "de3_mem";
    var inputValue = document.getElementById("member_input").value;
    var t = document.createTextNode(inputValue);
    div1.appendChild(t);
    if (inputValue === '') {
        alert("Thêm thành viên");
    } else {
        mem_list.appendChild(div1);
    }
    document.getElementById("member_input").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "member_close";
    span.appendChild(txt);
    div1.appendChild(span);
    for (j = 0; j < member_close.length; j++) {
        member_close[j].onclick = function() {
        var div = this.parentElement;
        div.remove();
        }
    }
}
  