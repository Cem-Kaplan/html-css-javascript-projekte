console.log("script.js geladen");

//window.alert("Alert");

// zugriff auf Elemente per ID 
let Label = document.getElementById("Title_1");

// strings
let textInhalt = "Hallo123";

// text manipulation
Label.textContent = textInhalt; 

// prompt
//let nutzerName = window.prompt("Dein Name: ");
//Label.textContent = nutzerName;

// forms
let Button = document.getElementById("Send_Button_1")
Button.onclick = function(){
    nutzerName2 = document.getElementById("Input_1").value;
    if (nutzerName2.value == null) {
        console.log("Dein Name ist leer, bitte ein inhalt eingeben");
    } else {
        console.log("Dein Name ist: ", nutzerName2);
    }
}