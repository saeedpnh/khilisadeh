// navbar 
function navbar() {
  checkHeaderStatus()
  window.scroll(function () {
    checkHeaderStatus()
  })

  function checkHeaderStatus() {
    $(window).on('activate.bs.scrollspy', function () {
      let hash = $('.main-nav').find('a.active').attr('href');
      if (hash !== '#top-header') {
        $('header nav').addClass('inbody');
      } else {
        $('header nav').removeClass('inbody');
      }
    })
  }
}
navbar()

// export { navbar };