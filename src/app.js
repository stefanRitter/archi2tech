(function () {
  'use strict';
  $('body').backstretch('/background.jpg', {fade: 2000});
  
  var startDate = new Date(2014, 8, 1),
      timeLeft = startDate.getTime() - (new Date()).getTime(),
      daysLeft = Math.ceil(timeLeft/(24 * 60 * 60 * 1000));

  $('.daysleft').text(daysLeft + ' days');

  $(document).on('click touch', '.content h2', function (e) {
    var section = $(e.currentTarget).parent().parent(),
        id = section.attr('id');

    if (section.hasClass('open')) {
      section.removeClass('open');
      e.preventDefault();
    } else {
      $('.content').removeClass('open');
      section.addClass('open');
      ga('send', 'event', 'section', id);
    }
  });
}());
