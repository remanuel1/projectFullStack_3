//***script for SPA 
var temp = document.getElementsByTagName("template")[0];
var clon = temp.content.cloneNode(true);
document.body.appendChild(clon);


//***script for sign in and sign up

let sign_up_button = document.getElementById("sign_up_button");
let sign_in_button = document.getElementById("sign_in_button");
let lost_pas_p = document.getElementById("lost_pas_p");
let name_field = document.getElementById("name_field");
let title = document.getElementById("title");

sign_in_button.onclick = function() {
    if(sign_in_button.classList.contains("disable")) {
        name_field.style.maxHeight = "0";
        title.innerHTML = "Sign in";
        sign_up_button.classList.add("disable");
        sign_in_button.classList.remove("disable");
        lost_pas_p.style.visibility = "visible";
    }
    else {

    }
}

sign_up_button.onclick = function() {
    if(sign_up_button.classList.contains("disable")) {
        name_field.style.maxHeight = "60px";
        title.innerHTML = "Sign up";
        sign_up_button.classList.remove("disable");
        sign_in_button.classList.add("disable");
        lost_pas_p.style.visibility = "hidden";
    }
    else {

    }
}




//***script for home
let todo_input = document.getElementById("todo_input");
let todo_button = document.getElementById("todo_button");
let todo_list = document.querySelector(".todo_list");
let filter_option = document.querySelector(".todo_filter");

document.addEventListener("DOMContentLoaded", getLocalTodos);
todo_button.addEventListener("onclick", addToto);
todo_list.addEventListener("onclick", deleteCheck);
filter_option.addEventListener("chang", filterTodo);

function addToto(event) {
    event.preventDefault();
    let todo_div = document.createElement("div");
    todo_div.classList.add("todo");
    let newToDo = document.createElement("li");
    newToDo.innerText = todo_input.nodeValue;
    newToDo.classList.add("todo_item");
    todo_div.appendChild(newToDo);
    
    //send to data base

    let done_bt = document.createElement("button");
    done_bt.innerHTML = '<i class="fa-solid fa-check"></i>'
    done_bt.classList.add("complete_btn");
    todo_div.appendChild(done_bt);

    let trash_bt = document.createElement("button");
    trash_bt.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trash_bt.classList.add("trash_btn");
    todo_div.appendChild(trash_bt);

    todo_list.appendChild(todo_div);
    todo_input.nodeValue = "";

}
