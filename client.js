//***script for sign in and sign up

let sign_up_button = document.getElementById("sign_up_button");
let sign_in_button = document.getElementById("sign_in_button");
let name_field = document.getElementById("name_field");
let title = document.getElementById("title");

sign_in_button.onclick = function() {
    if(sign_in_button.classList.contains("disable")) {
        name_field.style.maxHeight = "0";
        title.innerHTML = "Sign in";
        sign_up_button.classList.add("disable");
        sign_in_button.classList.remove("disable")
    }
    else {

    }
}

sign_up_button.onclick = function() {
    if(sign_up_button.classList.contains("disable")) {
        name_field.style.maxHeight = "60px";
        title.innerHTML = "Sign up";
        sign_up_button.classList.remove("disable");
        sign_in_button.classList.add("disable")
    }
    else {
        
    }
}