window.addEventListener("load",function(){
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
    var hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(function(element) {
      element.classList.remove("hidden");
    });
})


const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
	menu_btn.classList.toggle('is-p-active');
	mobile_menu.classList.toggle('is-p-active');
});


function oh(i) {
  if (i == 1) {
    document.querySelector(".q1").classList.add("p-active");
    document.querySelector(".q2").classList.remove("p-active");
    document.querySelector(".q3").classList.remove("p-active");
    document.querySelector(".q4").classList.remove("p-active");
    document.querySelector(".q5").classList.remove("p-active");
    document.querySelector(".q6").classList.remove("p-active");
    document.querySelector(".ch1").src = "./assests/data2.png";
    document.querySelector(".ch2").innerHTML = "Data Collection";
    document.querySelector(".ch3").innerHTML = "";
  } else if (i == 2) {
    document.querySelector(".q1").classList.remove("p-active");
    document.querySelector(".q2").classList.add("p-active");
    document.querySelector(".q3").classList.remove("p-active");
    document.querySelector(".q4").classList.remove("p-active");
    document.querySelector(".q5").classList.remove("p-active");
    document.querySelector(".q6").classList.remove("p-active");
    document.querySelector(".ch1").src = "./assests/img2.png";
    document.querySelector(".ch2").innerHTML = "Image Collection";
    document.querySelector(".ch3").innerHTML = "";
  }
  else if (i == 3) {
    document.querySelector(".q1").classList.remove("p-active");
    document.querySelector(".q2").classList.remove("p-active");
    document.querySelector(".q3").classList.add("p-active");
    document.querySelector(".q4").classList.remove("p-active");
    document.querySelector(".q5").classList.remove("p-active");
    document.querySelector(".q6").classList.remove("p-active");
    document.querySelector(".ch1").src = "./assests/";
    document.querySelector(".ch2").innerHTML = "Video Collection";
    document.querySelector(".ch3").innerHTML = "";
  }
  else if (i == 4) {
    document.querySelector(".q1").classList.remove("p-active");
    document.querySelector(".q2").classList.remove("p-active");
    document.querySelector(".q3").classList.remove("p-active");
    document.querySelector(".q4").classList.add("p-active");
    document.querySelector(".q5").classList.remove("p-active");
    document.querySelector(".q6").classList.remove("p-active");
    document.querySelector(".ch1").src = "./assests/";
    document.querySelector(".ch2").innerHTML = "Img & Vid Annotation";
    document.querySelector(".ch3").innerHTML = "";
  }
  else if (i == 5) {
    document.querySelector(".q1").classList.remove("p-active");
    document.querySelector(".q2").classList.remove("p-active");
    document.querySelector(".q3").classList.remove("p-active");
    document.querySelector(".q4").classList.remove("p-active");
    document.querySelector(".q5").classList.add("p-active");
    document.querySelector(".q6").classList.remove("p-active");
    document.querySelector(".ch1").src = "./assests/";
    document.querySelector(".ch2").innerHTML = "Audio Transcrition";
    document.querySelector(".ch3").innerHTML = "";
  }
   else {
    document.querySelector(".q1").classList.remove("p-active");
    document.querySelector(".q2").classList.remove("p-active");
    document.querySelector(".q3").classList.remove("p-active");
    document.querySelector(".q4").classList.remove("p-active");
    document.querySelector(".q5").classList.remove("p-active");
    document.querySelector(".q6").classList.add("p-active");
    document.querySelector(".ch1").src = "./assests/";
    document.querySelector(".ch2").innerHTML = "Speechdata Collection";
    document.querySelector(".ch3").innerHTML = "";
  }
}