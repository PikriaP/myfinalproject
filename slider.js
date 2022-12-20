let data = [
    {
      id: 1,
      imageUrl: 'https://images.techopedia.com/images/uploads/women-in-tech2.jpg?w=800&h=0&mode=max&quality=70&scale=both', 
    },
    {
      id: 2,
      imageUrl: 'https://elu.nl/wp-content/uploads/2021/03/c1920_womenintech-299653.jpg',
       
    },
    {
      id: 3,
      imageUrl: 'https://www.here.com/sites/g/files/odxslz256/files/styles/blog_post_large/public/2022-06/london-office-women-blog.webp?itok=OIcqUPC9',
      
    },
    
];


let leftArrow = document.getElementById('LeftArrow');
let righttArrow = document.getElementById('RightArrow');
let SliderBox = document.getElementById('imageContainer');
let sliderIndex = 0;
let activedot = document.getElementsByClassName('dots');

function DivTag () {
  let Divi = document.createElement('div');
  Divi.classList.add('ImageBox');
  
  return Divi;
}

function BGimage (item) {
  let BgImage = document.createElement('div');
  BgImage.style.backgroundImage = `url(${item.imageUrl})`;
  BgImage.classList.add('BgImage');

  return BgImage;
}

// function Title (item) {
//   let SlideTitle = document.createElement('h3');
//   SlideTitle.innerText = item.title;
//   SlideTitle.classList.add('Title');

//   return SlideTitle;
// }
function CreateDots () {
  let DotBox = document.createElement('div');
  DotBox.classList.add('DotMain');
  
  data.forEach((element) => {
    let dot = document.createElement("div");    
    dot.classList.add("dots");
    dot.setAttribute('data-id', element.id-1);
    DotBox.appendChild(dot);
    dot.addEventListener('click', function(event) {
      let number = event.target.getAttribute("data-id");
      sliderIndex = number;
      Slider();
    });
  });
  
  return DotBox;
}

function Slider () {
  SliderBox.innerHTML = ' ';
  let MainDiv = DivTag(data[sliderIndex]);
  let Image = BGimage(data[sliderIndex]);
//   let imgTitle = Title(data[sliderIndex]);
  let DotParent = CreateDots();

  MainDiv.appendChild(Image);
//   MainDiv.appendChild(imgTitle);
  SliderBox.appendChild(MainDiv);
  MainDiv.appendChild(DotParent);

  activedot[sliderIndex].classList.add('active');
}
function ClickLeftArrow () {
  if (sliderIndex == 0) {
    sliderIndex = data.length-1;
    Slider();
    return;
  }
  sliderIndex--;
  Slider();
}
leftArrow.addEventListener('click', ClickLeftArrow);

function ClickRighttArrow () {
  if (sliderIndex == data.length-1) {
    sliderIndex = 0;
    Slider();
    return;
  }
  sliderIndex++;
  Slider();
}
righttArrow.addEventListener('click', ClickRighttArrow);

setInterval(() => {
  ClickRighttArrow();
}, 4000);

Slider();

