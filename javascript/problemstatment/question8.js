
document.getElementById("tSeparator").onclick = function() {
    var tsp = document.getElementById("thousandsSep").value;
    var tspString = "" + tsp;
    var real = tspString.split(".");
    var comma = 0;
    var fomatted_number = "";
    for(var i = real[0].length; i >= 0; i--) {
        if(comma == 3) {
            fomatted_number = real[0].charAt(i) + "," + fomatted_number;
            comma = 1;
        } else {
            fomatted_number = real[0].charAt(i) + fomatted_number;
            comma++;
        }
    }

    window.alert(fomatted_number+"." +real[1]);
}