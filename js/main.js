/* document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal)
  });

  closeBtn.addEventListener('click', switchModal);


  $(".modal").on('click', function (e) {
    if (e.target == this) $(".modal").fadeOut('fast');
})
}); */

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      window = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  /* window.on('click', function () {
    modal.toggleClass('modal--visible');
  }); */
});

$(document).ready(function () {
  var btnTop = $('.btn-top');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 150 ) {
      $(btnTop).fadeIn();
    }else {
      $(btnTop).fadeOut();
    }
  });

  $(btnTop).on('click', function () {
    $('html,body').animate({scrollTop:0}, 1000);
  });
});