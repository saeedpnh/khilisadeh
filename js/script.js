$(function () {

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

  // wow reveal when the user scrolls
  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
  })
  wow.init();


  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(document).on("click", "a.js-scroll-trigger", function (e) {
    var anchor = $(this);
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 50
        },
        1200,
        "easeInOutCirc"
      );
    e.preventDefault();
  });
  
})