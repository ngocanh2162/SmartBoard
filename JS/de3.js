// side bar
var de3_popup = document.getElementById('de3_popup');
var popup_label = document.getElementById('popup_label');
var popup_member = document.getElementById('popup_member');
var popup_deadline = document.getElementById('popup_deadline');
var popup_file = document.getElementById('popup_file');
var popup_delete = document.getElementById('popup_delete');
function displayPopup1() {
    de3_popup.style.display = "block";
    popup_label.style.display = "block";
    popup_member.style.display = "none";
    popup_deadline.style.display = "none";
    popup_file.style.display = "none";
    popup_delete.style.display = "none";
}
function displayPopup2() {
    de3_popup.style.display = "block";
    popup_label.style.display = "none";
    popup_member.style.display = "block";
    popup_deadline.style.display = "none";
    popup_file.style.display = "none";
    popup_delete.style.display = "none";
}
function displayPopup3() {
    de3_popup.style.display = "block";
    popup_label.style.display = "none";
    popup_member.style.display = "none";
    popup_deadline.style.display = "block";
    popup_file.style.display = "none";
    popup_delete.style.display = "none";
}
function displayPopup4() {
    de3_popup.style.display = "block";
    popup_label.style.display = "none";
    popup_member.style.display = "none";
    popup_deadline.style.display = "none";
    popup_file.style.display = "block";
    popup_delete.style.display = "none";
}
function displayPopup5() {
    de3_popup.style.display = "block";
    popup_label.style.display = "none";
    popup_member.style.display = "none";
    popup_deadline.style.display = "none";
    popup_file.style.display = "none";
    popup_delete.style.display = "block";
}
// function closePopup() {
//     de3_popup.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == de3_popup) {
//         de3_popup.style.display = "none";
//     }
// }
//deadline
var deadline = document.getElementById("deadline");
function change_deadline(){
    while (deadline.hasChildNodes()) {
        deadline.removeChild(deadline.childNodes[0]);
    }
    var deadlineNew = document.createElement("li");
    var inputValue = document.getElementById("deadline_input").value;
    var t = document.createTextNode(inputValue);
    deadlineNew.append(t);
    deadline.append(deadlineNew);
}

function delete_deadline(){
    while (deadline.hasChildNodes()) {
        deadline.removeChild(deadline.childNodes[0]);
    }
    var deadlineNew = document.createElement("li");
    deadlineNew.append("Không có deadline!");
    deadline.append(deadlineNew);
    document.getElementById("deadline_input").value = "";
}
// describe
function edit_describe(){
    var de3_describe = document.getElementById("de3_describe");
    de3_describe.removeChild(de3_describe.lastElementChild);
    var des_input = document.getElementById("describe_input");
    var inputValue = des_input.value;
    var li = document.createElement("div");
    li.className = "describe_content";
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    de3_describe.appendChild(li);
}
function cancel_describe(){
    document.getElementById("describe_input").value = "";
}
// ?????
var de3_box = document.getElementsById("de3_box1");
// function delete_task(){
//     de3_popup.remove();
//     de3_box.remove();
// }

