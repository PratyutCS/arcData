window.addEventListener("load",function(){
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
    var hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(function(element) {
      element.classList.remove("hidden");
    });
    document.querySelector(".lder").style.display = "none";
})


const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
});


function oh(i) {
  document.querySelector(".ch1").style.display = "none";
  if (i == 1) {
    document.querySelector(".q1").classList.add("p-active");
    document.querySelector(".q2").classList.remove("p-active");
    document.querySelector(".q3").classList.remove("p-active");
    document.querySelector(".q4").classList.remove("p-active");
    document.querySelector(".q5").classList.remove("p-active");
    document.querySelector(".q6").classList.remove("p-active");
    document.querySelector(".ch1").src = "./assests/ic.png";
    document.querySelector(".ch2").innerHTML = "Image Collection";
    document.querySelector(".ch3").innerHTML = "In our image collection process, precision guides every step. Our team curates and organizes diverse, high-quality images with meticulous attention, ensuring a valuable dataset for various applications and projects.";
  } else if (i == 2) {
    document.querySelector(".q1").classList.remove("p-active");
    document.querySelector(".q2").classList.add("p-active");
    document.querySelector(".q3").classList.remove("p-active");
    document.querySelector(".q4").classList.remove("p-active");
    document.querySelector(".q5").classList.remove("p-active");
    document.querySelector(".q6").classList.remove("p-active");
    document.querySelector(".ch1").src = "./assests/vc2.png";
    document.querySelector(".ch2").innerHTML = "Video Collection";
    document.querySelector(".ch3").innerHTML = "Within our video collection workflow, precision is paramount. Our team meticulously assembles a diverse array of high-quality videos, crafting a valuable dataset tailored for applications spanning machine learning, research, and creative endeavors.";
  }
  else if (i == 3) {
    document.querySelector(".q1").classList.remove("p-active");
    document.querySelector(".q2").classList.remove("p-active");
    document.querySelector(".q3").classList.add("p-active");
    document.querySelector(".q4").classList.remove("p-active");
    document.querySelector(".q5").classList.remove("p-active");
    document.querySelector(".q6").classList.remove("p-active");
    document.querySelector(".ch1").src = "./assests/sc.png";
    document.querySelector(".ch2").innerHTML = "Voice Collection";
    document.querySelector(".ch3").innerHTML = "Within voice collection, our emphasis on precision shines through. Our committed team captures diverse and high-quality voice samples, constructing a valuable dataset customized for applications spanning voice recognition and creative audio projects.";
  }
  else if (i == 4) {
    document.querySelector(".q1").classList.remove("p-active");
    document.querySelector(".q2").classList.remove("p-active");
    document.querySelector(".q3").classList.remove("p-active");
    document.querySelector(".q4").classList.add("p-active");
    document.querySelector(".q5").classList.remove("p-active");
    document.querySelector(".q6").classList.remove("p-active");
    document.querySelector(".ch1").src = "./assests/ia.gif";
    document.querySelector(".ch2").innerHTML = "Image Annotation";
    document.querySelector(".ch3").innerHTML = "In the realm of image annotation, our meticulous approach ensures precise and detailed labeling, adding valuable insights to each image. This meticulous process enhances data quality for diverse applications and projects.";
  }
  else if (i == 5) {
    document.querySelector(".q1").classList.remove("p-active");
    document.querySelector(".q2").classList.remove("p-active");
    document.querySelector(".q3").classList.remove("p-active");
    document.querySelector(".q4").classList.remove("p-active");
    document.querySelector(".q5").classList.add("p-active");
    document.querySelector(".q6").classList.remove("p-active");
    document.querySelector(".ch1").src = "./assests/va2.gif";
    document.querySelector(".ch2").innerHTML = "Video Annotation";
    document.querySelector(".ch3").innerHTML = "In the field of video annotation, our careful methodology ensures accurate and detailed labeling, enhancing each video with valuable insights. This thorough process elevates the quality of data for various applications and projects.";
  }
   else {
    document.querySelector(".q1").classList.remove("p-active");
    document.querySelector(".q2").classList.remove("p-active");
    document.querySelector(".q3").classList.remove("p-active");
    document.querySelector(".q4").classList.remove("p-active");
    document.querySelector(".q5").classList.remove("p-active");
    document.querySelector(".q6").classList.add("p-active");
    document.querySelector(".ch1").src = "./assests/";
    document.querySelector(".ch2").innerHTML = "OCR";
    document.querySelector(".ch3").innerHTML = "Within Optical Character Recognition (OCR), our advanced technology ensures accurate extraction and interpretation of text from images and documents, providing seamless and efficient data processing for various applications.";
  }
  document.querySelector(".lder").style.display = "flex";
  lnd();
}


function lnd(){
  let xxd = document.querySelector(".ch1");
  xxd.addEventListener("load",function(){
    console.log("all_fine");
    document.querySelector(".ch1").style.display = "block";
    document.querySelector(".lder").style.display = "none";
  })
}