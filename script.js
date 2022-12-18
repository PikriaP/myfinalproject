"use strict";
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

// slider
let i = 0; // current slide
let j = 4; // total slides

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".slideimage-container img");

function next(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = ( j + i + 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator( i+ 1 );
}

function prev(){
    document.getElementById("content" + (i+1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i+1)).classList.add("active");
    indicator(i+1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = "transparent";
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#8052ec";
}

function dot(index){
    images.forEach(function(image){
        image.classList.remove("active");
    });
    document.getElementById("content" + index).classList.add("active");
    i = index - 1;
    indicator(index);
}
// search
const search = document.querySelector('.search')
const btn1 = document.querySelector('.btn1')
const input = document.querySelector('.input')
btn1.addEventListener('click', () => {
search.classList.toggle('active')
input.focus()
})

// fetch- load more - section
let currentPage = 1;
let post = document.getElementById("main-wraper");

function getUsers(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    METHOD: "GET",
  })
    .then(function (text) {
      if (text.status !== 200) {
        throw text.status;
      }
      return text.json();
    })
    .then(function (answer) {
      answer.data.forEach((item) => {
        let user = document.createElement("p");
        user.classList.add("suname-name");
        user.innerText = `${item.first_name} ${item.last_name}`;
        let avatar = document.createElement("img");
        avatar.src = item.avatar;
        avatar.setAttribute("alrt", "avatar");
        avatar.classList.add("avatar");
        let nameAvatarWraper = document.createElement("div");
        nameAvatarWraper.classList.add("avatarsclass");
        let nameAvatar = document.createElement("div");
        nameAvatar.appendChild(user);
        nameAvatar.appendChild(avatar);
        nameAvatarWraper.appendChild(nameAvatar);
        post.appendChild(nameAvatarWraper);
      });
    })
    // error
    .catch(function (error) {
      if (error == 404) {
        let p = document.createElement("p");
        p.textContent = "page not found";
        p.classList.add("text-for");
        post.appendChild(p);
      }
    });
}
// load more
let loadMore = document.getElementById("more-destination");
loadMore.addEventListener("click", function () {
  currentPage++;
  getUsers(currentPage);
  loadMore.remove();
});

getUsers(currentPage);


// scroll

const navbar = document.querySelector("#nav-flex");

window.onscroll = ()=> {
  this.scrollY > 700 ? navbar.classList.add("scroll") : navbar.classList.remove("scroll");
}

// benefitiy
let currentPage = 1;
let post = document.getElementById("main-wraper");

function getUsers(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    METHOD: "GET",
  })
    .then(function (text) {
      if (text.status !== 200) {
        throw text.status;
      }
      return text.json();
    })
    .then(function (answer) {
      answer.data.forEach((item) => {
        let user = document.createElement("p");
        user.classList.add("suname-name");
        user.innerText = `${item.first_name} ${item.last_name}`;
        let avatar = document.createElement("img");
        avatar.src = item.avatar;
        avatar.setAttribute("alrt", "avatar");
        avatar.classList.add("avatar");
        let nameAvatarWraper = document.createElement("div");
        nameAvatarWraper.classList.add("avatarsclass");
        let nameAvatar = document.createElement("div");
        nameAvatar.appendChild(user);
        nameAvatar.appendChild(avatar);
        nameAvatarWraper.appendChild(nameAvatar);
        post.appendChild(nameAvatarWraper);
    });
})
.catch(function (error) {
  if (error == 404) {
    let p = document.createElement("p");
    p.textContent = "page not found";
    p.classList.add("text-for");
    post.appendChild(p);
  }
});
}

let loadMore = document.getElementById("more-destination");
loadMore.addEventListener("click", function () {
currentPage++;
getUsers(currentPage);
loadMore.remove();
});

// getUsers(currentPage);
/ burger bar -home
let navigation = document.getElementById("navbar");
let burgerbar = document.getElementById("burgerBar");
burgerbar.addEventListener("click", function () {
  burgerbar.classList.toggle("activeBar");
  navigation.classList.toggle("activeNav");
});

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const sliderContent = document.getElementById("slider-content");
let sliderIndex = 0;
let dotItem = document.getElementsByClassName("dot");

//div
function createDivTag() {
  const divTag = document.createElement("div");
  divTag.classList.add("slide");

  return divTag;
}

function createImgTag(item) {
  const imgTag = document.createElement("div");
  imgTag.style.background = `url(${item.imageUrl})`;
  imgTag.classList.add("bg-imagee");

  return imgTag;
}




// form

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const contactForm = document.getElementById("contact-form");
const errorElement = document.getElementById("error");
const successMsg = document.getElementById("success-msg");
const submitBtn = document.getElementById("submit");

const validate = (e) => {
  e.preventDefault();

  if (name.value.length < 3) {
    errorElement.innerHTML = "Your name should be at least 3 characters long.";
    return false;
  }

  if (!(email.value.includes(".") && email.value.includes("@"))) {
    errorElement.innerHTML = "Please enter a valid email address.";
    return false;
  }

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = "Please enter a valid email address.";
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = "Please write a longer message.";
    return false;
  }

  errorElement.innerHTML = "";
  successMsg.innerHTML =
    "Thank you! I will get back to you as soon as possible.";

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = "";
    document.getElementById("contact-form").reset();
  }, 6000);

  return true;
};

const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

submitBtn.addEventListener("click", validate);

// fetch- load more - section
let currentPage = 1;
let post = document.getElementById("main-wraper");

function getUsers(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    METHOD: "GET",
  })
    .then(function (text) {
      if (text.status !== 200) {
        throw text.status;
      }
      return text.json();
    })
    .then(function (answer) {
      answer.data.forEach((item) => {
        let user = document.createElement("p");
        user.classList.add("suname-name");
        user.innerText = `${item.first_name} ${item.last_name}`;
        let avatar = document.createElement("img");
        avatar.src = item.avatar;
        avatar.setAttribute("alrt", "avatar");
        avatar.classList.add("avatar");
        let nameAvatarWraper = document.createElement("div");
        nameAvatarWraper.classList.add("avatarsclass");
        let nameAvatar = document.createElement("div");
        nameAvatar.appendChild(user);
        nameAvatar.appendChild(avatar);
        nameAvatarWraper.appendChild(nameAvatar);
        post.appendChild(nameAvatarWraper);
      });
    })
    // error
    .catch(function (error) {
      if (error == 404) {
        let p = document.createElement("p");
        p.textContent = "page not found";
        p.classList.add("text-for");
        post.appendChild(p);
      }
    });
}
// load more
let loadMore = document.getElementById("more-destination");
loadMore.addEventListener("click", function () {
  currentPage++;
  getUsers(currentPage);
  loadMore.remove();
});

getUsers(currentPage);


// scroll

const navbar = document.querySelector("#nav-flex");

window.onscroll = ()=> {
  this.scrollY > 700 ? navbar.classList.add("scroll") : navbar.classList.remove("scroll");
}