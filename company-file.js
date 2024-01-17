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
    document.querySelector(".img-1").src = "./assests/vis.jpg";
  } else if (i == 2) {
    document.querySelector(".butth1").classList.remove("butth-active");
    document.querySelector(".butth2").classList.add("butth-active");
    document.querySelector(".butth3").classList.remove("butth-active");
    document.querySelector(".img-1").src = "./assests/bbc.gif";
  } else {
    document.querySelector(".butth1").classList.remove("butth-active");
    document.querySelector(".butth2").classList.remove("butth-active");
    document.querySelector(".butth3").classList.add("butth-active");
    document.querySelector(".img-1").src = "./assests/audio.svg";
  }
}