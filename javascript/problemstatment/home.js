// 1.Write a JavaScript function to get the values of First and Last name from html form

document.getElementById("btn").onclick = function() {
    let fn = document.getElementById("fn").value;
    let ln = document.getElementById("ln").value;

    window.alert(`Hello ${ln} ${fn}`);
}

// 2. Write a JavaScript function that accept row, column, (to identify a particular cell) and a string to update the content of that cell.

document.getElementById("updatebtn").onclick = function() {
    var rownum = document.getElementById("rownum").value;
    var cellnum = document.getElementById("cellnum").value;
    var newVal = document.getElementById("newContent").value;

    var tab = document.getElementById("tbl").rows;
    var row = tab[rownum].cells;
    var cell = row[cellnum];
    cell.innerHTML = newVal;
}

// 3.Write a JavaScript program to remove items from a dropdown list
   

document.getElementById("addBtn").onclick = function() {
    var optVal = document.getElementById("addOpt").value;

    var mydropdown = document.getElementById("drop-down");
    
    mydropdown.innerHTML += "<option>" + optVal + "</option>";

    document.getElementById("addOpt").value = "";
}

document.getElementById("remBtn").onclick = function() {
    var dropVal = document.getElementById("drop-down");
    for(var i = 0; i<dropVal.length; i++) {
        if(dropVal.options[i].value == dropVal.value) {
            dropVal.remove(i);
        }
    }
}

// 4.Write a JavaScript program to count and display the items of a dropdown list, in an alert window

var opts = document.getElementById("drop-down");
window.alert("Total options: " + opts.length);
var totalOpts = "";
for(var i = 0; i<opts.length; i++) {
    totalOpts += opts.options[i].innerHTML + "\n";
}
window.alert(totalOpts);