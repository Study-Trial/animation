let boxAnimationElement = document.querySelector("#box_animate");
    
function start() {
    boxAnimationElement.classList.add("animation-circle");
}
function stop() {
    boxAnimationElement.classList.remove("animation-circle");
}