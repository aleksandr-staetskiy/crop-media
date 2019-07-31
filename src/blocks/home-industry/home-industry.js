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
        perView: 1
      }
    }
  })

  glide.mount()
}


function initDoubleSlider() {
  const DOUBLE_SLIDER = document.querySelector('#double-slider')

  if (DOUBLE_SLIDER) {
    var glide = new Glide(DOUBLE_SLIDER, {
      type: 'carousel',
      perView: 2,
      breakpoints: {
        900: {
          perView: 2
        },
        700: {
          perView: 1
        },
        480: {
          perView: 1
        }
      }
    })

    glide.mount()
  } else {
    console.log( " dosen't work" )
  }

};

initDoubleSlider();

