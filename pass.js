function validate() {

    var validated = false;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    var pass1len = pass1.length;
    var pass2len = pass2.length;
    console.log(pass1len);
    console.log(pass2len);
    console.log(pass1 == pass2);

    if (pass1len >= 8 && pass2len >= 8 && pass1 == pass2) {
        validated = true;
    }else {
        alert("Passwords are invalid!");
    }

}