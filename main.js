/*abre e fecha o icone de menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clicar algum item do menu, fechar mo menu*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Mudar o header da página quando der o scroll*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que altura do header
    header.classList.add('scroll')
  } else {
    //menor que altura do header
    header.classList.remove('scroll')
  }
}

/* SWIPER */

$(document).ready(function () {
  $('.testiSlide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  })
})

/* SCROLLREVEAL - mostrar elemento ao fazer scroll*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 550,
  reset: true
})

scrollReveal.reveal(
  '#home .image, #home .text, #about .image, #about ., #services header, #services .card, #results header, #results .carousel, #testimonials header, #testimonials .testimonials, #contact .text, #contact .link',
  { interval: 50 }
)

/* SETA back-to-top*/
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    // scroll é maior que altura do header
    backToTopButton.classList.add('show')
  } else {
    //menor que altura do header
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* when scroll*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
