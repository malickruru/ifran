let isMenuOpen = false;
let isProfileMenuOpen = false;

const timeline = gsap.timeline();
const animateShowMenu = () => {
  timeline.to("#userOption", {
    opacity: 1,
    pointerEvents: "auto",
    y: 20,
    duration: 0.3,
  });
};
const animateHideMenu = () => {
  timeline.to("#userOption", {
    pointerEvents: "none",
    opacity: 0,
    y: -20,
    duration: 0.3,
  });
};
$("#toggle_userOption").addEventListener("click", () => {
  isProfileMenuOpen = !isProfileMenuOpen;
  isProfileMenuOpen ? animateShowMenu() : animateHideMenu();
});


function OpenMenu() {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    $("#mobile-menu").classList.remove("d-none");
  } else {
    $("#mobile-menu").classList.add("d-none");
  }
}
