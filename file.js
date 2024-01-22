window.addEventListener("load",function(){
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
  var hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach(function(element) {
    element.classList.remove("hidden");
  });
  document.querySelector(".lddiv").style.display = "none";
  document.querySelector(".lold").style.display = "none";
  showSlides1();
})



function oh(i) {
  document.querySelector(".oho").style.display = "none";
  if (i == 1) {
    document.querySelector(".q1").classList.add("active");
    document.querySelector(".qq1").classList.add("active");
    document.querySelector(".q2").classList.remove("active");
    document.querySelector(".qq2").classList.remove("active");
    document.querySelector(".q3").classList.remove("active");
    document.querySelector(".qq3").classList.remove("active");
    document.querySelector(".oho").src = "./assests/i/image.jpg";
    document.querySelector(".p1").innerHTML = "Leverage labelling services for faster and accurate annotations including 2D and 3D boundingboxes, polygons, polylines, landmarks, key-points, and semantic segmentation.";
  } else if (i == 2) {
    document.querySelector(".q1").classList.remove("active");
    document.querySelector(".qq1").classList.remove("active");
    document.querySelector(".q2").classList.add("active");
    document.querySelector(".qq2").classList.add("active");
    document.querySelector(".q3").classList.remove("active");
    document.querySelector(".qq3").classList.remove("active");
    document.querySelector(".oho").src = "./assests/video-annotation-for-deep-learning.gif";
    document.querySelector(".p1").innerHTML = "Boost Visual Intelligence! Explore our Video Annotation service for precise object detection and tracking across frames. Elevate your computer vision models with seamless accuracy and efficiency.";
  } else {
    document.querySelector(".q1").classList.remove("active");
    document.querySelector(".qq1").classList.remove("active");
    document.querySelector(".q2").classList.remove("active");
    document.querySelector(".qq2").classList.remove("active");
    document.querySelector(".q3").classList.add("active");
    document.querySelector(".qq3").classList.add("active");
    document.querySelector(".oho").src = "./assests/1.gif";
    document.querySelector(".p1").innerHTML = "Precision in Every Dimension: Elevate 3D Computer Vision Accuracy with Our Annotation Services. From Camera to Lidar and Radar, Unlock Enhanced Models with 3D Bounding Boxes, 2D-3D Linking, and Point Cloud Segmentations.";
  }
  document.querySelector(".lddiv").style.display = "flex";
  lnd();
}

let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("body1");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

function showSlides1() {
  let i;
  let slides = document.getElementsByClassName("body1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlides1, 10000); // Change image every 30 seconds
}

const stickySections = [...document.querySelectorAll(".sticky_wrap")];

let called = false;

window.addEventListener("scroll", (e) => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i]);
  }
  // console.log(document.documentElement.scrollTop+" "+document.querySelector(".number").offsetTop+" "+(document.querySelector(".number").offsetTop - screen.height + 100));
  if (
    document.documentElement.scrollTop >=
    document.querySelector(".number").offsetTop - screen.height / 1.5
  ) {
    if (called) return;
    called = true;
    calledEvent();
  }
  if (
    document.documentElement.scrollTop <=
    document.querySelector(".number").offsetTop - screen.height / 1.5
  ) {
    if (!called) {
      return;
    }
    called = false;
    const counters = document.querySelectorAll(".count");
    counters.forEach((counter) => {
      counter.innerText = 0;
    });
  }
});

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector(".horizontal_scroll");
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
  scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}

function calledEvent() {
  const counters = document.querySelectorAll(".count");
  const speed = 98;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(+counter.getAttribute("data-target"));
      const count = parseInt(+counter.innerText);
      const increment = Math.trunc(target / speed);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

let constrain = 20;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - box.height / 2) / constrain;
  let calcY = (x - box.x - box.width / 2) / constrain;

  return (
    "perspective(100vh)" +
    "rotateX(" +
    calcX +
    "deg)" +
    "rotateY(" +
    calcY +
    "deg)"
  );
}

function transformElement(el, xyEl) {
  el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function (e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function () {
    transformElement(ex1Layer, position);
  });
};

function butth(i) {
  document.querySelector(".butthimg").style.display = "none";
  if (i == 1) {
    document.querySelector(".butth1").classList.add("butth-active");
    document.querySelector(".butth2").classList.remove("butth-active");
    document.querySelector(".butth3").classList.remove("butth-active");
    document.querySelector(".butth4").classList.remove("butth-active");
    document.querySelector(".butthimg").src = "./assests/Group 39.svg";
  } else if (i == 2) {
    document.querySelector(".butth1").classList.remove("butth-active");
    document.querySelector(".butth2").classList.add("butth-active");
    document.querySelector(".butth3").classList.remove("butth-active");
    document.querySelector(".butth4").classList.remove("butth-active");
    document.querySelector(".butthimg").src = "./assests/bbc.gif";
  } else if (i == 3) {
    document.querySelector(".butth1").classList.remove("butth-active");
    document.querySelector(".butth2").classList.remove("butth-active");
    document.querySelector(".butth3").classList.add("butth-active");
    document.querySelector(".butth4").classList.remove("butth-active");
    document.querySelector(".butthimg").src = "./assests/audio.svg";
  } else {
    document.querySelector(".butth1").classList.remove("butth-active");
    document.querySelector(".butth2").classList.remove("butth-active");
    document.querySelector(".butth3").classList.remove("butth-active");
    document.querySelector(".butth4").classList.add("butth-active");
    document.querySelector(".butthimg").src = "./assests/ta.svg";
  }
  document.querySelector(".lold").style.display = "flex";
  lnd2();
}

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
});

function lnd(){
  let xxd = document.querySelector(".oho");
  xxd.addEventListener("load",function(){
    console.log("all_fine");
    xxd.style.display = "block";
    document.querySelector(".lddiv").style.display = "none";
  })
}



function lnd2(){
  let xxd = document.querySelector(".butthimg");
  xxd.addEventListener("load",function(){
    console.log("all_fine");
    xxd.style.display = "block";
    document.querySelector(".lold").style.display = "none";
  })
}