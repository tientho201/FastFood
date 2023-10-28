let slideIndex = 1;
showSlides(slideIndex);
showSlidesAuto();
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function showSlidesAuto() {
    let j;
    let slidesAuto = document.getElementsByClassName("mySlides");
    for (j = 0; j < slidesAuto.length; j++) {
        slidesAuto[j].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slidesAuto.length) {slideIndex = 1}    
    slidesAuto[slideIndex-1].style.display = "block";  
   
    setTimeout(showSlidesAuto, 4000); // Change image every 4 seconds
  }