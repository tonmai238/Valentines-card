$('.js-open-envelope').on('click', function (event) {
  event.preventDefault();
  var $self = $(this);
  $self.find('.envelope').removeClass('tossing').addClass('open');
  $self.find('.heart use').attr("xlink:href", "#icon-heart");
  $self.find('.envelope__card').addClass('open');
});

// เมื่อคลิกปุ่ม "Go to Next Page"
$('#nextPage2').on('click', function () {
  window.location.href = "Page2.html"; // เปลี่ยนเป็น URL ของหน้าถัดไป
});

$(document).ready(function () {
  $('#nextPage3').on('click', function () {
      window.location.href = "Page3.html"; // เปลี่ยนเป็น URL ที่ต้องการ
  });
});

