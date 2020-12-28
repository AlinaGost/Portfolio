$(function () {

    const worksSlider = $('[data-slider="slick"]');

    //******Filter******//
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
      event.preventDefault();

      let cat = $(this).data("filter");

      if (cat == "all") {
        $("[data-cat]").removeClass('hide');
      } else {
        $("[data-cat]").each(function () {
          let workCat = $(this).data("cat");

          if (workCat != cat) {
            $(this).addClass('hide');
          } else {
            $(this).removeClass('hide');
          }
          });
        }
      });

    //******Modal******//
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function (event) {
      event.preventDefault();
      let $this = $(this);
      let modalId = $this.data("modal");

      $(modalId).addClass("show");
      $("body").addClass("no-scroll");

      setTimeout(function () {
        $(modalId).find(".modal__dialog").css({
          transform:"rotateX(0)"
        });
      }, 300);

      worksSlider.slick('setPosition');
    });

    modalClose.on("click", function (event) {
      event.preventDefault();
      let $this = $(this);
      let modalParents = $this.parents(".modal");

      modalParents.find(".modal__dialog").css({
        transform:"rotateX(90deg)"
      });

      setTimeout(function () {
        modalParents.removeClass("show");
        $("body").removeClass("no-scroll");
      }, 300);
    });

    $(".modal").on("click", function (event) {
      let $this = $(this);

      $this.find(".modal__dialog").css({
        transform:"rotateX(90deg)"
      });

      setTimeout(function () {
        $this.removeClass("show");
        $("body").removeClass("no-scroll");
      }, 300);
    });

    $(".modal__dialog").on("click", function (event) {
      event.stopPropagation();
    });


    //******Slider: https://kenwheeler.github.io/slick/******//
     worksSlider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      dots: true,
    });

    $(".slickPrev").on("click", function (event) {
      event.preventDefault();

      let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
      currentSlider.slick("slickPrev");
    });

    $(".slickNext").on("click", function (event) {
      event.preventDefault();

      let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
      currentSlider.slick("slickNext");
    });


  //******Mobile nav******//
    const navToggle= $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function (event) {
      event.preventDefault();

      nav.toggleClass("show");
    });


  //*******Fixed Header********//

  var header = $("#header");
  var introH = $("#intro").innerHeight();
  var scrollOffset = $(window).scrollTop();

  /*Fixed Header*/
  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else header.removeClass("fixed");
  };


  //******Smooth scroll******//
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this);
    var blockId = $this.data("scroll");
    var blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 1000);
  })

});
