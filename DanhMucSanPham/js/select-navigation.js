// click thêm active


const navi_links = document.querySelectorAll('.navigation-nav__link');

navi_links.forEach(function (navi_link, index) {
  navi_link.onclick = function () {
    document.querySelector('.navigation-nav__link.active').classList.remove('active');
    this.classList.add('active')
  }
})

// 
var navigation_close_on = document.querySelector('.navigation-menu__close');
navigation_close_on.onclick = function () {
  document.querySelector('#navigation').style.display = 'none'
}
var on_tabmenu = document.querySelector('.tab-menu__checkbox')
on_tabmenu.onclick = function () {
  document.querySelector('#navigation').style.display = 'block'
}


// thanh menu dính trên màn hình
window.onscroll = function () {
  myFunction();
};

// 
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let btn__prev = document.querySelector('.breadcrumb-btn__prev')
let btn__next = document.querySelector('.breadcrumb-btn__next')
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
        btn__prev.onmouseover = function(e){
          btn__prev.style.backgroundColor = "#fff";
          prev.style.color = "#000";
        }   
        btn__next.onmouseover = function(e){
          btn__next.style.backgroundColor = "#fff";
          next.style.color = "#000";
        }
        btn__prev.onmouseout = function(e){
          btn__prev.style.backgroundColor = "#3F2E3E";
          prev.style.color = "#fff";
        }   
        btn__next.onmouseout = function(e){
          btn__next.style.backgroundColor = "#3F2E3E";
          next.style.color = "#fff";
        }
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
      btn__prev.onmouseover = function(e){
        btn__prev.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        prev.style.color = "#fff";
      }   
      btn__next.onmouseover = function(e){
        btn__next.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        next.style.color = "#fff";

      }
      btn__prev.onmouseout = function(e){
        btn__prev.style.backgroundColor = "#fff";
        prev.style.color = "#000";

      }   
      btn__next.onmouseout = function(e){
        btn__next.style.backgroundColor = "#fff";
        next.style.color = "#000";
      }
    }
  }
}

// Attach the myFunction to the scroll event listener
window.addEventListener("scroll", myFunction);

