function dropDownMenu() {

  var navs = document.getElementsByClassName("nav-link");

  if(navs[0].style.display !== 'flex'){
    for(const n of navs)
      n.style.display = 'flex';
  }else{
    for(const n of navs)
      n.removeAttribute("style");
  }
}