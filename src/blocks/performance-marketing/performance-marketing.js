import Glide from '@glidejs/glide'


const classicSliders = document.querySelectorAll('#classic-slider');

for ( let i = 0; i < classicSliders.length; i++) {

  var glide = new Glide(classicSliders[i], {
    type: 'carousel',
    perView: 4,
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        autoplay: 4000,
        animationDuration: 1000,
        perView: 1
      }
    }
  })

  glide.mount()
}





