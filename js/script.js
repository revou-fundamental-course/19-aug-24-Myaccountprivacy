// Written by Fadlan Aria P.N.
// This is a JavaScript file. This is... I don't know what this thing does.
// TODO: FIX THIS THING!

window.onload = function replaceName(){
    let name = prompt("Please insert your name.", "");
    document.getElementById("name").innerHTML = name;
}

replaceName();

function validateForm(){
    const name = document.forms["the-form"]["fullname"].value;
    const birthDate = document.forms["the-form"]["birthdate"].value;
    const gender = document.forms["the-form"]["gen-select1"].value;
    const message = document.forms["the-form"]["message-input"].value;

    if (name == "" || birthDate == "" || gender == "" || message == ""){
        alert("All fields must be filled out before submission.");
        return false;
    }

    setSenderUI(name, birthDate, gender, message);

    return false;
}


// document.getElementById("name").addEventListener("onKeyup", function(name){
//    console.log(name);
// })