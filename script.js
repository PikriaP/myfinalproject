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

// var $slider = $('.slideshow .slider'),
//   maxItems = $('.item', $slider).length,
//   dragging = false,
//   tracking,
//   rightTracking;

// $sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

// rightItems = $('.item', $sliderRight).toArray();
// reverseItems = rightItems.reverse();
// $('.slider', $sliderRight).html('');
// for (i = 0; i < maxItems; i++) {
//   $(reverseItems[i]).appendTo($('.slider', $sliderRight));
// }

// $slider.addClass('slideshow-left');
// $('.slideshow-left').slick({
//   vertical: true,
//   verticalSwiping: true,
//   arrows: false,
//   infinite: true,
//   dots: true,
//   speed: 1000,
//   cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
// }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {

//   if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
//     $('.slideshow-right .slider').slick('slickGoTo', -1);
//     $('.slideshow-text').slick('slickGoTo', maxItems);
//   } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
//     $('.slideshow-right .slider').slick('slickGoTo', maxItems);
//     $('.slideshow-text').slick('slickGoTo', -1);
//   } else {
//     $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
//     $('.slideshow-text').slick('slickGoTo', nextSlide);
//   }
// }).on("mousewheel", function(event) {
//   event.preventDefault();
//   if (event.deltaX > 0 || event.deltaY < 0) {
//     $(this).slick('slickNext');
//   } else if (event.deltaX < 0 || event.deltaY > 0) {
//     $(this).slick('slickPrev');
//   };
// }).on('mousedown touchstart', function(){
//   dragging = true;
//   tracking = $('.slick-track', $slider).css('transform');
//   tracking = parseInt(tracking.split(',')[5]);
//   rightTracking = $('.slideshow-right .slick-track').css('transform');
//   rightTracking = parseInt(rightTracking.split(',')[5]);
// }).on('mousemove touchmove', function(){
//   if (dragging) {
//     newTracking = $('.slideshow-left .slick-track').css('transform');
//     newTracking = parseInt(newTracking.split(',')[5]);
//     diffTracking = newTracking - tracking;
//     $('.slideshow-right .slick-track').css({'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')'});
//   }
// }).on('mouseleave touchend mouseup', function(){
//   dragging = false;
// });

// $('.slideshow-right .slider').slick({
//   swipe: false,
//   vertical: true,
//   arrows: false,
//   infinite: true,
//   speed: 950,
//   cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
//   initialSlide: maxItems - 1
// });
// $('.slideshow-text').slick({
//   swipe: false,
//   vertical: true,
//   arrows: false,
//   infinite: true,
//   speed: 900,
//   cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
// });

// costomers
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

getUsers(currentPage);