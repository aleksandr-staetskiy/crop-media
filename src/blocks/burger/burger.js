/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function(){

  var burgers = document.querySelectorAll('.burger');

  for (var i = 0; i < burgers.length; i++) {
    var burger = burgers[i];
    burger.addEventListener('click', showBurgerTarget);
  }

  function showBurgerTarget() {
    var targetId = this.getAttribute('data-target-id');
    var targetClassToggle = this.getAttribute('data-target-class-toggle');
    if (targetId && targetClassToggle) {
      this.classList.toggle('burger--close');
      openMobileMenu();
    }
  }

  const openMobileMenu = () => {
    const burgerOverlay = document.querySelector('.burger-overlay');
    burgerOverlay.classList.toggle('burger-overlay--active')
}

const burgerServices = document.getElementById('burger-services');
const burgerSocials = document.getElementById('burger-intouch');
burgerServices.addEventListener( 'click', addActiveItem)
burgerSocials.addEventListener( 'click', addActiveItem)

function addActiveItem() {
  this.nextElementSibling.classList.toggle('active')
}

});
