document.addEventListener("DOMContentLoaded", (event) => {
  
  const modal = document.querySelector(".modal"),
      switchModal = () => modal.classList.toggle('modal--visible');


  document.body.addEventListener('click', ev => {
      const {target} = ev;
      if (target.matches('[data-toggle=modal], .modal__close')) {
          switchModal();
      } else if (!target.closest('.modal') && modal.classList.contains('modal--visible')) {
          switchModal();
      }
  });

  document.addEventListener('keydown', e => {
    e.keyCode === 27 && modal.classList.contains('modal--visible') ? switchModal() : false;
});
});

/* document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const wind = document.querySelector('.wind');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
    wind.classList.toggle('wind--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal)
  });

  closeBtn.addEventListener('click', switchModal);
  wind.addEventListener('click', switchModal);

}); */

/* var target = e.target;
  var its_menu = target == menu || menu.contains(target);
  var its_hamburger = target == hamburger;
  var menu_is_active = menu.classList.contains('active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
 */
$(document).ready(function () {
/*   var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      // window = $('.modal');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  window.on('click', function () {
    modal.toggleClass('modal--visible');
  }); */

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() +15 +bullets.width() +15)
  bullets.css('left', prev.width() +15)

  new WOW().init();

  $('.modal__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: "required"
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не больше 15 символов"
      },
      userPhone: "Номер телефона обязательно",
      userEmail: {
        required: " указать адрес электронной почты",
        email: "Введите в фомате: name@domain.com"
      }
    }

  });

  $('.control__form').validate({
    errorElement: "em",
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      policyCheckbox: "required"
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не больше 15 символов"
      },
      userPhone: "Номер телефона обязательно",
      policyCheckbox: ""
    }

  });
  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // compound rule
      userQuestion: "required",
      policyCheckbox: "required"
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух символов",
        maxlength: "Имя не больше 15 символов"
      },
      userPhone: "Номер телефона обязательно",
      userQuestion: {
        required: " задать вопрос",
      }
    }

  });
// маска для телефона
$('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7(___) __-__-___"})

});

/* $(document).ready(function () {
  var btnTop = $('.btn-top');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 350 ) {
      $(btnTop).fadeIn();
    }else {
      $(btnTop).fadeOut();
    }
  });

  $(btnTop).on('click', function () {
    $('html,body').animate({scrollTop:0}, 1000);
  });
}); */