
// Animacja załadowania strony głównej
$( document ).ready(function() {
  $(".container").fadeIn(1500);
});


// Animacja przesuwania na stronie głównej
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});
left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});
right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});
right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});


// Wyświetlenie informacji o firmie
function displayAbout() {
  $(".container").fadeOut(1500, function() {
    window.location.href = 'about.html';
  });
}

// Wyświetlenie informacji o ofercie
function displayOffer() {
  $(".container").fadeOut(1500, function() {
    window.location.href = 'offer.html';
  });
}


