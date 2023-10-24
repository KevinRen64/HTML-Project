const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleIndicators'))
const controller = document.getElementById('playController')
let currentSlide = 1
let autoPlay
let pause = false
highlight(currentSlide)
startAutoPlay()

function startAutoPlay() {
  clearInterval(autoPlay);
 
  autoPlay = setInterval(()=>{
    currentSlide ===1 ? currentSlide = 2 : currentSlide = 1
    carousel.next()
    currentSlide ===1 ? currentSlide = 2 : currentSlide = 1
    control()
  },5000)
}


function toSlide1() {
  currentSlide = 1
  highlight(1)
  deHighlight(2)
}

function toSlide2() {
  currentSlide = 2
  highlight(2)
  deHighlight(1)
}


function highlight(slideNumber) {
  document.getElementById(`indicator-${slideNumber}`).classList.replace('bi-circle', 'bi-circle-fill')
}

function deHighlight(slideNumber) {
  document.getElementById(`indicator-${slideNumber}`).classList.replace('bi-circle-fill', 'bi-circle')
}

function control() {
  if (currentSlide === 1) {
    currentSlide = 2
    highlight(2)
    deHighlight(1)
    return
  } 
  if (currentSlide === 2) {
    currentSlide = 1
    highlight(1)
    deHighlight(2)
    return
  }
}

function playControl() {
  pause = !pause
  pause && pauseCarousel()
  !pause && playCarousel()
}

function pauseCarousel() {
  clearInterval(autoPlay)
  controller.classList.replace('bi-pause-circle', 'bi-play-circle')
}

function playCarousel() {
  startAutoPlay();
  controller.classList.replace('bi-play-circle', 'bi-pause-circle')
}