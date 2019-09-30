// const ready = require('./utils/documentReady.js');

// ready(function(){
//   console.log('DOM героически построен!');
// });

// const $ = require('jquery');



window.onscroll = function showHeader() {
  const pageHeader = document.querySelector('.page-header');

  if (window.pageYOffset > 100) {
    pageHeader.classList.add('page-header--fixed');
  } else {
    pageHeader.classList.remove('page-header--fixed');
  }

}
