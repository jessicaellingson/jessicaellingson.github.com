$(function() {
  $('.thumb').click(function(e) {
    e.preventDefault();
    image = $('#main-image');
    image_name = e.currentTarget.href.split('/').pop();
    $('#main-image').attr('src', '/images/portfolio/' + image_name);
  });
});
