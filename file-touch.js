window.addEventListener("load",function(){
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
    var hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(function(element) {
      element.classList.remove("hidden");
    });
    lol(1);
})


const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
	menu_btn.classList.toggle('is-active');
	mobile_menu.classList.toggle('is-active');
});

async function lol(i){
  document.querySelector(".p"+i).classList.add("anima");
  await sleep(1 * 750);
  if(i==4){
    return;
  }
  else{
    lol(i+1);
  }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}