// Tạo button xóa và thêm nó vào trong mỗi thẻ li trong progress list
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

// function progress_bar_change(){
//   var totalNum = todolist.length;
//   if (totalNum == 0){
//     bar.style.display = "none";
//   } else{
//     var checkedNum = todolist.getElementsByClassName("todo_checked").length;
//     var barWidth = checkedNum*100/totalNum;
//     var bar = document.getElementsByClassName("progress-bar");
//     bar.style.width = barWidth + "%";
//   } 
// }

// Khi button xóa được click thì ẩn phần tử li chứa nó
var progress_close = document.getElementsByClassName("progress_close");
var i;
for (i = 0; i < progress_close.length; i++) {
  progress_close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
  // progress_bar_change();
}

// Thêm class checked vào thẻ li nào được click
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('todo_checked');
  }
}, false);
// Thêm công việc mới khi click vào button "thêm"
function add_new_todo(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("todo_input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
      alert("Phải viết vô ô chứ bạn eiii!");
  } else {
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
      div.style.display = "none";
      }
  }
  // progress_bar_change();
}
