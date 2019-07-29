function initTabs () {

  const panelSwitcher =  document.querySelectorAll('.about-us-tabs__panel-switcher')
  const tabsContent   =  document.querySelectorAll('.about-us-tabs__content')
  let currentTab      =  null;

  panelSwitcher.forEach( function(item) {
    item.addEventListener( 'click',  selectPanelSwitcher)
  })

  function selectPanelSwitcher () {
    panelSwitcher.forEach( function(item) {
      item.classList.remove('about-us-tabs__panel-switcher--is-active')
    });
    this.classList.add('about-us-tabs__panel-switcher--is-active')
    currentTab = this.getAttribute('data-tab-name')
    selectTabContent( currentTab )
  }

  function selectTabContent ( currentTab ) {
    tabsContent.forEach( function(item) {
      if ( item.classList.contains(currentTab) ) {
        item.classList.add('about-us-tabs__content--is-active')
      } else {
        item.classList.remove('about-us-tabs__content--is-active')
      }
    })
  }

}

initTabs()
