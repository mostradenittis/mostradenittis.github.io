window.onload = function() {

    //Ingresso

    // Get the modal
    var ingresso = document.getElementById('ModalIngresso');
    var market = document.getElementById('ModalMarket');
    var stanza1 = document.getElementById('Modal1');
    var stanza2 = document.getElementById('Modal2');
    var stanza3 = document.getElementById('Modal3');
    var stanza4 = document.getElementById('Modal4');
    var stanza5 = document.getElementById('Modal5');

    // Get the button that opens the modal
    var btning = document.getElementById("ingresso");
    var btnmkt = document.getElementById("zona_mercato");
    var btn1 = document.getElementById("stanza1");
    var btn2 = document.getElementById("stanza2");
    var btn3 = document.getElementById("stanza3");
    var btn4 = document.getElementById("stanza4");
    var btn5 = document.getElementById("stanza5");

    // Get the <span> element that closes the modal
    var spaning = document.getElementsByClassName("close")[0];
    var spanmkt = document.getElementsByClassName("close")[1];
    var span1 = document.getElementsByClassName("close")[2];
    var span2 = document.getElementsByClassName("close")[3];
    var span3 = document.getElementsByClassName("close")[4];
    var span4 = document.getElementsByClassName("close")[5];
    var span5 = document.getElementsByClassName("close")[6];

    // When the user clicks the button, open the modal

    btning.onclick = function() {
        ingresso.style.display = "block";
    }
    btnmkt.onclick = function() {
        market.style.display = "block";
    }
    btn1.onclick = function() {
        stanza1.style.display = "block";
    }
    btn2.onclick = function() {
        stanza2.style.display = "block";
    }
    btn3.onclick = function() {
        stanza3.style.display = "block";
    }
    btn4.onclick = function() {
        stanza4.style.display = "block";
    }
    btn5.onclick = function() {
        stanza5.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spaning.onclick = function() {
        ingresso.style.display = "none";
    }
    spanmkt.onclick = function() {
        market.style.display = "none";
    }
    span1.onclick = function() {
        stanza1.style.display = "none";
    }
    span2.onclick = function() {
        stanza2.style.display = "none";
    }
    span3.onclick = function() {
        stanza3.style.display = "none";
    }
    span4.onclick = function() {
        stanza4.style.display = "none";
    }
    span5.onclick = function() {
        stanza5.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == ingresso) {
            ingresso.style.display = "none";
        }
        if (event.target == market) {
            market.style.display = "none";
        }
        if (event.target == stanza1) {
            stanza1.style.display = "none";
        }
        if (event.target == stanza2) {
            stanza2.style.display = "none";
        }
        if (event.target == stanza3) {
            stanza3.style.display = "none";
        }
        if (event.target == stanza4) {
            stanza4.style.display = "none";
        }
        if (event.target == stanza5) {
            stanza5.style.display = "none";
        }
    }

    btning.ontap = function() {
        ingresso.style.display = "block";
    }
    btnmkt.ontap = function() {
        market.style.display = "block";
    }
    btn1.ontap = function() {
        stanza1.style.display = "block";
    }
    btn2.ontap = function() {
        stanza2.style.display = "block";
    }
    btn3.ontap = function() {
        stanza3.style.display = "block";
    }
    btn4.ontap = function() {
        stanza4.style.display = "block";
    }
    btn5.ontap = function() {
        stanza5.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spaning.ontap = function() {
        ingresso.style.display = "none";
    }
    spanmkt.ontap = function() {
        market.style.display = "none";
    }
    span1.ontap = function() {
        stanza1.style.display = "none";
    }
    span2.ontap = function() {
        stanza2.style.display = "none";
    }
    span3.ontap = function() {
        stanza3.style.display = "none";
    }
    span4.ontap = function() {
        stanza4.style.display = "none";
    }
    span5.ontap = function() {
        stanza5.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.ontap = function(event) {
        if (event.target == ingresso) {
            ingresso.style.display = "none";
        }
        if (event.target == market) {
            market.style.display = "none";
        }
        if (event.target == stanza1) {
            stanza1.style.display = "none";
        }
        if (event.target == stanza2) {
            stanza2.style.display = "none";
        }
        if (event.target == stanza3) {
            stanza3.style.display = "none";
        }
        if (event.target == stanza4) {
            stanza4.style.display = "none";
        }
        if (event.target == stanza5) {
            stanza5.style.display = "none";
        }
    }

}
