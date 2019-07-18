import Glide from '@glidejs/glide'

var glide = new Glide('#performance-marketing-slider', {
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
