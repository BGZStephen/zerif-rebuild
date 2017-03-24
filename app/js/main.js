var navbar = document.getElementsByClassName(`navbar`)[0]
var navToggle = document.getElementsByClassName(`navbar-toggle`)[0]
var navToggleBars = document.getElementsByClassName(`fa-bars`)[0]
var navToggleBackground = document.getElementsByClassName(`fa-square-o`)[0]
var menuList = document.getElementsByClassName(`navbar-menu`)[0]

var toggle = () => {
  if(menuList.style.maxHeight != "500px") {
    console.log(`expand`);
    menuList.style.maxHeight = "500px";
    navToggleBackground.classList.remove(`fa-square-o`);
    navToggleBackground.classList.add(`fa-square`);
    navToggleBackground.style.color = `#e96656`;
        navToggleBars.style.color = `white`;
  } else {
    console.log(`collapse`);
    menuList.style.maxHeight = 0;
    navToggleBackground.style.color = `black`;
    navToggleBackground.classList.remove(`fa-square`);
    navToggleBackground.classList.add(`fa-square-o`);
    navToggleBars.style.color = `black`;
  }
}

navToggle.addEventListener(`click`, toggle);
