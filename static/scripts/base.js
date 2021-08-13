let navOpened = false

function toggleNav() {
  if(!navOpened) {
    openNav();
  } else closeNav();
}

function openNav() {
  navOpened = true;
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  navOpened = false;
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


function openLink(link) {
  closeNav();
  window.location.hash = link.split("#")[1];
}
