function Area() {
    var side1 = parseInt(document
        .getElementById("side1").value);

    var side2 = parseInt(document
        .getElementById("side2").value);

    var side3 = parseInt(document
        .getElementById("side3").value);

    
    var s = (side1 + side2 + side3) / 2;

    var area = Math.sqrt(s * ((s - side1) 
            * (s - side2) * (s - side3)));
            
    document.getElementById(
        "display").innerHTML = area;
}
