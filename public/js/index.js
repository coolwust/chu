'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var current  = 0;
  var titles   = document.querySelectorAll('.slide li');
  var images   = document.querySelectorAll('.slide figure');
  var triangle = document.querySelector('.slide-triangle');
  var play     = document.querySelector('.slide div i:first-child');
  var pause    = document.querySelector('.slide div i:last-child');
  var interval;
  function change(next) {
    if (current === next) return;
    titles[current].removeChild(triangle);
    titles[current].classList.remove('slide-active-button');
    images[current].classList.remove('slide-active-image');
    titles[next].classList.add('slide-active-button');
    images[next].classList.add('slide-active-image');
    titles[next].appendChild(triangle);
    current = next;
  }
  function control(on) {
    if (on) {
      interval = window.setInterval(function () {
        change(current === 2 ? 0 : current + 1);
      }, 10000);
      play.classList.add('slide-active-button');
      pause.classList.remove('slide-active-button');
    } else {
      interval = clearInterval(interval);
      pause.classList.add('slide-active-button');
      play.classList.remove('slide-active-button');
    }
  }
  [].forEach.call(titles, function (title, next) {
    title.addEventListener('click', function () {
      control(false);
      change(next);
    });
  });
  pause.addEventListener('click', function () {
    control(false);
  });
  play.addEventListener('click', function () {
    control(true);
    window.setTimeout(function () {
        change(current === 2 ? 0 : current + 1);
    }, 2000);
  });
  control(true);
});
