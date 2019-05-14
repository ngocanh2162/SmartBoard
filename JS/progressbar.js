var progressLi = document.getElementById("progress_list");
var todolist = progressLi.getElementsByTagName("li");
var i;
for (i = 0; i < todolist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "progress_close";
  span.appendChild(txt);
  todolist[i].appendChild(span);
}

var progress_close = document.getElementsByClassName("progress_close");
for (i = 0; i < progress_close.length; i++) {
  progress_close[i].onclick = function() {
    var div = this.parentElement;
    div.remove();
  }
}

var list = document.querySelector('todolist');
list.addEventListener('click', function(ev) {
  if (ev.target.className === 'li') {
    ev.target.classList.toggle('todo_checked');
  }
}, false);

function add_new_todo(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("todo_input").value;
  var t = document.createTextNode(inputValue);
  if (inputValue === '') {
      alert("Phải viết vô ô chứ bạn eiii!");
  } else {
      li.appendChild(t);
      document.getElementById("progress_list").appendChild(li);
  }
  document.getElementById("todo_input").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "progress_close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < progress_close.length; i++) {
      progress_close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
      }
  }
}
