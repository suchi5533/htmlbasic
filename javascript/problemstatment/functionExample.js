function add(){
let first,second;
first=document.getElementById("firstname").nodeValue;
second=document.getElementById("lastname").nodeValue;
// third=first+" "+second
document.write(third)
document.getElementById("here").innerHTML=first;
document.getElementById("here").innerHTML=second;
document.getElementById("here").innerHTML = first+" "+second;

}