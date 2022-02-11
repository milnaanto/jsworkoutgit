document.getElementById("mybutton").onclick = function(){
    var myname = document.getElementById("mytext").value ;
    var partner = document.getElementById("pn").value ;
    var LOCATION = document.getElementById("loc").value ;
    var DESIGNATION = document.getElementById("desig").value ;
    var COMPANY = document.getElementById("comp").value ;
    console.log("Hi! I'm" + ' '  + myname + ' '+ "and my partner's name is" + ' ' + partner + ".I stay in" + ' '+ LOCATION +".Iam working as"+' ' + DESIGNATION +' ' + "in" + ' ' +COMPANY+".");
}
