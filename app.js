
// ------------------------- Work Slider ------------------------------ //

const btnNext = document.querySelector('.next');
const btnPrevious = document.querySelector('.previous');

const slidesContainer = document.querySelector('.work__slider--slides');
const numberOfSlides = slidesContainer.querySelectorAll('li').length; // 5
const widthOfOneSlide = slidesContainer.offsetWidth;

btnNext.addEventListener('click', () => {
    slidesContainer.scrollLeft += widthOfOneSlide;
    const widthOfSlidesContainer = slidesContainer.scrollLeft; 
    
   if (widthOfSlidesContainer == widthOfOneSlide * (numberOfSlides - 1)) {
       slidesContainer.scrollLeft = 0;
   } 
})


btnPrevious.addEventListener('click', () => {
    slidesContainer.scrollLeft -= widthOfOneSlide;
})

// ------------------------- Scroll To Top Button ------------------------------ //

const scrollBtn = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 400)
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

scrollBtn.addEventListener('click', scrollToTop);