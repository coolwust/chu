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
      }, 15000);
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

document.addEventListener('DOMContentLoaded', function () {
  var endtime = '2016-02-27T16:00:00.000-05:00';
  var interval;
  function getRemainingTime(deadline) {
    var remaining = Math.floor((Date.parse(deadline) - Date.parse(new Date())) / 1000);
    var seconds   = Math.floor(remaining % 60);
    var minutes   = Math.floor(remaining / 60 % 60);
    var hours     = Math.floor(remaining / (60 * 60) % 60);
    var days      = Math.floor(remaining / (60 * 60 * 24));
    return {
      remaining: remaining,
      days:      days,
      hours:     hours,
      minutes:   minutes,
      seconds:   seconds
    }
  }
  function update(){
    var days    = document.querySelector('.countdown-days .countdown-value');
    var hours   = document.querySelector('.countdown-hours .countdown-value');
    var minutes = document.querySelector('.countdown-minutes .countdown-value');
    var seconds = document.querySelector('.countdown-seconds .countdown-value');
    var t = getRemainingTime(endtime);
    if (days.innerHTML !== t.days) {
      days.innerHTML = t.days;
    }
    if (hours.innerHTML !== t.hours) {
      hours.innerHTML = t.hours;
    }
    if (minutes.innerHTML !== t.minutes) {
      minutes.innerHTML = t.minutes;
    }
    if (seconds.innerHTML !== t.seconds) {
      seconds.innerHTML = t.seconds;
    }
    if(t.remaining === 0) {
      clearInterval(interval);
    }
  }
  function initialize() {
    interval = setInterval(update, 1000);
  }
  initialize();
  update();
});
