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
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
});



function butth(i) {
  if (i == 1) {
    document.querySelector(".butth1").classList.add("butth-active");
    document.querySelector(".butth2").classList.remove("butth-active");
    document.querySelector(".butth3").classList.remove("butth-active");
    document.querySelector(".img-1").src = "./assests/i/Group 76-compressed.jpg";
    document.querySelector(".sub1-3").innerHTML = "As pioneers in AI and machine learning applications, our values revolve around innovation, collaboration, and social responsibility. We are dedicated to creating intelligent solutions that not only drive efficiency in service sectors but also contribute positively to the communities they serve.";
  } else if (i == 2) {
    document.querySelector(".butth1").classList.remove("butth-active");
    document.querySelector(".butth2").classList.add("butth-active");
    document.querySelector(".butth3").classList.remove("butth-active");
    document.querySelector(".img-1").src = "./assests/vis.jpg";
    document.querySelector(".sub1-3").innerHTML = "Dedicated to advancing AI and machine learning in every service domain, our mission is to unlock the full potential of data. By harnessing the power of intelligent technologies, we strive to redefine standards, drive efficiency, and shape a future of unparalleled progress.";
  } else {
    document.querySelector(".butth1").classList.remove("butth-active");
    document.querySelector(".butth2").classList.remove("butth-active");
    document.querySelector(".butth3").classList.add("butth-active");
    document.querySelector(".img-1").src = "./assests/i/Group 75-compressed (1).jpg";
    document.querySelector(".sub1-3").innerHTML = "At the forefront of AI and machine learning, our vision is to be the driving force behind a transformative era in all service sectors. We aspire to empower industries with data-driven insights, catalyzing growth, efficiency, and unparalleled advancements.";
  }
}