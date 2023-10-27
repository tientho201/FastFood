// click thêm active
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navi_links = $$('.navigation-nav__link');

navi_links.forEach(function (navi_link, index) {
  navi_link.onclick = function () {
    $('.navigation-nav__link.active').classList.remove('active');
    this.classList.add('active')
  }
})

// 
var navigation_close_on = $('.navigation-menu__close');
navigation_close_on.onclick = function(){
  $('#navigation').style.display = 'none'
}
var on_tabmenu = $('.tab-menu__checkbox')
on_tabmenu.onclick = function(){
  $('#navigation').style.display = 'block'
}


// thanh menu dính trên màn hình
window.onscroll = function () {
  myFunction();
};

// 
var toolbar = document.getElementById("navigation");
var distance = 0;

function myFunction() {
  if (window.pageYOffset > distance) {
    toolbar.style.position = "fixed";
    toolbar.style.animation = "menuMobileSlip 0.4s ease";
    toolbar.style.top = '0';
    toolbar.style.zIndex = '4';
  } else {
    toolbar.style.position = "relative";
    toolbar.style.top = distance + "px";
    toolbar.style.zIndex = '2';
  }
}
