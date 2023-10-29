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
navigation_close_on.onclick = function () {
  $('#navigation').style.display = 'none'
}
var on_tabmenu = $('.tab-menu__checkbox')
on_tabmenu.onclick = function () {
  $('#navigation').style.display = 'block'
}


// thanh menu dính trên màn hình
window.onscroll = function () {
  myFunction();
};

// 
let toolbar = document.getElementById("navigation");
let toolbreadcrumb = document.getElementById('breadcrumb');
let toolbclink = document.querySelectorAll('.breadcrumb-link');
let distance = 0; // Get the initial offset of the toolbar from the top of the document

function myFunction() {
  if (window.matchMedia("(min-width: 740px)").matches) {
    if (window.pageYOffset > distance) {
      toolbar.style.position = "fixed";
      toolbar.style.animation = "menuMobileSlip 0.4s ease";
      toolbar.style.top = '0';
      toolbar.style.zIndex = '4';
      toolbreadcrumb.style.borderTop = "2px solid #ccc";

      toolbreadcrumb.style.position = "fixed";
      toolbreadcrumb.style.animation = "menuMobileSlip 0.4s ease";
      toolbreadcrumb.style.top = '58px';
      toolbreadcrumb.style.zIndex = '4';
      toolbreadcrumb.style.backgroundColor = "var(--top_header-color)";

      toolbclink.forEach(function (value, index) {
        value.style.color = "#fff";
      });
    } else {
      toolbar.style.position = "relative";
      toolbar.style.top = distance + "px";
      toolbar.style.zIndex = '2';
      toolbreadcrumb.style.borderTop = "none";

      toolbreadcrumb.style.position = "relative";
      toolbreadcrumb.style.top = distance + "px";
      toolbreadcrumb.style.zIndex = '2';

      toolbreadcrumb.style.backgroundColor = "#fff";
      toolbclink.forEach(function (value, index) {
        value.style.color = "#20090950";
        value.style.zIndex = '2';
      });
    }
  }
}

// Attach the myFunction to the scroll event listener
window.addEventListener("scroll", myFunction);

