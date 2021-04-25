function toggleNav() {
    var x = document.getElementById('navMenu');
    if (window.getComputedStyle(x).display === "block") {
        document.getElementById('navMenu').style.animation = ' 0.6s ease 0s slideOutNav';
        document.getElementById('showNav').style.filter = 'invert(100%)';
        setTimeout(function() {
            document.getElementById('navMenu').style.display = 'none';
        }, 450);
    } else {
        document.getElementById('navMenu').style.display = 'block';
        document.getElementById('navMenu').style.animation = ' 0.6s ease 0s slideInNav';
        document.getElementById('showNav').style.filter = 'invert(0%)';

    }
}


function mailto() {

    var email = "shabz2002786@gmail.com"
    var mailto_link = 'mailto:' + email + '?subject=' +
        document.getElementById("inputMsg2").value + '&body=' +
        "Sender's email address: " + document.getElementById("inputMsg1").value +
        "Sender's Full Name: " + document.getElementById("inputMsg4").value +
        document.getElementById("inputMsg3").value;
    window.open(mailto_link, 'emailWindow');


}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}