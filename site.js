$(function() {
  $('.thumb').click(function(e) {
    image = $('#main-image');
    image_name = e.currentTarget.src.split('/').pop();
    $('#main-image').attr('src', '/images/portfolio/' + image_name);
    console.log(image_name);
  });
});
