"use strict"
let navigation = document.getElementById("navbar");
let burgerbar = document.getElementById("burgerBar");

burgerbar.addEventListener('click', function(){
    burgerbar.classList.toggle('activeBar')
})

let formWrap = document.querySelector('.form-wrapper');
let input = document.querySelector(".input-blank");
let addButton = document.querySelector(".add-btn");
let ul = document.querySelector(".ul-items");
let clearAllItem = document.querySelector (".clearall");

formWrap.addEventListener('submit', function(event) {
    event.preventDefault();
    let inputValue = input.value;
    if (inputValue ==  " "){
        return;
    }

    let li = document.createElement("li");

    let btnDelete = document.createElement('i');
    btnDelete.classList.add('fa-regular');
    btnDelete.classList.add('fa-trash-can');

    btnDelete.addEventListener("click", function () {
        li.remove();
      });
    
    li.textContent = inputValue;

    li.appendChild(btnDelete);
    ul.appendChild(li);

    input.value = " ";
})

clearAllItem.addEventListener('click', function(){
    ul.innerHTML= ' ';
})