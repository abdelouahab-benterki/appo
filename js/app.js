// Start nav menu
let navBtn = document.querySelector(".nav-btn");
let menu = document.querySelector(".colapse");
let header = document.querySelector("header");

navBtn.addEventListener("click", function () {
  menu.classList.toggle("show-menu");
  this.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  menu.classList.remove("show-menu");
  navBtn.classList.remove("active");
});
// End nav menu

// Start fixed nav

window.addEventListener("scroll", function () {
  if (window.scrollY >= header.clientHeight) {
    header.classList.add("fixed-nav");
  } else {
    header.classList.remove("fixed-nav");
  }
});

// End fixed nav

// Start video

let play = document.querySelector("#video");
let closeVideo = document.querySelector(".video .close");
let video = document.querySelector(".video");
let videoTransition = parseInt(
  window.getComputedStyle(video).transitionDuration.slice(0, -1) * 1000
);

play.addEventListener("click", function () {
  video.style.display = "flex";
  window.setTimeout(function () {
    video.style.opacity = "1";
  }, 1);
});

closeVideo.addEventListener("click", function () {
  video.style.opacity = "0";
  window.setTimeout(function () {
    video.style.display = "none";
  }, 400);
});

// End video

// Start Back to top btn

let backToTopBtn = document.querySelector("#back-to-top");

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// End Back to top btn
