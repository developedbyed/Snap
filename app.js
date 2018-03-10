var nav = document.querySelector("nav");
var fadeNav = document.querySelector(".introduction");
var banner1 = document.querySelector(".banner1");
var banner2 = document.querySelector(".banner2");

window.addEventListener("scroll", function() {
  //NAVBAR
  if (window.pageYOffset >= fadeNav.offsetTop) {
    nav.classList.add("sticky");
    document.body.style.marginTop = "10vh";
  } else {
    nav.classList.remove("sticky");
    document.body.style.marginTop = "0vh";
  }
  //BANNER ANIMATION

  var animateStart = window.pageYOffset + window.innerHeight / 1.5;
  if (animateStart >= banner1.offsetTop) {
    banner1.classList.add("active");
  }
  if (animateStart >= banner2.offsetTop) {
    banner2.classList.add("active");
  }
});

//SMOOTH SCROLL

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var currentPosition = window.pageYOffset || window.scrollY;
  var distance = targetPosition - currentPosition;
  var startTime = null;

  function loop(currentTime) {
    console.log(currentTime);
    if (startTime === null) startTime = currentTime;
    var elapsedTime = currentTime - startTime;
    var run = ease(elapsedTime, currentPosition, distance, duration);
    window.scrollTo(0, run);
    if (elapsedTime < duration) requestAnimationFrame(loop);

    function ease(t, b, c, d) {
      t /= d;
      return c * t * t * t + b;
    }
  }
  requestAnimationFrame(loop);
}
