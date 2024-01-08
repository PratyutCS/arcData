function oh(i){
    if(i==1){
        document.querySelector(".q1").classList.add("active");
        document.querySelector(".qq1").classList.add("active");
        document.querySelector(".q2").classList.remove("active");
        document.querySelector(".qq2").classList.remove("active");
        document.querySelector(".q3").classList.remove("active");
        document.querySelector(".qq3").classList.remove("active");
    }
    else if(i==2){
        document.querySelector(".q1").classList.remove("active");
        document.querySelector(".qq1").classList.remove("active");
        document.querySelector(".q2").classList.add("active");
        document.querySelector(".qq2").classList.add("active");
        document.querySelector(".q3").classList.remove("active");
        document.querySelector(".qq3").classList.remove("active");
    }
    else{
        document.querySelector(".q1").classList.remove("active");
        document.querySelector(".qq1").classList.remove("active");
        document.querySelector(".q2").classList.remove("active");
        document.querySelector(".qq2").classList.remove("active");
        document.querySelector(".q3").classList.add("active");
        document.querySelector(".qq3").classList.add("active");
    }
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("body1");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "flex";
}


const stickySections = [...document.querySelectorAll('.sticky_wrap')]

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stickySections.length; i++){
    transform(stickySections[i])
  }
})

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.horizontal_scroll');
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
}