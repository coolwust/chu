'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var current  = 0;
  var titles   = document.querySelectorAll('.slide li');
  var images   = document.querySelectorAll('.slide figure');
  var triangle = titles[current].querySelector('.slide-triangle');
  function change(next) {
    if (current === next) return;
    titles[current].removeChild(triangle);
    titles[current].classList.remove('slide-active-title');
    images[current].classList.remove('slide-active-image');
    titles[next].classList.add('slide-active-title');
    images[next].classList.add('slide-active-image');
    titles[next].appendChild(triangle);
    current = next;
  }
  [].forEach.call(titles, function (title, next) {
    title.addEventListener('click', function () {
      interval = clearInterval(interval);
      change(next);
    });
  });
  var interval = window.setInterval(function () {
    var next = current === 2 ? 0 : current + 1;
    change(next);
  }, 15000);
});
