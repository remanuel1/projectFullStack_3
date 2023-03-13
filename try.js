//***script for home
let todo_input = document.getElementById("todo_input");
let todo_button = document.getElementById("todo_button");
let todo_list = document.querySelector(".todo_list");
let filter_option = document.querySelector(".todo_filter");

//document.addEventListener("DOMContentLoaded", getLocalTodos);
//todo_button.addEventListener("onclick", addToto);
//todo_list.addEventListener("onclick", deleteCheck);
//filter_option.addEventListener("chang", filterTodo);

todo_button.onclick = function() {
    let todo_div = document.createElement("div");
    todo_div.classList.add("todo");
    let newToDo = document.createElement("li");
    newToDo.innerText = todo_input.innerText;
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
    todo_input.innerText = "";
}

/*
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

}*/