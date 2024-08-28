// Written by Fadlan Aria P.N.
// This is a JavaScript file. This is... I don't know what this thing does.
// TODO: FIX THIS THING!

//window.onload = function replaceName(){
//   let name = prompt("Please insert your name.", "");
//    document.getElementById("name").innerHTML = name;
//}

// replaceName();

function validateForm(){
    const username = document.forms["the-form"]["fullname"].value;
    const birthDate = document.forms["the-form"]["birthdate"].value;
    const gender = document.forms["the-form"]["gen-select1"].value;
    const message = document.forms["the-form"]["message-input"].value;

    if (username == "" || birthDate == "" || gender == "" || message == ""){
        alert("All fields must be filled out before submission.");
        return false;
    }
    
    setSenderUI(username, birthDate, gender, message);
    setName(username);

    return false;
}

function setName(name){
    document.getElementById("name").innerHTML = name;
    document.getElementById("sender-fullname").innerHTML = "";
}

function setSenderUI(username, birthDate, gender, message){
    document.getElementById("sender-fullname").innerHTML = username;
    document.getElementById("sender-birthdate").innerHTML = birthDate;
    document.getElementById("sender-gen-select1").innerHTML = gender;
    document.getElementById("sender-message-input").innerHTML = message;
}

// document.getElementById("name").addEventListener("onKeyup", function(name){
//    console.log(name);
// })

// Wait, I deleted that one! Oh well...