function initAccordion() {
  const accordionItem = document.querySelectorAll('.accordion__item');

  for (let i = 0; i < accordionItem.length; i++) {
    accordionItem[i].addEventListener('click', function () {
      this.firstElementChild.classList.toggle('shown');
    })
  }
}
initAccordion();

function orderedAccordion() {

  const orderedAccordionTitle   =  document.querySelectorAll('.ordered-accordion__title');
  // const orderedAccordionContent =  document.querySelectorAll('.ordered-accordion__content');

  for (  let i = 0; i < orderedAccordionTitle.length; i++) {
    orderedAccordionTitle[i].addEventListener( 'click', function() {

      if ( !(this.classList.contains('active')) ) {
        for ( let i = 0; i < orderedAccordionTitle.length; i++) {
          orderedAccordionTitle[i].classList.remove('active');
        }
        this.classList.add('active');
      }
    })
  }
}

orderedAccordion();




