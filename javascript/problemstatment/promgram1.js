function getFormvalue()
{
  var x=document.getElementById("fname").value;
  var y=document.getElementById("lname").value;
      console.log(x);
      console.log(y);
      document.getElementById("Fn").innerHTML=x;
       document.getElementById("ln").innerHTML=y;
}