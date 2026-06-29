
// var e = document.getElementById("f5").value;
function handlesubmit(e) {
    e.preventDefault();
    var a = document.getElementById("f1").value;
    var b = document.getElementById("f2").value;
    var c = document.getElementById("f3").value;
    var d = document.getElementById("f4").value;
    if (a == "" || b == "" || c == "" || d == "") {
        alert("all fields are mandatory");
    }
}
