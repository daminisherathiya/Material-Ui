

var toggle_minimize = document.querySelectorAll(".toggle-minimize");
var left_sidebar = document.querySelector(".left-sidebar");
var logo_text = document.querySelector(".logo-text");
var navbar_header = document.querySelector(".navbar-header");


// minimize-sidebar
toggle_minimize.forEach(element => {
    element.addEventListener("click", toggle_sidebar);
});

function toggle_sidebar() {
    left_sidebar.classList.toggle("small-sidebar");
}


 // small screen in tablet view
 var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
 if (width<1280) {
     left_sidebar.classList.add("small-sidebar");
     logo_text.classList.add("d-none");
     navbar_header.style.width = "50px";

 }
 else {
     left_sidebar.classList.remove("small-sidebar");
 }