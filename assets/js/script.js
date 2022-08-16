// burger
const burger=document.querySelector(".burger");
if(burger){
  burger.addEventListener("click", function () {
      const mobilnav = document.querySelector(".nav_list");
      if (mobilnav.style.transform == "translateX(-500px)") {
        mobilnav.style.transform = "translateX(0px)";
      }
      else  {
        mobilnav.style.transform = "translateX(-500px)";
      }
    })
}
//preloader
var loader=document.getElementById("preloader");
window.addEventListener("load", function() {
  loader.style.display="none"
})