function initAccordion() {
  const accordionItem = document.querySelectorAll('.accordion__item');

  for (let i = 0; i < accordionItem.length; i++) {
    accordionItem[i].addEventListener('click', function () {
      this.firstElementChild.classList.toggle('shown');
    })
  }
}
initAccordion();



