let showSearch = false;
const navLeftElement = document.getElementById('nav-left');
const navRightItem = document.getElementsByClassName('nav-right-item');
const seachBarContainer = document.getElementById('search-bar-container');
const logoElement = document.getElementById('logo');
const menuTogglerIcon = document.getElementById('menu-toggler-icon');
const allMsElement = document.getElementById('all-ms');


function searchToggler() {
  showSearch = !showSearch;
    if (showSearch === true && screen.width >= 861) {
      navLeftElement.style.display = 'none';
      for (var i = 0; i < navRightItem.length; i++) {
        navRightItem[i].style.display = 'none';
      }
      seachBarContainer.style.display = 'block';
      menuTogglerIcon.style.display = 'none';
      logoElement.style.display = 'flex';
  } else if (showSearch === true && screen.width < 861) {
      navLeftElement.style.display = 'none';
      for (var i = 0; i < navRightItem.length; i++) {
        navRightItem[i].style.display = 'none';
      }
      logoElement.style.display = 'none';
      menuTogglerIcon.style.display = 'none';
      seachBarContainer.style.display = 'block';
  } else if (showSearch === false && screen.width >= 861){
      navLeftElement.style.display = 'flex';
      for (var i = 0; i < navRightItem.length; i++) {
        navRightItem[i].style.display = 'flex';
      }
      seachBarContainer.style.display = 'none';
      menuTogglerIcon.style.display =  'none';
      logoElement.style.display = 'flex';
  } else if (showSearch === false && screen.width < 861){
      for (var i = 0; i < navRightItem.length; i++) {
        navRightItem[i].style.display = 'flex';
      }

      logoElement.style.display = 'flex';
      seachBarContainer.style.display = 'none';
      menuTogglerIcon.style.display = 'flex';
      allMsElement.style.display = 'none';
    }
}

window.addEventListener('resize', function() {
  if (screen.width < 861 && showSearch === true) {
    logoElement.style.display = 'none';
  } else if (screen.width < 861 && showSearch === false) {
    navLeftElement.style.display = 'none';
    allMsElement.style.display = 'none';
    menuTogglerIcon.style.display = 'flex';
  } else if (screen. width >=861 && showSearch === false) {
    navLeftElement.style.display = 'flex';
    menuTogglerIcon.style.display = 'none';
  }
})







