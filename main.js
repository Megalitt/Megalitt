//слайдер
const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//модалка
  $('.button').click(function(e) {
    e.preventDefault();
    $('.modal').fadeIn(800);
    $('html').addClass('no-scroll');
});

  $('.close-modal').click(function() {
    $('.modal').fadeOut(800);
    $('html').removeClass('no-scroll');
});


//запрос
$(document).ready(function () {
  $("#form").on('submit', function (){
    $.ajax({
      url: 'http://megali26.beget.tech/?',
      type: 'post',
      dataType: 'html',
      data: $(this).serialize(),
      success: function(data){
        $('#msg').html(data);
      }
    });
  });
 });
