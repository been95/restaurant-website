'use strict'

const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})

window.addEventListener('scroll', function() {
    var top = window.scrollY 
                || window.pageXOffset 
                || document.documentElement.scrollTop 
                || document.body.scrollTop;
                
    if(top > 50) {
        fixedNav.classList.add('active');
    } else {
        fixedNav.classList.remove('active');
    }
})


/*슬라이드*/ 

new Swiper('.premium .swiper-container',{
  direction:'horizontal',
  spaceBetween:30,
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
})