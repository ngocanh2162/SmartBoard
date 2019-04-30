function de3_nameEdit() {
    document.getElementsByClassName("de3_name_edit").innerHTML = Date();
}

function deadline_display() {
    d = new Date();
    document.getElementsByClassName("deadline_date").innerHTML = d.toString();
}

function edit_describe(){
    var txt = "";
    txt = document.getElementsByClassName("describe_box");
    document.getElementsByClassName("describe_content").innerHTML = txt;
}