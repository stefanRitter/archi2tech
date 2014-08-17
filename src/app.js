(function () {
  'use strict';
  $('body').backstretch("/background.jpg", {fade: 2000});
  
  var startDate = new Date(2014, 8, 1),
      timeLeft = startDate.getTime() - (new Date()).getTime(),
      daysLeft = Math.ceil(timeLeft/(24 * 60 * 60 * 1000));

  $('.daysleft').text(daysLeft + ' days');

  $(document).on('click touch', '.content', function (e) {
    var section = $(e.currentTarget),
        defaultHeight = '30px';

    console.log(section.css('height'));
    if (section.css('height') === defaultHeight) {
      $('.content').css({height: defaultHeight});
      section.css({height: 'auto'});
    } else {
      section.css({height: defaultHeight});
    }
  });
}());
