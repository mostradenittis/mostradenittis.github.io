window.onload = function() {

    //Ingresso

    // Get the modal
    var ingresso = document.getElementById('ModalIngresso');
    var market = document.getElementById('ModalMarket');
    var stanza1 = document.getElementById('Modal1');

    // Get the button that opens the modal
    var btning = document.getElementById("ingresso");
    var btnmkt = document.getElementById("zona_mercato");
    var btn1 = document.getElementById("stanza1");

    // Get the <span> element that closes the modal
    var spaning = document.getElementsByClassName("close")[0];
    var spanmkt = document.getElementsByClassName("close")[0];
    var span1 = document.getElementsByClassName("close")[0];

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

    spaning.ontap = function() {
        ingresso.style.display = "none";
    }
    spanmkt.ontap = function() {
        market.style.display = "none";
    }
    span1.ontap = function() {
        stanza1.style.display = "none";
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
    }

}
