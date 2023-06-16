function update()
{
var rn = window.prompt("Input the Row number(0,1,2)", "0");
 var cn = window.prompt("Input the Column number(0,1,2)","0");
content = window.prompt("Input the Cell content");  
var x=document.getElementById('table').rows[parseInt(rn,10)].cells;
x[parseInt(cn,10)].innerHTML=content;
}