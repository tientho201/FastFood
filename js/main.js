
$('.navigation-nav__link-HTNH').onclick = function(){
    $('#slider').style.display = 'none';
    $('#contact').style.display = 'block'
    $('.navigation-nav__link.active').classList.remove('active') 
    this.classList.add('active')
}

$('.navigation-nav__link-home').onclick = function(){
    $('#slider').style.display = 'block';
    $('#contact').style.display = 'none'
    $('.navigation-nav__link.active').classList.remove('active') 
    this.classList.add('active')
}