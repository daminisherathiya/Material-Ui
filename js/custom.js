var toggle_minimize = document.querySelectorAll(".toggle-minimize");

toggle_minimize.forEach(element => {
    element.addEventListener("click", toggle_sidebar);
});

function toggle_sidebar() {
    var left_sidebar = document.querySelector(".left-sidebar");
    left_sidebar.classList.toggle("small-sidebar");
}