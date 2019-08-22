import Glide from '@glidejs/glide'

const ccSlider = document.querySelector('#cases-slider');

if (ccSlider) {
  let glide = new Glide(ccSlider, {
    type: 'carousel',
    perView: 1,
  })

  glide.mount()
}
