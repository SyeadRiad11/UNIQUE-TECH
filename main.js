const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');


hamburger.addEventListener('click', function(){
    nav.classList.toggle('ShowMenu');
})


// image slider 

var firstCricle = document.querySelector('#firstCricle');
var photos= ['.//images/headImage.png' , './/images/slide.png' , './/images/mockup3_618x365.png'];

var imageDiv = document.querySelector('.heroImage img');

var count= 0;
function slide(){
   
       count++

    if(count>= photos.length){
        count=0;
        imageDiv.src= photos[count];
    }else{
        imageDiv.src= photos[count];
    }


}




setInterval(slide , 3000);