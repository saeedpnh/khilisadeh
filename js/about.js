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

  // https://github.com/tigrr/circle-progress
  new CircleProgress('.circle-progress-html', {
    max: 100,
    value: 100,
    textFormat: function (value) {
      return value + '%'
    },
    animation: 'easeInCubic',
    animationDuration: 2500
  })

  new CircleProgress('.circle-progress-css', {
    max: 100,
    value: 95,
    textFormat: function (value) {
      return value + '%'
    },
    animation: 'easeInCubic',
    animationDuration: 2500
  });

  new CircleProgress('.circle-progress-js', {
    max: 100,
    value: 90,
    textFormat: function (value) {
      return value + '%'
    },
    animation: 'easeInCubic',
    animationDuration: 2500
  });

  new CircleProgress('.circle-progress-wp', {
    max: 100,
    value: 90,
    textFormat: function (value) {
      return value + '%'
    },
    animation: 'easeInCubic',
    animationDuration: 2500
  });

  new CircleProgress('.circle-progress-react', {
    max: 100,
    value: 30,
    textFormat: function (value) {
      return value + '%'
    },
    animation: 'easeInCubic',
    animationDuration: 2500
  });




  // hide collapse nav on click
  $('.navbar-nav > li > a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  })

  // // wow reveal when the user scrolls
  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
  })
  wow.init();


  // // jQuery for page scrolling feature - requires jQuery Easing plugin
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