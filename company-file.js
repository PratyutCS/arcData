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

// let button = document.querySelector(".sub-001-active");

// input.addEventListener("change", stateHandle);

// function stateHandle() {
//     if (document.querySelector(".input").value === "") {
//         button.disabled = true; //button remains disabled
//     } else {
//         button.disabled = false;
//     }
// }